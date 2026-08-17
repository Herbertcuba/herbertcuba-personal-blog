---
title: "The architecture of an AI-first company"
description: "AI-first design begins with workflows, bounded authority, human judgment, and evidence strong enough to justify a different organization."
tldr: "An AI-first company puts agents and ordinary software beneath selected workflows as a bounded execution layer, keeps consequential authority inside explicit controls, and uses people for judgment, exceptions, and accountability. The org chart should change only after an end-to-end trial proves better outcomes, controlled risk, lower coordination load, and a credible way for people to keep learning."
image: "/images/posts/architecture-ai-first-company.webp"
anthem: true
provenance: "verified-by-author"
permalink: /drafts/0b3ae4cd/
layout: post.njk
date: 2026-08-17
---

Most organizations will reach high AI usage without becoming AI-first. Usage shows that people have a new tool. It does not show whether the company has changed how work moves, how actions are authorized, or where accountability sits.

Here, an **AI agent** means software that uses an AI model, instructions, and tools to pursue a goal across several steps. A **workflow** is the connected sequence from a real trigger, such as receiving an invoice, to a business result that someone accepts. An agent can perform an impressive task while people still carry the context, approvals, handoffs, and recovery work around it.

I think AI-first should describe an operating design. In selected workflows, agents and ordinary software carry the repeatable execution; fixed controls bound what they may do; people supply judgment and remain responsible for the outcome. Structural change comes later, once the whole path works better and the evidence survives scrutiny.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>AI-first is an operating choice: selected workflows begin with bounded software execution, fixed controls authorize consequential actions, and people own judgment and outcomes. Structure follows only after end-to-end evidence.</p></div>

## Invert the operating base

Most AI programs begin from the existing organization. A department finds tasks that a model can accelerate, gives employees access, and leaves the surrounding workflow intact. People still receive the work, decide what happens next, copy information between systems, chase approvals, and repair failures. The agent sits at the narrow end of the design as a capable helper.

That is the **retrofit trap**: new execution capacity is attached to an old flow without changing who carries the flow. The local task may become faster while the coordination around it stays the same or grows, because people now have another source of output to inspect and route.

An AI-first design starts with the workflow and chooses the simplest suitable execution mechanism for each part. Stable steps with complete rules often belong in ordinary workflow software. An agent earns a role when bounded work requires interpretation, a choice among approved tools, or adaptation across several steps. Human judgment enters where context is incomplete, consequences are high, or the case falls outside the agreed path.

<figure class="anthem-visual">
<svg viewBox="0 0 1000 460" role="img" aria-labelledby="triangle-title triangle-desc" xmlns="http://www.w3.org/2000/svg">
  <title id="triangle-title">The retrofit trap compared with an AI-first operating design</title>
  <desc id="triangle-desc">A downward triangle places human-carried workflows across the wide top and AI agents at the bottom tip. An upward triangle places agents and systems across the wide execution base and human judgment at the top point.</desc>
  <rect x="20" y="20" width="460" height="420" rx="22" fill="#F7F4EF"/>
  <rect x="520" y="20" width="460" height="420" rx="22" fill="#EEF5F1"/>
  <text x="250" y="62" text-anchor="middle" font-size="24" font-weight="700" fill="#272727">Retrofit trap</text>
  <polygon points="75,105 425,105 250,390" fill="#E5C7B7" stroke="#8C5B45" stroke-width="3"/>
  <text x="250" y="142" text-anchor="middle" font-size="19" font-weight="700" fill="#3D2A22">Humans carry the workflow</text>
  <text x="250" y="181" text-anchor="middle" font-size="16" fill="#3D2A22">Handoffs, approvals, recovery</text>
  <text x="250" y="245" text-anchor="middle" font-size="17" fill="#3D2A22">AI added to tasks</text>
  <circle cx="250" cy="350" r="28" fill="#8C5B45"/>
  <text x="250" y="357" text-anchor="middle" font-size="17" font-weight="700" fill="#FFFFFF">Agent</text>
  <text x="750" y="62" text-anchor="middle" font-size="24" font-weight="700" fill="#272727">AI-first workflow</text>
  <polygon points="750,100 565,395 935,395" fill="#BFDACB" stroke="#3E7259" stroke-width="3"/>
  <circle cx="750" cy="137" r="30" fill="#3E7259"/>
  <text x="750" y="133" text-anchor="middle" font-size="15" font-weight="700" fill="#FFFFFF">Human</text>
  <text x="750" y="151" text-anchor="middle" font-size="13" fill="#FFFFFF">judgment</text>
  <text x="750" y="246" text-anchor="middle" font-size="17" fill="#243F33">Policy and exception paths</text>
  <text x="750" y="340" text-anchor="middle" font-size="19" font-weight="700" fill="#243F33">Agents and systems</text>
  <text x="750" y="366" text-anchor="middle" font-size="16" fill="#243F33">carry repeatable execution</text>
