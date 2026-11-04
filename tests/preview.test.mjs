import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const root = 'dist-preview';
function walk(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap(entry =>
    entry.isDirectory() ? walk(join(dir, entry.name)) : [join(dir, entry.name)]);
}

test('preview build uses Eleventy directly, never production upload hooks', () => {
  const source = readFileSync('scripts/build-preview.mjs', 'utf8');
  assert.match(source, /@11ty\/eleventy\/cmd\.cjs/);
  assert.doesNotMatch(source, /sync-blob-assets|sync-private-book-assets|spawnSync\([^\n]*npm/);
});

test('built mirror preserves homepage source assets and excludes private output', { skip: !existsSync(root) }, () => {
  for (const path of ['drafts', 'private', 'api', 'images/drafts']) assert.equal(existsSync(join(root, path)), false, path);
  assert.equal(readFileSync(join(root, 'robots.txt'), 'utf8'), 'User-agent: *\nDisallow: /\n');
  assert.deepEqual(readFileSync(join(root, 'redesign.css')), readFileSync('src/static/redesign.css'));
  const html = walk(root).filter(path => path.endsWith('.html'));
  assert.ok(html.length > 100);
  for (const path of html) {
    const source = readFileSync(path, 'utf8');
    assert.match(source, /<meta name="robots" content="noindex, nofollow, noarchive">/, path);
    assert.doesNotMatch(source, /googletagmanager|gtag\(/, path);
  }
  assert.doesNotMatch(readFileSync(join(root, 'book-checkout.js'), 'utf8'), /fetch\(/);
});
