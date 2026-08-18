---
title: "You Don’t Build the Perfect Graph"
description: "Graph Engineering builds an agentic production system. APEX creates the outer loop through which humans and agents keep improving it."
tldr: "Graph Engineering defines the production system that performs agentic work. APEX surrounds that graph with an improvement loop: each run produces both an output and evidence, agents help diagnose patterns at scale, domain experts define what good means, and governed changes turn that combined knowledge into the next version."
provenance: verified-by-author
permalink: /drafts/64bebaf6/
layout: post.njk
date: 2026-08-18
---

Agentic engineering is moving beyond one model working through one loop. When a production system coordinates agents, tools, models, context, evaluators, human interventions and parallel work, its architecture becomes a graph of decisions and dependencies.

I use **Graph Engineering** to mean the engineering of that complete system, including the workflow, prompts, responsibilities, tools, memory, models, quality gates and authority behind it. Complex production needs this structure. The danger is assuming our job ends once we have designed and deployed the right graph.

For sufficiently complex knowledge work, we cannot know the right design in advance. The first graph expresses our current understanding of how the work should happen, which makes it a hypothesis rather than a finished solution. Graph Engineering builds the system that performs the work. [APEX](/posts/2026-04-05-apex-framework/), my framework for Agentic Production Execution, is the outer improvement system through which humans and agents learn from that work and reshape the graph.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>The production graph is necessary structure, but its first version is only a testable account of how the work should be done. Graph Engineering builds that system; APEX improves it.</p></div>

## The graph is larger than the diagram

A production graph is the full execution configuration: topology and roles; prompts, context, skills, tools, models and memory; routing and deterministic components; evaluators, quality gates, human checkpoints and autonomy boundaries. Deterministic components are conventional code paths that should produce the same result for the same input. Nodes and edges are only one view of this system.

Each choice is an assumption about the work: what should run in parallel, who needs which context, and whether failure should trigger a retry, handoff or stop. The architecture also expresses where judgment belongs and what quality requires.

Local improvements can therefore produce system-level regressions. Another evaluator may catch defects while making the cycle too slow. A stronger model may improve an intermediate task without changing final acceptance enough to justify its cost. A failing agent may have a weak prompt, the wrong context, a misplaced role, or no reason to exist separately.

The production model therefore cannot stop at design, build and deploy. It has to continue through execution, observation, evaluation, learning and another controlled change to the configuration.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Graph Engineering works on the entire production configuration because prompts, context, models, evaluators, routing and human authority interact. A change is only an improvement when the whole system performs better.</p></div>

## Every run has a second output

APEX organizes the outer loop into Strategic, Execution, Reflection and Calibration: set the boundaries, run the graph, diagnose the evidence, then approve the next version. The graph performs the task; the outer loop improves the system performing it.

Every run produces the deliverable and evidence about the system: failures, retries, corrections, scores, cost, latency and execution traces. A trace is a time-ordered record of decisions, tool calls, handoffs and results. An evaluator is an automated or human check of the output or process.

