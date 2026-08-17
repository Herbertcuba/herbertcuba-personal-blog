---
title: "Tireless intelligence needs a stopping rule"
description: "Claude's mathematical result shows that persistent search can now be funded like a metered input. The leadership challenge is deciding what deserves another attempt."
tldr: "Anthropic's Claude used a large, instrumented search to improve a difficult mathematical lower bound, but the case does not prove that more attempts reliably create value. When persistence becomes purchasable, leaders must choose questions with observable answers, require independent evidence, release budgets in stages, and decide in advance when the search will stop."
permalink: /drafts/b90f4cfe/
layout: post.njk
date: 2026-08-17
---

After 650 ideas fail, another attempt is no longer just a technical choice. Someone must decide whether it deserves more money, tools and human attention.

That decision sits behind an [August 2026 report](https://www.anthropic.com/research/riemann-zeta) from Anthropic, the AI company that develops Claude. Across two sessions, Anthropic says an unreleased research version of Claude produced 31 million output tokens, units of generated text used to meter model activity. It later coordinated roughly 60 subagents, meaning delegated AI runs using tools and working on smaller tasks, over about a day and a half.

The result concerns the Riemann zeta function, a mathematical function whose important, or nontrivial, zeros reveal patterns connected to the distribution of prime numbers. The famous Riemann hypothesis says that all those zeros lie on the critical line, where the real part of a complex number equals one half. Claude did not prove that hypothesis. Its [lab-released preprint](https://www-cdn.anthropic.com/564f962e60643842f5fcb4a17c9dbc8f608f1c37.pdf), a research paper not yet through conventional journal peer review, instead gives an unconditional lower bound: a proven minimum that does not assume the hypothesis is true. It raises the share known to lie on the line from 5/12 to at least 2/3, with an optimized figure of 0.6725.

The process did not measure human fatigue, embarrassment or career risk, so those effects should not be presented as findings. What it demonstrates more concretely is that a large search through dead ends can be provisioned as tokens, software tools and reviewer time. Leadership then moves upstream: which question merits that capacity, what evidence can justify the next batch, and who has the authority to stop?

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Claude did not solve the Riemann hypothesis, but Anthropic funded a large, tool-using search that produced a specific new bound. The strategic change is that persistence can be allocated, which makes continuation and termination leadership decisions.</p></div>

## What the search budget bought

The achievement cannot be separated from the mathematics already in place. Number theorist J. B. Conrey proved in a [peer-reviewed 1989 paper](https://doi.org/10.1515/crll.1989.399.1) that more than two fifths of the relevant zeros lie on the critical line. Later work improved the record to 5/12 in 2020. Calling the new result a 37-year leap is therefore a useful historical marker from Conrey's paper to 2026, but it would be wrong to imply that human progress stopped for 37 years.

Claude's preprint also credits existing analytic results from a [2024 peer-reviewed number-theory paper](https://arxiv.org/abs/2306.04799). It describes the new ingredient as a linear-algebraic reading of that prior work. Repeated search helped surface a conceptual move inside a research landscape that mathematicians had built over decades; repetition did not replace insight or prior knowledge.

The search itself was heavily instrumented. Anthropic says Claude Code, its software-agent workspace, issued 2,400 computer commands, wrote hundreds of small programs, ran numerical checks, looked for counterexamples and downloaded 54 research papers while checking whether the result was already known. The 650 unsuccessful ideas matter because tests and reviews could inform what happened next, not because failure automatically accumulates into truth.

Verification matters just as much as search. Anthropic says its own mathematicians studied the paper and two outside number theorists examined it on short notice. It also released a [Lean 4 formalization](https://github.com/anthropics/zeta-23-lean): Lean is proof-assistant software that checks whether a precisely encoded argument follows from declared assumptions. These are meaningful evidence layers, but the result remains a company-released preprint rather than a conventionally peer-reviewed and independently replicated theorem.

There is also no public invoice. Anthropic disclosed output volume, not the model's price, total computing cost, energy use, reviewer cost or the opportunity cost of running something else. The defensible economic claim is narrower: an organization can now buy more structured search capacity, while the return on that capacity still has to be established.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>The budget paid for an instrumented search across prior mathematics, software experiments, criticism and verification. It did not buy certainty by volume, and the undisclosed cost prevents any claim about a general return on 31 million tokens.</p></div>

## Proofs have an unusually clear answer key

Mathematics is a favorable setting for tireless search because a claim can be stated precisely and attacked from several directions. Numerical checks can expose errors, specialists can inspect the reasoning, and a proof assistant can verify the formal steps. Even then, judgment remains necessary to assess whether the encoded statement captures the intended theorem and whether the result is genuinely new and important.

Most enterprise questions arrive without that answer key. An instruction such as “find a new growth opportunity” gives an agent room to generate its own assumptions, evidence and conclusion. More attempts can then make a weak hunch look researched simply because the system has produced a large file of mutually supporting material.

Workplace evidence gives leaders a reason to be cautious. A [2023 working paper](https://www.nber.org/papers/w31161) from the National Bureau of Economic Research, a U.S. nonprofit economics research organization, found that an AI assistant raised issues resolved per hour by 14% across 5,179 customer-support workers, with much larger gains for less experienced staff. In a different setting, a [2025 randomized study](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/) by METR, an independent AI research organization, found that 16 experienced open-source developers took 19% longer on 246 real software issues when allowed to use early-2025 AI tools, even though they believed the tools had made them faster. METR now treats that result as a historical snapshot, but its measurement lesson remains useful.

Neither study predicts advanced mathematical research, and their results should not be averaged into a universal AI productivity rate. Together they show why activity, confidence and value need separate measures. Before approving a persistent agent campaign, a leader should be able to answer one question: if the output is persuasive but wrong, what independent observation would reveal that?

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Formal mathematics supplies unusually strong tests, while business work often lets an agent create the assumptions by which its own output looks successful. Mixed workplace results reinforce the need to measure validated outcomes rather than agent activity or user confidence.</p></div>

## Meanwhile in sci-fi

<div class="scifi">
<span class="scifi__label">Meanwhile in sci-fi</span>
<p class="scifi__film">Edge of Tomorrow (2014)</p>
<p>Doug Liman's science-fiction film follows a soldier trapped in a lethal day that resets each time he dies. Repetition becomes useful because he retains what failed and changes his next attempt.</p>
</div>

The mapping is limited but useful: persistent AI search creates value when each failure becomes evidence, that evidence changes the next hypothesis, and someone defines the condition for leaving the loop. Without those elements, repeated runs consume resources without improving the search.

## The stopping rule belongs in the charter

I think every serious persistent-agent project needs a short Tireless Intelligence Charter: a written agreement covering the question, evidence, staged budget, authority and exit conditions. This is not paperwork added after deployment. It is the investment case that should exist before the first large run.

Start with a question whose answer can change a real decision, then name success and what would count as failure in observable terms. The evidence contract should also require a verifier with a different failure mode, such as a domain expert, an independent dataset, a controlled test or formal proof. If no outside signal can challenge the system's conclusion, the campaign is not ready for sustained funding.

Release capacity in stages across output tokens, elapsed time, tool permissions and reviewer hours. A further batch should depend on evidence that the search is producing new, testable hypotheses or improving a validated measure. The useful economic unit is cost per validated outcome, including human review and replication, rather than tokens generated or agents kept busy.

Stopping conditions need the same precision. Pause when the same failure repeats without a new hypothesis, independent review cannot reproduce the claim, the requested authority exceeds the original mandate, or another portfolio candidate offers more expected value. Preserve failed hypotheses, tests and source records when the work stops, because a well-kept failure archive can prevent the next system from buying the same dead ends again.

When productive capacity behaves more like capital, allocation and accountability become more important, not less. The AI system can propose another run, but it cannot own the opportunity cost or the consequences. A named human owner must decide whether the evidence has earned more persistence and remain accountable for saying yes or no.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Fund persistent AI search through a prewritten charter: define the decision, independent evidence, staged budget, delegated authority and stop conditions. The system may be tireless, but a human owner must remain responsible for whether another batch is worth running.</p></div>
