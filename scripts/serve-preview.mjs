import { createServer } from 'node:http';
import { readFile, realpath, stat } from 'node:fs/promises';
import { extname, resolve, sep } from 'node:path';

const root = await realpath(resolve('dist-preview'));
const port = Number(process.env.PREVIEW_PORT || 4190);
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.json': 'application/json', '.svg': 'image/svg+xml', '.woff2': 'font/woff2', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.png': 'image/png', '.webp': 'image/webp', '.txt': 'text/plain', '.xml': 'application/xml', '.pdf': 'application/pdf' };
createServer(async (request, response) => {
  response.setHeader('X-Robots-Tag', 'noindex, nofollow, noarchive');
  response.setHeader('Content-Security-Policy', "connect-src 'none'; form-action 'none'; object-src 'none'; frame-ancestors 'self'");
  response.setHeader('X-Content-Type-Options', 'nosniff');
  response.setHeader('Cache-Control', 'no-store');
  if (!['GET', 'HEAD'].includes(request.method)) {
    response.writeHead(405, { Allow: 'GET, HEAD' }).end();
    return;
  }
  try {
    const pathname = decodeURIComponent(new URL(request.url, 'http://preview.local').pathname);
    if (/(^|\/)(\.|drafts|private|api)(\/|$)/.test(pathname) || /(^|\/)\.[^/]/.test(pathname)) throw new Error('Not public');
    let file = resolve(root, `.${pathname}`);
    if (file !== root && !file.startsWith(root + sep)) throw new Error('Outside root');
    if ((await stat(file)).isDirectory()) file = resolve(file, 'index.html');
    file = await realpath(file);
    if (!file.startsWith(root + sep)) throw new Error('Outside root');
    const body = await readFile(file);
    response.writeHead(200, { 'Content-Type': types[extname(file)] || 'application/octet-stream' });
    response.end(request.method === 'HEAD' ? undefined : body);
  } catch {
    response.writeHead(404, { 'Content-Type': 'text/plain' }).end('Not found');
  }
}).listen(port, '127.0.0.1', () => console.log(`Private preview: http://127.0.0.1:${port}`));