</svg>
<figcaption>The width represents the volume of repeatable execution, not headcount or human value. In the AI-first design, human intervention is less frequent but more consequential.</figcaption>
</figure>

The right-hand triangle is a flow model, not a plan to remove people. Its broad base shows where repeatable execution sits. The point at the top shows that human attention becomes concentrated around judgment, exceptions, policy, and responsibility. Once execution moves, authority has to be designed just as deliberately.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Invert only workflows that benefit from interpretation across steps, and use ordinary automation where rules are enough. The triangle describes where repeatable execution sits, not a plan to remove people.</p></div>

## Make authority explicit

An agent needs enough access to perform useful work, but access cannot become authority by accident. A **decision right** is permission to approve, commit, disclose, reject, or stop something. Every consequential decision right needs an owner, a limit, and a recorded route for cases outside that limit.

This is where a **deterministic control** matters. It is a rule-based component that authorizes or rejects an action from recorded conditions instead of asking an AI model to make the final policy decision. The model may read an unstructured document, classify it, and propose a next step. The control checks whether that step is allowed. A person remains accountable for the policy and the result.

Consider a hypothetical supplier-invoice workflow. An agent can extract fields, compare the invoice with purchasing records, and propose that a matched invoice is ready for payment. Fixed rules then verify the supplier, amount, purchase order, bank details, and duplicate status. A changed bank account or an amount outside the approved range never reaches payment through model confidence alone; the workflow creates an exception record and sends it to the named finance owner.

<figure class="anthem-visual">
<svg viewBox="0 0 1000 430" role="img" aria-labelledby="authority-title authority-desc" xmlns="http://www.w3.org/2000/svg">
  <title id="authority-title">Authority map for a bounded invoice workflow</title>
  <desc id="authority-desc">An invoice moves to an agent proposal and then a fixed policy check. Allowed actions are scheduled and logged. Rejected actions create an exception record for a human owner.</desc>
  <defs>
    <marker id="arrow" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth"><path d="M0,0 L0,6 L9,3 z" fill="#555"/></marker>
  </defs>
  <rect x="30" y="45" width="180" height="85" rx="15" fill="#F2F2F2" stroke="#707070" stroke-width="2"/>
  <text x="120" y="81" text-anchor="middle" font-size="18" font-weight="700" fill="#222">Invoice arrives</text>
  <text x="120" y="108" text-anchor="middle" font-size="14" fill="#444">Workflow trigger</text>
  <line x1="210" y1="87" x2="275" y2="87" stroke="#555" stroke-width="3" marker-end="url(#arrow)"/>
  <rect x="285" y="35" width="210" height="105" rx="15" fill="#E8EEF7" stroke="#4B6485" stroke-width="2"/>
  <text x="390" y="70" text-anchor="middle" font-size="18" font-weight="700" fill="#26364A">Agent proposes</text>
  <text x="390" y="97" text-anchor="middle" font-size="14" fill="#26364A">Extract, match, classify</text>
  <text x="390" y="119" text-anchor="middle" font-size="14" fill="#26364A">No payment authority</text>
  <line x1="495" y1="87" x2="560" y2="87" stroke="#555" stroke-width="3" marker-end="url(#arrow)"/>
  <rect x="570" y="35" width="215" height="105" rx="15" fill="#FFF1C9" stroke="#927326" stroke-width="2"/>
  <text x="678" y="70" text-anchor="middle" font-size="18" font-weight="700" fill="#4C3B0D">Fixed policy checks</text>
  <text x="678" y="97" text-anchor="middle" font-size="14" fill="#4C3B0D">Identity, amount, account</text>
  <text x="678" y="119" text-anchor="middle" font-size="14" fill="#4C3B0D">Duplicate and scope</text>
  <line x1="785" y1="72" x2="865" y2="72" stroke="#3E7259" stroke-width="3" marker-end="url(#arrow)"/>
  <text x="824" y="57" text-anchor="middle" font-size="14" font-weight="700" fill="#3E7259">Allowed</text>
  <rect x="875" y="35" width="100" height="105" rx="15" fill="#DCEEE4" stroke="#3E7259" stroke-width="2"/>
  <text x="925" y="73" text-anchor="middle" font-size="15" font-weight="700" fill="#244734">Schedule</text>
  <text x="925" y="96" text-anchor="middle" font-size="15" font-weight="700" fill="#244734">and log</text>
  <line x1="678" y1="140" x2="678" y2="220" stroke="#A24D45" stroke-width="3" marker-end="url(#arrow)"/>
  <text x="720" y="185" font-size="14" font-weight="700" fill="#A24D45">Rejected</text>
  <rect x="550" y="230" width="255" height="90" rx="15" fill="#F7E3E1" stroke="#A24D45" stroke-width="2"/>
  <text x="678" y="266" text-anchor="middle" font-size="18" font-weight="700" fill="#5D2925">Exception record</text>
  <text x="678" y="293" text-anchor="middle" font-size="14" fill="#5D2925">Reason, state, evidence</text>
  <line x1="550" y1="275" x2="450" y2="275" stroke="#555" stroke-width="3" marker-end="url(#arrow)"/>
  <rect x="210" y="230" width="230" height="90" rx="15" fill="#E9E3F4" stroke="#675684" stroke-width="2"/>
  <text x="325" y="266" text-anchor="middle" font-size="18" font-weight="700" fill="#382E49">Human owner</text>
  <text x="325" y="293" text-anchor="middle" font-size="14" fill="#382E49">Resolve, stop, or recover</text>
  <text x="500" y="385" text-anchor="middle" font-size="17" font-weight="700" fill="#333">The model proposes. Recorded policy authorizes. A named person owns the outcome.</text>
