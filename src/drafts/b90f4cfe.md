---
title: "Tireless intelligence needs a stopping rule"
date: 2026-08-13
excerpt: "Claude used 60 agents, 31 million tokens and 650 failed attempts to move a mathematical bound whose previous record had stood since 2020. The real story is failure without fatigue, and that changes what leadership is for."
tldr: "Anthropic reports that an unreleased research version of Claude tried 650 ideas that failed, then coordinated roughly 60 subagents across 31 million output tokens to prove a new lower bound on the zeros of the Riemann zeta function. Persistence has become a purchasable, metered input, so the human job shifts to choosing which questions deserve that persistence, defining what counts as evidence, and writing stopping rules before a tireless system turns every hunch into an endless campaign."
layout: post.njk
tags:
  - artificial-intelligence
  - leadership
  - agentic-ai
  - strategy
featuredImage: "/images/posts/tireless-intelligence-needs-a-stopping-rule.webp"
permalink: /drafts/b90f4cfe/
---

On August 10, 2026, Anthropic, the AI company behind Claude, [published an unusual research disclosure](https://www.anthropic.com/research/riemann-zeta). An unreleased research version of Claude had spent two sessions in Claude Code, Anthropic's environment for agents that can work with files and run software tools, attacking one of the most famous open problems in mathematics. According to Anthropic, the system first generated and tried 650 ideas, none of which worked. It then spent roughly a day and a half coordinating about 60 subagents, delegated AI processes working on narrower parts of the problem, and consumed 31 million output tokens, the metered units of model-generated text that labs use to bill for usage.

The result is real, and it is narrower than the headlines suggest. Claude did not prove the Riemann hypothesis, the 167-year-old conjecture about prime numbers that carries a million-dollar prize. Its paper says so itself: "The hypothesis remains unproven." What the system produced is a new, checkable proof about how many of the relevant mathematical objects sit where the hypothesis says they should, on a frontier where the last comparable jump took human specialists decades.

I think this is one of the most important AI stories of the year, and the mathematics is the smallest part of why. What matters is what the 650 failed attempts cost. For a machine, failure number 649 costs nothing socially. No fatigue, no colleagues to face the next morning. Those human costs did not disappear; they were converted into a line item. And once persistence becomes a line item, the leadership question changes completely.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Anthropic says an unreleased research Claude tried 650 ideas that failed, then coordinated about 60 subagents across 31 million output tokens to produce a new, verified mathematical result. The Riemann hypothesis itself remains unproven; what the run demonstrated is that persistence can now be purchased as a metered input, and that changes what leaders are for.</p></div>

## What actually moved

The mathematics deserves one careful paragraph, because the leadership lesson depends on getting it right. In 1859, the German mathematician Bernhard Riemann published a memoir connecting a function, now called the Riemann zeta function, to the distribution of prime numbers. The points where this function's value falls to zero, apart from a set of well-understood obvious cases, encode increasingly fine information about how primes are spaced. Riemann conjectured that every one of these nontrivial zeros lies on what is now called the critical line, a specific vertical line in the plane where the function is defined. That conjecture is the Riemann hypothesis, and it remains open.

What Claude's paper proved is a lower bound: a guaranteed minimum share of zeros on the critical line, with no claim that all of them are there. The [previous record was 5/12](https://www-cdn.anthropic.com/564f962e60643842f5fcb4a17c9dbc8f608f1c37.pdf), about 41.7 percent, and it had stood since 2020. The new theorem proves at least 2/3, about 66.7 percent, a jump of 25 percentage points, and an optimized version of the argument reaches 0.6725. The "37-year record" framing you may have seen refers to the interval since J. B. Conrey's [1989 paper](https://doi.org/10.1515/crll.1989.399.1) proved that more than two fifths of zeros lie on the line; human mathematicians kept improving the bound after Conrey, so the field was never frozen for all 37 years.

The precision matters because the headline version of this story is wrong in a specific way. This was a genuine, bounded advance on a live research frontier, checked by human specialists, rather than a machine solving a famous problem in one leap.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>The Riemann hypothesis, an 1859 conjecture about where the zeta function's zeros lie, is still unproven. Claude's paper raised the proven minimum share of zeros on the critical line from 5/12, a record held since 2020, to at least 2/3, a 25-percentage-point move on a frontier humans had advanced step by step for decades.</p></div>

## How persistence became a budget

The newsletter AI Secret covered the result under the headline "A 37-Year Math Record" and [framed the story as stamina rather than genius](https://aisecret.us/a-37-year-math-record/). I think that reading is half right, and the half it misses matters. The proof did not come from raw repetition. It stands on decades of human mathematics, including a paper by Baluyot, Goldston, Suriajaya, and Turnage-Butterbaugh, [posted in 2023 and published in Acta Arithmetica in 2024](https://arxiv.org/abs/2306.04799), that supplied the prior machinery, and it added what the paper calls a new linear-algebraic reading of that machinery. Whether that reading counts as insight or search is genuinely unclear to me. I don't know, and Anthropic's disclosure cannot settle it, because nobody ran the counterfactual with fewer agents or a smaller budget.

What Anthropic does document is the industrial process around the idea. The agents ran 2,400 shell commands, wrote hundreds of Python scripts, checked calculations against known zeta zeros, searched for counterexamples, and downloaded 54 papers from the arXiv preprint repository to check whether the result was already known. Two mathematicians inside Anthropic studied the paper, and Anthropic says the specialists Brian Conrey and Dan Goldston examined it on short notice. The proof was then formalized in Lean 4, a proof-assistant language that mechanically checks every logical step of a precisely encoded theorem, and [published as a public artifact](https://github.com/anthropics/zeta-23-lean).

One hedge belongs in the open: when I say fatigue, shame, and career risk became a compute budget, that is a metaphor, not a measurement. Anthropic measured none of those things. But the metaphor points at something structural. The 650th attempt costs a machine nothing socially, while attempt number 650 has ended human careers. An organization can now provision a large, instrumented search the way it provisions cloud capacity. The bottleneck is no longer who can endure the dead ends. It is who decides which dead ends are worth funding.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>"Stamina" is only half the story: the proof stands on named human mathematics and a new conceptual reading, surrounded by an industrial process of scripts, checks, literature search, human review, and formal verification. The defensible claim is that large, instrumented search has become allocatable. Nobody knows whether 60 agents were necessary, because no one ran the comparison.</p></div>

## Meanwhile in sci-fi

<div class="scifi">
<span class="scifi__label">Meanwhile in sci-fi</span>
<p class="scifi__film">Edge of Tomorrow (2014)</p>
<p>In Doug Liman's film, Tom Cruise plays Major Bill Cage, a soldier trapped in a time loop, reliving the same lost battle against an alien invasion. He dies hundreds of times, and each loop feeds the last one: he learns where the ambush sits, adjusts, and tries again. That is the shape of what Anthropic's agents did with the zeta bound, repetition plus feedback, except the agents run the loop without the soldier's dread. But notice what makes the film's loops useful rather than endless. Cage has a defined enemy, a way to recognize progress, and a condition that ends the war. Strip those away and the loop is just dying forever. That is the mapping: tireless repetition only produces a breakthrough when someone has already defined what would count as winning and what would count as enough. The agents supplied the loops. Humans supplied the exit condition, and someone still has to.</p>
</div>

## Why tirelessness is a liability

The optimistic reading is that every organization can now afford its own 650 attempts. I think the evidence argues for caution. In a [2023 working paper from the National Bureau of Economic Research](https://www.nber.org/papers/w31161), Brynjolfsson, Li, and Raymond studied 5,179 customer-support agents and found that an AI assistant raised issues resolved per hour by 14 percent on average, with most of the gain going to novices. In a [2025 randomized trial, the research organization METR](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/) measured 16 experienced open-source developers working on 246 real issues and found they took 19 percent longer when allowed to use AI tools, while still believing they had been faster. Activity and confidence are not value. The effect depends on the task, the worker, and the measurement.

Now apply that to a system that never gets tired. A human researcher who fails 300 times eventually stops, and the stopping is information: the field learns that this path is barren. A tireless system has no such instinct. Every new batch of polished output raises the political cost of cancellation, because killing the campaign now means admitting the last hundred batches were waste. Without a rule written in advance, each round of effort manufactures its own justification for the next one. My take: the runaway agent loop is less a safety problem than a budget problem wearing a lab coat, and it will show up first in organizations that confuse motion with learning.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Field evidence from NBER and METR shows that AI effects are uneven across tasks and workers, and that confidence does not track measured value. A tireless system removes the human instinct to stop, and each round of output makes cancellation harder to justify. Persistence without a stopping rule converts hunches into self-funding campaigns.</p></div>

## A charter for tireless intelligence

Leadership in a world where the 650th attempt is free starts with paperwork. I think every persistent agent campaign needs a written charter before it starts, built from six commitments:

1. **Choose the question before provisioning the swarm.** Fund a decision, theorem, design, or experiment with an observable acceptance test. Reject "find something useful about X" as a launch brief.
2. **Specify the evidence contract.** State in advance what counts as success, what would prove the campaign wrong, and what independent verification is sufficient, and require a checker with a different failure mode than the producer, whether that is a domain expert, an independent method, or a formal proof.
3. **Fund in stages, not forever.** Set a pilot budget in tokens, wall-clock time, tool permissions, and reviewer hours. Expand only when the campaign clears a predeclared evidence gate.
4. **Measure cost per validated outcome.** Track rejected attempts, reviewer time, and the rate of false positives, not tokens, messages, or agent-hours.
5. **Write the stopping rules before the agents start.** Stop when the rate of genuinely new findings falls below a threshold, when the same failure mode recurs without a new hypothesis, when independent review cannot reproduce the claim, or when the next batch is worth less than the next portfolio candidate.
6. **Archive the failures as capital.** Save the dead ends and their provenance, so a stopped campaign becomes an auditable asset and no future agent pays to rediscover the same closed doors.

A charter also needs a home in the existing organization, not a new committee. The natural signer is the forum that already funds experiments, whether you call it the portfolio review or the architecture board, and it should sign at the same rhythm as the normal budget cycle. A named business owner carries the consequences of each campaign. A mid-size retailer testing whether agents should keep searching for a better demand-forecasting model could set a first envelope of a three-week pilot, a fixed token budget, twenty hours of reviewer time, an acceptance test written in advance, such as beating the current forecast error on data the model has never seen, and a pre-agreed stop if two consecutive batches show no improvement. Those numbers are illustrative rather than benchmarks; the discipline is that they exist before the first agent runs. In a Nordic organization there is one more familiar step: a campaign that changes how people's work is directed or evaluated belongs in consultation with employee representatives as part of the escalation trigger, not in a postmortem.

This logic is not exotic. The U.S. National Institute of Standards and Technology published its [AI Risk Management Framework in 2023](https://www.nist.gov/itl/ai-risk-management-framework), a voluntary structure organized around four functions: govern, map, measure, manage. The charter is that loop written specifically for systems that never ask to stop. Far from braking capability, this kind of governance is what keeps a purchasable 650th attempt pointed at questions that deserve it.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Give every persistent agent campaign a written charter: a question with an acceptance test, an evidence contract, staged funding, cost per validated outcome, pre-written stopping rules, and an archive of failures. An existing forum signs it at the budget rhythm, a named owner carries it, and the numbers are fixed before launch. This is NIST's govern-map-measure-manage loop adapted to systems that will never tire on their own.</p></div>

## What leadership keeps

Strip the story down and a pattern remains. Execution got cheap first. Now persistence is getting cheap. What does not get cheap is judgment about which questions deserve a tireless machine, what evidence should end the search, and who carries the consequences when the search succeeds or fails.

I don't know whether Claude's zeta campaign will be remembered as a mathematical milestone or as an unusually well-instrumented anomaly; the field will decide that over the next few years. I am confident about the managerial reading. When any person, and now any system, can afford a thousand dead ends, the scarce resource is the one who decides which mountain of dead ends is worth buying, and who writes down, before the first attempt runs, what would make them stop. That decision is the job now.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Execution became cheap, and now persistence is becoming cheap. What stays expensive is judgment: choosing the worthy question, defining the evidence that ends the search, and owning the consequences. Leadership is the stopping rule.</p></div>
