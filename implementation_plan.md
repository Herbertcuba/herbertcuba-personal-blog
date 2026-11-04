# AION Ebook 4.3 Replacement

## Scope

Replace only the paid AION PDF source and the corresponding private Vercel Blob used by the verified Stripe purchase flow. Keep the public page, price, checkout behavior, filename, and the other paid books unchanged.

## Steps and validation

1. Replace `src/private/downloads/aion-engineering-the-organization-for-the-age-of-agents.pdf` with the Slack attachment `F0C5ACWMK53`.
2. Validate the file as an unencrypted, readable PDF and record its byte size, page count, and SHA-256 digest.
3. Run the repository tests and build, then review the focused diff and whitespace checks.
4. Commit, push, merge to `main`, upload the changed private asset through the repository's existing Vercel Blob synchronizer, and verify the live blob digest.

## Expected outcome

New AION purchases download version 4.3 from the existing private purchase path, while all checkout and access controls remain unchanged.

## Risks and recovery

- A malformed PDF could break delivery; validation and build checks run before upload.
- An interrupted blob overwrite could leave uncertain state; compare the remote manifest and downloaded blob digest before claiming completion.
- Recovery is to restore the previous tracked PDF (`be1165b86a5dda7770fa51627cd6ee3da87f286cb441d5b59a04dddb70a5cea4`) and run the same synchronizer, without changing checkout code or payment records.


# Draft wording correction — 1792367013

COCO task article-edit-scope-1792367013. Herbert requested the exact change “It looked like software” to “It looked like a software company” in the existing review-only draft. Change only that sentence, preserve draft exclusion/permalink, hero and all other content. Verify diff/whitespace, site tests and Eleventy build, then branch/PR/merge and exact live phrase. No blog post or LinkedIn publication, schedule, pricing or protected content change. Recovery: restore previous draft version in a follow-up commit; do not alter release receipts. Existing repository has no root AGENTS.md; README/package scripts define site validation.


## 2026-10-19 — Playable centerpiece video (1792367918)

Add the exact source talk GLvFTMtw4Jk at the originally supplied two-minute start after the article opening. Use a responsive privacy-enhanced iframe, user-initiated playback, accessible title, fullscreen support and direct-watch fallback. Preserve all article wording, draft exclusion, hero and permalink. Verify site tests/build and rendered player at mobile/desktop; branch/PR/merge and live readback. No publication or scheduling. Preserve prior immutable preview and register a new digest-bound assembly before later Release approval. Recovery restores the prior draft while retaining author request and prior receipts.


## 2026-10-19 — Dark source-video panel (1792370639)

Apply the existing dark-panel and foreground/accent tokens to the source-video figure, with responsive inset spacing and a readable caption link. CSS presentation only: preserve the now-scheduled release result, video source/start, content, timing and approval. Validate existing site tests, build, diff/whitespace, and actual mobile/desktop computed styles/overflow after deployment. Deliver through isolated branch/PR/merge. Recovery is a focused stylesheet revert, never rescheduling or rewriting approved content. Reuse task article-edit-scope-1792367013; its failed-checkpoint closure gap remains independently retained.

## Correct foundation: current-site mirror and search branches — 1793811009

- Scope: actual production source at b969f1d2; no old prototype or copied design
  shell. First verify a faithful noindex private mirror. Then fork two separate
  homepage/menu search branches from that exact verified mirror commit.
- Source delivery: preview/current-site-mirror-1793811009, then independent A/B
  featurebranches. User explicitly requires branch-only testing, no main merge.
  Guard Vercel auto deployment in branch config before pushing any commits.
- Checks: npm ci, npm test, safe uncredentialed preview build, real homepage and
  representative deep-page desktop/mobile comparison against current live site,
  asset/navigation coverage; noindex meta/header + robotsDisallow; no drafts,
  private files, analytics or external mutation. Independent browser testing of
  actual branch URLs, keyboard and search quality; preserve existing site.
- Risks/recovery: asset rewrite/build upload hooks, commerce links, outdated
  source, private drafts, accidental deployment, branch differences outside
  search. Use explicit preview config and public assets; never modify primary
  checkouts/main. Preserve old preview rollback, source pin and served hashes.
- Task: website-current-mirror-1793811009, linked correction of the rejected
  prototype foundation in website-search-comparison-1793807569. Evidence in
  default-work session worktree under this task. No publication/spend authority.

## Menu search experiment B — search-menu-v1

Preserve verified mirror 8e08825 and all original homepage sections. Add a Search
control in the actual desktop/mobile navigation, opening one scoped native dialog.
Use the separately supplied shared public corpus/engine; never inherit inline A UI.
Validate first Escape with populated input, focus containment/restoration, mobile
menu, empty/reset/error/retry/no-results/injection and 390/1440 layouts plus axe.
Run npm ci/test/build:preview, review whitespace/diff and commit branch-only.
Recovery removes only B UI; no production or mirror baseline mutation.

## B mobile width and article thumbnails — 1793812592

- Scope: P1-P5 in docs/menu-search-polish.md; B only from6d18fc50. Wider mobile
  modal/input, compact public article thumbnails, safe text-only fallback.
- Implement in isolated refinement worktree. Existing baseline/A/B review stays
  unchanged while checks run; integrate only into B branch after independent
  local checks, then verify actual HTTPS8466. Never merge to productionmain.
- Checks: npm ci, npm test, build:preview; focused320/390/1440 browser/axe,
  image load/fallback/security, width comparisons and keyboard/search regression.
- Risks: native dialog max-width, stale source image paths, bad network images,
  reduced result text width and index-schema compatibility. Scope styles;
  optional validated image field and graceful failure; keep desktop stable.
- Recovery: restore B commit/build6d18fc50; preserve noindex and other branches.
- Evidence: default-work dedicated polish worktree under task
  website-current-mirror-1793811009/menu-polish-1793812592/; no new task/queue.
