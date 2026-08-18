---
title: "Tireless intelligence needs a stopping rule"
tldr: "Anthropic's Claude case suggests that organizations can now provision large amounts of persistent search, but the reported mathematical advance remains a fresh preprint and does not show that retries alone create value. Leaders should fund only questions with clear evidence tests, independent review capacity, expiring authority, and enforced pause and closure states."
permalink: /drafts/b90f4cfe/
layout: post.njk
date: 2026-08-18
---

Anthropic reports that an unreleased research version of Claude tried 650 mathematical ideas that did not work. The project kept going.

In its [August 2026 account](https://www.anthropic.com/research/riemann-zeta), Anthropic, the AI company that makes Claude, says the result emerged across two sessions in Claude Code, its tool-using environment for coding and research. The run used 31 million output tokens, meaning metered units of model-generated text, and about 60 subagents over roughly a day and a half. A subagent is a delegated AI run assigned part of the larger task, not an autonomous employee.

Those figures describe activity, not price or cause. Anthropic operated the system and remains the source of the counts. Its public account does not provide input-token totals, a named model build and configuration, a full ledger for computing, tools and human review, or enough comparable campaigns against which to judge this one. Even an “idea” is a project-defined unit. We cannot calculate the return on attempt 651 or conclude that persistence alone caused the result.

We can make a narrower and more important claim. Persistent search has become an operating input that an organization can provision, meter and withdraw. When retries are available on demand, leadership moves upstream to choosing the question, defining acceptable evidence, reserving independent review and deciding when the right to continue expires.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Claude's reported run makes persistence allocatable, but the disclosed token and attempt counts are neither a complete cost ledger nor proof that repetition caused the discovery.</p></div>

## The theorem came with a hard test

The Riemann zeta function is a mathematical function whose zeros, the inputs where its value becomes zero, help describe fluctuations in the distribution of prime numbers. In 1859, German mathematician Bernhard Riemann proposed that every nontrivial zero, meaning every zero outside a simple known family, lies on a particular vertical line with real coordinate one half. That line is called the critical line, and the still-unproved claim is the Riemann hypothesis.

The new result concerns a lower bound: a proven minimum for the long-run share of those zeros that lie on the critical line. The previous record was 5/12, about 41.7%, and had stood since 2020. The [arXiv preprint dated 13 August 2026](https://arxiv.org/abs/2608.13637v1) reports at least two thirds; a refined argument improves that minimum from two thirds to 0.6725. ArXiv is a public repository for research manuscripts, often before journal publication.

The popular “37-year record” line reaches back to [number theorist Brian Conrey's 1989 journal paper](https://doi.org/10.1515/crll.1989.399.1), which proved that more than two fifths of the zeros lie on the line. Mathematics continued to advance after that paper, eventually reaching 5/12. The history is substantial, but it was not a 37-year freeze.

The current preprint lists Levent Alpöge and Ralph Furman, mathematicians at Anthropic, as authors. It attributes discovery of the proof to Claude and says the listed authors verified and communicated it and take responsibility for the paper. Anthropic also says Conrey and fellow number theorist Dan Goldston examined the work on short notice. A [public Lean 4 companion](https://github.com/anthropics/zeta-23-lean) formalizes the argument. Lean 4 is a proof assistant that checks a precisely encoded mathematical statement against declared rules and assumptions.

These are meaningful layers of scrutiny. The result nevertheless remains a fresh preprint without conventional journal peer review or a published independent replication. Formal verification can catch invalid steps in what has been encoded, but it cannot settle who was first, the work's importance or every human judgment involved in translating a written proof into formal code.

That status does not erase the accomplishment. It explains why this is a favorable case for persistent search: mathematics can supply a precise claim, decisive counterexamples and unusually strong checks. Most leadership questions arrive without such a clean finish line.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>The reported advance raises a proven minimum from 5/12 to at least two thirds, with a refinement to 0.6725, while remaining a new preprint whose formal and human checks do not yet amount to independent scholarly acceptance.</p></div>

## Persistence became a provisioned input

According to Anthropic, the agents did more than repeat the same prompt. They wrote hundreds of small computer programs, checked calculations against known zeta zeros, looked for counterexamples and downloaded 54 research papers to investigate whether the idea was already known. The successful proof also stood on decades of human mathematics. Its stated new ingredient was a reformulation, using relations among vectors and matrices, of an existing result about the spacing of zeta zeros.

This mechanism makes the “stamina rather than genius” story too simple. A conceptual move mattered, inherited knowledge mattered, and verification mattered. The record shows that a large search with tools and checks accompanied the discovery, but no controlled comparison tells us what fewer attempts, fewer agents or a different model would have produced.

The economic change is still real. A human researcher may stop after repeated dead ends because time, fatigue, shame and career incentives accumulate. The system's continuation is not governed by those human pressures; it is governed by budgets for computing, tools and review. The Claude case did not measure the human constraints, so this is an interpretation of the structural difference, not a finding about why the theorem was proved.

More candidate work also creates more work for whoever must accept or reject it. That makes expert review capacity part of the search budget rather than an afterthought. The useful measure is full cost per independently accepted outcome, including model and tool use, reviewer time, delay and replication, rather than token volume or agent hours alone.

Evidence from ordinary work reinforces the need for that distinction. A [2023 field study](https://www.nber.org/papers/w31161) distributed by the U.S. National Bureau of Economic Research, an economics research organization, found that an AI assistant increased issues resolved per hour by 14% on average among 5,179 customer-support agents, with much larger gains for novice and lower-skilled workers. In a different setting, [METR's 2025 randomized study](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/) found that 16 experienced open-source developers took 19% longer on 246 real software tasks when allowed to use early-2025 AI tools. METR, an independent AI-evaluation research group, now labels that result a historical snapshot rather than a forecast for newer models.

Neither study tells us the expected return on mathematical agent research. Together they show why activity cannot stand in for value: the outcome depends on the task, the workflow and the acceptance test.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Scaled retries can expand search capacity, but inherited knowledge, conceptual work and verification remain part of production. The relevant economic measure is the full cost of an accepted result, not the amount of AI activity.</p></div>

## Make the right to continue expire

Once retries are easy, a budget ceiling by itself is weak. A system can fill the allowance with polished near-misses, while the delivery team argues that each near-miss justifies another funding round. Continuation therefore needs an evidence gate, an expiry date and an owner who is separate from the campaign.

I think the practical management object should be a one-page search mandate completed before any persistent run begins:

- **Question and comparator:** the exact claim, design or decision being tested, plus the current process against which the campaign will be judged.
- **Evidence contract:** the success threshold, the result that would disconfirm the working idea, the novelty check and the independent party allowed to accept an outcome.
- **Resource and permission caps:** the maximum full cost, elapsed time, attempts, data access and tool authority.
- **Review capacity:** the named reviewers, their available hours and the queue limit that automatically pauses new candidate work.
- **Expiry and renewal:** the decision date, the evidence required for another funding round and a renewal owner outside both the AI system and its delivery team.
- **Closure duty:** the person responsible for revoking access and preserving failed paths, tests and source records so another campaign does not pay to rediscover them.

The mandate should have three visible states. **ACTIVE** means the approval is current and every cap remains intact. **PAUSED** means the mandate has expired, a resource or permission cap has been reached, the review queue is full, or an evidence gate has failed; no new attempt may start. **CLOSED** means the result was accepted, rejected or abandoned, permissions were withdrawn and the record was archived.

Only the named renewal owner can move a campaign from PAUSED back to ACTIVE, and each renewal should be a new dated approval rather than an overwritten expiry. Before another batch starts, the service launching the work must read the single current record. An old email approval, or a request from the delivery team to renew itself, should fail at that boundary.

A first pilot can stay small: one class of questions with observable acceptance tests, one comparable current workflow and one fixed decision date. Before launch, the team fills in its own cost threshold and review limit. At the decision date, leaders compare independently accepted outcomes, reviewer delay, renewals granted without new evidence, stops later judged premature and total campaign cost. If the threshold set in advance is missed or review capacity is exhausted, the campaign closes. The Claude case supplies no universal number for that threshold, which is precisely why it belongs in the mandate rather than in a vendor promise.

This changes the leadership question from how much intelligence the organization can summon to how much persistence it is willing to authorize under evidence. Tireless systems can carry the search further, but accountability still sits with the people who choose the destination and enforce the end.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Persistent AI work should run under an expiring mandate with a comparator, evidence threshold, resource and permission caps, reserved review capacity, independent renewal authority and an enforced path from ACTIVE to PAUSED or CLOSED.</p></div>

## Meanwhile in sci-fi

<div class="scifi">
<span class="scifi__label">Meanwhile in sci-fi</span>
<p class="scifi__film">Edge of Tomorrow (2014)</p>
<p>Director Doug Liman's film follows Major William Cage, a soldier forced to relive the same battle after each death. The repetition becomes useful only when each return supplies evidence toward a defined escape; mapped to organizational AI, the agents provide the retries, while leaders decide what counts as learning, who may authorize another attempt and which result ends the campaign.</p>
</div>
