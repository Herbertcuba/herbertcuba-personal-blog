---
title: "Draw the company from the work up"
description: "An AI-first organization lets evidence from bounded workflows determine where agents execute and where people exercise judgment."
tldr: "An AI-first company gives agents bounded responsibility for connected work while people retain purpose, judgment, and accountability. Leaders should define the operating promise, measure where human attention moves, and change the organization only when the evidence supports a different shape."
anthem: true
provenance: verified-by-author
permalink: /drafts/0b3ae4cd/
layout: post.njk
date: 2026-08-17
---

AI agents turn a software capability into an organizational choice: who, or what, is allowed to carry work from request to result. I use *AI agent* to mean software that can pursue a defined goal across several steps, use tools, and act or return a result. [OpenAI's Agents SDK, developer documentation for building tool-using agents](https://openai.github.io/openai-agents-python/), describes this basic loop of instructions, tools, and continued action until a task reaches an outcome.

A *workflow* is the connected sequence of inputs, decisions, actions, and outputs that produces a business result. [Amazon Web Services' Step Functions guide, documentation for step-based software workflows](https://docs.aws.amazon.com/step-functions/latest/dg/welcome.html), gives the technical version: tasks perform units of work and pass information into later steps. Companies have always had workflows. What agents change is the possibility that software, rather than a person, can carry the thread across several of those steps.

My take is that an AI-first company should let agents carry bounded workflows while people set purpose, decide difficult cases, and answer for the consequences. *Bounded* means the agent has a stated outcome, limited access, named handoffs, and a tested way to stop or undo its actions. Parts of the organization may become flatter as a result, but the org chart should record a proven change in the work rather than announce one in advance.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>Agents can carry connected work, which makes a different organizational shape possible. The structure should follow evidence from bounded workflows, with people still responsible for purpose, judgment, and consequences.</p>
</div>

## Write the operating promise first

An agent should receive a promise to keep, not a vague instruction to be useful. Choose one business result, then specify the information it may see, the actions it may take, and the conditions that return the case to a person. An *exception* is a case outside those agreed conditions because the information conflicts, the consequence is too high, or the agent lacks authority.

The result is a work contract. This example is deliberately ordinary because low-drama workflows make weak boundaries easier to see.

<figure class="anthem-visual">
<figcaption><strong>Illustrative work contract: answer a standard order-status request</strong></figcaption>
<table>
<thead>
<tr><th scope="col">Promise</th><th scope="col">Written boundary</th></tr>
</thead>
<tbody>
<tr><th scope="row">Result</th><td>Give an authenticated customer the current order status and the next permitted step.</td></tr>
<tr><th scope="row">Information</th><td>Use the customer request, order record, and carrier status.</td></tr>
<tr><th scope="row">Allowed actions</th><td>Retrieve records, compare status, send an approved update, and schedule a follow-up.</td></tr>
<tr><th scope="row">Forbidden actions</th><td>Do not change an address, issue a refund, or promise compensation.</td></tr>
<tr><th scope="row">Human handoff</th><td>Escalate identity mismatches, conflicting records, lost or damaged orders, and legal complaints.</td></tr>
<tr><th scope="row">Evidence</th><td>Record the source information, tools used, message sent, and data changed.</td></tr>
<tr><th scope="row">Stop and recovery</th><td>A named service owner can disable agent actions, preserve the record, and route open cases to people.</td></tr>
</tbody>
</table>
</figure>

This contract separates flexible interpretation from business authority. The agent can understand many ways of asking “Where is my order?”, while fixed software rules enforce identity checks and prohibited actions. *Decision rights* are the explicit rules for who may decide what and when the decision must move to someone else. They belong in the design before access is granted.

The human owner matters just as much as the agent boundary. Someone remains accountable for the result, someone has authority to stop the service, and the handoff path needs enough capacity to receive difficult cases. If recovery exists only as a sentence in a slide deck, the workflow is not ready to carry live work.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>Give each agent a written operating promise covering the result, information, permissions, prohibitions, handoffs, evidence, owner, and recovery path. Flexible work belongs inside fixed authority.</p>
</div>

## Measure where human attention goes

A workflow can look highly automated while consuming more valuable human attention than before. The automation rate, meaning the share of cases completed without direct intervention, reveals only one part of the result. A small exception queue can still absorb senior specialists if every case is ambiguous, urgent, or hard to reverse.

Measure the whole path instead. An *accepted outcome* is a result that meets the quality standard agreed before the trial, not merely a task the agent reports as complete.

<figure class="anthem-visual">
<figcaption><strong>What the agent dashboard shows, and what the organization still needs to know</strong></figcaption>
<table>
<thead>
<tr><th scope="col">Visible agent measure</th><th scope="col">Organizational measure</th></tr>
</thead>
<tbody>
<tr><td>Cases marked complete</td><td>Accepted outcomes and corrections after completion</td></tr>
<tr><td>Time to agent response</td><td>Waiting time from request to resolved business result</td></tr>
<tr><td>Number of handoffs</td><td>Human review minutes, exception age, and specialist capacity used</td></tr>
<tr><td>Model and tool cost</td><td>Total cost including review, rework, incidents, and recovery</td></tr>
<tr><td>Service uptime</td><td>Evidence that people can stop the agent and restore a safe operating mode</td></tr>
</tbody>
</table>
</figure>

Set a baseline and pass conditions before the trial begins. Then test ordinary requests, difficult exceptions, and a forced stop. *Reversible work* can be halted and returned to a safe prior condition without unacceptable harm. Where the workflow touches personal data, employment, credit, safety, or another high-consequence decision, the relevant privacy, security, legal, risk, and supplier owners should help define that safe condition.

This is the point where an organizational claim becomes falsifiable. If accepted outcomes improve but human review expands sharply, the workflow has shifted work rather than removed it. If response time falls while actions become hard to trace or undo, speed has been bought with fragility. A different structure is justified only when the full result improves.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>Completion rate is not enough. Measure accepted outcomes, total human attention, end-to-end time, full cost, traceability, and recovery before treating an agent-run workflow as evidence for organizational change.</p>
</div>

## Meanwhile in sci-fi

<div class="scifi">
<span class="scifi__label">Meanwhile in sci-fi</span>
<p class="scifi__film">Star Trek: The Next Generation (1987)</p>
<p>The <a href="https://www.startrek.com/series/star-trek-the-next-generation">science-fiction television series, broadcast from 1987 to 1994</a>, follows the crew of the starship Enterprise. Its bridge sets the mission and handles decisions that affect the whole vessel, while specialist teams act within explicit roles and keep the wider command system informed.</p>
<p>The mapping is about shared system literacy, not copying a starship's command hierarchy. Shared system literacy means understanding how a local action affects the wider operation. Agents and teams can act locally only when goals, permissions, current status, downstream effects, and escalation paths are visible. That common picture lets people concentrate on decisions that cross system boundaries instead of supervising every routine move.</p>
</div>

## Let the evidence set the shape

Once the operating promise and the measurements are real, the organizational diagram starts to mean something. The two triangles below describe where repeatable execution sits. They do not predict headcount or suggest that only one person remains at the top.

<figure class="anthem-visual">
<svg viewBox="0 0 900 500" role="img" aria-labelledby="shape-title shape-desc" xmlns="http://www.w3.org/2000/svg">
  <title id="shape-title">A retrofit organization and an AI-first organization</title>
  <desc id="shape-desc">The retrofit triangle points down, with humans running workflows across its broad top and agents assisting at its lower tip. The AI-first triangle points up, with agents running bounded workflows across its broad base and people adding judgment at its top point.</desc>
  <rect width="900" height="500" rx="24" fill="#F5F3EE"/>
  <line x1="450" y1="48" x2="450" y2="452" stroke="#C9C4B8" stroke-width="2"/>
  <text x="225" y="58" text-anchor="middle" font-family="system-ui, sans-serif" font-size="24" font-weight="700" fill="#24211D">Retrofit</text>
  <polygon points="65,105 385,105 225,425" fill="#D8CFC0" stroke="#24211D" stroke-width="3"/>
  <text x="225" y="154" text-anchor="middle" font-family="system-ui, sans-serif" font-size="19" font-weight="700" fill="#24211D">Humans run workflows</text>
  <text x="225" y="184" text-anchor="middle" font-family="system-ui, sans-serif" font-size="15" fill="#4D473F">handoffs · checks · coordination</text>
  <circle cx="225" cy="375" r="31" fill="#7B5CFA"/>
  <text x="225" y="370" text-anchor="middle" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#FFFFFF">AI agents</text>
  <text x="225" y="389" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" fill="#FFFFFF">assist</text>
  <text x="675" y="58" text-anchor="middle" font-family="system-ui, sans-serif" font-size="24" font-weight="700" fill="#24211D">AI-first</text>
  <polygon points="515,425 835,425 675,105" fill="#C9E6D5" stroke="#24211D" stroke-width="3"/>
  <circle cx="675" cy="151" r="36" fill="#24211D"/>
  <text x="675" y="146" text-anchor="middle" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#FFFFFF">Human</text>
  <text x="675" y="165" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" fill="#FFFFFF">judgment</text>
  <text x="675" y="350" text-anchor="middle" font-family="system-ui, sans-serif" font-size="19" font-weight="700" fill="#24211D">Agents run bounded workflows</text>
  <text x="675" y="380" text-anchor="middle" font-family="system-ui, sans-serif" font-size="15" fill="#4D473F">permitted work · evidence · escalation</text>
</svg>
<figcaption>The wide ends show where repeatable work is carried. In an AI-first design, agents execute the permitted path while people retain consequential judgment and accountability.</figcaption>
</figure>

The downward triangle is the retrofit shape. People continue to move information, approve routine transitions, and coordinate the work; agents help with individual steps near the edge. That can improve local productivity without changing the basic dependency on human handoffs.

In the upward triangle, agents carry the permitted path across the broad base. Human attention sits where objectives are set, evidence conflicts, consequences spread beyond the workflow, or the system lacks authority. The point represents concentrated judgment, which may be distributed across operations, product, security, risk, and customer relationships.

Trace a business result from its input to its accepted outcome. When people still copy context and trigger the next action at each junction, the workflow remains human-run. When the system carries the ordinary path and calls people at boundaries agreed in advance, the organization has a credible reason to change. The drawing follows the work.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>The retrofit shape keeps people across the broad execution layer and adds agents at the edge. The AI-first shape puts bounded agent execution at the base and concentrates people where judgment and accountability change the outcome.</p>
</div>

## Make a human bargain the system can keep

A new distribution of execution changes jobs even when it does not immediately change headcount. Routine handling may shrink while exception decisions, system care, coaching, and conflicts between workflows demand more attention. Those responsibilities need owners, capacity, and a path for people to learn them.

Arvind KC, [OpenAI's Chief People Officer](https://openai.com/index/arvind-kc-chief-people-officer/), published a [public LinkedIn post](https://www.linkedin.com/feed/update/urn:li:activity:7485407006204493825/) with ten reflections from his first months at OpenAI, a company that develops advanced AI systems. The screenshot below is one practitioner's account, not a workforce study and not proof that another company should copy OpenAI.

<figure class="anthem-visual anthem-visual--artifact">
<a href="https://www.linkedin.com/feed/update/urn:li:activity:7485407006204493825/">
<img src="/images/posts/arvind-kc-linkedin-post.jpg" alt="Screenshot of Arvind KC's LinkedIn post listing ten reflections from his first months as OpenAI's Chief People Officer" loading="lazy" />
</a>
<figcaption>Source artifact: Arvind KC's ten reflections from his first months at OpenAI. The image links to the public post.</figcaption>
</figure>

Its relevance here is narrow but useful: a people executive is describing the environment of an AI company from inside it. Organizational design around AI is therefore a people-leadership question as well as a technical one. It affects what expertise the company develops, how responsibility is assigned, and whether the remaining human work forms a viable career.

Name an owner for the business outcome, domain experts for difficult exceptions, an operator for permissions and recovery, and a leader for skills and progression. If routine work currently helps junior employees learn the domain, establish another learning route before removing it. If senior specialists become the default destination for hard cases, measure the demand and protect their capacity. Affected employees, and workforce representatives where applicable, should enter the design before access and performance measures are fixed.

The practical starting point is one workflow with a written promise, a measurable baseline, a staffed handoff, and an exercised stop. If it improves the full result, the surrounding roles can change with it. If it merely makes the agent look productive, the organization should remain intact and the workflow should be redesigned.

An AI-first company should be demanding about both sides of the bargain. Agents receive enough room to carry bounded work. People receive real authority over goals, difficult judgment, recovery, learning, and change. The org chart can then become a record of how work actually moves rather than a picture of how it used to move.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>Organizational change is credible only when the human roles are as explicit as the agent boundary. Give people authority, capacity, learning paths, and a voice in the transition, then let proven work determine the org chart.</p>
</div>
