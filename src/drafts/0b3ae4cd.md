---
title: "The AI-first company turns the triangle upside down"
description: "An AI-first operating model begins with agent-run workflows and places human judgment where consequences become real."
tldr: "An AI-first company is designed from agent-run workflows upward. Agents carry routine execution and coordination within clear boundaries, while people set intent, judge cases outside those limits, and remain accountable for outcomes. The transition starts by redesigning one complete workflow, making every action visible, and giving a named human owner authority over its limits."
format: "anthem"
image: "/images/posts/architecture-ai-first-company.webp"
image_alt: "Two organizational triangles contrasting an AI retrofit with an AI-first company"
provenance: "verified-by-author"
permalink: /drafts/0b3ae4cd/
layout: post.njk
date: 2026-08-17
anthem: true
---

An AI-first company begins work in a different place. An AI agent is software that can plan and take actions across tools within set boundaries. In this model, agents handle more of the routine execution and coordination inside a workflow, the connected sequence of actions and decisions that produces an outcome. People define that outcome, set the boundaries, and step in for exceptions, cases that fall outside the agreed limits or carry serious consequences.

I use *AI-first* to describe that operating model, rather than a company with a large collection of AI tools. The distinction matters because a tool can speed up one task while the wider process still waits for the same handoffs, approvals, and meetings. The organization changes structurally when the flow of work changes.

The design principle is simple: build from agent-run workflows upward, then place human attention where intent, ambiguity, and accountability meet. That turns the familiar organizational triangle upside down.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>AI-first describes an operating model: agents carry bounded execution and coordination, while people own intent, judgment, and consequences.</p>
</div>

## The retrofit trap

A retrofit keeps the workflow organized around human roles. An agent may draft a document, classify a request, or update a record, but people still move the work between departments and reconstruct its context at every boundary.

This can create useful local gains, but it leaves the company’s coordination model intact, so a faster task returns to the same queue. The agent remains at the narrow end of a structure built for human execution.

<figure class="anthem-viz anthem-viz--triangles">
<svg viewBox="0 0 1000 500" role="img" aria-labelledby="triangle-title triangle-desc" width="100%">
<title id="triangle-title">The retrofit trap compared with an AI-first company</title>
<desc id="triangle-desc">A downward-pointing triangle places human-run workflows across the wide top and AI agents at the bottom tip. An upward-pointing triangle places agent-run workflows across the wide bottom and human judgment at the top tip.</desc>
<text x="250" y="45" text-anchor="middle" font-size="26" font-weight="700">Retrofit trap</text>
<polygon points="50,95 450,95 250,410" fill="#9A3412"></polygon>
<text x="250" y="155" text-anchor="middle" font-size="21" font-weight="700" fill="#FFFFFF">Humans run workflows</text>
<line x1="250" y1="410" x2="125" y2="450" stroke="#9A3412" stroke-width="3"></line>
<text x="118" y="462" text-anchor="middle" font-size="18">AI agents added below</text>
<text x="750" y="45" text-anchor="middle" font-size="26" font-weight="700">AI-first company</text>
<polygon points="750,95 550,410 950,410" fill="#166534"></polygon>
<line x1="750" y1="95" x2="875" y2="68" stroke="#166534" stroke-width="3"></line>
<text x="883" y="72" text-anchor="middle" font-size="18">Human judgment</text>
<text x="750" y="355" text-anchor="middle" font-size="21" font-weight="700" fill="#FFFFFF">Agents run workflows</text>
</svg>
<figcaption>The same technology produces a different organization depending on whether agents assist human-run work or carry bounded workflows themselves.</figcaption>
</figure>

The upward triangle changes the unit of design. Agents carry the repeatable flow across systems, including the context that used to be handed from person to person. People remain accountable, while their attention moves toward goals, exceptions, and decisions that cannot be reduced to a rule.

A company can make this shift without pursuing full autonomy. The practical requirement is a clear boundary between routine action and consequential judgment, plus a way to see what the agents did. Without those conditions, leaders lose control of the workflow instead of redesigning it.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>A retrofit accelerates tasks inside a human-run process. An AI-first design changes the process itself, allowing agents to carry repeatable work while people govern its boundaries.</p>
</div>

## Design the workflow before the role

