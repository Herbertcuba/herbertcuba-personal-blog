---
layout: post.njk
title: "When Output Gets Cheap, Operations Become the Advantage"
excerpt: "AI is collapsing the price of an attempt, not the price of a dependable outcome. That is why operational competence, not raw production speed, is becoming the scarce strategic asset."
anthem: false
permalink: /drafts/bbbbc74e/
featuredImage: "/images/posts/when-output-gets-cheap-operations-become-the-advantage.webp"
date: 2026-09-05
---

In a LinkedIn post, a software architect named Christopher Justice described running a two-week experiment on himself. He wanted to see whether one deeply experienced person could build what he considered an enterprise-level product in a domain he already knew well. His first version demoed convincingly. Then he audited it as if a vendor had delivered it, found structural problems, and rewrote most of it.

This is a first-person account, not an independently verified case study. I cannot confirm his timeline, the product's actual enterprise readiness, or the rigor of his audit. Treat it as illustration, not proof. What makes the pattern worth citing is that it shows up in more careful research: the AI-generated output was necessary but nowhere near sufficient. The expertise, the pre-written rules, the tests tied to prior failures, and the audit discipline did most of the work.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>AI-assisted production can look complete long before it is trustworthy. What closes the gap is expertise, explicit rules, and verification — not better prompts.</p></div>

## What AI actually makes cheap

The marginal cost — the cost of producing one more unit — of generating another plausible artifact has fallen sharply. Another draft, another code change, another analysis. That is real and it matters. But four costs have barely moved: deciding what is worth producing, judging whether a specific output is correct in context, integrating it into systems without breaking them, and owning what happens when it goes wrong.

Academic evidence supports the split. In a Boston Consulting Group field experiment with 758 consultants, AI use produced roughly 25% faster completion and higher-rated quality on tasks inside the tool's capability. On a task designed to sit just outside that capability, consultants using AI were 19 percentage points *less* likely to reach the correct answer. The same tool that accelerated good work also confidently accelerated wrong work, and the difference was invisible from the inside.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>AI attacks one specific cost — producing another candidate. Judging, integrating, and owning that candidate are separate costs AI does not automatically reduce.</p></div>

## The bottleneck moves

When production accelerates and validation does not, the constraint migrates. It shows up as review queues, rework, integration conflicts, escaped defects, and edge cases nobody quite owns. The organization is still shipping. It is just shipping more of everything, including its mistakes.

DORA — Google Cloud's long-running study of software delivery — associated AI adoption in its 2024 report with slight declines in organizational delivery throughput and stability, even as individual developers reported faster flow and higher satisfaction. The finding is observational, not causal, but the direction is worth sitting with.

The 2012 Knight Capital incident is a useful analogy, though it had nothing to do with AI. A flawed software deployment caused the firm to send more than four million erroneous orders in 45 minutes while trying to fill 212 customer orders, with losses exceeding $460 million. The technology worked exactly as built. The operating discipline around it did not.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Faster generation without stronger verification and ownership does not remove the bottleneck. It moves it downstream and makes it larger.</p></div>

## Boring expertise becomes infrastructure

If routine production is what AI does well, the highest-leverage human work shifts toward things that compound: defining what "good" means for a given output, encoding that definition into checks a machine can run, recognizing cases that do not fit the encoded pattern, and updating the whole system when reality changes.

This is not a defensive claim. A widely cited study by Brynjolfsson, Li, and Raymond followed 5,179 customer-support agents using a generative assistant. Average productivity rose 14%, with the largest gains — around 34% — among newer and lower-skilled workers. The tool appeared to transmit patterns from stronger colleagues to weaker ones. Expertise was being distributed, not preserved.

But someone had to have that expertise for the system to capture it. Someone has to notice when the encoded pattern goes stale, when a case genuinely does not belong on the automated path, when a check has quietly stopped protecting anything. Judgment applied once and reused reliably is a fundamentally different asset from judgment applied by hand each time. The first compounds. The second does not.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>AI can distribute the *use* of expertise widely while raising the leverage of expertise that *designs and maintains* the system doing the distributing.</p></div>

## Adaptive governance, not inherited bureaucracy

The wrong response is to bolt the old approval workflow onto the faster production line. Uniform committee review will either drown in the volume or be quietly bypassed. Neither is safe.

The alternative is not less governance. It is governance built into the workflow rather than appended to it. In practice that means controls proportional to the consequence and reversibility of each output, explicit ownership for every material artifact, traceability — the ability to reconstruct which inputs, versions, and checks produced a given output — and predefined stop and rollback paths for exceptions.

Two existing patterns are worth studying. Google's site reliability engineers use *error budgets*: an explicit reliability target, an allowed amount of failure within it, and permission to release fast while the budget holds. When the budget is spent, releases pause until reliability recovers. Toyota's *jidoka* — a principle meaning roughly "automation with a human touch" — designs production so that equipment can stop automatically when an abnormality is detected, and any operator has explicit authority to stop the line before a defect propagates. Speed and safety are not traded against each other; the operating rules make them reinforce each other.

