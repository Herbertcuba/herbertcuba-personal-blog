---
title: "Nine Domains of Autonomous AI: What Level 3 Actually Requires"
date: 2026-04-03
excerpt: "Getting to Level 3 autonomous AI isn't about better prompts or smarter models. It requires nine distinct domains of practice — clustered under three areas — working together. Here's what each one covers, why it matters, and what breaks when it's missing."
featuredImage: "/images/posts/anatomy-level-3-agent.webp"
layout: post.njk
permalink: /drafts/anatomy-level-3-rewrite/
tags: ["ai", "agents", "infrastructure", "strategy", "methodology"]
---

I've been running autonomous AI agents in production for months now. Not demos. Not weekend prototypes. Actual agents that manage tasks, write code, publish content, delegate work to each other, and operate across my entire digital life without someone watching over them.

The single biggest lesson? The gap between a chatbot and an autonomous system has very little to do with intelligence. It's almost entirely about everything *around* the intelligence.

In [The Three Levels of AI Acceleration](/posts/2026-03-21-three-levels-ai-acceleration/), I laid out a progression: Level 1 (Chat), Level 2 (Agentic), Level 3 (Autonomous). That article was about recognizing which level you're operating at. This one is about what it actually takes to reach Level 3 — and it turns out the answer isn't a handful of clever tricks. It's nine distinct domains of practice that all need to work together.

## Three Areas, Nine Domains

When I mapped out everything required to run an autonomous agent system, the domains didn't land in a flat list. They clustered naturally under three areas that reflect genuinely different types of work:

**Platform** — where things run. The runtime, the infrastructure, the security boundaries.

**Specification** — what things know. The business context, the product specs, the strategic definition of quality.

**Configuration** — how things behave. The agent identities, the orchestration patterns, the operational quality gates.

Each area maps to a distinct surface of expertise. Platform is engineering. Specification is product and business thinking. Configuration is agent design and operations. One person can stretch across multiple areas, but each area represents a real competence, and when one is weak, the whole system feels it.

Here's the insight I want to unpack: you should match domain ownership to expertise. A product person should own Business Context. An infrastructure engineer should own Infrastructure Ops. An agent designer should own Orchestration. When a domain gets owned by the wrong expertise, it either gets neglected or solved in the wrong way. This mapping is how you turn the nine domains from a checklist into an actual team structure.

Let me walk through all nine.

## Platform Area: Where Things Run

### 1. Harness Selection

The harness — the runtime that sits between the language model and everything else — is the single most consequential decision you'll make. It determines what kind of memory is possible, what delegation patterns are available, how tools get called, and what security boundaries exist. Pick the wrong harness and you'll spend months working around limitations that were baked in on day one.

Six types exist in the current ecosystem:

**General purpose** harnesses are the most common. Claude Code, Codex CLI, Cursor, Windsurf — flexible, good for a wide range of tasks, easy to get started with. The trade-off: they're designed for interactive use. A human is there, steering. Great for Level 2, but they put a ceiling on autonomy.

**Specialized** harnesses are built for specific workflows with deterministic rails. Devin for end-to-end software engineering, Harvey for legal analysis, contract review systems that move through extraction, analysis, risk flagging, summary. Less flexible, dramatically more reliable for the workflows they handle.

**Autonomous** harnesses are event-driven. OpenClaw, LangGraph Cloud, CrewAI — they run on cron schedules, heartbeats, and webhooks. The agent wakes up, checks what needs attention, does work, goes back to sleep. No human in the loop for every action. This is what makes Level 3 possible.

**Hierarchical** harnesses coordinate swarms of agents with a central orchestrator. AutoGen, ChatDev, MetaGPT — one coordinator breaks down goals and assigns work to specialists.

**DAG-based** harnesses plot workflows as directed acyclic graphs with branching, conditional splits, and parallel execution. Prefect, Dagster, Flyte — good when the shape of the process is known upfront but the details need flexibility.

**Hybrid** harnesses combine multiple types. In my experience, a mature Level 3 setup usually ends up here — an autonomous harness like OpenClaw handles lifecycle management while general purpose sub-agents like Claude Code or Codex handle specific domains like content publishing or code review.

