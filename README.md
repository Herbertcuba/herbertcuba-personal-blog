# Herbert Personal Blog (minimal)

A minimal, dark, professional blog site with:
- One homepage
- One article page layout
- Markdown-based publishing (Obsidian-friendly)

## Quick start

```bash
npm install
npm run dev
```

Then open: http://localhost:8080

## Publishing workflow (Obsidian → Blog)

### Recommended approach
Create an Obsidian folder for publish-ready notes:

`iCloud Drive/Obsidian/Publish`

On disk (macOS iCloud container):
`/Users/herbertcubagarcia/Library/Mobile Documents/iCloud~md~obsidian/Documents/Publish`

Drop Markdown notes there. Each note can optionally include YAML frontmatter:

```yaml
---
title: "My Post"
date: 2026-01-28
excerpt: "One sentence summary"
---
```

Then sync into the blog:

```bash
npm run sync:obsidian
npm run build
```

### Notes
- If your Obsidian files are still cloud-only, Finder → right-click the folder → **Download Now**.
- The sync script removes a leading H1 from the note body (if present) to avoid double titles.

## Next steps (deployment)

### Recommended: Netlify (simple + cheap)
This repo includes `netlify.toml` and builds to `dist/`.

**Netlify settings**
- Build command: `npm ci && npm run build`
- Publish directory: `dist`
- Node: `20` (set via `netlify.toml` / `.nvmrc`)

**Domain: cubagarcia.com**
- In Netlify: Site settings → Domain management → Add domain `cubagarcia.com`
- Then update DNS at your registrar:
  - Add the records Netlify suggests (often A records to Netlify load balancer, or CNAME for `www`).

### Alternative: Cloudflare Pages
Also works great (usually free), but is easiest if your DNS is already on Cloudflare.

### Optional: approve-to-publish
We can keep it super simple (auto deploy on `main`) or require PR approval for publishing.