</svg>
<figcaption>A bounded workflow separates interpretation from authorization. An over-limit action becomes a visible exception instead of an improvised model decision.</figcaption>
</figure>

An **exception** is a case that leaves the normal path because information, value, confidence, or consequence falls outside its agreed boundary. That path must be usable under pressure. The record should preserve the input, the agent's proposal, the policy result, the action taken, and any human decision so another person can reconstruct what happened.

Recovery also needs a mechanical safeguard. Each consequential action should carry a unique transaction key, allowing a restarted workflow to recognize that a payment was already scheduled instead of scheduling it twice. These details are less dramatic than an autonomous demo, but they determine whether local autonomy can survive contact with production.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Separate model proposals from fixed authorization, route out-of-bounds cases to a named human, and make recovery and records safe before agents touch consequential systems.</p></div>

## Demand proof at workflow scale

The unit of proof should match the unit of change. If the company wants to redesign a workflow, it has to measure the complete route from trigger to an **accepted outcome**: a result that meets business, quality, and control criteria agreed before the trial. Model accuracy and agent output count can inform the diagnosis, but neither says whether the work arrived correctly, on time, at an acceptable total cost.

A useful trial begins with a **baseline**, meaning measured performance of the current path before the change. It then fixes the eligible cases, review horizon, cost boundary, human review capacity, stop condition, and decision date. This keeps enthusiasm after a good demonstration from rewriting the test.

<figure class="anthem-visual">
<table>
  <caption>Illustrative trial charter: matched supplier invoices</caption>
  <thead>
    <tr><th scope="col">Decision field</th><th scope="col">Example commitment</th></tr>
  </thead>
  <tbody>
    <tr><th scope="row">Eligible scope</th><td>Existing suppliers, purchase-order match, unchanged bank details, and invoice value up to EUR 5,000.</td></tr>
    <tr><th scope="row">Comparator</th><td>Four weeks of the current human-led path, including elapsed time, human minutes, errors, and total cost per accepted invoice.</td></tr>
    <tr><th scope="row">Trial horizon</th><td>Six weeks and at least 500 eligible invoices before the decision review.</td></tr>
    <tr><th scope="row">Accepted outcome</th><td>Correct ledger entry and payment scheduled only to the approved account, with a complete action record.</td></tr>
    <tr><th scope="row">Operating limits</th><td>No unauthorized payment; median elapsed time at least 25% below baseline; no more than five human review minutes per invoice; daily review queue below two hours; all-in cost below baseline.</td></tr>
    <tr><th scope="row">Stop and fallback</th><td>Stop on any unapproved destination or missing action record, or after three days above review capacity. Return eligible cases to the documented human-led path.</td></tr>
    <tr><th scope="row">Owner and decision</th><td>Accounts-payable process owner, with finance control, security, privacy or legal, operations, and workforce representation where role content changes. Decide after the horizon closes.</td></tr>
  </tbody>
