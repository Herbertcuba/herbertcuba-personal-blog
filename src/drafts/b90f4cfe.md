---
title: "Claude’s 650 failures made persistence a capital decision"
excerpt: "An AI system can keep searching after people would stop. That makes persistence fundable, but it also makes the decision to continue a leadership responsibility."
tldr: "Anthropic’s reported Riemann-zeta result shows that a large, instrumented AI search can now be bought as a metered input. The result is promising but not yet independently reproduced or conventionally peer reviewed, and mathematics offers unusually clear tests. Leaders should therefore fund persistent AI campaigns only when the question, evidence threshold, review capacity, renewal authority, and technical stop are defined in advance."
tags:
  - artificial intelligence
  - leadership
  - strategy
  - governance
permalink: /drafts/b90f4cfe/
layout: post.njk
date: 2026-08-18
---

Anthropic says Claude tried 650 ideas and none worked. The next leadership question begins exactly there: who gets to authorize more?

> “Initially, Claude generated and tried 650 ideas, none of which worked.”

[Anthropic](https://www.anthropic.com/research/riemann-zeta), the AI company behind Claude, reported that an unreleased research model later coordinated about 60 subagents for roughly a day and a half. A subagent is a delegated AI process working on part of a problem with access to tools. Across two sessions in Claude Code, Anthropic’s environment for reading files, running commands, and coordinating such work, the system produced 31 million output tokens. An output token is a metered unit of model-generated text, not a dollar cost or a measure of useful thought.

The run produced a serious new mathematical claim, but the process numbers do not show that attempt volume caused it. There was no controlled comparison with fewer agents or tokens, and Anthropic has not published a complete cost ledger. The defensible economic shift is narrower: an organization can now provision a large search, meter it, and decide whether to buy another round.

I think this is what it means for productivity to become capital. Some persistence that once depended on a person absorbing fatigue, repeated disappointment, opportunity cost, and possible reputational damage can instead be funded through models, tools, and reviewers. Anthropic did not measure those human pressures, so the comparison is an interpretation rather than a finding. The leadership consequence still holds: continuation becomes an allocation decision.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Claude’s reported scale makes repeated search purchasable, but 650 failures and 31 million output tokens measure activity. They do not establish causation, total cost, or value.</p></div>

## What the money actually bought

Claude did not prove the Riemann hypothesis. The Riemann zeta function is a mathematical object whose zeros reveal information about how prime numbers are distributed. In 1859, German mathematician Bernhard Riemann proposed that all of its nontrivial zeros lie on a specific location called the critical line. That famous claim remains unproved.

The [new preprint](https://arxiv.org/abs/2608.13637) concerns a lower bound: a proven minimum share of those zeros that lie on the critical line. It raises the prior bound from 5/12 to at least two thirds, a gain of 25 percentage points. The popular 37-year framing begins with number theorist J. B. Conrey’s [1989 result](https://doi.org/10.1515/crll.1989.399.1) of more than two fifths, but human mathematics kept advancing; the 5/12 record was reached in 2020.

Nor did the system search an empty landscape. The proof builds on a [2024 peer-reviewed pair-correlation result](https://arxiv.org/abs/2306.04799) by four number theorists. Pair correlation studies how zeta zeros are spaced in relation to one another. The new ingredient reorganizes constraints from that earlier work as a linear-algebra problem, allowing them to be analyzed together to obtain the stronger bound. Persistence helped surface and test a conceptual move; it did not replace the accumulated mathematics that made the move possible.

Anthropic reports that the agents ran numerical checks, looked for counterexamples, reviewed one another’s work, and searched 54 papers on arXiv, an open repository for research preprints, for prior results. It also released a [Lean 4 artifact](https://github.com/anthropics/zeta-23-lean). Lean 4 is a theorem-proving language: formal verification means its software checks a precisely encoded statement and proof under declared assumptions. That is a strong audit layer, although it cannot by itself decide novelty, importance, or whether the encoding captures every intended claim.

> **Evidence status, 13 August 2026:** The public set consists of Anthropic’s operational account, arXiv version 1 of the manuscript, and the Lean 4 repository. Specialist number theorists Brian Conrey and Dan Goldston examined the paper on short notice. The public record does not establish independent reproduction or conventional journal peer review, and it does not disclose the exact model build, complete prompts and traces, input and cache tokens, all human interventions, total cost, or a frozen repository revision in the evidence cited here.

What the budget bought, then, was not guaranteed insight. It bought a bounded right to keep searching across many candidate paths, plus the tools needed to reject most of them. That right has value only when failures narrow the search and a result survives checks outside the system that proposed it.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>The result combines prior human mathematics, a new linear-algebraic treatment, scaled search, and several validation layers. The economic asset is an instrumented right to continue, not raw token volume or automatic genius.</p></div>

## Meanwhile in sci-fi

<div class="scifi">
<span class="scifi__label">Meanwhile in sci-fi</span>
<p class="scifi__film">Edge of Tomorrow (2014)</p>
<p>Director Doug Liman’s science-fiction film follows a soldier forced to repeat the same deadly day. Repetition becomes useful because information survives each reset and changes what he tries next.</p>
<p>The mapping is limited but useful: a persistent AI campaign creates value only when failed attempts alter the next search and an external rule defines escape. Repetition without retained evidence is consumption, not learning.</p>
</div>

## Persistence makes verification scarcer

Mathematics is an unusually favorable setting for persistent search because the target can be stated precisely and each proposed proof can be attacked. Even there, formal checks and specialist examination are different from independent reproduction and acceptance by the field. In strategy, product discovery, or organizational design, the gap is wider because a system can generate increasingly persuasive material without moving closer to a testable answer.

Evidence from ordinary work reinforces that warning. A [2023 field study](https://www.nber.org/papers/w31161) published by the U.S. National Bureau of Economic Research found a 14% average increase in issues resolved per hour when customer-support workers received an AI assistant. A [2025 randomized study](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/) by the independent research organization METR found that experienced open-source developers using early-2025 AI tools took 19% longer on its selected tasks. The settings differ, so the figures should not be averaged into one productivity score. Together they show why output and confidence cannot stand in for measured value.

As candidate generation gets cheaper, independent judgment becomes the constrained input. Domain experts still contribute ideas, context, interpretation, and accountability; their role does not collapse into approving budgets. But leaders must reserve reviewer time and measure the full cost per independently validated outcome, including replication, security work, failed attempts, and the project that lost access to the same people and money.

The leadership question is which question is worth repeating, and what evidence earns the next attempt.

That question should be answered before a system starts producing reasons to continue. Otherwise every weak signal can become a new hypothesis, every failed test can justify a refined prompt, and a campaign can consume more capital while appearing more sophisticated.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Persistent search shifts scarcity toward evidence design and independent review. Leaders should compare campaigns by validated outcomes and full opportunity cost, not by the amount of agent activity they create.</p></div>

## Make the right to continue expire

A useful charter for tireless intelligence is a one-page contract for the next tranche of search. It names the question, the competing use of resources, the full spending ceiling, the acceptance test, the reviewer, and the person allowed to renew. It also gives the campaign an expiry date and makes failed work portable.

Consider an explicitly hypothetical decision at a Nordic payments company. The company wants to know whether an agent-assisted search can reduce false declines, meaning legitimate card payments incorrectly blocked as fraud. Its charter could read:

- **Question and comparator:** Find a change that reduces false declines on held-back historical data, compared with a conventional update to the existing fraud rules.
- **Envelope:** Release SEK 300,000 for seven days, within a hard ceiling of SEK 500,000 and 60 fraud-analyst review hours. Record the sponsor’s estimated 10–20% chance of success and the maximum downside as the money, reviewer time, and delayed rules update.
- **Evidence gate:** Require an independent replay showing a 15% reduction in false declines without increasing fraud loss by more than 0.1 percentage point. A partial result of at least 8% is the minimum evidence that can support one renewal.
- **Authority and outcome:** At day seven the campaign pauses automatically. Only the risk owner, after an independent reviewer signs the result, can release the remaining SEK 200,000. The delivery team cannot renew itself. In this example no candidate reaches 8%, so the campaign closes and the second tranche moves to the rules update.

The operating system should enforce that decision. Every campaign is active, paused, or closed; when it is paused or closed, the service controlling model and tool credentials rejects new jobs. Renewal is recorded in a decision log the delivery team cannot alter. These are established controls: staged funding, quotas, automatic cutoffs, and separation between the team doing the work and the person approving more. Machine-speed search makes their combination more urgent, not conceptually new.

Exit belongs in the same charter. Prompts, tests, candidate results, and failed paths should be exportable in ordinary formats; retention and deletion rules should cover company data; credentials should be revoked at closure; and a renewal should permit a change of model provider. That preserves useful failures without turning the first supplier into a permanent dependency.

Some questions should fail before funding. “Find our next market” has no observable acceptance test, no natural point of disconfirmation, and no defensible reviewer. Leadership must first turn it into a specific decision with external evidence, or decline the persistent search altogether.

A tireless system can propose another attempt. It cannot take responsibility for why that attempt deserves scarce money and attention more than another question does. Before work begins, an accountable person should be able to state what success means, what evidence can reopen a paused campaign, and which conditions make the answer remain no. That is how persistence becomes productive capital rather than an endless mandate.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Give every persistent AI campaign an expiring budget, an external evidence gate, an independent renewal owner, and a technically enforced closed state. A real stopping rule must be able to redirect the unspent tranche and preserve the failures without preserving the campaign.</p></div>
