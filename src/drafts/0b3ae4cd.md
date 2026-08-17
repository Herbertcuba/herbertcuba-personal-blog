---
title: "The architecture of the AI-first company"
description: "Why agent-run workflows require a different division of execution, judgment, and accountability."
tldr: "An AI-first company uses agent-run workflows as its execution base and concentrates human attention on intent, exceptions, system changes, and accountability. The shift works only when leaders redesign outcomes, decision rights, evidence, and escalation paths together, starting with one bounded workflow rather than layering agents beneath the existing organization."
image: "/images/posts/architecture-ai-first-company.webp"
image_alt: "Illustration of an AI-first company operating model"
anthem: true
permalink: /drafts/0b3ae4cd/
layout: post.njk
date: 2026-08-17
---

An AI-first company starts with a different unit of design: the workflow, not the job. A workflow is the linked sequence of decisions, actions, checks, and handoffs that produces an outcome. An AI agent is software that can pursue a goal across several steps and use tools within defined limits.

Once agents can carry a meaningful part of that sequence, the operating model can change. Agent-run workflows become the execution base, while people set intent, define boundaries, judge exceptions, improve the system, and remain accountable for the result. Human attention enters where judgment matters instead of routing every routine step.

This is the dividing line I find useful. Giving every employee an AI assistant may improve individual tasks, yet the company still runs through the same queues and approvals. Becoming AI-first means redesigning how work moves.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>The strategic shift begins when the workflow, rather than the existing job description, becomes the unit of design. Agents carry bounded execution; people supply intent, judgment, and accountability.</p>
</div>

## The retrofit trap

Retrofitting begins from the company as it exists. A person receives work, breaks it into tasks, sends selected tasks to an agent, checks the output, and carries it to the next person. The agent may shorten one production step, but the human remains the scheduler, translator, and router.

That arrangement can be useful, especially while a team is learning. It becomes a trap when local output rises but the surrounding coordination stays untouched. Review queues can grow, handoffs still lose context, and every exception returns to the same human path.

<figure class="article-diagram article-diagram--wide">
<svg viewBox="0 0 960 500" role="img" aria-labelledby="triangle-title triangle-desc" xmlns="http://www.w3.org/2000/svg">
<title id="triangle-title">The retrofit trap and the AI-first company</title>
<desc id="triangle-desc">A downward-pointing triangle puts humans running workflows across the wide top and AI agents at the narrow bottom. An upward-pointing triangle puts agents running workflows across the wide bottom and human judgment at the narrow top.</desc>
<text x="235" y="42" text-anchor="middle" font-size="24" font-weight="700">Retrofit trap</text>
<polygon points="55,80 415,80 235,445" fill="#E8EEF8" stroke="#315B8A" stroke-width="3" />
<text x="235" y="132" text-anchor="middle" font-size="18" font-weight="700">HUMANS RUN WORKFLOWS</text>
<text x="235" y="164" text-anchor="middle" font-size="15">route · prompt · review · hand off</text>
<line x1="150" y1="198" x2="320" y2="198" stroke="#315B8A" stroke-width="2" />
<text x="235" y="382" text-anchor="middle" font-size="17" font-weight="700">AI agents</text>
<text x="725" y="42" text-anchor="middle" font-size="24" font-weight="700">AI-first company</text>
<polygon points="725,80 545,445 905,445" fill="#E7F4EC" stroke="#28734A" stroke-width="3" />
<text x="725" y="132" text-anchor="middle" font-size="17" font-weight="700">Human judgment</text>
<line x1="675" y1="166" x2="775" y2="166" stroke="#28734A" stroke-width="2" />
<text x="725" y="370" text-anchor="middle" font-size="18" font-weight="700">AGENTS RUN WORKFLOWS</text>
<text x="725" y="402" text-anchor="middle" font-size="15">act · check · record · escalate</text>
</svg>
<figcaption>The triangles describe where execution and judgment sit, not a forecast of staffing ratios.</figcaption>
</figure>

The right-hand model changes who carries the flow. Agents handle repeatable execution within limits, while human judgment appears at deliberate points: setting the goal, resolving a material exception, approving a consequential action, or changing the workflow itself. The inversion is organizational before it is numerical.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>A retrofit makes agents helpers inside a human-routed process. An AI-first design moves repeatable flow into the agent layer and reserves human intervention for decisions that deserve it.</p>
</div>

## Build around the outcome

A workflow cannot be redesigned by collecting tasks that look easy to automate. The starting point is the outcome: what must be true at the end, for whom, and within which limits. That frame exposes the checks and decisions that connect individual tasks.

The agent layer then needs a clear operating contract. It needs a goal, access to the right tools and information, limits on what it may do, evidence requirements, and conditions that trigger human review. Without those elements, autonomy is merely permission without a dependable way to know whether the work is sound.

