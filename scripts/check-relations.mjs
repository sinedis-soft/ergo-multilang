import { readFileSync } from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const dictDir = path.join(root, 'app', 'dictionaries');
const files = [
  'calculator.ts',
  'home.ts',
  'infoCompare.ts',
];

let failed = false;

for (const file of files) {
  const full = path.join(dictDir, file);
  const content = readFileSync(full, 'utf8');

  const locales = ['lt', 'en', 'uz', 'kg'];
  const missing = locales.filter((l) =>
    content.includes(`${l}: undefined as unknown as`)
  );

  if (missing.length) {
    failed = true;
    console.error(`❌ ${file}: missing locale links for ${missing.join(', ')}`);
  } else {
    console.log(`✅ ${file}: locale links are complete`);
  }
}

if (failed) {
  console.error('\nVertical/horizontal dictionary links check: FAILED');
  process.exit(1);
}

console.log('\nVertical/horizontal dictionary links check: OK');
