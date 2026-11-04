import assert from 'node:assert/strict';
import test from 'node:test';
import { mkdtemp, mkdir, writeFile, readFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { spawnSync } from 'node:child_process';
import { createSearchIndex } from '../scripts/search-index.mjs';

test('production blob pipeline retains safe search image paths and exact index digest', async () => {
  const root = await mkdtemp(join(tmpdir(), 'search-blob-'));
  try {
    await mkdir(join(root, '.cache'));
    await mkdir(join(root, 'dist'));
    const image = '/images/hero.webp';
    const target = 'https://assets.example/site-assets/images/hero.webp';
    const index = createSearchIndex([{url:'/posts/test/', data:{title:'Test',featuredImage:image},templateContent:'Body',date:new Date('2026-01-01')}]);
    await writeFile(join(root, '.cache/blob-assets.json'), JSON.stringify({mapping:{[image]:target}}));
    await writeFile(join(root, 'dist/search-index.json'), index);
    await writeFile(join(root, 'dist/index.html'), '<img src="'+image+'">');
    const run = spawnSync(process.execPath, [resolve('scripts/rewrite-blob-assets.mjs')], {cwd:root,encoding:'utf8'});
    assert.equal(run.status,0,run.stderr);
    assert.equal(await readFile(join(root,'dist/search-index.json'),'utf8'),index);
    assert.match(await readFile(join(root,'dist/index.html'),'utf8'),/https:\/\/assets\.example/);
    const config=JSON.parse(await readFile('vercel.json','utf8'));
    assert.ok(config.rewrites.some(rule=>rule.source==='/images/:path*'));
  } finally { await rm(root,{recursive:true,force:true}); }
});
