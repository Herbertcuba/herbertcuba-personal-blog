---
title: "The AI-first company turns the organization upside down"
description: "Why adding agents to old workflows preserves the coordination burden, and how to redesign the company around agent execution and human judgment."
tldr: "An AI-first company makes controlled agent workflows the broad execution layer and concentrates people where intent, judgment, exceptions, and accountability matter most. Reaching that model requires leaders to redesign the flow of work before they redraw roles or the org chart."
image: "/images/posts/architecture-ai-first-company.webp"
anthem: true
provenance: verified-by-author
tags:
  - AI agents
  - organizational design
  - operating models
permalink: /drafts/0b3ae4cd/
layout: post.njk
date: 2026-08-17
---

Most companies are placing AI agents at the narrow end of an old organization. An AI agent is software that can pursue a goal across several steps and use approved digital tools. Yet the people around it still move the work from team to team, reconcile different systems, chase approvals and decide what happens when the process breaks.

That arrangement may make individual tasks faster while leaving the operating model unchanged. An operating model is the way work, decisions, information and accountability fit together. If humans still carry the workflow, the company remains limited by human coordination even when some tasks run at machine speed.

An AI-first company changes the geometry. Agents carry the broad layer of repeatable execution, while humans concentrate their attention where intent, judgment and accountability have the greatest consequence. This does not require unsupervised automation, nor does it make headcount reduction the goal. It requires a deliberate division of work based on what software can carry reliably and what people must still decide.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Adding agents to isolated tasks can improve local speed without changing how the company works. The larger opportunity appears when agent workflows carry execution and people focus on judgment, exceptions and responsibility.</p></div>

## Turn the operating model over

The retrofit trap begins with a reasonable instinct: keep the current process and add an agent wherever a task looks automatable. The agent drafts the document, checks the record or prepares the analysis, but a person still supplies the context, sends the output onward and watches for failure. The task changes; the coordination burden does not.

As more agents enter this arrangement, people can end up coordinating software as well as colleagues. Outputs arrive faster, so review queues grow faster too. Local gains then compete with the same handoffs, approvals and fragmented information that slowed the company before.

<figure class="anthem-viz">
  <svg viewBox="0 0 960 480" role="img" aria-labelledby="operating-geometry-title operating-geometry-desc" xmlns="http://www.w3.org/2000/svg">
    <title id="operating-geometry-title">The retrofit trap and the AI-first company</title>
    <desc id="operating-geometry-desc">A downward triangle shows humans carrying workflows across a wide top layer while AI agents sit at the narrow bottom. An upward triangle shows AI agents carrying workflows across a wide base while humans add judgment and accountability at the narrow top.</desc>
    <rect x="10" y="10" width="450" height="450" rx="24" fill="#F5F2EC"/>
    <rect x="500" y="10" width="450" height="450" rx="24" fill="#EEF4F2"/>
    <text x="235" y="48" text-anchor="middle" font-size="24" font-weight="700" fill="#222222">The retrofit trap</text>
    <polygon points="70,82 400,82 235,420" fill="#E8C7B5" stroke="#8E4B35" stroke-width="3"/>
    <text x="235" y="126" text-anchor="middle" font-size="19" font-weight="700" fill="#3A241D">Humans carry workflows</text>
    <text x="235" y="158" text-anchor="middle" font-size="15" fill="#3A241D">handoffs, approvals, exceptions</text>
    <text x="235" y="337" text-anchor="middle" font-size="17" font-weight="700" fill="#3A241D">AI agents</text>
    <text x="235" y="365" text-anchor="middle" font-size="14" fill="#3A241D">added to tasks</text>
    <text x="725" y="48" text-anchor="middle" font-size="24" font-weight="700" fill="#222222">The AI-first company</text>
    <polygon points="560,420 890,420 725,82" fill="#BFDAD2" stroke="#2F6D60" stroke-width="3"/>
    <text x="725" y="126" text-anchor="middle" font-size="17" font-weight="700" fill="#173B33">Human judgment</text>
    <text x="725" y="154" text-anchor="middle" font-size="14" fill="#173B33">intent and accountability</text>
    <text x="725" y="337" text-anchor="middle" font-size="19" font-weight="700" fill="#173B33">Agents carry workflows</text>
    <text x="725" y="369" text-anchor="middle" font-size="15" fill="#173B33">repeatable execution and coordination</text>
  </svg>
  <figcaption>Two operating geometries. Retrofitting keeps people as the workflow. AI-first design gives agents the repeatable flow and reserves human attention for consequential decisions.</figcaption>
