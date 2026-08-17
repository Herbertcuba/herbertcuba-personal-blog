---
title: "When persistence becomes a budget, who decides to stop?"
description: "Anthropic reports that an unreleased Claude system worked through 650 unsuccessful ideas before producing a new proof about the minimum share of Riemann-zeta zeros on the critical line. The leadership lesson is how to fund, verify, and stop machine persistence."
tldr: "Claude's mathematics result does not show that retries replace insight. It shows that a large search can now be provisioned as metered operating spend. Leaders must fund that search in bounded tranches, reserve independent verification capacity, enforce cash and access limits in software, and decide what evidence another round must earn."
permalink: /drafts/b90f4cfe/
layout: post.njk
date: 2026-08-17
---

A failed idea can now be provisioned in bulk.

On August 10, 2026, [Anthropic](https://www.anthropic.com/research/riemann-zeta), the AI company behind Claude, reported that an unreleased research version of its system had generated and tested 650 ideas that did not work. The wider effort used 31 million output tokens, units of generated text used to meter model activity, and later coordinated roughly 60 subagents. A subagent is a delegated AI process working with tools on part of a larger task, not another employee at a desk.

The numbers are extraordinary, but they do not tell us what one more attempt cost or prove that persistence caused the result. Anthropic published no dollar ledger or controlled comparison. What the case does show is that an organization can provision a large, instrumented search without asking a person to absorb every failed path.

Fatigue, shame, and career risk were not variables in the research. They are an interpretation of the human limits that automated retries can partly route around. I think that is the deeper economic shift: persistence is becoming a metered input, while permission to continue and capacity to verify are becoming scarce leadership resources.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>Anthropic's reported process makes repeated intellectual search easier to provision, but the case offers neither a public price nor proof that retries alone caused the advance. Its strategic importance is the transfer of limits from human endurance to organizational authorization and verification.</p>
</div>

## What the 650 failures actually produced

The Riemann zeta function is a mathematical function that helps describe how prime numbers are distributed. A zero is an input where the function's value becomes zero. In 1859, the German mathematician Bernhard Riemann proposed that all the important, or “nontrivial,” zeros lie on a line with real coordinate one-half. That line is called the critical line, and the still-unproved claim is the Riemann hypothesis.

Claude did not prove the Riemann hypothesis. Anthropic's [revised preprint](https://www-cdn.anthropic.com/95c246936988e43127bc6b2ceb7077c1dad2d68e.pdf), dated August 11, states a new unconditional lower bound, meaning a proven minimum that does not depend on assuming the hypothesis is true. The share of nontrivial zeros on the critical line rises from 5/12 to at least 2/3, with a further optimization reaching 0.6725. A lower bound says what is guaranteed. It does not say that the remaining zeros sit elsewhere, and it does not settle Riemann's conjecture.

The popular “37-year record” label also needs care. It reaches back to number theorist J. B. Conrey's [1989 peer-reviewed result](https://doi.org/10.1515/crll.1989.399.1), which proved that more than two-fifths of the zeros lie on the critical line. Mathematicians improved the bound after that, and the previous 5/12 record had stood since 2020. This was a long research lineage, not 37 years of silence followed by a machine.

Nor was the successful work merely repetition. The preprint builds on decades of mathematics, including a [2024 peer-reviewed paper](https://arxiv.org/abs/2306.04799) about pair correlation, a way of studying how zeta zeros are spaced. It adds what the authors call a new linear-algebraic reading, translating part of that earlier work into relationships that can be studied with vectors and matrices. Anthropic also reports numerical tests, counterexample searches, hundreds of scripts, checks against 54 research papers, internal mathematical review, and outside specialists examining the result on short notice.

A public [Lean 4 formalization](https://github.com/anthropics/zeta-23-lean) adds another layer. Lean 4 is a proof-assistant language that checks a precisely encoded theorem and its declared logical steps. That makes the argument more inspectable than persuasive mathematical prose alone, but it is not conventional journal peer review or independent replication.

The narrow conclusion is strong enough: one unusually large, tool-using search produced a specific result that can be checked. The broader claim that 650 failures are a general recipe for discovery remains untested.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>Claude advanced a proven minimum from 5/12 to at least 2/3; it did not prove the Riemann hypothesis. The result combined scaled search with prior human mathematics, a new conceptual move, automated checks, formalization, and expert scrutiny, so stamina is only one part of the mechanism.</p>
</div>

## Persistence is spend before it becomes an asset

The language of capital needs discipline here. Thirty-one million output tokens describe activity, not an invoice and certainly not an asset. During a campaign, machine persistence is an operating input made from model use, tools, infrastructure, and human review. Calling all of it capital hides the fact that most attempts are consumed.

Durable value appears only when the spend leaves something the organization can use again: a validated result, a reusable test, a formal artifact, or a searchable record of failed hypotheses and why they failed. This is a strategic distinction, not an accounting instruction. An undocumented stream of outputs has almost no carryover between rounds.

The better economic model is a staged investment with a real option. A real option is the right, but not the obligation, to fund another stage after new evidence arrives. Its value comes from the ability to stop. If a campaign renews itself because it can always generate another plausible path, the option has disappeared and the organization is simply paying a recurring bill.

This becomes difficult because search and proof scale at different speeds. Delivery agents can generate candidates and arguments for continuing faster than domain experts can test them. The queue for independent verification then becomes the true capacity limit, especially outside mathematics, where success criteria can be disputed and a polished narrative can masquerade as evidence.

Research on ordinary knowledge work reinforces that warning. A [2023 working paper](https://www.nber.org/papers/w31161) from the U.S. National Bureau of Economic Research followed 5,179 customer-support agents and found that an AI assistant raised issues resolved per hour by 14% on average. In a different setting, a [2025 randomized study](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/) by METR, an independent organization that evaluates AI capabilities, found that 16 experienced open-source developers took 19% longer with early-2025 AI tools. METR now labels that result out of date for current systems, but the measurement lesson remains: activity, confidence, and value are not interchangeable, and effects depend on the work.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>A search run is metered operating spend. It creates durable organizational value only when independent validation or a well-kept failure record carries learning into the next round. Treating each round as an option preserves the economically important right to stop.</p>
</div>

## Make renewal enforceable

A stopping rule in a presentation cannot stop an agent. Before launch, a persistent search needs a mandate that connects the question, evidence, budget, reviewer capacity, and technical enforcement.

First, name the result being sought and what would disconfirm it. Operational acceptance should belong to an independent second-line validation or process-control owner, meaning a control function separate from the delivery team. Internal audit can examine whether the control and evidence trail work as designed, but it should not become the day-to-day judge of every output.

Next, fund a bounded tranche. The ceiling should include cash in a stated currency, model-provider charges, external tool costs, human review, wall-clock time, token use, and tool permissions. It also needs a maximum verification queue and a submission cadence. If the queue is full, the provider changes its price enough to threaten the cash cap, or the reviewer deadline passes, new search batches pause rather than piling up behind the bottleneck.

The pause must be technical. The orchestrator, meaning the software dispatcher that launches agent jobs, should read one authoritative campaign record before every batch and fail closed when that record is expired, stale, or paused. “Fail closed” means denying new work when the system cannot confirm permission. The quota service and access-control system then block model and tool calls and revoke the campaign's credentials.

Every renewal should enter an append-only decision log, where new events are added without silently rewriting old ones. The record binds the authorized decision-maker, campaign version, evidence-test version, approved scope, cash and usage limits, expiry, and decision. The delivery team may recommend another round, but it cannot authorize itself or reuse an old approval against a changed campaign.

Finally, renewal should recalculate full campaign cost per independently accepted outcome. The portfolio owner should also see reviewer delay, the size of the pending queue, rejected claims, unsupported renewals, and later evidence that a stop was premature. A first deployment should compare those measures with the organization's current project process. This charter is a hypothesis about better allocation, so it needs its own evidence.

The control should be proportional. A reversible, low-cost task does not need the machinery of a high-stakes research campaign. But when agent work can consume material cash, contact external systems, or influence consequential decisions, “keep trying” is an authorization policy, whether leaders have written it down or not.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>A credible search mandate caps cash and supplier exposure, reserves independent review, applies backpressure when verification is full, and lets the orchestrator launch work only from current authorization. Renewal then depends on accepted outcomes and portfolio value, not on the campaign's own case for continuing.</p>
</div>

## Meanwhile in sci-fi

<div class="scifi">
<span class="scifi__label">Meanwhile in sci-fi</span>
<p class="scifi__film">Edge of Tomorrow (2014)</p>
<p>Director Doug Liman's science-fiction film follows a soldier through the same lethal day each time he dies. Repetition becomes useful because he retains information from one cycle, changes his next move, and works toward a condition that ends the loop.</p>
<p>The mapping to persistent AI search is limited but exact: another attempt has value only when failure changes the next attempt and an external success or stopping condition exists. A campaign that merely repeats, or controls its own permission to continue, has the loop without the discipline that makes the loop useful.</p>
</div>

## The human role moves to the boundary

None of this reduces people to budget holders. Humans still contribute mathematical ideas, domain knowledge, interpretation, relationships, ethical judgment, and accountability. The shift is comparative: when a system can produce another attempt as metered output and without embarrassment, choosing the question and defining credible evidence matter more.

Those choices must happen before the campaign acquires momentum. Money already spent makes continuation feel easier to defend, while a tireless system can produce an endless supply of reasons why the next batch will be different. A predeclared evidence test gives the leader something firmer than enthusiasm to renew against.

Stopping does not have to mean waste. Failed paths can be kept with their assumptions, tests, source history, and rejection reasons so that a later team does not pay to rediscover them. That record becomes a durable organizational asset only if future reviewers can tell what was tried, under which conditions, and why it failed.

Claude's reported result is important because it makes large-scale intellectual persistence concrete. Its leadership lesson is more demanding than “use more agents.” The human responsibility is to decide which problem deserves another bounded attempt, what that attempt must prove, and what other opportunity will not be funded if it continues.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>Tireless systems make continuation easy, so leaders must own the boundary around the search: the worthy question, the evidence threshold, the preserved learning, and the opportunity cost of another round. Persistence becomes valuable only when someone remains accountable for saying both continue and stop.</p>
</div>
