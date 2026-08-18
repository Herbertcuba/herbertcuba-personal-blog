---
title: "The graph is a hypothesis"
description: "Graph Engineering builds the agentic production system. APEX is the outer loop that helps humans and agents improve it."
tldr: "Graph Engineering builds the full production system that coordinates agents, tools, models, context, code, evaluation, and human intervention. APEX surrounds that graph with a governed improvement loop: each run produces evidence, agents help diagnose it, domain experts define what better means, and versioned changes are tested, approved, measured, and reversible."
provenance: verified-by-author
permalink: /drafts/64bebaf6/
layout: post.njk
date: 2026-08-18
---

Once an agentic system moves beyond one model working through one prompt, the engineering problem changes. An agentic system is software in which AI models can use tools, make decisions, hand work to other agents, and act across several steps. Production work may also require different models, selected context, conventional code, parallel tasks, evaluators, and human intervention.

I use **Graph Engineering** to describe the engineering of that complete production configuration. The graph performs the work. [APEX, or Agentic Production Execution](/posts/2026-04-05-apex-framework/), is the outer improvement system through which humans and agents learn from each run and reshape what will perform the next one.

The risk is treating the graph as a design problem that ends at deployment. For complex knowledge work, the first graph cannot be a finished answer because many choices about the work remain assumptions until the system meets reality. The first graph is a hypothesis.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>Graph Engineering builds the production system; APEX turns its executions into evidence for improving that system.</p>
</div>

## The graph is the production system

A production graph represents our current best understanding of how work should happen. It decides which agents exist, what each one owns, which context and tools they receive, which model handles each task, and where work runs in sequence or in parallel. It also determines when an agent retries, when another agent takes over, and when a person must intervene.

The word *graph* can make this sound like a picture of nodes and edges. The real object is broader: prompts, skills, memory, routing, models, tools, evaluators, quality gates, human checkpoints, and autonomy boundaries, meaning the decisions an agent may make without approval. It also includes deterministic components, conventional code paths intended to behave the same way for the same input.

These are not merely implementation choices. They encode a theory of the work itself, including what can be separated, what quality means, and which failures matter. Before the system runs, much of that theory is necessarily speculative.

This is why local fixes can mislead. Another evaluator may catch more defects while adding unacceptable delay. A more capable model may improve one step without changing final acceptance, yet raise the cost of every run. An agent that repeatedly fails may have a poor prompt, but it may instead receive the wrong context, sit at the wrong point in the workflow, lack the right tool, or have no reason to exist as a separate agent.

Graph Engineering therefore has to move beyond **Design → Build → Deploy**. Its working cycle is **Design → Execute → Observe → Evaluate → Learn → Reshape → Execute again**.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>The graph is the entire execution configuration, and every component choice is a testable claim about how the work should be done.</p>
</div>

## Every run should teach the outer loop

APEX places a second cycle around execution: **Strategic → Execution → Reflection → Calibration → next cycle**. Strategy sets the purpose, quality standard, and boundaries. Execution produces the work. Reflection interprets what happened. Calibration means changing the production configuration or its quality criteria in response to that evidence.

Every run should therefore produce two outputs. The first is the intended result. The second is evidence about the system: failures, retries, human corrections, evaluator scores, cost, latency, and execution traces. An execution trace is the time-ordered record of agent decisions, tool calls, handoffs, intermediate results, and outcomes. An evaluator is an automated or human check that applies stated criteria to the output or the process.

A Lead Agent, meaning an agent assigned to compare runs and propose system changes, can look across those records for patterns. It can identify where failures concentrate, which step causes most retries, where expensive context adds little value, or where an automated evaluator disagrees with final expert acceptance. Its default role should be **Observe → Diagnose → Propose**, not silently rewrite the live system.

