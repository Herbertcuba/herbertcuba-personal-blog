---
title: "You Don’t Build the Perfect Graph. You Continuously Shape It."
tldr: "Graph Engineering builds the agentic production system, but its first design is only a hypothesis. APEX adds a governed outer loop in which execution evidence, agent diagnosis, and domain-expert judgment produce versioned, tested, and reversible improvements rather than uncontrolled configuration churn."
permalink: /drafts/64bebaf6/
layout: post.njk
date: 2026-08-18
---

Graph Engineering is becoming a useful name for a real engineering problem. Once agentic production moves beyond one model working through one loop, we have to coordinate agents, tools, models, context, conventional code, human intervention, evaluation, routing, and parallel work. Complex production needs that structure.

The danger is treating the structure as the finished answer. Every decision about responsibilities, context, sequence, tools, retries, handoffs, and human intervention encodes an assumption about how the work should be done. Before the system meets real work, many of those assumptions are necessarily speculative. The first graph is a hypothesis.

That is the distinction I want to make. Graph Engineering builds the system that performs the work. [APEX, the Agentic Production Execution framework](/posts/2026-04-05-apex-framework/), is the outer improvement system through which humans and agents learn from the work and reshape the graph. The goal is not a perfect design at launch. It is a production system that can become better without losing control of why it changed.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>A production graph is an executable theory of how work should happen. Graph Engineering builds that theory into a system; APEX keeps testing and revising it after reality arrives.</p></div>

## Every execution tests the graph

Small graphs make the problem look simpler than it is. Add another evaluator and quality may rise while cycle time becomes unacceptable. Give one task a stronger model and its local result may improve without changing final acceptance enough to justify the cost. A failing agent may have a weak instruction, but it may also receive the wrong context, sit at the wrong point in the flow, have the wrong tool, or exist as a separate agent when conventional code would be more reliable.

APEX turns that uncertainty into a cycle: strategic direction sets the intended outcome and constraints; execution performs the work; reflection interprets what happened; and calibration decides what to keep or change before the next run. Every execution should therefore produce two outputs: the intended result and evidence about the system that produced it. That evidence includes failures, retries, human corrections, evaluation scores, cost, latency, and traces, meaning time-ordered records of decisions, tool calls, handoffs, and results.

Within APEX, the graph is broader than a diagram of nodes and edges. It is the complete production configuration: the arrangement of steps and connections; agent responsibilities; prompts, context, reusable skills, tools, models, and memory; routing; deterministic components, which are conventional code paths expected to behave the same way for the same input; and evaluators, meaning automated or human checks of output or process. It also includes quality gates, which stop work or promotion when criteria fail; human checkpoints; and autonomy boundaries, the limits on decisions or actions an agent may take without human approval.

