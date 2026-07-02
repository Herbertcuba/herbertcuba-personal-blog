# Design Handoff Build Spec — cubagarcia.com Revamp

Source: `design_handoff_cubagarcia_revamp/{Home,Article,About,Books}.dc.html` (reference width 1440px). `<x-dc>`/`support.js`/`image-slot.js` wrapper is preview plumbing — ignored below. `<image-slot>` → recreate as `<img>` or CSS background-image.

## Global setup (all 4 pages)

**Fonts (Google Fonts + self-hosted):**
```html
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,400;0,700;1,400&family=Chakra+Petch:wght@600;700&display=swap" rel="stylesheet">
```
```css
@font-face { font-family: "Helvetica Now Display"; src: url("fonts/HelveticaNowDisplay-Light.ttf"); font-weight: 300; font-style: normal; }
@font-face { font-family: "Helvetica Now Display"; src: url("fonts/HelveticaNowDisplay-SemiLight.ttf"); font-weight: 350; font-style: normal; }
@font-face { font-family: "Helvetica Now Display"; src: url("fonts/HelveticaNowDisplay-Regular.ttf"); font-weight: 400 500; font-style: normal; }
@font-face { font-family: "Helvetica Now Display"; src: url("fonts/HelveticaNowDisplay-Bold.ttf"); font-weight: 600 700; font-style: normal; }
body { margin: 0; background: #000; font-family: "Helvetica Now Display", Helvetica, Arial, sans-serif; color: #F4F4F4; }
```

**Global nav** (identical markup on every page, only active-link color and href targets differ):
```html
<nav style="display:flex; align-items:center; justify-content:space-between; padding:26px 48px; background:#000; color:#F4F4F4; border-bottom:1px solid #14301C">
  <a href="Home.dc.html" style="display:flex; align-items:center; gap:12px; color:#F4F4F4; text-decoration:none">
    <span style="font-family:'JetBrains Mono',monospace; font-weight:700; font-size:16px; color:#00E653">//</span>
    <span style="font-family:'Chakra Petch',sans-serif; font-weight:700; font-size:17px; letter-spacing:0.01em">HERBERT CUBA GARCIA</span>
  </a>
  <div style="display:flex; align-items:center; gap:40px; font-size:14px; font-family:'JetBrains Mono',monospace">
    <a href="#themes|Home.dc.html#themes" style="color:#F4F4F4">Insights</a>
    <a href="#apex|Home.dc.html#apex" style="color:#F4F4F4">APEX</a>
    <a href="Books.dc.html" style="color:#F4F4F4 (or #00E653 if active)">Books</a>
    <a href="About.dc.html" style="color:#F4F4F4 (or #00E653 if active)">About</a>
    <a href="#contact|Home.dc.html#contact" style="color:#000; background:#00E653; text-decoration:none; font-weight:700; padding:13px 20px">Contact ↗</a>
  </div>
</nav>
```
- On Home: `Insights → #themes`, `APEX → #apex`, `Contact → #contact` (same-page anchors).
- On Article/About/Books: `Insights → Home.dc.html#themes`, `APEX → Home.dc.html#apex`, `Contact → Home.dc.html#contact` (Article & Books) or `#contact` (About, since About has its own `#contact` section at bottom).
- Active-page link turns `#00E653` (About page: "About" link is green; Books page: "Books" link is green; Home/Article: no nav link marked active).

**Shared CTA + footer block** (appears at bottom of all 4 pages, identical):
```html
<div id="contact" style="background:#000; color:#F4F4F4; padding:72px 48px 40px">
  <div style="display:flex; justify-content:space-between; align-items:flex-end; gap:64px; padding-bottom:56px; border-bottom:1px solid #14301C">
    <h2 style="margin:0; font-family:'Chakra Petch',sans-serif; font-weight:700; font-size:52px; line-height:1.05; letter-spacing:-0.01em; max-width:800px">Thinking through an AI operating model? Let's talk<span style="color:#00E653">_</span></h2>
    <a href="mailto:hello@cubagarcia.com" style="flex:none; display:inline-flex; align-items:center; gap:10px; background:#00E653; color:#000; text-decoration:none; font-weight:700; font-size:15px; padding:18px 28px">Contact →</a>
  </div>
  <div style="display:flex; justify-content:space-between; align-items:center; padding-top:28px; font-family:'JetBrains Mono',monospace; font-size:12px; color:#5C735C">
    <span>© 2026 Herbert Cuba Garcia</span>
    <span>// built by markdown &amp; AI</span>
  </div>
</div>
```
(On Article page this is a plain footer bar without the CTA heading — see Article spec.)

**Trending icon SVG** (13×13 or 12×12, viewBox 0 0 16 16, stroke = theme accent, stroke-width 2, fill none):
```html
<svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="{accent}" stroke-width="2">
  <path d="M1 12 L6 7 L9 10 L15 4"></path>
  <path d="M10 4 H15 V9"></path>
</svg>
```

**Theme accent palette:**
| Theme | Base accent (light bg) | On-dark variant |
|---|---|---|
| Agentic engineering | `#00A03A` | `#00E653` |
| Operating models | `#0F8BD1` | `#4FB6F0` |
| Strategy & leadership | `#FF450F` (View-all link uses `#E63E0E`) | `#FF8866` |

---

## 1. Home (`Home.dc.html`)

