---
title: "Who Gets to Authorize Attempt 651?"
excerpt: "Claude’s mathematical result shows that organizations can now buy far more persistence than any person can supply. The harder question is which problems deserve it, what evidence counts, and when the run must end."
tldr: "Anthropic reports that an unreleased Claude research system advanced a bound related to the Riemann hypothesis after 650 unsuccessful ideas and a large, delegated search. The case does not prove that retries caused the result, but it shows that persistence can be funded as a metered input. Leaders now need to authorize bounded questions, reserve independent verification capacity, count the full cost of search, and enforce stopping rules before another attempt begins."
featuredImage: "/images/posts/who-gets-to-authorize-attempt-651.webp"
permalink: /drafts/b90f4cfe/
layout: post.njk
date: 2026-08-18
---

What would make attempt 651 worth funding?

That is the management question inside [Anthropic’s August 2026 mathematical result](https://www.anthropic.com/research/riemann-zeta). The company reports that an unreleased research version of Claude worked across two sessions in Claude Code, its tool-using coding-agent environment, and produced 31 million output tokens in total. An output token is a unit of model-generated text used to meter usage. Anthropic says 650 ideas initially failed; during the later session, the system spent about a day and a half coordinating roughly 60 subagents, delegated AI processes working on separate tasks rather than 60 human employees.

Those figures document an unusual volume of search. They do not establish that the volume caused the result, and “idea” is Anthropic’s reporting unit rather than a standard measure of an attempt. The research model has not been released, there is no controlled comparison with a smaller run, and the public record contains no complete dollar or personnel-cost account.

Still, the case exposes a real change. A machine does not become tired or embarrassed, and it has no career to protect after a long sequence of visible failures. Anthropic did not measure those human costs, but an organization can now replace some of the burden they create with metered computation. I think that changes the economics of thinking: leadership must decide which questions deserve purchasable persistence before a tireless system turns every plausible hunch into another funded run.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Anthropic’s numbers show that a long, delegated search can be purchased, not that retries alone caused a breakthrough. Attempt 651 is therefore a leadership decision about the question, the evidence, the full resource commitment, and the exit.</p></div>

## A proof changes the value of a retry

The Riemann zeta function is a mathematical function whose zeros carry information about the distribution of prime numbers. In 1859, German mathematician Bernhard Riemann proposed that all its nontrivial zeros lie on the “critical line,” where the real part of the function’s input equals one half. That claim, the Riemann hypothesis, remains unproved. Claude did not solve it.

The new result concerns a lower bound, meaning a proven minimum share of those zeros. The [revised arXiv preprint submitted on August 13, 2026](https://arxiv.org/abs/2608.13637), on the open repository for research manuscripts, states that at least two thirds of the nontrivial zeros, counted with multiplicity, are simple and lie on the critical line. A simple zero occurs once rather than being repeated. The paper also gives an optimized constant of 0.6725. The earlier bound was 5/12, so the basic theorem advances the proven minimum by 25 percentage points; it says nothing about whether the remaining third lies elsewhere.

The popular “37-year record” description compresses an important history. Number theorist J. Brian Conrey’s peer-reviewed 1989 paper established more than two fifths, but later human work raised the bound to 5/12 by 2020. The 2026 proof also builds on that research lineage. Persistence mattered inside a problem that generations of mathematicians had already made precise.

The current preprint lists Anthropic mathematicians Levent Alpöge and Ralph Furman as the authors who verified the work and take responsibility for it, while crediting Claude with discovering and writing the argument. Anthropic also released a [Lean 4 formalization](https://github.com/anthropics/zeta-23-lean). Lean 4 is a proof-assistant language that checks whether a precisely encoded theorem follows from declared definitions and axioms. That is a serious validation layer, but it does not by itself settle novelty, importance, or acceptance by the mathematical community. The paper remains a preprint, and the public evidence does not amount to completed journal review or an independent replication of the entire run.

This inspectability is central to the economics. A failed proof route can be rejected against a fixed statement, while a successful route can face numerical, formal, and expert checks. Many business questions offer no comparable verdict. If leaders cannot describe what would disprove an agent’s answer, more attempts may produce more persuasive material without producing more knowledge.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>The zeta case rewards persistence because the question and the proof can be checked. Its bounded theorem, formal artifact, and human review make each retry more informative than another round of untestable strategic prose.</p></div>

## Persistence can now be budgeted

The 31 million output tokens are evidence of scale, not a price tag. The complete economic input also includes tool calls, orchestration, expert attention, failed-path storage, and the work those resources could have supported instead. Anthropic has not published enough model, pricing, staffing, or opportunity-cost information to calculate a return on this search.

That gap points to the deeper shift. Repeated cognitive work can now be provisioned: more parallel routes, more counterexample searches, and more checks can be authorized without asking one person to endure every dead end. Yet computation does not remove scarcity. It moves scarcity toward good questions and credible verification, especially when specialists must inspect machine output faster than the system can produce it.

One successful theorem cannot tell us the average return from persistent agents. It gives no denominator of comparable searches that consumed resources and found nothing. For leaders, the useful measure is therefore the total resource used per independently validated outcome, including reviewer time and the strongest alternative use of the same capacity. Agent count, token volume, and elapsed time describe activity; they cannot decide whether that activity was worth buying.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>AI makes retries allocatable, but the relevant cost includes computation, tools, verification, and displaced work. The scarce resource increasingly becomes judgment about where another search has a credible chance of producing validated value.</p></div>

## Write the end before the run begins

A persistent AI search should start with a short authorization record. Its purpose is not to predict the winning route. It is to make the right to continue conditional before sunk cost and polished interim results begin arguing for themselves.

That record needs six lines:

- **Question and owner.** Name the fixed, disprovable question and the human accountable for its value.
- **Acceptance test.** State what counts as success, novelty, and disconfirmation, then reserve an independent verifier with a different failure mode from the system doing the search.
- **Resource envelope.** Cap model usage, tool and vendor spend, elapsed time, and reviewer hours for the next stage.
- **Best alternative.** Name the other project competing for those resources, so continuation has a real comparison rather than a vague promise of upside.
- **Renewal evidence.** Give renewal to a named human who is not the running system, and require a predeclared improvement such as a new testable route or a cleared verification gate.
- **Closure.** Specify the condition that ends the stage and what happens to queued work, temporary credentials, and unfinished tasks.

The last line has to exist in software as well as policy. The orchestrator, meaning the software that assigns work to subagents, should check a current authorization before admitting a new task. Quota controls should reject further usage at the limit, the queue should stop releasing pending work when authorization closes, and temporary tool access should expire. A request from an agent to reopen a closed run is invalid; a human must issue a new authorization with new evidence.

Other reviewers enter when the scope creates a concrete reason for them. Sensitive data brings in the data and security owners. Contracted external spend brings in procurement. Delegated decisions affecting people bring in the accountable workforce representative. This keeps oversight tied to material exposure instead of turning every experiment into a ceremonial committee.

Applied retrospectively, the Claude case fills only part of this record. The public sources give us a theorem, several validation layers, 31 million output tokens across both sessions, and the later session’s time and subagent counts. They do not disclose a full cost limit, planned reviewer capacity, the strongest competing use of those resources, or the precommitted rule for ending or renewing the search. The result may still be important. It simply cannot serve as a complete investment template.

Failures should survive closure as an auditable record of rejected hypotheses, tests, and proof routes. If a stopped run produces an interesting side result, that result can support a new question; it should not silently extend the old authorization. This is how an organization gains from machine persistence without giving persistence authority over its own purpose.

<figure class="fig-band article-diagram" data-diagram-id="authorization-record">
<figcaption class="fig-cap">Fig. — Six lines turn persistent search into a bounded authorization record.</figcaption>
<svg width="100%" height="auto" viewBox="0 0 760 480" role="img" aria-labelledby="ad-authorization-record-title ad-authorization-record-desc" xmlns="http://www.w3.org/2000/svg">
<title id="ad-authorization-record-title">Six lines of persistent-search authorization</title>
<desc id="ad-authorization-record-desc">A six-field record for authorizing a persistent AI search: question and owner, acceptance test, resource envelope, best alternative, renewal evidence, and closure.</desc>
<g class="article-diagram__decoration"><rect x="0" y="0" width="760" height="480" fill="#000000"></rect></g>
<g class="article-diagram__claim" data-claim-id="claim-question-owner"><rect x="40" y="50" width="210" height="155" fill="#0A1A0F" stroke="#00E653" stroke-width="2"></rect><text x="145" y="118" text-anchor="middle" fill="#DCE7DE" font-size="32" font-weight="700">Question</text><text x="145" y="150" text-anchor="middle" fill="#DCE7DE" font-size="32" font-weight="700">and owner</text></g>
<g class="article-diagram__claim" data-claim-id="claim-acceptance-test"><rect x="275" y="50" width="210" height="155" fill="#0A1A0F" stroke="#00E653" stroke-width="2"></rect><text x="380" y="118" text-anchor="middle" fill="#DCE7DE" font-size="32" font-weight="700">Acceptance</text><text x="380" y="150" text-anchor="middle" fill="#DCE7DE" font-size="32" font-weight="700">test</text></g>
<g class="article-diagram__claim" data-claim-id="claim-resource-envelope"><rect x="510" y="50" width="210" height="155" fill="#0A1A0F" stroke="#00E653" stroke-width="2"></rect><text x="615" y="118" text-anchor="middle" fill="#DCE7DE" font-size="32" font-weight="700">Resource</text><text x="615" y="150" text-anchor="middle" fill="#DCE7DE" font-size="32" font-weight="700">envelope</text></g>
<g class="article-diagram__claim" data-claim-id="claim-best-alternative"><rect x="40" y="275" width="210" height="155" fill="#0A1A0F" stroke="#00E653" stroke-width="2"></rect><text x="145" y="343" text-anchor="middle" fill="#DCE7DE" font-size="32" font-weight="700">Best</text><text x="145" y="375" text-anchor="middle" fill="#DCE7DE" font-size="32" font-weight="700">alternative</text></g>
<g class="article-diagram__claim" data-claim-id="claim-renewal-evidence"><rect x="275" y="275" width="210" height="155" fill="#0A1A0F" stroke="#00E653" stroke-width="2"></rect><text x="380" y="343" text-anchor="middle" fill="#DCE7DE" font-size="32" font-weight="700">Renewal</text><text x="380" y="375" text-anchor="middle" fill="#DCE7DE" font-size="32" font-weight="700">evidence</text></g>
<g class="article-diagram__claim" data-claim-id="claim-closure"><rect x="510" y="275" width="210" height="155" fill="#0A1A0F" stroke="#00E653" stroke-width="2"></rect><text x="615" y="360" text-anchor="middle" fill="#DCE7DE" font-size="32" font-weight="700">Closure</text></g>
</svg>
</figure>

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Authorize persistent search through a fixed question, an independent evidence test, a staged resource limit, a named renewal decision, and a technically enforced close. The system may propose another attempt, but it must not grant itself one.</p></div>

## Meanwhile in sci-fi

<div class="scifi">
<span class="scifi__label">Meanwhile in sci-fi</span>
<p class="scifi__film">Edge of Tomorrow (2014)</p>
<p>In this science-fiction film, a soldier trapped in a time loop repeats the same battle after every death and improves because he carries knowledge into the next day. The mapping to persistent AI is narrow: agents supply repeatable attempts, while leaders must decide what each failure teaches, whether another loop has a credible path to new evidence, and when the day should stop repeating. Someone still has to decide whether tomorrow is worth buying.</p>
</div>
