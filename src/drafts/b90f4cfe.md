---
title: "When retries become a budget line"
excerpt: "Claude's reported mathematical advance shows what changes when an organization can purchase hundreds of disciplined attempts. The scarce leadership work moves to choosing the question, defining proof, and making the stop enforceable."
description: "Claude's 650 failed ideas reveal both the value and the danger of purchasable persistence: repeated AI search needs evidence gates, full-cost accounting, and an owner who can stop it."
tldr: "Anthropic's Riemann-zeta case does not show that persistence alone produces breakthroughs. It shows that large, instrumented intellectual searches can now be funded as machine capacity, so leaders should approve them only when the outcome is falsifiable, validation is independent, expected value exceeds the full cost, and a named owner can enforce expiry or stop."
permalink: /drafts/b90f4cfe/
layout: post.njk
date: 2026-08-18
---

In August 2026, Anthropic, the AI company behind Claude, reported that an unreleased research version of its model found a new mathematical bound over two sessions in Claude Code, its tool-using coding environment. Across both sessions, the model produced 31 million output tokens, meaning metered units of generated text. Anthropic says it first tried 650 ideas that failed; during the second session, it spent about a day and a half coordinating roughly 60 subagents, delegated AI processes working on parts of the problem with software tools.

The important change is economic. Research has always consumed money through failed attempts, but organizations can now order far more parallel and sustained intellectual search without asking a person to endure every dead end. Fatigue, embarrassment, and professional risk still matter to people, although Anthropic did not measure any of them in this case. The defensible conclusion is narrower: part of the endurance constraint can now be replaced by metered machine capacity.

