---
title: "The AI-first company turns the organization upside down"
description: "Agents can change the operating model only when workflow authority, evidence, governance, and human learning are redesigned together."
tldr: "An AI-first company lets agents and conventional software carry repeatable workflows within fixed, rule-based controls, while people concentrate on judgment, exceptions, learning, and accountability. The organization should change only after this model has survived production across more than one workflow."
image: "/images/posts/architecture-ai-first-company.webp"
anthem: true
provenance: "verified-by-author"
permalink: /drafts/0b3ae4cd/
layout: post.njk
date: 2026-08-17
---

Most organizations are using AI to accelerate a task while leaving the costliest part of work intact. A model drafts an answer or classifies a case, then people still route it, secure approval, correct missing context, update systems, and carry responsibility when something goes wrong. The task moves faster, but the surrounding workflow barely changes.

Here, an **AI agent** is software that can interpret a goal, choose among permitted actions, use tools, and continue through several steps. A **workflow** is the full path from a real event, such as a customer request or supply interruption, to a result the business is willing to accept. If an agent occupies only one narrow task inside that path, the company remains human-coordinated even when that task is highly automated.

I think AI-first should describe a different allocation of work. Agents and conventional software carry repeatable execution inside explicit limits; people provide judgment, handle difficult exceptions, improve the system, and remain responsible for results. That allocation may eventually change teams and roles, but the organization should follow evidence from production rather than move ahead of it.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>AI-first becomes an operating model only when agents can carry a governed workflow from trigger to accepted result and people move toward judgment, recovery, and accountability.</p>
</div>

## Reorganization is a claim that needs proof

A capable demonstration can make the current org chart look obsolete overnight. Yet a demonstration answers a narrow question: can the system complete selected cases under chosen conditions? Reassigning budgets, roles, or accountability makes a much larger claim that the design will hold under ordinary volume, messy exceptions, outages, model changes, staff turnover, and audit.

The evidence should therefore accumulate before the structure moves.

<figure class="anthem-visual">
<svg viewBox="0 0 1050 470" role="img" aria-labelledby="evidence-title evidence-desc" style="width:100%;height:auto">
  <title id="evidence-title">The evidence sequence from demonstration to organizational change</title>
  <desc id="evidence-desc">Evidence progresses from a selected demonstration to a bounded trial, managed production, and a reusable pattern across at least two workflows before organizational structure changes.</desc>
  <rect x="0" y="0" width="1050" height="470" rx="24" fill="#f7f7f5"/>
  <g font-family="system-ui, sans-serif">
    <rect x="55" y="315" width="190" height="90" rx="12" fill="#e6ebef" stroke="#49687b" stroke-width="2"/>
    <text x="150" y="345" text-anchor="middle" font-size="19" font-weight="700" fill="#263d4a">DEMONSTRATION</text>
    <text x="150" y="373" text-anchor="middle" font-size="15" fill="#263d4a">selected cases work</text>
    <rect x="275" y="245" width="190" height="160" rx="12" fill="#dce9e2" stroke="#3b6f53" stroke-width="2"/>
    <text x="370" y="278" text-anchor="middle" font-size="19" font-weight="700" fill="#244633">BOUNDED TRIAL</text>
    <text x="370" y="308" text-anchor="middle" font-size="15" fill="#244633">baseline + limits</text>
    <text x="370" y="332" text-anchor="middle" font-size="15" fill="#244633">stop conditions</text>
    <rect x="495" y="165" width="210" height="240" rx="12" fill="#d7e5ef" stroke="#35627f" stroke-width="2"/>
    <text x="600" y="198" text-anchor="middle" font-size="19" font-weight="700" fill="#213f52">MANAGED PRODUCTION</text>
    <text x="600" y="229" text-anchor="middle" font-size="15" fill="#213f52">owner + budget</text>
    <text x="600" y="253" text-anchor="middle" font-size="15" fill="#213f52">support + recovery</text>
    <text x="600" y="277" text-anchor="middle" font-size="15" fill="#213f52">measured outcomes</text>
    <rect x="735" y="75" width="255" height="330" rx="12" fill="#eee4cc" stroke="#866a2d" stroke-width="2"/>
    <text x="862" y="110" text-anchor="middle" font-size="19" font-weight="700" fill="#54431d">PORTFOLIO EVIDENCE</text>
    <text x="862" y="142" text-anchor="middle" font-size="15" fill="#54431d">2+ different workflows</text>
    <text x="862" y="166" text-anchor="middle" font-size="15" fill="#54431d">share controls + support</text>
    <text x="862" y="190" text-anchor="middle" font-size="15" fill="#54431d">survive a business cycle</text>
    <line x1="862" y1="225" x2="862" y2="300" stroke="#866a2d" stroke-width="3"/>
    <polygon points="854,300 870,300 862,316" fill="#866a2d"/>
    <text x="862" y="350" text-anchor="middle" font-size="20" font-weight="700" fill="#54431d">STRUCTURAL DECISION</text>
  </g>
