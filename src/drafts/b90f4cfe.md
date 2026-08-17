---
title: "Tireless intelligence needs a stopping rule"
tldr: "Claude’s new Riemann-zeta bound shows that organizations can now buy large amounts of persistent, instrumented search. The leadership advantage will come from choosing questions with observable answers, defining independent evidence, and setting exit conditions before another attempt is authorized."
permalink: /drafts/b90f4cfe/
layout: post.njk
date: 2026-08-17
---

Claude, the AI system built by Anthropic, has made persistence a capital-allocation question. In August 2026, the company [reported](https://www.anthropic.com/research/riemann-zeta) that an unreleased research version of Claude had tried 650 ideas that initially failed. Across the wider effort, it generated 31 million output tokens, units of model-produced text used for metering, and coordinated roughly 60 subagents, delegated AI processes working on parts of the problem.

The run produced a new result in number theory, but it did not prove the Riemann hypothesis, and the process was not one flash of machine genius. It was a large search built on decades of human mathematics, supported by software tools and followed by several layers of checking. The economic signal is narrower and, I think, more useful: persistence can now be provisioned as a metered input.

This changes the leadership question. The scarce judgment moves toward deciding which problems deserve repeated search, what evidence would justify belief, and when another run should lose its funding. Tirelessness without those decisions can turn any hunch into an expensive campaign.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>Claude’s result makes sustained search easier to fund, but it does not make thought free or success automatic. As persistence becomes a budget item, question choice, evidence, and termination become more important.</p>
</div>

## What the 31 million tokens bought

The Riemann zeta function is a mathematical object that carries deep information about how prime numbers are distributed. The Riemann hypothesis, introduced through German mathematician Bernhard Riemann’s 1859 work, says that all of the function’s relevant, or “nontrivial,” zeros lie on a particular critical line. That famous claim remains unproved.

The Claude paper established something more limited: an unconditional lower bound, meaning a proven minimum share that does not rely on the Riemann hypothesis being true. Its [preprint](https://www-cdn.anthropic.com/564f962e60643842f5fcb4a17c9dbc8f608f1c37.pdf) moves that minimum from 5/12 to at least 2/3, a gain of 25 percentage points, and reports an optimized figure of 0.6725. The popular “37-year record” description counts from number theorist J. B. Conrey’s [1989 peer-reviewed paper](https://doi.org/10.1515/crll.1989.399.1), which proved more than two fifths. Other mathematicians advanced the bound after that, and the previous 5/12 record had stood since 2020.

So what did the scale of the Claude run add? Anthropic describes two sessions in Claude Code, its environment for agents that can work with files, scripts, and command-line tools. Around 60 subagents issued 2,400 commands, wrote hundreds of analysis scripts, ran numerical checks, searched for counterexamples, and downloaded 54 papers from the arXiv preprint repository to investigate whether the result was already known.

The successful proof also depended on previous mathematics, including a [peer-reviewed 2024 result](https://arxiv.org/abs/2306.04799) that removed an unproved assumption from an important technique. Claude’s paper says its new ingredient was to reinterpret that earlier work with linear algebra, the branch of mathematics that studies systems of quantities and transformations between them. Persistence widened the search, but inherited knowledge and a conceptual step still carried the result.

Verification completed the mechanism. Anthropic says its own mathematicians studied the paper and two outside specialists examined it on short notice. A [public companion artifact](https://github.com/anthropics/zeta-23-lean) uses Lean 4, a theorem-proving programming language, to check precisely encoded versions of the paper’s main theorems against declared logical rules. This formal verification makes the proof more inspectable; it does not turn a lab preprint into completed journal peer review or settle its significance for the mathematical community.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>The result came from a bounded system of prior mathematics, many machine-led trials, tool use, a new conceptual reading, and formal and human checks. The 31 million output tokens bought search capacity, not certainty.</p>
</div>

## Persistence becomes capital only when it produces evidence

For a person, hundreds of failed paths consume time and attention, and they can also bring fatigue or reputational pressure. The Claude case did not measure those human costs. It demonstrates the narrower point that an organization can allocate many more machine attempts without asking one researcher to absorb every burden personally.

This is one expression of what I call the Three Crucibles: productive capacity increasingly behaves like capital because it can be provisioned, directed, and withdrawn. Because output tokens meter generated text, the reported 31 million makes the allocated capacity visible. Anthropic did not publish the run’s dollar cost, hardware use, or full opportunity cost, which means token volume cannot stand in for economic return.

Evidence from ordinary work makes that distinction important. A [2023 working paper](https://www.nber.org/papers/w31161) from the National Bureau of Economic Research, a U.S. economics research organization, followed 5,179 customer-support agents and found that access to an AI assistant raised issues resolved per hour by 14 percent on average. In a different setting, a [2025 randomized study](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/) by the independent AI-evaluation group METR found that 16 experienced open-source developers took 19 percent longer on 246 tasks when allowed to use early-2025 AI tools, even though they believed they had become faster. METR now treats that result as a historical snapshot rather than a forecast for newer systems, but its warning survives: activity and confidence are weak substitutes for measurement.

Mathematics gave Claude an unusually favorable search environment. A theorem can be stated precisely, candidate proofs can be attacked, numerical implications can be tested, and formal software can check the final argument. Strategy, product direction, and organizational design rarely come with such clean acceptance tests. Without an evidence contract, a prewritten statement of what counts as success, disproof, and independent confirmation, a tireless agent can keep generating polished reasons to preserve the premise it was meant to examine.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>Metered persistence becomes productive capital only when rejected attempts improve a search that ends in independently checkable evidence. Output volume, perceived speed, and repeated confidence are not measures of value.</p>
</div>

## Put the stop decision in the launch brief

A persistent agent campaign needs a precommitment document before it needs more compute. I would call it a Tireless Intelligence Charter. It turns “keep trying” from an impulse into a governed investment.

**Question and upside.** The charter should name a decision, theorem, design, or experiment whose value can justify the search. A brief such as “find something useful about this market” has no observable finish line, so the system can produce indefinitely without getting closer to an answer.

**Evidence.** Success, disconfirmation, and novelty need definitions before the first result appears. High-stakes claims also need a verifier with a different failure mode, such as a domain expert, controlled test, independent data source, or formal proof assistant. The verifier’s job is not to reward effort; it is to decide whether the claim survived contact with something outside the search loop.

**Budget and authority.** Funding should arrive in stages across output tokens, elapsed time, tool permissions, and human review. A new stage should depend on evidence that the search is producing better testable hypotheses or improving a measure agreed in advance. This follows the logic of the U.S. National Institute of Standards and Technology’s voluntary [AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework), released in 2023: govern the work, map its risks, measure its behavior, and manage what happens next.

**Exit and memory.** The run should pause when the same failure recurs without a new hypothesis, independent review cannot reproduce the claim, the required authority exceeds the charter, or another candidate project offers more likely value. Failed paths should still be archived with their tests and sources. That record keeps a later system from spending again to rediscover the same dead ends.

People are not reduced to approving budgets in this model. They can contribute technical ideas, domain knowledge, interpretation, and ethical judgment throughout the work. But the responsibility that cannot be delegated is the decision to continue after the evidence has stopped improving.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>Leaders should authorize tireless search through a prewritten charter that defines the worthy question, independent evidence, staged resources, delegated authority, and exit conditions. The metric is cost per validated outcome, not attempts completed.</p>
</div>

## Meanwhile in sci-fi

<div class="scifi">
<span class="scifi__label">Meanwhile in sci-fi</span>
<p class="scifi__film">Edge of Tomorrow (2014)</p>
<p>Doug Liman’s science-fiction film follows Major William Cage, a soldier forced to relive the same fatal battle while carrying what he learns from one loop into the next.</p>
</div>

The mapping is precise: an agent campaign supplies repeated attempts, but repetition has value only when each failure changes the next test and there is a recognizable condition for escape. Once another loop becomes easy to buy, responsibility concentrates in the leader who decides whether it is still learning.