---
title: "Google vs. Microsoft: Two Frameworks for the Age of Agentic Engineering"
date: 2026-06-30
excerpt: "Google just published a rigorous academic framework for building AI agents. Microsoft shipped a deployable toolkit with 241 artifacts. Both are telling developers the same thing: vibe coding is over. But they're solving different problems."
featuredImage: "/images/posts/agentic-engineering-vs-hve.webp"
layout: post.njk
tags: ["ai", "engineering", "strategy"]
---

In the same month, Google published a research paper called *Industrial Agentic Engineering* and Microsoft open-sourced a toolkit called Hypervelocity Engineering. Both landed with the same opening argument: vibe coding doesn't scale. Agentic engineering does.

I think that convergence is worth paying attention to.

Two of the largest engineering organizations in the world independently arrived at the same diagnosis. The way most teams are using AI — as a smarter autocomplete, a faster way to generate code they still need to fix — is a dead end. The frameworks they've built to replace it look different on the surface but share a common skeleton underneath.

Here's my attempt to map them against each other.

---

## What each framework actually is

**Google's Agentic Engineering** (authored by Ramón Medrano Llamas at Google Research) treats LLMs as semi-autonomous systems that execute complex, multi-step workflows — what they call *trajectories* — rather than single-shot responses. The key concept is the *harness*: the collection of tools, system prompts, and guardrails that surrounds a raw model and shapes its behavior. Google's core claim is that a model without a harness is nearly useless for production work. The harness is the product.

The framework also introduces what I think is the most interesting concept in either document: *meta-debugging*. When something goes wrong in an agentic workflow, you don't fix the code. You fix the workflow — the search queries, the tool configurations, the prompt constraints. The debugging target shifts from syntax to process.

I think this signals something larger than a debugging technique. It's a sign that we've entered a meta-age of software development — where the product you ship is not the thing you're building. The product is the *system that builds the thing*.

Think about what that means in practice. The engineer's primary artifact is no longer the feature, the service, or the API. It's the harness. The prompts. The evaluation criteria. The workflow constraints. The scaffolding that turns a raw model into a reliable production system. The actual software that reaches users is one or two degrees of abstraction away from where the engineer is working.

This has happened before, but never quite like this. Infrastructure-as-code moved us from configuring servers to writing programs that configured servers. CI/CD moved us from deploying software to writing pipelines that deployed software. Each shift added a layer of abstraction between the engineer and the output. What's different now is the layer isn't mechanical — it's cognitive. You're not just automating the steps. You're encoding the *judgment* about which steps to take.

Meta-debugging is what this looks like when it breaks. You no longer ask "why is this function returning the wrong value?" You ask "why did the agent choose this search strategy?" or "what in the system prompt made it interpret the requirement this way?" The failure mode has moved upstream. And so has the skill required to address it.

The engineers who adapt fastest to this shift won't necessarily be the best coders. They'll be the ones who can reason clearly about systems that reason — who can look at an agent's output and trace backward through the workflow to find the decision point that went wrong. That's a new skill. It sits somewhere between software architecture and epistemology.

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
- **The harness is where the value lives.** In Google's framing, this is explicit. In HVE, it's the entire toolkit. The model is assumed; the surrounding system is the differentiator.