### DOM order
1. `<nav>` — global nav (see above)
2. Masthead ("spec sheet") — black `<div>`
3. `<header>` — latest insight hero, `#0A1A0F`
4. "This month" rail — black `<div>`
5. `<div id="themes">` — Explore by theme, light bg
6. `<div id="apex">` — green APEX band
7. `<div id="books">` — Books + About teaser, light bg
8. `<div id="contact">` — CTA + footer (shared block)

### 2. Masthead
```html
<div style="background:#000; color:#F4F4F4; padding:72px 48px 72px">
```
- Kicker: `display:flex; align-items:center; gap:14px; font-family:'JetBrains Mono',monospace; font-size:14px; color:#00E653; margin-bottom:28px` — `<span style="font-weight:700">//</span>Engineer • Entrepreneur • Author`
- H1: `margin:0 0 40px; font-family:'Chakra Petch',sans-serif; font-weight:700; font-size:88px; line-height:1; letter-spacing:-0.01em; max-width:1200px` — "Building at the edge of what's possible" + `<span style="color:#00E653">_</span>`
- Strip: `display:grid; grid-template-columns:auto 1fr auto; gap:48px; align-items:center; border-top:1px solid #1C3D26; border-bottom:1px solid #1C3D26; padding:24px 0`
  - **Col 1** (auto): flex row, gap 18px
    - Portrait: `<image-slot>` 72×72px circle, `filter:grayscale(1) contrast(1.08)`, wrapped in `position:relative` div; green tint overlay `position:absolute; inset:0; border-radius:50%; background:rgba(0,230,83,0.16); mix-blend-mode:hard-light; pointer-events:none` → maps to **author portrait**
    - Name: `font-family:'Chakra Petch',sans-serif; font-weight:700; font-size:18px` = "Herbert Cuba Garcia"
    - Subtitle: `font-family:'JetBrains Mono',monospace; font-size:12px; color:#8FAF8F` = "Technology leader — AI, strategy & human potential"
  - **Col 2** (1fr): `<p style="margin:0; font-weight:350; font-size:17px; line-height:1.5; color:#9DB39D; max-width:520px">` = "I write about building products, leading teams, and navigating the chaos of modern software."
  - **Col 3** (auto): flex row gap 40px, mono 12px `#8FAF8F` labels; 3 stat blocks, each: `<div style="font-family:'Chakra Petch',sans-serif; font-weight:700; font-size:28px; color:#00E653">VALUE</div>label`
    - "20+" / "years in tech"
    - "57" / "insights"
    - "02" / "books"
    - **Data-driven**: insight count = post count from content source; "20+" is fixed author copy.

### 3. Latest insight hero
```html
<header style="background:#0A1A0F; color:#F4F4F4; border-top:2px solid #00E653; display:grid; grid-template-columns:7fr 5fr">
```
**Left column** — `padding:56px 56px 64px 48px; display:flex; flex-direction:column; justify-content:center`
- Meta row: `display:flex; align-items:center; gap:24px; font-family:'JetBrains Mono',monospace; font-size:13px; color:#5C735C; margin-bottom:36px`
  - Badge: `color:#F4F4F4; border:1.5px solid #F4F4F4; font-weight:700; padding:6px 12px` = "// LATEST INSIGHT"
  - Date: "2026-07-02" (plain span)
  - Tag chips: `display:flex; gap:8px`, each chip `border:1px solid #1C3D26; padding:3px 9px; color:#9DB39D` = "ai", "agents", "operating-model"
- H2: `margin:0 0 24px; font-family:'Chakra Petch',sans-serif; font-weight:700; font-size:58px; line-height:1.05; letter-spacing:-0.01em` = "AI transformation is a team sport."
- Dek: `margin:0 0 36px; font-weight:350; font-size:19px; line-height:1.5; color:#9DB39D; max-width:560px` = "Individual productivity gains evaporate at the organizational boundary. The teams that win are redesigning how they decide, not just how they build."
- Button: `<a href="Article.dc.html">` `align-self:flex-start; display:inline-flex; align-items:center; gap:10px; background:#00E653; color:#000; text-decoration:none; font-weight:700; font-size:15px; padding:18px 28px` = "Read the insight →"

**Right column** — `position:relative; border-left:1px solid #1C3D26; min-height:480px`
- Image slot: `id="latest-hero" src="uploads/ai-transformation-team-sport.webp"` → **maps to newest post's cover image**; `position:absolute; inset:0; width:100%; height:100%; filter:grayscale(1) contrast(1.08)`
- Overlay: `position:absolute; inset:0; background:linear-gradient(105deg, rgba(10,26,15,0.85) 0%, rgba(10,26,15,0) 45%), rgba(0,230,83,0.16); mix-blend-mode:hard-light; pointer-events:none`
- Caption: `position:absolute; left:0; bottom:0; padding:16px 20px; font-family:'JetBrains Mono',monospace; font-size:12px; color:#00E653; background:rgba(3,5,3,0.8)` = "// fig. 057" (post number)
- **This section always renders the newest post** — dynamic.

