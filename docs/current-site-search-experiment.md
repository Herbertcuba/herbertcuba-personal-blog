---
type: Specification
title: Current-site mirror and independent search branches
---

# Correct foundation

Authority: Herbert Slack C0C315RDBSM/1793811009.292769; owner task
website-current-mirror-1793811009; original thread1793804582.208439.
Prior prototype comparison is rejected as a foundation. No acceptance is inferred.

## Step1: actual-site mirror

- M1: Branch actual production repository Herbertcuba/herbertcuba-personal-blog
  from pinned origin/main b969f1d2e1499e1d0593c42b370f51abcd10ef27. All public
  templates, homepage, content, fonts, palette, navigation, assets and routes
  remain production source, not a reconstructed shell or redesign repository.
- M2: Compare actual rendered homepage, Insights, article and AION/about routes
  against current public site at390/1440px. Stylesheet source hash must remain
  identical. Explain dynamic data/content differences against the exact pin;
  do not assert parity from font/color matching alone. No added search or
  experiment landing page at this stage, no user-visible redesign/banner.
- M3: Private loopback+Tailscale Serve mirror. robots.txt Disallow:/, noindex
  metadata in all HTML, X-Robots-Tag noindex/nofollow on responses. No tracking,
  private downloads, drafts, API writes, uploads, new spend or public deployment.
  Preserve visible public pages/assets. Canonical links may remain production.
- M4: Safe reproducible build and existing relevant tests pass. Record source
  commit, known parity exceptions and served file hashes. Only after independent
  baseline verification fork A/B. Preserve unrelated source and productionmain.

## Step2: separate featurebranches

- S1: Two featurebranches each directly descend from the same verified mirror
  commit; neither includes the other's UI. Keep baseline mirror unchanged.
  Push/readback those branches but do not merge test branches into productionmain.
- S2: A integrates a prominent inline search field near the top of the ACTUAL
  homepage (below introductory masthead, before latest insight), without replacing
  its original sections. Results show contextual snippets and article links.
- S3: B integrates search into the ACTUAL navigation/menu, desktop and mobile.
  Opens a native accessible dialog; firstEscape closes even from populated input,
  focus stays inside and returns to trigger. Homepage layout remains baseline
  except the menu control and necessary scoped dialog markup/styles.
- S4: Shared public collection policy: index real built public posts from this
  exact source; title+summary+full article text, title-weighted relevance. Exclude
  drafts/private paths. Both branches have identical corpus digest/count.
  Queries `agentic software`, exact titles, case/punctuation and a body-only term
  work. Empty, clear/reset, no-results and failed-load/retry states are explicit.
  Query content never injects markup. Result links stay on each test mirror.
- S5: Same production styling, no unrelated design/content edits. Keyboard,
 390/1440 layout and relevant accessibility checks; no network analytics or
  mutations. Initial/no-query homepage preserves original public content.
- S6: Independent actual-host checks, reviewed branch diffs, remote commit
  readback and source-thread links. Human preference/public production stay
  separate from technical task completion. No lab page or article-library
  replacement as a substitute for homepage/menu integration.

## Limits and recovery

No semantic backend, paidservice, new repository, branch promotion, production
build/upload, DNS/model/schedule changes or contentpublication. Serve static
public output only; record excluded integrations (commerce/API) honestly.
Preserve all prior evidence; revert only this experiment's private host bindings
if needed. Retain branch worktrees as the requested review environments.
