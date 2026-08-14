---
title: "Tireless intelligence needs a stopping rule"
description: "Claude rejected 650 ideas before advancing a Riemann-zeta bound. The deeper shift is that persistence can now be funded, measured, renewed, and stopped like any other investment."
tldr: "Anthropic says an unreleased Claude research system used 31 million output tokens and rejected 650 ideas before producing a preprint that raises a proven lower bound concerning the Riemann zeta function. The case does not prove that persistence caused the result or that machine reasoning is cheap. It shows why leaders must choose worthy questions, fix the evidence test, count the full cost of another stage, and give someone outside the delivery team authority to stop."
featuredImage: "/images/posts/tireless-intelligence-needs-a-stopping-rule.webp"
permalink: /drafts/b90f4cfe/
layout: post.njk
date: 2026-08-14
---

After 650 failed ideas, continuing became a decision someone had to authorize.

On August 10, 2026, [Anthropic, the AI company behind Claude](https://www.anthropic.com/research/riemann-zeta), reported that an unreleased research version of its system had advanced a difficult mathematical bound. The work ran across two sessions in Claude Code, Anthropic's tool-using coding environment, and used 31 million output tokens, units of generated text used to meter model output.

Anthropic says Claude first tried 650 ideas that did not work. Claude then spent a day and a half coordinating about 60 subagents, delegated instances of the system that worked on parts of the search. They generated candidate approaches, ran numerical tests, searched for errors, reviewed proofs, and tried to reproduce the result from scratch.

The viral explanation is that Claude simply outlasted mathematicians. I think that is too clean. Anthropic published no controlled comparison showing that attempt count caused the result, and the successful path also depended on decades of human mathematics, a new conceptual reading of prior work, software checks, and specialist examination.

Fatigue, shame, and career risk are therefore a metaphor here, not findings from the project. The report measured none of them. I think the important change is that some persistence can now be organized and metered through a search budget, which makes the next failed attempt a capital-allocation decision rather than a private test of endurance.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Claude's 650 rejected ideas make retry capacity visible as a fundable resource. The leadership question is which problem deserves that capacity, what evidence can reject its output, and who may refuse another batch.</p></div>

## What the result actually proves

The Riemann zeta function is a mathematical function whose zeros help mathematicians study the distribution of prime numbers. A zero is an input where the function equals zero. The negative even-number zeros are called trivial; the other relevant zeros are called nontrivial and lie in a known vertical region called the critical strip.

In 1859, German mathematician Bernhard Riemann proposed that every nontrivial zero lies on the center of that strip, a location called the critical line. That claim became the Riemann hypothesis, one of mathematics' best-known unsolved problems. Claude did not prove it.

[Anthropic's preprint reporting Claude's result](https://www-cdn.anthropic.com/564f962e60643842f5fcb4a17c9dbc8f608f1c37.pdf), a paper released before conventional journal peer review, proves a narrower lower bound, meaning a guaranteed minimum share. As zeros are counted at increasingly great heights, the paper raises the proven minimum share on the critical line from 5/12, about 41.67 percent, to at least 2/3, about 66.67 percent. An optimized version reports 0.6725, or 67.25 percent.

The theorem is asymptotic, so it describes the long-run share as the count extends higher rather than a census at one fixed point. Its denominator counts repeated zeros by multiplicity, the number of times a zero occurs. The paper separately states that at least two thirds are simple zeros, which occur once, and lie on the critical line. It does not classify the rest. A lower bound proves a floor, not the full hypothesis.

The popular 37-year framing also needs care. Number theorist J. B. Conrey proved that more than two fifths of the relevant zeros lie on the critical line in a [peer-reviewed 1989 paper](https://doi.org/10.1515/crll.1989.399.1). Human researchers continued to improve the bound, and the previous 5/12 record had stood since 2020 rather than since 1989.

Claude's paper credits Baluyot, Goldston, Suriajaya, and Turnage-Butterbaugh, four number theorists whose [2024 peer-reviewed paper](https://arxiv.org/abs/2306.04799) established a result about spacing relationships between zeta zeros without assuming the Riemann hypothesis. Claude's stated new ingredient was a linear-algebraic reading of that work, using the mathematics of vectors and matrices to expose another implication. The result emerged from an active human research frontier, not from 37 years of silence.

The evidence trail is meaningful but incomplete. Anthropic reports numerical checks, searches for counterexamples, proof review, and a search through 54 papers for prior work. It also released an [inspectable formal proof artifact](https://github.com/anthropics/zeta-23-lean) written in Lean 4, a theorem-proving programming language. Formal verification means the software checked precisely encoded statements and proofs against declared logical assumptions.

That gives the claim more substance than a persuasive chat answer, but the formal artifact was also released by Anthropic. The validation record cited here includes a preprint, company-led validation, the formal artifact, and limited examination by outside specialists whom Anthropic says reviewed it on short notice. That record does not establish conventional journal peer review or broad independent replication. I think this distinction matters beyond mathematics because a theorem supplies unusually explicit rejection tests, while most strategy and product questions require leaders to construct those tests before buying more attempts.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>The mathematical advance is a specific lower-bound result built on prior human research, not a proof of the Riemann hypothesis. Its strong checking methods make it a favorable case for persistent AI search, while its preprint status and missing causal comparison limit the conclusions.</p></div>

## When persistence becomes capital

The 31 million output tokens show activity, not price. Anthropic disclosed no input-token total, model price, hardware or energy cost, reviewer cost, opportunity cost, or return across comparable campaigns. I don't know whether 60 subagents or 650 rejected ideas were necessary, and the public evidence cannot answer that question.

Economics begins with a choice among scarce alternatives. Attempts may become easier to supply, but expert review, calendar time, model capacity, and competing projects remain limited. I think productivity begins to behave like capital when an organization can allocate those inputs in stages and ask whether the next stage deserves funding.

That claim should be falsifiable. If bounded campaigns with fixed evidence tests and independent evaluation do not produce more validated value per full cost than comparable open-ended campaigns, then governed persistence has not earned its economic case. Anthropic's published process material makes individual routes more inspectable. The portfolio evidence leaders still need would include wins and losses, model and tool spend, reviewer time, replication cost, delayed alternatives, false positives, and results that survived independent checks. One spectacular result cannot reveal the return across a portfolio.

A hypothetical renewal calculation makes the choice concrete. Suppose another stage requires €30,000 for model use and tools, 80 reviewer hours at an illustrative internal cost of €100 per hour, €12,000 for independent replication, and a €25,000 opportunity cost from delaying the best unfunded alternative. The full next-stage cost is €75,000. If a validated result would be worth €300,000, the campaign needs a defensible chance above 25 percent merely to clear that cost before risk and uncertainty are added. These figures are illustrative, not an estimate of Anthropic's project.

The arithmetic also changes the meeting. More output cannot raise the estimated chance by itself; new evidence must do that. If an independent evaluator cannot reproduce the claimed gain, or if the next batch offers no new test that could disprove the hunch, the honest estimate falls and the alternative project becomes more attractive. My take is that cost per independently validated result, compared with the next best use of the same resources, is the useful unit of AI productivity.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Persistent AI search becomes an investment only when leaders count the full next-stage cost and compare it with the best alternative. The thesis fails if bounded, independently tested campaigns do not improve validated value per unit of that full cost.</p></div>

## Write attempt 651 down in advance

A tireless system can always produce another reason to continue. The answer is a Tireless Intelligence Charter: a short, signed commitment that fixes the campaign's question, evidence, budget, and authority before the first run. It is not a new compliance layer and does not replace legal duties. It should live inside the organization's existing portfolio, finance, architecture, and AI-governance forums.

Freeze six fields as version 1 at launch:

- **Question and value owner:** Name the exact decision, theorem, design, or experiment and the sponsor accountable for its value.
- **Evidence contract:** Record the baseline, success threshold, evidence against the hunch, novelty test, and unacceptable failure conditions.
- **Stage limit:** Cap model and tool spend, elapsed time, permissions, reviewer hours, and replication effort; set the automatic review date.
- **Independent evaluator:** Assign the acceptance test to someone outside the delivery team, with conflicts and objections recorded.
- **Renewal and stopping authority:** Name the existing forum that compares another batch with the best unfunded alternative, and the person who can end the campaign.
- **Failure archive:** Preserve rejected hypotheses, traces, costs, tests, evaluator objections, and every renewal decision so another team does not pay to rediscover the same dead ends.

The state change must be equally clear. A campaign is **active** only while it remains inside the approved limit. It becomes **paused** automatically when it reaches a cap or review date. It becomes **renewed** only when the evaluator accepts new evidence and the named forum approves another stage. It becomes **stopped** when the evidence gate fails, another stage is worth less than the best alternative, or a prewritten integrity rule is breached.

One transition is forbidden: the delivery team cannot renew itself or rewrite version 1 of the evidence contract after seeing the output. If the team has a genuinely new hypothesis, it can propose version 2 with a new budget and a visible record of what changed. That keeps adaptation possible without allowing every failed prediction to return under a friendlier definition of success.

I think this is the human role that grows as execution and retry capacity become easier to buy. People still contribute technical ideas, domain knowledge, relationships, and judgment, but leadership carries a sharper obligation: decide which questions deserve industrial persistence and make stopping an authorized outcome. The 651st attempt should begin only because evidence earned it, never because the system is willing.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Freeze a signed charter before the search starts, pause automatically at the cap, and allow renewal only through independent evidence and an existing decision forum. Self-renewal and retrospective changes to the success test are forbidden.</p></div>

## Meanwhile in sci-fi

<div class="scifi">
<span class="scifi__label">Meanwhile in sci-fi</span>
<p class="scifi__film">Edge of Tomorrow (2014)</p>
<p>Director Doug Liman's 2014 science-fiction film follows Major William Cage, a soldier who returns to the start of the same battle whenever he dies. Repetition becomes useful because he carries information from each failed loop into the next one.</p>
</div>

The mapping is precise but limited: an AI system can start another attempt without human fatigue, while the organization still accumulates compute cost, review work, delay, and lost alternatives. Unlike Cage, the institution does not recover its budget when the day restarts. Humans must decide which day is worth repeating, what evidence would count as escape, and when refusing another loop is the most intelligent act left.
