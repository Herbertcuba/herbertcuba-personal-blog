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
