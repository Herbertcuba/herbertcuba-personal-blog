---
title: "Tireless intelligence needs a stopping rule"
description: "Claude's 650 failed ideas show how persistence is becoming a budget, and why leaders must define evidence and an exit before funding the next round."
tldr: "Anthropic's 2026 Riemann-zeta experiment does not establish that persistence alone caused a mathematical advance, but it shows that organizations can now buy large, instrumented searches. Leadership must choose questions worth that effort, judge full cost per independently validated result, and set renewal and stopping rules before the search begins."
permalink: /drafts/b90f4cfe/
layout: post.njk
date: 2026-08-15
---

On 10 August 2026, [Anthropic, the AI company behind the Claude AI system](https://www.anthropic.com/research/riemann-zeta), reported a research run that would be difficult to ask of a person. An unreleased version of Claude proposed 650 mathematical ideas that did not work, then continued searching. Across two sessions in Claude Code, Anthropic's tool-using coding environment, the system generated 31 million output tokens and coordinated about 60 subagents over roughly a day and a half.

Those terms matter. An output token is a unit of model-generated text used for metering, while a subagent is a delegated model run that can use tools and pursue part of a problem. The figures describe machine activity rather than employee headcount or a dollar price. Anthropic published neither a full cost ledger nor a controlled comparison showing what fewer attempts, agents or tokens would have produced.

The mathematical insight still mattered, as did decades of prior work and several layers of checking. I think the consequential change is that an organization could fund a large search around those ingredients. Fatigue, shame and career risk were not measured in this experiment; they are an interpretation of pressures that often limit human persistence. The documented shift is narrower: repeated search can now be bought in batches, which leaves leaders to decide which questions deserve the budget, what evidence earns another batch and who can end the campaign.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Claude's run made persistent search a visible, metered input. That does not make the search cheap or prove that retries caused the result; it turns continuation into a leadership decision.</p></div>

## The mathematics is narrower than the headline

The [Riemann zeta function](https://www-cdn.anthropic.com/564f962e60643842f5fcb4a17c9dbc8f608f1c37.pdf) is a mathematical function evaluated on complex numbers, which have a real and an imaginary coordinate. Its zeros are inputs where the function returns zero. The known “trivial” zeros occur at negative even integers; the harder nontrivial zeros carry information about how prime numbers are distributed.

In 1859, the German mathematician Bernhard Riemann proposed what became the Riemann hypothesis: every nontrivial zero lies on the critical line, a vertical reference line at real coordinate one-half on the graph used for complex numbers. That hypothesis remains open. The Claude-authored paper makes a more limited claim about how many zeros can already be proved to sit there.

The paper reports an unconditional lower bound, meaning a proven minimum that does not assume the Riemann hypothesis. As the theorem counts zeros farther and farther along the critical line, it raises the minimum share of simple zeros there from 5/12 to at least 2/3; an optimized calculation reaches 0.6725. A simple zero occurs once at its location, while the comparison total counts a repeated zero according to how many times it occurs.

The “37-year” framing also needs care. Number theorist [J. B. Conrey proved more than two fifths in a peer-reviewed 1989 paper](https://doi.org/10.1515/crll.1989.399.1), and later human work improved the record to 5/12 in a 2020 journal volume. The 37 years run from Conrey's landmark to the 2026 paper; they were not 37 years without progress.

Claude's paper also credits [a 2024 peer-reviewed result by four number theorists, Baluyot, Goldston, Suriajaya and Turnage-Butterbaugh](https://arxiv.org/abs/2306.04799). Their work studied pair correlation, the way spacing between pairs of zeta zeros behaves. The new paper describes its own contribution as a fresh reading of part of that work through linear algebra, the mathematics of vectors and matrices. I think that combination matters because search scale can help surface an idea without having created the research frontier that made the idea possible.

Anthropic released a [Lean 4 formalization](https://github.com/anthropics/zeta-23-lean) alongside the paper. Lean 4 is a theorem-proving programming language, and formal verification means that the software checks a precisely encoded statement and proof under declared logical rules. Anthropic also says internal mathematicians studied the paper and two outside specialists examined it on short notice. These are meaningful checks, while the work remains a lab-released preprint, a research paper circulated before conventional journal peer review.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>The advance is a specific lower bound within a human-built line of research. Search scale worked alongside a conceptual step, formal checking and early specialist scrutiny; the Riemann hypothesis remains unsolved.</p></div>

## Persistence has become a capital decision

The run was more than repeated prompting. Anthropic reports numerical tests against known zeros, searches for cases that could break candidate claims, hundreds of scripts in the Python programming language and 54 papers downloaded from arXiv, an open repository for scholarly preprints, to check whether the result was already known. That process does not prove novelty or economic value, but it shows an instrumented search in which failed routes could inform the next move.

This sharpens one claim in my Three Crucibles framing, a way of thinking about the forces reshaping enterprise work: productivity increasingly behaves like capital. Organizations can acquire capacity, allocate it across problems and combine it with tools and expert review. Once another batch of research paths can be purchased, persistence stops being only a personal virtue and becomes a portfolio choice. I think governance belongs inside that economic decision because a budget buys the ability to continue, not a reason to continue.

Evidence from ordinary work makes the distinction clearer. A [2023 working paper from the National Bureau of Economic Research, a U.S. economics research organization](https://www.nber.org/papers/w31161), studied 5,179 customer-support agents and found that access to a conversational assistant increased issues resolved per hour by 14% on average. In a different setting, [METR, an independent AI-evaluation group, reported in 2025](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/) that 16 experienced open-source developers took 19% longer on 246 real software issues when allowed to use early-2025 AI tools. METR now treats that study as a historical snapshot rather than a current forecast.

The studies cover different people, tools and jobs, so their results should not be averaged into a universal productivity number. My take is that persistent AI work needs a harder measure: full cost per validated outcome, where the result has passed a predeclared test and an independent check. That cost includes model and tool spend, elapsed time, expert review, replication and the value of the project displaced. I don't know the full cost of Claude's mathematics run because Anthropic did not publish enough information to calculate it. Thirty-one million output tokens tell us how much text the system generated, not whether another campaign will be worth funding.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Organizations can buy more search, but tokens and retries measure activity. Economic value appears only when an independently checked result justifies its full cost against the next-best use of the same budget.</p></div>

## Meanwhile in sci-fi

<div class="scifi">
<span class="scifi__label">Meanwhile in sci-fi</span>
<p class="scifi__film">Edge of Tomorrow (2014)</p>
<p>Doug Liman's film follows Major William Cage, a soldier forced to relive the same battle whenever he dies. Repetition becomes useful because he retains what each failure teaches and changes the next attempt.</p>
</div>

The mapping is precise: a persistent AI search creates value when each failed route becomes evidence that changes the next hypothesis. Without retained failures and a condition for escape, tirelessness produces an expensive loop rather than learning.

## Write the exit before you fund the search

A one-page Tireless Intelligence Charter can turn that principle into an operating decision. It is a precommitment written by the accountable business owner and an independent reviewer before the agents start. Four questions are enough to expose whether a campaign deserves persistence:

1. **What question earns the search?** Name the decision or claim, its possible value and the other project that will lose the same money and attention.
2. **What evidence changes the decision?** Freeze the success test, the evidence that would disconfirm the hunch and the independent method or person that must reproduce the result.
3. **Who may release the next stage?** Cap each stage by model and tool spend, tokens, elapsed time, permissions and reviewer hours. Give renewal authority to a named owner who is not the delivery system renewing itself.
4. **What ends the campaign?** Stop when the same failure returns without a new testable idea, independent checking cannot reproduce the claim, the work crosses its data or authority boundary, or the expected value of another batch falls below the next portfolio candidate.

The record should preserve rejected ideas, tests and sources as well as accepted results. That archive reduces the chance that a later run pays to rediscover the same dead ends, and it lets a reviewer reconstruct why a campaign continued. A stopping rule written in advance also limits the temptation to defend a project simply because it has already consumed money and attention.

I think humans will keep contributing technical ideas, domain knowledge, relationships and judgment. The sharper leadership responsibility comes from being accountable for direction and refusal. A tireless system can always produce another path worth inspecting; it cannot decide that the institution has seen enough unless we give it a rule and someone owns that rule.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Write the question, evidence, renewal authority, full-cost limits and stop conditions before launch. Tireless systems make another round easy to request; leadership is the accountability to refuse it when the evidence has stopped improving.</p></div>
