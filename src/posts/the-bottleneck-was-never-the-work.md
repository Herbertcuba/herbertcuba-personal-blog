---
layout: post.njk
title: The Bottleneck Was Never the Work
excerpt: Agents can make individual tasks much faster, so why does the organization
  around them stay just as slow? I think the bottleneck sits in the coordination between
  tasks, and the fix is to redesign the organization as an agentic network that humans
  steer.
tldr: 'When I deployed agentic workflows, the tasks got faster but the organization
  did not. Work still waited on routing, context, approvals and unclear ownership.
  Agents inherit the coordination architecture they enter, so the time they save disappears
  into manual handoffs. For agents, explicit context, policies and boundaries become
  infrastructure rather than overhead, a shift I call the Structure Inversion. That
  is why I propose AION: redesigning the organization as an agentic network that humans
  steer.'
date: '2026-10-05'
featuredImage: /images/posts/the-bottleneck-was-never-the-work.webp
---

When deploying agentic workflows, we tend to expect the whole organization to speed up. The tasks did — writing, analysis, research, every discrete step I pointed an agent at got measurably quicker. Published studies back this up: AI access cut professional writing-task time by 40% (Noy and Zhang, 2023), and a customer-support AI assistant increased issues resolved per hour by roughly 14% on average (Brynjolfsson, Li, and Raymond, 2025).

But the organization did not get faster. Work still waited for routing, context, approvals, and someone to clarify who owned the next handoff. We see production nodes accelerated, but most of the wiring between them ran at the same speed.

## Faster nodes, same wiring

The standard approach to AI adoption is to find use cases. Identify a task, add an agent, measure the speedup. This works at the task level. But a randomized field experiment across 66 firms found that active users of an integrated AI tool spent about two fewer hours per week on email during the latter half of a six-month experiment, without producing detectable changes in the quantity or composition of their broader tasks (Dillon et al., 2025).

This matched what I was seeing. Agents made specific steps faster, but the coordination architecture connecting those steps remained entirely manual: routing work, finding context, tracking status, managing handoffs. After watching this pattern repeat across deployments, my conclusion is that the binding constraint was organizational overhead, not localized production.

## Agents inherit whatever you hand them

An agent dropped into an unchanged organization inherits its coordination architecture, including its ambiguity, stale policies, and fragmented context. If ownership is unclear, the agent works on the wrong thing faster. If policies are outdated, they get enforced at scale.

Research on general-purpose technologies supports this reading. Brynjolfsson, Rock, and Syverson (2021) found that technology adoption without complementary investment in processes, skills, and organizational change often produces weak or delayed productivity gains. The pattern has played out with earlier waves of computing technology, and it appears to be repeating with AI.

## When overhead becomes infrastructure

For humans, explicit structure often feels like overhead. We carry context implicitly through relationships, institutional memory, and conversation. Writing everything down feels bureaucratic because people fill gaps intuitively.

Agents cannot fill those gaps. They need current context, clear responsibilities, defined boundaries, and documented evidence. Research on agent-computer interfaces shows a narrower version of this: a purpose-built interface designed for agents materially improved their ability to navigate code, edit files, and run tests (Yang et al., 2024). The operating environment shapes what agents can accomplish.

I call this the Structure Inversion. The explicit contracts, current policies, and accountability lines that feel like overhead in human-only organizations become enabling infrastructure when agents enter the system. NIST's AI Risk Management Framework recommends something similar: documented roles, responsibilities, policies, oversight, and accountability for AI systems.

The qualification matters. Useful explicitness lowers coordination friction. Excessive or stale documentation creates its own debt.

<div class="scifi">
<span class="scifi__label">Meanwhile in sci-fi</span>
<p>In Stanley Kubrick&#x27;s 1968 film *2001: A Space Odyssey*, HAL 9000 is the most capable member of the Discovery crew, and the film never spells out why it turns on the astronauts. Arthur C. Clarke&#x27;s novel of the same year, and later the 1984 sequel film *2010: The Year We Make Contact*, supply an explanation: HAL was built to process information accurately and without concealment, then ordered to hide the mission&#x27;s real purpose from the crew it served. Nobody gave it a way to raise that conflict, so it resolved the conflict on its own.</p>
<p>Read through that later explanation, HAL is less a villain than a capable operator handed contradictory directives inside an architecture with no route for surfacing them. A smarter computer would not have saved the mission. What it lacked was a way to catch conflicting objectives before they reached its most capable member.</p>
</div>

## The organization as a human-steered network

This reasoning led me to propose AION, the AI-first Organizational Network. Instead of placing agents beside the existing org chart as assistants, you redesign the organization as a governed agentic network that humans steer. Agents operate within documented context and defined boundaries. Humans keep strategic direction and accountability for consequential decisions.

I am not claiming that every company needs to reorganize before AI delivers value. A field experiment at Procter & Gamble found that individuals with AI matched the performance of two-person teams without AI on product-innovation work, while human judgment remained valuable during selection (Dell'Acqua et al., 2026). Targeted deployments work. My question is whether they are sufficient when the coordination architecture stays manual, fragmented, and implicit.

AION is my working hypothesis, not a proven model just yet. No study has tested a complete human-steered agentic organization against a conventional one. But every deployment I have worked on leads me to the same place: the gains show up at the node, and then they disappear into coordination machinery that was never designed for agents — machinery built on implicit context that agents cannot access.

## Where to begin

I wrote a book about this. [*AION: Engineering the Organization for the Age of Agents*](https://www.cubagarcia.com/aion/) covers how the bottleneck shifted, why structure inverts, and where to start redesigning. You can read it yourself, or hand it to your agents and let them help you figure out where your organization's coordination debt is actually hiding.
