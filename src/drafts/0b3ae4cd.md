---
title: "The AI-first company turns the pyramid upside down"
description: "A practical argument for putting agents underneath repeatable workflows while people retain judgment, authority, and accountability."
excerpt: "Most companies are attaching agents to an organization built for human handoffs. The larger opportunity is to redesign the flow of work so agents carry repeatable execution and people concentrate on judgment, authority, and responsibility."
tldr: "An AI-first company puts agents at the base of complete workflows and people at the points where intent, judgment, and accountability matter most. That inversion requires machine-enforced limits, deliberate ways to develop human judgment, and operating evidence strong enough to justify any change to the organization."
image: "/images/posts/architecture-ai-first-company.webp"
imageAlt: "Two organizational pyramids showing the retrofit trap and an AI-first company"
tags:
  - AI
  - Strategy
  - Organization design
anthem: true
provenance: verified-by-author
permalink: /drafts/0b3ae4cd/
layout: post.njk
date: 2026-08-20
---

AI adoption has outrun organization design. The [2025 AI Index from Stanford University's Institute for Human-Centered AI](https://hai.stanford.edu/ai-index/2025-ai-index-report), an annual review of AI research and adoption, found that 78% of surveyed organizations reported using AI in 2024, up from 55% a year earlier. That number shows how quickly AI use is spreading. It cannot tell us whether companies have learned how to organize around it.

An AI agent here means software that lets a language model choose steps and use approved tools toward a bounded result. A workflow is the connected route from an event, such as a request or an order, to a finished business outcome. I think the AI-first company begins when agents carry the repeatable work across that route while people set intent, handle ambiguity, and remain accountable for what happens.

<figure class="anthem-figure anthem-stat" aria-labelledby="ai-adoption-caption">
  <svg viewBox="0 0 760 280" role="img" aria-labelledby="ai-adoption-title ai-adoption-desc" style="width:100%;height:auto">
    <title id="ai-adoption-title">Reported organizational AI use rose from 55% to 78%</title>
    <desc id="ai-adoption-desc">Two horizontal bars compare 55 percent in 2023 with 78 percent in 2024.</desc>
    <text x="40" y="42" font-size="22" font-weight="700">Organizations reporting AI use</text>
    <text x="40" y="105" font-size="18">2023</text>
    <rect x="120" y="78" width="330" height="38" rx="8" fill="currentColor" opacity="0.38"></rect>
    <text x="465" y="105" font-size="22" font-weight="700">55%</text>
    <text x="40" y="181" font-size="18">2024</text>
    <rect x="120" y="154" width="468" height="38" rx="8" fill="currentColor" opacity="0.82"></rect>
    <text x="603" y="181" font-size="22" font-weight="700">78%</text>
    <text x="120" y="232" font-size="15" opacity="0.72">Share of surveyed organizations</text>
  </svg>
  <figcaption id="ai-adoption-caption">Source: Stanford HAI, <a href="https://hai.stanford.edu/ai-index/2025-ai-index-report">2025 AI Index</a>. The statistic measures reported use, not the success of an AI-first operating model.</figcaption>
</figure>

The design question is therefore larger than how many assistants a company can deploy. It is where repeatable execution should live, where human judgment is worth the most, and how authority can move without accountability disappearing.

<div class="chapter-tldr">
  <span class="chapter-tldr__label">In short</span>
  <p>AI use is spreading while the organizational question remains open. An AI-first company redesigns the route from request to outcome, placing agents in repeatable execution while people retain intent, judgment, and accountability.</p>
</div>

## Build around the outcome

Most organizations divide work into roles, queues, and handoffs. Adding an agent to one narrow task may make that task faster, but the request still waits for people to move it through the rest of the company. Local acceleration can leave the total outcome almost untouched.

[Anthropic's 2024 engineering guide](https://www.anthropic.com/engineering/building-effective-agents), published by the AI research company behind the Claude models, offers a useful distinction. Conventional workflows follow paths defined in code, while agents let a language model direct parts of the process and choose tools dynamically. A dependable operating model needs both: ordinary software should keep the known route stable, while an agent deals with the variation inside it.

<figure class="anthem-figure anthem-pyramids" aria-labelledby="pyramid-caption">
  <svg viewBox="0 0 960 430" role="img" aria-labelledby="pyramid-title pyramid-desc" style="width:100%;height:auto">
    <title id="pyramid-title">The retrofit trap and the AI-first company</title>
    <desc id="pyramid-desc">A downward-pointing triangle shows humans operating workflows across the wide top and AI agents confined to the bottom tip. An upward-pointing triangle shows agents operating workflows across the wide base and humans adding judgment at the top point.</desc>
    <text x="240" y="38" text-anchor="middle" font-size="22" font-weight="700">The retrofit trap</text>
    <polygon points="65,75 415,75 240,365" fill="#8A94A6" opacity="0.58"></polygon>
    <line x1="105" y1="145" x2="375" y2="145" stroke="#111827" stroke-width="2" opacity="0.55"></line>
    <text x="240" y="108" text-anchor="middle" font-size="18" font-weight="700" fill="#111827">Humans operate workflows</text>
    <text x="240" y="305" text-anchor="middle" font-size="17" font-weight="700" fill="#111827">AI agents</text>
    <text x="720" y="38" text-anchor="middle" font-size="22" font-weight="700">The AI-first company</text>
    <polygon points="545,365 895,365 720,75" fill="#2563EB" opacity="0.92"></polygon>
    <line x1="585" y1="295" x2="855" y2="295" stroke="white" stroke-width="2" opacity="0.75"></line>
    <text x="720" y="122" text-anchor="middle" font-size="18" font-weight="700" fill="white">Humans add judgment</text>
    <text x="720" y="333" text-anchor="middle" font-size="18" font-weight="700" fill="white">Agents operate workflows</text>
    <text x="240" y="405" text-anchor="middle" font-size="15" opacity="0.72">Agents are added to fragments of human-run work</text>
    <text x="720" y="405" text-anchor="middle" font-size="15" opacity="0.72">People concentrate on consequential decisions</text>
  </svg>
  <figcaption id="pyramid-caption">The inversion changes where work and judgment sit. Questions of staffing still depend on volume, risk, and the work itself.</figcaption>
</figure>

The left-hand shape is the retrofit trap: people still carry the workflow, while agents occupy small pockets at its edge. In the inverted shape, agents form the broad base of repeatable execution and human attention is concentrated where context, values, negotiation, or exception handling change the answer. The narrow top represents a sharper purpose for human involvement.

This also changes ownership. Someone must own the outcome across systems and departments rather than optimizing one task in isolation. Otherwise the agent inherits the old fragmentation and simply moves it faster. That owner also needs a way to express the agent's limits in a form the system can enforce.

<div class="chapter-tldr">
  <span class="chapter-tldr__label">In short</span>
  <p>The retrofit trap places agents inside fragments of work that people still have to carry. The stronger design gives agents a stable end-to-end route and concentrates human attention on the decisions where judgment changes the outcome.</p>
</div>

## Make authority executable

Once an agent can move work rather than merely describe it, authority becomes part of the system design. A prompt can tell a model what it should do, but it is a weak place to enforce what the model may do. The durable limit must sit in software and policy that the agent cannot rewrite for itself.

Consider supplier onboarding. An agent could request missing documents, compare names across approved sources, and prepare a supplier record. It should encounter an enforced checkpoint before changing bank details, accepting an unresolved ownership conflict, or approving an exception. The company also needs to know who can grant access, who can revoke it, and who can reverse a completed action.

<figure class="anthem-figure authority-record" aria-labelledby="authority-caption">
  <div class="authority-record__header">Authority record: supplier onboarding</div>
  <div class="anthem-table-scroll" style="overflow-x:auto;max-width:100%">
    <table>
      <thead>
        <tr><th>Decision</th><th>What the system records</th></tr>
      </thead>
      <tbody>
        <tr><td>Outcome</td><td>A complete supplier record backed by approved evidence</td></tr>
        <tr><td>Access</td><td>Business purpose, minimum permitted data, tools, model provider, and processing region</td></tr>
        <tr><td>Action</td><td>Fields the agent may write and changes that require approval</td></tr>
        <tr><td>Trace</td><td>Evidence used, action history, retention period, and named owner</td></tr>
        <tr><td>Recovery</td><td>How execution stops, how a change is reversed, and how supplier exit is tested</td></tr>
      </tbody>
    </table>
  </div>
  <figcaption id="authority-caption">A useful authority record joins technical permission, data boundaries, accountable ownership, recovery, and supplier dependency in one place.</figcaption>
</figure>

At runtime, the agent proposes an action and an independent control checks that record before anything is committed. If execution stops halfway, the workflow record should show which steps completed, block a blind repeat, and route the unfinished case to the named owner. These controls give auditors and leaders a concrete answer when they ask why an action was possible.

The [EU AI Act, Regulation (EU) 2024/1689](https://eur-lex.europa.eu/eli/reg/2024/1689/oj), is the European Union's 2024 risk-based law for AI systems, with stronger obligations for higher-risk uses. An internal authority record does not replace legal assessment. It does make a related design principle operational: as consequences rise, discretion should narrow, evidence should improve, and revocation should become faster.

<div class="chapter-tldr">
  <span class="chapter-tldr__label">In short</span>
  <p>Agent authority should be enforced outside the model and tied to data access, permitted actions, accountable owners, recovery, retention, and supplier exit. Greater consequence calls for tighter limits and stronger evidence.</p>
</div>

## Meanwhile in sci-fi

<div class="scifi">
  <span class="scifi__label">Meanwhile in sci-fi</span>
  <p class="scifi__film">Star Trek: The Next Generation (1987)</p>
  <p>The starship Enterprise gives specialists room to act at their stations because they share an operating picture and a clear command structure. The captain does not perform every task, but responsibility remains visible when local action affects the whole ship.</p>
</div>

The mapping is about coordinated authority. An AI-first company can distribute execution to agents only when people and systems share the state of the workflow, the limits of local action, and the path for escalation. Local autonomy without that common picture becomes hidden risk, and keeping the picture alive is a human capability problem as much as a control problem.

## Protect the supply of judgment

The inverted pyramid creates a quieter danger. Routine cases do double duty: they move the business and teach people what normal looks like. If agents absorb every ordinary case, newer colleagues may meet the process only when something has already gone wrong.

A company therefore has to produce judgment deliberately. People can review a rotating sample of ordinary cases, examine overrides with experienced operators, and move between automated and manual parts of the workflow. Employee representatives should be involved early when these choices change roles, monitoring, or routes into senior work. The goal is to keep expertise growing while the volume of manual execution falls.

In a public LinkedIn post, [Arvind KC](https://www.linkedin.com/feed/update/urn:li:activity:7485407006204493825/), Chief People Officer at OpenAI, the AI company behind ChatGPT, listed ten reflections from his first months at the company.

<figure class="anthem-figure source-artifact" aria-labelledby="arvind-caption">
  <a href="https://www.linkedin.com/feed/update/urn:li:activity:7485407006204493825/">
    <img src="/images/posts/arvind-kc-linkedin-post.jpg" alt="Screenshot of Arvind KC's public LinkedIn post listing ten reflections from his first months at OpenAI" loading="lazy" style="max-width:100%;height:auto">
  </a>
  <figcaption id="arvind-caption">Source artifact: Arvind KC's public post. It documents the ten written reflections; it does not establish that OpenAI uses the operating model proposed in this article.</figcaption>
</figure>

That modest distinction is useful. The act we can observe is that early impressions were written down under a named author rather than left as private intuition. Inside an operating workflow, the equivalent is a durable record of exceptions, overrides, and reasons that can be reviewed and taught. I think that record will matter as much for developing people as it does for auditing machines.

<div class="chapter-tldr">
  <span class="chapter-tldr__label">In short</span>
  <p>Automation can remove the routine exposure through which people learn. Preserve judgment with sampled case review, recorded overrides, experienced coaching, role rotation, and early employee involvement.</p>
</div>

## Let evidence change the shape

The inverted pyramid is a proposal. It should have organizational consequences only after it survives real operation. The evidence behind this argument does not include a measured Nordic production case, so certainty would be misplaced; the right response is a test that can fail clearly.

Choose one bounded workflow and a fixed test period. Record its baseline before adding agent execution, then agree on the limits that would trigger a pause. Quality, elapsed time, human review, rework, total cost, recovery, and staff learning all belong in the decision because a fast workflow that creates expensive exceptions or erodes control has not improved the business outcome.

<figure class="anthem-figure evidence-gate" aria-labelledby="evidence-caption">
  <div class="anthem-table-scroll" style="overflow-x:auto;max-width:100%">
    <table>
      <thead>
        <tr><th>Evidence</th><th>Question before expansion</th></tr>
      </thead>
      <tbody>
        <tr><td>Outcome</td><td>Did quality and completion improve against the recorded baseline?</td></tr>
        <tr><td>Human load</td><td>Did review, exceptions, and rework stay within the agreed limit?</td></tr>
        <tr><td>Full cost</td><td>Does cost include models, integration, oversight, failures, and recovery?</td></tr>
        <tr><td>Control</td><td>Can the owner stop, reverse, audit, and move away from the supplier?</td></tr>
        <tr><td>Capability</td><td>Are people still learning to judge ordinary and unusual cases?</td></tr>
      </tbody>
    </table>
  </div>
  <figcaption id="evidence-caption">The scale gate compares business outcomes, human load, economics, control, and learning. The decision needs the whole set rather than one productivity number.</figcaption>
</figure>

The workflow owner should make the local recommendation, while a standing portfolio owner compares evidence across business units at a fixed cadence. A pattern earns replication only when the next unit accepts the same measurement contract, names its accountable owner, and proves its own baseline. If quality misses the agreed floor, review demand exceeds the limit, or recovery cannot be demonstrated, authority stops expanding.

The org chart should be the last artifact to change. First prove that the work, authority, economics, recovery, and learning can hold together. When that evidence survives across different workflows, the pyramid begins to turn because the company underneath it has already changed.

<div class="chapter-tldr">
  <span class="chapter-tldr__label">In short</span>
  <p>Treat the inverted pyramid as a falsifiable operating hypothesis. Scale it only when a bounded workflow beats its baseline, stays within review and cost limits, remains reversible, preserves learning, and passes the same evidence gate in another setting.</p>
</div>
