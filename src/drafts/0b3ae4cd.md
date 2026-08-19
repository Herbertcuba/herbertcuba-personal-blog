---
title: "The AI-first company is designed from the workflow up"
excerpt: "The deepest shift is a new division of work: bounded agents carry repeatable workflows, while people apply judgment where consequences become real."
tldr: "An AI-first company gives agents bounded responsibility for repeatable workflows, keeps permission and accountability outside the model, designs recovery before scale, protects human learning as routine work disappears, and changes permanent structure only after a controlled trial proves quality, cost, safety, and legitimacy."
provenance: verified-by-author
anthem: true
image: "/images/posts/architecture-ai-first-company.webp"
imageAlt: "Two inverted organizational triangles comparing a retrofitted company with an AI-first company"
permalink: /drafts/0b3ae4cd/
layout: post.njk
date: 2026-08-20
---

AI adoption is already common, but that does not mean companies have redesigned themselves around it. The [2025 AI Index](https://hai.stanford.edu/ai-index/2025-ai-index-report) from Stanford University's Institute for Human-Centered AI reported that 78% of surveyed organizations used AI in 2024, up from 55% the year before. That self-reported figure tells us how far the tools have spread. It does not tell us who now performs the work, who may commit the company, or what happens when an automated run breaks halfway through.

Those are the questions that define an AI-first company. By an **AI agent**, I mean software that receives an objective, selects actions, uses other software, and continues until it reaches a stopping rule or asks for help. A **workflow** is the connected sequence that turns a trigger, such as an invoice arriving, into a business result, such as approving it, disputing it, or routing it for investigation.

My argument is that repeatable execution should move toward a broad base of bounded agent workflows, while human attention moves toward the smaller number of decisions where context, judgment, and accountability matter most. The organization should then follow the evidence produced by that new division of work. Changing boxes on the org chart before the workflow can prove control, recovery, cost, and learning only makes an untested idea harder to reverse.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Widespread AI use is evidence of adoption, not organizational redesign. The real design question is how to divide workflow execution, permission, judgment, and accountability between agents and people.</p></div>

## Invert the shape of the work

Most companies begin by placing an agent at the bottom of an existing job. It drafts a message, summarizes a document, or fills one field, while people still carry the workflow from start to finish. The local task may become faster, yet the surrounding handoffs, approvals, and ownership remain. More output then arrives at the same human coordination layer.

The retrofit trap has a recognizable shape: many people operate workflows across the wide top, and a narrow point of AI assistance sits underneath them. An AI-first design inverts that allocation. Agents operate the repeatable path across a broad base, while people concentrate on the narrower set of moments that require judgment. The triangles describe the distribution of work, not a promised headcount reduction; relationship-heavy, creative, safety-critical, or highly ambiguous services may still need many people.

<figure class="anthem-visual anthem-visual--inversion" aria-labelledby="inversion-caption">
<svg viewBox="0 0 960 460" width="100%" role="img" aria-labelledby="inversion-title inversion-desc">
  <title id="inversion-title">The retrofit trap and the AI-first company</title>
  <desc id="inversion-desc">On the left, a downward-pointing triangle places humans running workflows across the broad top and AI agents at the narrow bottom. On the right, an upward-pointing triangle places agents running bounded workflows across the broad bottom and human judgment at the narrow top.</desc>
  <text x="240" y="34" text-anchor="middle" font-size="22" font-weight="700">RETROFIT TRAP</text>
  <polygon points="60,76 420,76 240,388" fill="#D9DEE8" stroke="#202632" stroke-width="3" />
  <line x1="95" y1="150" x2="385" y2="150" stroke="#202632" stroke-width="2" />
  <text x="240" y="113" text-anchor="middle" font-size="19" font-weight="700">Humans run workflows</text>
  <text x="240" y="199" text-anchor="middle" font-size="17">Agents assist isolated tasks</text>
  <text x="240" y="354" text-anchor="middle" font-size="16" font-weight="700">AI</text>
  <text x="720" y="34" text-anchor="middle" font-size="22" font-weight="700">AI-FIRST DESIGN</text>
  <polygon points="540,388 900,388 720,76" fill="#BFE7DA" stroke="#202632" stroke-width="3" />
  <line x1="575" y1="314" x2="865" y2="314" stroke="#202632" stroke-width="2" />
  <text x="720" y="116" text-anchor="middle" font-size="17" font-weight="700">Human judgment</text>
  <text x="720" y="346" text-anchor="middle" font-size="19" font-weight="700">Agents run bounded workflows</text>
</svg>
<figcaption id="inversion-caption">The inversion moves repeatable execution downward into agent-run workflows and concentrates human attention where decisions carry greater consequence.</figcaption>
</figure>

Take invoice exceptions as a structural example. An agent can collect the invoice, purchase order, and delivery record; compare them; request missing information; and recommend a route. A finance owner should still judge a disputed delivery, a suspicious supplier change, or any action that releases money beyond an agreed limit. Designing the workflow means locating that boundary before choosing a tool or rearranging a team.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Adding agents to isolated tasks preserves the old coordination burden. The useful inversion gives agents the repeatable path and places people at explicit judgment points, without treating the diagram as a forecast of headcount.</p></div>

## Put judgment at the consequence boundary

“Keep a human involved” sounds prudent, but it is too vague to guide a real service. A person approving every small action becomes a bottleneck and may eventually approve by habit. A person entering only after a major commitment has already been made is too late. The better unit of design is the **consequence boundary**: the point at which an action becomes expensive, difficult to undo, legally important, or material to another person.

Authority should narrow as consequences rise. An agent may read records and prepare a recommendation with broad permission. It may update a low-risk status only when the change is logged and easy to reverse. Releasing funds, changing access rights, altering supplier bank details, or sending a binding decision requires a named human owner and, where appropriate, a different person to approve the action than the person or system that proposed it.

<figure class="anthem-visual" aria-labelledby="authority-caption">
<table>
  <thead>
    <tr><th>Action level</th><th>Agent authority</th><th>Human responsibility</th></tr>
  </thead>
  <tbody>
    <tr><td>Read and prepare</td><td>Collect, compare, summarize, and flag missing evidence</td><td>Set data access and review samples</td></tr>
    <tr><td>Recommend</td><td>Propose a route and explain the evidence used</td><td>Resolve ambiguity and define escalation rules</td></tr>
    <tr><td>Make a reversible change</td><td>Act within a narrow limit, with a complete record</td><td>Approve the rule, audit outcomes, and retain a manual route</td></tr>
    <tr><td>Commit the company</td><td>Prepare the action but wait at the boundary</td><td>A named owner approves and carries accountability</td></tr>
  </tbody>
</table>
<figcaption id="authority-caption">Human attention increases with consequence rather than appearing as the same approval step everywhere.</figcaption>
</figure>

The agent should not enforce its own limits. A **policy service**, separate software that checks whether a proposed action is allowed, can verify the agent's identity, the amount involved, the kind of data, the jurisdiction, and the requested operation before issuing time-limited permission. This separation makes a rejected action visible and prevents a persuasive model response from becoming its own authorization.

European regulation reinforces the need to govern the use, not merely the model name. The [EU AI Act, Regulation (EU) 2024/1689](https://eur-lex.europa.eu/eli/reg/2024/1689/oj), applies obligations according to an AI system's use and risk, with stricter duties for high-risk systems. The [General Data Protection Regulation, or GDPR](https://eur-lex.europa.eu/eli/reg/2016/679/oj), is the European Union's 2016 law governing the processing of personal data. Neither means every agent needs the same controls. Together, they make the workflow, its data, and its consequences the sensible place to begin the assessment.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Human oversight becomes workable when it is tied to consequence. Agents can receive wider authority for observable, reversible actions, while a separate control system and named people govern commitments that are harder to undo.</p></div>

## Make recovery part of normal operation

Permission solves only the start of an action. Agent workflows also need a safe answer to partial failure, because one system can accept a change while the next times out. In the invoice example, an agent might create an exception record and contact the supplier before the finance system stops responding. A blind retry could duplicate the message, create a second record, or continue from information that is no longer current.

A production workflow therefore needs evidence at every transition. Each run should have a stable identifier, record the input version and permission decision, capture the response from every connected system, and check current state before trying again. Where reversal is possible, the recovery route should say how to undo the action. Where it is not, the workflow should stop and hand a complete case to a person.

<figure class="anthem-visual" aria-labelledby="recovery-caption">
<table>
  <thead>
    <tr><th>Transition</th><th>Evidence retained</th><th>Recovery route</th></tr>
  </thead>
  <tbody>
    <tr><td>Request accepted</td><td>Workflow identifier, input version, and requesting identity</td><td>Reject a duplicate or reopen the existing run</td></tr>
    <tr><td>Permission issued</td><td>Rule applied, approver where needed, scope, and expiry</td><td>Expire or revoke permission before another attempt</td></tr>
    <tr><td>Action attempted</td><td>Connected system's response and the state before and after</td><td>Check state, reverse when possible, or pause</td></tr>
    <tr><td>Outcome closed</td><td>Business result, exceptions, cost, and accountable owner</td><td>Reconcile through the manual service and record the cause</td></tr>
  </tbody>
</table>
<figcaption id="recovery-caption">A workflow is ready for production only when its evidence and recovery path survive a failure between systems.</figcaption>
</figure>

This changes supplier management as well. If a model or agent platform is part of the operating path, procurement needs terms for incident notice, access to logs, export of workflow records and settings, suspension of the service, and a credible route to another supplier or a manual process. The business owner remains responsible for the outcome; the technology owner maintains the connections and permissions; an assurance owner decides whether the evidence supports release; and the manual-service team must be able to restore continuity. Governance becomes operational when each of those people can act during a broken run.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Safe authority depends on recovery. Every workflow transition needs retained evidence, a defined response to partial failure, and supplier terms that preserve the company's ability to pause, inspect, export, and continue the service.</p></div>

## Rebuild the path to expertise

When agents absorb common cases, they also remove the cases through which people used to learn. New employees traditionally built judgment by handling routine work, receiving corrections, and gradually meeting harder exceptions. If software takes the routine path and people receive only rare disputes, the next generation of experts begins with the least teachable work and the smallest base of experience.

The learning system has to move into the workflow. **Shadow mode** means letting an agent make recommendations beside the current process while people remain authoritative. Those parallel decisions can train both sides: teams can compare reasoning, annotate why a recommendation was wrong, replay unusual cases, and turn expert corrections into clearer rules and training material. Once an agent enters production, exception reviews should examine what employees are learning as well as what the system is getting wrong.

[Arvind KC](https://openai.com/index/arvind-kc-chief-people-officer/), chief people officer at OpenAI, an AI research and deployment company, offers a small but useful example of provisional learning. In [a public LinkedIn post](https://www.linkedin.com/feed/update/urn:li:activity:7485407006204493825/), he writes, “It has been a few months for me at OpenAI, so I thought I'd share a few reflections,” and then presents ten numbered points. The post does not prove that any particular organizational model works. Its relevance is the posture: observations are made visible while they are still reflections, leaving room for correction before they harden into doctrine.

<figure class="anthem-visual anthem-visual--source" aria-labelledby="kc-caption">
  <a href="https://www.linkedin.com/feed/update/urn:li:activity:7485407006204493825/"><img src="/images/posts/arvind-kc-linkedin-post.jpg" alt="Screenshot of Arvind KC's LinkedIn post listing ten reflections from his first months at OpenAI" loading="lazy"></a>
  <figcaption id="kc-caption">Arvind KC's public LinkedIn post frames ten early observations as reflections rather than settled conclusions. Source: LinkedIn.</figcaption>
</figure>

For a Nordic enterprise, I would make that learning loop a joint design concern rather than a late communication exercise. Business owners, technical teams, risk functions, affected employees, and employee representatives should examine which routine tasks disappear, how new experts will practice, and what training is needed before roles change permanently. The exact consultation process will vary by country and agreement, but workforce legitimacy belongs inside the operating design because the people running the fallback and judging the exceptions are part of its reliability.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Automating routine work can also automate away the apprenticeship that produced expert judgment. Shadow runs, annotated exceptions, replay, and early workforce participation turn the workflow itself into a new learning system.</p></div>

## Meanwhile in sci-fi

<div class="scifi">
<span class="scifi__label">Meanwhile in sci-fi</span>
<p class="scifi__film">Star Trek: The Next Generation (1987)</p>
<p>The science-fiction television series, which began in 1987, follows the starship Enterprise. Its bridge crew does not manually operate every subsystem. Specialists watch different parts of the ship, interpret abnormal conditions, and bring consequential choices into a command structure led by Captain Jean-Luc Picard. Local expertise works because the crew can also see a shared operating picture.</p>
</div>

The mapping is about visibility and responsibility, not rank. An AI-first company can let agents carry more of the routine path only when people can see the state of the whole workflow, understand how a local choice affects connected systems, and know who may pause or redirect it. Shared system literacy means being able to read that operating picture before exercising judgment; it does not require every leader to become an AI engineer.

## Let evidence release the organization

The adoption statistic in the opening establishes prevalence, not value. It cannot show that an inverted organization will improve quality, lower total cost, survive incidents, or produce better jobs in a particular enterprise. Those claims need local operating evidence, gathered before permanent funding, reporting lines, and role definitions make the change expensive to unwind.

My view is that the workflow should change before the org chart. Begin with a bounded service, measure the current process, run the agent without action authority, rehearse failure, and then grant a narrow permission if the evidence holds. **Total cost** should include AI-service fees, integration, human review, support, incident work, and the manual fallback, rather than presenting model usage as the whole bill.

<figure class="anthem-visual anthem-visual--release" aria-labelledby="release-caption">
  <figcaption id="release-caption"><strong>Illustrative release contract: invoice-exception triage</strong><br>This is a worked starting point, not a benchmark. Replace every threshold with the enterprise's own baseline and risk limits.</figcaption>
  <dl>
    <dt>Scope</dt><dd>Eight weeks in shadow mode across 1,000 current invoice exceptions, with a €40,000 cap on internal and external trial cost.</dd>
    <dt>Agent authority</dt><dd>Read approved records, classify the exception, request missing evidence, and recommend a route. No ledger write, supplier-bank change, or payment release.</dd>
    <dt>Named owners</dt><dd>The accounts-payable leader owns the result; the platform owner owns connections and records; the assurance owner controls release; procurement owns supplier conditions; the manual-service lead owns continuity; an employee representative joins the work-redesign review.</dd>
    <dt>Weekly review</dt><dd>Correct routing against expert decisions, missed high-consequence cases, time per case, full cost, employee corrections, failed connections, and recovery evidence.</dd>
    <dt>Progress at the end of week eight</dt><dd>Grant one narrow, reversible write permission only if performance beats the agreed baseline, every high-consequence category reaches a person, the full cost stays within the cap, and the recovery exercise passes.</dd>
    <dt>Extend</dt><dd>Keep shadow mode when the direction is promising but the case volume, workforce evidence, or failure testing is too thin for release.</dd>
    <dt>Stop</dt><dd>End the trial after an unauthorized action attempt, a lost audit record, a failed manual fallback, unresolved supplier-exit terms, or performance below the pre-agreed floor.</dd>
  </dl>
</figure>

A successful trial does not justify an enterprise-wide reorganization by itself. It justifies the next bounded release. Structural change becomes defensible when several workflows show sustained results, their controls work under stress, the organization can recover without the supplier, and employees are building the judgment the new system requires. At that point, budgets and teams can follow work that is already real.

This is how the triangle becomes more than a picture. Agents earn a larger operating base through evidence. People gain clearer authority at the points where the company can cause harm or make a binding promise. The org chart changes last, because it records a working division of responsibility instead of trying to create one by decree.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Treat AI-first organization design as a sequence of reversible releases. A workflow earns wider authority through measured outcomes, complete cost, tested recovery, and workforce learning; permanent structure follows only when that evidence holds across more than one service.</p></div>
