# cubagarcia.com Redesign Plan

**Status:** In progress · Branch: `redesign` · Started 2026-07-02

A "matrix-professional" revamp of cubagarcia.com — black + phosphor green (`#00E653`),
terminal-flavored details (`//` motif, mono metadata), Chakra Petch display type, green-duotone
image treatment, sharp corners. Repositioned toward enterprise thought leadership.

Design handoff source: `design_handoff_cubagarcia_revamp/` (README + 4 `.dc.html` references + screenshots).

## Approach

Rebuild the presentation layer **in-place on the existing Eleventy v3 + Nunjucks stack**.
Content (63 posts), draft workflow, and Vercel deploy pipeline are all reused. Work happens on a
`redesign` branch with a Vercel preview URL for live review before merging to `main`.

## Confirmed decisions (2026-07-02)

1. **Theme taxonomy** — map existing free-form post tags → 3 fixed themes:
   Agentic engineering (green), Operating models (blue), Strategy & leadership (orange).
   Neo proposes the mapping; Herbert approves before it's locked.
2. **No numbering** — skip "INSIGHT 057" / "fig. 057". The "N insights" stat is the DYNAMIC
   published-post count, recomputed every build (57 now, 58 next, ...).
3. **Trending flag** — top-2 most-trafficked articles over the last 30 days, pulled from Google
   Analytics (GA4 Data API) at build time. Separate technical phase; needs GA4 property ID +
   service-account access.
4. **Fonts** — Helvetica Now Display is licensed (no license held) → fallback to Inter (self-hosted).
   Chakra Petch + JetBrains Mono via self-hosted Google Fonts.
5. **Contact** — Contact button scrolls to a contact block at the bottom of the About page with 3 paths:
   - Email: herbert@cubagarcia.com
   - LinkedIn: https://www.linkedin.com/in/herbertcuba/
   - Curamando: website + herbert.cuba@curamando.com
   Free-copy form wires to the existing book email flow.

## Phases

- **Phase 1 — Foundation**: self-host fonts (Chakra Petch, JetBrains Mono, Inter), design tokens as
  CSS variables, duotone image treatment utility, shared nav + footer. New `base.njk`.
- **Phase 2 — Home**: masthead "spec sheet", latest-insight hero, "this month" rail, explore-by-theme
  (3 color-coded columns), APEX band, books + about teaser, contact CTA.
- **Phase 3 — Article template**: rebuild `post.njk` — sticky sidebar, pull quotes, duotone hero,
  "read next" rail.
- **Phase 4 — About + Books**: About (whoami header, stats strip, what-I-do, longer story, contact
  block) + Books (two book panels, free-copies form).
- **Phase 5 — Data layer**: theme taxonomy mapping, dynamic insight count, GA4 trending integration.
- **Phase 6 — Responsive + polish**: mobile nav, grid collapse < 900px, hover states, reduced-motion.
- **Phase 7 — Review on preview → merge to main.**

## Design tokens (from handoff)

Colors: bg `#000`, panel `#0A1A0F`, light `#F2F5F2`, white `#FFF`, text-on-dark `#F4F4F4`,
secondary-on-dark `#9DB39D`, muted `#8FAF8F`, faint `#5C735C`, text-on-light `#1A1A1A`,
secondary-light `#3D4D3D`, faint-light `#7A8C7A`, PRIMARY GREEN `#00E653`, green-on-light `#00A03A`,
theme blue `#0F8BD1`/`#4FB6F0`, theme orange `#FF450F`/`#FF8866`/`#E63E0E`,
borders-dark `#14301C`/`#1C3D26`, borders-light `#C4D1C4`/`#E4E4E4`.
Duotone: `filter: grayscale(1) contrast(1.08)` + overlay `rgba(0,230,83,0.14–0.22)` `mix-blend-mode: hard-light`.

Type: Headings Chakra Petch 700; body Inter (fallback for Helvetica Now Display); meta JetBrains Mono.
Sharp corners everywhere except circular portraits. `//` motif in accent. Trailing `_` cursor accent.

## Open items

- Theme mapping proposal → Herbert approval
- GA4 access (property ID + service account) for trending
- Real book cover + portrait assets (slots exist in mocks)