<figure class="article-diagram">
<svg viewBox="0 0 900 330" role="img" aria-labelledby="loop-title loop-desc" xmlns="http://www.w3.org/2000/svg">
<title id="loop-title">A bounded human and agent operating loop</title>
<desc id="loop-desc">Human judgment sets intent and limits for an agent-run workflow. The workflow returns evidence and exceptions so people can judge outcomes and update the system.</desc>
<rect x="150" y="35" width="600" height="80" rx="12" fill="#F3EAF8" stroke="#73458A" stroke-width="3" />
<text x="450" y="68" text-anchor="middle" font-size="20" font-weight="700">HUMAN JUDGMENT</text>
<text x="450" y="95" text-anchor="middle" font-size="15">intent · limits · exceptions · system change</text>
<rect x="75" y="215" width="750" height="80" rx="12" fill="#E7F4EC" stroke="#28734A" stroke-width="3" />
<text x="450" y="248" text-anchor="middle" font-size="20" font-weight="700">AGENT-RUN WORKFLOW</text>
<text x="450" y="275" text-anchor="middle" font-size="15">plan · act · check · record · continue</text>
<path d="M330 115 L330 205" stroke="#73458A" stroke-width="3" fill="none" />
<polygon points="330,215 323,201 337,201" fill="#73458A" />
<text x="250" y="170" text-anchor="middle" font-size="14">goal and boundaries</text>
<path d="M570 215 L570 125" stroke="#28734A" stroke-width="3" fill="none" />
<polygon points="570,115 563,129 577,129" fill="#28734A" />
<text x="660" y="170" text-anchor="middle" font-size="14">evidence and escalation</text>
</svg>
<figcaption>Autonomy is a loop: people set the frame, the workflow acts, and evidence returns before the frame changes.</figcaption>
</figure>

The depth of delegation should follow the nature of the work. Stable work that leaves clear evidence and is easy to reverse can run longer before review. Ambiguous, high-impact, or hard-to-reverse work belongs closer to human judgment. Observability, meaning the ability to see what the system did and why, is what lets leaders distinguish the two in practice.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>Design from the required outcome and give the agent workflow a contract covering goals, access, limits, evidence, and escalation. The safer and more visible the work, the further execution can move from routine human review.</p>
</div>

## Authority must follow execution

When software can take action, permission becomes part of organization design. Every agent-run workflow needs a named human owner who remains answerable for its outcome. That owner defines the operating boundary and decides what happens when the system reaches it.

A practical split looks like this:

| Moment in the workflow | Agent authority | Human responsibility |
| --- | --- | --- |
| Goal or policy is set | Apply the stated goal and policy | Define success and acceptable risk |
| Routine action stays within limits | Act and record the result | Monitor outcomes and the quality of evidence |
| A novel or uncertain case appears | Pause and assemble relevant evidence | Judge the exception |
| An action is consequential or hard to reverse | Prepare the decision or proposed action | Approve, reject, or change course |
| A pattern keeps recurring | Surface the pattern | Change the workflow, policy, or boundary |

This avoids two weak designs. Requiring approval for every action turns autonomy into another queue. Broad permission without strong evidence makes it difficult to reconstruct a failure, learn from it, or know when to stop the system. Authority and visibility have to grow together.

**Source artifact:** On LinkedIn, the professional network, Arvind KC published [ten reflections from his first months at OpenAI](https://www.linkedin.com/feed/update/urn:li:activity:7485407006204493825/), an AI company. It is one person's account rather than a benchmark. Its proper use here is to sharpen a leader's questions about organization design, then test any relevant lesson against evidence from their own workflows.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>Execution can move into software only when decision rights move with it. Give agents bounded authority, give people explicit ownership, and make the evidence strong enough to review both actions and outcomes.</p>
</div>

## Meanwhile in sci-fi

Local autonomy depends on shared context. A specialist can act quickly only when the local view contains enough information about the wider system, and when responsibility for the whole remains clear.

<div class="scifi">
<span class="scifi__label">Meanwhile in sci-fi</span>
<p class="scifi__film">Star Trek: The Next Generation (1987)</p>
<p>This television series follows the crew of the starship Enterprise. Officers act within different specialties, yet a shared mission, ship-wide information, and an explicit command structure connect their local decisions to the condition of the whole vessel.</p>
</div>

The mapping to an AI-first company is specific: an agent can act locally when it has the goal, relevant system state, operating limits, and a clear escalation path. Named people retain command responsibility for consequential decisions. Shared system literacy means understanding how one local action can affect the wider operation; without it, autonomy fragments the company instead of speeding it up.

## Start with one consequential workflow

An AI-first operating model is earned workflow by workflow. Begin with a bounded flow where the outcome matters, handoffs are visible, and failure can be contained. This creates a real test of the architecture without pretending that every form of work is ready for the same level of delegation.

| Write this before the pilot | The question it must answer |
| --- | --- |
| Outcome | What must be true when the workflow finishes? |
| Boundary | Which actions may the agent take, and which are forbidden? |
| Evidence | What must be recorded so a person can verify the result? |
| Escalation | Which uncertainty, impact, or exception requires judgment? |
| Owner | Which person is accountable for the outcome and for changing the system? |

Run the workflow, inspect its record of actions, and study where people still have to rescue missing context or route routine work. Those interventions reveal design gaps. Fix the goal, information, checks, or authority before adding more agents or widening their scope.

The final test is where human attention enters the flow. If people still carry every routine step between systems, the old architecture remains. When bounded work can move on its own and reach people at moments of genuine judgment, the company has begun to change. Leaders remain responsible for deciding where that boundary belongs.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>Choose one bounded, consequential workflow and define its outcome, authority, evidence, escalation, and owner before deployment. Agent purchases are a weak measure of progress; governed changes to how work moves are the substance of an AI-first company.</p>
</div>
