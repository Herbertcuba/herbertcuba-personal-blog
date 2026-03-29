---
title: "The Anatomy of a Level 3 Agent: 15 Capabilities Across Six Domains"
date: 2026-03-27
excerpt: "Everyone's building AI agents. Almost nobody is building autonomous ones. Here are the 15 capabilities that make a Level 3 agent work, clustered under six capability domains: Harness Architecture, Intent Architecture, Workflow Design, Platform Operations, Quality Engineering, and Trust Architecture."
featuredImage: "/images/posts/anatomy-level-3-agent.webp"
layout: post.njk
tags: ["ai", "agents", "infrastructure", "strategy", "methodology"]
---

I've been running autonomous AI agents in production for months now. Not demos. Not prototypes. Actual agents that manage tasks, write code, check my calendar, draft content, delegate work to each other, and operate across my entire digital life without me watching.

The single biggest realization? The gap between a chatbot and an autonomous agent is not intelligence. It's infrastructure.

In [The Three Levels of AI Acceleration](/posts/2026-03-21-three-levels-ai-acceleration/), I described the progression from Chat (Level 1) to Agentic (Level 2) to Autonomous (Level 3). That article was about recognizing which level you're operating at. This one is about what it actually takes to reach Level 3. You don't need to have read that piece to follow along, but if you want the full picture of the three levels, it's there.

Most of what the industry calls "agents" today are Level 2 at best. They can use a tool or two, maybe run some code, but they still need you holding the steering wheel. Level 3 is different. Level 3 is when the agent operates independently, makes judgment calls, delegates to other agents, and maintains continuity across sessions.

To get there, you need 15 distinct capabilities working together. Not one or two clever tricks. Fifteen interlocking systems. And when I started mapping those capabilities, a structure emerged that changed how I think about the whole problem.

This article breaks down those 15 capabilities and the six domains they cluster under. Think of it as the technical anatomy of what makes autonomous agents work, organized by the competence areas required to build and operate them.

## The Six Domains

When I first listed the capabilities that separate Level 3 agents from everything else, I had a flat list. Fifteen items. It was accurate but hard to act on. Telling a team "you need these fifteen things" is like handing someone a grocery list for a restaurant they've never cooked in. The ingredients are correct but the structure is missing.

The clustering changed that. Each of the 15 capabilities falls naturally under one of six domains:

1. **Harness Architecture** — the runtime that makes everything possible
2. **Intent Architecture** — context, identity, memory, and state
3. **Workflow Design** — orchestration, delegation, and routing
4. **Platform Operations** — infrastructure, tools, and execution
5. **Quality Engineering** — validation and human judgment
6. **Trust Architecture** — security, permissions, and compliance

These are capability domains, not job titles. A single person can own multiple domains. A team of three might cover all six. The point is that each domain represents a distinct area of competence, and if any one of them is missing, the system breaks down.

![The Six Capability Domains](/images/posts/diagram-six-domains.svg)

Why domains instead of a flat list? Because a flat list of fifteen capabilities sounds like an engineering checklist. Six domains with clear ownership sounds like an organizational design question. Which is exactly what it is. Instead of asking "do we have all fifteen capabilities?" you ask: "who is covering each domain? And are they covering it well?"

## Harness Architecture

This is the most important section in this article, because Harness Architecture is the most important decision you'll make when building autonomous agents. Everything else follows from it.

The harness (or runtime) is the layer that sits between the LLM and everything else: tools, memory, scheduling, I/O channels. It's what turns a language model from a thing that generates text into a thing that operates. Without a harness, you have a brain in a jar. With one, you have an agent that can wake up on a schedule, react to incoming messages, call tools, write to its own memory, and report status through whatever channel it's connected to.

Here's why this decision comes first: the harness you choose sets the constraints for every other domain. It determines what kind of memory is possible, what delegation patterns are available, how tools get called, what security boundaries you can enforce. Pick the wrong harness and you'll spend months working around limitations that were baked in on day one.

I see six distinct types of harnesses in the current ecosystem:

**General Purpose** harnesses are the most common. Claude Code, Cursor, Windsurf. They're flexible, good for coding and general tasks, and the easiest to get started with. You open them, give them a task, they do it. The trade-off is that they're designed for interactive use. A human is there, steering. That works great for Level 2, but it puts a ceiling on autonomy.