### 4. "This month" rail
```html
<div style="background:#000; color:#F4F4F4; padding:48px; border-top:1px solid #14301C">
```
- H2: `margin:0 0 36px; font-family:'Chakra Petch',sans-serif; font-weight:700; font-size:44px; letter-spacing:-0.01em; line-height:1; display:flex; align-items:baseline; gap:14px` — `<span style="font-family:'JetBrains Mono',monospace; font-weight:700; color:#00E653; font-size:32px">//</span>This month`
- Grid: `display:grid; grid-template-columns:1fr 1fr 1fr; gap:40px` — 3 post cards
- Each card `<a>`: `display:flex; gap:20px; color:#F4F4F4; text-decoration:none; align-items:flex-start`
  - Thumb: `position:relative; flex:none; width:132px; height:96px` — image-slot 132×96, `filter:grayscale(1) contrast(1.08)`; overlay `position:absolute; inset:0; background:rgba(0,230,83,0.16); mix-blend-mode:hard-light`
  - Meta row: `display:flex; align-items:center; gap:8px; flex-wrap:wrap; font-family:'JetBrains Mono',monospace; font-size:11px; color:#5C735C; margin-bottom:10px` — date (e.g. "06-30") + tag chips (`border:1px solid #1C3D26; padding:2px 7px; color:#8FAF8F`)
  - Title: `font-weight:700; font-size:17px; line-height:1.3`
- **3 cards content:**
  1. 06-30 / tags: ai, engineering / "Google vs. Microsoft: two frameworks for agentic engineering" — img `months-not-years-retrofitters-exposed.webp`
  2. 06-26 / tags: ai, agents / "What the data says about building with agents" — img `ai-transformation-team-sport.webp`
  3. 06-26 / tags: ai, strategy / "I stopped planning five years out. That's too long." — img `months-not-years-retrofitters-exposed.webp`
- Footer link row: `display:flex; justify-content:flex-end; margin-top:32px` — `<a href="#themes" style="color:#00E653; font-family:'JetBrains Mono',monospace; font-size:14px">// all 57 insights →`

### 5. Explore by theme (`id="themes"`)
```html
<div id="themes" style="background:#F2F5F2; color:#000; padding:72px 48px 80px">
```
- H2: same pattern as above but `//` in `#00A03A`, text "Explore by theme"
- Grid: `display:grid; grid-template-columns:1fr 1fr 1fr; gap:40px` — 3 theme columns

**Per-column structure** (repeats ×3, only accent color / copy differs):
- H3: `margin:0; font-family:'Chakra Petch',sans-serif; font-weight:700; font-size:27px; letter-spacing:-0.01em`
- Double rule: `display:flex; flex-direction:column; gap:4px; margin:14px 0 12px` — two `<span style="display:block; height:2px; background:{accent}">`
- Count label: `font-family:'JetBrains Mono',monospace; font-size:12px; color:#3D4D3D; margin-bottom:20px` = "N insights"
- **Featured card** `<a>`: `display:block; color:#000; text-decoration:none; margin-bottom:20px`
  - Image wrap: `position:relative; margin-bottom:14px` — image-slot `width:100%; height:190px; filter:grayscale(1) contrast(1.08)`
  - Tint overlay: `position:absolute; inset:0; background:rgba({accent-rgb},{0.2 or 0.22}); mix-blend-mode:hard-light` (theme1=0.2, theme2=0.22, theme3=0.2)
  - Trending badge (optional, shown here on all 3 featured cards): `position:absolute; left:0; bottom:0; display:flex; align-items:center; gap:8px; padding:7px 12px; font-family:'JetBrains Mono',monospace; font-size:11px; color:{on-dark accent}; background:#000` + trending SVG (12×12, stroke on-dark accent) + "trending"
  - Meta row: `display:flex; align-items:center; gap:8px; flex-wrap:wrap; font-family:'JetBrains Mono',monospace; font-size:11px; color:#7A8C7A; margin-bottom:8px` — date + tag chips (`border:1px solid #C4D1C4; padding:2px 7px; color:#3D4D3D`)
  - Title: `display:block; font-family:'Chakra Petch',sans-serif; font-weight:700; font-size:20px; line-height:1.25`
- **List items** (4 per column): `display:flex; flex-direction:column; gap:6px; padding:14px 0; border-top:1px solid #C4D1C4; color:#000; text-decoration:none`
  - Meta row: `font-family:'JetBrains Mono',monospace; font-size:11px; color:#7A8C7A` + tag chips (same style) + optional trending SVG (13×13, stroke accent) inline after chips
  - Title: `font-weight:700; font-size:16px; line-height:1.35`
- **"View all" link**: `padding:16px 0 0; border-top:1px solid #C4D1C4; color:{accent}; text-decoration:none; font-family:'JetBrains Mono',monospace; font-weight:700; font-size:13px` = "View all N →"

**Column 1 — Agentic engineering** (accent `#00A03A`/on-dark `#00E653`), 14 insights:
- Featured: 2026-03-09, tags ai/engineering, trending — "The verification debt crisis: why AI-generated code is a ticking time bomb" — img `ai-transformation-team-sport.webp`
- List: (1) 2026-05-16 engineering/architecture — "Reversibility is the new architectural correctness"; (2) 2026-05-16 ai/engineering + trending — "The spec is the cognitive work"; (3) 2026-05-16 ai/engineering — "You don't know how to manage an LLM dependency"; (4) 2026-04-26 engineering/leadership — "Your junior engineers are learning the wrong things"
- View all 14 →

