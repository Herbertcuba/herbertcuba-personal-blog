---
title: "The graph is a hypothesis"
date: 2026-08-18
excerpt: "A production graph becomes useful when reality starts proving it wrong. The harder engineering problem is turning those failures into a governed next version."
tldr: "A production graph encodes our current theory of how work should happen, so deployment begins the learning process rather than ending the design. Graph Engineering builds the full execution system; APEX surrounds it with a governed loop in which agents analyze many runs, domain experts define what good means, and approved changes are tested, versioned, and reversible."
layout: post.njk
tags:
  - agentic-engineering
  - graph-engineering
  - apex
  - ai-agents
provenance: verified-by-author
permalink: /drafts/64bebaf6/
---

Deploying a production graph does not finish its design. It gives the design its first serious test.

Agentic engineering, the work of building AI systems that can plan, use tools, and carry tasks across multiple steps, is moving beyond the single-agent loop. Production systems now coordinate specialized agents, different models, tools, context, conventional code, human interventions, routing, parallel work, and [evaluators](https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents), which are automated or human checks that judge an output against stated criteria.

The coordination problem is increasingly described as Graph Engineering: engineering the production structure that connects those parts and determines how work moves between them. The underlying idea is sound. Complex agentic production needs structure, but that does not mean we can design the right structure upfront. A production graph is the executable version of our current best understanding of how the work should happen.

[APEX, short for Agentic Production Execution](/posts/2026-04-05-apex-framework/), starts from that uncertainty. Graph Engineering builds the production system itself. APEX surrounds it with an improvement system in which execution evidence, agent analysis, and domain-expert judgment shape the next version. Humans remain part of that mechanism because the system cannot fully define quality on its own.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>A production graph is a testable theory of the work, not a finished answer. Graph Engineering creates the execution system, while APEX creates the outer loop that improves it with evidence and expert judgment.</p></div>

## The graph becomes testable in production

A graph contains more assumptions than its diagram reveals. Choosing which agents should exist, what each one owns, which model handles a task, what context it receives, and where work runs sequentially or in parallel all encode a theory about the work itself. The same is true of retries, handoffs, deterministic logic, evaluation points, and human intervention.