</figure>

The right-hand triangle is wider at the agent layer because repeatable work can be copied and run across many cases. It narrows toward the human layer because people enter where a goal must be interpreted, evidence is incomplete, an exception matters or someone must own the result. The shape is a design principle, not a prediction that every workflow will use the same ratio.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>The retrofit trap automates tasks while preserving human coordination. AI-first design reverses that arrangement: agents carry repeatable workflows, and human involvement concentrates where consequences or uncertainty justify it.</p></div>

## Give agents a real operating surface

Turning the triangle over starts with the workflow, meaning the connected sequence of states, decisions and actions that produces an outcome. An agent cannot carry that sequence on capability alone. It needs a controlled operating surface: clear goals, trusted information, limited access to tools, a visible record of its actions and an agreed path for escalation.

<figure class="anthem-viz">
  <svg viewBox="0 0 960 330" role="img" aria-labelledby="workflow-contract-title workflow-contract-desc" xmlns="http://www.w3.org/2000/svg">
    <title id="workflow-contract-title">The contract for an agent-carried workflow</title>
    <desc id="workflow-contract-desc">Five connected boxes show the conditions for agent execution: goal, context, permissions, evidence and escalation. Human judgment sets the goal and receives exceptions.</desc>
    <rect x="20" y="24" width="920" height="282" rx="24" fill="#F4F6F8"/>
    <text x="480" y="61" text-anchor="middle" font-size="23" font-weight="700" fill="#20252A">The workflow contract</text>
    <line x1="140" y1="160" x2="820" y2="160" stroke="#6C7780" stroke-width="4"/>
    <g fill="#FFFFFF" stroke="#405563" stroke-width="3">
      <rect x="55" y="112" width="150" height="96" rx="16"/>
      <rect x="230" y="112" width="150" height="96" rx="16"/>
      <rect x="405" y="112" width="150" height="96" rx="16"/>
      <rect x="580" y="112" width="150" height="96" rx="16"/>
      <rect x="755" y="112" width="150" height="96" rx="16"/>
    </g>
    <g text-anchor="middle" fill="#22333D">
      <text x="130" y="151" font-size="17" font-weight="700">Goal</text><text x="130" y="178" font-size="13">what good means</text>
      <text x="305" y="151" font-size="17" font-weight="700">Context</text><text x="305" y="178" font-size="13">trusted inputs</text>
      <text x="480" y="151" font-size="17" font-weight="700">Permissions</text><text x="480" y="178" font-size="13">allowed actions</text>
      <text x="655" y="151" font-size="17" font-weight="700">Evidence</text><text x="655" y="178" font-size="13">proof and records</text>
      <text x="830" y="151" font-size="17" font-weight="700">Escalation</text><text x="830" y="178" font-size="13">when people enter</text>
    </g>
    <text x="130" y="254" text-anchor="middle" font-size="14" fill="#4A555C">Human intent</text>
    <text x="830" y="254" text-anchor="middle" font-size="14" fill="#4A555C">Human judgment</text>
  </svg>
  <figcaption>An agent-carried workflow needs more than a prompt. These five conditions turn software capability into controlled execution.</figcaption>
</figure>

The goal says what outcome matters. Context supplies the current and authoritative information. Permissions define which systems the agent may read or change. Evidence makes the work inspectable, while an acceptance test provides a concrete check for whether the result is good enough to continue. Escalation tells the agent when to stop and hand the case to a person.

When any of these conditions is missing, humans compensate. They restate the objective, find the data, repair an unauthorized action or investigate a result with no reliable record behind it. That hidden repair work is why a capable model can still produce a weak operating model.