[Anthropic, the AI company behind Claude, describes this mechanism](https://www.anthropic.com/engineering/multi-agent-research-system) in its account of Claude’s Research system. It reports that parallel subagents outperformed a single Claude Opus 4 agent by 90.2% on an internal evaluation of broad research tasks, including finding board members across technology companies in the S&P 500, an index of large US-listed companies. The system used about 15 times as many tokens as ordinary chat, exposing the gain and its economic boundary.

Simulations using the same prompts and tools exposed wasted effort, duplicated work and poor tool choices, so the team changed effort budgets and guidance. A tool-testing agent rewrote a weak description, which Anthropic says reduced later agents’ completion time by 40%. Human testers caught a preference for search-optimized content farms over authoritative sources, prompting new source-quality guidance. Agents repaired a repeated mechanism; people recognized a quality failure automation had missed.

The practices are established. Control theory studies how feedback keeps a changing system near a desired state; continuous integration and delivery, or CI/CD, tests and promotes code; durable workflow engines preserve state and recovery. Machine-learning operations, or MLOps, versions and monitors models and data, while eval-driven development turns representative cases into tests.

I think APEX’s contribution is the synthesis and its wider unit of change, not the invention of feedback. The loop can revise the complete configuration and its quality criteria while keeping domain experts inside the learning mechanism.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Each execution should deliver work and produce evidence about the system. APEX combines established feedback and delivery practices around a wider object: the complete agentic production configuration and the quality criteria that guide its evolution.</p></div>

## Agents should diagnose, while domain experts decide

A Lead Agent can compare many runs and find repeated retries, wasteful context, weak handoffs and evaluators that do not correlate with final acceptance. Its default authority should be to observe, diagnose and propose, not to promote consequential changes by itself.

That boundary matters because an agent can optimize only what the system knows how to measure. In a [2024 study led by Shreya Shankar, *Who Validates the Validators?*](https://arxiv.org/abs/2404.12272), people refined their criteria while grading model outputs, a pattern called **criteria drift**. A domain expert who rejects an output that passed every automated check may be revealing what the original definition of quality omitted.

Reflection asks why the system missed what the expert saw. The answer can become a better instruction, example, test, routing rule, quality gate or assignment of responsibility.

Human-in-the-Loop, or HITL, already includes intervention, correction, supervision and learning, not only final approval. APEX builds on that foundation but changes the unit of attention: an expert correction becomes evidence for changing the system that will produce later runs.

That change still needs an engineering control plane. Each proposal should contain:

- trace evidence, the observed failure, and a hypothesis;
- a **graph diff**, meaning the exact configuration fields to change;
- offline replay, meaning tests against recorded failures and **holdout cases** withheld from redesign to expose overfitting;
- acceptance, cost and latency limits, plus a named approver, a limited **canary release** and a rollback target, the last safe version.

A canary release sends a small share of production work to the new version. Material changes to data access, models, routing, evaluators or autonomy boundaries require a named human owner, and every decision remains versioned, auditable and reversible. If a second evaluator raises an automated score but leaves expert acceptance unchanged and breaks the latency limit, reject it. That result prevents activity from being mistaken for learning.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Agents can diagnose patterns and draft precise changes at scale, but domain experts remain the source of quality judgment and named owners govern promotion. Evidence becomes progress only through tested, auditable and reversible change.</p></div>

## Meanwhile in sci-fi

<div class="scifi">
<span class="scifi__label">Meanwhile in sci-fi</span>
<p class="scifi__film">Edge of Tomorrow (2014)</p>
<p>In the film, Major William Cage repeats the same battle while retaining what each failed attempt taught him. The battle is the execution graph; the retained evidence and changed tactics form the outer improvement loop. Repetition alone does not create progress. Progress appears when someone can interpret what happened and deliberately change the next run.</p>
</div>

## The graph should become organizational memory

After real executions, graph version two may change routing, version three may narrow context, and version four may move evaluation earlier. A later version could remove an agent, change its autonomy, or replace an unreliable agentic step with deterministic code. Keeping the evidence, hypothesis, decision and result with each version turns this history into operational knowledge rather than unexplained configuration churn.

A regular calibration review makes the distinction real. A named owner examines acceptance, corrections, trace patterns, cost and latency. The group selects one bounded hypothesis, agrees on tests and limits, records the decision, and names the rollback condition. Agents prepare evidence and monitor the next cycle; the owner remains accountable.

There is no final graph because models, tools, costs, customers, strategy and the organization’s understanding of quality will change. Graph Engineering gives us the best production system we currently know how to build. APEX gives humans and agents a governed way to shape a better one.

Domain experts provide judgment, while agents provide scale. Together, they can improve the system without pretending either side should do it alone.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>A versioned graph can become a record of organizational learning when every change carries evidence, ownership, limits and a way back. The goal is a production system that can keep improving under joint human and agent stewardship.</p></div>
