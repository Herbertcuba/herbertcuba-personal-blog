---
title: "Tireless intelligence needs a stopping rule"
tldr: "Claude's 2026 result on the Riemann zeta function shows that organizations can now provision unusually persistent, instrumented search as a metered operating input. It does not show that retries alone create breakthroughs or that thought is cheap, so leaders must choose worthy questions, freeze evidence standards, separate delivery from renewal, and enforce stopping rules before the search begins."
permalink: /drafts/b90f4cfe/
layout: post.njk
date: 2026-08-16
---

Six hundred and fifty ideas failed. On 10 August 2026, [Anthropic](https://www.anthropic.com/research/riemann-zeta), the AI company behind Claude, reported that an unreleased research version of its AI system kept searching and eventually advanced a mathematical bound connected to the Riemann hypothesis.

The work ran over two sessions in Claude Code, Anthropic's environment for AI agents that can use files, scripts and command-line tools. Anthropic reports 31 million output tokens, units of model-generated text used to meter consumption, followed by about a day and a half coordinating roughly 60 subagents. A subagent here is a delegated Claude run assigned part of the work, not a digital employee.

Those numbers make persistence visible, but they do not prove that persistence caused the result. Anthropic published no controlled comparison across different token budgets, agent counts or retry limits. The successful proof also depended on decades of human mathematics, a conceptual move, software checks and specialist review.

I think the organizational shift is still profound. Anthropic did not study fatigue, shame or career risk, so the case cannot tell us how those pressures affected any mathematician. Yet human search is constrained by all three, while a machine can turn another round of failure into a budget request. The scarce decision moves from whether someone can endure attempt 650 to whether attempt 651 deserves institutional time, money and attention.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Claude's run makes extraordinary persistence something an organization can provision and meter, without proving that more retries produce more value. Leadership therefore has to govern the question, the evidence and the right to continue.</p></div>

## What the theorem actually changed

The Riemann zeta function is a mathematical function whose zeros, the inputs that make its value equal zero, reveal increasingly fine information about how prime numbers are distributed. Its trivial zeros are known values at the negative even integers. The nontrivial zeros exclude those known cases, and they are the ones relevant to the Riemann hypothesis.

In 1859, German mathematician Bernhard Riemann proposed what became that hypothesis: every nontrivial zero should lie on the critical line, a particular vertical line in the function's coordinate system. The hypothesis remains unproved. Claude did not solve it.

Anthropic's live announcement was updated on 13 August to point to a [revised 17-page preprint dated 11 August 2026](https://www-cdn.anthropic.com/95c246936988e43127bc6b2ceb7077c1dad2d68e.pdf). A preprint is a research manuscript released before conventional journal peer review. This one is authored as Claude and published by Anthropic, making it a public but still unrefereed vendor-originated result.

The paper proves that, as zeros are counted in increasingly high ranges, at least two thirds of the nontrivial zeros are both simple and on the critical line. A simple zero occurs once. The underlying total counts zeros with multiplicity, which means a repeated zero is counted once for every repetition. An optimized version gives 0.6725 as the lower bound, the minimum share the proof guarantees.

The previous record was 5/12, about 41.7%, and had stood since 2020. The popular “37-year record” framing reaches back to number theorist [J. B. Conrey's peer-reviewed 1989 result](https://doi.org/10.1515/crll.1989.399.1) of more than two fifths, but human mathematicians improved the bound between 1989 and 2020. This was a large step in a living research line, not the end of 37 motionless years.

The revised paper credits earlier work and describes its new ingredient as a linear-algebraic reading of an existing mathematical sum. Linear algebra is the mathematics of vectors, matrices and the relationships between them; here it provided a new way to interpret machinery built by earlier researchers. Anthropic also released a [Lean 4 formalization](https://github.com/anthropics/zeta-23-lean), meaning the proof was encoded for a theorem-proving program to check against explicit rules and dependencies. Anthropic says its own mathematicians validated the paper and two outside number theorists examined it on short notice. Those checks matter, but they are not completed journal peer review or independent reproduction of the full campaign.

I think this case gave persistent search an unusually clear finish line. A candidate proof could face numerical tests, a precise theorem, a search through prior literature, formal checking and specialist examination. Most strategic questions do not arrive with evidence gates that sharp, which is why the leadership lesson begins with evidence design rather than agent count.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Claude raised a specific lower bound from 5/12 to at least two thirds; it did not prove the Riemann hypothesis. Prior human mathematics and unusually strong ways to test the result made this a favorable case for persistent AI search.</p></div>

## Persistence can be bought, but value cannot

Anthropic's account describes an instrumented search rather than 650 copies of one prompt. The agents issued 2,400 shell commands, wrote hundreds of scripts, ran numerical checks, looked for counterexamples and downloaded 54 papers from arXiv, a public repository for research manuscripts, to look for prior work. Persistence was combined with branching work, tools, retained records and review.

The public record cannot reproduce the whole campaign. Anthropic's [transcript document](https://www-cdn.anthropic.com/8a0d1add3c637b858a9a181e98c40e9548c3f44f.pdf) contains annotated records for two selected subagents on the successful route, while noting that private reasoning is absent and most tool calls appear only as summaries. The unreleased model build, complete prompt and branch history, total input-token use, generation settings, retry policy and comparable runs at other budgets are not disclosed. Even “650 ideas” is an Anthropic-defined unit, not a public distribution of independent attempts.

My take is that the case demonstrates a new operating capacity, not its average return. Thirty-one million output tokens show scale, but the public material does not supply a complete financial denominator for model use, tools, infrastructure, expert review, replication or the next-best project that lost those resources.

The economic language matters. This result does not make productivity a capital asset in an accounting sense. Persistent search is better understood as a metered operating input, while each new stage resembles an investment option: the organization has the right, but not the obligation, to fund another bounded round after seeing new evidence. I don't know whether half the tokens would have found the same proof, or whether twice the review would have revealed a problem. The decision metric must therefore be full cost per independently accepted result, not attempts survived.

Evidence from ordinary work supports that caution, although it cannot be transferred directly to frontier mathematics. A [2023 working paper](https://www.nber.org/papers/w31161), meaning preliminary research not yet carrying completed journal peer review, came from the U.S. National Bureau of Economic Research and studied 5,179 customer-support agents. Access to an AI assistant increased issues resolved per hour by 14% on average in that setting.

A different result came from METR, a research nonprofit that evaluates AI systems. Its [2025 randomized study](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/) found that 16 experienced open-source developers took 19% longer on 246 tasks when allowed early-2025 AI tools, even though they believed they were faster. In a [February 2026 update](https://metr.org/blog/2026-02-24-uplift-update/), METR said newer tools probably helped more, but selection effects and unreliable time measurements prevented a dependable new estimate. These studies concern different workers and workflows; together they show why activity cannot stand in for measured value.

I think tireless systems add one specific danger. They can generate renewal justifications faster than independent reviewers can verify them. Every failed gate can produce another polished hypothesis, memo or exception request, until the campaign starts using its own volume as evidence that it deserves to continue. Verification capacity, not machine output, becomes the bottleneck.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Agent activity is now easy to meter and purchase, but it is not economic value. Full cost per independently accepted result matters because tireless systems can manufacture arguments for continuation faster than reviewers can test them.</p></div>

## Make stopping an enforceable decision

I think ordinary stage gates, the planned reviews where leaders decide whether work proceeds, need a harder boundary when the work can argue for its own continuation. A Tireless Intelligence Charter should be a one-page control record completed before launch, with four fillable parts:

- **Question and alternative:** question owner; decision to be changed; observable value; next-best project competing for the same capacity.
- **Frozen evidence version:** acceptance test and version; disconfirming evidence; novelty test; independent evaluator; required replication.
- **Stage envelope:** model-and-tool budget; token and time limits; tool permissions; reviewer-hour allowance; review date.
- **Authority and record:** delivery owner; budget owner; kill authority; renewal or stop decision; archive owner and signatories.

The boundary has to exist in the orchestration layer, the software that assigns work and releases the next quota. A campaign starts as PROPOSED and becomes ACTIVE only after the required approvals. Reaching any quota, time limit or review date moves it automatically to PAUSED.

Reactivation then requires two separate things: a passed independent evidence check and a new authorization from the budget owner. The delivery team cannot renew its own campaign; the system treats that request as an illegal transition and rejects it. If the evidence fails or renewal is refused, the campaign becomes CLOSED. Its prompts, tests, accepted evidence, rejected paths and decision history move into a write-once record that later users can inspect but not silently alter.

Consider a clearly hypothetical 5,000-person Nordic manufacturer. It asks whether an AI research campaign can find a scheduling change that cuts simulated energy use by 8% without reducing throughput, then pass a rerun on data hidden from the delivery team. The first stage receives eight weeks, a €50,000 model-and-tool cap, 80 reviewer hours and a prebooked decision date; the next-best use of that capacity is a monitoring upgrade already in the portfolio. Before activation, the existing procurement, security and employee-consultation processes examine vendor terms, data access and effects on work.

At the first limit, the orchestration system pauses the campaign. The independent evaluator can accept the result, request one bounded replication or reject it. Only the budget owner can release a second stage. Closure sends the remaining capacity to the monitoring upgrade and preserves the failed paths, so stopping does not erase what the organization paid to learn. The numbers are illustrative. The enforceable pause is the point.

The Charter should also face its own evidence gate. Compare Charter-governed campaigns with ordinary stage gates across two 90-day portfolio cycles, using the same task classes and full-cost boundary. Define a false stop as a campaign that an audit finds had already met its frozen test when it was closed. Before the pilot, require at least 20% fewer renewals unsupported by independent evidence, no increase in the false-stop rate, and a lower full cost per independently accepted result, including reviewer time. If the Charter merely shifts work onto reviewers or fails to beat the baseline, retire or redesign it.

A Monday-morning portfolio view can remain short: unsupported renewals, reviewer load, false stops, accepted results and full cost per accepted result. Those measures reveal whether persistence is producing validated learning or only a stronger case for its own survival.

People still contribute technical ideas, domain knowledge, interpretation, relationships and accountability. The additional leadership duty is to decide which question deserves institutional persistence, what evidence can change the decision and when refusal protects more value than another run.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>A stopping rule becomes credible only when quotas trigger an automatic pause, independent evidence governs renewal and the delivery team cannot fund itself. The Charter should then be tested against ordinary stage gates on unsupported renewals, reviewer burden and full cost per accepted result.</p></div>

## Meanwhile in sci-fi

<div class="scifi">
<span class="scifi__label">Meanwhile in sci-fi</span>
<p class="scifi__film">Edge of Tomorrow (2014)</p>
<p>Doug Liman's science-fiction film follows Major William Cage, a soldier forced to relive the same lethal battle. Progress becomes possible because memory survives each reset and changes what he tests next.</p>
</div>

The mapping is repetition joined to retained evidence and an exit condition. Claude's discarded proof paths mattered when they sharpened the next test; another loop without new evidence would only consume resources. Machines can own attempt 650. Leadership must decide whether attempt 651 has earned its budget.