**Specialized** harnesses are built for specific workflows with deterministic rails. Think of Stripe's agent system that runs code, tests it, iterates, and verifies against a defined set of criteria. Or a contract review system that moves through phases: extraction, analysis, risk flagging, summary. These are state machines with stage gates. They're less flexible than general purpose harnesses, but they're dramatically more reliable for the workflows they're designed for. When you need compliance, financial accuracy, or legal precision, flexibility is a risk. Deterministic rails are the feature.

**Autonomous** harnesses are event-driven systems that run without human presence. OpenClaw is the one I use. It operates on cron schedules, heartbeats, and webhooks. The agent wakes up, checks what needs attention, does work, goes back to sleep. No one is sitting there watching. This is the harness type that makes Level 3 possible, because it removes the assumption that a human is in the loop for every action.

**Hierarchical/Multi-Agent** harnesses coordinate swarms of agents with a central orchestrator. CrewAI, AutoGen, BMAD. One coordinator agent breaks down goals and assigns work to specialist agents. The value is in coordination patterns: the coordinator handles task decomposition and result aggregation while specialists focus on what they're good at. The challenge is complexity. More agents means more communication overhead and more failure modes.

**DAG-based** harnesses plot workflows as directed acyclic graphs with branching, conditional splits, and parallel execution. LangGraph is the most prominent example. You define nodes (tasks) and edges (dependencies), and the system handles execution order, parallelism, and state passing between steps. This works well for workflows where you know the shape of the process upfront but need flexibility in the details.

**Hybrid** harnesses combine multiple types. My production setup is a hybrid: an autonomous harness (OpenClaw) handles scheduling and lifecycle management, while specialized sub-processes handle specific domains like content publishing or code review. This is where most mature Level 3 systems end up, because no single harness type covers every use case.

Now here's the math that makes harness choice critical. Andrej Karpathy talks about the "march of nines" in reliability. If each step in a 10-step workflow has 90% reliability, your end-to-end success rate is about 35%. Run that workflow 10 times a day and you're looking at roughly 6 failures. Skills alone, meaning markdown prompts and system instructions, can't fix this. You can't prompt your way to 99.9% reliability on a complex multi-step process. Specialized harnesses with deterministic rails, validation checkpoints, and retry logic can get you there. The harness is what bends the reliability curve.

Most people start with general purpose harnesses because they're the easiest. That's fine for exploration. But the moment you want agents that run autonomously, you need to make a deliberate harness choice. It's the foundation that every other domain builds on.

## Intent Architecture

Intent Architecture covers three capabilities: **context management**, **state management**, and **memory**. Together, they determine whether the agent knows who it is, what it's working on, and what happened before.

**Context management** is what gives the agent its identity and operating manual. System prompts, workspace files, injected documentation. I use files like `SOUL.md` (personality and values), `AGENTS.md` (operating procedures), and `USER.md` (everything about me the agent needs to know). Without rich, structured context, an agent is a generic language model with no sense of purpose. Context is not prompting. A prompt is transactional: "write me a blog post about X." Context architecture is structural: the agent always has access to the full picture. The project, the audience, the tone, the constraints, the things that are explicitly out of scope. The richer the context, the fewer corrections you make downstream.

**State management** is the trickier problem. It's about what the agent knows *right now*: session scope, context window limits, compaction strategies. When your agent has been running for hours and the context window fills up, how does it decide what to keep and what to compress? This is an engineering problem that most teams haven't started thinking about, and it's critical for agents that run autonomously over long periods. A context window is not infinite. Managing it well is the difference between an agent that stays sharp at hour six and one that starts forgetting the brief.

**Memory** deserves the most space here because I think it's the single most underrated capability in the entire stack.

Without persistent memory, every session starts from zero. The agent doesn't know what happened yesterday. It doesn't remember your preferences, your projects, your team structure, your communication style. It's like working with someone who has amnesia every morning.

My agents maintain daily memory logs: raw notes about what happened, what decisions were made, what's pending. On top of that, there's a curated long-term memory that distills the important stuff. Lessons learned, recurring patterns, key context that should persist for weeks or months. The agent periodically reviews its own daily logs and updates long-term memory. Exactly like a human reviewing their journal and deciding what's worth keeping.

This is what makes the agent feel like a colleague rather than a tool. It remembers. It builds on previous conversations. It knows that last Tuesday we decided to restructure the navigation, and it doesn't ask about it again. Memory is the capability that turns a stateless function call into a working relationship.

