import test from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, cpSync, rmSync } from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { generateSitemapDates } from './generate-sitemap-dates.mjs';

const sources = { '': ['app/shared.ts', 'app/home.ts'], '/about': ['app/shared.ts', 'app/about.ts'] };
function fixture(t) {
  const root = mkdtempSync(path.join(os.tmpdir(), 'sitemap-history-'));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  const git = (...args) => execFileSync('git', ['-C', root, ...args], { stdio: 'pipe' });
  git('init'); git('config', 'user.name', 'Sitemap test'); git('config', 'user.email', 'sitemap@example.invalid');
  mkdirSync(path.join(root, 'app'));
  for (const name of ['shared', 'home', 'about']) writeFileSync(path.join(root, `app/${name}.ts`), `export const value = '${name}';\n`);
  const commit = (day) => {
    git('add', '.');
    execFileSync('git', ['-C', root, 'commit', '-m', `Change ${day}`], { stdio: 'pipe', env: {
      ...process.env, GIT_AUTHOR_DATE: `2026-01-${day}T09:00:00Z`, GIT_COMMITTER_DATE: `2026-01-${day}T09:00:00Z`,
    } });
  };
  commit('01');
  return { root, git, commit, write: (file, text) => writeFileSync(path.join(root, file), text) };
}

test('route dependencies, unrelated commits, shared updates and semantic filtering', (t) => {
  const { root, commit, write } = fixture(t);
  write('app/home.ts', 'export const value = "new home";\n'); commit('02');
  write('app/api.ts', 'export const value = "not a public page";\n'); commit('03');
  let dates = generateSitemapDates(root, sources);
  assert.equal(new Date(dates[''].lastModified).toISOString(), '2026-01-02T09:00:00.000Z');
  assert.equal(new Date(dates['/about'].lastModified).toISOString(), '2026-01-01T09:00:00.000Z');
  write('app/shared.ts', 'export const value = "new shared content";\n'); commit('04');
  dates = generateSitemapDates(root, sources);
  assert.equal(new Date(dates[''].lastModified).toISOString(), '2026-01-04T09:00:00.000Z');
  assert.equal(dates['/about'].lastModified, dates[''].lastModified);
  write('app/shared.ts', '// Cosmetic comment\nexport   const value = "new shared content";\n'); commit('05');
  write('app/shared.ts', '// Cosmetic comment\nexport const value: string = "new shared content";\n'); commit('06');
  const filtered = generateSitemapDates(root, sources);
  assert.deepEqual(filtered, dates);
  const first = readFileSync(path.join(root, 'app/lib/sitemapDates.json'), 'utf8');
  generateSitemapDates(root, sources);
  assert.equal(readFileSync(path.join(root, 'app/lib/sitemapDates.json'), 'utf8'), first);
  write('app/about.ts', 'export const value = "uncommitted content";\n');
  const dirty = generateSitemapDates(root, sources);
  assert.equal(dirty['/about'].lastModified, undefined);
  assert.equal(dirty[''].lastModified, dates[''].lastModified);
});

test('archives and shallow clones preserve only verified matching snapshots', (t) => {
  const { root, git } = fixture(t);
  const verified = generateSitemapDates(root, sources);
  git('add', 'app/lib/sitemapDates.json');
  execFileSync('git', ['-C', root, 'commit', '-m', 'Save verified snapshot'], { stdio: 'pipe' });
  const archive = mkdtempSync(path.join(os.tmpdir(), 'sitemap-archive-'));
  const shallow = mkdtempSync(path.join(os.tmpdir(), 'sitemap-shallow-'));
  t.after(() => { rmSync(archive, { recursive: true, force: true }); rmSync(shallow, { recursive: true, force: true }); });
  cpSync(path.join(root, 'app'), path.join(archive, 'app'), { recursive: true });
  assert.deepEqual(generateSitemapDates(archive, sources), verified);
  writeFileSync(path.join(archive, 'app/about.ts'), 'export const value = "changed without Git";\n');
  assert.equal(generateSitemapDates(archive, sources)['/about'].lastModified, undefined);
  execFileSync('git', ['clone', '--depth=1', `file://${root}`, shallow], { stdio: 'pipe' });
  assert.deepEqual(generateSitemapDates(shallow, sources), verified);
});

test('merged content uses the date it entered the main branch', (t) => {
  const { root, git, commit, write } = fixture(t);
  const main = git('branch', '--show-current').toString().trim();
  git('checkout', '-b', 'content-change');
  write('app/home.ts', 'export const value = "content on a branch";\n'); commit('02');
  git('checkout', main);
  write('notes.txt', 'Unrelated main-branch work\n'); commit('03');
  execFileSync('git', ['-C', root, 'merge', '--no-ff', 'content-change', '-m', 'Publish content'], { stdio: 'pipe', env: {
    ...process.env, GIT_AUTHOR_DATE: '2026-01-04T09:00:00Z', GIT_COMMITTER_DATE: '2026-01-04T09:00:00Z',
  } });
  const dates = generateSitemapDates(root, sources);
  assert.equal(new Date(dates[''].lastModified).toISOString(), '2026-01-04T09:00:00.000Z');
  assert.equal(new Date(dates['/about'].lastModified).toISOString(), '2026-01-01T09:00:00.000Z');
});
