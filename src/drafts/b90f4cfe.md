---
title: "Tireless intelligence needs a stopping rule"
description: "Claude's mathematical search shows what changes when persistence becomes a budget, and why leaders must decide what deserves another attempt."
tldr: "Claude's new result on the Riemann zeta function did not come from persistence alone, but Anthropic's reported 650 failed ideas, 60 subagents, and 31 million output tokens show that large, instrumented searches can now be funded as a metered input. The leadership challenge is to choose worthy questions, define evidence before launch, and stop tireless systems when another attempt no longer earns its cost."
permalink: /drafts/b90f4cfe/
layout: post.njk
---

Anthropic, the AI company behind Claude, [reports](https://www.anthropic.com/research/riemann-zeta) that an unreleased research version of its system generated and tried 650 ideas that did not work. Across two sessions in Claude Code, Anthropic's tool-using agent environment, the effort consumed 31 million output tokens and involved about 60 subagents. It eventually produced a serious new mathematical result.

Claude did not prove the Riemann hypothesis. That famous conjecture, introduced through German mathematician Bernhard Riemann's 1859 work, says that all the relevant zeros of the Riemann zeta function lie on a specific critical line. The zeta function is a mathematical object whose zeros reveal deep patterns in the distribution of prime numbers. Claude's paper instead raises the proven minimum share of those zeros on the line from 5/12 to at least 2/3, with an optimized bound of 0.6725.

I think the seductive version of this story, that a machine beat mathematicians through stamina alone, misses the mechanism. The proof used decades of human mathematics, a new conceptual reading of earlier work, computation, and several layers of checking. What changed is that a large search became something an organization could allocate and meter. Once persistence becomes a budget, leadership has to decide which questions deserve it and when the spending must end.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Claude did not solve the Riemann hypothesis or win through brute force alone. The important shift is that organizations can now buy a large, instrumented search, which makes question selection and stopping rules more valuable.</p></div>

## What the 650 failures actually bought

An output token is a unit of model-generated text used to meter AI inference; 31 million output tokens are a measure of volume, not a public invoice. A subagent is a delegated AI process working on a narrower task with tools, rather than an autonomous employee. Anthropic says the group issued 2,400 shell commands, wrote hundreds of Python scripts, ran numerical checks, searched for counterexamples, and downloaded 54 papers from arXiv, a public research-preprint repository, to look for prior work.

I don't know whether the same result would have appeared with half the agents or a tenth of the tokens. Anthropic published no controlled comparison and no dollar cost, so the case cannot show that attempt 651 caused the breakthrough or that this search model has a reliable return. It shows something narrower and still important: sustained, coordinated exploration can now be provisioned like computing capacity.

The historical record also needs care. Number theorist J. B. Conrey proved in 1989 that more than two fifths of the zeros lie on the critical line, but human researchers kept improving the bound, which reached 5/12 in 2020. The [new preprint](https://www-cdn.anthropic.com/564f962e60643842f5fcb4a17c9dbc8f608f1c37.pdf) says its distinctive step was a linear-algebraic reading of an existing result about how zeta zeros are spaced. This was a new move on a human-built research frontier, not 37 years of mathematics replaced by a day of guessing.

The evidence gates mattered as much as the retries. Anthropic reports numerical tests, counterexample searches, review by its own mathematicians, and examination by two outside specialists on short notice. It also released a [Lean 4 formalization](https://github.com/anthropics/zeta-23-lean): a precisely encoded version that a proof-assistant program can check under declared logical assumptions. That improves auditability, but it does not establish novelty or replace normal journal peer review.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>The search budget bought many paths, tools, and checks, but the public evidence does not isolate which input caused success or reveal its financial return. Its value came from combining scalable exploration with a precise theorem and multiple verification layers.</p></div>

## Tirelessness can manufacture waste

Mathematics is unusually friendly to this model because a theorem can be stated precisely and a proof can be checked. Most business questions arrive in a softer form: improve the product, find a market, make the organization faster. Without an observable success test, a tireless agent can keep producing polished reasons to continue until activity starts impersonating evidence.

Research on workplace AI gives us reason to be cautious. A [2023 National Bureau of Economic Research working paper](https://www.nber.org/papers/w31161) found that an AI assistant raised issues resolved per hour by 14% across 5,179 customer-support workers, with much larger gains for novices. In a different setting, a [2025 randomized study by METR](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/), an independent organization that measures AI performance, found that experienced open-source developers took 19% longer on the measured tasks when allowed to use early-2025 AI tools. The studies concern different people, tools, and work, so they do not cancel each other out. They show why output and confidence cannot stand in for measured value.

The zeta case did not measure fatigue, shame, or career risk. Those are interpretations of why a person may abandon a failing line of inquiry, not findings from Anthropic's research. Yet the economic change is visible: retries that once competed directly with scarce human attention can increasingly be purchased as compute. I think this is what it means to say productivity is becoming capital. Capacity can be provisioned, but someone still has to allocate it.

That reversal matters because tirelessness is also a liability. I think a weak hunch attached to an endless agent loop can become an expensive, self-confirming campaign. A system that never gets bored still needs a leader willing to say that another polished failure is not progress.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Mathematical proofs offer unusually clear tests, while enterprise questions often do not. As retries move from human attention into compute budgets, leaders must measure validated outcomes or risk funding activity that manufactures its own justification.</p></div>

## Leadership starts before the first attempt

My take is that every persistent-agent campaign needs a charter written before the agents begin. First, name a bounded question whose answer can change a decision, and state what success, disconfirmation, and novelty would look like. “Find something useful” is not a research brief. It is permission to keep spending.

Next, choose an independent verifier with a different failure mode. A formal proof assistant worked for this theorem; a product claim may need a controlled test, external data, or a domain expert who did not help generate the answer. I think verification must be designed with the task because a second agent using the same sources and assumptions may only repeat the first agent's confidence.

Then fund the search in stages. Set limits for tokens or trajectories, elapsed time, tool permissions, and human review, and release the next budget only when the campaign produces a new falsifiable hypothesis or clears an evidence gate. Measure cost per validated outcome, including reviewer time and failed replication, rather than celebrating the number of messages or agents.

Finally, write the stopping rule. Pause when the same failure repeats without a new hypothesis, independent review cannot reproduce the result, or another project has a better expected return on the next batch of effort. Archive rejected paths with their tests and sources, because a well-recorded failure can prevent the next system from paying to rediscover it.

The [U.S. National Institute of Standards and Technology's 2023 AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework) offers useful verbs for this discipline: govern, map, measure, and manage. In plain terms, leaders set authority, identify risks, test evidence, and change or stop the work as results arrive. I think that loop is more important than any promise to “keep going.”

In Doug Liman's 2014 science-fiction film *Edge of Tomorrow*, a soldier repeats the same fatal battle and uses each death as feedback. Tireless AI can fund the repetitions, but only people can remain accountable for deciding which battle is worth repeating, what would count as escape, and when the loop has stopped learning. As attempts become abundant, leadership is the judgment to deny the next one.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>A persistent-agent campaign needs a bounded question, an evidence contract, staged funding, an independent verifier, and a stopping rule written in advance. The machine can supply another attempt; leaders remain accountable for deciding whether it deserves one.</p></div>