</svg>
<figcaption>A practical decision gate, rather than an industry benchmark: prove one workflow, operate it, then show that the control pattern travels.</figcaption>
</figure>

A useful trial starts with a baseline for the same work. It measures completed business results, elapsed time, human minutes per case, exception and rework rates, total cost including review, and time to recover from failure. Limits and stop conditions are agreed in advance. Faster model output means little if employees spend the saved time checking every result or repairing downstream systems.

My minimum **portfolio evidence gate**, the threshold for considering role or reporting-line changes, would require at least two meaningfully different workflows in managed production. Both should meet their agreed targets over a relevant business cycle and use a repeatable control and recovery pattern. They also need permanent owners, funding, support coverage, and a decision forum that includes business, technology, risk, finance, and workforce interests. This is a decision rule rather than a universal law, but it prevents one successful workflow from becoming a company-wide assumption.

External case studies can help leaders ask better questions. They cannot tell a company whether coordination load, review effort, total workflow cost, and recovery performance improved in its own environment. That internal proof is what earns a structural decision.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>A successful demonstration supports another test, not a reorganization. Structural change becomes defensible when multiple production workflows share a measured, funded, and recoverable operating pattern.</p>
</div>

## The unit of design is the workflow

Once the burden of proof is clear, leaders still have to choose what they are testing. A task is too narrow because it hides the handoffs around it, while a job is often too broad to give the system a clear result. The workflow is the useful unit because it connects a real trigger, a business result, the necessary decisions, and the people who accept responsibility.

Retrofitting begins with the company as it already exists. Each function gets an assistant, people become quicker at local tasks, and the handoffs between functions remain untouched. An employee may draft a response in seconds and then wait for access, approval, clarification, or another team to update the authoritative business system.

That design creates a downward-pointing triangle. A broad layer of people carries the workflow, including its coordination and repair, while AI sits at the narrow tip as a task-level aid. The technology is busy, yet scarce human attention remains trapped in movement rather than judgment.

<figure class="anthem-visual">
<svg viewBox="0 0 1000 500" role="img" aria-labelledby="triangle-title triangle-desc" style="width:100%;height:auto">
  <title id="triangle-title">The retrofit trap and the AI-first operating model</title>
  <desc id="triangle-desc">The retrofit triangle points down, with humans carrying workflows above a small AI task layer. The AI-first triangle points up, with agents carrying governed workflows below human judgment.</desc>
  <rect x="0" y="0" width="1000" height="500" rx="24" fill="#f7f7f5"/>
  <text x="250" y="55" text-anchor="middle" font-family="system-ui, sans-serif" font-size="26" font-weight="700" fill="#202124">Retrofit trap</text>
  <text x="750" y="55" text-anchor="middle" font-family="system-ui, sans-serif" font-size="26" font-weight="700" fill="#202124">AI-first flow</text>
  <polygon points="70,105 430,105 250,420" fill="#f1c7bd" stroke="#8f3f32" stroke-width="3"/>
  <text x="250" y="165" text-anchor="middle" font-family="system-ui, sans-serif" font-size="23" font-weight="700" fill="#51231d">Humans run workflows</text>
  <text x="250" y="198" text-anchor="middle" font-family="system-ui, sans-serif" font-size="18" fill="#51231d">handoffs, approvals, recovery</text>
  <text x="250" y="370" text-anchor="middle" font-family="system-ui, sans-serif" font-size="19" font-weight="700" fill="#51231d">AI task</text>
  <polygon points="570,420 930,420 750,105" fill="#c9dfd4" stroke="#2f6f57" stroke-width="3"/>
  <text x="750" y="158" text-anchor="middle" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#194532">Human judgment</text>
  <text x="750" y="335" text-anchor="middle" font-family="system-ui, sans-serif" font-size="23" font-weight="700" fill="#194532">Agents run workflows</text>
  <text x="750" y="368" text-anchor="middle" font-family="system-ui, sans-serif" font-size="18" fill="#194532">within explicit controls</text>
  <text x="500" y="465" text-anchor="middle" font-family="system-ui, sans-serif" font-size="17" fill="#5f6368">The geometry shows the allocation of work, not headcount or status.</text>
