---
title: "When persistence becomes capital, stopping becomes leadership"
description: "Claude's Riemann zeta result shows what changes when organizations can buy hundreds of attempts, and why funded tireless searches need evidence gates and an expiry date."
tldr: "Claude's Riemann zeta result does not show that persistence alone produces breakthroughs. It shows that large, testable searches can now be bought in finite batches, which puts question selection, independent verification, and stopping authority at the center of leadership."
permalink: /drafts/b90f4cfe/
layout: post.njk
date: 2026-08-18
---

Anthropic's most revealing number from its August 2026 mathematics experiment is 650. The AI company [says](https://www.anthropic.com/research/riemann-zeta) an unreleased research version of Claude, the company's AI system, generated and tested that many unsuccessful ideas before producing a new result in two Claude Code sessions, Anthropic's coding-agent environment. The work used 31 million output tokens, units of model-generated text used for metering, and roughly 60 subagents, delegated Claude runs working on separate tasks over about a day and a half.

Those figures are Anthropic's own. The model remains unreleased, “idea” is a vendor-defined unit, and the company has published neither a full cost ledger nor a controlled comparison showing which part of the setup caused the result. Within that boundary, the case still makes a consequential capability visible: an organization can provision a large search with tools and checks instead of asking one person to endure every failed path.

In my Three Crucibles frame, productivity increasingly behaves like capital because organizations can buy more execution capacity. Claude's result exposes the leadership consequence. Someone must decide which question receives that capacity, what evidence earns another batch, and who can end the campaign.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Anthropic's reported scale makes persistence an allocatable input, but the undisclosed cost and absent controlled comparison prevent any claim that retries alone caused the result.</p></div>

## Why this problem could absorb 650 failures

The Riemann zeta function is a mathematical function whose nontrivial zeros carry information about how prime numbers are distributed. The Riemann hypothesis, proposed by German mathematician Bernhard Riemann in 1859, says all those zeros lie on a specific line in the complex-number plane called the critical line. That famous hypothesis remains unproved; Claude's result concerns a narrower question.

