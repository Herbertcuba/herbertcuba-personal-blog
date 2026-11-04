---
type: Specification
title: Wider mobile menu search with article thumbnails
---

# Menu-search refinement

Same owner commitment website-current-mirror-1793811009; refinement authority
Herbert Slack C0C315RDBSM/1793812592.838479. Base B6d18fc505afbc5afcbdfb845be2c96cc1fb9e64d.
Only B changes; A, baseline and production main remain untouched.

- P1: Make the search dialog and usable input visibly wider on mobile, targeting
  an8px outer gutter and16px inner padding at320/390px. Override native dialog
  width constraints if needed; no horizontal overflow. Keep desktop width and
  original typography/colors; do not redesign the site or change search placement.
- P2: Incorporate each article's existing public featured image into its result
  as a compact thumbnail alongside the title/excerpt. Preserve readable text,
  a sensible crop and a coherent click/focus target. Avoid duplicate accessible
  names. No newly generated images or private/draft asset paths.
- P3: Missing, invalid or failed thumbnails degrade to readable text-only results,
  without broken-image icons or failing search. Admit only approved public image
  paths/hosts; never permit script/data/private URLs or introduce tracking.
- P4: Existing title/full-text relevance, relative navigation, empty/reset,
  no-results, fetch-failure/retry, populated-firstEscape, forward/reverse focus
  trap and trigger return keep working. Noindex/privacy controls unchanged.
- P5: Verify at320/390/1440px, real image loading and safe fallback; relevant
  browser/axe checks. Independent final tests run on actual HTTPS8466. Retain
  existing B preview unchanged until the candidate passes local checks.

Implement in an isolated refinement worktree, then fast-forward only the existing
B featurebranch and safely replace its served build. No production merge or
public deployment. Evidence is a new immutable phase under the same owner task.