**Source status, checked 12 August 2026:** Anthropic is both the reporter and an interested vendor. An August 2026 [manuscript](https://arxiv.org/abs/2608.13637) and a [public computer-checkable proof artifact](https://github.com/anthropics/zeta-23-lean) are available, and Anthropic says two outside number theorists examined the work on short notice. The source record does not show independent reproduction or conventional journal peer review.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>The case makes sustained intellectual search a visible, fundable resource, but its evidence supports a bounded claim about search capacity rather than a general claim that retries cause discovery.</p>
</div>

## Why this result can be judged

Mathematics gives persistent search an advantage that most enterprise questions lack: a precise test. The Riemann zeta function is a mathematical function whose zeros reveal patterns connected to the distribution of prime numbers. In 1859, German mathematician Bernhard Riemann proposed that all its relevant, or nontrivial, zeros lie on the critical line, a vertical line at real part one-half in the complex plane used to plot the function.

Claude did not prove that hypothesis. The released paper claims to raise the unconditional lower bound, the minimum share that can be proved without assuming the hypothesis, from 5/12 to at least 2/3. That is a 25-percentage-point increase in the provable share, while the claim that every relevant zero lies there remains open.

The popular 37-year framing also needs care. Number theorist J. B. Conrey's [1989 journal paper](https://doi.org/10.1515/crll.1989.399.1) proved that more than two fifths lie on the critical line, but human work continued and reached 5/12 in 2020. The Claude-authored paper credits a [2024 peer-reviewed result by four number theorists](https://arxiv.org/abs/2306.04799) as an analytic input, then applies a new linear-algebraic reading to that earlier work. Persistence created room to search; accumulated mathematics and a conceptual move gave that search somewhere to go.

Anthropic reports numerical checks, proof review, searches for counterexamples, which are cases that would show a claim false, and a search across 54 papers for earlier versions of the result. The proof was also encoded in Lean 4, a proof-assistant language that checks whether a fully specified argument follows from declared logical rules. That formal check makes the result more auditable, but it cannot by itself settle the accuracy of every translation choice, the work's novelty, or its importance to the field.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>The zeta case is valuable because the claim is narrow, the acceptance test is unusually hard, and several checks are inspectable. It still rests on prior human mathematics and remains short of independent replication and journal review.</p>
</div>

## The new cost is a validated search

Once the outcome can be tested, the 650 failed ideas become part of a cost object rather than a dramatic anecdote. Yet 31 million output tokens are not an invoice. Anthropic did not publish the unreleased model's price, input or cached-token use, tool-compute cost, model-development cost, energy use, or complete human effort.

A serious ledger therefore measures cost per independently validated outcome. It includes rejected attempts, model and cloud spend, licences, security work, expert review, elapsed delay, replication, and the value of the best project left unfunded. More machine search can produce more candidate proofs, designs, or plans, while the expert attention needed to judge them remains limited.

Evidence from ordinary work reinforces that distinction. A 2023 National Bureau of Economic Research study of 5,179 customer-support agents found a 14% average productivity gain from an AI assistant. A 2025 randomized study by METR, an independent organization that evaluates AI capabilities, found that experienced open-source developers took 19% longer with the early-2025 tools tested. The settings differ, so the figures should not be averaged into one verdict. They show why activity and confidence are poor substitutes for a task-specific result.

Nor does one successful theorem establish that 650 failures caused it. There is no comparison showing what would have happened with fewer agents, a different token budget, or another model, and there is no public denominator of unsuccessful campaigns. The leadership question is which question is worth repeating. Persistent search transfers beyond mathematics only when outcomes can be checked independently, failed paths leave inspectable evidence, permissions stay bounded, and closure is technically reversible.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>The useful economic unit is the full cost of a validated result, including review and forgone alternatives. Token volume and agent activity describe effort; they do not establish value.</p>
</div>

## Give the stop its own authority

A proposed campaign should pass four tests before receiving a persistent-search budget. If the route is already known, ordinary workflow automation is the better tool. If no observation could disprove the result, repeated AI output will make the hunch longer without making it stronger.

1. **A falsifiable outcome.** State the baseline, acceptance test, disconfirmation test, and novelty requirement before launch. “Find something useful about this market” does not qualify.
2. **Independent validation.** Choose a verifier with a different failure mode from the system doing the search, such as a domain expert, controlled experiment, separate data source, or formal checker. Freeze the model and tool versions, prompts, retry rules, data, code, and failed paths used for the decision so the evidence can be inspected later.
3. **A complete economic case.** The expected value must exceed the maximum spend and the expected return from the next-best project. A one-page Monday gate should state the cash cap in SEK or NOK, model and cloud costs, licences, security effort, reviewer hours, expiry date, comparator, and renewal threshold.
4. **An enforceable owner.** Name the decision owner before launch. A business-process or portfolio owner outside the delivery team should control pause, revocation, and bounded renewal; the team running the search may present evidence, but it cannot restart the campaign.

That fourth test must exist in software as well as policy. At expiry, the scheduler or model-and-tool gateway should reject new jobs, spending quotas should close, and credentials should be revoked until the owner records a renewal decision. For campaigns involving personal or employee data, monitoring, work allocation, or role design, a Nordic organization should also require the appropriate privacy, security, and employee-representation review at launch and renewal.

Stopping does not have to erase the investment. Archived hypotheses, tests, rejected routes, costs, and reviewer decisions can make the next search cheaper to assess. I think this is where leadership becomes more demanding: the system supplies another attempt, while people remain accountable for whether the evidence justifies one.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>Fund persistent search only behind four gates: a falsifiable outcome, independent validation, superior full-cost economics, and a named owner whose stop is enforced by the runtime rather than left as a meeting-room promise.</p>
</div>

## Meanwhile in sci-fi

<div class="scifi">
<span class="scifi__label">Meanwhile in sci-fi</span>
<p class="scifi__film">Edge of Tomorrow (2014)</p>
<p>Doug Liman's science-fiction film follows Major William Cage, a soldier forced to repeat the same battle while carrying what he learns into the next attempt.</p>
<p>The mapping is precise: repetition has value only when each failed run changes the next one and progress can be tested. A tireless system can enter another cycle; responsible leaders decide whether it learned enough to deserve one, and they keep the power to end it.</p>
</div>
