import { createHash } from 'node:crypto';
import { publicImageURL } from '../src/static/site-search-engine.js';

export function plainText(html) {
  const named = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ', rsquo: '’', lsquo: '‘', rdquo: '”', ldquo: '“', mdash: '—', ndash: '–', hellip: '…' };
  return String(html || '').replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, ' ').replace(/<[^>]+>/g, ' ')
    .replace(/&(#x[\da-f]+|#\d+|[a-z]+);/gi, (entity, code) => {
      if (code[0] !== '#') return named[code] || entity;
      const number = code[1].toLowerCase() === 'x' ? parseInt(code.slice(2), 16) : Number(code.slice(1));
      return number > 0 && number <= 0x10ffff ? String.fromCodePoint(number) : ' ';
    }).replace(/\s+/g, ' ').trim();
}

export function createSearchIndex(posts) {
  const articles = posts.filter(post => /^\/posts\/[^?#]+\/$/.test(post.url) && !post.data.draft)
    .map(post => ({ url: post.url, title: plainText(post.data.title), summary: plainText(post.data.excerpt),
      image: publicImageURL(post.data.featuredImage), text: plainText(post.templateContent), date: new Date(post.date).toISOString().slice(0, 10) }))
    .sort((a, b) => a.url.localeCompare(b.url));
  const digest = createHash('sha256').update(JSON.stringify(articles)).digest('hex');
  return JSON.stringify({ version: 1, count: articles.length, digest, articles });
}
