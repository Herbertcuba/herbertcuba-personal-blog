---
title: "Google vs. Microsoft: Two Frameworks for the Age of Agentic Engineering"
date: 2026-06-29
excerpt: "Google just published a rigorous academic framework for building AI agents. Microsoft shipped a deployable toolkit with 241 artifacts. Both are telling developers the same thing: vibe coding is over. But they're solving different problems."
featuredImage: "/images/posts/agentic-engineering-vs-hve.webp"
layout: post.njk
permalink: /drafts/ba6affbc/
tags: ["ai", "engineering", "wip"]
---

In the same month, Google published a research paper called *Industrial Agentic Engineering* and Microsoft open-sourced a toolkit called Hypervelocity Engineering. Both landed with the same opening argument: vibe coding doesn't scale. Agentic engineering does.

I think that convergence is worth paying attention to.

Two of the largest engineering organizations in the world independently arrived at the same diagnosis. The way most teams are using AI — as a smarter autocomplete, a faster way to generate code they still need to fix — is a dead end. The frameworks they've built to replace it look different on the surface but share a common skeleton underneath.

Here's my attempt to map them against each other.

---

## What each framework actually is

**Google's Agentic Engineering** (authored by Ramón Medrano Llamas at Google Research) treats LLMs as semi-autonomous systems that execute complex, multi-step workflows — what they call *trajectories* — rather than single-shot responses. The key concept is the *harness*: the collection of tools, system prompts, and guardrails that surrounds a raw model and shapes its behavior. Google's core claim is that a model without a harness is nearly useless for production work. The harness is the product.

The framework also introduces what I think is the most interesting concept in either document: *meta-debugging*. When something goes wrong in an agentic workflow, you don't fix the code. You fix the workflow — the search queries, the tool configurations, the prompt constraints. The debugging target shifts from syntax to process.

**Microsoft's Hypervelocity Engineering (HVE)** approaches the same problem from the deployment side. It's an open-source toolkit built on top of GitHub Copilot — agents, prompts, coding instructions, and skill packages that make AI-assisted development repeatable and standards-aligned across a team. The core methodology is called RPI: Research, Plan, Implement, Review.

The RPI insight is clean: AI coding assistants fail on complex tasks because they conflate investigation with implementation. When an agent knows it's in the Research phase, it optimizes for verified truth. When it knows it's in the Implement phase, it optimizes for working code. Keeping those phases separate — with a full context reset between them — produces dramatically more reliable results.

HVE ships with a 9-stage project lifecycle, role-specific guides for engineers, TPMs, architects, security teams, and SREs, and collections for ADO, GitHub, GitLab, Jira, and a dozen other enterprise tools.

---

## Where they converge

Both frameworks are rejecting the same thing. Vibe coding — open-ended, conversational, autocomplete-style AI use — works for small, bounded tasks. It breaks down at complexity, at scale, at team coordination. Neither Google nor Microsoft built their frameworks because AI is too hard. They built them because unstructured AI use produces output that's fast and unreliable in equal measure.

The shared skeleton:

- **Structure over improvisation.** Neither framework lets the AI roam. Both constrain it into defined phases, verified outputs, and explicit guardrails.
- **The engineer as workflow designer.** The work is no longer line-by-line code. It's designing the system the AI operates inside.
- **Verifiable outputs.** Tests, linters, specifications. If the agent's output passes automated validation, it's accepted — regardless of stylistic preference.
- **The harness is where the value lives.** In Google's framing, this is explicit. In HVE, it's the entire toolkit. The model is assumed; the surrounding system is the moat.

---

## Where they diverge

The differences matter depending on where you're sitting.

**Google's framework is diagnostic; HVE is operational.**

Google published research. It gives you a vocabulary — trajectories, harnesses, meta-debugging, autonomous run-time — and a conceptual model for thinking about agentic systems at any scale. It's the kind of paper you read to understand what you're building before you build it. It doesn't ship code.

HVE ships code. You install it as a VS Code extension, run `/rpi-research`, and the framework does its job. It's opinionated, prescriptive, and immediately usable. That's its strength and its constraint.

**HVE is GitHub Copilot-native; Agentic Engineering is model-agnostic.**

HVE is built for teams already using GitHub Copilot. If you're not, most of the tooling doesn't apply. Google's framework doesn't assume a specific model or tool — it's a set of principles that apply regardless of whether you're running on Gemini, Claude, or GPT-4o.

**Google bets on autonomous run-time; HVE bets on human-in-the-loop phases.**

Google's stated goal is to maximize the agent's autonomous run-time — the amount of work it completes without human intervention. HVE, by contrast, requires human handoffs between every RPI phase (the `/clear` between phases is a design feature, not a bug). These are different risk postures. Google is optimizing for throughput. HVE is optimizing for reliability.

**The meta-debugging concept is Google's; the audit trail is HVE's.**

When things go wrong, Google says: debug the workflow. HVE says: you have research files, planning checkboxes, and line-number references — trace backward. Both provide accountability, but through different mechanisms. Google's approach scales better on novel failures; HVE's traces better on known-failure types.

---

## When to use which

I think the answer is clearer than it looks.

**Use Google's Agentic Engineering framework when:**
- You're designing a new agentic system from scratch
- Your team needs a shared mental model before picking tools
- You're working across multiple models or building model-agnostic infrastructure
- You want to think rigorously about harness design, trajectory planning, and autonomous run-time
- You're a technical leader trying to articulate *why* the team's current AI use isn't scaling

It's not a toolkit. It's a thinking framework. Use it in the design and alignment phase.

**Use HVE when:**
- Your team is actively using GitHub Copilot
- You want consistent, auditable AI-assisted development across a team right now
- You need to onboard engineers into structured AI workflows without rebuilding everything from scratch
- You're dealing with complex, multi-step tasks where AI keeps hallucinating or going off-track
- You want repeatable results that can be validated against a spec

It's not a design framework. It's an execution toolkit. Use it when you're building.

The most interesting observation: they're not competing. One answers "how should we think about agentic systems?" The other answers "how do we actually run them today, on this stack, with this team?" A mature engineering organization probably needs both.

---

## The underlying shift

What both frameworks are really describing is a change in what engineers do.

In both models, the engineer's job is no longer to write code. It's to define the work clearly enough that a semi-autonomous system can execute it reliably — and to debug the system when it doesn't. That's a design skill, not an implementation skill. It requires knowing how to specify intent, how to write constraints, how to evaluate outputs against requirements.

Google calls this meta-debugging. HVE calls it the Research and Plan phases. I'd call it the same thing I've been writing about for the past year: the Strategic phase.

The teams that pull ahead won't be the ones who've found the best model. They'll be the ones who've built the best harness — and who know how to improve it cycle over cycle.

Both Google and Microsoft are now saying the same thing, in very different voices.

That's usually a signal worth taking seriously.
