import { searchArticles, snippet } from './site-search-engine.js';

let corpus;
function loadCorpus() {
  if (!corpus) corpus = fetch('/search-index.json').then(async response => {
    if (!response.ok) throw new Error('Search unavailable');
    const data = await response.json();
    if (data.version !== 1 || !Array.isArray(data.articles) || data.articles.some(article =>
      !/^\/posts\/(?!.*(?:\.\.|[?#]))[^/]+\/$/.test(article.url) ||
      ['title', 'summary', 'text', 'date'].some(key => typeof article[key] !== 'string'))) throw new Error('Invalid search index');
    return data.articles;
  }).catch(error => { corpus = undefined; throw error; });
  return corpus;
}

export function initializeSearch(root) {
  const form = root.querySelector('form'), input = root.querySelector('[data-search-query]');
  const results = root.querySelector('[data-search-results]'), status = root.querySelector('[data-search-status]');
  const retry = root.querySelector('[data-search-retry]');
  let sequence = 0;
  async function update() {
    const current = ++sequence, query = input.value.trim();
    results.replaceChildren();
    retry.hidden = true;
    if (!query) { status.textContent = 'Search titles, summaries and the full text of all published insights.'; return; }
    status.textContent = 'Searching…';
    try {
      const articles = await loadCorpus();
      if (current !== sequence) return;
      const matches = searchArticles(articles, query);
      status.textContent = matches.length ? `${matches.length} ${matches.length === 1 ? 'insight' : 'insights'} found${matches.length > 12 ? ' · showing the first 12' : ''}.` : 'No insights found. Try another word or a broader phrase.';
      for (const article of matches.slice(0, 12)) {
        const item = document.createElement('li'), link = document.createElement('a');
        link.href = article.url; link.textContent = article.title;
        const title = document.createElement('h3'); title.append(link);
        const text = document.createElement('p'); text.textContent = snippet(article, query);
        item.append(title, text); results.append(item);
      }
    } catch {
      if (current !== sequence) return;
      status.textContent = 'Search could not load. Please try again.';
      retry.hidden = false;
    }
  }
  input.addEventListener('input', update);
  form.addEventListener('submit', event => { event.preventDefault(); update(); });
  form.addEventListener('reset', () => { input.value = ''; update(); input.focus(); });
  retry.addEventListener('click', update);
  update();
}

document.querySelectorAll('[data-site-search]').forEach(initializeSearch);
