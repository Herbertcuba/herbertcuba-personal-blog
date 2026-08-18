---
title: "The graph is a hypothesis"
description: "Graph Engineering builds the agentic production system. APEX supplies the outer improvement system through which humans and agents reshape it."
featuredImage: "/images/posts/the-graph-is-a-hypothesis.webp"
tldr: "A production graph is our current best hypothesis about how agentic work should run. Graph Engineering builds that system; APEX turns execution evidence and domain-expert judgment into governed changes, so the system can improve without handing agents authority over quality or promotion."
provenance: verified-by-author
permalink: /drafts/64bebaf6/
layout: post.njk
date: 2026-08-18
---

A production graph can look complete on screen and still be unfinished as a production system. Every agent, handoff, retry, evaluator, and human checkpoint encodes an assumption about how the work should happen. Until the system meets real work, many of those assumptions remain untested.

I use **Graph Engineering** to mean engineering that entire production configuration, not merely drawing nodes and edges. It includes the topology, meaning what connects and in what order, as well as prompts, context, skills, tools, models, memory, routing, and agent responsibilities. It also includes deterministic components, conventional code paths intended to behave the same way for the same input, and evaluators, the automated or human checks applied against stated criteria. The production configuration also covers quality gates, human checkpoints, and autonomy boundaries, the rules that limit what an agent may do without explicit authority.

[**APEX**, or Agentic Production Execution](/posts/2026-04-05-apex-framework/), sits around that configuration as an improvement system. The graph performs the work, while APEX helps humans and agents use evidence from what happened to decide how the graph should change. Graph Engineering therefore builds the production system; APEX is the outer system for continuously improving it.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>A finished-looking graph still contains untested assumptions. Graph Engineering builds the full production configuration; APEX turns experience from running it into deliberate change.</p></div>

## The graph is a hypothesis

A production graph represents our current understanding of the work. We decide which agents should exist, what each one owns, which model and tools it receives, what happens in sequence or in parallel, when evaluation occurs, and when another agent or a person should take over. These are software decisions, but they also encode a theory of how the work itself should be done.

That theory becomes harder to reason about as the graph grows. An extra evaluator may catch more defects and still increase cycle time. A stronger model may improve one step without changing final acceptance enough to justify its cost. A repeated failure may appear to be a prompt problem when the real cause is missing context, poor routing, the wrong tool, or an agent that should not exist as a separate role.

