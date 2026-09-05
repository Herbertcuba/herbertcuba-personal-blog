---
layout: post.njk
title: "When Output Gets Cheap, Operations Become the Advantage"
excerpt: "AI is not making process expertise obsolete. By making candidate output abundant, it turns the ability to organize, verify, and learn from that output into scarce strategic infrastructure."
anthem: false
permalink: /drafts/bbbbc74e/
featuredImage: "/images/posts/when-output-gets-cheap-operations-become-the-advantage.webp"
date: 2026-09-05
---

The 2024 DORA report — Google Cloud's annual benchmark of software-delivery performance — put a number on the productivity paradox. Developers using AI reported faster flow, better documentation, and higher-quality code. Their organizations shipped less reliably. A modeled 25% increase in AI adoption tracked with roughly 1.5% lower delivery throughput and 7.2% lower delivery stability.

That gap is where operations lives. It is why the least glamorous part of your organization — the people who own processes, standards, decision rights, and quality control — is quietly becoming its most strategic.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>AI makes individual work faster while making organizational coordination harder. The gap is not a temporary implementation problem; it is the new terrain.</p></div>

## What AI actually makes cheap

Stanford's AI Index, the annual research synthesis from the university's Institute for Human-Centered AI, reports that the inference cost of a GPT-3.5-level system dropped more than 280-fold between late 2022 and late 2024. That is a genuine collapse in the marginal cost — the cost of producing one additional unit — of generating another plausible digital artifact. Another draft. Another code change. Another customer reply.

What has not fallen is the cost of turning that artifact into a reliable outcome. Somebody, or something, still has to decide whether the answer is correct, whether it fits existing systems and policies, whether it is safe to release, and who is accountable if it goes wrong. Cheap generation does not automatically produce cheap outcomes. It produces more candidates that need those decisions.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>AI attacks one specific cost — producing another candidate output. Verification, integration, ownership, and consequence remain expensive.</p></div>

## The bottleneck migrates

When one step in a system gets faster, the system reorganizes around the next constraint.

A 2023 field experiment with 758 Boston Consulting Group consultants using GPT-4 showed this clearly. On tasks inside the tool's capability frontier, consultants worked 25% faster and produced work rated more than 40% higher in quality. On one task just outside that frontier, they were 19 percentage points less likely to reach the right answer. The frontier itself was jagged and hard to see from the inside.

A randomized study by METR, an independent AI-evaluation nonprofit, is even more sobering. Sixteen experienced developers, working in mature open-source repositories they already knew, took 19% longer with early-2025 AI tools. Before the study, they expected to be 24% faster. Afterward, they still believed they had been. Perception did not match the clock.

The pattern is consistent. AI removes part of the production constraint. Ambiguity about ownership, standards, and decision rights — the explicit rules about who may release, override, or stop — becomes the new constraint. Faster generation exposes the operating system your organization already has.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>As generation gets cheaper, the binding constraint moves to specification, verification, integration, and accountability.</p></div>

## Why boring expertise becomes infrastructure

If routine production is what AI does well, the highest-leverage human work shifts to defining what "good" means, encoding that definition into checks a machine can run, recognizing cases that do not belong on the automated path, and updating both when reality changes.

This is not a defensive claim about protecting expert jobs. A well-known study of 5,179 customer-support agents found that an AI assistant increased productivity 14% on average, with the largest gains among novice workers. The system appeared to transmit patterns from stronger colleagues to weaker ones — expertise being distributed, not preserved.

But somebody had to have that expertise for the system to capture it. Somebody has to notice when it goes stale, when a case genuinely does not fit the encoded pattern. Expert judgment encoded once and applied reusably is a fundamentally different asset from expert judgment applied by hand each time. The first scales. The second does not.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>AI can distribute the repetition of expertise while raising the leverage of expertise used to design and maintain the system that repeats it.</p></div>

## Adaptive governance, not inherited bureaucracy

The wrong response is to bolt the old approval workflow onto the faster production line. Uniform committee review and quarterly policy refreshes will either drown in volume or be quietly bypassed. Neither outcome is safe.

The alternative is not less governance. It is governance built into the workflow rather than appended to it: risk-tiered controls proportional to consequence and reversibility, explicit ownership for every material artifact, traceability so an output's inputs and checks can be reconstructed, exception handling with predefined stop and rollback paths, and feedback loops that turn each failure into a test or a policy update.