</table>
<figcaption>This card is hypothetical. Its numbers are governance choices, not industry benchmarks; each company should set them from its own baseline, risk, and review capacity.</figcaption>
</figure>

Total cost includes the model service, integration, monitoring, human review, and incident recovery. The fallback matters too: records should be exportable, and the former path should remain usable during the trial so changing or losing a supplier does not strand the workflow. If access to personal data, money, employment decisions, or regulated activity is involved, the relevant security, privacy, legal, finance, and workforce owners join before the scope is frozen.

The trial earns a narrow conclusion. It can show that one bounded workflow produces better accepted outcomes within agreed limits. It cannot prove that every workflow needs an agent or that the company is ready for a new structure. That broader decision needs the same quality of evidence across enough work to reveal a pattern.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>A serious trial fixes the baseline, scope, horizon, cost and review limits, stop rules, fallback, and decision date in advance. It evaluates accepted business outcomes across the full workflow, with control and workforce owners involved early.</p></div>

## Rebuild the learning path

Moving routine execution into software changes how people become capable. Judgment is usually built through exposure to ordinary cases, mistakes, corrections, and consequences. If junior employees see only escalations after the easy work disappears, they inherit the hardest cases without the repetition that once taught the system.

[Arvind KC](https://openai.com/index/arvind-kc-chief-people-officer/), Chief People Officer at OpenAI, the AI research and product company, published [ten numbered reflections from his first months at the company](https://www.linkedin.com/feed/update/urn:li:activity:7485407006204493825/). He introduces the post with, “It has been a few months for me at OpenAI.” I use this as a primary artifact with a narrow claim: a people leader inside a company developing advanced AI systems is documenting its working environment as a subject worth examining. It is one executive's qualitative account, not measured proof for the operating design proposed here.

<figure class="anthem-visual">
  <a href="https://www.linkedin.com/feed/update/urn:li:activity:7485407006204493825/">
    <img src="/images/posts/arvind-kc-linkedin-post.jpg" alt="Screenshot of Arvind KC's public LinkedIn post containing ten numbered reflections from his first months at OpenAI" loading="lazy" />
  </a>
  <figcaption>Arvind KC's public LinkedIn post is included as a source artifact. The surrounding argument does not depend on the reader opening the link.</figcaption>
</figure>

Each company still needs its own evidence and its own learning design. A workflow trial should identify which routine cases once trained people and replace that exposure deliberately. Staff can review sampled agent traces, explain why a case passed or escalated, rotate through upstream and downstream parts of the flow, and practise recovery in a safe environment. These are work activities, not a separate training catalogue.

People doing the work, and employee representatives where roles may change, should enter before new boundaries harden. They often know the hidden repairs and informal handoffs that a process map misses. Their involvement improves the workflow design and gives the organization a fairer basis for changing jobs, review duties, or reporting lines.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>When agents absorb routine work, apprenticeship has to be rebuilt through sampled cases, process-wide exposure, and recovery practice. Otherwise today's efficiency removes the experience needed for tomorrow's judgment.</p></div>

## Meanwhile in sci-fi

<div class="scifi">
<span class="scifi__label">Meanwhile in sci-fi</span>
<p class="scifi__film">Star Trek: The Next Generation (1987)</p>
<p>In this science-fiction television series, which ran from 1987 to 1994, specialists aboard the starship Enterprise act within a clear command structure while understanding how choices at one station affect the whole vessel. The mapping is limited but useful: an AI-first company can grant local authority only when people can see the wider workflow, understand its current state, and know when to escalate; hierarchy alone does not create that shared system awareness.</p>
</div>

## Let structure follow the evidence

An org chart is a lagging representation of how work gets done. It should record a proven operating pattern rather than lead a speculative one. One successful agent trial may justify expanding a workflow, but it says little about whether teams, roles, or reporting lines should move.

Structural change becomes reasonable when evidence repeats. The full path produces accepted outcomes faster or at lower total cost, authority boundaries hold during exceptions, human recovery stays within its agreed capacity, and coordination work actually falls instead of moving to a different team. The learning path must also remain credible, because an efficient workflow that weakens future judgment sends the cost forward.

<figure class="anthem-visual">
<svg viewBox="0 0 1000 300" role="img" aria-labelledby="structure-title structure-desc" xmlns="http://www.w3.org/2000/svg">
  <title id="structure-title">The org chart follows operating evidence</title>
  <desc id="structure-desc">Four connected stages move from evidence in one workflow, to a repeated portfolio pattern, to role design, and finally to organizational structure.</desc>
  <defs>
    <marker id="arrow-structure" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth"><path d="M0,0 L0,6 L9,3 z" fill="#4B5B67"/></marker>
  </defs>
  <text x="500" y="38" text-anchor="middle" font-size="24" font-weight="700" fill="#252525">Structure is the output, not the starting input</text>
  <rect x="35" y="90" width="190" height="105" rx="18" fill="#E8EEF7" stroke="#4B6485" stroke-width="2"/>
  <text x="130" y="129" text-anchor="middle" font-size="18" font-weight="700" fill="#26364A">Workflow evidence</text>
  <text x="130" y="157" text-anchor="middle" font-size="14" fill="#26364A">Outcome and control</text>
  <line x1="225" y1="143" x2="280" y2="143" stroke="#4B5B67" stroke-width="3" marker-end="url(#arrow-structure)"/>
  <rect x="290" y="90" width="190" height="105" rx="18" fill="#EEF5F1" stroke="#3E7259" stroke-width="2"/>
  <text x="385" y="129" text-anchor="middle" font-size="18" font-weight="700" fill="#244734">Repeated pattern</text>
  <text x="385" y="157" text-anchor="middle" font-size="14" fill="#244734">Across selected work</text>
  <line x1="480" y1="143" x2="535" y2="143" stroke="#4B5B67" stroke-width="3" marker-end="url(#arrow-structure)"/>
  <rect x="545" y="90" width="190" height="105" rx="18" fill="#FFF1C9" stroke="#927326" stroke-width="2"/>
  <text x="640" y="129" text-anchor="middle" font-size="18" font-weight="700" fill="#4C3B0D">Role design</text>
  <text x="640" y="157" text-anchor="middle" font-size="14" fill="#4C3B0D">Ownership and learning</text>
  <line x1="735" y1="143" x2="790" y2="143" stroke="#4B5B67" stroke-width="3" marker-end="url(#arrow-structure)"/>
  <rect x="800" y="90" width="165" height="105" rx="18" fill="#E9E3F4" stroke="#675684" stroke-width="2"/>
  <text x="883" y="129" text-anchor="middle" font-size="18" font-weight="700" fill="#382E49">Org structure</text>
  <text x="883" y="157" text-anchor="middle" font-size="14" fill="#382E49">Teams and lines</text>
  <text x="500" y="246" text-anchor="middle" font-size="17" fill="#333">Each arrow is a decision gate. A demonstration cannot skip them.</text>
</svg>
<figcaption>Reporting lines change after a repeatable operating pattern is visible, governed, and teachable.</figcaption>
</figure>

At that point, roles can center on ownership of outcomes rather than movement of task queues. Some teams may combine because the software now carries their routine handoffs; others may separate because policy, assurance, or exception work needs clearer ownership. The right shape depends on observed work, which is why the evidence has to precede the boxes.

The leadership question is therefore concrete: which selected workflow could begin at the software execution layer, and what would have to be true before you changed a single reporting line? A credible answer names the accepted outcome, the authority boundary, the human owner, the fallback, the cost, and the learning path. When those answers hold in practice, the org chart can describe the new work instead of pretending to create it.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>An org chart should follow repeated workflow evidence: better accepted outcomes, controlled authority, lower recovery and coordination burden, and a viable learning path. A pilot alone does not earn a reorganization.</p></div>