A [2026 study in *Nature Machine Intelligence*](https://www.nature.com/articles/s42256-026-01268-y) shows how strongly the value of coordination can depend on task structure. The researchers compared 260 matched configurations across five single- and multi-agent architectures, three model families, and six benchmarks. Centralized coordination improved Finance Agent, a financial-research benchmark with work that can be split into parallel investigations, by as much as 80.8 percent over a single agent. On PlanCraft, a planning benchmark in which later actions depend on earlier state, multi-agent variants performed as much as 70 percent worse because coordination added overhead without helping the sequential work.

Those benchmark results do not prove that any particular enterprise graph will succeed. They establish the more useful point: architecture and task structure interact, so a graph has to earn its shape through evidence. The first graph is not a solution to defend. It is a hypothesis to test.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Graph choices are claims about both software and work. Because the same coordination pattern can help one task and harm another, the first production graph should be treated as a testable hypothesis.</p></div>

## Every run should produce evidence

APEX puts an outer cycle around execution: Strategy sets the outcome and constraints, Execution runs the current graph, Reflection interprets the result, and Calibration changes the configuration for the next cycle. Here, **calibration** means an evidence-based adjustment to the system, not an agent quietly rewriting itself.

Each run should therefore produce two outputs. The first is the intended work. The second is evidence about the system that produced it: failures, retries, evaluator scores, expert corrections, cost, latency, and the final outcome. An **execution trace** is the time-ordered record connecting that evidence to the exact prompts, models, tools, handoffs, and configuration versions used in the run.

A Lead Agent, meaning a supervisory agent outside the production path, can inspect traces across many runs and look for patterns that are difficult to see one case at a time. It can ask where failures cluster, which step causes repeated retries, where expensive context adds little value, or which automated evaluator disagrees with final expert acceptance. It can then diagnose the pattern and propose a versioned change to routing, context, tools, models, responsibilities, deterministic logic, or the topology itself.

The trace is part of the governed system, so it cannot be treated as casual observability data. Each record needs stable run and configuration identifiers, source attribution, and storage that makes later alteration detectable. Access should follow the minimum needed for the analysis. Sensitive content may need redaction, and the proposing agent should not see protected evaluation cases. The people approving a change must still be able to trace every claim back to the runs that support it.

This is where agents add real leverage. They can extend the scale of observation and shorten diagnosis. They still do not get to define what counts as good, approve their own proposal, or promote it into production.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Every execution should leave trustworthy evidence about how the system behaved. Agents can analyze that evidence and propose graph changes; trace access, quality definitions, and promotion remain governed separately.</p></div>

## A graph change needs a contract

APEX does not replace established engineering practice. Continuous integration and delivery, or CI/CD, versions, tests, and releases software changes. Machine-learning operations, or MLOps, applies related production discipline to models and data. Three supporting practices cover different parts of the same foundation: durable workflow engines preserve execution state through failures, evaluation-driven development tests behavior against explicit cases, and policy-as-code translates governance rules into checks that software can enforce.

A mature team may already have all of this. APEX adds value only if it connects production evidence and evolving domain judgment to decisions about the full agentic configuration. If the workflow and quality criteria are stable, and the existing release process already makes those graph-wide decisions from the same evidence, APEX may add little beyond another name.

Where the outer loop is useful, a proposed change should be a typed, reviewable record rather than a persuasive paragraph. A compact schema could include:

```yaml
proposal_id: string
source_trace_ids: string[]
observed_failure: string
graph_diff: versioned_change
evaluation_cohort: protected_case_set
thresholds: metric_rule[]
approvers: owner_id[]
risk_and_data_scope: policy_ref[]
recovery_target: graph_version
```

That record lets a deterministic controller validate the proposal before any agentic reasoning continues. Missing source traces should block replay. A proposal that changes autonomy without the required risk owner should block approval. A reversible change without a recovery target should never reach live traffic.

The promotion path can then be explicit:

`Proposed → Replay-passed → Human-approved → Canary → Promoted`

The controller should deny an attempted jump from `Proposed` to `Promoted` and record the attempt. Offline replay means running the candidate against recorded cases without affecting users. Because model outputs vary, replay should use repeated trials, compare the candidate with the current graph on the same protected cohort and operating budget, and report the spread of results rather than selecting one favorable run. Thresholds for expert acceptance, task success, total cost per accepted output, latency, and human intervention should be declared before the comparison.

Protected holdout cases, which the proposing agent cannot inspect, reduce the chance that it optimizes for familiar examples. A canary release then sends a limited share of comparable live work to the candidate while the current graph handles the control share. Stopping conditions and the minimum worthwhile improvement should be set in advance, so a favorable fluctuation is not mistaken for a durable improvement after the results are visible.

Decision rights matter as much as test design. The platform owner is accountable for implementation and reliability, while the domain expert owns the quality criteria. The business owner decides whether the improvement is worth its full cost, including review time and delay, and the risk owner sets restricted actions, data boundaries, supplier constraints, and escalation rules. When a quality criterion changes how employees perform or are assessed, affected domain staff and the appropriate employee representatives should be able to challenge it before it becomes executable policy.

There is no honest universal review cadence. Low-risk proposals can be batched into a scheduled calibration review; changes to autonomy, sensitive data, or irreversible tool actions need a separate escalation path and stronger approval. The same scorecard should follow every proposal: accepted quality, cost per accepted outcome, typical and high-end latency, intervention rate, review delay, and recovery events. A valid outcome is **no change**.

Recovery needs precise language: configuration rollback restores the previous graph configuration, but it does not undo an external side effect or repair incompatible state by itself. Those cases require state restoration, which recovers saved system state, or compensating actions, which counteract work that cannot literally be reversed. Irreversible tool actions should remain outside unattended promotion.

The evidence available here supports individual mechanisms more strongly than it supports the complete loop. The coordination study shows that graph choices matter, and evaluation research supports continued human calibration, but neither demonstrates that APEX has improved a business-critical workflow across several graph versions. That proof requires a multi-version production record with promoted changes, rejected proposals, well-supported no-change decisions, and results for quality, latency, human intervention, and total cost, including the outer loop's own review time and delay. Until then, APEX is an engineering proposition with clear proof conditions.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>APEX earns its place when a typed proposal moves through protected comparison, human approval, limited release, and deterministic enforcement. The loop must count its own cost, preserve recovery options, and allow evidence to end in no change.</p></div>

## Expert judgment changes the system

**Human-in-the-Loop**, or HITL, often describes a narrow pattern: an agent produces work, and a person approves or rejects it. APEX asks the domain expert to do more. When an output passes every automated check and an expert still says it is not good enough, the rejection becomes evidence about what the production system failed to understand.

The useful question is why. Perhaps the evaluator measures the wrong quality, essential context is missing, the examples are weak, the task was decomposed badly, or the wrong agent owns it. Reflection turns that diagnosis into a proposed change rather than treating the expert as a final safety gate.

This mechanism has support at the level of evaluation design. [*Who Validates the Validators?*](https://arxiv.org/abs/2404.12272), a 2024 human-computer interaction paper by Shreya Shankar and colleagues, observed people refining their criteria while grading language-model outputs. The researchers called this **criteria drift**: people need criteria in order to judge outputs, but seeing real outputs also helps them discover what their original criteria missed. The study does not validate APEX as a whole. It supports the narrower claim that expert evaluation can create new information about quality.

That makes criteria ownership a question of operational power. Once a requirement is translated into an evaluator, rubric, routing rule, or policy check, it begins to shape what the system produces. If an agent, implementation team, or supplier can define the measure it is judged against without independent domain authority, automated scores may improve while expert acceptance or real outcomes remain flat. That is a direct test for a captured proxy: the measure gets better, but the work does not.

Domain experts therefore provide judgment about what good means, while agents provide scale of observation. The experts do not have to read every trace, and the agents do not get final authority over the criteria. Together they can reshape the system, with named owners deciding what may move into production.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>The expert is part of the learning mechanism, not merely an approval gate. Their judgment can expose missing criteria or a bad decomposition, while independent ownership prevents the system from optimizing a convenient measure instead of the work.</p></div>

## Meanwhile in sci-fi

<div class="scifi">
<span class="scifi__label">Meanwhile in sci-fi</span>
<p class="scifi__film">Edge of Tomorrow (2014)</p>
<p>The science-fiction film follows Major William Cage, a soldier who repeatedly relives the same battle and changes his actions using what each failed attempt revealed.</p>
<p>The mapping to APEX is specific: another cycle has value only when evidence from the previous one changes the next configuration. Unlike the film, that change is not automatic. Agents can find patterns and propose a response, but accountable people decide what good means and whether the new graph is allowed to run.</p>
</div>

## There is no final graph

Imagine a production graph at version one. After several executions, version two changes routing, version three improves context, and version four adds an evaluator. Version five removes an agent that creates more coordination than value. A later version may grant one agent more autonomy, replace deterministic steps with an agentic loop, or make an unreliable agentic step deterministic again.

Those revisions do not necessarily mean the earlier graph was badly engineered. They mean the organization learned from contact with the work. Over time, the version history becomes a record of what it has discovered about quality, decomposition, cost, responsibility, and risk.

Even a strong graph cannot remain final because its conditions do not remain fixed. Customers, strategy, models, tools, costs, and products change. The organization learns, and its understanding of quality changes with it. There is only the best production system we currently know how to build.

The future of agentic production will not be decided by who draws the most sophisticated graph. It will be decided by who can improve the graph without confusing automated optimization with organizational learning. Graph Engineering gives us the production system. APEX gives humans and agents a disciplined way to keep reshaping it.

You do not build the perfect graph. You continuously shape it. Domain experts provide judgment, agents provide scale, and accountable owners turn both into the next version of the system.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>There is no permanent production graph. Its versions should capture accumulated learning, with agents extending observation, experts directing quality, and accountable owners authorizing each change.</p></div>