<div style="margin: 2.5rem 0; overflow-x: auto;">
<svg viewBox="0 0 760 330" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:760px;display:block;font-family:'Space Grotesk',system-ui,sans-serif;">
  <rect width="760" height="330" fill="#0a0a0a" rx="4"/>
  <!-- Vertical divider between two columns -->
  <line x1="390" y1="15" x2="390" y2="315" stroke="#222" stroke-width="1"/>
  <!-- Vertical divider: label col -->
  <line x1="175" y1="75" x2="175" y2="315" stroke="#1e1e1e" stroke-width="1"/>
  <!-- Header labels -->
  <text x="283" y="44" fill="#b0ff00" font-size="12" font-weight="700" text-anchor="middle" letter-spacing="2">GOOGLE</text>
  <text x="283" y="60" fill="#444" font-size="9" text-anchor="middle" letter-spacing="1">AGENTIC ENGINEERING</text>
  <text x="573" y="44" fill="#00cfff" font-size="12" font-weight="700" text-anchor="middle" letter-spacing="2">MICROSOFT</text>
  <text x="573" y="60" fill="#444" font-size="9" text-anchor="middle" letter-spacing="1">HYPERVELOCITY ENGINEERING</text>
  <!-- Header separator -->
  <line x1="20" y1="73" x2="740" y2="73" stroke="#222" stroke-width="1"/>
  <!-- ROW 1 — FORMAT -->
  <text x="30" y="101" fill="#555" font-size="10" font-weight="600" letter-spacing="1">FORMAT</text>
  <text x="283" y="101" fill="#ddd" font-size="11" text-anchor="middle">Research paper</text>
  <text x="573" y="101" fill="#ddd" font-size="11" text-anchor="middle">Open-source toolkit</text>
  <line x1="20" y1="112" x2="740" y2="112" stroke="#161616" stroke-width="1"/>
  <!-- ROW 2 — PURPOSE -->
  <text x="30" y="140" fill="#555" font-size="10" font-weight="600" letter-spacing="1">PURPOSE</text>
  <text x="283" y="140" fill="#ddd" font-size="11" text-anchor="middle">Thinking framework</text>
  <text x="573" y="140" fill="#ddd" font-size="11" text-anchor="middle">Execution toolkit</text>
  <line x1="20" y1="151" x2="740" y2="151" stroke="#161616" stroke-width="1"/>
  <!-- ROW 3 — MODEL -->
  <text x="30" y="179" fill="#555" font-size="10" font-weight="600" letter-spacing="1">MODEL</text>
  <text x="283" y="179" fill="#ddd" font-size="11" text-anchor="middle">Agnostic</text>
  <text x="573" y="179" fill="#ddd" font-size="11" text-anchor="middle">GitHub Copilot native</text>
  <line x1="20" y1="190" x2="740" y2="190" stroke="#161616" stroke-width="1"/>
  <!-- ROW 4 — OPTIMIZES -->
  <text x="30" y="211" fill="#555" font-size="10" font-weight="600" letter-spacing="1">OPTIMIZES</text>
  <text x="30" y="224" fill="#555" font-size="10" font-weight="600" letter-spacing="1">FOR</text>
  <text x="283" y="218" fill="#ddd" font-size="11" text-anchor="middle">Autonomous run-time</text>
  <text x="573" y="218" fill="#ddd" font-size="11" text-anchor="middle">Reliability + audit trail</text>
  <line x1="20" y1="234" x2="740" y2="234" stroke="#161616" stroke-width="1"/>
  <!-- ROW 5 — ON FAILURE -->
  <text x="30" y="255" fill="#555" font-size="10" font-weight="600" letter-spacing="1">ON</text>
  <text x="30" y="268" fill="#555" font-size="10" font-weight="600" letter-spacing="1">FAILURE</text>
  <text x="283" y="261" fill="#ddd" font-size="11" text-anchor="middle">Debug the workflow</text>
  <text x="573" y="261" fill="#ddd" font-size="11" text-anchor="middle">Trace the audit trail</text>
  <line x1="20" y1="278" x2="740" y2="278" stroke="#161616" stroke-width="1"/>
  <!-- ROW 6 — BEST FOR -->
  <text x="30" y="303" fill="#555" font-size="10" font-weight="600" letter-spacing="1">BEST FOR</text>
  <text x="283" y="303" fill="#ddd" font-size="11" text-anchor="middle">Designing the system</text>
  <text x="573" y="303" fill="#ddd" font-size="11" text-anchor="middle">Running the system</text>
</svg>
</div>

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

---

## The underlying shift

What both frameworks are really describing is a change in what engineers do.

In both models, the engineer's job is no longer to write code. It's to define the work clearly enough that a semi-autonomous system can execute it reliably — and to debug the system when it doesn't. That's a design skill, not an implementation skill. It requires knowing how to specify intent, how to write constraints, how to evaluate outputs against requirements.

Google calls this meta-debugging. HVE calls it the Research and Plan phases. I'd call it the same thing I've been writing about for the past year: the Strategic phase.

The teams that pull ahead won't be the ones who've found the best model. They'll be the ones who've built the best harness — and who know how to improve it cycle over cycle.

Both Google and Microsoft are now saying the same thing, in very different voices.

That's usually a signal worth taking seriously.

---

## The hardest part neither framework solves

There's a problem both Google and Microsoft sidestep. You can read both documents cover to cover and still walk away without an answer to the questions that actually break organizations:

Who owns the harness when it goes wrong? How do you know if the system is actually getting better over time? Who writes the specs — the tech lead, the PM, the content manager? What happens when agent output starts drifting two weeks into production?

Neither framework answers those questions. They stop at the engineering layer. And that makes sense — they're engineering frameworks, built by engineers, for engineers. The organizational layer was never their problem to solve.

