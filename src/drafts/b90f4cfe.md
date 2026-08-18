---
title: "Tireless Intelligence Needs a Stopping Rule"
excerpt: "Claude’s 650 failed ideas point to a new economics of thinking: persistence can be funded like compute, which makes question choice, evidence, and termination the work of leadership."
tldr: "Anthropic’s zeta result does not show that retries alone create discovery. It shows that a bounded, tool-using search can be bought at scale; leaders must therefore fund falsifiable questions, reserve independent verification, and enforce stopping and exit rules before a run begins."
permalink: /drafts/b90f4cfe/
layout: post.njk
date: 2026-08-18
---

[Anthropic’s 10 August 2026 account](https://www.anthropic.com/research/riemann-zeta) of a mathematics experiment contains one sentence worth repeating. Anthropic is the AI company behind Claude, and the system used here was an unreleased research version.

> “Initially, Claude generated and tried 650 ideas, none of which worked.”

According to Anthropic, the wider effort ran in two Claude Code sessions, produced 31 million output tokens, and coordinated roughly 60 subagents over about a day and a half. Claude Code is Anthropic’s tool-using coding environment. An output token is a metered unit of model-generated text, while a subagent is a delegated AI process working on part of the problem. These figures describe activity, not a cash price or a controlled measure of useful thought.

The experiment did not measure fatigue, shame, or career risk. Those are human pressures that make repeated failure costly, alongside the simpler limits of time and attention. What changed operationally is narrower: an organization could move part of its willingness to keep trying into a budget for model output, tools, coordination, and review. I think leadership changes at that point. The scarce decision becomes which question deserves the 650th attempt, what evidence would justify another batch, and what result must end the search.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>Claude’s run makes persistence an allocatable input, but attempt volume has value only when leaders bind it to a worthy question, independent evidence, and an end.</p>
</div>

## What the run actually produced

The Riemann zeta function is a mathematical function whose zeros, the inputs where its value becomes zero, carry information about how prime numbers are distributed. In 1859, German mathematician Bernhard Riemann proposed that all its nontrivial zeros lie on the critical line, where the real part of the input is one half. That claim is the still-unproved Riemann hypothesis.

The [new preprint](https://arxiv.org/abs/2608.13637) makes a more limited claim. It raises the unconditional lower bound from 5/12 to at least two thirds for nontrivial zeros, counted with multiplicity, that are simple and lie on the critical line. A lower bound is a proven minimum share, so the change is 25 percentage points; it neither proves the hypothesis nor shows that the remaining zeros sit elsewhere.

The often-repeated “37-year record” also needs care. Number theorist J. Brian Conrey proved in a 1989 peer-reviewed paper that more than two fifths of the zeros lie on the line. Later human work moved the bound to 5/12 in 2020. Thirty-seven years marks the interval from Conrey’s paper to the 2026 result, not a period without mathematical progress.

The successful argument also inherited a live research frontier. It builds on a [2024 peer-reviewed result](https://arxiv.org/abs/2306.04799) by number theorists Siegfred Baluyot, Daniel Goldston, Ade Irma Suriajaya, and Caroline Turnage-Butterbaugh, then adds a linear-algebraic way of handling its constraints. Anthropic says the agents ran numerical tests, looked for counterexamples, reviewed proof steps, and downloaded 54 papers from arXiv, an open repository for scholarly preprints, while checking whether the result was already known.

Verification is therefore part of the mechanism, not an afterthought. Anthropic released a [Lean 4 formalization](https://github.com/anthropics/zeta-23-lean); Lean 4 is a theorem-proving language that lets software check a precisely encoded proof against declared assumptions. That makes the reasoning more inspectable, but it cannot decide the result’s importance, establish priority, or replace independent scholarly review.

**Evidence status, 18 August 2026.** The publicly available record used here consists of Anthropic’s operational account, arXiv version 1 of the manuscript submitted on 13 August, and the public Lean repository. It reports the output-token count, approximate subagent count, duration, and several checking steps. The cited record does not provide the exact model build and complete run traces; a full account of input and cache tokens, human interventions, and cost; or a pinned Lean commit for reproduction. It also does not establish conventional journal peer review or independent replication. The result is substantial enough to examine and unsettled enough to keep those limits visible.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>The result combines inherited mathematics, a new conceptual step, scaled search, and several checks. Persistence helped create the search capacity, but the public evidence does not show that 650 failures caused the advance.</p>
</div>

## A proof can reject you; a hunch can keep billing

Mathematics is unusually friendly to persistent search because the claim can be stated exactly and a proposed proof can fail exactly. Many enterprise questions lack that resistance. An instruction such as “keep looking for a winning market” can produce an endless supply of plausible arguments, each one polished enough to defend the next round of spending. A tireless system can industrialize inquiry, but it can also industrialize a sponsor’s refusal to let go.

Evidence from ordinary work reinforces the need for restraint. A [2023 National Bureau of Economic Research working paper](https://www.nber.org/papers/w31161) studied 5,179 customer-support agents and found that access to an AI assistant increased issues resolved per hour by 14% on average. In a different setting, a [July 2025 randomized study by METR](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/), an independent AI-evaluation organization, found that 16 experienced open-source developers took 19% longer across 246 tasks when allowed to use early-2025 AI tools. Neither study measures mathematical research agents. Together they show why output, confidence, and adoption cannot stand in for measured value.

As search gets cheaper, verification can become the expensive part. Every extra candidate may consume expert attention, replication work, security review, and an opportunity that another project did not receive. The useful economic unit is therefore cost per independently validated outcome, including the cost of rejected paths and review. Without a predeclared rejection condition, a search budget quietly becomes standing permission to spend.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>Proof-like work has unusually clear rejection tests. Enterprise campaigns need those tests designed before launch, because cheap retries can increase review cost and confidence without increasing value.</p>
</div>

## Meanwhile in sci-fi

Repetition becomes useful only when each round produces information and the campaign has a defined way out.

<div class="scifi">
<span class="scifi__label">Meanwhile in sci-fi</span>
<p class="scifi__film">Edge of Tomorrow (2014)</p>
<p>Doug Liman’s science-fiction film follows soldier William Cage as he relives the same battle and learns from each death. The mapping to persistent AI search is limited but useful: a system can run another attempt without human fatigue, while leaders must define what each failure teaches, what counts as escape, and when repetition has stopped producing information.</p>
</div>

## Decide the renewal before the search begins

A Tireless Intelligence Charter is a one-page investment decision written before agents receive access. Its ingredients are familiar: staged funding, success criteria fixed before results arrive, spending quotas, automatic cutoffs, and separate people for delivery and approval. Machine-speed search makes their combination more important because hundreds of retries can now happen before ordinary governance notices.

The charter should answer four practical questions:

- **What may the campaign prove or disprove?** State one falsifiable question, the success and disconfirmation tests, and the independent reviewer. A persuasive report is not its own evidence.
- **What is the complete envelope?** Cap cash, model use, tools, elapsed time, and scarce reviewer hours. Name the next-best portfolio project so renewal has a real comparator.
- **Who controls the state?** Give every campaign three states: ACTIVE, PAUSED, and CLOSED. Reaching any limit moves it automatically to PAUSED. Only an independent portfolio owner may return it to ACTIVE after recording how a predeclared evidence gate was met; the delivery team cannot renew itself.
- **How does it end?** CLOSED must revoke model and tool credentials, preserve failed paths, and execute the retention or deletion policy. Prompts, traces, tests, and results should be exportable in provider-neutral formats, so a renewal can change model suppliers rather than inherit lock-in. Campaigns involving employees or personal data also need privacy, security, and representation decisions inside the charter.

Consider a deliberately hypothetical no-go decision. A portfolio team proposes an agent search for warehouse-routing improvements. The charter asks whether the system can cut travel distance by 5% on held-out operational data without breaking safety, labor, or service constraints. It allows SEK 500,000, fourteen days, and forty hours of independent operations review, while naming a manual warehouse-slotting study as the alternative use of that capacity. Before launch, the sponsor records a 10–20% chance of clearing the gate and accepts the full budget and reviewer time as the downside.

One additional seven-day batch may be considered only if the reviewer reproduces at least a 3% improvement and the team supplies a distinct, testable reason that the next batch could reach 5%. Suppose the campaign expires below that renewal threshold. It moves from ACTIVE to PAUSED, the independent owner records the failed gate, and the state becomes CLOSED. Artifacts are exported, provider-held data follows the agreed retention rule, and credentials are revoked. “We feel close” cannot authorize an extension.

This is the leadership shift hidden inside the mathematics story. Humans still contribute ideas, domain knowledge, interpretation, and accountability; their role is larger than administering a machine. Yet the system cannot own the opportunity cost of attempt 650. Leaders do, which is why the stopping decision belongs in the original investment case rather than in the exhausted conversation after the budget is gone.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>Treat persistent AI search as staged capital: fix the evidence, limits, renewal authority, and supplier exit in advance, then close any campaign whose next batch cannot beat its declared alternative.</p>
</div>
