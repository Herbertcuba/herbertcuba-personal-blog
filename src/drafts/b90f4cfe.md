---
title: "Tireless intelligence needs a stopping rule"
tldr: "Anthropic's zeta result does not show that brute force replaced mathematical insight. It shows that bounded, tool-using persistence can now be provisioned like capital. Leaders should fund such searches only around worthy questions, independent evidence, staged budgets, and stopping rules, because a tireless system can industrialize waste as easily as discovery."
permalink: /drafts/b90f4cfe/
layout: post.njk
---

Anthropic, the AI company behind Claude, says an unreleased research version of its system tried 650 unsuccessful ideas before producing a new mathematical result. Across two sessions in Claude Code, Anthropic's coding-agent environment, the project used 31 million output tokens and roughly 60 subagents. An output token is a metered unit of model-generated text; a subagent here was a delegated Claude run using tools on part of the problem, not a digital employee.

Calling this a victory of stamina over genius is too clean. I think the strategic importance lies elsewhere: persistence became allocatable, but it only mattered because the search drew on decades of mathematics, pursued a testable claim, and passed several checks. The leadership question is which problems deserve that persistence, what will count as evidence, and who can stop the system.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Claude's result makes large-scale persistence a budget choice. Its value came from combining that capacity with prior human work, a testable question, and verification.</p></div>

## What changed was the search budget

The [Riemann zeta function](https://www.anthropic.com/research/riemann-zeta) is a mathematical function whose zeros encode deep patterns in the distribution of prime numbers. In 1859, German mathematician Bernhard Riemann proposed that all its important, nontrivial zeros sit on a location called the critical line. The Riemann hypothesis remains unproved.

Claude's [2026 preprint](https://www-cdn.anthropic.com/564f962e60643842f5fcb4a17c9dbc8f608f1c37.pdf) established something narrower: an unconditional lower bound, meaning a proven minimum that does not assume the hypothesis, showing that at least two thirds of those zeros lie on the line. The previous record was 5/12, so the basic theorem moves the bound by 25 percentage points. Number theorist J. B. Conrey had proved more than two fifths in 1989, but later human work improved the figure, and the preprint says the 5/12 record had stood since 2020. The popular 37-year framing marks the span since Conrey's paper, not 37 years without progress.

The proof also builds on [peer-reviewed work published by human mathematicians in 2024](https://arxiv.org/abs/2306.04799), then adds a new linear-algebraic reading by reframing an existing mathematical sum as a linear-algebra problem. This was a conceptual move on an active research frontier, not a random walk across an empty field.

Scale still mattered. Anthropic reports 2,400 shell commands, hundreds of Python scripts, numerical checks, counterexample searches, and 54 research papers examined for prior work. It also released a [formalization in Lean 4](https://github.com/anthropics/zeta-23-lean), a theorem-proving language that lets software check a precisely encoded proof and its declared assumptions. Anthropic says internal mathematicians validated the paper and two outside specialists examined it on short notice. That is meaningful scrutiny, although the work remains a lab preprint rather than a conventionally peer-reviewed journal result.

I think this is a concrete case of what I call the Three Crucibles: productivity increasingly becomes capital. Here that means an organization can provision retries, parallel searches, tools, and review instead of relying on one person's endurance. Yet Anthropic published no dollar cost and no controlled test showing that the number of agents or tokens caused the result. The case establishes purchasable search capacity, not a reliable return on every search.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>The result moved a proven minimum from 5/12 to at least two thirds while leaving the Riemann hypothesis unsolved. Human mathematics, a conceptual step, scaled search, and several validation layers all belong in the story.</p></div>

## Tirelessness can become a liability

For a human researcher, 650 dead ends consume attention and may carry fatigue, shame, or career risk. The Claude project did not measure those pressures, so the comparison is an economic metaphor rather than a psychological finding. Compute can absorb some limits on human persistence, but most business problems lack a theorem's stable test. A strategy or product hunch can instead send tireless agents through the same weak assumption until repetition looks like evidence.

Measured productivity already varies by setting. A [2023 National Bureau of Economic Research working paper](https://www.nber.org/papers/w31161) covering 5,179 customer-support agents found 14% more issues resolved per hour on average with an AI assistant, including a 34% gain for novice and lower-skilled workers. In contrast, [independent research group METR reported in 2025](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/) that 16 experienced open-source developers took 19% longer on 246 real software issues with early-2025 AI tools, despite believing they had worked faster. These different studies do not yield one universal productivity number. They show why output and confidence cannot substitute for validated value.

Doug Liman's 2014 science-fiction film *Edge of Tomorrow* follows a soldier trapped in a lethal time loop. Repetition helps because each loop supplies feedback and there is a clear condition for escape. An enterprise agent can repeat the day forever while learning nothing if no independent test reveals whether the world changed. My take is that tirelessness earns its place as intelligence only when failure can disconfirm a path.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Metered persistence removes some human limits, but ambiguous business problems can turn it into polished repetition. Independent tests must separate learning from activity before leaders pay for another loop.</p></div>

## Leadership has to own the stop

I think every persistent agent campaign should begin with a Tireless Intelligence Charter, written before the first retry. This is an operating agreement for the question, evidence, delegated authority, budget, and stopping conditions. It is my recommendation, not a description of Anthropic's process.

Start with a bounded question whose upside justifies the search and whose answer can be observed. Then define what would count as success, what would disconfirm the approach, how novelty will be checked, and which independent verifier has a different failure mode from the agent. Fund the work in stages across tokens, elapsed time, tool permissions, and reviewer hours. Release the next stage only when the system produces a better falsifiable hypothesis or a validated improvement.

The charter should measure cost per accepted result, including false positives, replication effort, reviewer time, and the opportunity cost of ignoring another problem. Its stopping rule should pause the campaign when the same failure recurs without a new hypothesis, independent review cannot reproduce the claim, or the system seeks more authority than originally granted. Archive failed paths with their tests and sources so that stopping leaves an auditable asset. This approach echoes the voluntary [AI Risk Management Framework released in 2023](https://www.nist.gov/itl/ai-risk-management-framework) by the U.S. National Institute of Standards and Technology, which asks organizations to govern, map, measure, and manage risk throughout an AI system's life.

I don't know where the optimal stopping line sits for every campaign. I think that uncertainty makes precommitment more important, because a persuasive system can always produce one more reason to continue. Humans still supply ideas, domain knowledge, interpretation, relationships, and accountability. But when persistence can be purchased, leadership must decide which day deserves another loop and which one has taught us enough.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Leaders should predefine the question, evidence, authority, staged budget, independent checks, and stopping conditions, then judge the campaign by validated outcomes. When persistence becomes capital, disciplined refusal becomes part of intelligent allocation.</p></div>
