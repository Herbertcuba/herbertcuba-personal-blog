---
title: "We're Building Operating Systems Again — This Time for Agents"
date: 2026-03-18
excerpt: "The last time we built operating systems, we were connecting peripherals, file systems, and applications into coherent computing experiences. Now we're doing it again — for AI agents. I run 10 of them daily. The patterns are identical. The stakes are higher."
featuredImage: "/images/posts/openclaw-agentic-os.webp"
layout: post.njk
tags: ["ai", "openclaw", "infrastructure", "strategy", "agents"]
---

Every few decades, we build a new operating system. Not because we want to — because the computing paradigm shifts and the old abstractions stop working.

DOS gave way to Windows when graphical interfaces demanded it. Unix evolved into Linux when servers needed it. Kubernetes emerged when containers demanded orchestration at scale.

Now it's happening again. At GTC 2025, Jensen Huang compared OpenClaw to Windows — the layer that enabled personal computers. His argument: OpenClaw enables personal agents. I've been running 10 AI agents daily across two organizations, and I think he's underselling it. We're not just building another tool. We're building operating systems again — and the patterns from every previous era are repeating in ways that are both familiar and unsettling.

## The OS Analogy Is Not a Metaphor

When Jensen compared OpenClaw to Windows, he was making a structural argument: Windows gave us a standard way to connect applications, peripherals, file systems, and user interfaces into a coherent computing experience. OpenClaw does the same for AI agents — connecting LLMs, tools, file systems, scheduling, sub-agents, and I/O into something that actually works as a system.

I run 10 agents organized in two teams — one for a side project (CEO, PM, frontend dev, QA, integrations, editorial, marketing) and one for financial research and strategy. They have reporting lines, communication protocols, and escalation chains. They schedule work, send each other messages, review code, and manage tasks through a shared board. They have heartbeats — periodic check-ins where they scan for work and decide whether to act or stay quiet.

That's an operating system. Not metaphorically. Literally.

## What You Learn When Agents Need Identity

Here's something that surprised me early on: my agents kept referring to themselves in the third person. "The assistant will help you with..." — detached, corporate non-language. They had no sense of self.

The fix was an `IDENTITY.md` file for each agent. Name, role, personality traits, communication style. Once my personal assistant knew *who it was* — not just what it did — everything changed. Responses became coherent, contextual, personal.

This is exactly what an OS needs: user profiles. It's not enough to run processes. The processes need identity, context, and persistent memory to function as agents rather than stateless functions. Every agent in my setup has a soul file that defines who they are, a user file that tells them about me, and memory files that survive session restarts. They wake up, read their context, and pick up where they left off.

That's not prompt engineering. That's an identity layer in an operating system.

## Session Architecture Is Process Management

One of the most consequential decisions I worked through was session scope. Early on, each agent had isolated sessions — safe and simple, but agents can't coordinate. The shift to shared context changed everything. My PM agent could reference what the frontend dev had committed. My CEO agent could review status updates. Editorial could coordinate with marketing on content timing.

This is the exact same architectural decision operating systems have faced since the beginning: process isolation vs. shared memory. Isolation is safer but limits capability. Shared access enables coordination but introduces security risks.

When you give an agent access to your Telegram, your calendar, your file system — you're granting kernel-level permissions to a process that might hallucinate. The policy engine isn't optional. It's the thing that makes the whole system viable.

## Routing and Communication Are Networking and IPC

My agents are connected through Telegram bots, each with its own channel bindings and routing configuration. Getting this right was surprisingly similar to configuring network interfaces — explicit bindings telling each agent which channels it owns, which it can read, and which it should ignore. The system works beautifully when the routing is correct and fails in confusing, hard-to-debug ways when it isn't.

But routing is only half of it. The agents also talk to each other through a message-passing primitive with optional timeouts. If the target agent is asleep, the message queues. If it doesn't respond, the sender retries or escalates. My CEO agent sends evening reports. My PM agent dispatches task assignments. My personal assistant routes requests to the right agent based on context.

This is textbook IPC — message queues, timeouts, retry logic, escalation chains — running in an agentic context. They share state through files: a shared task board, memory files encoding decisions, heartbeat state tracked in JSON. Classic shared memory and file coordination, reimagined for agents.

## Process Management Is Real

My CEO agent sends evening summaries. My PM agent needed performance tuning — burning too many tokens on routine status checks, so I adjusted heartbeat frequency and scan depth. That's CPU scheduling and resource allocation. I'm literally tuning how often processes wake up and how aggressively they consume resources.

When Jensen says every company needs an OpenClaw strategy, I think what he means is: every company will need to manage a fleet of agents the way they currently manage a fleet of servers. Provisioning, monitoring, scaling, security policies, resource limits. The operational discipline of DevOps applied to agent operations — AgentOps, if you want a name for it.

## The Strategic Implication

Jensen compared this to Linux, HTTP, and Kubernetes. I think that's the right frame. These were infrastructure layers that became so foundational that ignoring them meant falling behind.

OpenClaw is heading there — not because NVIDIA says so, but because the problem it solves is real: how do you give an AI agent persistent identity, tool access, memory, scheduling, and communication in a way that's composable, extensible, and secure?

Every SaaS company becoming an "Agentic-as-a-Service" company isn't hype. It's the natural consequence of agents needing to interact with services. If your product doesn't have an agent-friendly interface, you're the website that doesn't work on mobile in 2012.

My take on where this goes: the companies that win will treat agent infrastructure with the same seriousness they treat cloud infrastructure. Dedicated teams, security policies, monitoring dashboards, incident response. It means recognizing that you're now running an operating system for entities that can reason, act, and communicate.

## What I'd Tell Someone Starting Today

Start small. One agent, one channel, a few tools. Get the identity file right. Get the memory system working. Feel what it's like when an agent remembers your context across sessions.

Then add a second agent and watch the complexity multiply. You'll immediately understand why routing, session scope, and communication protocols matter. You'll understand why Jensen called it an operating system.

The agentic age isn't coming. For those of us running OpenClaw, it's Tuesday. The OS for the agentic age exists. It works. And like every operating system before it, the interesting part isn't the technology — it's what people build on top of it.
