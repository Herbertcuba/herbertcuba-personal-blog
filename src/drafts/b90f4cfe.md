---
title: "Tireless Intelligence Needs a Stopping Rule"
tldr: "Anthropic’s Claude used 31 million output tokens, roughly 60 subagents, and hundreds of unsuccessful ideas to produce a new, formally checked bound in number theory. The case does not show that persistence alone creates breakthroughs; it shows that organizations can now fund large searches as a metered input, making question choice, independent evidence, and prewritten stopping rules central leadership work."
permalink: /drafts/b90f4cfe/
layout: post.njk
date: 2026-08-17
---

[Anthropic, the AI company behind Claude, reported on 10 August 2026](https://www.anthropic.com/research/riemann-zeta) that an unreleased research version of its system had generated 650 ideas, none of which worked. Across two sessions in Claude Code, Anthropic’s coding-agent environment, the project produced 31 million output tokens, the units used to meter model-generated text. It also coordinated roughly 60 subagents, meaning delegated Claude runs working on parts of the problem, before producing a new mathematical result.

What deserves attention is the organization’s ability to provision enough search capacity to survive hundreds of dead ends while preserving promising fragments. The run does not prove that persistence caused the insight, but it does show that persistence can now be allocated in tokens, tools, time, and review.

I think this is the economic shift worth noticing. When another serious attempt becomes something an organization can buy, leadership moves toward deciding which questions deserve sustained search, what evidence can justify another round, and which conditions should end the campaign.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Claude’s result makes persistence visible as a fundable input. That raises the value of choosing the question, defining proof, and limiting the search before the first agent starts.</p></div>

## First establish what was proved

Claude did not prove the Riemann hypothesis. The zeta function is a mathematical object whose zeros reveal deep patterns in how prime numbers are distributed. The famous conjecture from German mathematician Bernhard Riemann’s 1859 work says that all the relevant, or “nontrivial,” zeros lie on a specific vertical line called the critical line.

The [new paper](https://www-cdn.anthropic.com/564f962e60643842f5fcb4a17c9dbc8f608f1c37.pdf) proves a lower bound, meaning a guaranteed minimum share of those zeros on the critical line. Its basic theorem raises that share from 5/12 to at least 2/3, an increase of 25 percentage points, and an optimized version states 0.6725. The full hypothesis remains unproved.

The popular “37-year record” description also needs care. Number theorist J. B. Conrey proved in a [1989 peer-reviewed paper](https://doi.org/10.1515/crll.1989.399.1) that more than two fifths of the zeros lie on the line. Later human work improved that result, and the previous 5/12 record had stood since 2020 rather than 1989. Claude’s proof also credits a [2024 paper by four number theorists](https://arxiv.org/abs/2306.04799) that supplied a crucial result about the spacing of zeta zeros without assuming the Riemann hypothesis; the new ingredient was a linear-algebraic reading of that prior work.

The checks are unusually substantial for an AI result. Anthropic says internal mathematicians validated the paper and two outside specialists examined it on short notice. It also released a [Lean 4 formalization](https://github.com/anthropics/zeta-23-lean): Lean is a theorem-proving programming language that checks a precisely encoded proof and its declared assumptions. That improves auditability, although it does not replace conventional journal review or settle every question about novelty and significance.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>The result is a large advance in a proven minimum, not a solution to the Riemann hypothesis. It combines decades of human mathematics, a new conceptual reading, and several validation layers, which is why raw persistence cannot carry the explanation alone.</p></div>

## Persistence can now be provisioned

That process looked less like one long conversation and more like an instrumented research program. The agents issued 2,400 shell commands, wrote hundreds of small programs in the Python language, ran numerical checks, searched for counterexamples, reviewed one another’s work, and downloaded 54 papers from arXiv, the public repository for scholarly preprints, to investigate whether the result was already known.

The reported 31 million output tokens describe generated material, not a complete bill. Anthropic published no dollar cost, total input-token count, energy figure, or controlled comparison showing that the number of agents or failed ideas caused the outcome.

Those limits sharpen the economic point. A person has finite attention and must absorb fatigue as well as the social cost of repeated failure. A model run feels neither embarrassment nor career risk. Anthropic did not measure those human pressures, so this is an interpretation of the comparison rather than an experimental finding. What the case demonstrates directly is that an organization can authorize and meter more machine attempts.

My Three Crucibles framing treats a growing share of productivity as capital: compute, tools, and review capacity can purchase another pass through a problem. Here that idea becomes concrete, but it also reveals a constraint. Once endurance can be funded, the scarce judgment is whether the next attempt is still worth funding.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>The 31-million-token run turned repeated search into an allocatable resource, but not a free or self-justifying one. Its value came from a structured process that combined retries with tools, prior research, and verification.</p></div>

## Meanwhile in sci-fi

<div class="scifi">
<span class="scifi__label">Meanwhile in sci-fi</span>
<p class="scifi__film">Edge of Tomorrow (2014)</p>
<p>Director Doug Liman’s science-fiction film follows Major William Cage as he relives the same deadly battle, carrying information from each failure into the next attempt. The mapping to persistent AI search is narrow: repetition becomes useful when failures change the next move and a clear success condition tells the system when the work is done.</p>
</div>

## Write the limit into the brief

Mathematics is a favorable setting for persistent search because a theorem can be stated precisely and its proof can be attacked from several directions. Strategy, product design, and hiring rarely offer such clean tests. Without an external standard, an agent system can produce a growing pile of internally consistent material that makes the original hunch look stronger without making it truer.

Evidence from ordinary work reinforces that caution. A [2023 National Bureau of Economic Research working paper](https://www.nber.org/papers/w31161) studied 5,179 customer-support agents and found that access to a conversational assistant increased issues resolved per hour by 14% on average. In a different setting, [METR, an independent organization that measures AI capabilities and effects, reported in 2025](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/) that 16 experienced open-source developers took 19% longer on 246 real tasks when allowed to use early-2025 AI tools. METR now describes that technology snapshot as outdated. These studies cannot be combined into one universal AI productivity score; they show why activity and confidence are poor substitutes for measured outcomes.

Leaders therefore need three decisions in writing before provisioning persistent agents.

**Is this question worth repeated search?** Name the decision, theorem, design, or experiment at stake, then identify an observable acceptance test and an upside large enough to justify the search. “Find something useful about this market” is not a bounded assignment.

**What evidence can end disagreement?** Specify success, disconfirmation, and novelty, then require a verifier with a different failure mode. Depending on the work, that could be a domain expert, held-back data, a controlled test, an independent method, or a formal proof. Reviewer time belongs in the budget because generated claims have no economic value until someone can trust them.

**What makes the organization stop?** A stopping rule is a condition agreed in advance for pausing or ending the search. Set an initial allowance for tokens, elapsed time, tool permissions, and human review, then release more only when the system produces a new testable hypothesis or improves a validated measure. Repeated failure without a new explanation, failed independent replication, or a better use for the next tranche should end the round. Archive the rejected paths so that stopping still leaves an auditable asset.

This does not reduce people to administrators of machine effort. Humans still contribute technical ideas, context, interpretation, relationships, and accountability. Yet a tireless system can always generate another plausible reason to continue. Leadership is the accountable act of deciding whether that reason earns another tranche of money, time, and human attention.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Persistent agents need a precommitted search brief: a worthwhile question, an observable success test, independent verification, a staged budget, and explicit reasons to stop. The leadership advantage lies in funding the next attempt selectively, not in keeping every loop alive.</p></div>