Now here's the math that makes this decision critical. Andrej Karpathy talks about the "march of nines" in reliability. If each step in a 10-step workflow has 90% reliability, your end-to-end success rate is about 35%. Run that workflow ten times a day and you're looking at roughly six failures daily. You can't prompt your way to 99.9% reliability on a complex multi-step process. Specialized harnesses with deterministic rails, validation checkpoints, and retry logic can get you there. The harness is what bends the reliability curve.

Model strategy is part of this domain too. Which models for which tasks. Cost versus capability trade-offs. Fallback chains. The harness and the model strategy together form the foundation that constrains everything above.

### 2. Infrastructure Ops

Compute, CI/CD, tool integrations, monitoring, agent deployment, stability. Keeping the lights on.

Agent workloads are fundamentally different from web app workloads. They're long-running, stateful, and unpredictable. They need persistent connections, access to tools and file systems, and reliable uptime. I've seen brilliant agent architectures fall apart because nobody thought seriously about where the agents actually live, how they get deployed, or what happens when one crashes at 3 AM.

Monitoring matters more than you'd think. When an agent runs autonomously, you need to know when it's stuck, when it's burning tokens on a loop, when it's producing degraded output. Traditional application monitoring doesn't cover these patterns. You need observability designed for agentic workloads.

### 3. Security & Compliance

The more autonomous agents become, the heavier security gets. Agents try to be helpful — that's their nature. Give a coding agent access to a production database and ask it to fix a data issue, and it will. It won't stop to consider whether it *should* have production access.

This domain covers permissions, audit trails, data access boundaries, guardrails, and least privilege per agent. An editorial agent can read brand documents and publish drafts, but it cannot access customer data. A financial research agent can scan market data, but it cannot execute trades. A coding agent can deploy to staging but not to production without human approval.

As agent fleets grow, this scales from "configure some permissions" to a full discipline: permission boundaries per agent, data access controls per project, audit trails per action, compliance requirements per jurisdiction, and regular reviews of what each agent can actually reach.

## Specification Area: What Things Know

### 4. Business Context

Brand understanding, personas, competitive landscape, business case. The "why" and "for whom."

This is where product owners and business stakeholders have the most direct influence on agent output. The quality of what agents produce is directly proportional to the quality of the business context they receive. Not just a brief system prompt — actual documentation. Who is the audience? What does the brand sound like? What are the constraints? What's explicitly out of scope?

When Business Context is missing, you get agents that produce technically correct but tonally wrong output. Content that doesn't sound like the brand. Features that solve the wrong problem. Responses that are helpful in a vacuum but miss the actual business need.

### 5. Spec Engineering

Product requirements, user stories, acceptance criteria, content guidelines. The translation from strategy to executable specs.

This is the bridge between business intent and agent behavior. A product owner might say "we need a blog post about our new feature." Spec Engineering turns that into: target audience, key messages, tone, word count range, SEO requirements, internal linking strategy, review criteria. The more precise the spec, the less iteration required.

I think of this as the domain that determines first-draft quality. When specs are detailed and well-structured, agents produce output that needs minor polish. When specs are vague, you get multiple rounds of revision that eat up the time autonomy was supposed to save.

### 6. QA Strategic

Measurement plans, human evaluation criteria, definition of "done." System-level quality ownership.

This is where quality gets defined at the strategic level. What does "good" look like for this system? How do we measure whether the agents are actually producing value? What are the criteria for human evaluation, and how often does it happen?

QA Strategic sits in Specification because it's about *what* quality means — the standards, the metrics, the measurement approach. It's the domain that answers "are we building the right thing, and how would we know?"

Here's something worth calling out: quality appears in both the Specification and Configuration areas. That's intentional. Strategic quality (this domain) defines the standards and measurement plans. Operational quality (domain 9, in Configuration) implements the checks within each agentic workflow. Think of it like the difference between a company's quality policy and the actual inspection process on the factory floor. Both are essential. They serve different purposes and require different expertise.

## Configuration Area: How Things Behave

### 7. Agent Design

Agent identities, behavior configuration, skills, instructions, state management, memory architecture.

Each agent needs a clear identity: who it is, what it's responsible for, how it communicates. A PM agent behaves differently from a QA agent. A coding agent has different skills loaded than an editorial agent. The design includes what the agent knows about itself, its role boundaries, and its behavioral defaults.

