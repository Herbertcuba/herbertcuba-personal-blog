export function normalize(value) {
  return String(value).normalize('NFKD').replace(/\p{M}/gu, '').toLowerCase().match(/[\p{L}\p{N}]+/gu)?.join(' ') || '';
}

export function searchArticles(articles, query) {
  const phrase = normalize(query);
  const terms = [...new Set(phrase.split(' ').filter(Boolean))];
  if (!terms.length) return [];
  return articles.flatMap(article => {
    const title = normalize(article.title), summary = normalize(article.summary), text = normalize(article.text);
    if (!terms.every(term => `${title} ${summary} ${text}`.includes(term))) return [];
    const score = (title === phrase ? 100 : title.includes(phrase) ? 40 : 0)
      + terms.reduce((sum, term) => sum + (title.includes(term) ? 8 : 0) + (summary.includes(term) ? 3 : 0) + (text.includes(term) ? 1 : 0), 0);
    return [{ ...article, score }];
  }).sort((a, b) => b.score - a.score || b.date.localeCompare(a.date) || a.url.localeCompare(b.url));
}

export function snippet(article, query) {
  const source = article.text || article.summary;
  const first = normalize(query).split(' ').find(Boolean);
  const at = first ? source.toLowerCase().indexOf(first) : 0;
  const start = Math.max(0, at - 65);
  return `${start ? '…' : ''}${source.slice(start, start + 240).trim()}${source.length > start + 240 ? '…' : ''}`;
}