Google's site-reliability engineers already work this way. They set explicit reliability targets, hold an error budget — the amount of failure permitted by those targets, which authorizes speed within tolerances — and treat every significant incident as material for a documented postmortem. Toyota's factories embody a related pattern in `jidoka`, meaning "automation with a human touch": production lines designed so an abnormality can be detected and stopped before a defect propagates. Neither is a template for AI. Both prove that automation gets more powerful, not less, when it can notice and stop.

<figure class="fig-band article-diagram" data-diagram-id="adaptive-governance-comparison">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 720" width="100%" height="auto" role="img" aria-labelledby="ad-adaptive-governance-comparison-title ad-adaptive-governance-comparison-desc">
<title id="ad-adaptive-governance-comparison-title">Adaptive governance, not inherited bureaucracy</title>
<desc id="ad-adaptive-governance-comparison-desc">The wrong response is to bolt the old approval workflow onto the faster production line. The alternative is not less governance. It is governance built into the workflow rather than appended to it.</desc>
<g class="article-diagram__decoration">
<rect x="0" y="0" width="760" height="720" rx="24" fill="#0a1a0f"/>
<line x1="70" y1="326" x2="690" y2="326" stroke="#9eb8a4" stroke-width="2" opacity="0.45"/>
</g>
<g class="article-diagram__claim" data-claim-id="claim-old-approval-workflow">
<rect x="40" y="40" width="680" height="128" rx="16" fill="#000000" stroke="#9eb8a4" stroke-width="2"/>
<text x="70" y="82" fill="#dce7de" font-size="20" font-weight="700">The wrong response</text>
<text x="70" y="116" fill="#dce7de" font-size="18">bolt the old approval workflow</text>
<text x="70" y="146" fill="#9eb8a4" font-size="18">onto the faster production line</text>
</g>
<g class="article-diagram__claim" data-claim-id="claim-uniform-review">
<rect x="40" y="188" width="680" height="108" rx="16" fill="#000000" stroke="#9eb8a4" stroke-width="2"/>
<text x="70" y="228" fill="#dce7de" font-size="18">Uniform committee review and quarterly policy refreshes</text>
<text x="70" y="264" fill="#9eb8a4" font-size="18">will either drown in volume or be quietly bypassed.</text>
</g>
<g class="article-diagram__claim" data-claim-id="claim-governance-built-in">
<rect x="40" y="356" width="680" height="238" rx="16" fill="#0a1a0f" stroke="#00e653" stroke-width="3"/>
<text x="70" y="398" fill="#00e653" font-size="20" font-weight="700">The alternative is not less governance.</text>
<text x="70" y="434" fill="#dce7de" font-size="18">governance built into the workflow rather than appended to it</text>
<text x="70" y="476" fill="#dce7de" font-size="16">risk-tiered controls proportional to consequence and reversibility</text>
<text x="70" y="510" fill="#dce7de" font-size="16">explicit ownership for every material artifact</text>
<text x="70" y="544" fill="#dce7de" font-size="16">exception handling with predefined stop and rollback paths</text>
<text x="70" y="578" fill="#dce7de" font-size="16">feedback loops that turn each failure into a test or a policy update</text>
</g>
<g class="article-diagram__claim" data-claim-id="claim-notice-and-stop">
<rect x="40" y="624" width="680" height="56" rx="16" fill="#00a03a"/>
<text x="70" y="660" fill="#dce7de" font-size="18" font-weight="700">automation gets more powerful, not less, when it can notice and stop.</text>
</g>
</svg>
<figcaption class="fig-cap">The alternative is not less governance. It is governance built into the workflow rather than appended to it:</figcaption>
</figure>

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Adaptive governance embeds proportional controls, named ownership, and learning loops inside the production workflow itself, so speed and reliability reinforce each other.</p></div>

## The optimistic version

The optimistic reading of the productivity paradox is not that AI is disappointing. It is that most organizations are still measuring the wrong thing. Gross production — drafts written, tickets closed, code lines generated — is easy to count and largely irrelevant. What matters is quality-adjusted throughput: accepted outputs that produce the intended result, per unit of time, at an acceptable level of risk.

That metric rewards a different kind of investment. Not more reviewers between the model and the world, but more expert judgment encoded into tests that run at machine speed. Not more meetings, but clearer decision rights. Institutional memory — the durable record of decisions, failures, and rationale that survives staff and tool changes — becomes something to build deliberately rather than something a few long-tenured people carry in their heads.

The winners in this shift will not be the organizations that produce the most. They will be the ones that organize production best. I think the scarce resource in the AI era is not the ability to generate another plausible answer. It is the ability to trust one — and that has always been organizational work.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Quality-adjusted throughput, not gross volume, separates AI-productive organizations from AI-busy ones. Winning that comparison is a governance and operations investment, not a model choice.</p></div>