</svg>
<figcaption>Turning the triangle changes the default carrier of repeatable work. It does not remove human ownership.</figcaption>
</figure>

The upward triangle is a flow model, not a forecast that people will shrink to a tiny executive class. Its broad base represents agents and ordinary software handling routine volume. Human attention sits at the point of greatest consequence, where context, trade-offs, exceptions, and accountability become decisive.

The practical test is simple: who carries the end-to-end work? If people still bridge every system boundary and repair every ordinary exception, the organization has installed useful AI without changing its operating model.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>The retrofit trap makes individual tasks faster while people continue to carry coordination. An AI-first design moves repeatable workflow execution to governed software and reserves human attention for consequential choices.</p>
</div>

## Authority must be encoded

Putting an entire workflow into software exposes controls that were previously carried in human habit. A **workflow state** is a recorded stage such as proposed, authorized, or completed. A **decision right** is permission to make or execute a particular choice at one of those stages. It must be attached to a risk limit and an accountable owner rather than inferred from a model's confidence.

Consider a warranty-replacement workflow. An agent can read the customer's request, retrieve the order, compare the claim with published warranty terms, and propose a replacement. A policy engine, which is ordinary software that checks explicit rules, can verify the purchase window, product eligibility, value limit, and whether the order has already been replaced. Only then may a narrowly authorized service create the shipment. Ambiguous claims, unusual values, and conflicting records go to a person with the authority to resolve them.

<figure class="anthem-visual">
<svg viewBox="0 0 1100 390" role="img" aria-labelledby="state-title state-desc" style="width:100%;height:auto">
  <title id="state-title">A state and permission contract for an agent-run workflow</title>
  <desc id="state-desc">The agent may turn a received request into a proposal. A rule or person authorizes it, a limited executor commits it, and the system confirms it. A direct jump from proposal to committed action is rejected.</desc>
  <defs>
    <marker id="arrow" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L0,6 L9,3 z" fill="#365b74"/>
    </marker>
    <marker id="arrow-red" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L0,6 L9,3 z" fill="#a23b32"/>
    </marker>
  </defs>
  <rect x="0" y="0" width="1100" height="390" rx="24" fill="#f7f7f5"/>
  <g font-family="system-ui, sans-serif" text-anchor="middle">
    <rect x="25" y="90" width="180" height="105" rx="14" fill="#e8eef2" stroke="#365b74" stroke-width="2"/>
    <text x="115" y="125" font-size="18" font-weight="700" fill="#203746">REQUEST RECEIVED</text>
    <text x="115" y="158" font-size="15" fill="#203746">system records input</text>
    <rect x="240" y="90" width="180" height="105" rx="14" fill="#e8eef2" stroke="#365b74" stroke-width="2"/>
    <text x="330" y="125" font-size="18" font-weight="700" fill="#203746">PROPOSED</text>
    <text x="330" y="158" font-size="15" fill="#203746">agent may write</text>
    <rect x="455" y="90" width="180" height="105" rx="14" fill="#e7f0e9" stroke="#39724d" stroke-width="2"/>
    <text x="545" y="125" font-size="18" font-weight="700" fill="#244b32">AUTHORIZED</text>
    <text x="545" y="158" font-size="15" fill="#244b32">rule or person approves</text>
    <rect x="670" y="90" width="180" height="105" rx="14" fill="#e7f0e9" stroke="#39724d" stroke-width="2"/>
    <text x="760" y="125" font-size="18" font-weight="700" fill="#244b32">COMMITTED</text>
    <text x="760" y="158" font-size="15" fill="#244b32">limited service acts</text>
    <rect x="885" y="90" width="180" height="105" rx="14" fill="#efe9f3" stroke="#6c4b7c" stroke-width="2"/>
    <text x="975" y="125" font-size="18" font-weight="700" fill="#493354">CONFIRMED</text>
    <text x="975" y="158" font-size="15" fill="#493354">result and owner recorded</text>
  </g>
  <line x1="205" y1="143" x2="232" y2="143" stroke="#365b74" stroke-width="3" marker-end="url(#arrow)"/>
  <line x1="420" y1="143" x2="447" y2="143" stroke="#365b74" stroke-width="3" marker-end="url(#arrow)"/>
  <line x1="635" y1="143" x2="662" y2="143" stroke="#365b74" stroke-width="3" marker-end="url(#arrow)"/>
  <line x1="850" y1="143" x2="877" y2="143" stroke="#365b74" stroke-width="3" marker-end="url(#arrow)"/>
  <path d="M330,215 C420,320 665,320 760,215" fill="none" stroke="#a23b32" stroke-width="3" stroke-dasharray="8 7" marker-end="url(#arrow-red)"/>
  <text x="545" y="335" text-anchor="middle" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#8a3029">REJECTED: the agent cannot skip authorization</text>