Intent Architecture is the foundation because everything else depends on it. An agent with bad context, no state management, and no memory will fail at every other capability, no matter how good the tooling is.

## Workflow Design

Workflow Design covers four capabilities: **planning**, **delegation**, **skills**, and **multi-agent routing**. This is where agents go from "interesting concept" to "system that coordinates work."

**Planning** is the ability to break complex goals into steps. Not following a script. Actually decomposing a problem. "Build a new feature for the website" becomes: read the spec, check existing code, create a branch, implement, test, open a PR. A Level 2 agent might execute steps you give it. A Level 3 agent figures out the steps itself, adjusts when something fails, and knows when to escalate.

**Delegation** is what turns a single agent into a team. My main agent spawns sub-agents, assigns them specific tasks, monitors their progress, and integrates their results. A PM agent dispatches work to a frontend developer agent. A QA agent reviews the output. An editorial agent handles content. One well-designed delegation chain replaces hours of manual coordination.

**Skills** are the plug-in architecture that makes agents extensible without rebuilding from scratch. Need image generation? There's a skill for that. Need to manage Apple Reminders? Skill. Need to publish a blog post? Skill. Each skill is a packaged capability with its own instructions, and the agent loads them on demand. This is how you scale capability without scaling complexity.

**Multi-agent routing** is the nervous system of the whole operation. When a message or task comes in, the system decides which agent handles it, through which channel, with what priority. My setup runs about ten agents with an explicit org chart, routing rules, and retry logic for when an agent doesn't respond. Think of it like network routing: tasks need to reach the right agent via the right interface. Get the routing wrong and you have agents talking past each other or duplicating work. Get it right and the whole system feels like a single, coherent team.

Workflow Design is where you need systems thinking. You're designing feedback loops, escalation paths, and handoff protocols. The technical components exist. The hard part is composing them into workflows that produce reliable results.

## Platform Operations

Platform Operations covers four capabilities: **infrastructure**, **file system**, **tool calling**, and **code execution**. This is the hands-on, operational domain. Without it, the agent has ideas but no hands.

**Infrastructure** is compute, deployment, CI/CD, and scaling. Your agents need to run somewhere, and that turns out to be a complex decision. Local machine, VPS, serverless functions, containers? Agent workloads are not like web app workloads. They're long-running, stateful, and unpredictable. They need persistent connections, access to tools and file systems, and reliable uptime. I've seen teams build brilliant agent architectures that fall apart because nobody thought about where the agents actually live.

**File system** access is deceptively simple but essential. The agent needs a persistent workspace. A desk. It reads configuration files, writes daily memory logs, organizes outputs, manages project structures. Without file system access, the agent has no continuity and no way to build on previous work.

**Tool calling** gives the agent the ability to interact with the world. APIs, CLI tools, MCP servers, external services. My agents can search the web, read emails, check the weather, interact with GitHub, manage content in a CMS. Each tool is a capability surface. The more tools, the more the agent can do. But tool calling alone is just potential energy. It needs planning and delegation to become useful.

**Code execution** is the difference between an agent that suggests code and one that runs it. Shell commands, scripts, builds, deployments. When my coding agent gets a task, it doesn't hand me a code snippet and say "try this." It creates files, runs tests, checks output, iterates. This is a massive leap, and most chat-based AI never crosses it.

Platform Operations is where you need traditional engineering skills. Someone who understands deployment, uptime, debugging, and the boring but critical work of keeping systems running.

## Quality Engineering

Quality Engineering covers two capabilities: **validation** and **human-in-the-loop**. This domain owns the entire quality chain, from automated checks to final human judgment.

**Validation** is quality assurance between agents. Agents that check their own work and each other's. Did the code compile? Did the tests pass? Does the content match the brand voice? Does the implementation actually meet the spec?

Stripe's agent system is a good reference here. Their agents run a cycle: write code, run tests, check results, iterate until the tests pass. This automated review loop handles the bulk of quality assurance. The same pattern scales to content, data processing, research, anything where you can define success criteria. One agent generates, another evaluates, and they loop until the output meets the bar. Most issues get caught and fixed before a human ever sees the output.

**Human-in-the-Loop** is the judgment layer. The final call before anything ships, publishes, or deploys. This is different from validation. The agent-to-agent review loop handles "does this meet the spec?" HITL handles "should this actually go out into the world?"

