---
title: "Tireless intelligence needs a doubt budget"
tldr: "Anthropic’s Claude result suggests that organizations can now buy far more attempts at a hard problem, but output volume is not the same as economic value. Leaders must choose questions that justify persistent search, fund independent verification alongside it, and make continuation conditional on evidence before the first agent starts."
permalink: /drafts/b90f4cfe/
layout: post.njk
date: 2026-08-18
---

Suppose an AI research campaign has failed 650 times. Would you approve another batch? That decision, more than the eventual headline, is what makes Anthropic’s August 2026 mathematics experiment important for leaders.

[Anthropic](https://www.anthropic.com/research/riemann-zeta), the AI company behind Claude, reports that an unreleased research version produced a new result after 650 unsuccessful ideas. The work used two sessions in Claude Code, Anthropic’s tool-using coding environment, 31 million output tokens and roughly 60 subagents over about a day and a half. An output token is a unit of AI-generated text used to meter model activity; a subagent is a delegated AI run assigned to a narrower part of the work.

The company has not published a complete invoice, a standard definition of one “idea,” or a controlled comparison showing which input caused the result. So this is not evidence that persistence always pays. It is evidence that a scale of repeated search once constrained by individual endurance can now be bought and organized. I think that gives leadership a new obligation: every budget for producing answers also needs a budget for doubting them.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>Claude’s reported activity counts show that repeated search has become a resource organizations can assign, not that 31 million tokens have a known return. The leadership question is whether another batch deserves both the search capacity and the independent scrutiny it will consume.</p>
</div>

## The result earns attention, with conditions

The Riemann zeta function is a mathematical function whose zeros, the inputs where its value becomes zero, reveal deep patterns in the distribution of prime numbers. The important group here is called *nontrivial* because it excludes a known, simpler family of zeros. In 1859, German mathematician Bernhard Riemann proposed that all nontrivial zeros lie on the *critical line*, where the real part of the input equals one half. That claim, now called the Riemann hypothesis, remains unproved.

Claude did not prove it. The [lab-released preprint](https://www-cdn.anthropic.com/564f962e60643842f5fcb4a17c9dbc8f608f1c37.pdf) gives a new *lower bound*, meaning a proven minimum share of those zeros on the critical line. It raises the previous bound from 5/12 to at least two thirds, an exact increase of 25 percentage points, and reports an optimized value of 0.6725. The 5/12 record had stood since 2020. The popular “37-year” frame reaches back to number theorist J. B. Conrey’s 1989 result above two fifths, but mathematicians improved the bound between those dates.

This was also more than blind repetition. The proof used results from a [2024 peer-reviewed paper](https://arxiv.org/abs/2306.04799) by four number theorists and added a new reading of that work through linear algebra, the mathematics of vectors and matrices. Anthropic says its own mathematicians studied the paper and two outside specialists examined it on short notice. A public [Lean 4 artifact](https://github.com/anthropics/zeta-23-lean) adds formal verification: Lean 4 is a proof-assistant language that checks a precisely encoded statement and each logical step. That improves auditability, but it does not turn a fresh preprint into completed journal review or independent replication.

The search process itself cannot be reproduced from the public record because the model and full run configuration remain unreleased. A decision memo relying on this case should therefore record the exact paper and Lean artifact revision it reviewed. Independent replication or journal review would strengthen its evidence status; a material correction to the proof or artifact should lower it.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>The mathematical advance is specific, substantial and still provisional. It rests on earlier human research, a new conceptual step, extensive search and several layers of checking, so neither “brute force” nor “machine genius” explains the result on its own.</p>
</div>

## Thinking now has two ledgers

The first ledger records search. Anthropic reports failed proof routes, scripts, numerical tests, counterexample searches and reviews among subagents. These activities make persistence visible and fundable, although their token and command counts do not reveal the project’s total cost or prove that scale caused the breakthrough.

The second ledger records judgment: the work required a statement precise enough to test, software checks, formalization and scarce expert attention. As AI-generated candidate ideas become faster to produce, that second ledger can dominate. A system may create hypotheses and requests for one more round much faster than qualified reviewers can decide whether any of them deserve belief.

That is why the useful economic measure is full cost per independently accepted result. It includes model and tool use, human direction, reviewer time, replication and the value of work displaced by the campaign. Tokens alone measure activity.

The Claude case is unusually favorable because a theorem can be stated exactly and a proof can be checked line by line. A strategy, hiring decision or product bet rarely offers that clarity. For people, repeated failure can also consume time, confidence and professional standing. The experiment did not measure fatigue, shame or career risk, so saying that compute replaced them is an interpretation, not a finding. What organizations can clearly do is purchase more retries without requiring one person to carry every failed route.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>Persistent AI search creates two costs: generating candidates and determining which candidates are true or useful. The second becomes the constraint, especially when the problem lacks mathematics’ unusually clear acceptance tests.</p>
</div>

## Questions must compete before agents do

A persistent search should not receive its first batch merely because the question is interesting. It should pass a compact admission test: the answer must affect a material decision; a baseline and a result that could disprove the hunch must be stated; an independent reviewer must have capacity; and the expected value must beat the best alternative use of the same money and attention. A named sponsor must also accept responsibility for the question, not just for launching the system.

Approval should then describe a finite mandate. It needs an expiry, a maximum spend, reserved reviewer hours, allowed tools and data, and a rule for what new evidence would justify renewal. Where sensitive enterprise data is involved, the same mandate should specify classification, residency, retention, supplier exit and who has authority to stop access. If the resulting decision affects people, it also needs an appeal route and representation for those affected.

A stopping rule only matters if software enforces it. Before any new subagent or tool run, the software assigning work should read the current approval from the central record rather than trust an older copy. If that approval has expired or the delivery team has renewed it without authority, the next run is denied. The mandate should also cap simultaneous work, say whether a stop cancels or finishes work already running, and specify when temporary credentials are withdrawn.

Renewal belongs in an existing portfolio forum with business, evidence, risk and procurement decision rights, rather than in a new committee built around AI enthusiasm. That forum should track independently accepted outcomes, full cost, reviewer waiting time, renewals granted without new evidence and stops later judged premature. The last measure matters because governance can become timid as easily as it can become permissive.

These controls are familiar: staged funding, written success criteria, access limits and circuit breakers have long existed in engineering and investment work. The change is that AI-generated candidates and arguments for continuing can arrive faster than human verification. Human contribution does not shrink to policing machines, but the system running the search should never decide that its own persistence remains worthwhile. Leadership owns that boundary.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>Fund persistent AI work only when the question beats its portfolio alternatives, can be disproved and has an available independent reviewer. Put renewal and stopping power outside the delivery team, enforce expiry in the system, and measure accepted outcomes rather than attempts.</p>
</div>

## Meanwhile in sci-fi

<div class="scifi">
<span class="scifi__label">Meanwhile in sci-fi</span>
<p class="scifi__film">Edge of Tomorrow (2014)</p>
<p>Director Doug Liman’s science-fiction film follows a soldier who repeats the same battle while carrying knowledge from each death into the next attempt. The mapping here is precise: AI persistence creates value only when failures change the next search, evidence shows whether learning occurred, and an accountable person defines the exit. Without those conditions, another loop is simply another expense.</p>
</div>
