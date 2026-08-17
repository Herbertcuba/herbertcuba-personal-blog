---
title: "Claude shows how persistence becomes a budget line"
description: "A mathematical result from Claude reveals why organizations need to fund verification alongside AI search and decide in advance who can stop the work."
tldr: "Anthropic’s reported Riemann-zeta result shows that long AI searches can now be funded as a metered input, but retries are not the same as value; leaders need a separate verification budget, an independent acceptance test, staged renewal, and a stopping rule that the delivery system cannot override."
permalink: /drafts/b90f4cfe/
layout: post.njk
date: 2026-08-17
---

AI is beginning to separate the cost of producing another candidate idea from the cost of knowing whether that idea is true.

On 10 August 2026, [Anthropic](https://www.anthropic.com/research/riemann-zeta), the AI company behind Claude, reported that an unreleased research version of its system had generated 650 unsuccessful candidate ideas during work that produced a new bound in number theory. The wider effort used 31 million output tokens, units of model-generated text used to meter inference, and about 60 subagents over roughly a day and a half. A subagent is a delegated AI process working with tools on one part of a larger task, not an autonomous employee.

Those are Anthropic’s figures. The company has not published a complete trace or a rule for counting an “idea,” and its public material includes neither a campaign invoice nor a controlled comparison showing that the number of attempts caused the result. Even with those limits, the case demonstrates something strategically important: an organization can authorize a long, instrumented search without asking one person to absorb every failed path.

That changes the leadership problem. When persistence becomes metered capacity, another batch of attempts needs the same scrutiny as any other investment: a worthy question, a credible test, enough verification capacity, and an owner willing to end the work.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>Anthropic’s process counts do not prove that repetition caused the discovery, but they show that large AI searches can be funded and measured, making evidence and termination leadership decisions.</p>
</div>

## This problem came with an acceptance test

The Riemann zeta function is a mathematical function connected to the distribution of prime numbers. A zero is an input at which the function equals zero. In 1859, German mathematician Bernhard Riemann proposed that every nontrivial zero lies on the “critical line,” where one coordinate has the value one-half. That claim, the Riemann hypothesis, remains unproved.

The [Claude preprint](https://www-cdn.anthropic.com/564f962e60643842f5fcb4a17c9dbc8f608f1c37.pdf) makes a narrower claim. A lower bound here means a proven minimum share of those zeros on the critical line. The paper raises the prior bound from five twelfths, the record since 2020, to at least two thirds and reports an optimized constant of 0.6725. It does not prove that the remaining zeros sit elsewhere, and it does not solve the Riemann hypothesis.

The result also depends on a long human research lineage. Number theorist J. B. Conrey’s [peer-reviewed 1989 paper](https://doi.org/10.1515/crll.1989.399.1) proved that more than two fifths of the zeros lie on the line; later mathematicians improved that bound before it reached five twelfths in 2020. This is why the popular “37-year record” description is misleading if it suggests 37 years without progress. The Claude paper also credits [work submitted in 2023 and published in 2024](https://arxiv.org/abs/2306.04799) by four number theorists, then describes its own new ingredient as a linear-algebraic reading of that work. Linear algebra is the mathematics of representing and manipulating relationships among quantities, so this was a new way to use existing mathematical structure, not blind repetition alone.

Anthropic also released a [formal verification in Lean 4](https://github.com/anthropics/zeta-23-lean), a theorem-proving language that can check a precisely encoded statement and its logical dependencies. The company says internal mathematicians validated the paper and two outside specialists examined it on short notice. Those are meaningful checks, but they are not conventional journal peer review or independent replication. The important economic feature is that this task had unusually clear ways to reject bad output. Most strategic hunches do not.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>Claude advanced a specific, checkable lower bound built on decades of human mathematics; formal checking and expert examination made persistent search useful without turning the preprint into a settled proof of the Riemann hypothesis.</p>
</div>

## The economic shift is in continuation

People have bodies and reputations. After repeated failure, fatigue consumes attention, while shame or career risk can make another attempt harder to justify. The Claude case did not measure those effects, so saying they became compute is an economic interpretation rather than a research finding. The practical shift is still real: an AI system does not feel those pressures, and its continuation can be expressed in tokens, elapsed time, tool access, and reviewer hours.

That does not make thinking free. Thirty-one million output tokens measure activity, not return, and Anthropic has not disclosed the full economic cost of this campaign. As candidate production scales, verification can become the scarcer resource because domain experts, formal checks, replication, and accountable decisions do not appear merely because the system generated more material.

Evidence from ordinary work reinforces the need to measure outcomes in context. A [2023 working paper](https://www.nber.org/papers/w31161) from the U.S. National Bureau of Economic Research studied 5,179 customer-support agents and found that an AI assistant increased issues resolved per hour by 14% on average. In a different setting, [a 2025 randomized study](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/) by METR, an independent AI research organization, found that experienced open-source developers took 19% longer on the measured tasks when allowed to use early-2025 AI tools. These findings concern different people and workflows, so they should not be averaged into one universal productivity number. They show why output volume cannot settle the investment case.

A useful economic measure is full cost per independently accepted outcome within a fixed task class and time window. The cost should include rejected attempts, model and tool spend, delivery labor, reviewer time, and replication. An outcome enters the denominator only when a verifier who did not produce it accepts it against the predeclared test.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>AI can make continuation easier to purchase while leaving truth expensive, so leaders should measure the complete cost of independently accepted results rather than tokens, attempts, or confidence.</p>
</div>

## Meanwhile in sci-fi

<div class="scifi">
<span class="scifi__label">Meanwhile in sci-fi</span>
<p class="scifi__film">Edge of Tomorrow (2014)</p>
<p>Doug Liman’s science-fiction film follows a soldier trapped in a lethal day that resets, while he retains enough memory to change his next move. The mapping is limited but useful: persistent agents supply repeatable runs, while leaders supply the objective, the evidence that a run taught the organization something, and permission to continue. Repetition creates value only when one cycle changes the decision in the next.</p>
</div>

## Continuation needs an owner

A persistent campaign should begin with a written search mandate. The sponsor names the exact question, the decision it could change, the evidence that would confirm or disconfirm the claim, and how novelty will be checked. An existing portfolio or risk forum should appoint the verifier and retain the power to replace that person or team. Independence means the verifier does not report to the delivery lead, has no renewal target to protect, and can demand replication or reject the result.

The same forum should approve two staged budgets. The search budget covers model use, tools, elapsed time, and allowed actions; the evidence budget reserves specialist review and replication capacity. Procurement and security advise before activation when vendor terms or sensitive data are involved, while employee representatives should be included when the campaign changes work or monitoring. This keeps the controls inside existing decision forums instead of creating an ornamental AI committee.

Renewal happens on a set date and requires fresh authorization. Repeated failure without a new hypothesis, a claim that independent review cannot reproduce, authority that has grown beyond the original mandate, or an expected return below the next portfolio candidate should trigger a pause or closure. The delivery team can present evidence for continuation, but it cannot renew its own campaign.

A software warning is not enough. The dispatcher, the component that sends work to subagents, should reserve remaining quota before each launch, limit work already in progress, reject approvals that refer to an old campaign state, and remove launch or tool permission when the campaign is paused or closed. Failed paths should be stored with their sources and tests so a stopped search leaves usable knowledge rather than inviting a future system to purchase the same failures again.

This mandate is an [AI operating model](/posts/building-the-ai-operating-model/) in miniature: it puts goals, authority, evidence, and control into the work itself. I think that makes the human responsibility more visible, not smaller. People still form hypotheses and contribute domain judgment, but someone must remain accountable for deciding which questions may consume shared resources and what evidence earns another allocation.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>Give persistent AI work a written mandate, separate search and evidence budgets, an independent verifier, external renewal authority, and an enforceable pause so that tirelessness serves a worthy question instead of extending every hunch.</p>
</div>
