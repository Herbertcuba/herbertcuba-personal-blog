---
title: "The graph is a hypothesis"
description: "Graph Engineering builds the agentic production system. APEX creates the outer loop through which humans and agents continuously improve it."
excerpt: "The first production graph is not the answer. It is a testable theory of the work, and every real execution should help humans and agents shape the next version."
tldr: "Graph Engineering builds the agentic production system, but the first graph is only a hypothesis about how work should happen. APEX adds an outer loop that turns traces, evaluations, failures, costs, and expert judgment into governed changes to the full production configuration, allowing humans and agents to improve it together without pretending there is a final graph."
provenance: verified-by-author
featuredImage: "/images/posts/the-graph-is-a-hypothesis.webp"
permalink: /drafts/64bebaf6/
layout: post.njk
date: 2026-08-18
---

Agentic engineering is moving beyond the single-agent loop. Production systems now coordinate agents, models, tools, context, conventional code, human interventions, routing, and work that may run in sequence or in parallel. They also need evaluators, which are automated or human checks that judge an output against stated criteria.

Graph Engineering is a useful name for engineering that structure: how tasks, decisions, resources, and controls move through an agentic production system. The idea is sound. The dangerous assumption is that our job ends when we have designed the right graph.

For sufficiently complex knowledge work, there will be no right graph in that final sense. The first graph is our current best hypothesis about how the work should happen. Graph Engineering builds the production system, while [APEX](/posts/2026-04-05-apex-framework/), my operating model for Agentic Production Execution, creates the outer improvement system through which humans and agents learn from real runs and reshape it.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Graph Engineering structures agentic production. APEX keeps that structure provisional by turning every execution into evidence for the next version.</p></div>

## The graph is a hypothesis

A production graph is an executable description of the work. It assigns responsibilities, selects models and tools, decides what context each agent receives, and places sequence, parallel work, retries, handovers, evaluations, deterministic logic, and human intervention at specific points.

Those choices encode a theory of the work itself. They express what can be separated, what depends on an earlier decision, what can be measured, and where judgment remains necessary. Before the system encounters enough real work, much of that theory is necessarily speculative.

