---
title: "Claude’s 650 failures reveal why tireless intelligence needs a stopping rule"
excerpt: "A tireless system can turn another attempt into an allocation of tokens, tools, and review time. Leadership begins where that persistence must justify its next budget."
tldr: "Anthropic’s Claude research run shows that bounded search can now be bought at scale, but the result depended on prior mathematics and strong checks. Leaders should fund persistent agents only when the question, acceptance evidence, independent verifier, resource ceiling, renewal authority, and stopping rule are fixed in advance."
permalink: /drafts/b90f4cfe/
layout: post.njk
date: 2026-08-18
---

On 10 August 2026, [Anthropic](https://www.anthropic.com/research/riemann-zeta), the AI company behind Claude, reported that an unreleased research version of its system generated and tried 650 ideas on a famous mathematics problem. None worked. Across two sessions in Claude Code, Anthropic’s tool-using coding environment, the project generated 31 million output tokens, the units used to meter model-written text.

Roughly 60 subagents, delegated AI processes working on parts of the problem, were coordinated over about a day and a half. Those figures describe a large search, but they are neither an invoice nor a controlled experiment. Anthropic disclosed no public dollar cost, and the record cannot tell us whether the number of agents, the token budget, or the 650 failures caused the eventual result.

The durable signal is narrower. A lab could provision another round of search through tokens, tools, elapsed time, and specialist review. A human researcher may experience repeated failure as fatigue or shame, and may fear wasting time or damaging a career; Anthropic did not measure those effects, so this is an economic interpretation rather than a finding from the run. Even so, once persistence can be allocated like other productive capacity, leaders have to decide which questions deserve it and what evidence earns another round.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>The run turned sustained search into a metered organizational input, but its activity counts prove neither causation nor cheap intelligence. The leadership issue is who may authorize another round, under what evidence and limits.</p>
</div>

## What the run actually bought

The search target matters. The Riemann zeta function is a mathematical object whose zeros help describe the distribution of prime numbers. In 1859, German mathematician Bernhard Riemann proposed that all its nontrivial zeros, the meaningful zeros for this problem, sit on the critical line, where a particular coordinate has the value one half. That claim, now called the Riemann hypothesis, remains unproved.

The [public preprint](https://arxiv.org/abs/2608.13637) makes a narrower advance. Under its technical counting rules, it raises an unconditional lower bound from 5/12 to at least two thirds. A lower bound is a proven minimum, while unconditional means the proof does not assume the Riemann hypothesis. The increase is 25 percentage points, but the paper neither locates the remaining zeros nor closes the original hypothesis.

The popular “37-year record” description also needs context. Number theorist J. Brian Conrey established that more than two fifths of the zeros lie on the critical line in a [peer-reviewed 1989 paper](https://doi.org/10.1515/crll.1989.399.1). Later human work raised the record to 5/12 in 2020, so the 37 years mark a historical span rather than an era with no progress.

The new argument is cumulative too. It uses analytic results from a [2024 paper](https://arxiv.org/abs/2306.04799) by number theorists Siegfred Baluyot, Daniel Goldston, Ade Irma Suriajaya, and Caroline Turnage-Butterbaugh, then adds a new conceptual step. Anthropic also reports numerical tests, searches for counterexamples, internal proof review, and checks across 54 papers from arXiv, an online repository for research preprints. What the organization bought was a connected search around inherited knowledge, not a pile of interchangeable guesses.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>Claude’s result is a bounded advance built on decades of human mathematics. The economic novelty lies in provisioning many connected search paths around that inherited knowledge, while the number of failed ideas alone explains neither insight nor value.</p>
</div>

## Proofs can say no

Mathematics is unusually favorable terrain for persistent systems because a candidate answer can meet hard forms of rejection. The theorem states a precise target. Numerical tests can expose contradictions, specialists can inspect the argument, and a formal proof system can check whether each encoded step follows from declared assumptions.

Anthropic released a [Lean 4 formalization](https://github.com/anthropics/zeta-23-lean) alongside the paper. Lean 4 is a theorem-proving language that checks a precisely encoded argument against explicit logical rules and dependencies. This strengthens auditability, but it does not establish the work’s importance, priority, or acceptance by the wider field. The preprint and formal artifact came from the same organization, and neither conventional journal peer review nor independent replication had been completed in the task’s evidence set.

Most organizational hunches face a softer court of appeal. Ask a system to “find a winning market,” and every dead end can lead to a new segment, a changed assumption, or a friendlier dataset. Without a fixed test, persistence can increase output and confidence without increasing information.

The wider productivity evidence gives leaders another reason to be careful. A [2023 working paper](https://www.nber.org/papers/w31161) from the National Bureau of Economic Research, a US economics research organization, found that an AI assistant increased issues resolved per hour by 14% on average among 5,179 customer-support agents. A [2025 randomized study](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/) by the AI evaluation group METR found that 16 experienced open-source developers took 19% longer on 246 real software tasks when allowed to use early-2025 AI tools. These studies cover different people, tools, and work, so they should not be averaged into one AI productivity score. They show why activity is an unreliable substitute for a task-specific result.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>Mathematics supplied a sharp target plus numerical, formal, and expert checks. Enterprise searches need comparable disconfirmation designed in advance, because more output can otherwise make a weak hunch look better researched.</p>
</div>

## Meanwhile in sci-fi

<div class="scifi">
<span class="scifi__label">Meanwhile in sci-fi</span>
<p class="scifi__film">Edge of Tomorrow (2014)</p>
<p>Doug Liman’s science-fiction film follows a soldier whose death resets the day, allowing feedback from one failed attempt to change the next. The mapping is limited: Claude did not replay an identical day, and the public evidence does not show that every failed idea taught the system something. The useful parallel is repetition under feedback, while leadership supplies the objective and the condition for leaving the loop.</p>
</div>

## The right to continue

Once persistence becomes budgetable, permission to start is incomplete. Someone must own renewal. I would use a Tireless Intelligence Charter: a one-page authorization that makes a search finite before momentum and sunk cost begin rewriting its purpose. This is a leadership recommendation, not a claim that Anthropic used this exact model.

> We authorize [system] to test [specific claim] against [locked evidence] within [token, time, tool, data, and review limits]; [independent reviewer] may renew it only after [predeclared threshold], and [control owner] must disable its tools when [stop condition] is reached.

The claim should connect to a real decision and a baseline, so leaders can compare the search with the next best use of the same capital. Its evidence should be difficult for the searching system to manufacture or reinterpret. Depending on the work, that may mean a locked dataset, an external experiment, a domain expert with separate accountability, or a second method with different failure modes.

The resource ceiling must include human verification, because cheap retries can move the bottleneck into expensive review. The stopping rule also has to exist in the service that schedules the agents and in their tool credentials, not only in a memo. When a limit is reached, the service should prevent new work and write the decision to a record that cannot be silently edited. Reopening then requires new evidence, a new budget, and a named approver outside the team running the campaign.

A stopped search need not become waste. Preserve failed hypotheses, tests, sources, and reasons for rejection so another team or system does not buy the same dead ends again. Measure the full cost per independently validated outcome, including reviewer time and the opportunity cost of questions left unfunded, rather than celebrating tokens, attempts, or agent-hours.

This design follows the logic of the [US National Institute of Standards and Technology’s voluntary AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework), released in 2023, which treats governance, context, measurement, and intervention as continuing management work. Humans do not become mere budget officers in that model. They still contribute domain knowledge, interpretation, new hypotheses, and accountability for consequences.

I think the sharper human role sits at the renewal boundary. A tireless system can always produce a reason for one more batch, so the terms of continuation need to be written before enthusiasm takes over. Another attempt is warranted only when the question, the evidence, and the expected value have earned it.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>Authorize persistent agents through a finite charter: fixed question and evidence, a complete resource envelope, independent renewal authority, enforced shutdown, and a reusable failure record. The key metric is total cost per independently validated outcome compared with the next best use of the same capital.</p>
</div>