**Column 2 — Operating models** (accent `#0F8BD1`/on-dark `#4FB6F0`), 11 insights:
- Featured: 2026-06-03, tags ai/operating-model, trending — "The alignment tax: why AI productivity gains disappear without an operating model" — img `months-not-years-retrofitters-exposed.webp`
- List: (1) 2026-06-24 ai/operating-model + trending — "Microsoft's HVE Teams has one blind spot"; (2) 2026-05-28 ai/operating-model — "The five levels of AI-augmented production"; (3) 2026-04-12 apex/operating-model — "APEX: three use cases, one framework"; (4) 2026-02-12 apex/playbook — "Building the AI operating model: a tech director's playbook"
- View all 11 →

**Column 3 — Strategy & leadership** (accent `#FF450F`/on-dark `#FF8866`; View-all link color `#E63E0E`), 18 insights:
- Featured: 2026-06-22, tags ai/leadership, trending — "The orchestrator identity shift" — img `ai-transformation-team-sport.webp`
- List: (1) 2026-06-26 ai/strategy — "I stopped planning five years out. That's too long."; (2) 2026-06-23 ai/strategy — "The months-not-years problem"; (3) 2026-04-21 ai/leadership + trending — "IQ got automated. Wisdom didn't."; (4) 2026-02-23 strategy/leadership — "The coming era of strategic velocity"
- View all 18 →

### 6. APEX band (`id="apex"`)
```html
<div id="apex" style="background:#00E653; color:#000; padding:64px 48px">
  <div style="display:flex; align-items:flex-end; justify-content:space-between; gap:64px">
```
- Left: label `font-family:'JetBrains Mono',monospace; font-size:13px; margin-bottom:20px; font-weight:700` = "// framework"; H2 `margin:0 0 16px; font-family:'Chakra Petch',sans-serif; font-weight:700; font-size:56px; line-height:1; letter-spacing:-0.01em` = "APEX — Agentic Production Execution"; dek `margin:0; font-weight:350; font-size:18px; line-height:1.5; max-width:720px` = "The operating model behind the insights: how organizations align people, agents, and decisions to actually keep the productivity they gain."
- Right: button `<a href="Article.dc.html">` `flex:none; display:inline-flex; align-items:center; gap:10px; background:#000; color:#00E653; text-decoration:none; font-weight:700; font-size:15px; padding:18px 28px` = "Explore APEX →"

### 7. Books + About teaser (`id="books"`)
```html
<div id="books" style="background:#F2F5F2; color:#000; padding:64px 48px; display:grid; grid-template-columns:2fr 1fr; gap:64px">
```
**Left (2fr) — Books:**
- H2: standard pattern, `//` in `#00A03A`, "Books"
- `display:flex; gap:48px` → two book blocks, each `display:flex; gap:24px`:
  - Cover image-slot: `flex:none; width:110px; height:160px`
  - Text: H3 `margin:0 0 8px; font-family:'Chakra Petch',sans-serif; font-weight:700; font-size:20px`; "Buy ↗" link `color:#000; font-weight:700; font-size:14px; margin-bottom:8px` → Amazon URL; "Free copy" link `color:#00A03A; font-weight:700; font-size:14px` → `Books.dc.html#free`
  - Book 1: "The 3 Crucibles" → `https://www.amazon.com/dp/B0GTK53C9H`
  - Book 2: "The Digital Singularity Shift" → `https://www.amazon.com/dp/B0DKBYXLH2`

**Right (1fr) — About teaser:** `border-left:2px solid #C4D1C4; padding-left:48px`
- Label: `margin:0 0 20px; font-family:'JetBrains Mono',monospace; font-weight:400; font-size:13px; color:#3D4D3D` — `<span style="color:#00A03A; font-weight:700">//</span> about`
- Row: `display:flex; gap:20px; align-items:flex-start`
  - Portrait: image-slot 88×88 circle, `filter:grayscale(1) contrast(1.08)`, green tint overlay (same pattern as masthead)
  - Blurb `margin:0 0 16px; font-weight:350; font-size:16px; line-height:1.5; color:#3D4D3D` = "Engineer, entrepreneur, and author working at the intersection of AI, strategy, and human potential."
  - Link `color:#000; font-weight:700; font-size:14px` = "More about me →" → `About.dc.html`

### 8. CTA + footer
Shared block (see Global setup), id `#contact`.

---

## 2. Article (`Article.dc.html`) — post template

### DOM order
1. `<nav>` — global nav (Books/About outbound; Insights/APEX → `Home.dc.html#themes`/`#apex`; Contact → `Home.dc.html#contact`)
2. `<header>` — article header, black
3. Hero image `<div>`
4. Body `<div>` — light bg, 280px + 760px grid
5. Read next `<div>` — black
6. Footer `<div>` — plain footer row (no CTA heading)

### 2. Article header
```html
<header style="background:#000; color:#F4F4F4; padding:56px 48px 56px">
```
- Back link: `<a href="Home.dc.html">` `display:inline-flex; align-items:center; gap:10px; color:#5C735C; text-decoration:none; font-family:'JetBrains Mono',monospace; font-size:13px; margin-bottom:40px` = "← cd /insights"
- Meta row: `display:flex; align-items:center; gap:24px; font-family:'JetBrains Mono',monospace; font-size:13px; color:#5C735C; margin-bottom:32px`
  - Badge: `color:#F4F4F4; border:1.5px solid #F4F4F4; font-weight:700; padding:6px 12px` = "// INSIGHT 057" (post number)
  - Date: "2026-07-02"
  - Tags: `display:flex; gap:8px` — chips `border:1px solid #1C3D26; padding:3px 9px; color:#9DB39D` = "ai", "agents", "operating-model"
  - Reading time: "7 min read" (plain span)
