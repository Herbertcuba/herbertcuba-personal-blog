---
title: "The graph is a hypothesis"
description: "Graph Engineering builds the agentic production system. APEX supplies the outer improvement loop through which humans and agents reshape it."
featuredImage: "/images/posts/the-graph-is-a-hypothesis.webp"
tldr: "A production graph is our current best hypothesis about how agentic work should run. Graph Engineering builds that full system, while APEX turns execution evidence and domain-expert judgment into governed, measurable changes without allowing agents to promote their own proposals."
provenance: verified-by-author
permalink: /drafts/64bebaf6/
layout: post.njk
date: 2026-08-18
---

A production graph can look finished before it has met reality. It may connect several agents with models, tools, context, evaluators, and human checkpoints, yet every connection still expresses an assumption about how the work should happen.

In this article, I use **Graph Engineering** to mean engineering that entire production configuration, not merely drawing nodes and edges. It covers topology, which components connect and in what order, along with prompts, skills, memory, routing, and agent responsibilities. It also includes evaluators, the automated or human checks applied against stated criteria; deterministic code paths, conventional software intended to behave the same way for the same input; and autonomy boundaries, the rules that limit what an agent may do without explicit authority.

**APEX**, short for Agentic Production Execution, sits around that configuration as an improvement system. The graph performs the work, while APEX helps humans and agents use what happened during execution to decide how the graph should change. I think this distinction matters more than the sophistication of the diagram.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Graph Engineering builds the full agentic production system. APEX is the outer system that uses execution evidence and human judgment to improve it.</p></div>

## The graph is a hypothesis

A production graph encodes our present understanding of the work. We decide which agents should exist, what each one owns, which model and tools it receives, what runs in sequence or in parallel, where evaluation happens, when a retry is justified, and when a person must intervene. Those choices are simultaneously software decisions and claims about the work itself.

Before the system runs, many of those claims are necessarily provisional. A repeated failure may look like a weak prompt but turn out to be missing context, poor routing, the wrong tool, or an unnecessary agent. Improving one part can also damage another by raising cost, slowing the cycle, or changing what reaches a later evaluator.

