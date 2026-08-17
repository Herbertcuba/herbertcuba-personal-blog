---
title: "Tireless intelligence needs a stopping rule"
description: "Claude’s 650 unsuccessful ideas show that persistent search can now be funded, measured, and governed as an organizational input."
date: 2026-08-17
tldr: "Anthropic’s reported Riemann-zeta result shows that persistent AI search can be funded as a metered input, but the case worked because the target had unusually strong proof and review gates. Leaders should choose the question, define independent evidence, fund retries in stages, and write stopping conditions before a tireless system begins."
permalink: /drafts/b90f4cfe/
layout: post.njk
---

There is a capital-allocation decision hiding inside Anthropic’s latest mathematics result. In August 2026, the AI company [reported](https://www.anthropic.com/research/riemann-zeta) that an unreleased research version of Claude, its AI system, generated 650 unsuccessful ideas before a more coordinated search produced a new lower-bound result. Across two sessions in Claude Code, Anthropic’s tool-using environment for coding agents, the system generated 31 million output tokens, units of model-produced text used to meter computing work. The later search involved about 60 subagents, meaning delegated AI runs that used tools to work on parts of the problem.

The result matters, but its boundary matters too. Claude did not prove the Riemann hypothesis, German mathematician Bernhard Riemann’s still-unproved 1859 claim about where certain zeros of the Riemann zeta function lie. The zeta function is a mathematical object closely tied to the distribution of prime numbers. Its relevant zeros are points where the function equals zero, and the hypothesis says all of them sit on a specific line called the critical line. Claude’s result instead raised a lower bound, the minimum share proven to sit there, from 5/12 to at least 2/3.

I think the deeper shift is economic. Sustained search can now be provisioned like other productive capacity, which moves the leadership problem upstream. Before buying the retries, someone must decide whether the question deserves them, what evidence can settle it, and what will end the campaign.

<div class="chapter-tldr">
  <span class="chapter-tldr__label">In short</span>
  <p>Claude did not settle the Riemann hypothesis. The case shows that organizations can meter and allocate persistent search, making question choice, proof standards, and stopping rules more important.</p>
</div>

## What 31 million output tokens made possible

The 650 failures were useful because they happened inside a mature field with a narrow obstacle, not because a large pile of failure automatically becomes insight. Number theorist J. B. Conrey’s [peer-reviewed 1989 paper](https://doi.org/10.1515/crll.1989.399.1) proved that more than two fifths of the relevant zeros lie on the critical line. Later human work pushed the bound to 5/12, where it had stood since 2020. The popular “37-year record” framing therefore describes the arc from Conrey’s work to 2026, not 37 years without progress.

Anthropic’s [technical preprint](https://www-cdn.anthropic.com/564f962e60643842f5fcb4a17c9dbc8f608f1c37.pdf), a paper released before journal review, says the proof used earlier analytic results and added a new way of reading them through linear algebra, a branch of mathematics used to express relationships among many quantities. During the search, agents ran numerical checks, looked for counterexamples, wrote hundreds of scripts in Python, a general-purpose programming language, and downloaded 54 papers from arXiv, a public repository for scholarly preprints, to check whether the idea was already known. The mechanism was parallel search joined to feedback and review.

This remains one unusual case rather than a controlled test of agent persistence. Anthropic did not show whether fewer tokens, different prompts, or fewer subagents would have reached the same result. The evidence supports a narrower conclusion: large, instrumented search can surface a checkable discovery, not that more retries reliably produce one.

Humans can tire, become attached to a favored path, or avoid a visible trail of failure because careers are social. Anthropic did not measure those effects, so this case cannot price fatigue, shame, or career risk. An organization can nevertheless replace part of the endurance constraint with metered machine output. An output token is not a unit of thought, and Anthropic published no dollar cost, but the meter makes persistence allocatable. That is one practical sense in which productivity starts to behave like capital.

<div class="chapter-tldr">
  <span class="chapter-tldr__label">In short</span>
  <p>The result combined decades of human mathematics, a conceptual move, large-scale search, and repeated checks. The economic change is that search endurance can be allocated, even though its return is neither automatic nor publicly priced.</p>
</div>

## Mathematics supplied the evidence gate

This was an unusually favorable setting for persistent agents because a mathematical claim can be stated precisely and checked. Anthropic released the preprint, says internal mathematicians validated it, and says two outside specialists examined it on short notice. It also published a [Lean 4 formalization](https://github.com/anthropics/zeta-23-lean). Lean 4 is a proof-assistant language; formal verification means the software checks a precisely encoded theorem and its logical dependencies. That is a serious evidence layer, although it does not independently establish novelty, importance, or conventional journal peer review.

Most enterprise questions offer no equivalent of the critical line. A 2023 [working paper from the National Bureau of Economic Research](https://www.nber.org/papers/w31161), a U.S. economics research organization, covered 5,179 customer-support agents and found that access to an AI assistant raised issues resolved per hour by 14% on average. In a different setting, a 2025 [randomized study by the independent research group METR](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/) found that 16 experienced developers working on large, publicly shared software projects took 19% longer on measured tasks when allowed to use early-2025 AI tools, even though they believed the tools had made them faster. The studies cover different work, people, dates, and tool versions, so they should not be collapsed into one universal productivity score.

Their shared warning is more useful: activity and confidence are weak substitutes for validated value. A tireless system can test a theorem, but it can also spend weeks polishing a strategy that rests on a circular assumption. If leaders cannot describe what would show the hunch to be wrong, more attempts may manufacture conviction rather than knowledge.

<div class="chapter-tldr">
  <span class="chapter-tldr__label">In short</span>
  <p>Mathematics offered Claude a precise claim and several ways to check it. Business problems are usually less observable, so agent activity must be judged against predeclared evidence rather than output volume or confidence.</p>
</div>

## Meanwhile in sci-fi

<div class="scifi">
  <span class="scifi__label">Meanwhile in sci-fi</span>
  <p class="scifi__film">Edge of Tomorrow (2014)</p>
  <p>The 2014 film follows a soldier forced to repeat the same deadly day, using feedback from each repetition to change the next one and eventually escape. The mapping is precise: an agent swarm supplies the retries, an evidence contract supplies the feedback, and a stopping rule defines whether another loop is still learning. Repetition alone would leave the character trapped.</p>
</div>

## Authorize the search and its end

A useful response is a Tireless Intelligence Charter, a short agreement written before a persistent AI campaign begins. It starts with a decision-shaped question and a named owner. “Find something useful about this market” is too loose; the brief should state what result could change a decision and why that result would justify the search and review costs.

The charter then defines an evidence contract. It states what will count as success, what would show the claim to be wrong, and what would qualify as a genuinely new result. It also names who or what will verify the answer. For consequential work, the verifier should fail differently from the system doing the search: a domain expert, a controlled experiment, data kept out of the search and used only for testing, an independent method, or a formal proof where one is possible.

Funding should arrive in stages, with limits on output tokens, elapsed time, tool permissions, and reviewer hours. Another stage earns funding only when the campaign produces a new testable hypothesis, improves a validated measure, or clears an agreed evidence gate. The work pauses when the same failure repeats without a new idea, independent review cannot reproduce the claim, or the likely value of another batch falls below that of the next question in the portfolio.

Stopping does not have to waste the search. Failed hypotheses, tests, rejected paths, and source records can be archived so another team or agent does not pay to rediscover them. This turns persistence into institutional memory rather than an endless expense.

None of this reduces people to budget keepers. Humans still contribute technical ideas, context, interpretation, relationships, and accountability. Yet once retries can continue beyond human endurance, continuation no longer proves conviction; it proves that budget and permission remain. Leadership means taking responsibility for granting both, and for withdrawing them when the next attempt no longer deserves the organization’s capacity to think.

<div class="chapter-tldr">
  <span class="chapter-tldr__label">In short</span>
  <p>Persistent AI work needs a charter that names the decision, evidence, verifier, staged budget, and stop conditions in advance. Leadership owns both sides of the allocation: which questions receive tireless effort and when that effort must end.</p>
</div>
