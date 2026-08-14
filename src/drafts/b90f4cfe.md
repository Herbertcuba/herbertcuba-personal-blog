---
title: "Tireless intelligence needs a stopping rule"
description: "Anthropic says an unreleased Claude research system rejected 650 ideas before producing a preprint that raises a proven lower bound concerning the Riemann zeta function. The case turns AI persistence into a leadership question about evidence, budget, renewal, and the authority to stop."
tldr: "Anthropic says an unreleased Claude research system used 31 million output tokens and rejected 650 ideas before producing a preprint that raises the proven minimum share of nontrivial Riemann-zeta zeros on the critical line. It did not prove the Riemann hypothesis, and persistence alone may not explain the result. The leadership lesson is to fund tireless search only with independent evidence, staged budgets, and prewritten stopping authority."
featuredImage: "/images/posts/tireless-intelligence-needs-a-stopping-rule.webp"
permalink: /drafts/b90f4cfe/
layout: post.njk
date: 2026-08-14
---

After 650 failed ideas, continuing was no longer just an act of thought. It was an authorization.

On August 10, 2026, [Anthropic, the AI company behind Claude](https://www.anthropic.com/research/riemann-zeta), reported that an unreleased research version of its system had advanced a difficult mathematical bound. The result emerged across two sessions in Claude Code, Anthropic's coding-agent environment, using 31 million output tokens, units of model-generated text used to meter activity.

Anthropic says Claude first generated and tried 650 ideas, none of which worked. A later day-and-a-half effort coordinated about 60 subagents, delegated AI processes working on parts of the problem. They generated candidates, ran tests, looked for errors, and reviewed one another's work.

The tempting explanation is that Claude simply outlasted mathematicians. I think that is too clean. Anthropic's account contains no controlled comparison showing that the number of attempts caused the result, and the successful route also depended on decades of human mathematics, a new conceptual reading of prior work, numerical checks, software-assisted proof checking, and specialist review.

Fatigue, shame, and career risk are a metaphor here, not measurements from this project. They describe some of the pressures that can make repeated human failure costly. I think the important change is narrower and more consequential: part of that persistence can now be provisioned as a search budget, leaving leaders responsible for the question, the evidence, and the permission to continue.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Claude's 650 rejected ideas show that retry capacity can be funded as an organizational resource. The leadership choice is which question deserves another batch, what evidence can reject its answer, and who has authority to stop.</p></div>

## What actually moved

The Riemann zeta function is a mathematical function used to study patterns in the distribution of prime numbers. A zero is an input where the function equals zero. The zeros at negative even numbers are called trivial; the other zeros relevant to this problem are nontrivial and lie within a known vertical band.

In 1859, German mathematician Bernhard Riemann proposed that every nontrivial zero lies on the center of that band, a location called the critical line. That claim became the Riemann hypothesis, one of mathematics' best-known unsolved problems. Claude did not prove it.

Claude's [preprint, a paper released before conventional journal peer review](https://www-cdn.anthropic.com/564f962e60643842f5fcb4a17c9dbc8f608f1c37.pdf), proves a narrower lower bound, meaning a guaranteed minimum share. As mathematicians count zeros at increasingly great heights, the paper raises the proven minimum share of nontrivial zeros on the critical line from 5/12, about 41.67 percent, to at least 2/3, about 66.67 percent. An optimized version reports 0.6725, or 67.25 percent.

The claim is asymptotic: it describes the long-run proportion as the count extends higher, rather than a census at one fixed point. Its denominator counts repeated zeros by multiplicity, the number of times a zero occurs. The paper separately states that at least two thirds are simple zeros, which occur once, and lie on the critical line. It does not show that the remaining zeros lie elsewhere. A lower bound proves a floor, not the full hypothesis.

The popular 37-year framing also needs care. Number theorist J. B. Conrey proved that more than two fifths of the relevant zeros lie on the critical line in a [peer-reviewed 1989 paper](https://doi.org/10.1515/crll.1989.399.1), but later human work kept improving the result and reached the previous 5/12 record in 2020. Claude's paper specifically credits Baluyot, Goldston, Suriajaya, and Turnage-Butterbaugh, four number theorists whose 2024 peer-reviewed paper, [*An Unconditional Montgomery Theorem for Pair Correlation of Zeros of the Riemann Zeta Function*](https://arxiv.org/abs/2306.04799), established a result about spacing relationships between zeta zeros without assuming the Riemann hypothesis. Claude's stated new ingredient was a linear-algebraic reading of that work, using the mathematics of vectors and matrices to expose another implication. This was an active human research frontier, not 37 years of silence followed by a machine.

The validation trail matters just as much as the attempt count. Anthropic reports 2,400 command-line instructions, hundreds of programs written in Python, a common programming language, numerical checks, searches for counterexamples, proof review, and a search through 54 research papers for prior work. Two Anthropic mathematicians studied the result, and two outside number theorists examined it on short notice. The company also released a [Lean 4 formalization](https://github.com/anthropics/zeta-23-lean). Lean 4 is a theorem-proving programming language; formal verification here means software checked precisely encoded statements and proofs against declared logical assumptions.

The evidence is substantial but unfinished: a public preprint, an inspectable formal artifact from the same publisher, internal validation, and limited outside specialist examination. It is not yet conventional journal peer review or broad independent replication. Nor does it establish that 650 failed ideas, 60 subagents, or 31 million output tokens were necessary. I think this clarity is why the case applies beyond mathematics. A theorem offers explicit ways to reject an answer; most strategy and product questions require leaders to build those tests before purchasing more attempts.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>The result is a specific lower-bound advance built on decades of human mathematics. Its unusually strong rejection tests make it a favorable case for persistent AI search, while its preprint status and missing causal comparison limit what leaders should infer.</p></div>

## Persistence became a budget decision

The 31 million output tokens make activity visible, but they do not reveal its price. Anthropic disclosed no model price or count of the tokens supplied to the system. It also omitted hardware or energy costs, reviewer cost, opportunity cost, and returns across comparable campaigns. I don't know whether 60 subagents were necessary, and the public evidence cannot tell us. Copying those numbers would be imitation without economics.

What the case does make visible is an organization funding a large search instead of asking one person to absorb every dead end. I think productivity begins to behave like capital at that point: persistence becomes a resource that can be allocated in stages. Attempts become easier to supply, while expert attention, independent review, and the choice among competing questions remain scarce.

Evidence from ordinary work reinforces the gap between activity and value. A [2023 working paper](https://www.nber.org/papers/w31161), research circulated before journal peer review, from the National Bureau of Economic Research, a U.S. economics research organization, studied 5,179 customer-support workers and reported a 14 percent average increase in issues resolved per hour after access to a conversational assistant. A [2025 randomized study](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/) by METR, an independent organization that evaluates AI systems, instead found that 16 experienced open-source developers took 19 percent longer on 246 real software tasks when allowed to use early-2025 AI tools. METR now labels that result out of date after newer 2026 data, but the study still demonstrates why task design and measurement matter more than confidence or output volume.

My take is that cheap-looking attempts can hide expensive institutions. Another batch consumes review, delays alternatives, and gives the original hunch another chance to redefine success. The useful economic unit is the full cost per result that survives an agreed, independent test, not the number of tokens generated.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Output tokens show the scale of activity, not the campaign's financial return. Persistent AI work should be judged by the full cost of producing a result that an independent evaluator can reproduce.</p></div>

## Decide before another batch

A tireless system can always produce one more reason to continue. I think leaders should answer with a Tireless Intelligence Charter: a one-page commitment written before the search begins. The idea is consistent with the [AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework) released in 2023 by the U.S. National Institute of Standards and Technology, the federal standards and measurement agency. That voluntary guidance asks organizations to govern, map, measure, and manage AI risk; the charter turns the same logic into a renewal decision for persistent search.

Fill six fields before funding the first batch:

- **Question and owner:** What exact decision, theorem, design, or experiment is worth funding, and which business sponsor owns its value?
- **Evidence contract:** What counts as success, what evidence would count against the hunch, and how will novelty be checked?
- **Stage limit and review date:** What are the caps on model use, tools, elapsed time, and reviewer hours, and when does work pause automatically?
- **Independent evaluator:** Who owns the acceptance test and attempts to reproduce the result outside the delivery team?
- **Renewal forum:** Which existing portfolio, architecture, or risk forum compares another batch with the best unfunded alternative?
- **Stopping authority and archive:** Who can end the campaign, and where will rejected hypotheses, failed tests, and reviewer objections be preserved?

The approval path should be proportionate to the stakes. A small, reversible exploration can remain with a team lead under a tight cap. Material portfolio spending belongs in an existing investment or architecture forum. Work that delegates high-impact decisions needs domain risk and AI governance review before its authority expands. The form stays short; the scrutiny changes.

The cost envelope should be equally plain: model use plus external tools, reviewer time, replication effort, and the opportunity cost of delaying the best alternative. Anthropic published no defensible dollar total, so 31 million output tokens should not become a benchmark. Each organization must use its own rates and record the full cost of the stage.

Now consider a renewal meeting. The delivery team presents more polished hypotheses, but the independent evaluator cannot reproduce an improvement and the next batch offers no new test that could disprove the hunch. The campaign has reached its stated limit, so its status changes from active to paused. The team may request another batch, but it cannot grant one. Without a reproduced gain, a new disprovable claim, or evidence that materially changes the test, the renewal forum refuses more funding.

That state change is what blocks attempt 651. Otherwise a miss becomes “learning,” recurring error becomes “exploration,” and more output becomes evidence that the problem deserves still more output. Prewritten rules stop the institution from changing the evidence threshold after it sees the answer. Preserving the failed routes then makes stopping productive because the next team can inspect the dead ends instead of paying to rediscover them.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Before persistent AI work starts, assign the question, evidence against the hunch, stage limit, review date, independent evaluator, renewal forum, and stopping authority. At the limit, work pauses by default; only new verifiable evidence earns another batch.</p></div>

## Meanwhile in sci-fi

<div class="scifi">
<span class="scifi__label">Meanwhile in sci-fi</span>
<p class="scifi__film">Edge of Tomorrow (2014)</p>
<p>Doug Liman's 2014 science-fiction film follows Major William Cage, a soldier who returns to the start of the same battle whenever he dies. Repetition helps because he remembers what each failed loop revealed.</p>
</div>

The mapping has a hard limit: an AI subagent can begin another attempt without human fatigue, while the institution still pays cumulative compute, review, delay, and diverted attention. Unlike Cage, the organization does not reset its budget or recover the alternatives it postponed. Humans do not need to match the machine's willingness to repeat. They must decide which day is worth repeating, what evidence would count as escape, and when the institution must stop paying to wake up in the same place.
