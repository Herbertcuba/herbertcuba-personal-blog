---
title: "Tireless intelligence needs a stopping rule"
tldr: "Anthropic's Claude result did not prove the Riemann hypothesis, and persistence alone did not cause it. It showed that an organization can fund a large, measured search, which shifts leadership toward selecting worthy questions, demanding independent evidence, releasing budget in stages, and setting stopping rules before the work begins."
permalink: /drafts/b90f4cfe/
layout: post.njk
date: 2026-08-15
---

In August 2026, [Anthropic](https://www.anthropic.com/research/riemann-zeta), the AI company behind Claude, reported that an unreleased research version of its system tried 650 ideas and found that none worked. Across two sessions in Claude Code, its coding-agent environment, Claude generated 31 million output tokens and coordinated roughly 60 subagents. An output token counts model-generated text; a subagent is a delegated Claude run assigned to part of the search.

The resulting preprint, a public research paper without completed journal peer review, presents a new bound for the Riemann zeta function, a mathematical object tied to the distribution of prime numbers. The viral story is machine genius. I think the stranger fact is that an organization could fund hundreds of failures as a structured search.

Human researchers pay for dead ends in time and may also face fatigue, shame, or career pressure. Anthropic did not measure those effects. The defensible shift is that retry capacity can now be allocated through model output, tools, elapsed time, and expert attention.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>Anthropic’s project shows that an organization can fund and measure hundreds of failed search paths. The leadership problem is deciding which questions deserve that capacity and what evidence will justify another round.</p>
</div>

## What the proof actually moved

In 1859, German mathematician Bernhard Riemann linked the zeta function to prime numbers. A zero is an input where the function equals zero; its relevant “nontrivial” zeros carry information about prime distribution. The unproved Riemann hypothesis says all of them lie on the critical line, where the input’s real part equals one half.

Claude did not prove that hypothesis. Its [technical paper](https://www-cdn.anthropic.com/564f962e60643842f5fcb4a17c9dbc8f608f1c37.pdf) claims a new unconditional lower bound, a minimum proved without assuming the hypothesis. The statement is asymptotic: as zeros are counted higher in the complex plane, at least two thirds are simple and on the critical line, up from 5/12. A simple zero occurs once rather than with higher multiplicity. The basic bound moves from about 41.7% to 66.7%, exactly 25 percentage points; an optimized version reaches 0.6725, or 67.25%.

The “37-year” label also needs care. Number theorist J. B. Conrey’s [1989 peer-reviewed paper](https://doi.org/10.1515/crll.1989.399.1) proved more than two fifths, but later human work took the record to 5/12 in 2020. The interval runs from 1989 to 2026, not through 37 years without progress.

The paper also credits a [2024 peer-reviewed number-theory study](https://arxiv.org/abs/2306.04799) and calls its new ingredient a linear-algebraic reading: a way to represent the problem through vectors and transformations. I think the honest account combines human mathematics, conceptual insight, scaled search, and checking.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>The paper moves a proven minimum from 5/12 to at least two thirds without proving the Riemann hypothesis. Human groundwork and a new conceptual reading mattered alongside persistence.</p>
</div>

## Persistence became a budget line

The search was structured. Anthropic says the agents issued 2,400 shell commands, wrote hundreds of Python scripts, tested calculations against known zeros, searched for counterexamples, and reviewed each other. They downloaded 54 papers from arXiv, an open preprint repository, to check prior work, although a search cannot prove that no one found the result first.

Checks mattered as much as volume. Anthropic says its mathematicians validated the paper and two outside specialists examined it on short notice. The company also released a [formalization in Lean 4](https://github.com/anthropics/zeta-23-lean), a theorem-proving language that checks a precisely encoded proof against stated assumptions. This improves auditability, but it does not complete journal review or decide the result’s significance.

I don’t know whether 60 subagents were necessary, whether a smaller run could have found the argument, or whether similar campaigns usually fail. Anthropic’s release provides no controlled comparison or public cost ledger. The case shows one possibility: a search can be funded, observed, and checked as coordinated machine runs rather than carried within one researcher’s working life.

My take is that this is productivity becoming capital: an organization funds capacity before it knows the answer, as it does with laboratory time or computing infrastructure. The cost can be tracked as model output, tools, elapsed time, expert review, and delayed work instead of being absorbed solely by one person’s stamina.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>The advance joined scaled search to numerical, formal, and human checks. It shows that retry capacity can be funded, not that more agents or tokens guarantee discovery.</p>
</div>

## Attempt 651 is a leadership decision

Purchasable persistence can also produce waste. A [2023 working paper](https://www.nber.org/papers/w31161) from the U.S. National Bureau of Economic Research studied 5,179 customer-support agents and found that access to an AI assistant raised issues resolved per hour by 14% on average. By contrast, a [2025 randomized study](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/) by the independent research group METR found that 16 experienced open-source developers took 19% longer on 246 real software issues with early-2025 AI tools, although they thought they had sped up. METR now calls that result outdated for current models, and the tasks are too different to compare directly. Together they show why measured outcomes, rather than AI activity or confidence, must decide value.

I think every persistent-agent campaign needs a Tireless Intelligence Charter: a short agreement written before the search, before attachment to a hunch changes the rules.

1. **Name the question and its acceptance test.** State the theorem, decision, experiment, or design outcome whose value justifies the search.
2. **Separate search from proof.** Define success, disproof, and novelty. Require an independent checker likely to fail differently, such as a domain expert, controlled test, external dataset, or formal proof system.
3. **Fund in stages.** Cap output, time, tool permissions, and reviewer hours. Renew only for a new testable idea or stronger evidence, and measure cost per validated result.
4. **Write the stopping rule first.** Pause if failure repeats without a new hypothesis, review cannot reproduce the result, authority expands, or another candidate offers more likely value. Archive rejected paths for inspection and reuse.

This leaves humans as more than budget holders. They bring ideas, context, interpretation, relationships, and accountability. But I think leaders now own a decision that once hid inside endurance: whether another attempt is disciplined inquiry or an expensive refusal to let go.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>A Tireless Intelligence Charter turns persistence into a controlled choice: fund a defined question, demand evidence from an independent checker, renew in stages, and let prewritten rules stop a convincing but unproductive campaign.</p>
</div>

## Meanwhile in sci-fi

<div class="scifi">
<span class="scifi__label">Meanwhile in sci-fi</span>
<p class="scifi__film">Edge of Tomorrow (2014)</p>
<p>In this science-fiction film, a soldier relives the same battle, dying and returning with knowledge from the previous cycle. Repetition helps only because feedback changes what he does next.</p>
</div>

The mapping is useful but incomplete: Claude’s subagents were not conscious soldiers, and Anthropic does not show that every failure improved the next attempt. Tireless repetition needs evidence and someone accountable for ending it. Machines can make another attempt purchasable; leadership decides whether buying it is still an act of learning.