The practical standard should be bounded autonomy. Let the agent proceed through routine cases when the evidence passes the agreed checks. Bring a person in when confidence falls, consequences rise or the case falls outside the rules. As the system earns trust through visible performance, its scope can expand without making accountability disappear.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Agent execution becomes dependable when a workflow specifies the goal, context, permissions, evidence and escalation path. Bounded autonomy reduces routine handoffs while keeping consequential decisions visible to people.</p></div>

## Move people toward judgment

When software carries more of the flow, people no longer need to act as its default transport layer. Their work moves toward judgment: making a decision when evidence is incomplete, values conflict or a rule cannot settle the case. They also set intent, define constraints, resolve exceptions and improve the system after it fails.

This shift makes ownership more important. Decision rights are the explicit authority to approve, stop or override an action. For every agent-carried workflow, a leader should be able to answer who sets the outcome, what the agent may change, which evidence permits it to continue, who receives an exception and who can stop the system. If those answers are vague, the workflow is not ready for greater autonomy.

<figure class="source-artifact">
  <a href="https://www.linkedin.com/feed/update/urn:li:activity:7485407006204493825/" rel="noopener noreferrer">
    <strong>Source artifact</strong><br />
    Arvind KC: ten reflections from his first months at OpenAI (LinkedIn)
  </a>
  <figcaption>Arvind KC's public post on the professional network LinkedIn is a first-person account from his early months working at OpenAI, an artificial intelligence research and product company. Treat it as one inside view of an AI-first environment, not as a universal benchmark.</figcaption>
</figure>

A primary account like this is useful because organizational design is lived through everyday choices, not declared in a strategy document. The right question is not how to copy one company's habits. It is which conditions allow more work to move through software without making responsibility harder to locate.

This also changes management. A manager creates less value by checking every handoff and more by improving the goals, controls and feedback around the workflow. The role remains human because the system still needs someone to weigh competing outcomes and own the consequences of its operation.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>As agents absorb routine execution, people move toward intent, exceptions and decisions under ambiguity. That shift only works when authority to approve, override and stop the system is explicit.</p></div>

## Meanwhile in sci-fi

<div class="scifi">
  <span class="scifi__label">Meanwhile in sci-fi</span>
  <p class="scifi__film">Star Trek: The Next Generation (1987)</p>
  <p>The television series follows the starship Enterprise, where officers at different stations can act within their specialties because the bridge maintains a shared picture of the vessel, its mission and its risks. Local action remains connected to a visible chain of command, and unusual conditions move quickly to the people authorized to decide.</p>
</div>

The useful mapping is shared operational context: enough common information for a local action to make sense within the whole system. An AI-first company needs the same visibility. Agents may execute locally, but people must be able to see their state, understand downstream effects and intervene through clear authority. Without that common picture, autonomy hides coordination risk instead of removing it.

## Redraw work before the org chart

I think the best starting point is one workflow that matters enough to expose real trade-offs and is bounded enough to inspect. Redraw it from a blank page. Specify the outcome, place agent execution where the work is repeatable, define the evidence each stage must produce and mark the decisions that still require a person.

Then compare that design with the current process. A human step may remain because it carries judgment, trust, legal responsibility or a limit the technology cannot yet handle. An agent step needs an owner, a clear result and a stop condition. This comparison reveals which roles should change, which controls are missing and which handoffs survive only because the old process assumed a person had to move the work.

Only after that should the org chart move. Its purpose is to show where expertise and accountability sit after the workflow has been redesigned. Starting with titles and reporting lines does the opposite: it asks new capabilities to fit the old distribution of work.

The inversion is therefore a management choice, not a software rollout. Speed is one consequence, but the deeper aim is a company that can execute through software while keeping human judgment visible and accountable. Turn the workflow over first, and let the organization follow the work.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Begin with one consequential workflow and design it from a blank page around agent execution, evidence, human decisions and stop conditions. Change roles and reporting lines only after the new flow of work makes their purpose clear.</p></div>