</svg>
<figcaption>The agent can create a proposal. A separate, rule-based control decides whether it may create a real-world effect.</figcaption>
</figure>

The workflow must also preserve what happened. **Durable execution** means saving state so a long-running process can resume after interruption without losing its place. Temporal and Cadence are workflow platforms built around this established engineering discipline; agents do not replace it. Safe recovery also needs versioned instructions and digital credentials limited to one job, which an owner can revoke. It also needs **idempotency**, meaning the same operation can be retried without creating a duplicate shipment or payment.

These controls turn autonomy from a broad promise into a bounded permission. Every action should be reconstructable from a recorded step-by-step history, and every consequential workflow should have a person who can pause it and accept responsibility for the result.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>Agent autonomy is a set of explicit permissions over known workflow states. Proposals, authorization, execution, records, recovery, and shutdown authority must be separated before software can safely carry the flow.</p>
</div>

## Control extends beyond the software

Even well-designed workflow software sits inside a company, a legal environment, and a chain of suppliers. Each consequential step needs a rule, a record, an accountable control owner, and a way to stop or reverse the process.

For a European organization, this includes mapping each use case against the **EU AI Act**, the European Union's risk-based rules for AI systems, and the **General Data Protection Regulation (GDPR)**, its data-protection law. The obligations depend on the use case and data involved, so legal and privacy owners must make that assessment. The delivery team should not bury it inside a general claim that a platform is compliant.

<figure class="anthem-visual">
<table class="control-map">
  <caption>An ownership map for an agent-run workflow</caption>
  <thead>
    <tr>
      <th scope="col">Control area</th>
      <th scope="col">What must be explicit</th>
      <th scope="col">Accountable owner</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>AI risk and process</td>
      <td>Use-case classification, accepted result, human oversight, exception path, required records</td>
      <td>Business owner with legal or risk</td>
    </tr>
    <tr>
      <td>Privacy</td>
      <td>Allowed personal data, purpose, where it may be stored or processed, retention, deletion</td>
      <td>Privacy owner</td>
    </tr>
    <tr>
      <td>Security</td>
      <td>Limited credentials, secrets, revocation, incident threshold, shutdown authority</td>
      <td>Security owner</td>
    </tr>
    <tr>
      <td>Finance</td>
      <td>Spend and transaction limits, reconciliation, loss handling</td>
      <td>Financial control owner</td>
    </tr>
    <tr>
      <td>Workforce</td>
      <td>Changed tasks, training, review capacity, escalation staffing, employee involvement</td>
      <td>Line leader with people function</td>
    </tr>
    <tr>
      <td>Supplier</td>
      <td>Data use and location, model changes, service levels, recorded-history retention, audit, pricing, exit support</td>
      <td>Technology owner with procurement</td>
    </tr>
  </tbody>
</table>
<figcaption>The map connects each control to a named owner. Applicability and detail still depend on the workflow.</figcaption>
</figure>

