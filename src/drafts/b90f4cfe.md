---
title: "Tireless intelligence needs a stopping rule"
tldr: "Anthropic's Riemann-zeta result shows that organizations can fund a large search with extensive tool use and verification, but it does not prove that persistence alone caused the advance or that such search is cheap. As repeated attempts become a budgeted input, leaders must choose questions with observable tests, define independent evidence, stage the budget, and decide before the work begins when another round is no longer justified."
permalink: /drafts/b90f4cfe/
layout: post.njk
date: 2026-08-15
---

A leader looking at Anthropic's new mathematics result should ask a harder question than whether Claude is smarter than a mathematician: when should an organization keep funding the search after hundreds of ideas have failed?

On August 10, 2026, [Anthropic](https://www.anthropic.com/research/riemann-zeta), the AI company behind Claude, reported that an unreleased research version of its system had tried 650 initial mathematical ideas and found that none worked. It then spent a day and a half coordinating about 60 subagents, meaning delegated AI work streams assigned to proofs, software checks, searches for cases that could disprove the argument, and literature review. Across two sessions in Claude Code, Anthropic's tool-using environment, the work produced 31 million output tokens, units of generated text used to meter model work. The later phase produced the argument Anthropic published.

That scale does not establish that persistence alone produced the result. The proof combined decades of human mathematics with a new conceptual step, numerical tests, formal checks, and specialist review. Anthropic published no full cost ledger and no controlled comparison with fewer agents or attempts. I think the important shift is narrower: persistence that once depended on a person's limited time can now be organized as a metered search budget.

The phrase “fatigue, shame, and career risk become a compute budget” captures the strategic change, but it is a metaphor. Anthropic did not measure those human pressures. I use it to name a leadership decision: once a system can keep searching without the same personal stakes, who decides which hunch deserves another round?

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Claude's result makes large-scale persistence fundable and measurable, but the case supports a claim about organized search capacity, not a claim that stamina alone caused discovery.</p></div>

## What the mathematics actually moved

The argument concerns the Riemann zeta function, a mathematical function central to German mathematician Bernhard Riemann's 1859 work on the distribution of prime numbers. A zero is an input at which the function equals zero. Its nontrivial zeros are the ones connected to the famous Riemann hypothesis, the still-unproved claim that all of them lie on the critical line, a vertical line whose horizontal coordinate is one half.

Claude did not prove that hypothesis. Its [technical preprint](https://www-cdn.anthropic.com/564f962e60643842f5fcb4a17c9dbc8f608f1c37.pdf), a public research paper not yet put through conventional journal peer review, raises a lower bound: the minimum share mathematicians can prove lies on the critical line as they count zeros farther and farther out. The basic theorem moves that floor from 5/12, about 41.7%, to at least two thirds, about 66.7%, while an optimized version reaches 0.6725, or 67.25%.

There is an extra precision worth keeping. The theorem covers simple zeros on the critical line, meaning zeros that occur once, while the total comparison counts repeated zeros according to their multiplicity, or number of occurrences. The Riemann hypothesis requires every nontrivial zero to be on the line. A much stronger guaranteed share is therefore a real advance, yet it remains far from a complete solution.

The popular 37-year framing also needs care. Number theorist J. B. Conrey's [peer-reviewed 1989 paper](https://doi.org/10.1515/crll.1989.399.1) proved that more than two fifths of the zeros lie on the line, and later human work raised the record to 5/12 in 2020. The 37 years run from Conrey's paper to this 2026 result; they were not 37 years without progress.

The new argument also relies on a [2024 peer-reviewed result](https://arxiv.org/abs/2306.04799) by four number theorists, Baluyot, Goldston, Suriajaya, and Turnage-Butterbaugh, about the spacing between pairs of zeta zeros. Claude's paper used linear algebra, the mathematics of vectors and matrices, to reinterpret a sum from that zero-spacing result.

Anthropic says internal mathematicians validated the paper and two outside specialists examined it on short notice. It also released a [Lean 4 formalization](https://github.com/anthropics/zeta-23-lean), which lets proof-assistant software check a precisely encoded version of the argument and its stated dependencies. I think this package of inherited knowledge, search, conceptual reframing, and verification is more important than the attempt count alone.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>The result is a substantial new lower bound, not a proof of the Riemann hypothesis, and its credibility rests on prior human mathematics plus several layers of checking rather than on attempt count alone.</p></div>

## The scarce resource moved upstream

When attempts can be delegated at machine scale, persistence becomes an investment decision. I think this is the useful connection to my Three Crucibles framework for treating productivity as capital: an organization can fund more search capacity, but it still needs a rule for where that capacity goes and a test for renewing it.

The 31 million output tokens make the scale visible, not the value. Anthropic also reports 2,400 shell commands, hundreds of Python scripts, numerical tests, searches for cases that might disprove the argument, and checks across 54 research papers. These metrics describe activity and method. Economic value begins only when a result survives an evidence standard outside the system that produced it.

A [2023 working paper](https://www.nber.org/papers/w31161) from the National Bureau of Economic Research, a US economics research organization, studied 5,179 customer-support agents and found that an AI assistant increased issues resolved per hour by 14% on average. In a different setting, [METR](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/), an independent AI evaluation group, reported in 2025 that 16 experienced open-source developers took 19% longer with the early-2025 tools tested. METR now labels that result historical because the tools have changed.

Neither study explains frontier mathematics or supplies a universal AI productivity score. Together they show why value must be measured for the task and acceptance test at hand. My take is that the economics of thinking now turns on cost per validated outcome, including human review and failed campaigns, rather than on tokens, messages, or apparent effort.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Purchasable persistence moves scarcity from producing more attempts to selecting worthy problems and validating results; activity measures describe the search but do not prove its economic value.</p></div>

## Write the continuation contract first

I would give a tireless system a Tireless Intelligence Charter: a short contract defining what it may pursue and what must happen before it receives more budget. Start with a claim tied to a real decision and an observable test. “Find something useful about this market” invites endless motion; “produce a result an independent method can reproduce and that changes this decision” creates a gate.

The charter should name the evidence and the verifier. A fluent report cannot verify itself, so the checker needs a different failure mode: a domain expert, external data, a controlled test, an independent method, or formal proof where possible. Mathematics is unusually favorable because a theorem can be stated precisely and checked line by line. Strategy, hiring, and product choices need more care because a persuasive system can build a circular case from ambiguous evidence.

Fund the work in stages. Set limits for tokens, calendar time, tool permissions, and reviewer hours, then assign one owner who can authorize an extension. Before results appear, write the conditions for continuing, changing the hypothesis, and stopping because another round is unlikely to pay off. Stop when later batches stop producing new testable ideas, the same failure returns without a better explanation, independent review cannot reproduce the claim, or another candidate has a stronger case for funding.

Archive failed hypotheses, tests, sources, and rejection reasons. That record can stop a future system from buying the same dead ends and show reviewers whether the search is learning. I don't know whether another 31 million output tokens would help with the next theorem, and this case cannot answer that. Continue only when new verified evidence justifies the next stage.

Humans still contribute technical ideas, interpretation, relationships, and accountability; they do not become budget clerks. But I think one responsibility grows when execution no longer tires: someone must be willing to say that the question is not worth another attempt.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Authorize persistent AI work through a prewritten charter covering the hypothesis, independent evidence, staged budget, renewal owner, stopping conditions, and a reusable record of failure.</p></div>

## Meanwhile in sci-fi

<div class="scifi">
<span class="scifi__label">Meanwhile in sci-fi</span>
<p class="scifi__film">Edge of Tomorrow (2014)</p>
<p>Doug Liman's science-fiction film follows Major William Cage, a soldier trapped in a battle that restarts whenever he dies. Repetition helps only because he carries information from each failed day into the next one and changes his approach.</p>
</div>

The mapping is precise: Claude's repeated search resembles the film's resets only when a failed attempt leaves evidence that improves the next move. Leaders choose which battle merits another reset, what would count as learning, and when repetition has stopped producing information. Tireless intelligence expands how long an organization can search; judgment decides whether it should.
