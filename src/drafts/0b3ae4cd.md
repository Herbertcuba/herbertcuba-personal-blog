---
title: "Turn the company upside down"
description: "An AI-first company puts agent-run workflows at the base and human judgment where it changes the outcome."
tldr: "AI-first is an operating-model choice: agents carry bounded, repeatable execution while people set intent, own risk, resolve exceptions, and redesign the system. The shift requires explicit decision rights, visible workflows, operating metrics, and end-to-end accountability."
permalink: /drafts/0b3ae4cd/
layout: post.njk
date: 2026-08-17
anthem: true
---

An AI-first company puts agent-run workflows at its operating base and concentrates human attention where judgment changes the outcome.

An AI agent, in this article, means software that can plan and carry out a sequence of actions across tools toward a goal, within set boundaries. AI-first describes the operating model built around that capability. It does not mean handing every decision to software or adding an assistant to every job.

This distinction is architectural. When agents inherit isolated tasks inside a company still designed around human routing, approvals, and handoffs, they may accelerate parts of the work while leaving its queues intact. A different company begins with the flow of work, assigns routine execution to agents, and then places people at the points where intent, uncertainty, risk, and accountability matter.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>An AI-first company is defined by where execution and judgment sit: agents carry bounded work through the system, while people shape the system and own consequential decisions.</p></div>

## Invert the operating model

An established workflow usually assumes that people will carry information from one step to the next. They open tickets, reconcile systems, request approvals, and chase missing context. When an agent is attached beneath that structure, it can perform a task, but the human workflow still determines how work moves.

That is the retrofit trap. Faster output reaches the same handoffs and approval queues sooner, so local productivity can rise without changing the company's overall capacity to act.

<figure class="article-visual">
<svg viewBox="0 0 1000 470" role="img" aria-labelledby="triangle-title triangle-desc" style="width:100%;height:auto">
  <title id="triangle-title">The retrofit trap compared with an AI-first company</title>
  <desc id="triangle-desc">A downward triangle shows human-run workflows across a broad top with AI agents added at the narrow bottom. An upward triangle shows agent-run workflows across a broad base with human judgment at the narrow top.</desc>
  <text x="245" y="35" text-anchor="middle" font-size="24" font-weight="700" fill="currentColor">RETROFIT TRAP</text>
  <polygon points="55,75 435,75 245,410" fill="#dbeafe" stroke="#2563eb" stroke-width="3" />
  <text x="245" y="120" text-anchor="middle" font-size="21" font-weight="700" fill="#172554">HUMANS RUN WORKFLOWS</text>
  <text x="245" y="153" text-anchor="middle" font-size="17" fill="#172554">routing, handoffs, approvals</text>
  <text x="245" y="340" text-anchor="middle" font-size="19" font-weight="700" fill="#172554">AI AGENTS</text>
  <text x="755" y="35" text-anchor="middle" font-size="24" font-weight="700" fill="currentColor">AI-FIRST COMPANY</text>
  <polygon points="565,410 945,410 755,75" fill="#dcfce7" stroke="#15803d" stroke-width="3" />
  <text x="755" y="125" text-anchor="middle" font-size="18" font-weight="700" fill="#14532d">HUMAN JUDGMENT</text>
  <text x="755" y="330" text-anchor="middle" font-size="21" font-weight="700" fill="#14532d">AGENTS RUN WORKFLOWS</text>
  <text x="755" y="363" text-anchor="middle" font-size="17" fill="#14532d">execution, coordination, evidence</text>
</svg>
<figcaption>The area represents where routine work runs, not the value of people or a prescribed headcount ratio.</figcaption>
</figure>

The inverted design starts with the outcome and works backward. Agents carry the repeatable volume across tools, preserve the evidence of what they did, and stop when a boundary is reached. People remain responsible for setting those boundaries, resolving exceptions, and changing the system when its rules no longer fit reality.

The point at the top is therefore selective attention, not executive control over every move. Human judgment can sit anywhere in the organization, but it should enter because the situation requires judgment rather than because the workflow was built before agents existed.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Retrofitting gives agents tasks inside a human relay system. Inverting the model gives agents bounded end-to-end execution and reserves human attention for decisions the workflow cannot safely settle.</p></div>

## Put judgment where it changes the outcome

Selective human attention only works when judgment is named. Decision rights are the explicit rules for what an agent may decide, when it must stop, who takes over, and who remains answerable for the result.

I think this is the hardest design work. Agent capability will keep changing, but accountability cannot remain vague while the system acts faster.

| Moment in the workflow | Agent authority | Human responsibility | Required evidence |
|---|---|---|---|
| Set the outcome | Propose a plan and identify missing inputs | Own the goal, policy, and risk tolerance | Approved objective and current rules |
| Execute a routine case | Act through permitted tools within set limits | Define the standard and review sampled outcomes | A record of actions, inputs, tools, and results |
| Meet an exception | Stop, explain the uncertainty, and present options | Make the consequential decision | Escalation reason and recorded decision |
| Change the workflow | Surface recurring failures and suggest an adjustment | Approve changes to instructions, tools, or permissions | Tested and versioned change |

