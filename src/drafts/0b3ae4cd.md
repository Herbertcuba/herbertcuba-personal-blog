---
title: "The AI-first company is an inverted pyramid"
excerpt: "AI adoption will not redesign a company by itself. The deeper change comes when agents carry repeatable workflows at the base and people concentrate judgment, direction, and accountability at the top."
tldr: "An AI-first company moves repeatable workflow execution onto a governed agent layer while people retain judgment and accountability. That inversion requires machine-enforced authority, named decision owners, sustained human learning, and proof gates that can stop the model as readily as expand it."
provenance: verified-by-author
anthem: true
image: "/images/posts/architecture-ai-first-company.webp"
featuredImage: "/images/posts/architecture-ai-first-company.webp"
image_alt: "Two contrasting organizational triangles showing the retrofit trap and an AI-first company"
permalink: /drafts/0b3ae4cd/
layout: post.njk
date: 2026-08-20
---

AI adoption has outrun organization design. The [2025 AI Index from Stanford University's Institute for Human-Centered Artificial Intelligence](https://hai.stanford.edu/ai-index/2025-ai-index-report), an annual review of AI research and use, found that 78% of surveyed organizations reported using AI in 2024, up from 55% the year before. That measures diffusion. It tells us much less about who carries a piece of work, who may act, and who answers when the outcome is wrong.

The common pattern is still to place AI inside a human-led process. People move work between systems and approvals, while an assistant drafts, searches, or summarizes along the way. The technology may improve individual tasks without changing the coordination that surrounds them.

I think an AI-first company starts from a different shape. A workflow, meaning the full path from a trigger to an accepted business result, becomes the basic unit of design. An AI agent becomes one possible actor in that path: software in which a large language model, the kind of AI that interprets and produces language, selects among permitted actions and tools as conditions change.

<figure class="anthem-visual">
<svg viewBox="0 0 1000 470" role="img" aria-labelledby="pyramid-title pyramid-desc" xmlns="http://www.w3.org/2000/svg">
  <title id="pyramid-title">The retrofit trap and the AI-first company</title>
  <desc id="pyramid-desc">A downward-pointing triangle shows humans carrying broad workflows with AI agents added at the narrow bottom. An upward-pointing triangle shows agents carrying broad workflows at the base with humans adding judgment at the narrow top.</desc>
  <rect x="0" y="0" width="1000" height="470" rx="20" fill="#f6f7f9"/>
  <text x="250" y="46" text-anchor="middle" font-family="system-ui, sans-serif" font-size="25" font-weight="700" fill="#18202a">The retrofit trap</text>
  <text x="750" y="46" text-anchor="middle" font-family="system-ui, sans-serif" font-size="25" font-weight="700" fill="#18202a">The AI-first company</text>
  <polygon points="70,90 430,90 250,410" fill="#d9e6f5" stroke="#5076a1" stroke-width="3"/>
  <line x1="142" y1="220" x2="358" y2="220" stroke="#5076a1" stroke-width="2"/>
  <text x="250" y="137" text-anchor="middle" font-family="system-ui, sans-serif" font-size="21" font-weight="650" fill="#18202a">Humans carry</text>
  <text x="250" y="165" text-anchor="middle" font-family="system-ui, sans-serif" font-size="21" font-weight="650" fill="#18202a">the workflows</text>
  <text x="250" y="276" text-anchor="middle" font-family="system-ui, sans-serif" font-size="18" fill="#18202a">AI agents assist</text>
  <text x="250" y="301" text-anchor="middle" font-family="system-ui, sans-serif" font-size="18" fill="#18202a">selected tasks</text>
  <path d="M472 245 H528" stroke="#8b5e34" stroke-width="4" stroke-linecap="round"/>
  <path d="M518 233 L532 245 L518 257" fill="none" stroke="#8b5e34" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
  <polygon points="750,88 570,410 930,410" fill="#dcefdc" stroke="#4f8152" stroke-width="3"/>
  <line x1="680" y1="215" x2="820" y2="215" stroke="#4f8152" stroke-width="2"/>
  <text x="750" y="143" text-anchor="middle" font-family="system-ui, sans-serif" font-size="20" font-weight="650" fill="#18202a">Humans add</text>
  <text x="750" y="170" text-anchor="middle" font-family="system-ui, sans-serif" font-size="20" font-weight="650" fill="#18202a">judgment</text>
  <text x="750" y="295" text-anchor="middle" font-family="system-ui, sans-serif" font-size="21" font-weight="650" fill="#18202a">Agents carry</text>
  <text x="750" y="324" text-anchor="middle" font-family="system-ui, sans-serif" font-size="21" font-weight="650" fill="#18202a">the workflows</text>
</svg>
<figcaption>The inversion changes where execution happens. It does not predict a headcount ratio or place every human in one management tier.</figcaption>
</figure>

The point at the top represents scarce judgment, not corporate rank. It can include a frontline specialist resolving an unusual case, a product owner changing the outcome, or a control function stopping unsafe action. The wide base represents the repeatable flow that agents can carry when their permissions and limits are explicit.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>AI-first is an allocation of execution and authority: agents carry repeatable flow, while people own the judgment and accountability that cannot be delegated.</p></div>

## Make the workflow the unit of design

An org chart shows who reports to whom, but work rarely respects those boxes. Consider a product return. One request can touch the storefront, order history, warehouse, payment service, fraud checks, customer support, and finance. Adding an assistant to the support team leaves that chain intact; designing the return itself as a governed workflow changes it.

[Anthropic](https://www.anthropic.com/engineering/building-effective-agents), the AI company that develops the [Claude family of language models](https://www.anthropic.com/claude), drew a useful technical distinction in its 2024 engineering guide. It described workflows as systems that follow paths defined in code, while agents let a language model choose parts of the process and its tools dynamically. A dependable operating model needs both.

<figure class="anthem-visual">
<svg viewBox="0 0 1000 300" role="img" aria-labelledby="flow-title flow-desc" xmlns="http://www.w3.org/2000/svg">
  <title id="flow-title">A governed product-return workflow</title>
  <desc id="flow-desc">A customer request passes through rule-based checks, agent interpretation, a policy gate, and then either a committed action or human review.</desc>
  <rect x="0" y="0" width="1000" height="300" rx="20" fill="#f6f7f9"/>
  <g font-family="system-ui, sans-serif" fill="#18202a" text-anchor="middle">
    <rect x="25" y="95" width="150" height="105" rx="14" fill="#ffffff" stroke="#66788a" stroke-width="2"/>
    <text x="100" y="136" font-size="18" font-weight="650"><tspan x="100">Customer</tspan><tspan x="100" dy="25">request</tspan></text>
    <rect x="220" y="95" width="160" height="105" rx="14" fill="#e4edf7" stroke="#5076a1" stroke-width="2"/>
    <text x="300" y="124" font-size="17" font-weight="650"><tspan x="300">Rule-based</tspan><tspan x="300" dy="24">order and policy</tspan><tspan x="300" dy="24">checks</tspan></text>
    <rect x="425" y="95" width="160" height="105" rx="14" fill="#dcefdc" stroke="#4f8152" stroke-width="2"/>
    <text x="505" y="124" font-size="17" font-weight="650"><tspan x="505">Agent interprets</tspan><tspan x="505" dy="24">the reason and</tspan><tspan x="505" dy="24">chooses a route</tspan></text>
    <rect x="630" y="95" width="150" height="105" rx="14" fill="#f4e8d7" stroke="#8b6b3f" stroke-width="2"/>
    <text x="705" y="136" font-size="17" font-weight="650"><tspan x="705">Permission</tspan><tspan x="705" dy="24">check</tspan></text>
    <rect x="825" y="70" width="150" height="80" rx="14" fill="#ffffff" stroke="#4f8152" stroke-width="2"/>
    <text x="900" y="103" font-size="16" font-weight="650"><tspan x="900">Record the</tspan><tspan x="900" dy="22">approved action</tspan></text>
    <rect x="825" y="180" width="150" height="80" rx="14" fill="#ffffff" stroke="#a5564f" stroke-width="2"/>
    <text x="900" y="213" font-size="16" font-weight="650"><tspan x="900">Route conflict</tspan><tspan x="900" dy="22">to a person</tspan></text>
  </g>
  <g stroke="#66788a" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path d="M175 147 H220"/><path d="M210 139 L220 147 L210 155"/>
    <path d="M380 147 H425"/><path d="M415 139 L425 147 L415 155"/>
    <path d="M585 147 H630"/><path d="M620 139 L630 147 L620 155"/>
    <path d="M780 132 H805 V110 H825"/><path d="M815 102 L825 110 L815 118"/>
    <path d="M780 164 H805 V220 H825"/><path d="M815 212 L825 220 L815 228"/>
  </g>
</svg>
<figcaption>The language model handles ambiguity inside a path whose state changes remain governed by ordinary software.</figcaption>
</figure>

In this example, deterministic software, meaning rule-based code that applies explicit conditions, checks whether the order exists, whether the return window is open, and how much may be refunded. The agent can interpret a messy explanation and assemble the next permitted step. It cannot invent a new refund policy or silently mark an uncertain payment as complete. A conflict goes to a person with the relevant authority.

This division matters because flexibility and control come from different parts of the system. The model helps the workflow cope with varied language and context. Code keeps the authoritative state and enforces the boundary. Once that mechanism works, the company can organize around outcomes rather than keeping people as connective tissue between applications.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>The workflow becomes the unit of design when agents handle variation inside code-defined paths, while authoritative systems continue to enforce state, policy, and escalation.</p></div>

## Put authority into the system

A job description cannot govern software at the moment it acts. For that, the workflow needs an authority contract: a machine-enforced record of which actor may request which change, under what limits, using what evidence, and with which fallback. The agent proposes a permitted transition; a policy check validates its identity, the current state, and the limit before the business system records the result.

Technical enforcement still needs human decision rights around it. Otherwise everyone can be accountable in principle while nobody can pause the workflow under pressure. A compact ownership map makes the boundary visible before live authority begins.

<figure class="decision-map">
<table>
  <thead>
    <tr><th>Decision</th><th>Named owner</th><th>Right that must be explicit</th></tr>
  </thead>
  <tbody>
    <tr><td>Define the outcome</td><td>Business process owner</td><td>Sets acceptance criteria and owns the remaining business risk after controls.</td></tr>
    <tr><td>Grant or revoke agent access</td><td>CIO control owner</td><td>Issues tool permissions, can pause the agent layer, and can revoke its identity.</td></tr>
    <tr><td>Set legal, security, data, and people conditions</td><td>Control functions and employee consultation forum</td><td>Records conditions and unresolved objections before a new action type or workforce group enters scope.</td></tr>
    <tr><td>Contain a live incident</td><td>Operations duty owner</td><td>Pauses immediately and starts reconciliation without waiting for committee consensus.</td></tr>
    <tr><td>Expand, repeat, or retire</td><td>Portfolio council chaired by the accountable executive</td><td>Makes the final decision; authority stays at its current level while a control objection remains unresolved.</td></tr>
  </tbody>
</table>
<figcaption>Accountability becomes usable when each decision has an owner and each owner has an enforceable right.</figcaption>
</figure>

The consequence of an action should determine the strength of this contract. The [EU AI Act, Regulation (EU) 2024/1689](https://eur-lex.europa.eu/eli/reg/2024/1689/oj), is the European Union's 2024 risk-based law for AI systems and places stronger obligations on higher-risk uses. It does not supply an operating model for every company, but it reinforces the need to distinguish a reversible low-value action from one affecting safety, employment, credit, or another consequential outcome. Legal, privacy, security, procurement, and worker-consultation duties still require assessment in the actual setting.

The narrow top of the pyramid therefore carries real power. People can change the goal, resolve conflicts between valid rules, restrict an agent's reach, or stop the workflow. Calling them supervisors without giving them those rights would preserve the old org chart while weakening control.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Agent autonomy becomes governable only when runtime permissions and human decision rights agree on who may act, who may pause, who may revoke, and who makes the final call.</p></div>

## Meanwhile in sci-fi

<div class="scifi">
<span class="scifi__label">Meanwhile in sci-fi</span>
<p class="scifi__film">Star Trek: The Next Generation (1987)</p>
<p><a href="https://www.startrek.com/en-un/series/star-trek-the-next-generation">Star Trek: The Next Generation</a> is a fictional television series that ran from 1987 to 1994 and follows the crew of the starship Enterprise. Its officers work from distinct stations with local responsibilities, while the mission state and command boundary remain shared. They can act within a role because they also know when a consequence must move to Captain Jean-Luc Picard or another responsible officer.</p>
</div>

The useful mapping is the pairing of local permission with a common picture of the system. Agents need current state and machine-readable limits so that a locally sensible step does not damage the wider workflow. People need enough understanding across specialties to recognize conflicts, alter the mission, and intervene before several individually valid actions combine into a bad result.

## Human judgment needs a practice

Moving people out of routine handling creates a less obvious risk: judgment can weaken when it is separated from the cases that once developed it. If humans see only rare exceptions, they may lose the ordinary context needed to tell a harmless variation from an early warning. The human layer therefore needs deliberate contact with the system it governs.

That contact can come from replaying recorded cases, reviewing near misses, tracing why an agent escalated, and revising the rules that shaped its options. These are not status meetings. They are how people maintain practical skill while turning individual observations into changes the whole workflow can use.

<figure class="source-artifact">
  <a href="https://www.linkedin.com/feed/update/urn:li:activity:7485407006204493825/"><img src="/images/posts/arvind-kc-linkedin-post.jpg" alt="Screenshot of Arvind KC's LinkedIn post listing ten reflections from his first months at OpenAI"></a>
  <figcaption>Arvind KC, Chief People Officer at OpenAI, the AI company behind ChatGPT, used this public LinkedIn post to record ten reflections from his first months at the company. The supplied screenshot documents those written reflections; it does not establish OpenAI's operating model.</figcaption>
</figure>

The artifact is relevant for a narrow reason. A senior people leader took observations that could have remained private and turned them into ten visible statements that others could inspect and challenge. In an agent-led workflow, that act of synthesis becomes core human work: name what the system is teaching, decide whether it changes policy, and make the reasoning available to the next person.

Production learning needs more structure than a public reflection post. Reviewers should work through representative cases, practice recovery during simulations, and periodically edit the authority contract itself. Otherwise approval remains formal while the skill behind it decays.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>People retain meaningful judgment by staying close to cases, converting observations into shared rules, and rehearsing the interventions they may one day need to make.</p></div>

## Prove the shape before changing the company

The sources cited here do not prove that a Nordic enterprise should adopt an inverted organization at scale. Stanford measures AI use, Anthropic explains engineering patterns, and the EU AI Act defines legal obligations. None provides a comparable production case with a baseline, failure record, tested rollback, and complete cost model. The board should therefore treat the inverted pyramid as a proposal with rejection criteria agreed in advance.

Start with a workflow that is frequent enough to measure, has an agreed definition of a correct result, and contains actions that can be reversed. Keep a workflow human-led when it depends on consequential judgment at nearly every step, lacks a trustworthy baseline, has too little volume to learn from, includes non-reversible actions, or cannot fit its data and workforce conditions into a clear authority contract.

<figure class="portfolio-gates">
<table>
  <thead>
    <tr><th>Gate</th><th>Required evidence</th><th>Decision forum</th></tr>
  </thead>
  <tbody>
    <tr><td>Candidate screen</td><td>Baseline, sufficient volume, reversible actions, and acceptable data and workforce conditions.</td><td>Portfolio owner with business and control owners.</td></tr>
    <tr><td>Recorded-case replay</td><td>Past cases rerun without live action; failures, human-review demand, and policy gaps logged.</td><td>Business owner and independent reviewer.</td></tr>
    <tr><td>Bounded live use</td><td>Limited population and value; pause and revocation tested; procurement owner completes a supplier-exit rehearsal; consultation decision recorded.</td><td>Operations owner with control functions.</td></tr>
    <tr><td>Independent repeat</td><td>A different team applies the pattern without hidden support from the original builders.</td><td>Portfolio council.</td></tr>
    <tr><td>Adopt or retire</td><td>Quality, intervention load, recovery, and full cost per correctly completed case beat the agreed baseline.</td><td>Accountable executive with the portfolio council.</td></tr>
  </tbody>
</table>
<figcaption>Each gate can widen authority, hold it steady, or end the attempt. Progress is a decision, not the default.</figcaption>
</figure>

Full cost per correctly completed case means all model, software, human-review, control, incident, and supplier costs divided by the cases that meet the agreed quality threshold. That denominator matters. A cheap agent that creates expensive correction work has not improved the workflow, even if its model cost and response time look impressive.

If the evidence fails, the company can narrow the permission, redesign the path, keep the work human-led, or retire the attempt. If it holds under an independent repeat, the board has a defensible reason to widen the agent base. The shape changes one enforceable permission at a time, while people retain the power and the practiced skill to change direction or stop the system.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Treat the inverted pyramid as a falsifiable operating hypothesis: select suitable workflows, test control and exit before expansion, compare full cost per correctly completed case, and scale only what another team can repeat.</p></div>