Before the system runs, some of those decisions must be speculative. A [2026 study in *Nature Machine Intelligence*](https://www.nature.com/articles/s42256-026-01268-y) tested 260 configurations across five coordination architectures, three model families, and six agentic benchmarks. Centralized coordination improved performance by as much as 80.8% over a single agent on a financial-analysis task, while an independent multi-agent configuration performed 70% worse on a tightly sequential planning task. The financial work could be divided into relatively independent factors; the planning task instead paid for artificial decomposition and extra coordination messages.

The study does not validate APEX, and it does not identify one architecture as universally superior. It demonstrates the narrower point that architecture and task structure interact. A change that helps one kind of work can damage another, which makes the graph an empirical question rather than a drawing exercise.

Consider an illustrative research-synthesis graph. If its final answer repeatedly loses important caveats, the synthesis prompt may be weak. But the cause could also be missing source passages, a bad handoff, an evaluator that rewards fluency over fidelity, or a separate synthesis agent that should not exist. Editing the first prompt is easy. Finding which assumption failed requires evidence from the whole run.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Graph decisions encode assumptions about how the work can be divided, supplied, checked, and recovered. Production makes those assumptions observable, and task-dependent results mean a local improvement cannot be trusted until its effect on the complete system is measured.</p></div>

## APEX turns every run into evidence

APEX organizes improvement as an outer cycle: Strategic → Execution → Reflection → Calibration → next cycle. Strategic work defines the outcome and constraints before Execution runs the current graph. Reflection then asks why the system produced what it did, while Calibration changes its instructions, measures, structure, or authority before another run.

Every execution therefore produces the intended output and evidence about the system that produced it. An [execution trace](https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents) is the time-ordered record of a run, including model outputs, tool calls, intermediate results, and handoffs. Combined with retries, human corrections, evaluation scores, cost, latency, and final acceptance, traces let the team compare its assumptions with what actually happened.

This also changes what we mean by the graph. The production system has an execution structure: its topology, agent responsibilities, routing, and sequence or parallelism. Its working resources include prompts, context, skills, tools, models, and memory.

The same configuration has an assurance and authority layer made up of evaluators, quality gates, human checkpoints, and autonomy boundaries, meaning the actions an agent may take without additional approval. Deterministic components are conventional code paths intended to follow predefined behavior rather than deciding their own next step.

The visible graph is only one representation of that configuration. APEX does not replace tracing, evaluation, or release control. It connects them in a persistent learning process so that evidence from one version can produce a better reasoned, explicitly approved next version.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Each run should leave behind more than an output. APEX uses traces, corrections, measures, and outcomes to inspect the full execution configuration, then calibrates that configuration for the next cycle.</p></div>

## Agents can inspect the system, but they cannot define quality alone

A Lead Agent, meaning an agent assigned to analyze system-level evidence rather than complete one production step, can inspect patterns across far more runs than a human reviewer can hold in working memory. It can locate where failures concentrate, which agent causes most retries, where expensive context adds little value, and which automated evaluator aligns poorly with expert acceptance. It can then diagnose likely causes and draft a change proposal.

That observational scale is valuable, but it does not grant authority over the meaning of good work. A [2025 paper published in the proceedings of the Association for Computational Linguistics](https://aclanthology.org/2025.acl-short.20/) compared 11 large language models with human annotations across 20 language-evaluation datasets. The models' reliability as judges varied substantially by model, task, evaluated property, and the expertise of the human judges. Model-based evaluation can be useful, but it must be checked against the people whose judgment defines acceptance in the domain.

This is where APEX goes beyond a simple Human-in-the-Loop pattern. Human-in-the-Loop, or HITL, often places a person at a checkpoint to approve or reject an agent's output. In APEX, an expert rejection is also evidence about the production system. If an output passes every automated check and the expert still rejects it, Reflection asks why the system could not recognize what the expert recognized.

Perhaps the evaluator measures the wrong feature, the necessary context is absent, the task belongs to another agent, or the decomposition itself is wrong. The correction can then be translated into better examples, instructions, context, routing, evaluation criteria, or agent responsibilities. Domain ground truth here means the accepted standard of good work held by accountable experts, including judgments that have not yet been expressed as a metric.

The expert's role extends beyond approving or blocking an output. Expert judgment supplies meaning to the evidence, while agents make recurring patterns visible at production scale. Both are needed to reshape the system responsibly.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Agents can find patterns across many executions, but automated measures cannot fully define production quality. Expert corrections become part of the improvement mechanism when they change the context, criteria, ownership, or structure used in the next run.</p></div>

## Improvement needs a change contract

Once agents can propose changes to the graph, governance becomes part of the architecture. A Lead Agent should be able to inspect permitted evidence and write a proposal, but it should not silently edit production or approve its own increase in authority. The boundary between recommendation and promotion must be enforced by the configuration system, not left as policy prose.

A useful change record can stay compact, but it should make the decision reproducible:

| Field | What the record must contain |
| --- | --- |
| Base version | The immutable identifier of the control configuration, meaning the current graph used as the comparison baseline. |
| Evidence set | Run IDs, permitted trace fields, expert corrections, and the access, redaction, storage, and retention rules for that evidence. |
| Diagnosis | The observed failure, plausible competing causes, and the evidence that separates them. |
| Exact change | The versioned difference in routing, context, prompts, tools, models, evaluators, deterministic code, or agent responsibility. |
| Test plan | Repeated comparison with the control plus protected holdout cases, which are examples withheld from diagnosis and tuning so they can expose regression. |
| Decision rules | Quality, expert acceptance, cost, and latency thresholds fixed before the trial, including conditions that stop it. |
| Authority and owner | Any change to agent permissions, the human role allowed to approve it, and the person responsible for the result. |
| Recovery | The prior configuration to restore and the action required if the trial changes external state. |

Return to the illustrative synthesis graph. Suppose expert rejections cluster around claims whose caveats disappear during handoff. The Lead Agent could propose an exact change: send the cited source passages, rather than summaries alone, to the synthesis step and route disputed claims through a source-checking agent. The proposal would then be tested against the current graph on comparable work and on protected cases. A quality gain would not be enough if it came with an unacceptable increase in cost, delay, or false rejection.

The allowed state changes should be equally explicit. A proposal may move from `draft` to `trial` only after an authorized reviewer approves its test and data access. It may move from `trial` to `production` only when the recorded thresholds are met and the named owner approves promotion. Revise, reject, and no change are valid outcomes. The agent can assemble the evidence, but it cannot sign its own promotion.

A canary release, which exposes the new graph to a small share of production work first, limits the impact of a bad change. Configuration rollback restores the previous graph for future runs. If an agent has already changed a database or contacted a customer, rollback alone is insufficient: state restoration attempts to reverse the change, while a compensating action offsets an effect that cannot simply be undone. Continuous improvement is credible only when experimentation has a defined boundary and recovery path.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Agentic Graph Engineering needs an enforceable change contract. Evidence, exact differences, protected tests, authority, decision thresholds, and recovery must be recorded before a proposal can move from analysis into production.</p></div>

## Meanwhile in sci-fi

<div class="scifi">
<span class="scifi__label">Meanwhile in sci-fi</span>
<p class="scifi__film">Edge of Tomorrow (2014)</p>
<p><em>Edge of Tomorrow</em> is a 2014 science-fiction film in which a soldier repeats the same battle and survives longer only because information carries into the next attempt. The mapping to APEX is deliberately narrow: evidence from one execution must change the next production configuration. Real systems do not reset to a clean world after failure, which is why human approval, limited permissions, rollback, and recovery matter.</p>
</div>

## There is no final graph

Imagine a production graph at version one. Later versions may change routing, improve context, add an evaluator, remove an unnecessary agent, move a quality check earlier, or replace an agentic step with deterministic code. Another version may make the opposite choice because the task, model, or risk has changed.

Those revisions do not prove that the first graph was badly engineered. They show that the organization learned something through execution. But a version history becomes accumulated learning only when each change remains connected to its evidence, decision, outcome, and owner. Otherwise, the graph is merely moving.

Even a strong graph cannot stay final because its environment does not stay fixed. Customer expectations, strategy, models, tools, costs, products, and the organization's understanding of quality all change. The practical target is therefore the best production system we currently know how to run, together with a disciplined way to discover when it should change.

That improvement loop also needs its own test. If APEX cannot show that accepted outcomes improved after accounting for review effort, operating cost, latency, and rejected proposals, it has added ceremony rather than learning. APEX earns its place when it gives domain expertise more leverage without disguising who holds judgment or change authority.

An elaborate graph can describe complexity, but it cannot prove that the organization learns from execution. That capability appears in the evidence retained, the changes tested, and the judgment kept in human hands. You do not build the perfect graph. You continuously shape the best one you currently know how to build.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>There is no final graph because the work, technology, and definition of quality continue to change. The durable capability is not a fixed architecture but a governed system in which agent-scale observation and domain-expert judgment keep improving how the work gets done.</p></div>