Consider a customer refund. An agent may be allowed to verify the order, apply a written policy, issue a refund below a set amount, and update the customer record. A mismatch in identity, a policy conflict, or a higher amount should send the case to a named person with the relevant evidence already assembled.

This design avoids two expensive extremes. Requiring approval for every action keeps the human as the workflow engine, while unlimited agent authority turns speed into unmanaged exposure. Boundaries should follow the stakes: low-risk actions can be sampled, and decisions with material legal, financial, safety, or customer consequences need tighter review and a reliable way to reverse the action.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Agent autonomy becomes useful when authority, stop conditions, escalation ownership, evidence, and reversibility are designed together. Human judgment should govern consequential uncertainty, not repeat routine clicks.</p></div>

## Make the system visible

An AI-first claim needs operating evidence. Observability means being able to reconstruct what an agent did, which information and tools it used, which rule version governed the action, and what happened as a result. Without that view, leaders cannot separate useful autonomy from hidden rework.

Adoption counts and output volume reveal little about the health of a workflow. The more useful numbers describe whether work completes within its boundaries and what happens when it does not.

| Operating measure | How to calculate it | What it reveals |
|---|---|---|
| Completion without takeover | Eligible cases completed within policy without human intervention ÷ all eligible cases | Whether the workflow can carry routine work end to end |
| Human intervention rate | Cases requiring a person ÷ all eligible cases, grouped by reason | Where judgment is necessary and where the design is incomplete |
| Repeat exception rate | Exceptions already seen before ÷ all exceptions | Whether recurring problems are being designed out of the workflow |
| Safe recovery time | Time from a stop or failed action to a verified resolution | Whether the organization can contain and correct failure |

No single percentage should become the target. A high completion rate can conceal poor decisions, and a low intervention rate can mean that the controls are too weak. Each measure needs an outcome check, such as order accuracy, policy compliance, customer resolution, or financial correctness, and it should be compared by workflow, risk level, and system version.

The purpose of these numbers is diagnosis. They show leaders where to improve instructions, permissions, data, tools, or escalation design. They also make the operating model falsifiable: if agent-run workflows create more correction work, slower exceptions, or weaker outcomes, the company has evidence to change course.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Visible action records and workflow-level measures turn AI-first from a branding claim into a testable operating model. Completion matters only alongside outcome quality, intervention reasons, recurring exceptions, and safe recovery.</p></div>

## Meanwhile in sci-fi

<div class="scifi">
<span class="scifi__label">Meanwhile in sci-fi</span>
<p class="scifi__film">Star Trek: The Next Generation (1987)</p>
<p>The television series follows a starship crew with clear command roles and distinct specialties. Officers can act quickly at their own stations because they share the mission, the vessel's current state, and an understood escalation path. Their local choices are informed by how those choices may affect the whole ship.</p>
</div>

The useful mapping is shared system context. An agent in an AI-first company needs the current goal, permitted tools, relevant dependencies, stop conditions, and a named human escalation owner. People need a view across workflows so they can resolve conflicts and revise boundaries. Local autonomy becomes governable when every actor can see enough of the wider system to know when to continue and when to stop.

## Redraw the company around the work

Once agents carry work across systems, the organization has to reconsider boundaries that were built around manual coordination. Departments can still hold expertise and accountability, but a customer request should not need a person to relay it between them simply because the systems and decision rights were designed that way.

This shifts the role of management. An end-to-end owner becomes responsible for the whole workflow, including its outcome, agent permissions, human judgment points, measures, and failure recovery. Specialists define quality and handle difficult cases. Managers improve the conditions under which both agents and people can act, instead of spending most of their time moving status between teams.

Primary accounts from AI-native organizations can help leaders notice assumptions that an org chart hides. Arvind KC, writing publicly about ten reflections from his first months at OpenAI, provides one such artifact. OpenAI is the AI research and product company behind ChatGPT. His account is a perspective from inside one company, so it is a source to examine rather than a universal design standard.

<aside class="source-artifact">
<p><strong>Source artifact</strong></p>
<p><a href="https://www.linkedin.com/feed/update/urn:li:activity:7485407006204493825/">Arvind KC's ten reflections from his first months at OpenAI</a></p>
<p>This link points to the original public LinkedIn post.</p>
</aside>

Start with one consequential workflow and draw it twice. The first drawing should show how work moves today. In the second, assign bounded execution to agents, name every human judgment and stop point, identify the accountable owner, and define the evidence needed before scale.

Then test the design. If removing a human handoff also removes context, authority, or accountability, the foundation is not ready. If the workflow can complete routine cases, expose its reasoning and actions, stop safely, and bring well-formed exceptions to the right person, the operating model has started to turn. Leadership's responsibility is to make those boundaries explicit and keep revising them as capability and risk change.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>The org chart should follow the proven flow of work. Begin with one end-to-end workflow, give it an accountable owner, design agent authority and human judgment together, and scale only when the evidence shows better outcomes and controlled failure.</p></div>