The [2026 preprint](https://arxiv.org/abs/2608.13637v1), a paper released before conventional journal review, gives an unconditional lower bound. In plain language, it proves a minimum share of zeros on the critical line without assuming the Riemann hypothesis is true. The stated minimum rises from 5/12 to at least 2/3, a change of 25 percentage points, while an optimized version reaches 0.6725. The previous 5/12 record had stood since 2020. The popular “37-year” framing reaches back to number theorist J. B. Conrey's 1989 result, although mathematicians improved the bound between 1989 and 2020.

The proof also rests on a human research lineage. It uses mathematical results from a [2024 peer-reviewed paper](https://arxiv.org/abs/2306.04799) by four number theorists, then adds what the new preprint calls a linear-algebraic reading of their pair-correlation sum. Put simply, the preprint presents an existing relationship about the spacing of zeta zeros in linear-algebraic form, giving the search a different way to organize and test possible bounds. Persistence helped explore the space, but there was a conceptual move inside the successful route.

Verification made that route more than another plausible answer. Anthropic reports numerical tests, searches for counterexamples, reviews by other agents, and checks against 54 research papers. It also released a [Lean 4 formalization](https://github.com/anthropics/zeta-23-lean). Lean 4 is a theorem-proving programming language that checks a machine-readable statement and each encoded logical step against declared assumptions.

That machine check strengthens the evidence, while leaving questions of significance and novelty to mathematicians. Anthropic says its own mathematicians examined the work and two outside specialists reviewed it on short notice. As of August 2026, the responsible description is a lab-released preprint with a public formal companion and specialist scrutiny. Journal peer review, independent reproduction, or a substantive correction should change that evidence status.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>The result is a specific, machine-checkable lower-bound advance built on decades of human mathematics. Its verification layers are meaningful, but they do not yet amount to conventional peer review or independent replication.</p></div>

## The bottleneck moves to verification

For a human researcher, a failed path consumes more than working hours. Repeated failure can bring fatigue and embarrassment, while a long bet can create career risk. Anthropic did not measure any of those effects; they are an economic interpretation of what machine persistence can partly bypass.

Machine persistence still carries a bill. Another batch consumes model use, tool access, human review, and the opportunity to fund something else. Anthropic's 31 million output tokens therefore describe activity, not return on investment. The useful economic measure is full cost per independently accepted result, including the work needed to reproduce and assess it.

Results from ordinary work reinforce the need for task-level measurement. A [2023 working paper](https://www.nber.org/papers/w31161) from the National Bureau of Economic Research, a US economics research organization, found a 14% average productivity gain among 5,179 customer-support agents given an AI assistant. A [2025 randomized study](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/) by METR, an independent AI research group, found that 16 experienced open-source developers took 19% longer with the AI tools available then; METR now describes that result as an outdated snapshot. Neither setting explains frontier mathematics. Together they show why AI activity has no universal conversion rate into value.

As candidate production accelerates, independent judgment becomes the scarce input. Organizations already know staged funding, preregistration, which means recording tests before work begins, and circuit breakers that halt a process under declared conditions. The AI-specific pressure is the rate: a system can generate candidate answers and polished reasons to continue faster than reviewers can challenge them. Formal mathematics can offload part of that burden to a proof checker. Strategy, product, and people decisions usually lack such a clean judge, so persistence can manufacture confidence faster than evidence.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Tireless search shifts scarcity rather than removing it. Tokens buy more attempts, while independent review, opportunity cost, and the quality of the acceptance test determine whether those attempts create value.</p></div>

## Meanwhile in sci-fi

<div class="scifi">
<span class="scifi__label">Meanwhile in sci-fi</span>
<p class="scifi__film">Edge of Tomorrow (2014)</p>
<p>Doug Liman's 2014 science-fiction film follows soldier William Cage as he repeats the same battle and carries information from each death into the next attempt. The mapping is precise: repetition becomes useful only when failure changes the next attempt and an external condition defines escape. A tireless AI search also needs retained evidence and a victory condition set outside the system doing the searching.</p>
</div>

## Make continuation an expiring permission

A Tireless Intelligence Charter should be a temporary authorization for one search campaign, with separate gates for admission and renewal. The admission gate starts with value: a named sponsor ties the question to a material decision, states the current baseline, names a comparison, and defines what evidence would count against the original hunch. An independent reviewer must have both the competence and reserved time to judge the output. The sponsor must also show why this question outranks the strongest alternative use of the same budget.

Authority needs a boundary before work begins. The charter should specify allowed tools, data sensitivity, how long and where data may be stored, how the organization can exit the supplier, and the person who can kill the campaign. These controls can be proportionate to the risk, but they cannot remain implied. A search that cannot state its permissions or its disconfirming evidence is not ready for its first funded batch.

Renewal should happen in the existing portfolio forum, meaning the group that already ranks competing investments, rather than in a new AI committee. Each authorization funds a finite amount of time, model use, tool access, and reviewer capacity, then expires. The delivery team may request another batch, but it cannot approve its own request. Renewal requires new testable information, a validated improvement, or another predeclared evidence gate, not a more eloquent defense of the initial idea.

The rule also has to reach the software coordinating the agents. Before every new subagent or tool dispatch, that orchestrator must verify the current mandate version and expiry in one authoritative record. If the record is missing, expired, or stale, the system fails closed, which means it blocks the next dispatch. Temporary credentials are then withdrawn, while the charter determines in advance whether work already in flight is cancelled or allowed to finish safely.

At portfolio level, track independently accepted outcomes, total cost including review and replication, reviewer delay, renewals granted without new evidence, and stops later judged premature. Preserve failed hypotheses and their tests so a future campaign does not pay to rediscover the same dead ends. These measures reveal both kinds of governance failure: persistence that runs too long and stopping rules that cut learning short.

Human contribution remains much wider than administration. Technical ideas, interpretation, relationships, and accountability still matter. The 650 failed ideas add a specific duty that was easier to leave implicit when exhaustion often ended the search: leaders must grant persistence for a reason, renew it with evidence, and withdraw permission while the system is still willing to continue.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Admit a tireless search only when its value, disconfirming evidence, reviewer, permissions, and opportunity cost are explicit. Fund finite batches, separate renewal from delivery, enforce expiry at dispatch, and judge the portfolio by independently accepted outcomes.</p></div>