A public example shows the mechanism at a smaller scale. [Anthropic, the company behind the Claude AI assistant, reports](https://www.anthropic.com/engineering/multi-agent-research-system) that a tool-testing agent exercised a flawed Model Context Protocol tool dozens of times. Model Context Protocol, or MCP, is a standard for connecting AI applications to external tools and data. The agent found bugs and important details, then rewrote the tool description. Anthropic says later agents avoided most of the earlier mistakes, and it reported a 40 percent decrease in task-completion time for agents using the revised description. This is Anthropic's first-party account, not an independent benchmark, but it demonstrates the path from repeated trace evidence to a measured configuration change.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>Execution creates both an output and a diagnostic record; APEX uses the second to decide what the next graph should test.</p>
</div>

## Improvement needs a change contract

Continuous improvement already has mature building blocks, and APEX should be explicit about borrowing them. Feedback control adjusts a system using observed performance. Continuous integration and delivery, usually shortened to CI/CD, versions, tests, and promotes software changes. Machine-learning operations, or MLOps, applies related discipline to models and data in production. Durable workflow engines preserve execution state so work can recover after a failure, while [evaluation-driven development](https://platform.openai.com/docs/guides/evaluation-best-practices) tests behavior against explicit cases and criteria.

APEX is a synthesis of these practices at the level of the whole agentic production system. Its additional claim is that prompts, context, agents, routing, evaluators, tools, and human authority must be improved together, because a failure rarely tells us which component caused it. Agents can expand the scale of observation, while domain experts supply judgments that the current measures may not capture.

That claim should be falsifiable. A graph change has earned promotion only when it improves a declared outcome on a fixed test set, remains within cost and latency limits, and does not create unacceptable regressions in expert acceptance or human intervention. If the outer loop only produces more versions and more complexity, it is not learning.

A compact change contract makes that test concrete. It records:

- the trace slice and observed failure
- the diagnosis and proposed graph difference
- failure-derived tests plus holdout cases, which are examples kept out of proposal design
- the acceptance rule and cost, latency, and human-intervention limits
- the named approver, rollout scope, rollback condition, and previous stable version

The Lead Agent may prepare this proposal, but material changes to models, data access, routing, evaluators, or autonomy boundaries require approval from a named human owner. The candidate should first run in offline replay, then on a canary release, meaning a limited share of live work, before wider promotion. Every decision remains versioned, auditable, and reversible.

This process must also allow rejection. If a new evaluator reduces retries but lowers expert acceptance, or if a routing change improves quality while breaching the agreed latency limit, the candidate does not become the next graph. At each calibration review, the team should be able to answer three questions: What evidence justifies this change? Who authorizes it? How will we reverse it?

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>APEX adds value only when graph changes are proposed from evidence, tested against fixed criteria, approved by an accountable owner, and easy to reverse.</p>
</div>

## Expert judgment is part of learning

Human-in-the-Loop, or HITL, already covers more than final approval. In established agent practice, people may supervise, correct, interrupt, escalate, or approve automated work. APEX builds on that foundation by treating expert judgment as information about the production system, not merely a verdict on one output.

Suppose an output passes every automated evaluator and a domain expert still says it is not good enough. The useful question is why the system could not recognize what the expert recognized. Perhaps the evaluator measures the wrong property, important context is missing, the wrong agent owns the task, the examples are weak, or the workflow decomposes the problem incorrectly. The correction belongs in Reflection because it may change the next version of the graph.

Quality criteria can also change as experts see real outputs. In the 2024 human-computer interaction paper [*Who Validates the Validators?*](https://arxiv.org/abs/2404.12272), researcher Shreya Shankar and her co-authors observed people refining evaluation criteria while grading language-model outputs. They called this **criteria drift**. Here, drift does not automatically mean carelessness; it can reveal that the original definition of quality was incomplete.

The practical goal is to turn that new judgment into better context, instructions, examples, evaluations, task decomposition, routing, agent responsibilities, or quality gates. Agents can inspect many executions and surface recurring patterns. Domain experts remain responsible for what good means and for consequential changes to the system. The point is to give their expertise more leverage, not to remove them from the loop.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>Expert rejection is often new design evidence; APEX converts it into testable changes while keeping people responsible for quality and authority.</p>
</div>

## Meanwhile in sci-fi

<div class="scifi">
<span class="scifi__label">Meanwhile in sci-fi</span>
<p class="scifi__film">Edge of Tomorrow (2014)</p>
<p>In the film, Major William Cage repeatedly relives the same battle and changes his actions using what each failed cycle reveals. The mapping to APEX is narrow: another run matters only when evidence from the previous one changes the next production configuration; repetition without diagnosis, authority, and a recorded change is merely another loop.</p>
</div>

## There is no final graph

Imagine a production graph at version one. After several executions, version two changes routing, version three improves context, and version four introduces an evaluator. A later version may remove an unnecessary agent, move evaluation earlier, replace deterministic steps with an agentic loop, or make a previously agentic step deterministic because stable code now does the job better.

Those changes do not prove the earlier graph was badly engineered. When they follow evidence and pass the change contract, they show that the organization learned. The version history becomes a record of that learning rather than a trail of unexplained configuration churn.

Sometimes the right calibration decision is to keep the current graph. Evidence may be weak, gains may disappear on holdout cases, or the proposed change may violate a cost, latency, safety, or regulatory boundary. An improvement system that cannot decide *no change* will eventually optimize for activity instead of outcomes.

Even a strong graph will not stay final. Customers, strategy, models, tools, costs, products, and the organization's understanding of quality will change around it. The practical standard is therefore the best production system we currently know how to build, plus a governed way to discover when it should change.

Graph Engineering gives us the production system. APEX gives humans and agents the improvement system around it. You do not build the perfect graph. You continuously shape it, with domain experts providing judgment and agents providing the scale of observation needed to improve the system without surrendering control.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>There is no final graph: the durable capability is a production system that can improve through evidence, expert judgment, governed change, and reversal.</p>
</div>
