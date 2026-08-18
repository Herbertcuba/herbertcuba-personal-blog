---
title: "Claude’s 650 Failed Ideas Made Persistence a Leadership Decision"
description: "Anthropic’s Riemann-zeta project shows what changes when organizations can buy another attempt, and why tireless AI needs evidence, owners, and an end condition."
tldr: "Anthropic reports that an unreleased Claude system tried 650 unsuccessful ideas before producing a new bound in number theory. The case does not show that retries automatically create value, but it does show that persistence can be provisioned as compute, tools, and review. Leaders now need to choose worthy questions, define independent acceptance tests, authorize work in finite batches, and prevent delivery systems from extending their own mandate."
permalink: /drafts/b90f4cfe/
layout: post.njk
date: 2026-08-18
---

A failed idea used to arrive with a human limit. People tire, and repeated public failure can consume attention, standing, and the appetite for another attempt. An AI system does not carry those costs in the same way. It consumes capacity that an organization can provision.

In August 2026, [Anthropic reported](https://www.anthropic.com/research/riemann-zeta) that an unreleased research version of Claude generated 650 ideas that did not work before finding a new result about the Riemann zeta function. Across two sessions in Claude Code, Anthropic’s coding-agent environment, the project used 31 million output tokens and about 60 subagents over roughly a day and a half. An output token is a unit of model-generated text used to meter activity; a subagent is a delegated, tool-using AI run, not an employee.

Anthropic has not published a full invoice or a controlled comparison showing which part of the setup caused the result. So this is a case, not a return-on-investment benchmark. Even with that boundary, it exposes a consequential shift. Some persistence that once depended on a researcher absorbing fatigue, shame, and career risk can now be allocated through compute, tools, and expert review. That is an economic interpretation, not a psychological finding from the project.

I think the leadership question begins there. When failure number 650 no longer ends the search by default, humans have to decide which questions deserve another attempt, what evidence can justify it, and who has the authority to stop.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Claude’s reported result makes repeated search an allocatable organizational input. It also removes human exhaustion as an automatic limit, which pushes question selection, evidence, and termination into leadership.</p></div>

## Mathematics supplied an acceptance test

Claude did not prove the Riemann hypothesis. The Riemann zeta function is a mathematical function of complex numbers whose zeros, meaning inputs where the function equals zero, contain information about the distribution of prime numbers. German mathematician Bernhard Riemann proposed in 1859 that all the relevant “nontrivial” zeros lie on the critical line, the vertical line at one-half on the horizontal axis of the complex-number plane. That famous claim remains unproved.

The [August 2026 preprint](https://arxiv.org/abs/2608.13637v1) makes a narrower claim. It says at least two thirds of those zeros lie on the critical line, improving the previous proven minimum of 5/12, which had stood since 2020. A lower bound is a guaranteed minimum share, not a count of every zero and not a proof that the share is 100%. The basic result moves the guarantee by 25 percentage points; an optimized version in the paper reports 0.6725.

The popular “37-year record” description needs similar care. It reaches back to number theorist J. B. Conrey’s [1989 peer-reviewed result](https://doi.org/10.1515/crll.1989.399.1), which put more than two fifths of the zeros on the line. Other mathematicians advanced the bound between 1989 and the 2020 record. The field was difficult, not frozen.

Mathematics made this long search unusually valuable because proposed answers could meet a hard acceptance test. Anthropic says the agents wrote hundreds of Python programs, ran numerical checks, looked for counterexamples, and downloaded 54 papers from arXiv, a public preprint repository, to check whether the idea was already known. The technical paper also builds on earlier peer-reviewed number theory and credits a new way of organizing those existing mathematical relationships. Persistence created room for a conceptual move; it did not replace the mathematics that made the move possible.

**Evidence status, 18 August 2026.** Anthropic mathematicians Levent Alpöge and Ralph Furman studied the work, while outside number theorists Brian Conrey and Dan Goldston examined it on short notice, according to Anthropic. A [public companion repository](https://github.com/anthropics/zeta-23-lean) says it formalizes Theorems A through E in Lean 4, a theorem-proving language that checks precisely encoded proofs against declared logical rules. These are meaningful checks, but they are not completed journal peer review or published independent replication. Any decision memo that relies on the case should record the exact repository commit and update the evidence status if independent replication, review, or correction changes it.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>The result is a new lower bound, not a solution to the Riemann hypothesis. Its importance for leadership comes from the surrounding evidence system: a precise claim, numerical tests, prior-art search, formal checking, and specialist scrutiny gave repeated attempts somewhere credible to land.</p></div>

## Persistence is now an operating input

Calling the result “stamina” captures the retry budget but leaves out the system that made retries informative. Claude’s attempts were connected to scripts, counterexample searches, prior research, and review. A failed path could therefore change the next path instead of merely adding more text.

That mechanism changes how we should read the 31 million output tokens. They measure generated volume, while the economic bill also includes model inputs, tools, coordination, expert review, replication, and the opportunity cost of problems left unfunded. The useful portfolio measure is the total spend for each result that clears an independent acceptance test. Tokens and agent counts describe activity; they cannot establish value on their own.

Evidence from ordinary work reinforces this point. A 2023 working paper from the [National Bureau of Economic Research](https://www.nber.org/papers/w31161), a US economics research organization, found that an AI assistant increased customer-support issues resolved per hour by 14% on average, with much larger gains for less experienced workers. In a different setting, [METR](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/), an independent organization that evaluates advanced AI systems, reported in a 2025 randomized study that experienced open-source developers took 19% longer when using the early-2025 tools tested. METR now treats that result as a historical snapshot because tools have improved, but the measurement lesson remains: effects depend on the work, the worker, and the acceptance test.

This is why the zeta case transfers imperfectly to strategy. A theorem can fail against formal rules. A business hunch can generate its own supporting memos, simulations, and summaries until volume begins to look like confirmation. Cheap retries are most useful where leaders can define what would disprove the idea before the search starts.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Persistence creates economic value only when each attempt can encounter evidence and change course. The relevant cost includes verification and opportunity cost, while the relevant output is an independently accepted result rather than a large volume of model activity.</p></div>

## Meanwhile in sci-fi

<div class="scifi">
<span class="scifi__label">Meanwhile in sci-fi</span>
<p class="scifi__film">Edge of Tomorrow (2014)</p>
<p>In the 2014 science-fiction film, a soldier repeats the same deadly day and uses what each failure reveals to alter the next attempt. The mapping to persistent AI is limited but useful: repetition matters when feedback changes the search, while leaders remain responsible for defining what counts as progress and for ending a loop that is no longer learning.</p>
</div>

## Authorize the next attempt before it starts

The practical unit of control should be a finite search mandate, renewed one batch at a time. The delivery team may propose the hypothesis and method, but it should not accept its own evidence or extend its own budget. A business owner owns the intended value and baseline, an independent domain reviewer accepts or rejects the result, and a portfolio owner releases the next block of funding. The data protection officer or security owner controls data and tool permissions, while procurement or supplier-risk teams can veto expanded vendor access.

Each batch needs a dated authorization record containing the cost ceiling, expiry, reviewer-hour limit, permitted data and tools, and acceptance test. The software coordinating the agents should check that record before every new subagent or tool dispatch. If the record expires, a cap is reached, or review capacity is full, new work does not start. Temporary credentials are withdrawn, and any work already in flight is held for review rather than silently carried into another batch.

The decision path can stay simple:

| Event | Immediate consequence | Who may authorize what follows |
|---|---|---|
| A cost, time, or reviewer limit is reached | Block the next batch and preserve the evidence produced so far | The portfolio owner may fund a fresh batch only after the independent reviewer identifies a new testable reason to continue |
| The predeclared evidence test fails | End the mandate and archive the failed paths | Restarting requires a new proposal and the original set of approvals, not a delivery-team renewal |
| Data, security, or supplier scope would expand | Keep the existing boundary in force | The relevant control owner may approve the change or veto it |
| An independently accepted result is produced | Replicate it and decide whether it changes a real decision | The business owner accepts the business consequence; the delivery team cannot declare its own success |

Consider a clearly hypothetical logistics search. A company might ask agents to find a routing policy that reduces driven distance by at least 3% against its current optimizer, using held-out orders from the previous quarter, without worsening on-time delivery. Locally chosen limits could be €25,000 in total cost, 20 hours of independent review, 14 days, read-only planning data, and no access to live dispatch. If either capacity limit arrives before an independent replay clears both conditions, the next batch is blocked. Those figures are illustrative rather than universal; the point is that the organization commits to the comparator, review capacity, authority, and refusal condition before seeing a persuasive result.

The failed paths should then be saved with their assumptions, tests, source versions, and reasons for rejection. This is where AI-assisted productivity can become capital: the durable asset is a checked record that improves the next decision, including the decision not to repeat an old dead end.

Tireless systems make continuation easier. They do not make continuation wise. Once exhaustion stops setting the boundary for us, leadership has to set it deliberately and remain accountable for both the next attempt and the final refusal.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Fund persistent AI through expiring batches with separate owners for value, evidence, money, and risk. Require fresh authorization before new work, block self-renewal, and preserve rejected paths so that stopping produces reusable knowledge rather than a vanished expense.</p></div>
