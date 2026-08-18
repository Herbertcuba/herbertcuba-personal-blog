---
title: "Tireless intelligence needs a stopping rule"
tldr: "Claude's mathematical result suggests that organizations can now buy bounded persistence as compute, but retries become valuable only when they meet hard tests and independent review. Leaders therefore need to choose worthy questions, reserve verification capacity, and set funding and stopping rules before an agent campaign begins."
permalink: /drafts/b90f4cfe/
layout: post.njk
date: 2026-08-18
---

In August 2026, [Anthropic, the AI company behind Claude](https://www.anthropic.com/research/riemann-zeta), reported that an unreleased research version of its AI system tried 650 ideas without finding one that worked. Across the project, it used 31 million output tokens and roughly 60 subagents. An output token is a metered unit of text produced by a model; a subagent is a delegated AI process that can pursue a task with tools, files, and its own working context.

Those numbers invite a simple story about a machine outlasting mathematicians. The actual story is more useful. Claude's result depended on decades of human mathematics, a new conceptual step, computer-assisted tests, a formal proof artifact, and specialist review. Persistence was one part of an instrumented search, not a substitute for insight or evidence.

What changed was the ability to purchase one narrow part of thinking: continuing through failed paths. Once that capacity becomes a budget, leadership has to decide which questions deserve it, what will count as progress, and which conditions will end the campaign.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Claude's 650 failed ideas matter because sustained search can now be funded as a metered input. The result does not make thought free; it makes question selection, verification, and stopping more important.</p></div>

## The result came from an instrumented search

The Riemann zeta function is a mathematical function whose special, or nontrivial, zeros are tied to fine patterns in the distribution of prime numbers. In 1859, German mathematician Bernhard Riemann proposed what became the Riemann hypothesis: all those zeros should lie on a particular line in the complex-number plane, called the critical line. That famous claim remains unproved.

The [August 2026 preprint released by Anthropic](https://arxiv.org/abs/2608.13637v1) makes a narrower claim. It raises the unconditional lower bound, the minimum share proven to lie on the critical line without assuming the Riemann hypothesis, from 5/12 to at least 2/3. That is a 25-percentage-point increase; an optimized version in the paper reaches 0.6725.

The popular “37-year record” framing also needs care. It reaches back to number theorist J. B. Conrey's peer-reviewed 1989 result, but other mathematicians improved the bound in the intervening years. The immediate 5/12 record had stood since 2020.

Anthropic's 650 unsuccessful ideas are a vendor-reported process count, not a reproducible measure of difficulty. The successful route drew on a [2024 peer-reviewed paper by four number theorists](https://arxiv.org/abs/2306.04799) and added a linear-algebraic reading of their work. According to Anthropic, the wider search also used computer scripts, numerical checks, counterexample searches, reviews by other agents, and 54 research papers during its novelty check. Failure became useful because bad routes could be tested and redirected.

The evidence has several layers. Anthropic published a [Lean 4 formalization](https://github.com/anthropics/zeta-23-lean): Lean 4 is a proof-assistant language that checks a precisely encoded mathematical statement and each logical step behind it. Anthropic also says internal mathematicians validated the paper and two outside number theorists examined it on short notice. That is meaningful scrutiny, but it is not conventional journal peer review or independent replication.

Nor has Anthropic published the project's full cost or a controlled comparison showing whether the decisive factor was model capability, agent count, orchestration, or token volume. The responsible status today is therefore a promising preprint with a public formal artifact. Independent replication or journal review could strengthen that status; a substantive correction or a flaw in the formalization could weaken it.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>The result is a specific advance in a lower bound, not a proof of the Riemann hypothesis. Scaled persistence helped surface it, but prior mathematics, a conceptual move, falsification, formal checking, and human review all belong in the causal story.</p></div>

## The right to continue now has a price

In organizations, a line of inquiry often ends before logic proves it hopeless. Specialist time runs out, deadlines arrive, and repeated failure becomes harder to defend. The Claude case did not measure fatigue, shame, or career risk, so those should remain an interpretation rather than a scientific finding. It does show that some search capacity can move from human endurance into metered computation.

This is what I mean when I say productivity increasingly becomes capital. The capacity to generate and test another candidate can be purchased through compute, tools, and review time. The cost has not disappeared; it has moved into a budget that can be expanded by whoever controls the capital.

Mathematics is unusually favorable terrain for that investment because a proposed proof can be attacked line by line. Many enterprise questions have weaker tests. Strategy, hiring, and product choices unfold in changing systems where success may arrive late and reasonable people may dispute its cause. A tireless system can then produce polished support for a hunch faster than the organization can challenge it.

Evidence from ordinary AI work reinforces that caution. A [2023 National Bureau of Economic Research working paper](https://www.nber.org/papers/w31161), based on 5,179 customer-support agents, found that an AI assistant increased issues resolved per hour by 14% on average. In a different setting, a [2025 randomized study by METR](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/), an independent AI-evaluation research group, found that 16 experienced open-source developers took 19% longer on 246 software issues when allowed to use early-2025 AI tools. These studies do not cancel each other out. They show that task, workflow, and measurement determine whether more AI activity creates economic value.

As candidate generation accelerates, independent verification becomes the scarce resource. If review cannot keep up, an organization accumulates plausible claims rather than knowledge. The new leadership problem is therefore not how to keep the agents busy. It is how to ration the right to continue.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Purchasable persistence shifts the constraint from producing another attempt to validating whether it changed anything. Because AI value varies by task, leaders should budget for evidence and review rather than treating agent activity as productivity.</p></div>

## Meanwhile in sci-fi

<div class="scifi">
<span class="scifi__label">Meanwhile in sci-fi</span>
<p class="scifi__film">Edge of Tomorrow (2014)</p>
<p>Doug Liman's science-fiction film follows Major William Cage, a soldier forced to repeat the same deadly battle while retaining what he learned. The mapping to agent search is precise: repetition helps only when each failure changes the next attempt, and the loop still needs an externally defined victory condition. Compute can supply another cycle; people must decide whether it produced information and whether escape remains worth pursuing.</p>
</div>

## The first stopping rule comes before the first attempt

A campaign should earn its first finite batch by beating the best alternative use of the same budget. The question must affect a material decision, have a named sponsor, and come with a measurable baseline or comparator. Leaders should also state what evidence would disconfirm the hunch. Without that condition, every disappointing result can be rewritten as a reason to search longer.

Independent review capacity belongs in the admission decision too. A domain expert, separate test, external data source, or formal checker must be available before candidate output begins to pile up. If nobody has the time or standing to reject the result, the organization has funded production without funding knowledge.

Authority needs the same boundary as money. For enterprise work, the initial approval should name permitted data classes and locations, retention limits, tool access, a reversible supplier exit, and the person who can revoke access. Expiry must prevent a new batch from starting. Otherwise, a stopping rule is only prose wrapped around an active system.

Funding can then move in stages, with a budget that includes compute, elapsed time, and reviewer hours. The delivery team may request renewal, but an existing portfolio forum should grant it only when a batch produces a new falsifiable hypothesis, improves an agreed measure, or yields an independently accepted result. This keeps business value, risk, and opportunity cost in the same decision instead of creating a separate AI committee.

Portfolio reporting should begin with accepted outcomes and their full cost, including review and replication. A second view should show reviewer delay, because a congested evidence function can make a useful search look unproductive. Leaders should also examine renewals granted without new evidence and stops later judged premature. The purpose is to improve the decision rule, not to reward either persistence or caution in isolation.

None of these controls is new. Research programs have long declared tests in advance, while engineering and investment teams have used finite stages and automatic cutoffs for decades. The AI-specific difference is speed: agents can generate candidates and arguments for renewal faster than independent reviewers can examine them.

That is why stopping conditions belong in the original approval. Pause when the same failure recurs without a new hypothesis, independent checking cannot reproduce the claim, required authority exceeds the agreed boundary, or another portfolio question now has higher expected value. Preserve the rejected paths and their tests so that ending a campaign still leaves an auditable asset.

Humans will continue to contribute technical ideas and interpret evidence that does not fit a clean test. Leadership carries the further responsibility of deciding whose data, time, and budget the search may consume. Once endurance can be bought, stopping becomes part of capital allocation. The question must be worthy of persistence before the organization pays for one more attempt.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Admit only questions with decision value, disconfirming evidence, independent review, bounded authority, and a better case than the next portfolio option. Fund finite batches, renew on validated learning, and treat a prewritten stop as responsible allocation rather than defeat.</p></div>