A 2026 study titled [*Capable language models can outgrow the benefits of collaboration*](https://www.nature.com/articles/s42256-026-01268-y), published in the AI journal *Nature Machine Intelligence*, shows how much the result can depend on the match between task and architecture. The researchers compared 260 configurations across five agent architectures, three model families, and six benchmarks. Centralized coordination improved performance by as much as 80.8% over a single agent on Finance Agent, where financial factors could be investigated in parallel. On PlanCraft, a benchmark built around sequential planning, one multi-agent configuration performed 70% worse because extra decomposition and communication consumed effort without helping the tightly dependent work.

That study does not validate APEX, and benchmark results do not tell us which enterprise graph to build. It does show why architecture must be treated as a claim to test. Another evaluator may catch failures while slowing every run. A stronger model may improve one step without changing final acceptance enough to justify its cost. A failing agent may have a weak prompt, but it may instead receive the wrong context, sit in the wrong place, have the wrong tools, or have no reason to exist as a separate agent.

Design, build, and deploy are therefore only the beginning. Production Graph Engineering has to continue through execution, observation, evaluation, learning, and another design decision.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>A graph contains assumptions about how work decomposes and where quality comes from. Real outcomes must test those assumptions because a local improvement can create cost or failure elsewhere.</p></div>

## Every run should change what we know

Every execution produces two outputs. The first is the intended result. The second is evidence about the production system that created it.

An [execution trace](https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents) is a time-ordered record of a run, including model outputs, tool calls, intermediate results, and other interactions. When the trace is connected to failures, retries, human corrections, evaluation scores, cost, and latency, it becomes material for improving the system rather than merely debugging one bad result.

APEX places an outer loop around the execution graph: strategic intent leads to execution, execution produces evidence for reflection, and reflection leads to calibration before the next cycle. Reflection means diagnosing what the evidence reveals. Calibration means making an approved adjustment to the production system based on that diagnosis and on human judgment. The graph performs the work; the outer loop improves the system performing it.

This also changes what we mean by “the graph.” Its execution structure includes topology, meaning how components connect, along with agent roles, routing, and deterministic components: conventional code paths intended to behave the same way for the same input. Its working resources include prompts, context, skills, tools, models, and memory. Its assurance and authority layer includes evaluators, quality gates, human checkpoints, and autonomy boundaries that state what an agent may do without approval. The visible nodes and edges are only one representation of this full, versioned configuration.

Existing disciplines already control important parts of that configuration. Release pipelines test and promote software changes. Model operations, usually called MLOps, covers the deployment, monitoring, and updating of models and their data. Durable workflow engines preserve the state of long-running work through failures, while evaluation systems test behavior. APEX should use that machinery rather than replace it. Its narrower job is to coordinate the decision across the whole configuration, including a decision that the quality criteria themselves need to change.

Consider a simple structural example. If traces show that a synthesis step creates most retries, a candidate change might move a source-quality evaluator earlier and reduce the context passed into synthesis. That proposal is still another hypothesis. APEX is the process that carries it from evidence to diagnosis, test, human judgment, and a governed production decision.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>APEX treats the run and its trace as a second production output. Its distinct job is to turn that evidence into an approved change across the complete execution configuration, including how quality is defined.</p></div>

## Agents can inspect the system, but experts define good

Agents do not have to operate only inside the graph. A Lead Agent, meaning an agent assigned to inspect results across many runs, can find concentrated failures, repeated retries, low-value steps, unnecessary context, overpowered models, recurring human interventions, and evaluators that do not track final acceptance. It can then diagnose a pattern and propose a precise configuration change.

There is early research support for agent-assisted design. [*Automated Design of Agentic Systems*](https://arxiv.org/abs/2408.08435), a 2024 artificial-intelligence research preprint, describes a meta-agent that writes and tests new agent designs in code. Its authors reported that discovered designs beat hand-built baselines across bounded coding, science, and mathematics experiments. This makes agent-assisted Graph Engineering plausible, but it does not establish that an agent can define production quality or grant itself wider authority.

An agent can optimize what the system knows how to measure. Complex knowledge work creates a harder problem because quality cannot be fully specified in advance. A domain expert can reject an output that passes every automated evaluation. The useful response is to ask why the production system could not recognize what the expert recognized.

That question has empirical support. [*Who Validates the Validators?*](https://arxiv.org/abs/2404.12272), a 2024 human-computer interaction paper by Shreya Shankar and colleagues, studied people using language-model assistance to build evaluation criteria. The researchers observed that people refined their criteria while judging outputs, a process they called “criteria drift.” In other words, evaluation did not merely apply a fixed definition of good; it helped the reviewers discover a better definition.

Traditional Human-in-the-Loop, or HITL, often means that an agent produces work and a person approves, rejects, or intervenes. APEX makes the expert part of the learning mechanism. In the synthesis example, an expert might find that the early evaluator rewards the presence of citations but misses whether the sources are strong enough. That judgment should improve the evaluator, examples, context, task ownership, or decomposition used in the next run. Agents bring scale of observation. Experts supply the judgment that gives those observations meaning.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Agents can inspect many runs and propose system changes, but domain experts reveal gaps in the system's definition of quality. Their corrections should reshape future production, not disappear into an approval log.</p></div>

## Learning requires promotion authority

A proposal does not become organizational learning merely because an agent generated it. Evidence needs a controlled path into production, and the enforcement point is the promotion decision. A compact operating contract can make that path explicit:

1. **Observe.** Record the configuration version, trace, evaluator results, expert corrections, total cost, latency, failures, and human interventions. Declare which trace fields the Lead Agent may inspect, what must be minimized or redacted, how long evidence is retained, where it is stored, and which model suppliers may receive it.
2. **Propose.** Describe the exact configuration difference, the evidence behind it, the expected effect, the measures of success, the affected authority or risk boundary, and the recovery plan. The agent may recommend wider tools or autonomy, but it cannot approve its own recommendation.
3. **Test.** Start trials from a clean state and compare the candidate with the current production graph, which serves as the control configuration. Include protected holdout cases that the proposing agent could not tune against, and repeat trials because model behavior varies between runs. Measure expert acceptance, intervention rate, total cost including review effort, median latency, and p95 latency, the time within which 95% of runs finish.
4. **Decide and release.** Name the production owner or change forum with promotion authority, together with any domain-quality, security, legal, or risk vetoes. Valid outcomes include promote, reject, revise, and make no change. A canary release sends only a limited share of comparable live work through the candidate, with a stop rule, before wider adoption.

Recovery also needs precise language. Configuration rollback restores the previous graph, but it does not unsend an email or undo another completed external action. State restoration returns stored data to an earlier valid state when that is possible. A compensating action counters an effect that cannot literally be reversed. The change record should name who owns each response before the candidate reaches live work.

This operating contract makes APEX testable; it does not prove that APEX already works at enterprise scale. A credible case would need a baseline, several graph versions, promoted and rejected proposals, at least one no-change or recovery outcome, and results for expert acceptance, interventions, total cost, median and p95 latency. If automated scores rise while expert acceptance stays flat, the system is probably improving a proxy rather than the work. If successive versions produce no defensible gain after review cost is included, the outer loop has added ceremony instead of learning.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>System improvement needs versioned evidence, a bounded proposal, protected comparison, named promotion authority, and a recovery plan that covers real side effects. Agent analysis can accelerate the handoff, but it cannot authorize itself.</p></div>

## Meanwhile in sci-fi

<div class="scifi">
<span class="scifi__label">Meanwhile in sci-fi</span>
<p class="scifi__film">Edge of Tomorrow (2014)</p>
<p>In this 2014 science-fiction film, Major William Cage repeatedly relives the same battle and changes his actions using what each attempt reveals. The mapping to this argument is direct: an APEX cycle becomes learning only when evidence from one execution changes the graph used for the next, while human judgment still determines which lesson is worth encoding.</p>
</div>

## There is no final graph

Imagine a production graph at version one. Later versions may change routing, improve context, add an evaluator, remove an agent, or move evaluation earlier. One version may give an agent more autonomy because the evidence supports it. Another may replace an agentic loop with deterministic code because the work has become predictable enough to specify, while a later change may make the opposite move when rigid code no longer handles the variation.

These changes do not mean the earlier graph was carelessly engineered. They mean the organization learned. Over time, the version history becomes a record of accumulated understanding about the work: which responsibilities belong together, which measures predict acceptance, where automation helps, and where expert intervention creates the most value.

Even a strong graph cannot become final because the conditions around it keep moving. Customers change, strategy changes, models improve, tools and costs change, and the organization develops a more demanding view of quality. Graph Engineering asks how agentic production should be structured now. APEX adds the continuing question: how will we discover a better answer?

The future of agentic production will not be defined by who can draw the most sophisticated graph. It will be defined by who can make the production system learn without handing its judgment to the system itself. Graph Engineering gives us the production system. APEX gives human expertise and agent-scale observation a disciplined way to improve it. You do not build the perfect graph. You continuously shape it.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>There is no final graph because the work, technology, and definition of quality keep changing. The durable capability is a governed way for domain experts and agents to keep shaping the system together.</p></div>