Roles bundle many kinds of work together: routine actions, coordination, expertise, judgment, and accountability. If leaders automate a few duties inside each role, they may never see how the complete outcome should move. Starting with an end-to-end workflow reveals what must happen from the first signal to the final result.

The workflow needs an explicit outcome, approved inputs, action limits, and evidence of what happened. Evidence can be as concrete as the source an agent used, the record it changed, the rule it applied, and the result it produced. This gives a person enough information to review an exception without replaying the entire process.

<figure class="anthem-viz anthem-viz--workflow">
<svg viewBox="0 0 1000 420" role="img" aria-labelledby="workflow-title workflow-desc" width="100%">
<title id="workflow-title">A bounded agent-run workflow</title>
<desc id="workflow-desc">Human intent and boundaries feed an agent-run workflow. Actions within bounds are completed and recorded. Exceptions are sent to a human owner, whose decision can update the workflow boundaries.</desc>
<rect x="55" y="55" width="250" height="90" rx="18" fill="#1E3A8A"></rect>
<text x="180" y="92" text-anchor="middle" font-size="20" font-weight="700" fill="#FFFFFF">Intent and boundaries</text>
<text x="180" y="120" text-anchor="middle" font-size="16" fill="#FFFFFF">Set by people</text>
<line x1="305" y1="100" x2="410" y2="100" stroke="#334155" stroke-width="4"></line>
<polygon points="410,100 392,90 392,110" fill="#334155"></polygon>
<rect x="410" y="55" width="250" height="90" rx="18" fill="#166534"></rect>
<text x="535" y="92" text-anchor="middle" font-size="20" font-weight="700" fill="#FFFFFF">Agent-run workflow</text>
<text x="535" y="120" text-anchor="middle" font-size="16" fill="#FFFFFF">Execute, coordinate, record</text>
<line x1="660" y1="100" x2="765" y2="100" stroke="#334155" stroke-width="4"></line>
<polygon points="765,100 747,90 747,110" fill="#334155"></polygon>
<rect x="765" y="55" width="180" height="90" rx="18" fill="#0F766E"></rect>
<text x="855" y="92" text-anchor="middle" font-size="19" font-weight="700" fill="#FFFFFF">Within bounds</text>
<text x="855" y="120" text-anchor="middle" font-size="16" fill="#FFFFFF">Complete and log</text>
<line x1="535" y1="145" x2="535" y2="245" stroke="#9A3412" stroke-width="4"></line>
<polygon points="535,245 525,227 545,227" fill="#9A3412"></polygon>
<rect x="410" y="245" width="250" height="90" rx="18" fill="#9A3412"></rect>
<text x="535" y="282" text-anchor="middle" font-size="20" font-weight="700" fill="#FFFFFF">Exception</text>
<text x="535" y="310" text-anchor="middle" font-size="16" fill="#FFFFFF">Human owner decides</text>
<path d="M410 290 C270 290, 260 210, 305 145" fill="none" stroke="#334155" stroke-width="4"></path>
<polygon points="305,145 287,153 306,164" fill="#334155"></polygon>
<text x="250" y="275" text-anchor="middle" font-size="16">Decision can refine boundaries</text>
</svg>
<figcaption>The agent completes routine work and records evidence. Ambiguity or higher consequence routes the work to a person with decision authority.</figcaption>
</figure>

With those elements in place, coordination itself can move into the workflow. The agent carries the current context and status between steps, checks whether the next action is allowed, and sends a compact decision package when it needs help. The human receives the relevant evidence and the unresolved choice, rather than a raw transcript or another meeting invitation.

One named person still owns the outcome. Ownership includes setting the limits, reviewing patterns in the exceptions, and changing the workflow when its behavior no longer matches the company’s intent. The workflow can improve without losing accountability when that responsibility is as clear as the execution path.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>Design around the complete outcome. Give agents enough context and authority to move routine work, record evidence at every step, and route consequential exceptions to a named human owner.</p>
</div>

## What one public field note can tell us

Arvind KC, who wrote publicly about his first months at OpenAI, published ten reflections on LinkedIn, the professional social network. OpenAI is an artificial-intelligence research and product company. His post records what one person chose to emphasize from that environment; it cannot establish a universal operating model.