A [2026 study published in *Nature Machine Intelligence*](https://www.nature.com/articles/s42256-026-01268-y) shows why configuration must be tested rather than admired. Across 260 matched configurations, five single- and multi-agent architectures, three model families, and six benchmarks, centralized coordination improved Finance Agent, a financial-research benchmark that allows parallel investigation, by as much as 80.8 percent over a single agent. On PlanCraft, a game-planning benchmark whose state must be handled sequentially, multi-agent variants performed as much as 70 percent worse because coordination consumed effort without helping that sequence. These benchmark results do not prove enterprise value, but they do demonstrate that architecture interacts with the structure of the task.

The first graph is therefore not a solution to defend. It is a hypothesis to test in production conditions.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Graph choices encode assumptions about both software and work. Because coordination can help one task and harm another, the first graph should be treated as a testable hypothesis.</p></div>

## APEX begins with evidence

APEX puts an outer cycle around execution. Strategy defines the outcome and constraints, and Execution runs the current graph. Reflection then interprets what happened, while Calibration changes the configuration for the next cycle. Here, calibration means a deliberate adjustment based on evidence, not an agent silently rewriting itself.

A run should leave more than its intended output. It should also leave an execution trace, a time-ordered record of decisions, tool calls, handoffs, intermediate results, evaluator scores, retries, cost, latency, human corrections, and the final outcome. That trace turns an isolated success or failure into material for comparing many runs.

A Lead Agent, meaning a supervisory agent outside the production path, can examine traces across many runs without asking a person to read each one. Its job might be to find where failures cluster, which step creates repeated retries, where expensive context adds little value, or which automated evaluator disagrees with final expert acceptance. It can then diagnose the pattern and propose a versioned change to routing, context, prompts, tools, models, agent responsibilities, or topology.

That proposal is useful precisely because it is incomplete. The Lead Agent can widen observation and shorten diagnosis, but it does not get to decide what counts as good or promote its own change.

<figure class="fig-band article-diagram" data-diagram-id="apex-outer-cycle"><figcaption class="fig-cap">Fig. — APEX’s outer loop moves from strategy and execution through reflection and calibration.</figcaption><svg width="100%" height="auto" viewBox="0 0 760 360" role="img" aria-labelledby="ad-apex-outer-cycle-title ad-apex-outer-cycle-desc" xmlns="http://www.w3.org/2000/svg"><title id="ad-apex-outer-cycle-title">APEX outer improvement cycle</title><desc id="ad-apex-outer-cycle-desc">A four-stage loop: Strategy leads to Execution, then Reflection, then Calibration, which returns to Strategy for the next cycle.</desc><defs><marker id="ad-apex-outer-cycle-arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 Z" fill="#00E653"></path></marker></defs><g class="article-diagram__decoration"><rect x="0" y="0" width="760" height="360" fill="#000000"></rect><path d="M80 80 H680 V280 H80 Z" fill="none" stroke="#0A1A0F" stroke-width="2"></path></g><g class="article-diagram__claim" data-claim-id="claim-apex-outer-cycle"><rect x="80" y="70" width="230" height="80" fill="#0A1A0F" stroke="#00E653" stroke-width="3"></rect><text x="195" y="117" text-anchor="middle" fill="#DCE7DE" font-size="24" font-family="JetBrains Mono, monospace">Strategy</text><rect x="450" y="70" width="230" height="80" fill="#0A1A0F" stroke="#00E653" stroke-width="3"></rect><text x="565" y="117" text-anchor="middle" fill="#DCE7DE" font-size="24" font-family="JetBrains Mono, monospace">Execution</text><rect x="450" y="210" width="230" height="80" fill="#0A1A0F" stroke="#00E653" stroke-width="3"></rect><text x="565" y="257" text-anchor="middle" fill="#DCE7DE" font-size="24" font-family="JetBrains Mono, monospace">Reflection</text><rect x="80" y="210" width="230" height="80" fill="#0A1A0F" stroke="#00E653" stroke-width="3"></rect><text x="195" y="257" text-anchor="middle" fill="#DCE7DE" font-size="24" font-family="JetBrains Mono, monospace">Calibration</text><path d="M310 110 H448" fill="none" stroke="#00E653" stroke-width="3" marker-end="url(#ad-apex-outer-cycle-arrow)"></path><path d="M565 150 V208" fill="none" stroke="#00E653" stroke-width="3" marker-end="url(#ad-apex-outer-cycle-arrow)"></path><path d="M450 250 H312" fill="none" stroke="#00E653" stroke-width="3" marker-end="url(#ad-apex-outer-cycle-arrow)"></path><path d="M195 210 V152" fill="none" stroke="#00E653" stroke-width="3" marker-end="url(#ad-apex-outer-cycle-arrow)"></path></g></svg></figure>

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Every run should produce evidence about the production system. Agents can analyze that evidence and propose graph changes, while promotion remains a separate, governed decision.</p></div>

## The outer loop needs a change contract

APEX does not replace established engineering practice. Continuous integration and delivery, or CI/CD, versions, tests, and releases software changes. MLOps applies related production discipline to models and data. Durable workflow engines preserve execution state through failures, while evaluation-driven development tests behavior against explicit cases. Policy-as-code turns governance rules into checks that software can enforce.

A mature team may already combine all of these. APEX adds value only when it connects production evidence and evolving domain judgment to decisions about the whole agentic configuration. If the workflow is stable, the quality criteria are fixed, and the existing release process already makes those graph-wide decisions from the same evidence, APEX adds little beyond a name.

Where the outer loop is needed, its minimum change contract should be explicit:

`Proposed → Replay-passed → Human-approved → Canary → Promoted`

A deterministic promotion controller, implemented as conventional code rather than an agent, should enforce those transitions. If an agent attempts to jump directly from `Proposed` to `Promoted`, the controller denies the transition and records the attempt in an audit log.

Before approval, the candidate should be compared with a declared baseline for task success, expert acceptance, cost, latency, and human intervention. Offline replay means running it against recorded cases without affecting live users. The test set should include sealed or regularly refreshed holdout cases that the proposing agent cannot inspect, which reduces the risk of optimizing only for familiar examples. A canary release then sends a limited, comparable share of live work to the candidate, with a baseline comparator, a minimum effect threshold, and stopping conditions set before the run.

Decision rights should be equally concrete. The platform owner is accountable for implementation and reliability, while the domain expert owns the quality criteria. The business owner decides value and budget, and the risk owner sets restricted actions and escalation boundaries. A proposal should also carry the system's risk class, its data-residency limits, meaning where data may be stored or processed, its approved suppliers, and the audit evidence required for release. Low-risk proposals can enter a regular calibration review, while changes to autonomy or irreversible actions require risk approval before a canary. Agents may recommend changes, but only the named human owners can approve them.

Rollback also needs honest language. Configuration rollback restores the previous graph configuration, but it cannot undo an external side effect or repair incompatible state by itself. Those cases require state restoration, which recovers saved system state, or compensating actions, which counteract work that cannot literally be reversed. Irreversible tool actions should remain outside unattended promotion.

The evidence available today supports parts of this argument more strongly than the complete system. It shows that coordination choices can change performance and that expert grading can change quality criteria; it does not establish that an APEX outer loop has improved a business-critical enterprise workflow across several graph versions. The change contract is therefore an engineering proposition with explicit proof conditions, not a claim of settled enterprise performance.

This contract makes APEX falsifiable. A proposal that misses its declared threshold should end in no change. If the outer loop does not produce repeatable gains against the existing release process, or if its cost and delay exceed those gains, it is adding ceremony rather than learning.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>APEX earns its place only when evidence leads to enforced, measurable, and accountable graph changes. A deterministic controller, protected tests, named owners, staged release, and honest recovery boundaries keep improvement from becoming self-modification.</p></div>

## Meanwhile in sci-fi

<div class="scifi">
<span class="scifi__label">Meanwhile in sci-fi</span>
<p class="scifi__film">Edge of Tomorrow (2014)</p>
<p>The science-fiction film follows Major William Cage, a soldier who repeatedly relives the same battle and changes his actions using what each failed attempt revealed.</p>
<p>The mapping is narrow: repetition becomes useful only when evidence from one cycle changes the next attempt. APEX applies that logic to a production graph, with one crucial difference: the change is measured and governed by accountable people. If the configuration stays the same, another execution is only another cost.</p>
</div>

## Expert judgment changes the system

Human-in-the-Loop, or HITL, can be implemented as a narrow review step in which an agent produces work and a person approves or rejects it. APEX asks more of the expert. When an output passes every automated evaluator and a domain expert still says it is not good enough, that judgment becomes evidence about a gap in the production system.

The next question is why the system could not recognize what the expert recognized. Perhaps the evaluator measures the wrong quality, the context omits a decisive constraint, the examples are weak, the task was decomposed badly, or the wrong agent owns it. Reflection turns that diagnosis into a change to the next configuration rather than treating the rejection as a final gate.

This mechanism has support at the level of evaluation design. [*Who Validates the Validators?*](https://arxiv.org/abs/2404.12272), a 2024 human-computer interaction paper by Shreya Shankar and colleagues, observed people refining their criteria while grading language-model outputs. The researchers called this **criteria drift**: seeing actual outputs helps people discover what their original quality definition missed. The paper does not validate APEX as a whole, but it supports the narrower point that expert evaluation can produce new criteria rather than merely apply fixed ones.

That makes ownership important. Whoever turns quality criteria into executable checks gains influence over how the system works. Domain experts should therefore retain authority over what good means, with platform and risk owners translating that judgment into enforceable configuration. Agents contribute broad observation across runs, but they cannot reliably supply the domain ground truth against which their own proposals should be judged.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>The expert is part of the learning mechanism, not merely a safety gate. Their rejection can reveal missing criteria, context, ownership, or strategy that must change before the next execution.</p></div>

## There is no final graph

Imagine the production graph at version one. After several executions, version two changes routing, version three improves context, version four adds an evaluator, and version five removes an agent that creates more coordination than value. A later version may give one agent more autonomy, replace deterministic steps with an agentic loop, or make an unreliable agentic step deterministic again.

Those revisions do not prove that the earlier graph was badly engineered. They show that the organization learned from contact with the work. Over time, the version history becomes a record of what the organization has discovered about quality, decomposition, cost, responsibility, and risk.

Even a strong graph cannot remain final because its conditions do not remain fixed. Customers, strategy, models, tools, costs, and the organization’s own understanding of quality will change. Graph Engineering answers how the production system should be structured now; APEX keeps that answer open to disciplined revision.

The practical aim is a system whose next version is shaped by better evidence and better judgment than the last. Domain experts give that process direction, agents extend how much execution evidence can be examined, and the change contract keeps both inside clear authority. That is how the graph becomes a living expression of organizational learning without asking humans to leave the loop.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>There is no permanent production graph. Its versions should record what the organization has learned, with agents expanding observation and accountable experts directing the next change.</p></div>