The supplier row deserves particular attention because the contract becomes part of the operating architecture. Leaders need notice and approval rights for material model changes, access to the records required for investigation, clear service-failure and incident thresholds, and a tested route to another provider or an internal fallback. If the organization cannot preserve state, revoke access, or stop the workflow when a supplier fails, it does not control the process it is accountable for.

This makes governance local enough to operate at machine speed while keeping responsibility visible. The ownership map should sit beside the workflow design and production metrics, not in a separate presentation that nobody consults during an incident.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>Governance becomes operational when every workflow connects permissions, records, legal and data boundaries, supplier terms, recovery, and shutdown authority to named owners.</p>
</div>

## Judgment needs a deliberate learning path

The workforce row is more than a compliance item. Moving routine work to agents changes how people gain the judgment that the new design expects them to provide.

Arvind KC, Chief People Officer at OpenAI, an AI research and product company, published a public LinkedIn post with ten numbered reflections from his first months there. He opens with: “It has been a few months for me at OpenAI.” The screenshot cannot tell us whether any workflow improved. Its narrower value is organizational: the head of people at a company developing advanced AI is publicly reflecting on the conditions around the work. That keeps people design inside the technology discussion.

<figure class="anthem-visual">
  <img src="arvind-kc-linkedin-post.jpg" alt="Screenshot of Arvind KC's LinkedIn post showing ten numbered reflections from his first months at OpenAI." loading="lazy">
  <figcaption>Source artifact: <a href="https://www.linkedin.com/feed/update/urn:li:activity:7485407006204493825/">Arvind KC's public LinkedIn post</a>. It documents one people leader's reflections; it is not a performance study.</figcaption>
</figure>

As agents take on routine cases, organizations risk removing some of the work through which people used to build judgment. New employees often learn by handling ordinary cases, seeing corrections, and gradually encountering exceptions. If all of that disappears behind an automated workflow, the company may gain immediate capacity while weakening the path that produces future experts.

The learning system therefore has to be designed with the workflow. Junior employees can review a selected set of recorded, step-by-step workflow histories, investigate exceptions, compare proposed and accepted decisions, and practice recovery in simulations before receiving broader decision rights. Senior specialists should spend less time moving cases and more time improving policies, teaching judgment, and examining where the system behaves unexpectedly.

There is also a capacity limit. A workflow should receive no more autonomy than the organization can safely review, recover, and learn from. Employee involvement is practical here because the people doing the work know where unofficial repairs, missing context, and fragile handoffs live. Leaving them out produces a clean diagram and a brittle operating system.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>When agents absorb routine execution, the company must deliberately rebuild apprenticeship, expert feedback, and recovery capacity. Otherwise today's efficiency can weaken tomorrow's judgment.</p>
</div>

## Meanwhile in sci-fi

<div class="scifi">
<span class="scifi__label">Meanwhile in sci-fi</span>
<p class="scifi__film">Star Trek: The Next Generation (1987)</p>
<p><em>Star Trek: The Next Generation</em> is a science-fiction television series that ran from 1987 to 1994 aboard the fictional starship Enterprise. The useful mapping is the bridge's shared operating picture: specialists can act in their own domains because system state, authority, and escalation are visible to the people carrying responsibility. An AI-first company needs comparable visibility around agent actions. The analogy stops there, because a television starship does not have to meet real employment law, supplier contracts, or production audits.</p>
</div>

## The company turns only when the evidence does

Agent count is a weak board metric. A more useful review asks which end-to-end workflows now reach an accepted result under bounded authority, how much human effort remains, what happens during failure, who can shut the process down, and whether the same operating pattern works elsewhere.

The sequence still matters. Name the workflow's business owner before choosing the tools, map its states and decision rights, set legal and supplier boundaries, establish the current baseline, and put the design through managed production. Bring the results to a portfolio forum before changing roles, budgets, or reporting lines. Some high-risk or highly contextual workflows may remain human-led, and that can be the correct result of the evidence.

The inverted triangle does not make people smaller. It puts human attention at the point of greatest consequence. Agents can carry more of the operating flow when people define the result, enforce the limits, preserve the learning path, and remain able to stop the system. Once that arrangement has survived production, the company has earned the right to reorganize around it.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>Redesign the organization only after governed agent workflows produce repeatable evidence. The goal is accountable flow, with autonomy bounded by evidence and human judgment placed where consequences are highest.</p>
</div>
