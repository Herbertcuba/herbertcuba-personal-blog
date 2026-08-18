---
title: "You don't build the perfect graph. You continuously shape it."
tldr: "Graph Engineering builds the agentic production system, while APEX provides the outer improvement loop that uses execution evidence, agent analysis, and domain-expert judgment to reshape that system through governed, reversible changes."
provenance: "verified-by-author"
permalink: /drafts/64bebaf6/
layout: post.njk
date: 2026-08-18
---

Agentic engineering is moving beyond the single-agent loop. A production system may now coordinate agents, models, tools, context, conventional code, human interventions, evaluation, routing, and parallel work. Engineering how those parts cooperate is increasingly described as Graph Engineering.

The name is useful because complex production needs structure. It can also hide a bad assumption: that the work ends when we design the right graph. For complex knowledge work, the first graph encodes many decisions that have not yet survived contact with real work. It is our best current hypothesis about how production should happen.

[APEX, short for Agentic Production Execution](/posts/2026-04-05-apex-framework/), sits around that hypothesis as an improvement system. The graph performs the work. APEX helps humans and agents learn from each execution and change the system that will perform the next one. That distinction is the core of the argument.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>Graph Engineering structures agentic production; APEX is the outer loop that keeps the structure open to evidence and deliberate change.</p>
</div>

## The graph is the production hypothesis

When I say graph, I do not mean only visible nodes and edges. The production graph is the complete execution configuration: its agents and responsibilities, prompts, context, skills, tools, models, memory, and routing. It also includes deterministic components, meaning conventional code paths intended to behave the same way for the same input.

The boundary extends to evaluators, which are automated or human checks of the output or process; quality gates that decide whether work may continue; human checkpoints; and autonomy boundaries that limit what an agent may do without approval. The visual workflow is one representation of this larger system.

These choices encode a theory of the work itself. They decide which tasks belong together, where context is needed, when work should run in parallel, what deserves evaluation, and when a person should intervene. Before production, much of that theory is speculative. Once the graph runs, its parts also interact: a stronger model may raise cost without improving final acceptance, while another evaluator may catch errors but make cycle time unacceptable. A repeated agent failure may originate in its prompt, its tools, its position in the workflow, or the decision to create that agent at all.

This is why Graph Engineering cannot stop at design, build, and deploy. The graph has to be executed, observed, evaluated, and reshaped.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>A production graph contains the whole execution configuration, and every part expresses a provisional theory about how the work should be done.</p>
</div>

## Every run has a second output

In APEX, each execution produces the intended result and evidence about the system that produced it. That evidence includes failures, retries, human corrections, evaluator scores, cost, latency, and execution traces, the time-ordered records of decisions, tool calls, handoffs, and outcomes.

The outer loop moves through strategy, execution, reflection, and calibration. Reflection asks why the system produced this result. Calibration turns that diagnosis into a decision about what to retain or change for the next cycle. The evidence matters only when it can alter the production hypothesis.

A Lead Agent, meaning a supervisory agent that can compare evidence across runs, can help find patterns at a scale no person should inspect manually. It might detect that one handoff causes most retries, expensive context is routinely unused, or an automated evaluator agrees poorly with final human acceptance. By default, its job should be to observe, diagnose, and propose. Reconfiguration is a separate authority.

