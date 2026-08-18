---
title: "The graph is a hypothesis: Where APEX begins"
description: "Graph Engineering builds the agentic production system. APEX creates the outer loop through which humans and agents keep improving it."
excerpt: "The first production graph is not the answer. It is a testable theory of the work, and every real execution should help humans and agents improve the next version."
tldr: "Graph Engineering builds the agentic production system, but the first graph is only a hypothesis about how work should happen. APEX adds an outer loop that turns traces, evaluations, failures, costs, and expert judgment into governed changes to the full production configuration, so humans and agents can improve it together without pretending there is a final graph."
provenance: verified-by-author
permalink: /drafts/64bebaf6/
layout: post.njk
date: 2026-08-18
---

Agentic engineering is moving beyond the single-agent loop. As production work spreads across agents, tools, models, context, conventional code, human interventions, routing, and parallel tasks, coordination becomes part of the engineering problem. Evaluators, meaning automated or human checks applied against stated criteria, also have to fit into that structure.

Graph Engineering is a useful name for this work. It means engineering how tasks, decisions, resources, and controls move through an agentic production system. The idea is sound, but it carries a dangerous assumption: that our job is to design the right graph and then run it.

For sufficiently complex knowledge work, the first graph will not be the answer. It will be our current best hypothesis about how the work should happen. The central distinction is that Graph Engineering builds the production system, while [APEX](/posts/2026-04-05-apex-framework/), my operating model for Agentic Production Execution, is the outer improvement system through which humans and agents use evidence from each run to reshape it.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Graph Engineering structures agentic production. APEX keeps that structure provisional by turning execution into evidence for the next version.</p></div>

## The first graph encodes a theory of the work

A production graph is an executable description of how work should move through the system. It assigns responsibilities, selects models and tools, decides what context each agent receives, and determines which steps run in sequence or in parallel. It also places retries, handovers, evaluations, conventional code, and human intervention at specific points.

Those choices are not minor implementation details. They encode a theory of the work itself: what can be separated, what depends on an earlier decision, what can be measured, and where judgment is required. Before the system meets real work, much of that theory is necessarily speculative.