- H1: `margin:0 0 24px; font-family:'Chakra Petch',sans-serif; font-weight:700; font-size:72px; line-height:1.02; letter-spacing:-0.01em; max-width:1160px` = "AI transformation is a team sport" + `<span style="color:#00E653">_</span>`
- Dek: `margin:0; font-weight:350; font-size:22px; line-height:1.5; color:#9DB39D; max-width:760px` = "Individual productivity gains evaporate at the organizational boundary. The teams that win are redesigning how they decide, not just how they build."

### 3. Hero image
```html
<div style="position:relative; height:560px; border-top:2px solid #00E653">
```
- Image-slot `src="uploads/ai-transformation-team-sport.webp"` (maps to post cover image), `position:absolute; inset:0; width:100%; height:100%; filter:grayscale(1) contrast(1.08)`
- Overlay: `position:absolute; inset:0; background:rgba(0,230,83,0.14); mix-blend-mode:hard-light`
- Caption: `position:absolute; left:48px; bottom:0; padding:12px 16px; font-family:'JetBrains Mono',monospace; font-size:12px; color:#00E653; background:rgba(3,5,3,0.85)` = "// fig. 057 — every gain routes through the org chart" (fig number + caption both dynamic per-post)

### 4. Body
```html
<div style="background:#F2F5F2; color:#000; padding:80px 48px 96px">
  <div style="display:grid; grid-template-columns:280px minmax(0,760px); gap:64px; justify-content:center">
```
**Left rail** `<aside>`: `display:flex; flex-direction:column; gap:24px; font-family:'JetBrains Mono',monospace; font-size:12px; color:#3D4D3D; position:sticky; top:24px; align-self:start`
- Double rule (green `#00A03A`, same 2-bar pattern, gap 4px)
- "published" label (`color:#7A8C7A; margin-bottom:6px`) / value "2026-07-02"
- "reading time" / "7 min"
- "filed under" / chips row `display:flex; gap:6px; flex-wrap:wrap` — `border:1px solid #C4D1C4; padding:2px 7px` = ai, agents, operating-model
- "share" / links row `display:flex; gap:14px` — `<a>` `color:#000; text-decoration:none; font-weight:700` = "LinkedIn ↗", "X ↗" (both href="#" placeholder)