There is already a public example of this narrower mechanism. [Anthropic, the company behind Claude, reported](https://www.anthropic.com/engineering/multi-agent-research-system) that a tool-testing agent used a flawed external tool dozens of times, identified bugs and important details, and rewrote the tool description. Anthropic says future agents using the new description completed tasks 40 percent faster because they avoided most earlier mistakes. This is a first-party result rather than an independent benchmark, but it shows the trace-to-change path clearly: observe failure, diagnose its cause, change the configuration, and measure the next runs.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>The useful by-product of every execution is evidence that can support a specific change to the next version of the production system.</p>
</div>

## Human judgment needs a change contract

Human-in-the-Loop, or HITL, is an established approach in which people may supervise, correct, interrupt, escalate, or approve automated work. APEX does not dismiss that mature practice. Its additional claim is that expert judgment should improve the production system itself, rather than disappear into a one-off correction at the end of a run.

This matters because quality in complex knowledge work cannot be fully specified upfront. In the 2024 human-computer interaction paper [Who Validates the Validators?](https://arxiv.org/abs/2404.12272), researcher Shreya Shankar and her colleagues studied people evaluating outputs from large language models, the text-generating models used in many AI systems. Participants refined their evaluation criteria while grading and sometimes revisited earlier grades, a phenomenon the researchers called “criteria drift.” The expert who says an output is still wrong after it passes every automated check may therefore be supplying new information about what the system failed to measure. That judgment becomes operational when the team turns it into better context, examples, instructions, task boundaries, routing, or evaluation criteria for the next run.

APEX is a synthesis, not a claim that continuous-improvement practice starts here. Workflow orchestration coordinates steps; evaluation-driven development tests behavior against criteria; MLOps manages changes to models and data in production; continuous integration and delivery versions, tests, and promotes software changes; and feedback control adjusts a system using observed performance. APEX brings these ideas around one object, the entire agentic production configuration, while treating domain-expert judgment as an input to its redesign.

That redesign needs a change contract. Each proposal should preserve four things:

- **Evidence:** the relevant trace segment, observed failure, and affected quality, cost, or latency measure.
- **Hypothesis and graph diff:** the expected reason for improvement and a recorded comparison between the current and proposed configurations.
- **Promotion rule:** replay against failure-derived cases and holdout cases, which are examples kept outside proposal design, with explicit quality, cost, and latency limits.
- **Authority and recovery:** a named approver, a canary release to a limited share of work, an audit record, and a known rollback target.

Material changes to data access, models, routing, evaluators, human checkpoints, or agent authority should require approval from that named owner. A proposal that improves an automated score but breaks the cost limit or fails expert review on holdout cases is rejected. The rejection still teaches the system because the evidence, decision, and boundary remain available for the next proposal.

A regular calibration review can then be simple without being casual: review the evidence, decide whether to reject, test, promote, or reverse a change, and record why. Changing prompts or routing without that record is configuration churn. Versioned changes tied to evidence and measured outcomes are organizational learning.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>Agents can propose improvements at scale, but domain experts define what good means and named owners govern every material, testable, and reversible change.</p>
</div>

## Meanwhile in sci-fi

<div class="scifi">
<span class="scifi__label">Meanwhile in sci-fi</span>
<p class="scifi__film">Edge of Tomorrow (2014)</p>
<p>In the 2014 film, a soldier repeats the same battle while retaining what each failed attempt revealed. The mapping is narrow: the production graph is the current battle plan, while APEX is the mechanism that preserves evidence and changes the next attempt. In a real production system, unlike the film, those changes also need shared judgment, approval, and rollback.</p>
</div>

## There is no final graph

A graph at version one captures the organization's initial understanding of the work. Later versions may change routing, improve context, move evaluation earlier, remove an unnecessary agent, or replace an agentic step with deterministic code. Another version may move in the opposite direction when the evidence supports more autonomy.

Those changes do not prove that the earlier graph was badly engineered. They show that the organization learned. The claim becomes testable in the history: each version should retain the evidence that justified it, the person who authorized it, and the outcome that followed.

Even a strong graph cannot become final because its environment keeps moving. Models, tools, costs, customer expectations, strategy, and the organization's own understanding of quality will change. There is only the best production system we currently know how to build, plus a disciplined way to discover the next one.

The future of agentic production will not be decided by who can draw the most elaborate graph. It will depend on who can improve a production graph without losing judgment or control. Graph Engineering gives us the system that does the work. APEX gives domain experts and agents a governed way to keep shaping it: experts provide judgment, agents provide scale, and both contribute to the system's next version.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>The evolving graph is a record of accumulated learning: expert judgment sets direction, agent observation supplies scale, and governed change turns both into a better production system.</p>
</div>
