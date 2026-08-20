---
title: "The AI-first company turns the pyramid upside down"
excerpt: "AI becomes structural when governed workflows and bounded agents carry repeatable work, while people concentrate judgment, learning, and accountability where uncertainty is highest."
tldr: "An AI-first operating model begins with workflows rather than tools: ordinary software holds state, bounded agents interpret and propose, policy controls enforce authority, and people handle consequential judgment. Leaders should protect how expertise develops and change the organization only after repeated operating evidence supports the new shape."
provenance: verified-by-author
anthem: true
image: "/images/posts/architecture-ai-first-company.webp"
permalink: /drafts/0b3ae4cd/
layout: post.njk
date: 2026-08-20
---

The number of agents in a company tells us very little about whether the company is becoming AI-first. The harder question is where the work now lives. If people still carry every process from beginning to end, agents remain accessories to an operating model designed around human handoffs.

Adoption is already widespread. The [2025 AI Index from Stanford University's Institute for Human-Centered AI](https://hai.stanford.edu/ai-index/2025-ai-index-report), an annual report on the state of artificial intelligence, found that 78% of surveyed organizations reported using AI in 2024, up from 55% the year before. That measures use, however, rather than a successful redesign of work.

<figure class="stat-card">
  <p class="stat-card__number">78%</p>
  <figcaption>of surveyed organizations reported using AI in 2024, compared with 55% in 2023. Source: Stanford AI Index 2025.</figcaption>
</figure>

Here, an AI agent means software that lets a language model choose steps and use approved tools in pursuit of a bounded outcome. A workflow is the full route from a trigger to a business result, including state, checks, actions, exceptions, and recovery. [Anthropic's 2024 engineering guide](https://www.anthropic.com/engineering/building-effective-agents), published by the AI company, draws the useful distinction: agents dynamically direct parts of their work, while conventional workflows follow paths defined in code.

I think the decisive shift is to redesign that full route. Governed workflow software should carry repeatable execution, agents should handle interpretation inside explicit limits, and people should enter where uncertainty or consequence requires judgment. The organization can then change around evidence from the work, rather than around the promise of a tool.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Agent adoption changes the operating model only when agents become bounded parts of end-to-end workflows and responsibility is deliberately reassigned.</p></div>

## Invert the load-bearing layer

Most retrofits place an agent at the narrow end of an existing process. It drafts a response, summarizes a file, or recommends a next step, while people still move the case between systems and remain responsible for every transition. The assistance may be valuable, but the human workflow remains the load-bearing structure.

An AI-first design begins from the outcome and builds a governed route back from it. The broad base contains workflow software that records the current state, permits only valid transitions, and keeps a receipt of what happened. Bounded agents interpret messy input or select among allowed options. People are concentrated at the point where context, trade-offs, or accountability matter most.

<figure class="anthem-figure">
<svg viewBox="0 0 720 760" width="100%" role="img" aria-labelledby="pyramid-title pyramid-desc" xmlns="http://www.w3.org/2000/svg">
  <title id="pyramid-title">The retrofit trap and the AI-first operating pyramid</title>
  <desc id="pyramid-desc">The retrofit trap has people carrying a broad workflow and AI agents assisting at the narrow bottom. The AI-first design has governed workflow software and bounded agents as the broad base, with human judgment and accountability at the top.</desc>
  <rect x="20" y="20" width="680" height="335" rx="20" fill="#f4f6f8" />
  <text x="360" y="60" text-anchor="middle" font-size="22" font-weight="700" fill="#1d2733">RETROFIT TRAP</text>
  <polygon points="90,90 630,90 360,325" fill="#dce5ee" stroke="#536171" stroke-width="3" />
  <polygon points="292,266 428,266 360,325" fill="#7067e8" />
  <text x="360" y="155" text-anchor="middle" font-size="25" font-weight="650" fill="#1d2733">People carry the workflow</text>
  <text x="360" y="292" text-anchor="middle" font-size="18" font-weight="700" fill="#ffffff">AI agents assist</text>

  <rect x="20" y="385" width="680" height="355" rx="20" fill="#f4f6f8" />
  <text x="360" y="425" text-anchor="middle" font-size="22" font-weight="700" fill="#1d2733">AI-FIRST DESIGN</text>
  <polygon points="360,455 90,710 630,710" fill="#dce5ee" stroke="#536171" stroke-width="3" />
  <polygon points="360,455 304,508 416,508" fill="#1d2733" />
  <polygon points="190,615 530,615 630,710 90,710" fill="#7067e8" />
  <text x="360" y="535" text-anchor="middle" font-size="22" font-weight="650" fill="#1d2733">Human judgment</text>
  <text x="360" y="562" text-anchor="middle" font-size="20" fill="#1d2733">and accountability</text>
  <text x="360" y="655" text-anchor="middle" font-size="22" font-weight="700" fill="#ffffff">Governed workflow software</text>
  <text x="360" y="685" text-anchor="middle" font-size="20" fill="#ffffff">with bounded agents</text>
</svg>
<figcaption>The inversion concerns where execution is carried. The base is governed software with bounded agents, while people retain judgment and accountability at consequential points.</figcaption>
</figure>

The base cannot be a language model improvising the official process. Deterministic orchestration, meaning ordinary code that owns the sequence of approved workflow states, should reject invalid transitions regardless of what an agent proposes. The agent can interpret a request or recommend an action; the governed system decides whether that action is permitted and records the result.

This changes the role of management as well. Leaders no longer need to approve every routine step, but they do need to define outcomes, permission boundaries, escalation routes, and the conditions under which authority is withdrawn. Once execution moves into software, those choices must become visible parts of the architecture.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>The AI-first pyramid rests on governed workflows with bounded agents, not on unconstrained model behavior. People move toward judgment, policy, and accountability as software carries more routine execution.</p></div>

## Treat authority as part of the architecture

A delegation envelope is the machine-readable boundary around an agent's authority: which actions it may request, which data it may use, what limits apply, how long permission lasts, and when a person must decide. This turns the vague promise of a “human in the loop” into named rights to approve, revoke, reverse, and investigate.

The [EU AI Act, Regulation (EU) 2024/1689](https://eur-lex.europa.eu/eli/reg/2024/1689/oj), is the European Union's 2024 risk-based law for AI systems. Its obligations increase for uses that create greater risk. An internal authority model is not a set of legal classifications, but the same operating principle is useful: greater consequence should bring tighter limits, stronger evidence, and clearer human control.

<figure class="authority-table">
<table>
  <thead>
    <tr><th>Authority band</th><th>What the system may do</th><th>Enforced boundary</th><th>Human responsibility</th></tr>
  </thead>
  <tbody>
    <tr><td>Observe</td><td>Read, classify, and draft</td><td>No external effect</td><td>Review quality and release any action</td></tr>
    <tr><td>Act within limits</td><td>Execute a predefined low-impact action</td><td>Approved state, scope, amount, policy version, and expiry</td><td>Grant, monitor, revoke, and reverse authority</td></tr>
    <tr><td>Escalate</td><td>Prepare evidence and recommend a route</td><td>Conflicting data, policy exception, or material impact blocks execution</td><td>A named decision owner resolves the case</td></tr>
  </tbody>
</table>
<figcaption>Internal authority bands should be designed around business consequence. They do not replace legal risk assessment.</figcaption>
</figure>

Consider a customer-refund workflow. Suppose an agent may propose refunds up to €200 only when the order is in a returned state and the current policy version applies. A proposal for €150 from a merely shipped order is still illegal, as is a request made with expired permission. The deterministic workflow rejects both before any payment tool is called, then routes the case to the named owner.

The supporting technology predates the current agent wave. [Temporal](https://docs.temporal.io/workflow-execution), a durable workflow platform, persists progress so execution can resume after an interruption. [Open Policy Agent](https://www.openpolicyagent.org/docs/latest/), an open-source policy engine, can evaluate permission rules separately from the agent. An idempotency key, a unique token documented by payment company [Stripe](https://docs.stripe.com/api/idempotent_requests), helps a retried request avoid executing the same operation twice. These are examples of three duties the architecture must cover: durable state, independent authorization, and safe recovery.

Controls can establish whether an action is allowed and whether it completed. They cannot ensure that the company keeps producing people capable of judging the unusual cases. That is the next design problem.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Safe delegation requires machine-enforced limits around state, scope, permission, and recovery, with named people holding the rights to grant, revoke, and reverse authority.</p></div>

## Protect the production of judgment

Routine work does more than consume time. It gives developing employees repeated exposure to ordinary cases, lets them see patterns, and creates the context needed to recognize an exception later. If agents absorb that experience without a replacement, the company can become faster today while weakening its future supply of judgment.

This is a design risk rather than a universal measured outcome. Its mechanism is still concrete: beginners receive fewer graded cases, while experts see an increasingly distorted stream made up mostly of difficult exceptions. The answer is to reserve a learning budget, meaning protected time and cases for people to inspect decisions, practise under supervision, and record why an expert overrode the system.

<figure class="article-image">
  <a href="https://www.linkedin.com/feed/update/urn:li:activity:7485407006204493825/"><img src="/images/posts/arvind-kc-linkedin-post.jpg" alt="Screenshot of Arvind KC's LinkedIn post listing ten reflections from his first months at OpenAI" loading="lazy"></a>
  <figcaption>Arvind KC, a people leader at OpenAI, the AI company behind ChatGPT, shared ten reflections from his first months there. Screenshot of the public post; <a href="https://www.linkedin.com/feed/update/urn:li:activity:7485407006204493825/">view the source on LinkedIn</a>.</figcaption>
</figure>

The post is not proof for a particular operating model. What it usefully demonstrates is a learning practice: local observations are turned into explicit reflections that colleagues can inspect and discuss. An AI-first company needs that habit inside its workflows, through sampled case reviews, recorded overrides, supervised rotations, and early involvement from employee representatives when roles or training paths will change.

That learning record also improves governance. A policy owner can see where people repeatedly disagree with the agent, a workflow owner can find confusing states, and leaders can tell whether automation is reducing work or merely moving it into exception handling. Shared system understanding is what allows local action without organizational blindness.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>When agents take routine cases, leaders must deliberately preserve the exposure, reflection, and supervised practice through which people develop reliable judgment.</p></div>

## Meanwhile in sci-fi

<div class="scifi">
<span class="scifi__label">Meanwhile in sci-fi</span>
<p class="scifi__film">Star Trek: The Next Generation (1987)</p>
<p>The television series, which ran from 1987 to 1994, follows the USS Enterprise. Its specialists can act within a clear command structure because they share a live view of the vessel's condition and understand the mission their local decisions must serve.</p>
</div>

The mapping is shared situation awareness. In an AI-first company, a workflow owner should be able to see the current state, recent agent actions, active policy, and likely effects on connected work, while leaders can see who may stop or reverse an action. Local autonomy becomes governable when state and authority are visible across the system.

## Let operating evidence redraw the company

The pyramid is a design hypothesis, not a proven benchmark. Stanford's adoption figure does not show that this organizational shape works, and no comparable Swedish or Norwegian production record for the full model is cited here. For a Nordic CIO, that limitation argues for a bounded test with pre-agreed evidence rather than a company-wide reorganization based on enthusiasm.

Begin with one workflow whose start, outcome, owner, and failure modes can be named. Measure the current process before adding an agent, including quality, delay, rework, human review, and the full cost of correctly completed cases. Finance and the business owner can then set a planning envelope from the affordable cost of learning and reversal, rather than borrowing a universal budget or productivity target.

An evaluation contract is the evidence agreement made before the test begins. It fixes the case mix, who establishes the correct outcome, the minimum quality level, the maximum unnecessary review load, the allowed number of retries, and the total-cost denominator. This prevents a promising demo from quietly changing the definition of success.

<figure class="release-brief">
<table>
  <thead>
    <tr><th>Release-brief field</th><th>Decision evidence agreed before the test</th></tr>
  </thead>
  <tbody>
    <tr><td>Scope and baseline</td><td>A fixed case cohort that reflects the real mix, with outcomes adjudicated by named experts</td></tr>
    <tr><td>Quality and review</td><td>A risk-specific quality floor, an uncertainty rule, and a ceiling for unnecessary human escalation</td></tr>
    <tr><td>Authority</td><td>Allowed actions, data, amount, duration, policy version, and named grant, revoke, and reversal owners</td></tr>
    <tr><td>Economics</td><td>Full cost per correctly completed case, including integration, model use, review, exceptions, and recovery</td></tr>
    <tr><td>Continuity</td><td>A manual route, exportable records, supplier-exit duties, and a tested recovery path</td></tr>
    <tr><td>Decision</td><td>Pre-agreed conditions to expand, narrow, pause, or retire the workflow</td></tr>
  </tbody>
</table>
<figcaption>The thresholds belong to the workflow's actual risk, baseline, and economics. Planning ranges should never be presented as universal benchmarks.</figcaption>
</figure>

Start by recording agent proposals without allowing external effects, then release the lowest-consequence actions inside a narrow envelope. Business, technology, risk, procurement, finance, and employee representatives should review the same evidence because each owns a different part of the consequence. Their decision is whether authority expands, contracts, or returns to people.

One successful workflow is not enough to redraw a company. When several workflows show durable control, acceptable economics, recoverable failures, and healthy human learning, roles and reporting lines can follow the new distribution of work. Some coordination layers may shrink, while policy ownership, exception judgment, workflow engineering, and capability development become more important. Other workflows may remain human-led, which is also a useful result.

The organizational label should follow the evidence. When the operating base can carry repeatable work without hiding authority or starving human judgment, leaders can change the company's shape with confidence. Until that proof repeats, the responsible AI-first company remains willing to learn without pretending that a pilot is already an operating model.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Redesign one bounded workflow, agree the evidence and economic limits in advance, and change the organization only after the same safe pattern holds across several parts of the business.</p></div>