<figure class="fig-band article-diagram" data-diagram-id="embedded-governance">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 900" width="100%" height="auto" role="img" aria-labelledby="ad-embedded-governance-title ad-embedded-governance-desc">
<title id="ad-embedded-governance-title">Adaptive governance, not inherited bureaucracy</title>
<desc id="ad-embedded-governance-desc">The alternative is not less governance. It is governance built into the workflow rather than appended to it.</desc>
<g class="article-diagram__decoration">
<rect x="0" y="0" width="760" height="900" rx="24" fill="#000000" />
<line x1="72" y1="302" x2="688" y2="302" stroke="#9eb8a4" stroke-width="2" opacity="0.45" />
</g>
<g class="article-diagram__claim" data-claim-id="claim-bolted-on-workflow">
<rect x="72" y="58" width="616" height="196" rx="18" fill="#0a1a0f" stroke="#9eb8a4" stroke-width="2" />
<text x="104" y="112" fill="#9eb8a4" font-size="18">The wrong response is to bolt the old approval workflow</text>
<text x="104" y="146" fill="#dce7de" font-size="22">onto the faster production line.</text>
<line x1="104" y1="188" x2="656" y2="188" stroke="#9eb8a4" stroke-width="5" />
<line x1="194" y1="216" x2="566" y2="216" stroke="#00e653" stroke-width="8" />
</g>
<g class="article-diagram__claim" data-claim-id="claim-governance-in-workflow">
<rect x="72" y="350" width="616" height="154" rx="18" fill="#0a1a0f" stroke="#00e653" stroke-width="3" />
<text x="104" y="405" fill="#dce7de" font-size="22">The alternative is not less governance.</text>
<text x="104" y="446" fill="#00e653" font-size="20">It is governance built into the workflow</text>
<text x="104" y="476" fill="#00e653" font-size="20">rather than appended to it.</text>
</g>
<g class="article-diagram__claim" data-claim-id="claim-proportional-controls">
<rect x="72" y="546" width="294" height="92" rx="14" fill="#0a1a0f" stroke="#00a03a" stroke-width="2" />
<rect x="394" y="546" width="294" height="92" rx="14" fill="#0a1a0f" stroke="#00a03a" stroke-width="2" />
<rect x="72" y="662" width="294" height="92" rx="14" fill="#0a1a0f" stroke="#00a03a" stroke-width="2" />
<rect x="394" y="662" width="294" height="92" rx="14" fill="#0a1a0f" stroke="#00a03a" stroke-width="2" />
<text x="96" y="580" fill="#dce7de" font-size="17">controls proportional to the</text>
<text x="96" y="607" fill="#dce7de" font-size="17">consequence and reversibility</text>
<text x="418" y="580" fill="#dce7de" font-size="17">explicit ownership for every</text>
<text x="418" y="607" fill="#dce7de" font-size="17">material artifact</text>
<text x="96" y="717" fill="#dce7de" font-size="20">traceability</text>
<text x="418" y="696" fill="#dce7de" font-size="17">predefined stop and rollback</text>
<text x="418" y="723" fill="#dce7de" font-size="17">paths for exceptions</text>
</g>
<g class="article-diagram__claim" data-claim-id="claim-speed-and-safety">
<path d="M136 820 C230 770, 530 770, 624 820" fill="none" stroke="#00e653" stroke-width="5" />
<polygon points="624,820 600,810 608,836" fill="#00e653" />
<text x="114" y="858" fill="#dce7de" font-size="18">Speed and safety are not traded against each other;</text>
<text x="137" y="886" fill="#9eb8a4" font-size="18">the operating rules make them reinforce each other.</text>
</g>
</svg>
<figcaption class="fig-cap">Speed and safety are not traded against each other; the operating rules make them reinforce each other.</figcaption>
</figure>

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Adaptive governance embeds proportional controls, named ownership, and learning loops inside the workflow itself, so speed and reliability reinforce each other instead of competing.</p></div>

## What to measure instead

The optimistic reading of all this is not that AI is disappointing. It is that most organizations are measuring the wrong thing. Gross production — drafts written, tickets closed, lines of code generated — is easy to count and largely irrelevant. What matters is closer to *quality-adjusted throughput*: accepted outputs that produce the intended result, per unit of time, at an acceptable level of risk. That is a working heuristic, not a standard metric, but it points at the right target.

That frame rewards a different kind of investment. Not more reviewers between the model and the world, but more expert judgment encoded into checks that run at machine speed. Not more meetings, but clearer decision rights — explicit rules about who, or what system, may release, override, or stop.

The winners in this shift will not be the organizations that produce the most. They will be the ones that organize production best. I think the scarce resource in the AI era is not the ability to generate another plausible answer. It is the ability to trust one — and trust has always been organizational work.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Quality-adjusted throughput, not gross volume, separates AI-productive organizations from AI-busy ones. Winning that comparison is an operations investment, not a model choice.</p></div>