<figure class="anthem-viz anthem-viz--source">
<img src="/images/posts/arvind-kc-linkedin-post.jpg" alt="Screenshot of Arvind KC's LinkedIn post listing ten reflections from his first months at OpenAI" loading="lazy">
<figcaption>Arvind KC’s ten reflections from his first months at OpenAI. <a href="https://www.linkedin.com/feed/update/urn:li:activity:7485407006204493825/">View the public source post on LinkedIn</a>.</figcaption>
</figure>

A field note like this can sharpen the questions leaders take back to their own companies. Examine which routines assume a person will carry context, where software can act safely with the information already available, and which decisions require someone who understands both customer and system consequences.

The answers will differ under another company’s regulation, legacy systems, and customer promises. Public reflections supply hypotheses, while workflow records, exception patterns, and real outcomes provide the evidence needed to accept, reject, or revise them. That process turns an AI-first ambition into a local operating model instead of a copied organization chart.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>Treat Arvind KC’s post as a firsthand signal from one AI-focused company. Use it to form better questions, then validate the answers against your own workflows, risks, and outcomes.</p>
</div>

## Put judgment where consequences become real

The point at the top of the upward triangle represents distributed human judgment. It cannot become a single executive queue; authority should sit close to the relevant context, with clear limits on what can be decided locally and what must be escalated. Otherwise, removing routine handoffs merely creates a new approval bottleneck.

This requires shared system literacy: enough understanding of the whole workflow to anticipate how a local choice may affect customers, risk, and downstream work. Deep expertise still matters, but the owner of an exception also needs to see beyond one task or department.

<figure class="anthem-viz anthem-viz--decision-rights">
<table>
<thead>
<tr>
<th>Situation</th>
<th>Agent action</th>
<th>Human responsibility</th>
</tr>
</thead>
<tbody>
<tr>
<td>Within agreed limits</td>
<td>Complete the action and record the evidence</td>
<td>Review a regular sample of outcomes</td>
</tr>
<tr>
<td>Ambiguous or consequential</td>
<td>Pause and assemble the relevant context</td>
<td>Make and own the decision</td>
</tr>
<tr>
<td>Boundary breached or evidence missing</td>
<td>Stop the workflow and raise the exception</td>
<td>Investigate, correct, and revise the limits</td>
</tr>
</tbody>
</table>
<figcaption>Decision rights should follow consequence. Routine actions can flow; ambiguity and boundary failures move to accountable people.</figcaption>
</figure>

The accountable owner remains responsible even when no person reviews every routine action. Clear boundaries, recorded evidence, regular review, and escalation let the company distribute judgment without losing control. They also turn failures into information for improving the workflow instead of treating each incident as unrelated.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>Human judgment belongs at the points of ambiguity and consequence. Shared visibility, explicit limits, and named ownership make local autonomy possible without turning every decision into an approval queue.</p>
</div>

## Meanwhile in sci-fi

<div class="scifi">
<span class="scifi__label">Meanwhile in sci-fi</span>
<p class="scifi__film">Star Trek: The Next Generation (1987)</p>
<p>The television series follows the crew of the starship Enterprise, where specialists make local decisions inside clear roles, shared instruments, and an explicit command structure. They can act quickly because they see the ship’s condition and understand how one action affects other systems. The mapping to an AI-first company is specific: agents and people need a common view of workflow state, while humans retain decision authority and accountability for the consequences.</p>
</div>

## Begin with one consequential workflow

Begin with one recurring workflow that crosses a real organizational boundary and produces an outcome people can observe. Define that outcome, mark the actions that can be reversed without lasting harm, identify the decisions with serious consequences, and assign one owner. Then specify what evidence the agents must leave behind and exactly when they must stop or escalate.

Run the redesigned flow before changing the whole org chart. If people still carry context between tools, chase the same approvals, and reconstruct what happened, AI has been fitted to the old shape. When agents move the routine work, preserve its evidence, and surface the decisions that need judgment, the triangle has started to turn.

I think this is the leadership task created by the technology shift. As agents carry more execution, people must become more explicit about intent, authority, and responsibility. The AI-first company begins when its operating model reflects that relationship.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>Redesign one consequential workflow end to end. The proof of an AI-first model is visible in how work moves, how evidence survives, where exceptions go, and who remains accountable.</p>
</div>