**Right column** `<article>`: `font-weight:400; font-size:19px; line-height:1.65; color:#1A1A1A`
- Lede paragraph: `margin:0 0 28px; font-weight:350; font-size:24px; line-height:1.55; color:#000` = "Every organization I talk to has the same chart: individual developers are 30–50% faster with AI, and the delivery roadmap hasn't moved an inch."
- Paragraph: `margin:0 0 28px` (default 19px/1.65/#1A1A1A) = "The gains are real. They're just being absorbed — by review queues that weren't designed for agent-speed output, by decision processes that still assume code is expensive, and by team boundaries drawn for a world where building was the bottleneck."
- H2: `margin:48px 0 20px; font-family:'Chakra Petch',sans-serif; font-weight:700; font-size:32px; line-height:1.15; letter-spacing:-0.01em` = "The boundary problem"
- Paragraph = "A single engineer with a good harness can now produce what a squad produced a year ago. But the artifacts still flow through the same pipes: the same standups, the same tickets, the same quarterly planning. The unit of production changed; the unit of coordination didn't."
- Pull quote `<blockquote>`: `margin:44px 0; padding:28px 0; border-top:2px solid #00A03A; border-bottom:2px solid #00A03A; font-family:'Chakra Petch',sans-serif; font-weight:700; font-size:28px; line-height:1.3; color:#000` = "\"You can't buy your way out of an alignment problem with a faster keyboard.\""
- Paragraph w/ inline link = "This is the alignment tax in action — the organizational drag that eats individual productivity before it ever reaches the customer. I've written about the mechanics [in the APEX series](Article.dc.html) (link style: `color:#00A03A; font-weight:700; text-decoration:none`); the short version is that transformation has to be designed at the level where decisions are made, not where code is written."
- H2 = "What winning teams redesign"
- Paragraph `margin:0 0 16px` = "Three patterns show up consistently in the teams that keep their gains:"
- `<ol>` `margin:0 0 28px; padding-left:24px; display:flex; flex-direction:column; gap:14px`, each `<li>` with bold lead-in:
  1. **Decision latency over build speed.** They measure how long a decision waits, not how fast a feature ships.
  2. **Review as a system, not a gate.** Verification is designed up front — specs, contracts, reversibility — so review doesn't become the new bottleneck.
  3. **Smaller, fuller-stack units.** Conway's law didn't go away; they redraw the team boundaries to match what one orchestrator can now own.
- Paragraph = "None of this is a tooling decision. It's an operating-model decision — which is why it belongs to leadership, not to the platform team."
- Closing paragraph `margin:0` = "AI transformation is a team sport. The individual game is already won; the organizational game is just starting."
- *(Note: README flags this body copy as placeholder text — final copy is per-post/markdown content.)*

### 5. Read next
```html
<div style="background:#000; color:#F4F4F4; padding:64px 48px 72px; border-top:2px solid #00E653">
```
- H2 same "This month" pattern, `//` green — "Read next"
- 3-column grid identical thumb-card pattern to Home's "This month" (132×96 thumb, date, 2 tag chips, 17px bold title):
  1. 06-03 / ai, operating-model — "The alignment tax: why AI productivity gains disappear" — img `months-not-years-retrofitters-exposed.webp`
  2. 06-22 / ai, leadership — "The orchestrator identity shift" — img `ai-transformation-team-sport.webp`
  3. 05-28 / ai, operating-model — "The five levels of AI-augmented production" — img `months-not-years-retrofitters-exposed.webp`
- No "view all" link on this page.

### 6. Footer (plain, no CTA)
```html
<div style="background:#000; color:#F4F4F4; padding:0 48px 40px">
  <div style="display:flex; justify-content:space-between; align-items:center; padding-top:28px; border-top:1px solid #14301C; font-family:'JetBrains Mono',monospace; font-size:12px; color:#5C735C">
    <span>© 2026 Herbert Cuba Garcia</span>
    <span>// built by markdown &amp; AI</span>
  </div>
</div>
```
Note: this differs from shared CTA+footer block used elsewhere — Article has no "Let's talk" CTA heading, just the footer row.

---

## 3. About (`About.dc.html`)

### DOM order
1. `<nav>` — global (About link green/active)
2. `<header>` — 7/5 grid, black
3. Stats strip — black, 4 columns
4. "What I do" `<div>` — light bg, 3 columns
5. "Longer bio" `<div>` — white bg, 280+760 grid
6. `<div id="contact">` — shared CTA + footer

### 2. Header
```html
<header style="background:#000; color:#F4F4F4; padding:72px 48px 64px; display:grid; grid-template-columns:7fr 5fr; gap:64px; align-items:center">
```
**Left column:**
- Kicker: `display:flex; align-items:center; gap:14px; font-family:'JetBrains Mono',monospace; font-size:14px; color:#00E653; margin-bottom:28px` — `//`whoami
- H1: `margin:0 0 28px; font-family:'Chakra Petch',sans-serif; font-weight:700; font-size:76px; line-height:1.02; letter-spacing:-0.01em` = "Engineer. Entrepreneur. Author" + green `_`
- Paragraph 1: `margin:0 0 24px; font-weight:350; font-size:20px; line-height:1.55; color:#9DB39D; max-width:620px` = "I'm Herbert Cuba Garcia — a technology leader working at the intersection of AI, strategy, and human potential."
- Paragraph 2: `margin:0; font-weight:350; font-size:20px; line-height:1.55; color:#9DB39D; max-width:620px` = "After 20+ years building products and leading engineering teams, I now spend my time on one question: how organizations turn AI capability into actual outcomes — without losing the people in the process."

**Right column:** `position:relative; justify-self:end`
- Portrait image-slot: `width:420px; height:500px; filter:grayscale(1) contrast(1.08)` → **author portrait**
- Overlay: `position:absolute; inset:0; background:rgba(0,230,83,0.14); mix-blend-mode:hard-light`
- Caption: `position:absolute; left:0; bottom:0; padding:10px 14px; font-family:'JetBrains Mono',monospace; font-size:12px; color:#00E653; background:rgba(3,5,3,0.85)` = "// herbert cuba garcia"

### 3. Stats strip
```html
<div style="background:#000; color:#F4F4F4; padding:0 48px 64px">
  <div style="display:grid; grid-template-columns:1fr 1fr 1fr 1fr; border-top:1px solid #1C3D26; border-bottom:1px solid #1C3D26">
```
4 equal columns, each:
```html
<div style="padding:28px 32px [28px|32px 0 32px asymmetric on ends]; border-left:1px solid #1C3D26 (except first col, no border-left)">
  <div style="font-family:'Chakra Petch',sans-serif; font-weight:700; font-size:40px; color:#00E653">VALUE</div>
  <div style="font-family:'JetBrains Mono',monospace; font-size:12px; color:#8FAF8F">LABEL</div>
</div>
```
- Col 1 (`padding:28px 32px 28px 0`, no left border): "20+" / "years in tech"
- Col 2 (`padding:28px 32px; border-left:1px solid #1C3D26`): "57" / "insights published"
- Col 3 (same): "02" / "books authored"
- Col 4 (`padding:28px 0 28px 32px; border-left:1px solid #1C3D26`): "APEX" / "operating-model framework"

### 4. What I do
```html
<div style="background:#F2F5F2; color:#000; padding:72px 48px 80px">
```
- H2: standard pattern, `//` `#00A03A`, "What I do"
- Grid `1fr 1fr 1fr`, gap 40px — 3 cards, each:
  - H3 `margin:0; font-family:'Chakra Petch',sans-serif; font-weight:700; font-size:24px`
  - Double rule `margin:14px 0 16px` (accent color, 2×2px bars gap 4px)
  - Paragraph `margin:0 0 18px; font-weight:350; font-size:16px; line-height:1.55; color:#3D4D3D`
  - Arrow link `color:#000; font-weight:700; font-size:14px`
- **Write** (accent `#00A03A`): "Deep, practical insights on agentic engineering, AI operating models, and what leadership looks like when software becomes cheap." — "Read the insights →" → `Home.dc.html#themes`
- **Advise** (accent `#0F8BD1`): "I work with leadership teams on AI operating models — turning individual productivity gains into organizational outcomes, using the APEX framework." — "Get in touch →" → `#contact`
- **Author** (accent `#FF450F`): "Two books on the forces reshaping technology and business: The 3 Crucibles and The Digital Singularity Shift." — "See the books →" → `Books.dc.html`

### 5. Longer bio
```html
<div style="background:#FFFFFF; color:#000; padding:72px 48px 80px; border-top:1px solid #E4E4E4">
  <div style="display:grid; grid-template-columns:280px minmax(0,760px); gap:64px; justify-content:center">
```
**Left rail** `<aside>`: `font-family:'JetBrains Mono',monospace; font-size:12px; color:#3D4D3D` (not sticky here — no `position:sticky`)
- Double rule `margin-bottom:20px` (green)
- Label `color:#7A8C7A; margin-bottom:6px` = "the longer story"

**Right column:** `font-weight:400; font-size:19px; line-height:1.65; color:#1A1A1A`
- P1 `margin:0 0 28px` = "I started as an engineer, became a founder, and spent the last decade leading technology organizations through platform shifts. The AI shift is the third one I've worked through — and the first where the constraint moved from building to deciding."
- P2 `margin:0 0 28px` = "That's what this site is about. Not tool reviews, not hype cycles — the operating models, team structures, and leadership habits that determine whether AI capability compounds or evaporates inside an organization."
- P3 `margin:0` = "When I'm not writing or advising, I'm usually building something anyway. Old habits."
- *(README flags this as placeholder copy.)*

### 6. CTA + footer
Shared block, `id="contact"`.

---

## 4. Books (`Books.dc.html`)

### DOM order
1. `<nav>` — global (Books link green/active)
2. `<header>` — black
3. Book 01 panel — `#0A1A0F`, 5/7 grid (cover left, text right)
4. Book 02 panel — black, 7/5 grid (text left, cover right — mirrored)
5. `<div id="free">` — free copies form, light bg, 2 col
6. `<div id="contact">` — shared CTA + footer

### 2. Header
```html
<header style="background:#000; color:#F4F4F4; padding:72px 48px 64px">
```
- Kicker: same pattern, `//`ls ./books
- H1: `margin:0 0 24px; font-family:'Chakra Petch',sans-serif; font-weight:700; font-size:80px; line-height:1; letter-spacing:-0.01em; max-width:1100px` = "Two books about what comes next" + green `_`
- Dek: `margin:0; font-weight:350; font-size:20px; line-height:1.5; color:#9DB39D; max-width:640px` = "The long-form versions of the ideas on this site — where the essays end and the arguments get room to breathe."

### 3. Book 01 panel
```html
<div style="background:#0A1A0F; color:#F4F4F4; border-top:2px solid #00E653; display:grid; grid-template-columns:5fr 7fr">
```
**Left (5fr):** `position:relative; border-right:1px solid #1C3D26; min-height:560px; display:flex; align-items:center; justify-content:center; padding:56px`
- Cover image-slot: `width:300px; height:440px; box-shadow:24px 24px 0 rgba(0,230,83,0.25)` → **cover: The 3 Crucibles**

**Right (7fr):** `padding:64px 56px; display:flex; flex-direction:column; justify-content:center`
- Meta row: `display:flex; align-items:center; gap:24px; font-family:'JetBrains Mono',monospace; font-size:13px; color:#5C735C; margin-bottom:28px`
  - Badge `color:#F4F4F4; border:1.5px solid #F4F4F4; font-weight:700; padding:6px 12px` = "// BOOK 01"
  - Tag chips `display:flex; gap:8px`, `border:1px solid #1C3D26; padding:3px 9px; color:#9DB39D` = "economics", "technology", "future"
- H2: `margin:0 0 12px; font-family:'Chakra Petch',sans-serif; font-weight:700; font-size:52px; line-height:1.02; letter-spacing:-0.01em` = "The 3 Crucibles"
- Subtitle: `font-family:'JetBrains Mono',monospace; font-size:14px; color:#00E653; margin-bottom:28px` = "A Prophecy of Collapse, Transformation, and the Fight for Abundance"
- Description: `margin:0 0 36px; font-weight:350; font-size:18px; line-height:1.6; color:#9DB39D; max-width:560px` = "We stand at the edge of three simultaneous disruptions — economic, technological, and existential. This book maps the forces reshaping our world and argues that the choices we make in the next decade will determine whether we descend into scarcity or unlock an era of radical abundance."
- Buttons row: `display:flex; gap:20px`
  - Primary: `<a href="https://www.amazon.com/dp/B0GTK53C9H">` `display:inline-flex; align-items:center; gap:10px; background:#00E653; color:#000; text-decoration:none; font-weight:700; font-size:15px; padding:18px 28px` = "Buy on Amazon ↗"
  - Secondary: `<a href="#free">` `display:inline-flex; align-items:center; gap:10px; border:1.5px solid #F4F4F4; color:#F4F4F4; text-decoration:none; font-weight:700; font-size:15px; padding:18px 28px` = "Get a free copy"

### 4. Book 02 panel (mirrored)
```html
<div style="background:#000; color:#F4F4F4; border-top:1px solid #14301C; display:grid; grid-template-columns:7fr 5fr">
```
**Left (7fr) — text:** `padding:64px 56px 64px 48px; display:flex; flex-direction:column; justify-content:center`
- Same structure as Book 01's text side. Badge "// BOOK 02"; tags "ai", "branding", "strategy"
- H2 = "The Digital Singularity Shift"
- Subtitle = "The Rise of Metamodern Brand Narratives"
- Description = "When AI commoditizes every functional advantage, the only remaining battleground is the human heart. This book explores how metamodern brand narratives — authentic yet self-aware — become the last durable moat in business."
- Buttons: "Buy on Amazon ↗" → `https://www.amazon.com/dp/B0DKBYXLH2`; "Get a free copy" → `#free`

**Right (5fr) — cover:** `position:relative; border-left:1px solid #1C3D26; min-height:560px; display:flex; align-items:center; justify-content:center; padding:56px`
- Cover image-slot: `width:300px; height:440px; box-shadow:24px 24px 0 rgba(0,230,83,0.25)` → **cover: The Digital Singularity Shift**

### 5. Free copies form (`id="free"`)
```html
<div id="free" style="background:#F2F5F2; color:#000; padding:72px 48px 80px">
  <div style="display:grid; grid-template-columns:1fr 1fr; gap:64px; align-items:center">
```
**Left:**
- H2: `margin:0 0 20px; font-family:'Chakra Petch',sans-serif; font-weight:700; font-size:44px; letter-spacing:-0.01em; line-height:1.05; display:flex; align-items:baseline; gap:14px` — `//` in `#00A03A` — "Get your free copies"
- Dek: `margin:0; font-weight:350; font-size:18px; line-height:1.55; color:#3D4D3D; max-width:480px` = "Both books, free in your inbox as e-books. No newsletter strings attached — just the ideas."

**Right:** `border-left:2px solid #C4D1C4; padding-left:48px`
- Field group: `display:flex; flex-direction:column; gap:12px; margin-bottom:28px`
  - Label `<label for="free-email">` `font-family:'JetBrains Mono',monospace; font-size:13px; color:#3D4D3D` = "your email"
  - Input `<input id="free-email" type="email" placeholder="name@company.com">`: `font-family:'JetBrains Mono',monospace; font-size:17px; padding:6px 0 12px; border:none; border-bottom:2px solid #000; background:transparent; color:#000; outline:none; max-width:420px` (underline-only input, no box)
- Submit button `<button>`: `display:inline-flex; align-items:center; gap:10px; background:#000; color:#00E653; border:none; cursor:pointer; font-family:'Helvetica Now Display',sans-serif; font-weight:700; font-size:15px; padding:18px 28px` = "Send me the books →"
- Wire to existing free-copy email flow; add success state per README: "Download your free copy here →"

### 6. CTA + footer
Shared block, `id="contact"`.

---

## Anchors reference (cross-page)
| Anchor | Location | Linked from |
|---|---|---|
| `#themes` | Home — Explore by theme section | Nav "Insights" (all pages), Home "// all N insights →", About "Read the insights →" |
| `#apex` | Home — APEX green band | Nav "APEX" (all pages) |
| `#books` | Home — Books+About teaser wrapper | (id present, not directly linked from nav; Books page is separate route) |
| `#contact` | Home/About/Books — CTA+footer block | Nav "Contact ↗" button (all pages), About "Advise" card "Get in touch →" |
| `#free` | Books — free copy form | Home book "Free copy" links, Books "Get a free copy" buttons |

## Image-slot → asset mapping summary
| Slot id | Page | Dimensions | Maps to |
|---|---|---|---|
| masthead-portrait-5b | Home | 72×72 circle | Author portrait |
| latest-hero | Home | fill (7/5 col, min-h 480) | Newest post cover image (dynamic) |
| thumb-1/2/3 | Home (This month) | 132×96 | Recent post images |
| theme1/2/3-feat | Home (themes) | 100%×190 | Featured post per theme |
| book-1, book-2 | Home (books teaser) | 110×160 | Book covers |
| portrait | Home (about teaser) | 88×88 circle | Author portrait |
| article-hero | Article | fill, h:560 | Post cover image (dynamic per post) |
| next-1/2/3 | Article (read next) | 132×96 | Related/next post images |
| about-portrait | About header | 420×500 | Author portrait (large) |
| books-cover-1 | Books (book 1 panel) | 300×440 | The 3 Crucibles cover |
| books-cover-2 | Books (book 2 panel) | 300×440 | The Digital Singularity Shift cover |

## Notes for implementation
- No border-radius anywhere except circular portraits (`shape="circle"` → `border-radius:50%`).
- Duotone treatment = `filter:grayscale(1) contrast(1.08)` on the image + an absolutely-positioned overlay div with `mix-blend-mode:hard-light` and theme-accent rgba (green `rgba(0,230,83,0.14–0.22)` on most dark contexts; per-theme accent rgba on theme cards).
- Chakra Petch used only at weight 700 (headings/titles/stat numbers). JetBrains Mono at 400 (labels/body-mono) and 700 (badges, `//`, view-all links). Helvetica Now Display at 350 (deks/paragraphs on dark, "what I do" body text) and 400/700 (article body / buttons/titles).
- Page gutter is consistently `48px` left/right padding across all sections on all 4 pages.
- Section vertical padding pattern: dark sections typically `64–72px` top, light sections `72–80px` top, `40–96px` bottom depending on section.
