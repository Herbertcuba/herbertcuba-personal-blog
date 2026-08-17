---
title: "The 650th attempt is now a budget decision"
tldr: "Claude's zeta result shows that organizations can fund large, instrumented search campaigns, but retries become valuable only when the question is worth pursuing, the evidence can be checked independently, and leaders set budgets and stopping rules before work begins."
permalink: /drafts/b90f4cfe/
layout: post.njk
date: 2026-08-17
---

In August 2026, the AI company Anthropic [reported](https://www.anthropic.com/research/riemann-zeta) that Claude, its AI system, had generated and tested 650 ideas for a hard mathematics problem. None worked. Across two sessions in Claude Code, Anthropic's coding-agent environment, the effort used 31 million output tokens and roughly 60 subagents over a day and a half. An output token is a unit of model-generated text used to meter a run; a subagent is a delegated AI process working on one part of the task.

The result needs careful wording. The Riemann zeta function is a mathematical function whose zeros encode information about the distribution of prime numbers. The Riemann hypothesis, which grew from German mathematician Bernhard Riemann's 1859 work, says all its nontrivial zeros lie on the critical line, a particular line in the plane used to plot complex numbers. Claude did not prove that hypothesis. Its [lab-released preprint](https://www-cdn.anthropic.com/564f962e60643842f5fcb4a17c9dbc8f608f1c37.pdf) reports a new unconditional lower bound, meaning a proven minimum that does not assume the hypothesis is true: at least two thirds of those zeros lie on the line, up from 5/12, with an optimized bound of 0.6725.

The strategic point is narrower and more useful than a story about machine genius. Human persistence competes with fatigue and opportunity cost; repeated failure can also carry shame and career risk inside an institution. Anthropic did not measure those pressures. What its case demonstrates is that a large share of persistent search can now be provisioned as compute, tools, and review capacity. Leadership therefore has to decide which questions deserve the 650th attempt.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>Claude did not solve the Riemann hypothesis. The case shows that organizations can now allocate tireless search capacity, which turns persistence into a leadership choice rather than proof of value.</p>
</div>

## Search became a budgetable unit of work

Those 650 failed ideas mattered because they sat inside an instrumented campaign. Anthropic reports 2,400 tool commands, hundreds of calculation scripts, numerical tests against known zeta zeros, searches for counterexamples, and a novelty check involving 54 papers from arXiv, an online repository for research preprints. This was repeated work with memory and feedback, rather than the same prompt submitted hundreds of times.

It was not a blank-sheet discovery either. The new paper says its analytic inputs came from a peer-reviewed 2024 number-theory result and describes Claude's new ingredient as a linear-algebraic reading of that prior work, recasting key relationships in the language of vectors and matrices. The popular 37-year framing starts with number theorist J. B. Conrey's 1989 paper proving that more than two fifths of the zeros lie on the critical line. Human mathematicians kept advancing the field after that, and the immediate 5/12 record had stood since 2020.

So persistence alone is not the demonstrated mechanism. Prior mathematics narrowed the frontier, agents explored it, tools generated feedback, and reviewers tested the eventual claim. Anthropic published no dollar cost and ran no controlled experiment showing what the 651st trajectory contributed. The defensible economic conclusion is simply that a bounded search of unusual scale has become a fundable input.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>The campaign made retries allocatable, but its result depended on accumulated human mathematics, tool-based feedback, and review. Token volume by itself explains neither discovery nor value.</p>
</div>

## Proof is scarcer than output

The campaign produced something valuable because mathematics offered unusually strong acceptance tests. Anthropic released a [Lean 4 formalization](https://github.com/anthropics/zeta-23-lean); Lean 4 is a programming language designed to let a proof assistant check precisely encoded mathematical statements. This formal verification can confirm that the encoded proof follows from its declared foundations. It cannot settle the work's importance or novelty, and it does not replace scrutiny of whether the formal statement captures the intended claim.

The human checks matter for the same reason. Anthropic says two of its mathematicians validated the paper and two outside number-theory specialists examined it on short notice. That is meaningful review, but the work remains a lab-released preprint rather than a conventionally peer-reviewed journal result. Tireless production created a candidate; several different forms of checking made the candidate credible enough to study.

Most organizational questions are less cooperative. A strategy can sound internally consistent while relying on a bad market assumption. A 2023 [working paper from the U.S. National Bureau of Economic Research](https://www.nber.org/papers/w31161) found that an AI assistant raised issue resolution per hour by 14% on average among 5,179 customer-support workers. In a different setting, [METR's 2025 randomized study](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/), a historical snapshot from an independent group that measures AI performance, found 16 experienced open-source developers took 19% longer with early-2025 AI tools. Neither study measures frontier mathematics. Together they show why activity, confidence, and output volume cannot stand in for measured outcomes.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>Persistence produced a candidate result; explicit tests, formal checking, and specialist review made it credible. Where success is ambiguous, more output can increase confidence without increasing truth or economic value.</p>
</div>

## Meanwhile in sci-fi

<div class="scifi">
<span class="scifi__label">Meanwhile in sci-fi</span>
<p class="scifi__film">Edge of Tomorrow (2014)</p>
<p>The film follows a soldier forced to repeat the same deadly day while carrying knowledge from one repetition into the next. The mapping is limited but useful: repetition creates progress only when each failure changes the next attempt, and the whole exercise needs a recognizable condition for getting out.</p>
</div>

## Write the stopping rule first

I think every high-persistence agent campaign needs a Tireless Intelligence Charter: a short written mandate that defines the question, evidence, authority, budget, and exit conditions before the system starts. “Find something useful about this market” is not a question that deserves 650 attempts. A decision, theorem, design, or experiment with an observable success test might be.

The charter should include an evidence contract, which states what would count as success, disconfirmation, novelty, and independent verification. The verifier should fail differently from the producer. Depending on the work, that may mean a domain expert, an independent model, external data, a controlled test, or a formal proof system.

Funding should then arrive in stages. Leaders can authorize a first batch of attempts and expand it only when the campaign produces a new testable hypothesis, improves a validated measure, or clears a declared evidence gate. They should pause when the same failure recurs without new information, independent checks cannot reproduce the claim, or another portfolio candidate has a better expected return. Tokens and agent-hours describe consumption; cost per validated outcome describes performance.

A stopped campaign should still leave an asset: rejected hypotheses, tests, sources, and reasons for rejection. That is the useful sense in which productivity becomes capital. The next team or agent can start from an auditable record instead of paying to rediscover the same dead ends.

Humans are not reduced to allocating budgets. They still contribute technical ideas, context, interpretation, relationships, and moral judgment. But leaders retain a responsibility tireless systems cannot absorb: deciding when persistence serves the mission and when it merely protects a hunch from being abandoned. Once the 650th attempt is affordable, continued search needs more than conviction. It needs an owner, an evidentiary reason, and a predeclared way out.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>Authorize tireless search through a written charter: choose a testable question, require independent evidence, fund in stages, preserve useful failures, and define the conditions that will stop the campaign.</p>
</div>
