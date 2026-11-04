---
type: Technical Documentation
title: Homepage search experiment A
---

# Homepage search experiment A

Base: independently verified current-site mirror
`8e08825bba3b140b8d07366a4dfbece7531f8b94`.
Shared index/engine/module: `56dc1223bc99e185736474c35af462662b90f975`.

This branch adds inline search between the original masthead and latest insight.
It does not replace the homepage, menu, article layouts or existing stylesheet.
The search uses published source collection titles, summaries and complete
rendered article text. Results stay on this test site's original article routes.
No draft/private content, search backend, tracking or purchase effects are added.

Run `npm run build:preview`, `npm test`, then
`PREVIEW_PORT=4194 npm run serve:preview`. The preview CSP permits same-origin
connections to load `/search-index.json`; external connections/form submission
remain blocked. All baseline noindex and private-server protections remain.

Try `agentic software`, `The Software That Decides`, a body-only word, then Clear
and a nonexistent phrase. The initial empty state shows guidance, not every
article. Search works with the keyboard. No-result and network-error/retry states
are separate. Results use plain text DOM nodes, never query HTML injection.
At most 12 results are shown with the total count announced in a live status.

This is a branch-only private comparison, not production delivery or a selected
user preference. Independent acceptance and hosted receipts belong to the owner.
