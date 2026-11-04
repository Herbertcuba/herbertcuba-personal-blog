---
type: Technical Documentation
title: Private current-site preview
---

# Private current-site preview

This branch starts at production source `b969f1d2e1499e1d0593c42b370f51abcd10ef27`.
The preview reuses `.eleventy.js`, all public templates, homepage, navigation,
article content and original CSS. It adds no alternate landing page or banner.

Run `npm ci`, `npm run build:preview`, `npm test`, then `npm run serve:preview`.
The server binds only to `127.0.0.1:4193`; `PREVIEW_PORT` selects another loopback
port for separate experiment branches. The owner manages private Tailscale Serve.
Never expose this server through public Funnel. Generated output is ignored.

## Deliberate safety differences

- Build invokes Eleventy directly, never the production upload synchronizers,
  Blob rewrite pipeline, private asset sync, deployment or API server. It does
  not read upload credentials or use a network service to render pages.
- Local tracked public images, fonts and downloads retain the source routes.
  Production serves images/downloads through its public CDN rewrite. No CDN
  upload or private Blob access is needed. Public downloadable orchestration
  guide is retained; paid books under `src/private` are excluded.
- Draft pages, draft listing and draft images are excluded from served output.
- Analytics scripts are stripped. Checkout's script becomes an inert preview
  notice on submit; inline scripts calling private purchase APIs are removed.
  Public book pages retain their original visible markup. Purchases/download
  authentication are deliberately not functional in the preview.
- HTML includes noindex/nofollow/noarchive metadata. `robots.txt` disallows all
  crawling; every response also has X-Robots-Tag. These are not access control.
- The loopback server permits GET/HEAD only, rejects API/private/draft/dotfile
  routes and traversal, prevents symlink escape, disables browser connections
  and form submission by CSP, and never forwards requests to production APIs.
- Canonical and social metadata remain production URLs. Original outbound links
  and read-only embedded media remain; navigating outward leaves the test site.

Run tests after building to include output safety checks. Actual rendered visual
parity requires an independent comparison at desktop/mobile against live source;
passing source checks is not a claim of human acceptance or live deployment.
