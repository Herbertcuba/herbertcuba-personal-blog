---
title: "Tireless intelligence needs a stopping rule"
tldr: "Anthropic's Claude research suggests that sustained intellectual search can now be purchased as a budgeted supply of machine attempts, but attempts become valuable only after independent review. Leaders therefore need to choose a worthy question, reserve review capacity, and issue an authorization that expires unless an accountable owner renews it."
permalink: /drafts/b90f4cfe/
layout: post.njk
date: 2026-08-17
---

Anthropic, the AI company behind Claude, says an unreleased research version of its system tried 650 ideas that failed before producing a new proof about the Riemann zeta function. Across two sessions in Claude Code, the company's tool-using environment, the effort consumed 31 million output tokens. An output token is a small unit of generated text used to meter model output. During a later phase, Claude coordinated roughly 60 subagents, meaning delegated AI runs assigned parts of the larger task rather than 60 digital employees.

Those numbers are striking, but they do not prove that persistence caused the result. Anthropic published neither a controlled comparison nor the full cost of the work. The case supports a narrower and, I think, more useful conclusion: sustained intellectual search has become something an organization can provision.

Anthropic did not measure human fatigue, shame, or career risk. The economic contrast still matters. A machine can revisit a failed path without feeling any of them, while its limits appear elsewhere as model usage, tool access, elapsed time, and demands on human reviewers. Once an organization can buy the 650th attempt, leadership has to decide which questions deserve that persistence before the first attempt begins.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Claude's reported search does not establish that retries caused discovery. It shows that persistent search can now be allocated as machine capacity, making question choice, verification, and stopping authority leadership responsibilities.</p></div>

## Start with what was actually proved

