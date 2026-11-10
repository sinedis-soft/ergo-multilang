import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { existsSync, readFileSync, mkdirSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import ts from 'typescript';
import { sitemapSources } from './sitemap-sources.mjs';

export function generateSitemapDates(root = process.cwd(), sources = sitemapSources) {
  const destination = path.join(root, 'app/lib/sitemapDates.json');
  const previous = existsSync(destination) ? JSON.parse(readFileSync(destination, 'utf8')) : {};
  const git = (...args) => execFileSync('git', ['--literal-pathspecs', '-C', root, ...args], {
    encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'], maxBuffer: 20 * 1024 * 1024,
  }).trim();
  let historyAvailable = false;
  try { historyAvailable = git('rev-parse', '--is-shallow-repository') === 'false'; } catch { /* Archives have no Git history. */ }
  const normalized = new Map();
  const normalize = (file, content) => {
    const key = createHash('sha256').update(file).update(content).digest('hex');
    if (!normalized.has(key)) {
      normalized.set(key, /\.[cm]?[jt]sx?$/.test(file)
        ? ts.transpileModule(content.toString('utf8'), { compilerOptions: {
          target: ts.ScriptTarget.ESNext, module: ts.ModuleKind.ESNext,
          jsx: ts.JsxEmit.Preserve, removeComments: true,
        }, fileName: file }).outputText
        : content);
    }
    return normalized.get(key);
  };
  const historical = new Map();
  const fileAt = (ref, file) => {
    const key = `${ref}:${file}`;
    if (!historical.has(key)) {
      let value = null;
      try { value = execFileSync('git', ['--literal-pathspecs', '-C', root, 'show', key], {
        stdio: ['ignore', 'pipe', 'pipe'], maxBuffer: 20 * 1024 * 1024,
      }); } catch { /* This source did not exist at this revision. */ }
      historical.set(key, value);
    }
    return historical.get(key);
  };
  const fingerprint = (files, ref) => {
    const hash = createHash('sha256');
    for (const file of files) {
      const absolute = path.join(root, file);
      const content = ref ? fileAt(ref, file) : (existsSync(absolute) ? readFileSync(absolute) : null);
      hash.update(file).update('\0');
      hash.update(content === null ? '<absent>' : normalize(file, content));
      hash.update('\0');
    }
    return hash.digest('hex');
  };
  const result = {};
  for (const [route, files] of Object.entries(sources)) {
    const sourceHash = fingerprint(files);
    const fallback = previous[route]?.sourceHash === sourceHash ? previous[route] : { sourceHash };
    if (!historyAvailable) { result[route] = fallback; continue; }
    // Uncommitted content has no honest commit timestamp yet.
    if (git('status', '--porcelain', '--untracked-files=all', '--', ...files)) {
      result[route] = fallback;
      continue;
    }
    const commits = git('log', '--first-parent', '--format=%H%x09%cI', 'HEAD', '--', ...files).split('\n').filter(Boolean);
    let found;
    for (const row of commits) {
      const [commit, lastModified] = row.split('\t');
      const parents = git('rev-list', '--parents', '-n', '1', commit).split(' ');
      const parent = parents[1];
      // Skip comment-only, formatting-only and type-only changes.
      if (!parent || fingerprint(files, commit) !== fingerprint(files, parent)) {
        if (!Number.isFinite(Date.parse(lastModified))) throw new Error(`Invalid commit date: ${commit}`);
        found = { sourceHash, lastModified, commit };
        break;
      }
    }
    result[route] = found || fallback;
  }
  mkdirSync(path.dirname(destination), { recursive: true });
  writeFileSync(destination, JSON.stringify(result, null, 2) + '\n');
  if (!historyAvailable) console.warn('Full Git history unavailable: preserving only matching verified sitemap dates.');
  console.log(`Sitemap dates: ${Object.values(result).filter((item) => item.lastModified).length}/${Object.keys(result).length} routes have verified dates.`);
  return result;
}

if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) generateSitemapDates();
