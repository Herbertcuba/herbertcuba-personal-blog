---
title: "The First Graph Is a Hypothesis"
tldr: "Graph Engineering builds the agentic production system; APEX is the outer improvement loop that uses execution evidence, agent analysis, and domain-expert judgment to reshape that system through versioned, testable, and reversible changes."
provenance: verified-by-author
permalink: /drafts/64bebaf6/
layout: post.njk
date: 2026-08-18
---

Agentic engineering is moving beyond one agent working through one loop. Once work is divided across agents, models, and tools, the system must also coordinate context, fixed code, evaluation, failure routing, parallel work, and human intervention.

Graph Engineering is a useful name for engineering this production system. The production graph covers its topology, the arrangement of steps and connections, along with prompts, context, tools, models, memory, routing, quality gates, and autonomy boundaries. Deterministic components are conventional code paths that should give the same result for the same input.

The dangerous assumption is that our main job is to design the right graph. For complex knowledge work, the first graph can only encode our current understanding of how the work should happen. Graph Engineering builds the production system; APEX, the Agentic Production Execution operating model, provides the outer improvement system through which humans and agents learn from execution and reshape it.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>A production graph is an executable hypothesis about how work should happen. APEX makes improving that hypothesis part of the system.</p></div>

## Every execution should produce evidence

APEX surrounds the graph with four phases. Strategy sets intent, Execution runs the graph, Reflection interprets the evidence, and Calibration adjusts the next cycle. Calibration changes the system against observed results rather than tuning a model in isolation.

Every run should produce the intended result and evidence about the system behind it. An execution trace records agent decisions, tool calls, handoffs, and outcomes, making failures inspectable. Retries, human corrections, cost, latency, and evaluator scores add further signals; an evaluator is an automated or human check of quality.

Anthropic, the AI company behind Claude, offers a public case in its [account of building a multi-agent research system](https://www.anthropic.com/engineering/multi-agent-research-system). It reports that parallel research agents beat its single-agent setup by 90.2% on an internal evaluation, while using about 15 times as many tokens as ordinary chat. The gain came with a cost increase large enough to limit where the design made sense.

More revealing is what the team changed. Traces exposed agents spawning 50 subagents for simple queries, duplicating work, and choosing the wrong tools, so Anthropic added effort budgets and clearer delegation. A tool-testing agent rewrote weak tool descriptions, which the company says cut later completion time by 40%. Human testers found a preference for search-optimized content over authoritative sources and prompted new source-quality guidance. Different signals changed different parts of the graph.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>The output tells you whether the task succeeded. The evidence tells you whether prompts, tools, routing, evaluation, and cost justify the current graph.</p></div>

## APEX is a synthesis with a wider unit of change

Feedback loops are not new. Control theory studies how feedback keeps a changing system near a desired state, while continuous integration and delivery, or CI/CD, test and promote software changes.

Machine learning operations, or MLOps, adds model versioning, monitoring, and data controls. Durable workflow engines preserve state and recovery across long-running jobs, while eval-driven development turns expected agent behavior into repeatable tests. APEX should not pretend to replace any of them.

Its additional claim is a synthesis at a wider unit of change. The improvement target is the full production configuration: which agents exist, what they know, which tools they use, how work is divided, what gets measured, and where people retain authority. Even the quality criteria may change when an expert sees what automated checks missed.

That claim is testable. If the loop cannot increase domain-expert acceptance within fixed cost and latency limits, or beat the team's existing change process without causing more regressions, it has added overhead rather than learning. APEX only earns its place when the system improves.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>APEX combines established engineering practices around a broader object: the complete agentic production system and the changing human definition of quality.</p></div>

## How the graph earns its next version

A Lead Agent, the coordinator that compares runs for system-level patterns, can inspect far more traces than a person. It can find clustered retries, wasted context, evaluator disagreement, and low-value steps. By default it should observe, diagnose, and propose; material changes to data access, models, routing, evaluation, or autonomy boundaries need a named human owner.

At a fixed review cadence, each versioned proposal should carry its evidence and exact graph diff, meaning the proposed configuration change. It also needs failure-derived tests, holdout cases kept aside to catch changes that only fit the known tests, an expert acceptance rule, cost and latency limits, an approver, and a rollback target. After the proposal is replayed against those cases outside production, an approved change can enter a canary release, where a small share of traffic tests the new version before wider promotion.

A rejected transition is useful evidence. Suppose experts reject reports with weak sources and the Lead Agent proposes another model-based evaluator. If offline replay raises the automated score but leaves expert acceptance unchanged or breaches the latency limit, the change does not ship. Revised examples, context, or routing must pass the same holdouts and expert acceptance rule. This limits evaluator gaming, where the score improves but the work does not.

Human-in-the-Loop already covers review, intervention, correction, supervision, and sometimes learning. APEX makes a narrower demand: consequential expert feedback should inform the next system version. Tacit knowledge, expertise people use before they can fully explain it, can become testable examples, criteria, context, routing, or gates. Where that translation remains incomplete, the human checkpoint stays.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Agents can find patterns and propose changes at scale, but a graph earns promotion through fixed tests, expert acceptance, named ownership, and a credible path back.</p></div>

## Meanwhile in sci-fi

<div class="scifi">
<span class="scifi__label">Meanwhile in sci-fi</span>
<p class="scifi__film">Source Code (2011)</p>
<p>Duncan Jones's science-fiction film follows a soldier sent repeatedly into an eight-minute reconstruction of a train bombing. Each run is bounded, but the evidence he carries out changes what happens next.</p>
</div>

The bounded run maps to the production graph, while the people and process outside it decide how evidence should shape the next attempt. APEX needs the same separation: execution can be highly agentic without giving the executing system unilateral authority to rewrite its own objective or controls.

## There is no final graph

A version-one graph records the organization's initial understanding of the work. Later versions may change routing or context, add an evaluator, remove an agent, or replace an unreliable agentic step with deterministic code. The reverse may be right when fixed code cannot handle the task's real variation.

These changes do not prove that the earlier graph was badly engineered. When each transition is tied to evidence, an acceptance rule, and a rollback path, the version history becomes a record of organizational learning. Without those controls, frequent reconfiguration is only churn.

There can be no final graph because models, tools, costs, strategy, and the definition of quality keep moving. That does not justify continuous change. A stable graph is right when the evidence does not support a safer, measurably better version.

Graph Engineering asks how to structure agentic production. APEX asks how to discover a better answer without handing authority to agents or judgment to metrics. Its outer loop turns execution evidence and domain expertise into controlled change, giving human expertise leverage at the scale agents can observe.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>The best graph is the strongest version the evidence currently supports. Its evolution should show accumulated learning, not uncontrolled motion.</p></div>