The [Riemann zeta function](https://www.anthropic.com/research/riemann-zeta) is a mathematical function whose zeros help describe the distribution of prime numbers. In 1859, the German mathematician Bernhard Riemann proposed that all its important, or nontrivial, zeros lie on a particular line, now called the critical line. That still-unproved claim is the Riemann hypothesis.

The new paper does not prove the hypothesis. It gives an unconditional lower bound, which means a guaranteed minimum that does not assume the hypothesis is true. The paper raises the proven share of nontrivial zeros on the critical line from 5/12 to at least 2/3, with a further optimization stated as 0.6725.

The familiar “37-year record” description also needs care. It reaches back to number theorist J. B. (Brian) Conrey's [1989 peer-reviewed result](https://doi.org/10.1515/crll.1989.399.1), which put more than two fifths of the zeros on the line. Other mathematicians improved the bound after that, and the previous 5/12 record had stood since 2020. This was a substantial step in a living research tradition, not the first movement after 37 empty years.

Its validation status matters just as much as the fraction. The August 13, 2026 v1 on arXiv, the open scholarly preprint repository, is titled *More than two thirds of the zeros of the Riemann zeta function lie on the critical line*. It lists Anthropic mathematicians Levent Alpöge and Ralph Furman as authors who verified the proof and take responsibility for it. Anthropic says number theorists Brian Conrey and Dan Goldston also examined the work on short notice. A public [Lean 4 formalization](https://github.com/anthropics/zeta-23-lean) lets a proof-assistant language check a precisely encoded version of the argument under declared assumptions.

These are meaningful layers of scrutiny, but the paper remains a fresh preprint. No conventional peer review or independent replication has yet been reported. Formal verification can test whether an encoded proof follows from its stated foundations; it cannot by itself establish the work's novelty, importance, or wider economic meaning.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>The result raises a guaranteed minimum share of relevant zeta zeros from 5/12 to at least 2/3 without solving the Riemann hypothesis. Human authorship responsibility, outside examination, and formal checking strengthen the case, while independent scholarly acceptance remains open.</p></div>

## Attempts have become an allocatable input

The process was richer than “try again.” Anthropic reports 2,400 shell commands, hundreds of Python scripts, numerical tests, searches for counterexamples, internal reviews, and checks against 54 papers on arXiv. The successful argument also depended on decades of human mathematics, including a [2024 peer-reviewed paper](https://arxiv.org/abs/2306.04799) on the spacing of zeta zeros, and introduced a new linear-algebraic reading of that prior work.

The record therefore supports a composition story rather than a persistence-only story. Scaled search, existing theory, a conceptual move, and later verification each had a visible role. The published material does not tell us which was decisive.

The accounting is incomplete, however. “650 ideas” is Anthropic's own unit, and 31 million covers output tokens across two sessions, not input tokens or a public invoice. The released figures do not specify a public model price, complete model configuration, hardware and tool cost, every abandoned branch, or the full human review effort. We cannot derive the price of one more attempt or a return on investment from them.

What we can see is a change in capital allocation. More search can be purchased before anyone knows whether it will yield knowledge, which makes independent review a likely constraint. A campaign that produces claims faster than qualified people can test them has created a queue, not value.

Evidence from ordinary work reinforces that distinction. A [2023 working paper](https://www.nber.org/papers/w31161) from the U.S. National Bureau of Economic Research studied 5,179 customer-support agents and found that an AI assistant raised issues resolved per hour by 14% on average. In a different setting, a [2025 randomized study](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/) by METR, an independent organization that evaluates AI capabilities, found that 16 experienced open-source developers took 19% longer with the AI tools then available. METR later warned that the result was a historical snapshot rather than a forecast for newer systems. The outcomes differ because the people, tasks, and workflows differ. Output volume cannot settle the economic question.

For a persistent search, the useful unit is therefore an independently accepted result, with model use, tools, reviewer time, and failed paths included in its cost. Failed paths should also be preserved with their tests and sources. That archive can prevent the next campaign from paying to rediscover the same dead ends.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Machine attempts are an input, not an outcome. Their value appears only when a result survives qualified review, and the honest cost includes the search, the verification queue, and the work needed to preserve what failed.</p></div>

## Give every persistent search an expiring mandate

A tireless system will not decide that an executive hunch has consumed enough attention. Leaders need to make that decision in advance, when hope has not yet accumulated around the campaign. I would use a one-page Tireless Intelligence Charter: an expiring authorization for one question, one evidence standard, and one bounded search.

The record should contain:

- **Question and comparator:** the precise claim or decision being investigated, why it is worth searching, and how the current human or mixed process performs.
- **Evidence contract:** what counts as success, what would disconfirm the hunch, how novelty will be checked, and who can accept a result independently of the delivery team.
- **Limits:** model and tool spend, data and system permissions, elapsed time, and the number of batches reviewers can hold without pausing new work.
- **Expiry and renewal:** a decision date, a renewal owner outside the delivery team, and the evidence required to release another tranche. The system must reject an expired approval; a team cannot renew its own campaign.
- **Closure duty:** revoke credentials, return unused budget, record the final decision, and archive failed hypotheses with their tests and sources.

The authorization should have three plain states. **ACTIVE** allows work only within the current limits and expiry. **PAUSED** blocks new attempts while review or risk questions are resolved. **CLOSED** ends tool access and leaves only the evidence archive. Before launching any new batch, the system reads the current record; a stale approval or a self-issued renewal fails at that boundary.

A first enterprise pilot can make this falsifiable without pretending to offer a universal benchmark. For example, compare one 30-day agent campaign with the current process for the same class of research question. Continue only if at least one result survives independent review, total campaign cost including reviewer time stays below the agreed baseline, and the review queue never exceeds its stated limit. Pause when that queue is full. Close on day 30 unless the separate renewal owner signs a new tranche using recorded evidence.

Track accepted outcomes, reviewer delay, continuations that lacked the required evidence, stops later judged premature, and full campaign cost. Those measures will reveal whether purchased persistence improves the decision process or merely increases the amount of material surrounding it.

This is where the human role becomes more consequential, not smaller. People still contribute ideas, domain knowledge, interpretation, relationships, and judgment. Leadership adds a further obligation: choosing which uncertainty deserves repeated attack, then refusing to confuse a machine's willingness to continue with a reason to let it.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>An AI search should begin with a written question, acceptance test, review limit, expiry, and independent renewal owner. ACTIVE, PAUSED, and CLOSED states turn the stopping rule from a polite instruction into enforceable authority.</p></div>

## Meanwhile in sci-fi

<div class="scifi">
<span class="scifi__label">Meanwhile in sci-fi</span>
<p class="scifi__film">Edge of Tomorrow (2014)</p>
<p>Doug Liman's science-fiction film follows a soldier trapped in a deadly day that resets, while he retains information from each failed attempt. The mapping to persistent AI search is narrow: repetition becomes useful when evidence survives the reset and changes the next move, while human leadership must still decide what counts as progress and when another loop no longer deserves authorization.</p>
</div>
