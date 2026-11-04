---
type: Repository Instructions
---
# Personal blog production repository

Owner: Herbert. Implementation owner for this authorized search release: COCO.
Authority: Herbert Slack C0C315RDBSM/1793814789.684609 explicitly selects Minimal Finder and authorizes production publication.

- Preserve published content, existing indexing, analytics, assets, commerce and deployment configuration.
- Search sources derive only from public posts, never drafts/private/downloads. Keep image/URL validation and safe DOM rendering.
- Preview-only robots/noindex, checkout disabling, tracking stripping, servers and deployment guards do not belong in production changes.
- Read root/nested instructions before edits. Use dedicated branches/worktrees, never edit main directly; preserve concurrent work.
- Plan substantial changes in implementation_plan.md with scope, checks, risks, recovery and delivery.
- Run npm ci, npm test and a production-template build; review diff/whitespace and independent affected behavior. Do not trigger unrelated uploads or external effects.
- Commit clear what-and-why messages. Push approved remote branches, satisfy checks/review, merge without bypassing protections, and verify remote main.
- Git delivery is not deployment proof: verify actual live behavior separately. Report exact blockers without overwriting others.
- Keep secrets/runtime state/generated evidence out of source. Evidence goes to the operation default work repository.
- Remove worktrees/branches only after verified delivery and no needed state remains. Retain requested private comparison branches.
- Production publication is authorized for this selected release only; it does not authorize unrelated content or new spending.
