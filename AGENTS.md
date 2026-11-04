# Personal blog test branches

Authoritative repository: `Herbertcuba/herbertcuba-personal-blog`.
Accountable owner for this authorized preview work: COCO, operation.founder--content-production.
Source authority: Herbert Slack C0C315RDBSM/1793811009.292769.

## Current assignment and boundaries

- Start from production `main` commit b969f1d2e1499e1d0593c42b370f51abcd10ef27.
- First build a faithful private noindex mirror of the real site; preserve its
  templates, content, styling, home layout, navigation, URLs and interactions.
- Then branch two search experiments from the verified mirror, each in its own
  feature branch and worktree. Add search at the real homepage top or menu.
  Never replace the site with a separate search laboratory or redesign.
- Herbert explicitly requested testing branches: deliver and retain those
  branches; do not merge them into production main or publish/promote them.
- All preview responses need X-Robots-Tag noindex/nofollow; all HTML needs robots
  noindex metadata; robots.txt must Disallow /. No indexing directive alone is
  authentication: use private Tailscale Serve, not public Funnel or Vercel.
- No production/DNS/model/schedule/spending changes. Set branch-local Vercel
  git.deploymentEnabled=false before any push to prevent auto deployment.
- No credentials, paid book files, drafts or private API functionality in the
  served mirror. Disable tracking and external mutation while preserving visible
  content/design. Build previews without upload credentials or production effects.
- Workers are read-only in governance, active configuration and Hatchet. COCO
  owns task website-current-mirror-1793811009 and records attributable evidence.

## Git delivery discipline

- Read root and nested instructions before editing; separate repositories own
  their implementation and instructions. Preserve unrelated/concurrent work.
- Use dedicated session branches/worktrees; never edit main directly.
- Plan scope, steps, validation, risks and recovery in implementation_plan.md,
  preserving previous sections. Planning-only requests do not authorize code.
- Review complete diffs, run npm ci, npm test, a safe preview build and relevant
  browser/accessibility checks. Never invoke credentialed upload scripts.
  Documentation-only changes need diff/whitespace review.
- Commit with clear what-and-why messages; push approved remote branches and
  verify remote hashes. Satisfy checks/review and preserve branch controls.
  Normal authorized delivery includes merge/readback, but this testing task's
  explicit branch-only authority overrides merging into production main.
- Carry authorized work through delivery without routine permission requests.
  Do not bypass protections; report exact remote/check/conflict blockers.
- Track validation and delivery separately across repositories. Report commits,
  source/runtime verification and unresolved gaps; Git is not a deployment proof.
- Retain experiment branches/worktrees as the requested review environment.
  Remove only after selection/disposal or verified delivery with no needed state.
- No new repositories or unrelated onboarding is authorized by these instructions.

## Evidence and documentation

- English content/docs. New authored Markdown begins with truthful type metadata.
- Generated evidence belongs in the designated default work repository, not this
  website checkout: /Users/herbertcubagarcia/Projects/GemcorpAION/worktrees/coco-current-site-evidence-1793811009/projects/operation-support/tasks/website-current-mirror-1793811009/.
- Preserve exact source, attempt, producer, hashes, test outcomes and delivery
  receipts. Hatchet is the sole progress authority, not a Markdown backlog.
- Root owner contract and shared standing authority remain applicable; no
  private sessions, runtime state, credentials or unrelated artifacts in Git.
