import test from 'node:test';
import assert from 'node:assert/strict';
import { createSearchIndex, plainText } from '../scripts/search-index.mjs';
import { searchArticles, normalize, snippet } from '../src/static/site-search-engine.js';

const articles = [
  {url:'/posts/agentic-software/', title:'Agentic Software', summary:'New software', text:'Runtime judgment with bounded authority and zebras.', date:'2026-01-01'},
  {url:'/posts/other/', title:'Another topic', summary:'An example', text:'Agentic software can use many tools.', date:'2026-02-01'}
];
test('search gives exact title precedence over body and handles punctuation/case', () => {
  assert.equal(searchArticles(articles, 'AGENTIC, software!')[0].url, articles[0].url);
  assert.equal(normalize('JUDGMÉNT—runtime'), 'judgment runtime');
  assert.equal(searchArticles(articles, 'zebras')[0].url, articles[0].url);
  assert.deepEqual(searchArticles(articles, ''), []);
  assert.deepEqual(searchArticles(articles, 'absent-word'), []);
  assert.deepEqual(searchArticles(articles, '<img src=x onerror=alert(1)>'), []);
});
test('full-text snippets include body-only matches and remain plain strings', () => {
  const article = {...articles[0],text:'a '.repeat(300)+' zebras '+ 'b '.repeat(300)};
  assert.match(snippet(article,'zebras'), /zebras/);
  assert.ok(snippet(article,'zebras').length < 250);
  assert.equal(plainText('<p>A &amp; B &#8212; <b>agents</b></p>'), 'A & B — agents');
});
test('index has deterministic public-only source-built corpus digest', () => {
  const post = {url:'/posts/test/',data:{title:'Title',excerpt:'Summary'},templateContent:'<p>Complete article body &amp; evidence</p>',date:new Date('2026-01-01')};
  const index=JSON.parse(createSearchIndex([post,{...post,url:'/drafts/private/'},{...post,url:'/posts/draft/',data:{draft:true}}]));
  assert.equal(index.count,1);
  assert.equal(index.articles[0].text,'Complete article body & evidence');
  assert.match(index.digest,/^[a-f0-9]{64}$/);
  assert.equal(createSearchIndex([post]),createSearchIndex([post]));
});
