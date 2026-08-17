---
title: "Tireless Intelligence Needs a Stopping Rule"
description: "Claude's 650 failed ideas reveal a new leadership problem: how to govern persistence when another attempt can be purchased as compute."
tldr: "Claude did not prove the Riemann hypothesis; an Anthropic-run search produced a preprint advancing a lower bound. As persistence becomes a purchasable input, leaders must choose testable questions, fund retries in stages, require independent evidence, and define stopping rules before tireless systems begin."
permalink: /drafts/b90f4cfe/
layout: post.njk
date: 2026-08-17
---

In August 2026, [Anthropic](https://www.anthropic.com/research/riemann-zeta), the AI company behind Claude, reported that an unreleased research version of its system generated and tested 650 ideas for a famous mathematics problem. Every one failed. The wider effort, run in Claude Code, Anthropic's tool-using coding environment, eventually used 31 million output tokens, units of model-generated text used for metering computation.

The outcome was a new proof about the Riemann zeta function. The open Riemann hypothesis remains unsolved, and Anthropic published no controlled comparison that isolates persistence as the cause. For leaders, the more useful result is operational: a large, instrumented search can now be provisioned, divided among AI systems, and checked as a funded activity.

A human researcher may stop because of fatigue, embarrassment, or the career cost of hundreds of visible failures. Those pressures were not measured in this project, so turning them into a compute budget is an interpretation rather than a finding. Still, the next attempt can now be provisioned. Leadership must decide which questions deserve that persistence, what will count as evidence, and when the search must end.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>Claude's result makes persistence an allocatable search input, which raises the value of human judgment about questions, evidence, and stopping.</p>
</div>

## The result had an evidence system

The Riemann hypothesis, proposed by German mathematician Bernhard Riemann in 1859, says that all the nontrivial zeros of the zeta function lie on a special line in the complex-number plane called the critical line. These zeros carry deep information about the distribution of prime numbers. A lower bound states the minimum share proven to sit on that line; it does not claim that every zero is there.

The [Claude-authored preprint](https://www-cdn.anthropic.com/564f962e60643842f5fcb4a17c9dbc8f608f1c37.pdf) moves that proven minimum from 5/12 to at least 2/3, a gain of 25 percentage points, and reports an optimized value of 0.6725. Number theorist J. B. Conrey had established more than two fifths in a [1989 peer-reviewed paper](https://doi.org/10.1515/crll.1989.399.1), but later human work improved the result further. The 5/12 record had stood since 2020, so the popular “37-year” framing describes a research lineage rather than a 37-year pause.

The proof stands on that lineage. It credits a 2024 peer-reviewed result by number theorists Siegfred Baluyot, Daniel Goldston, Ade Irma Suriajaya, and Caroline Turnage-Butterbaugh, whose work supplied an earlier tool for studying the spacing between zeta zeros. Claude's paper adds a new linear-algebraic reading of that work. Scaled search helped surface a conceptual move within mathematics built by people over decades.

Its current status is a lab-released preprint awaiting conventional journal peer review. Anthropic says internal mathematicians validated the paper and two outside specialists examined it on short notice. A public [Lean 4 formalization](https://github.com/anthropics/zeta-23-lean) adds another layer. Lean 4 is a proof-assistant language, and formal verification means using it to check a precisely encoded theorem and its declared assumptions. That improves auditability while leaving questions about novelty, significance, and independent replication to the wider field.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>The achievement is specific and checkable, but it combines prior human mathematics, a new conceptual reading, extensive search, and several validation layers.</p>
</div>

## Persistence is now a capital allocation problem

Anthropic reports that roughly 60 subagents, meaning delegated model runs assigned to narrower tasks, worked for about a day and a half. They issued 2,400 commands to computer tools, wrote hundreds of small programs, checked calculations against known zeros, searched for counterexamples, and downloaded 54 research papers to investigate whether the result was already known. Each retry sat inside an instrumented process in which proposals were tested, rejected, revised, and reviewed.

This gives a concrete form to what I call the Three Crucibles: the broader shift in which productivity increasingly becomes something an organization can provision as capital. Here, productive capacity takes the form of parallel searches, attached tools, and expert review. The missing cost ledger matters. Anthropic published no dollar cost, total input-token count, hardware spend, or energy use. The evidence supports a narrower conclusion that some forms of persistence have become metered and allocatable.

Yet economic value begins with validated outcomes. A [2023 working paper](https://www.nber.org/papers/w31161) from the US National Bureau of Economic Research, an economics research organization, studied 5,179 customer-support workers and found that an AI assistant raised issues resolved per hour by 14% on average, with much larger gains for less experienced workers. In a different setting, [METR](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/), an independent AI-evaluation organization, ran a 2025 randomized study in which 16 experienced open-source developers completed 246 real software tasks. They took 19% longer when allowed to use early-2025 AI tools. METR now calls that result outdated as a measure of current systems, but it remains a useful warning about trusting activity and confidence instead of measurement.

The settings differ in task, expertise, and tools, so their results should not be averaged into one universal productivity score. Mathematics is unusually friendly to persistent search because a theorem can be stated precisely and a proof can be checked. Strategy, hiring, and product decisions rarely arrive with comparable acceptance tests. Without them, a tireless system can turn a hunch into an expensive stack of persuasive material while learning very little.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>Organizations can buy more search capacity, but value appears only when the task is suitable and progress is measured by validated outcomes rather than agent activity.</p>
</div>

## Put the boundary around the search

I would require a Tireless Intelligence Charter before an agent campaign receives significant money or authority. This is a short, written agreement that fixes the question, evidence, budget, and exit conditions before polished output begins to influence the standards used to judge it.

1. **Name the question.** Specify the decision, theorem, design, or experiment and explain why its upside justifies repeated search. “Find something useful about this market” is too vague because almost any output can be presented as success.
2. **Write the evidence contract.** Define success, what evidence would count against the hunch, novelty, and the level of independent verification required. The verifier should fail differently from the search system, whether that means a domain expert, controlled test, external dataset, separate method, or formal proof.
3. **Release capacity in stages.** Budget model runs, elapsed time, tool permissions, and reviewer hours. Track cost per validated outcome, including review and replication, then fund another stage only when the campaign produces a hypothesis with a clear way to prove it wrong, improves a validated measure, or passes a predeclared evidence gate.
4. **Stop and remember.** Pause when the same failure recurs without a new hypothesis, independent review cannot reproduce the claim, or another portfolio candidate has a higher expected return. Preserve rejected paths, tests, and source history so that a stopped search remains an auditable asset instead of becoming a bill for rediscovering the same dead ends later.

People retain far more than budget authority. Domain experts still contribute ideas, interpret consequences, challenge assumptions, and carry accountability. The change is that stopping becomes an active leadership decision. If the success test and exit rule are written only after a tireless system produces an impressive answer, the campaign has already helped choose the standard by which it will be judged.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>Govern persistent agents through a precommitted charter: a worthy question, independent evidence, staged funding, and a stopping rule that preserves failed work for future use.</p>
</div>

## Meanwhile in sci-fi

<div class="scifi">
<span class="scifi__label">Meanwhile in sci-fi</span>
<p class="scifi__film">Edge of Tomorrow (2014)</p>
<p>Doug Liman's science-fiction film follows Major William Cage, a soldier forced to relive the same battle after every death. Repetition becomes useful only when feedback from one cycle changes what happens in the next.</p>
</div>

For a persistent agent campaign, retries play the role of that time loop, while memory and tests turn repetition into learning. Human responsibility sits at the boundary: choose which problem deserves another loop, define the evidence of progress, and end the campaign when continuation becomes a failure of judgment.