Memory architecture is part of this domain. Daily logs capture raw notes about what happened. Long-term memory distills the important stuff — lessons learned, recurring patterns, key context. The agent periodically reviews its own daily logs and curates what's worth keeping. Exactly like a human reviewing their journal.

State management lives here too: how the agent handles context window limits, compaction strategies, session persistence. When an agent has been running for hours, how does it decide what to keep and what to compress? This is an engineering problem most teams haven't started thinking about, and it's critical for agents that run autonomously over long periods.

### 8. Orchestration Design

Routing rules, delegation chains, handoff protocols, workflow maps between agents.

This is the nervous system. When a task comes in, the system decides which agent handles it, through which channel, with what priority. A mature setup might run ten agents with an explicit org chart, routing rules, and retry logic for when an agent doesn't respond.

Delegation patterns matter enormously. A main agent spawns sub-agents, assigns them specific tasks, monitors progress, integrates results. A PM agent dispatches work to a frontend developer agent. A QA agent reviews the output. One well-designed delegation chain replaces hours of manual coordination.

When Orchestration Design is missing, you get agents talking past each other, duplicating work, or silently dropping tasks. When it's well-designed, the whole system feels like a single coherent team.

### 9. QA Operational

Agent-to-agent review criteria, quality gates within agentic workflows, automated checks per task.

This is the companion to QA Strategic (domain 6). Where Strategic defines what quality means, Operational implements it in every agentic workflow. Agents that check their own work and each other's. Did the code compile? Did the tests pass? Does the content match the brand voice? Does the implementation actually meet the spec?

One agent generates, another evaluates, and they loop until the output meets the bar. Most issues get caught and fixed before a human ever sees the result. The human-in-the-loop layer then handles the judgment calls — the things that pass every automated check but need human sense-making. Cultural sensitivity. Brand consistency. Edge cases that only domain experience would catch.

The calibration question is always: how much autonomy at what level of risk? A draft internal document might not need human review. A public article does. A staging deployment might run autonomously. A production deployment probably shouldn't.

## The Level 3 Threshold

When you look at the nine domains through the lens of the three levels, a pattern emerges:

**Level 1 (Chat):** Almost nothing from any area. A system prompt, maybe some injected context. No infrastructure thinking, no memory, no orchestration. It's a conversation.

**Level 2 (Agentic):** Parts of Platform are active — some tool access, maybe code execution. Basic agent design from Configuration. A few domains partially covered. The agent can do real work, but someone is supervising every step. The human is still the orchestrator.

**Level 3 (Autonomous):** All three areas are populated and working together. Platform provides the runtime, infrastructure, and security. Specification provides identity, context, and quality standards. Configuration handles agent behavior, orchestration, and operational quality. The domains reinforce each other. Memory feeds into planning. Delegation relies on routing. Security enables trust. Quality gates calibrate autonomy.

The jump from Level 2 to Level 3 is not linear. It's not about adding a few more tools. It's about the interplay between domains across all three areas. And the harness decision in Platform is what determines whether you can reach Level 3 or get stuck at Level 2. Rich context, decent tools, and solid agent design are all necessary — but if the harness assumes a human is always present, there's a ceiling.

Most organizations will stay at Level 2 for a while, and that's fine. Level 2 is genuinely valuable. But if Level 3 is the goal, it requires infrastructure thinking, not just model thinking. You can't prompt-engineer your way to autonomy. You have to build the nine domains and the connections between them.

## Where This Goes

Nine domains. Three areas. All connected. The domains are the map. They tell you what needs to exist, where the gaps are, and where to invest next.

The practical next step, whether you're an individual builder or leading a team, is to assess your current coverage honestly. Which domains are strong? Which ones are you ignoring? Which ones are owned by the wrong expertise?

In my experience, most people building agent systems have strong instincts about Agent Design and some flavor of Infrastructure — the fun parts. The domains that get neglected are usually Security & Compliance, QA Strategic, and Spec Engineering. Those aren't glamorous. They're also the ones that determine whether your autonomous system is trustworthy enough to actually let run.

The hard part, as always, is the assembly.