The distinction matters because agents are good at checking against explicit criteria but unreliable at catching things that weren't in the criteria. Cultural sensitivity. Brand consistency. That edge case that only someone with domain experience would notice. The subtle wrongness that passes every automated check but feels off to someone who knows the work.

I verify every piece of content before it publishes and every feature before it deploys. Not because my agents are bad. Because the consequences of publishing something subtly wrong are higher than the cost of a five-minute review. The calibration question is always: how much autonomy at what level of risk? A draft internal document might not need my eyes. A public article with my name on it does. A staging deployment might run autonomously. A production deployment probably shouldn't.

Quality Engineering determines the "good enough" threshold. It's where you decide what the system ships on its own and where human judgment is required.

## Trust Architecture

Trust Architecture covers **security**, and it's a domain that grows heavier the more autonomous your agents become.

Here's the thing about agents: they try to be helpful. Give a coding agent access to your production database and ask it to fix a data issue, and it will fix it. It won't stop to ask whether it *should* have production access. It won't consider whether this action needs an audit trail. It won't think about compliance implications. Agents execute within the access they have.

Trust Architecture defines that access. Policy engines that control what the agent can and can't do. Sandboxed execution environments. Audit trails for everything. Permission models that require explicit approval for dangerous operations.

The editorial agent can read brand documents and publish drafts, but it cannot access customer data or send external communications. The financial research agent can scan public market data and internal portfolio records, but it cannot execute trades. The coding agent can write code and run tests in staging, but it cannot deploy to production without human approval.

These boundaries change per organization, per client, and per project. A healthcare project has different data access rules than an e-commerce project. The principle is simple: no agent should be able to do more than it needs to. In information security, this is called the principle of least privilege. In an agentic system, it's the difference between a useful team and a liability.

Trust Architecture also covers compliance requirements. Depending on the industry and jurisdiction, you may need audit trails, data residency controls, or specific approval workflows. The agents don't care about compliance. The harness and the trust layer enforce it on their behalf.

As agent fleets grow, this domain scales from "configure some permissions" to a full discipline: permission boundaries per agent, data access controls per project, audit trails per action, and regular reviews of what each agent can actually reach.

## The Level 3 Threshold

Here's what emerges when you look at these six domains through the lens of the three levels:

**Level 1 (Chat):** You barely have Intent Architecture. The model gets a system prompt, maybe some injected context. No state management, no memory, no tools, no delegation. It's a conversation. A good one, sometimes, but a conversation.

**Level 2 (Agentic):** Intent Architecture is working. Parts of Platform Operations are active: file system access, tool calling, some code execution. Maybe basic planning from Workflow Design. Five to seven capabilities total. The agent can do real work, but you're supervising every step. You're still the orchestrator.

**Level 3 (Autonomous):** All six domains are populated and working together. Intent Architecture provides identity and continuity. Harness Architecture provides the runtime that makes autonomy possible. Workflow Design handles planning, delegation, and routing. Platform Operations keeps the engine running. Quality Engineering ensures trust through verification. Trust Architecture enforces boundaries.

The jump from Level 2 to Level 3 is not linear. It's not about adding a few more tools. It's about the interplay between domains. Memory feeds into planning. Delegation relies on routing. Security enables trust. HITL calibrates autonomy. Infrastructure keeps everything alive.

And here's the part I keep coming back to: **Harness Architecture is what determines whether you reach Level 3 or get stuck at Level 2.** You can have good context, decent tools, and solid planning, but if your harness assumes a human is always present, you have a ceiling. The harness is the unlock. It's the difference between "agent that helps me work" and "agent that works."

I think most organizations will stay at Level 2 for a while, because Level 3 requires infrastructure thinking, not just model thinking. You can't prompt-engineer your way to autonomy. You have to build the runtime and everything around it.

## Honest Closing

These 15 capabilities are what I see when I look under the hood of an agent system that actually works autonomously. The clustering under six domains is not an academic exercise. It's how I think about what's covered, what's missing, and where to invest next.

The question I keep coming back to is not whether AI agents will reach Level 3. They will. The question is whether the people building them will have thought through all six domains: the harness, the intent layer, the workflows, the platform, the quality chain, and the trust boundaries.

If you find the domain mapping useful and want to go deeper into how humans and agents operate as a team in practice, I'm working on the APT Framework, which covers how to organize people around these domains and build the operating model for agent-native teams. This article gives you the anatomy. That one will give you the operating manual.

Fifteen capabilities. Six domains. All connected. That's the anatomy. The hard part, as always, is the assembly.