But it's the hardest part. I know this because it's the problem I tried to tackle with [APEX (Agentic Production Execution)](https://dev.to/herbertcuba/apex-agentic-production-execution-4gjh).

APEX is not a competitor to Google's Agentic Engineering or to HVE. You can't out-Google Google on harness infrastructure — they have ADK, Jules, Agents CLI, the A2A Protocol, and distribution baked into every Google Cloud contract. You can't out-Microsoft Microsoft on developer tooling when Copilot is already in every developer's IDE. Competing on the same layer is a fight you don't need to have.

The analogy I keep coming back to: Scrum didn't compete with Java or AWS. It competed with organizational chaos. APEX isn't competing with engineering frameworks — it's competing with the structural vacuum that appears when organizations try to implement those frameworks and nobody knows who owns what.

APEX defines three phases that sit above and around the engineering layer:

<div style="margin: 2.5rem 0; overflow-x: auto;">
<svg viewBox="0 0 760 260" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:760px;display:block;font-family:'Space Grotesk',system-ui,sans-serif;">
  <rect width="760" height="260" fill="#0a0a0a" rx="4"/>
  <path d="M 380 230 Q 680 230 700 130 Q 720 30 380 30 Q 40 30 60 130 Q 80 230 380 230" fill="none" stroke="#1e1e1e" stroke-width="28" stroke-linecap="round"/>
  <defs>
    <marker id="arr" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
      <path d="M0,0 L0,6 L6,3 z" fill="#333"/>
    </marker>
  </defs>
  <rect x="60" y="90" width="185" height="80" fill="#111" stroke="#b0ff00" stroke-width="1.5" rx="3"/>
  <text x="152" y="118" fill="#b0ff00" font-size="12" font-weight="700" text-anchor="middle" letter-spacing="1">STRATEGIC</text>
  <text x="152" y="135" fill="#666" font-size="9" text-anchor="middle">Intent · Specs · Harness</text>
  <text x="152" y="148" fill="#666" font-size="9" text-anchor="middle">design · Eval criteria</text>
  <text x="152" y="162" fill="#444" font-size="8" text-anchor="middle">feeds Google + HVE</text>
  <path d="M 248 130 L 288 130" stroke="#333" stroke-width="1.5" marker-end="url(#arr)"/>
  <rect x="288" y="90" width="185" height="80" fill="#111" stroke="#00cfff" stroke-width="1.5" rx="3"/>
  <text x="380" y="118" fill="#00cfff" font-size="12" font-weight="700" text-anchor="middle" letter-spacing="1">EXECUTION</text>
  <text x="380" y="135" fill="#666" font-size="9" text-anchor="middle">HVE / RPI methodology</text>
  <text x="380" y="148" fill="#666" font-size="9" text-anchor="middle">Google trajectory model</text>
  <text x="380" y="162" fill="#444" font-size="8" text-anchor="middle">10–20× velocity</text>
  <path d="M 476 130 L 516 130" stroke="#333" stroke-width="1.5" marker-end="url(#arr)"/>
  <rect x="516" y="90" width="185" height="80" fill="#111" stroke="#ff6b35" stroke-width="1.5" rx="3"/>
  <text x="608" y="118" fill="#ff6b35" font-size="12" font-weight="700" text-anchor="middle" letter-spacing="1">REFLECTION</text>
  <text x="608" y="135" fill="#666" font-size="9" text-anchor="middle">Evaluate · Calibrate</text>
  <text x="608" y="148" fill="#666" font-size="9" text-anchor="middle">Improve harness config</text>
  <text x="608" y="162" fill="#444" font-size="8" text-anchor="middle">closes the loop</text>
  <path d="M 608 172 Q 608 220 380 220 Q 152 220 152 172" fill="none" stroke="#333" stroke-width="1.5" stroke-dasharray="5,3" marker-end="url(#arr)"/>
  <text x="380" y="215" fill="#333" font-size="8" text-anchor="middle" letter-spacing="1">CALIBRATION FEEDS BACK INTO STRATEGY</text>
  <text x="380" y="26" fill="#b0ff00" font-size="10" text-anchor="middle" font-weight="700" letter-spacing="2">APEX CYCLE — ORGANIZATION-TO-AGENT INTERFACE</text>
</svg>
</div>

**Strategic** — where intent is set. Who owns the specs? What are the evaluation criteria before implementation begins? What are the boundaries agents work within? This phase produces the input that Google's harness consumes and HVE's Research phase depends on. Both frameworks assume someone has already done this work. Often they haven't.

**Execution** — where the work happens. This is exactly where HVE's RPI methodology and Google's trajectory-and-harness model apply. Both are excellent maps for this layer. APEX doesn't rewrite them — it contextualizes them inside a larger cycle.

**Reflection** — where the organization learns. After execution: what changed? Which evaluation criteria were wrong? What would the harness need to do differently? This is the phase that turns velocity into something durable. It's also the phase both frameworks leave largely undefined.

The risks I see: teams adopt HVE or implement agentic principles from Google's paper and produce more, faster. But cycle two looks like cycle one. The harness doesn't improve. The evaluation criteria don't sharpen. The Strategic phase is still held in someone's head. The org is running the Execution phase in isolation, without the feedback loop that would make it compound.

Google and Microsoft have solved 50% of the problem — the engineering layer. The other 50% is organizational: who owns what, how you measure whether it's working, and how the system actually gets better over time. That's what APEX is trying to solve.

The big frameworks tell you how to build the factory. APEX tells you how to run it.
