---
title: "The AI-First Company Is an Inverted Triangle"
description: "AI-first organizational design puts bounded machine execution beneath workflows and concentrates people where judgment, accountability, and learning matter most."
tldr: "Widespread AI adoption does not make a company AI-first. The deeper change is organizational: agents and conventional software carry bounded, repeatable workflows; people concentrate on consequential decisions, difficult exceptions, system improvement, and accountability. Leaders should invert the operating model only after trials show better outcomes, lower total effort, workable controls, and a credible way to develop human judgment."
image: "/images/posts/architecture-ai-first-company.webp"
image_alt: "An inverted organizational triangle with AI agents supporting workflows and human judgment at the top"
anthem: true
provenance: "verified-by-author"
permalink: /drafts/0b3ae4cd/
layout: post.njk
date: 2026-08-17
---

AI has entered the company faster than the company has changed around it. The [2025 AI Index from the Stanford Institute for Human-Centered AI](https://hai.stanford.edu/ai-index/2025-ai-index-report), a university research institute that tracks the field, reports that 78% of surveyed organizations used AI in 2024. That figure tells us adoption is widespread. It does not tell us whether work, authority, or accountability moved with it.

A business can put AI in every department and preserve the old operating model almost perfectly. People still carry requests across functions, reconcile conflicting goals, chase approvals, and repair failures. The model may accelerate one activity, while the company around that activity keeps the same shape.

An AI-first company begins with a different allocation of work. Here, an **AI agent** means software that can pursue a goal through several steps and use tools within defined permissions. A **workflow** is the full path from a request to an accepted result, including decisions, handoffs, exceptions, and recovery when something goes wrong.

I think the design principle is simple: agents and conventional software should carry repeatable execution inside clear boundaries, while people concentrate on judgment, accountability, learning, and changing the system itself. The org chart should follow that allocation. It should not be asked to create it.

<figure class="anthem-stat" aria-labelledby="ai-adoption-caption">
  <div class="anthem-stat__value">78%</div>
  <div class="anthem-stat__statement">of surveyed organizations reported using AI in 2024</div>
  <figcaption id="ai-adoption-caption">Adoption is broad. Organizational redesign remains a separate claim that each company has to prove. Source: Stanford HAI, <a href="https://hai.stanford.edu/ai-index/2025-ai-index-report">AI Index Report 2025</a>.</figcaption>
</figure>

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>AI use measures the presence of a capability. An AI-first company changes the distribution of execution, judgment, and responsibility across the whole workflow.</p></div>

## The retrofit trap is an organizational choice

The **retrofit trap** appears when a company places agents at the bottom of an existing human process. The agent drafts, searches, classifies, or recommends, but people remain responsible for moving the work through every queue and approval. Local output becomes cheaper while coordination remains expensive.

That pattern can still be useful. It gives people assistance without moving much authority, which may be right for uncertain or high-consequence work. The mistake is calling it an AI-first operating model when the machine has only been attached to a role.

The inverted design starts with the workflow instead. Agents and ordinary software perform the bounded steps at the broad base: collecting inputs, checking rules, updating records, routing exceptions, and preserving a history of what happened. Human attention sits at the narrow top because fewer moments require judgment, but those moments carry more consequence.

This inversion does not make people peripheral. It stops spending their time on work that can be specified and checked, then makes their responsibility for the remaining decisions more explicit. The important change is where the company places human attention.

<figure class="anthem-diagram" aria-labelledby="triangle-caption">
  <svg viewBox="0 0 920 470" role="img" aria-labelledby="triangle-title triangle-desc" width="100%">
    <title id="triangle-title">The retrofit trap and the AI-first company</title>
    <desc id="triangle-desc">A downward triangle shows people carrying workflows above agents assisting isolated tasks. An upward triangle shows agents running bounded workflows at the broad base and people adding judgment at the top.</desc>
    <rect x="0" y="0" width="920" height="470" rx="24" fill="#F5F3EE"></rect>
    <text x="230" y="44" text-anchor="middle" font-size="24" font-weight="700" fill="#222222">The retrofit trap</text>
    <polygon points="55,80 405,80 230,400" fill="#D9D2C3"></polygon>
    <line x1="92" y1="150" x2="368" y2="150" stroke="#F5F3EE" stroke-width="4"></line>
    <text x="230" y="112" text-anchor="middle" font-size="18" font-weight="700" fill="#222222">People carry the workflow</text>
    <text x="230" y="137" text-anchor="middle" font-size="15" fill="#222222">handoffs · approvals · recovery</text>
    <text x="230" y="285" text-anchor="middle" font-size="17" font-weight="700" fill="#222222">AI agents assist tasks</text>
    <text x="690" y="44" text-anchor="middle" font-size="24" font-weight="700" fill="#222222">The AI-first company</text>
    <polygon points="515,400 865,400 690,80" fill="#9FC6B5"></polygon>
    <line x1="552" y1="330" x2="828" y2="330" stroke="#F5F3EE" stroke-width="4"></line>
    <text x="690" y="145" text-anchor="middle" font-size="17" font-weight="700" fill="#17382D">People add judgment</text>
    <text x="690" y="356" text-anchor="middle" font-size="18" font-weight="700" fill="#17382D">Agents run bounded workflows</text>
    <text x="690" y="381" text-anchor="middle" font-size="15" fill="#17382D">execution · coordination · trace</text>
  </svg>
  <figcaption id="triangle-caption">The triangle turns when machine execution becomes the base of the workflow and human attention moves toward consequential judgment.</figcaption>
</figure>

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Retrofitting makes individual tasks faster while leaving people to carry the process. The inverted model gives bounded execution to software and reserves human attention for the moments that shape outcomes.</p></div>

## Design around consequence, not job titles

Most roles contain several kinds of work bundled together by history. A finance role may gather evidence, compare records, interpret an unusual contract, approve an exception, and answer for the result. Treating the entire role as either “human” or “automated” hides the real design problem.

The useful unit is the decision inside the workflow. A **decision right** is an explicit rule about who or what may propose, authorize, execute, or stop a step. Once those rights are visible, leaders can place work according to two conditions: how predictable it is and how much damage a wrong action could cause.

For example, software can match an invoice against a purchase order and prepare a discrepancy for review. A written rule can block a duplicate payment. A person should handle the supplier dispute whose commercial context was never present in the data. These steps may sit in one department today, but they do not require the same kind of authority.

This is also where governance becomes concrete. The [EU AI Act](https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai), the European Union's risk-based framework for AI systems, sets different obligations according to the use and risk involved. The [General Data Protection Regulation](https://commission.europa.eu/law/law-topic/data-protection/data-protection-eu_en), or GDPR, governs the processing of personal data in the European Union. Neither can be reduced to a generic “AI approved” label; legal, privacy, and risk owners need to assess the actual workflow and data.

<figure class="anthem-matrix" aria-labelledby="consequence-matrix-caption">
  <table>
    <thead>
      <tr>
        <th scope="col">Work condition</th>
        <th scope="col">Lower consequence</th>
        <th scope="col">Higher consequence</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">Predictable</th>
        <td><strong>Execute and monitor</strong><br>Software acts within a tested rule and records the result.</td>
        <td><strong>Enforce a hard boundary</strong><br>Rules constrain the action; a named person owns the policy.</td>
      </tr>
      <tr>
        <th scope="row">Ambiguous</th>
        <td><strong>Propose and sample</strong><br>An agent prepares the case; people review a defined sample.</td>
        <td><strong>Escalate for judgment</strong><br>A person decides, explains the exception, and remains accountable.</td>
      </tr>
    </tbody>
  </table>
  <figcaption id="consequence-matrix-caption">Autonomy should expand with predictability and contract as consequence rises.</figcaption>
</figure>

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Roles are too coarse for AI-first design. Map the decisions inside the workflow, make proposal and approval rights explicit, and narrow machine authority as ambiguity or consequence increases.</p></div>

## Make reorganization a measured consequence

A convincing demonstration is not enough to move reporting lines. It may show that a model can complete a task under friendly conditions, yet say little about exception volume, human review, recovery, or supplier cost. Structural change needs evidence from managed work, not only a successful output.

I would put every serious trial inside a **trial envelope**: a written boundary that fixes what will be tested, for how long, on which cases, with what review capacity, and under which stop conditions. The trial should compare accepted outcomes, elapsed time, human minutes, and **all-in cost**, meaning model charges, software, integration, support, review, and rework rather than the model bill alone.

One workflow can justify a local deployment. It cannot establish that the operating pattern transfers. Before changing a wider organizational structure, test a second workflow that differs in at least one material way, such as data sensitivity, exception rate, customer impact, or dependence on an outside supplier. Two tests are not a law of nature; they are a guard against reorganizing around one unusually clean case.

The disconfirming result should be agreed in advance. If accepted outcomes fall below the baseline, human review exceeds its capacity ceiling, recovery remains unreliable, or total cost rises beyond the stated boundary, keep the current structure and repair the design. Evidence must be allowed to stop the transformation story.

<figure class="anthem-charter" aria-labelledby="trial-charter-caption">
  <table>
    <thead>
      <tr><th colspan="2">AI-first workflow trial envelope</th></tr>
    </thead>
    <tbody>
      <tr><th scope="row">Baseline and cases</th><td>Current accepted-result rate, elapsed time, human minutes, volume, and case selection</td></tr>
      <tr><th scope="row">Trial period</th><td>Start date, relevant business cycle, support hours, and decision date</td></tr>
      <tr><th scope="row">Economic boundary</th><td>All-in cost limit, rework allowance, and maximum human review capacity</td></tr>
      <tr><th scope="row">Control boundary</th><td>Permitted actions, protected data, escalation path, shutdown owner, and recovery test</td></tr>
      <tr><th scope="row">Stop conditions</th><td>Minimum quality, maximum incident severity, cost ceiling, and conditions for returning to the existing process</td></tr>
      <tr><th scope="row">Decision ownership</th><td>Business owner, technology owner, workforce representative, risk reviewer, and cross-functional decision forum</td></tr>
    </tbody>
  </table>
  <figcaption id="trial-charter-caption">Fill the envelope before launch. The decision date should determine whether to stop, improve, expand, or consider structural change.</figcaption>
</figure>

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Reorganization should follow comparable evidence from real operating conditions. A trial envelope makes quality, human effort, total cost, control limits, and the result that stops expansion visible before enthusiasm can move the goalposts.</p></div>

## The people system is part of the architecture

When software absorbs routine execution, it also absorbs some of the practice through which people once learned. Junior employees often build judgment by seeing many ordinary cases, noticing deviations, and receiving correction. Remove those repetitions without replacing the learning mechanism, and the company may improve today's throughput while weakening tomorrow's supply of experienced decision-makers.

That makes apprenticeship a design requirement. People can review sampled agent work, rotate through exception queues, reconstruct incidents, and compare difficult cases with the rules the system followed. Promotion and staffing then need to value the quality of judgment and system improvement, not only the volume of work a person personally produced.

Arvind KC, Chief People Officer at OpenAI, an AI research and product company, published a [public LinkedIn post](https://www.linkedin.com/feed/update/urn:li:activity:7485407006204493825/) with ten numbered reflections from his first months at the company. The screenshot below is a qualitative field note from one people leader, not comparative proof that a particular operating model works. Its narrower value here is to show that the organizational transition produces observations that people leaders should capture alongside workflow metrics.

<figure class="source-artifact" aria-labelledby="arvind-kc-caption">
  <a href="https://www.linkedin.com/feed/update/urn:li:activity:7485407006204493825/">
    <img src="/images/posts/arvind-kc-linkedin-post.jpg" alt="Screenshot of Arvind KC's LinkedIn post listing ten reflections from his first months at OpenAI">
  </a>
  <figcaption id="arvind-kc-caption">Source artifact: Arvind KC's ten reflections from his first months at OpenAI, published on the professional network LinkedIn. Select the image to open the public source post.</figcaption>
</figure>

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Routine work is also a training ground. An AI-first company must replace lost practice with deliberate review, exception exposure, and incident learning, while treating people observations as a complement to operating metrics rather than proof of performance.</p></div>

## Meanwhile in sci-fi

[Star Trek: The Next Generation](https://www.startrek.com/series/star-trek-the-next-generation), a science-fiction television series that ran from 1987 to 1994 aboard the fictional starship Enterprise, offers a limited picture of coordinated autonomy. The crew can act from different stations because the vessel exposes shared operational status, specialties are clear, and difficult choices can reach an explicit command structure. Local action remains connected to the condition of the whole ship.

<div class="scifi">
  <span class="scifi__label">Meanwhile in sci-fi</span>
  <p class="scifi__film">Star Trek: The Next Generation (1987)</p>
  <p>The mapping is organizational, not technological: an AI-first company needs shared workflow state, narrow authority, visible exceptions, and a named human who can change course. Without that common view, local autonomy becomes fragmented action and senior leaders regain control only after a failure has travelled through the system.</p>
</div>

## Let the org chart arrive last

The inverted triangle is a destination for work design, not permission for a dramatic restructuring announcement. Start with one end-to-end outcome, expose the decisions hidden inside it, and assign each step to software or people according to predictability and consequence. Then test whether the arrangement improves the whole result under a control boundary the organization can actually operate.

If the evidence holds across materially different workflows, the structural implications become clearer. Teams may organize around outcomes instead of functional handoffs. Managers may spend less time distributing tasks and more time setting boundaries, resolving trade-offs, developing judgment, and improving the workflow.

Some trials will fail, and that is useful. A company that can stop an agent-led process, reconstruct what happened, return to a safe path, and keep its people involved has learned more than one that produced an impressive demonstration with no operating discipline behind it. Reversibility turns experimentation into a governed choice.

<figure class="anthem-flow" aria-labelledby="org-chart-sequence-caption">
  <ol>
    <li><strong>Map the outcome</strong><span>Follow the work from request to accepted result, including exceptions and recovery.</span></li>
    <li><strong>Place the authority</strong><span>Specify who or what may propose, approve, execute, stop, and answer for each decision.</span></li>
    <li><strong>Prove the operation</strong><span>Measure quality, time, human effort, total cost, control performance, and learning.</span></li>
    <li><strong>Change the structure</strong><span>Move roles, budgets, support, and reporting lines only when the evidence survives review.</span></li>
  </ol>
  <figcaption id="org-chart-sequence-caption">The operating sequence runs from outcome to authority to evidence. The org chart records the result.</figcaption>
</figure>

The point is to place scarce human attention where it can change the outcome, while making machine execution bounded, observable, and reversible. If that design earns its place, the company should turn the triangle. Until then, the responsible move is to keep testing without pretending the reorganization has already been proved.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Map the outcome, assign authority, prove the operation, and reorganize only after the evidence survives cross-functional review. In an AI-first company, the org chart records a tested distribution of responsibility rather than declaring one in advance.</p></div>