That uncertainty is visible in the research. A 2026 study titled [*Capable language models can outgrow the benefits of collaboration*](https://www.nature.com/articles/s42256-026-01268-y), published in the AI journal *Nature Machine Intelligence*, compared 260 configurations across five agent architectures, three model families, and six benchmarks. Centralized coordination improved performance by as much as 80.8% over a single agent on Finance Agent, a benchmark whose revenue, cost, and market factors can be analyzed independently. On PlanCraft, a sequential planning benchmark, one multi-agent configuration performed as much as 70% worse. The study does not validate APEX, but it does show why graph shape must earn its place: work that separates cleanly can benefit from coordination, while tightly dependent steps may lose more to coordination overhead than they gain.

The same trade-offs appear inside a production graph. Another evaluator may catch more failures while increasing cycle time. A stronger model may improve one task without changing final acceptance enough to justify its cost. An agent may keep failing because its prompt is weak, but the real cause could be missing context, poor routing, the wrong tool, or a role that should not exist separately.

This is why the engineering cycle cannot stop at design, build, and deploy. It has to continue through execution, observation, evaluation, learning, and a new design decision.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>A graph encodes assumptions about the work, and local improvements can create costs elsewhere. Its shape must therefore be tested against real outcomes rather than treated as settled architecture.</p></div>

## APEX begins with the second output

Every execution produces two outputs: the intended result and evidence about the production system that created it.

An [execution trace](https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents) is the time-ordered record of a run, including outputs, tool calls, intermediate results, and other interactions. Add failures, retries, human corrections, evaluation scores, cost, and latency, and the trace becomes useful material for diagnosing the system rather than merely debugging one bad result.

APEX places an outer loop around the execution graph: strategic intent leads to execution, execution produces evidence for reflection, and reflection leads to calibration before the next cycle. Reflection means diagnosing what the run revealed. Calibration means making an approved change to the production configuration based on that evidence and on human judgment. The graph performs the work; the outer loop improves the system performing it.

Within this model, the graph is broader than nodes and edges. It is the full versioned execution configuration: topology, meaning how components connect; agent roles; prompts; context; skills; tools; models; memory; routing; deterministic components, meaning conventional code paths intended to behave the same way for the same input; evaluators; quality gates; human checkpoints; and autonomy boundaries, which specify what an agent may do without approval. The visible diagram is only one representation of that system.

Most of these parts already have good engineering disciplines. Version control and release pipelines manage software changes. Model operations manage models and data. Durable workflow engines preserve the state of long-running work through failures. Evaluation suites test behavior, while policy checks enforce declared rules. APEX should not replace that stack. Its narrower contribution is to connect production evidence and evolving domain judgment to decisions about the entire configuration, including whether the criteria used to judge quality need to change.

That contribution still has to prove itself. If successive graph versions do not improve expert acceptance without unexplained growth in cost, latency, failures, or review effort, APEX has added ceremony rather than learning.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>APEX treats each run as both production and evidence. Its added value is the decision loop that can reshape the whole execution configuration, including its quality criteria, rather than merely release another component.</p></div>

## Agents can diagnose the graph, but not own quality

Agents do not have to operate only inside the graph. A Lead Agent, meaning an agent assigned to inspect outcomes across many runs, can look for concentrated failures, repeated retries, unused steps, unnecessary context, expensive models with little effect, recurring human intervention, and evaluators that do not track final acceptance. Its scale of observation can make the improvement loop much faster.

The useful sequence is observe, diagnose, propose, reconfigure, and measure, but those verbs do not all belong to the agent. The agent can assemble evidence and propose an exact configuration change. It should not quietly grant itself new tools, wider autonomy, or control over the measure used to judge its own work.

This matters because an agent can optimize only what the system knows how to measure. A domain expert can review an output that passes every automated evaluation and still conclude that it is not good enough. The important question is not whether the expert overruled the system. It is why the production system failed to recognize what the expert recognized.

A 2024 human-computer interaction paper, [*Who Validates the Validators?*](https://arxiv.org/abs/2404.12272) by Shreya Shankar and colleagues, observed people refining their criteria while they graded language-model outputs. The researchers called this “criteria drift.” Its relevance here is narrow but important: quality criteria can become clearer through evaluation, so an expert rejection may be new information about the evaluator, context, examples, task decomposition, ownership, or strategy.

Traditional Human-in-the-Loop, often shortened to HITL, commonly describes a review pattern in which an agent produces work and a person approves, rejects, or intervenes. APEX asks more of that interaction. The domain expert helps alter the context, instructions, examples, evaluations, routing, responsibilities, and quality criteria that will shape the next run.

This also gives us a testable warning. If automated scores rise across graph versions while expert acceptance remains flat, the outer loop is likely optimizing a proxy, a measurable stand-in for real quality, rather than improving the work. Agents provide the scale to see that pattern, while domain experts provide the judgment needed to interpret it.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Agents can find patterns across many runs and propose changes, but domain experts remain the source of judgment about what good means. Their corrections should change the production system, not end as isolated approvals or rejections.</p></div>

## Improvement needs a governed handoff

A system does not learn merely because an agent suggests a change. It learns when evidence can move through a controlled path from observation to a measured production decision. A practical operating contract can stay compact:

1. **Observe.** Record the configuration version, execution trace, evaluator results, expert corrections, total cost, latency, failures, and human interventions for each run.
2. **Propose.** Let the Lead Agent describe the evidence, the exact configuration difference, the expected effect, the affected risk boundary, the measures of success, and the recovery plan. A proposal is not permission to promote itself.
3. **Test.** Replay the candidate, meaning run it again against declared test cases, including protected holdout cases that the optimizing agent cannot inspect. Compare it with the current production graph as the control configuration and repeat enough trials to expose variable model behavior. Record counts and rates for expert acceptance and intervention, total cost including review effort, median latency, and p95 latency, the time within which 95% of runs finish.
4. **Decide and release.** Name one accountable production owner or change forum with final promotion authority, along with any defined domain-quality or risk vetoes. The valid outcomes are promote, reject, revise, or make no change. A canary release can send a limited share of comparable live work through the candidate before wider use.

The release record should also distinguish configuration rollback from recovery. Restoring the previous graph does not undo an email already sent, a record already changed, or another completed external action. Those effects may require state restoration or a compensating action that counteracts work that cannot literally be reversed.

The review rhythm should match the risk of the workflow, but the authority cannot remain implicit. Where quality, budget, reliability, and risk conflict, the named promotion owner applies the declared vetoes and stopping rules. For regulated or supplier-dependent work, the same proposal should update the organization’s existing risk, data, oversight, supplier, and stop-authority records instead of creating a parallel governance universe.

This contract does not prove APEX. It makes the idea testable. A real demonstration would need several graph versions, accepted and rejected proposals, results for quality, cost, latency, and human intervention, and at least one no-change or recovery outcome.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>The improvement loop needs versioned evidence, a bounded proposal, protected comparison, named authority, and an honest recovery plan. Agent analysis can accelerate the handoff, but it cannot replace promotion accountability.</p></div>

## Meanwhile in sci-fi

<div class="scifi">
<span class="scifi__label">Meanwhile in sci-fi</span>
<p class="scifi__film">Edge of Tomorrow (2014)</p>
<p>In this science-fiction film, Major William Cage repeatedly relives the same battle and changes his actions using what each attempt reveals. The mapping to APEX is precise: repetition matters only when evidence from one execution changes the configuration of the next, and the human judgment around the loop still determines which lesson is worth acting on.</p>
</div>

## There is no final graph

Imagine a production graph at version one. After ten runs, version two changes routing, version three improves context, version four adds an evaluator, and version five removes an agent that contributes little. A later version may move evaluation earlier or grant one agent more autonomy. Another may replace an agentic loop with deterministic code because the work has become predictable enough to specify.

None of those changes proves that the earlier graph was badly engineered. They show that the organization learned. Over time, the graph’s version history becomes a record of accumulated understanding about how the work should happen.

Even a strong graph cannot become final because the conditions around it keep moving. Customers, strategy, models, tools, costs, products, and the organization’s understanding of quality all change. Graph Engineering asks how agentic production should be structured now. APEX adds the continuing question of how humans and agents will discover a better answer.

Domain experts provide judgment about what good means, while agents provide scale of observation across executions. Together they can improve the system that does the work without pretending either side can shape it alone. You do not build the perfect graph. You continuously shape it.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>A graph should evolve as the organization learns and its environment changes. The lasting capability is not one sophisticated design, but a governed way for human judgment and agent-scale observation to improve it together.</p></div>
