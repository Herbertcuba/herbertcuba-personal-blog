import { spawnSync } from 'node:child_process';
import { rm, writeFile } from 'node:fs/promises';

// Never call npm run build: its upload synchronizers belong to production.
await rm('dist-preview', { recursive: true, force: true });
const result = spawnSync(process.execPath, [
  'node_modules/@11ty/eleventy/cmd.cjs', '--config=eleventy.preview.js',
], { stdio: 'inherit' });
if (result.status !== 0) process.exit(result.status || 1);
for (const path of ['drafts', 'private', 'api', 'images/drafts']) {
  await rm(`dist-preview/${path}`, { recursive: true, force: true });
}
await writeFile('dist-preview/robots.txt', 'User-agent: *\nDisallow: /\n');
await writeFile('dist-preview/book-checkout.js', `// Preview only: preserve the real public design without purchase effects.
document.querySelectorAll('form').forEach(function (form) {
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    var error = form.querySelector('[role="alert"]');
    if (error) {
      error.hidden = false;
      error.textContent = 'Checkout is disabled on this private test site.';
    }
  });
});\n`);
console.log('[preview] Public production templates rendered; uploads, drafts, private files and checkout excluded.');