A first-party example shows why that wider unit of change matters. In [its engineering account of Claude’s Research system](https://www.anthropic.com/engineering/multi-agent-research-system), Anthropic, the AI company behind the Claude language models, describes a tool-testing agent that tried a poorly described external tool dozens of times, found failure-causing details, and rewrote the tool description. Anthropic reports that later agents using the new description completed their tasks 40% faster because they avoided most of those mistakes.

That result is not independent validation of APEX. It does demonstrate the mechanism: observe a recurring failure, locate it in the production configuration, change the relevant component, and measure the next executions. The important change was neither a larger model nor a more elaborate graph. It was a better tool description.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>The graph includes every configuration choice that shapes execution, not only its visible topology. Each run should deliver work and produce evidence that can test those choices.</p></div>

## Agents should diagnose, humans should authorize

A Lead Agent, meaning a supervisory agent assigned to study system performance, can compare traces across hundreds or thousands of runs. It can find where failures cluster, which step causes repeated retries, where context is expensive but unused, which evaluator disagrees with final acceptance, and which tasks could run in parallel. That scale of observation is difficult for any human team to sustain.

Its default authority should stop at the proposal. A Lead Agent can observe, diagnose, draft a change, and predict how the change should be tested. A named human owner should approve material changes to data access, models, routing, evaluators, quality criteria, or autonomy boundaries. The mechanism that performs the work should not be able to promote its own redesign without an independent decision.

This does not require a narrow view of Human-in-the-Loop, or HITL. Mature HITL practice already includes intervention, correction, supervision, escalation, and learning, not only final approval. APEX makes one additional move explicit: expert judgment should update the production system instead of disappearing as a one-off correction.

That matters because quality in complex knowledge work cannot always be completed as a specification before execution begins. In [*Who Validates the Validators?* (2024)](https://arxiv.org/abs/2404.12272), a human-computer interaction research paper by Shreya Shankar and colleagues, participants refined their evaluation criteria while grading language-model outputs. The authors call this “criteria drift”: judging real outputs reveals distinctions that were missing from the original rubric.

When a domain expert says, “This isn’t good enough,” even though every automated check passed, Reflection should ask what the system failed to recognize. The answer may be a weak evaluator, missing context, poor examples, the wrong task decomposition, or the wrong strategy. The expert supplies judgment about what good means; agents supply the scale needed to find where the system repeatedly falls short.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Agents can inspect execution at scale and propose improvements, but domain experts remain responsible for quality and named human owners remain responsible for consequential changes.</p></div>

## Improvement needs a change contract

APEX should not pretend that feedback was invented for agents. Control theory studies how feedback keeps a changing system near a desired state. Continuous integration and delivery, or CI/CD, gives software teams versioned testing and promotion. Durable workflow engines preserve execution state and recovery across failures, while machine-learning operations, or MLOps, versions and monitors models, data, and deployments. Eval-driven development turns representative cases into repeatable tests.

APEX borrows feedback, recovery, monitoring, testing, and promotion discipline from those practices. Its additional claim is a synthesis about the unit and source of improvement. The unit is the complete agentic production configuration, including human checkpoints and quality criteria. The source is both machine-scale observation and expert judgment, because the target itself may become clearer when people inspect real outputs.

That claim needs to be falsifiable. Every proposed change should carry a compact contract:

- **Evidence:** the relevant trace slice, the observed failure, its frequency, and the affected outcome.
- **Hypothesis and graph diff:** the expected improvement and an exact record of what will change in prompts, context, tools, models, routing, evaluators, or authority.
- **Evaluation and limits:** offline replay, meaning running the candidate version against saved cases before live use; failure-derived cases; holdout cases withheld from redesign to expose overfitting; an expert acceptance rule; and cost and latency ceilings.
- **Authority:** the domain expert who owns the quality criterion and the named owner who may approve, reject, or stop the change.
- **Promotion and reversal:** a canary release that sends a small share of live work to the candidate version, plus the previous version as an explicit rollback target.

The calibration ritual can be short. At an agreed cadence or execution threshold, the owner reviews evidence collected within a fixed time and cost budget, decides whether to reject the proposal or run a canary, and records the version, rationale, result, and rollback condition. If a new evaluator fixes known failures but adds no improvement on holdout cases and breaches the latency ceiling, the transition is rejected. More configuration is not the same as more learning.

The test is simple enough to state: a new graph version must improve expert acceptance, reduce avoidable intervention, or lower cost or latency while respecting the other agreed limits. If repeated cycles create more versions and complexity without a durable improvement on held-out work, the outer loop has failed for that system. Three questions keep the review honest: What evidence justifies the change? Who authorizes it? How is it reversed?

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>APEX becomes more than continuous-improvement language when each graph change is evidence-based, testable against unseen cases, approved by a named owner, measured within explicit limits, and reversible.</p></div>

## Meanwhile in sci-fi

<div class="scifi">
<span class="scifi__label">Meanwhile in sci-fi</span>
<p class="scifi__film">Edge of Tomorrow (2014)</p>
<p>In the film, Major William Cage, a soldier trapped in a time loop, repeats the same battle while retaining what each failed attempt taught him. The mapping to APEX is precise: repeated execution has value only when evidence from one cycle changes the system used in the next; repetition without retained learning is merely another failure.</p>
</div>

## There is no final graph

Imagine a production graph at version one. After real executions, version two changes routing, version three improves context, version four adds an evaluator, and version five removes an unnecessary agent. A later version may grant one agent more freedom, replace several deterministic steps with an agentic loop, or do the opposite when predictable code proves safer and cheaper.

Those changes do not necessarily mean the earlier graph was badly engineered. They mean the organization learned, provided it retained the evidence, decision, result, and rollback path behind each version. If teams change prompts or routing without that record, the version history shows configuration churn rather than accumulated knowledge.

There cannot be a final graph because the conditions around it do not stand still. Customers, strategy, models, tools, costs, products, and our understanding of quality all change. The best production system is therefore the one we can currently justify and safely improve, not the one we declare complete.

Graph Engineering gives us the production system. APEX gives us the governed outer loop that helps humans and agents improve it together. Domain experts provide judgment, agents provide scale, and named owners preserve authority. You do not build the perfect graph. You continuously shape the best one you can currently defend.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>The evolution of a governed graph can become a record of organizational learning. The goal is not permanent architecture, but continuous improvement that keeps evidence, expert judgment, authority, and reversibility intact.</p></div>
