---
title: "The graph is a hypothesis"
date: 2026-08-18
excerpt: "Agentic production needs structure, but its first graph is only our best current guess about how the work should happen. APEX turns execution into evidence for shaping the next version."
tldr: "Graph Engineering builds the full agentic production system. APEX is the outer improvement loop that uses execution evidence, agent analysis, and domain-expert judgment to reshape that system through versioned and governed changes. The aim is not a final graph or a human-free loop, but a production system that keeps learning without authorizing itself."
layout: post.njk
featuredImage: "/images/posts/the-graph-is-a-hypothesis.webp"
tags:
  - agentic-engineering
  - artificial-intelligence
  - apex
provenance: verified-by-author
permalink: /drafts/64bebaf6/
---

Agentic engineering, the work of building systems in which AI agents can plan, use tools, and hand work to one another, is moving beyond the single-agent loop. A production system may now coordinate several agents, different models, tools, context, conventional code, human interventions, routing, parallel work, and evaluators that judge outputs against stated criteria.

I use **Graph Engineering** to describe the engineering of that complete production system. The name is useful because complex agentic work needs an explicit structure, but it can also hide a dangerous assumption: that our job is to design the right graph and then operate it.

For complex knowledge work, the first graph will not be the solution. It will be a hypothesis about the solution. Graph Engineering builds the system that performs the work; **APEX**, my Agentic Production Execution framework, provides the outer loop through which humans and agents keep improving that system.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>A production graph is an encoded theory of how work should happen. Graph Engineering builds it, while APEX surrounds it with a learning process that continues after deployment.</p></div>

## The graph is a hypothesis

A production graph records choices about the work itself. It says which agents should exist, what each one owns, which context and tools they receive, which model handles each task, what runs in sequence or in parallel, where evaluation happens, when an agent retries, and when a person intervenes. Before the system has met real work, many of those choices are informed guesses.

The interaction between them is what makes the problem difficult. A stronger model may improve one step without changing final acceptance. Another evaluator may catch more errors while adding too much cycle time. A failing agent may need a better prompt, but the real problem could be missing context, bad routing, the wrong tool, or the decision to make that step agentic at all.

A [2026 study in the scientific journal *Nature Machine Intelligence*](https://www.nature.com/articles/s42256-026-01268-y), titled *Capable language models can outgrow the benefits of collaboration*, shows why architecture has to remain an empirical question. Across 260 configurations, centralized coordination improved one financial-analysis benchmark by as much as 80.8% over a single agent, while an independent multi-agent setup performed 70% worse on a tightly sequential planning benchmark. The financial task could be divided into relatively independent factors; the planning task suffered when it was split into artificial subtasks that added coordination messages without helping the reasoning.

That study does not validate APEX, and it does not identify one graph that always wins. It makes the underlying point sharper: the value of a production structure depends on the work, the models, and their interactions. You discover that fit by running the system, not by admiring its diagram.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Graph decisions encode assumptions about both the task and the production system. Because local changes can produce system-wide trade-offs, the graph must be tested as a hypothesis rather than treated as a finished design.</p></div>

## Every run should teach us something

APEX places a second loop around execution: Strategic → Execution → Reflection → Calibration → next cycle. Strategy defines the intended result and constraints, while Execution performs the work. Reflection asks what the run reveals about the system, and Calibration turns that learning into an approved change for the next cycle.

Each execution therefore produces two outputs. The first is the intended deliverable. The second is evidence about the production system: failures, retries, human corrections, evaluation scores, cost, latency, and the execution trace, meaning the time-ordered record of model outputs, tool calls, intermediate results, and handoffs.

This makes the graph broader than nodes and edges. Its real configuration includes how agents and steps connect, their responsibilities, prompts, context, skills, tools, models, memory, routing, and evaluators. The configuration also covers deterministic components, which are conventional code paths intended to follow predefined behavior, as well as quality gates, human checkpoints, and limits on what an agent may change or approve.

Once the object is defined this way, Graph Engineering becomes continuous engineering of the production system itself. The visible workflow is one representation. APEX is the process that asks what should change, why, under whose authority, and whether the change worked.

<figure class="fig-band article-diagram" data-diagram-id="apex-outer-loop">
<figcaption class="fig-cap">Fig. — APEX turns Strategic, Execution, Reflection, and Calibration into a recurring outer loop.</figcaption>
<svg width="100%" height="auto" viewBox="0 0 760 420" role="img" aria-labelledby="ad-apex-outer-loop-title ad-apex-outer-loop-desc" xmlns="http://www.w3.org/2000/svg">
<title id="ad-apex-outer-loop-title">The APEX outer loop</title>
<desc id="ad-apex-outer-loop-desc">A four-stage clockwise loop from Strategic to Execution to Reflection to Calibration and back to the next cycle.</desc>
<defs><marker id="ad-apex-outer-loop-arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 Z" fill="#00E653"></path></marker></defs>
<g class="article-diagram__decoration"><rect x="0" y="0" width="760" height="420" fill="#000000"></rect><path d="M40 40 H720 M40 380 H720" stroke="#0A1A0F" stroke-width="2"></path></g>
<g class="article-diagram__claim" data-claim-id="claim-apex-outer-loop">
<rect x="265" y="40" width="230" height="76" fill="#0A1A0F" stroke="#00E653" stroke-width="3"></rect><text x="380" y="87" text-anchor="middle" fill="#DCE7DE" font-size="26" font-weight="700">Strategic</text>
<line x1="495" y1="78" x2="552" y2="166" stroke="#00E653" stroke-width="3" marker-end="url(#ad-apex-outer-loop-arrow)"></line>
<rect x="510" y="172" width="180" height="76" fill="#0A1A0F" stroke="#00E653" stroke-width="3"></rect><text x="600" y="219" text-anchor="middle" fill="#DCE7DE" font-size="26" font-weight="700">Execution</text>
<line x1="552" y1="248" x2="495" y2="336" stroke="#00E653" stroke-width="3" marker-end="url(#ad-apex-outer-loop-arrow)"></line>
<rect x="265" y="304" width="230" height="76" fill="#0A1A0F" stroke="#00E653" stroke-width="3"></rect><text x="380" y="351" text-anchor="middle" fill="#DCE7DE" font-size="26" font-weight="700">Reflection</text>
<line x1="265" y1="342" x2="208" y2="254" stroke="#00E653" stroke-width="3" marker-end="url(#ad-apex-outer-loop-arrow)"></line>
<rect x="70" y="172" width="180" height="76" fill="#0A1A0F" stroke="#00E653" stroke-width="3"></rect><text x="160" y="219" text-anchor="middle" fill="#DCE7DE" font-size="26" font-weight="700">Calibration</text>
<line x1="208" y1="172" x2="265" y2="84" stroke="#00E653" stroke-width="3" marker-end="url(#ad-apex-outer-loop-arrow)"></line>
</g>
</svg>
</figure>

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Every run produces a deliverable and evidence about the system that produced it. APEX converts that evidence into governed changes across the full execution configuration, not merely the visible workflow.</p></div>

## Agents can diagnose, but experts define good

A Lead Agent, the coordinating agent responsible for observing the production system, can work on the graph as well as inside it. Across a run history, it can find where failures concentrate, which step causes most retries, where expensive context adds little value, which model is more capable and costly than its task needs, and where automated evaluation disagrees with final acceptance. It can then diagnose a pattern and propose a change without asking a person to read every trace manually.

That scale has a boundary. An agent can optimize what the system already knows how to measure, but complex knowledge work rarely arrives with a complete definition of quality. A domain expert may reject an output that passes every automated check. The useful response is not to dismiss that judgment as subjective; it is to ask why the production system could not recognize what the expert recognized.

The evaluator may measure the wrong property, important context or examples may be missing, or the task may belong to another agent. The workflow may also decompose the problem badly. The expert's correction becomes evidence for improving the instructions, evaluation, routing, quality criteria, or strategy itself.

This goes beyond the common form of Human-in-the-Loop, or HITL, where a person reviews an agent's output and approves or rejects it at a checkpoint. In APEX, the expert also helps reshape the system that will produce the next output. Agents contribute scale of observation; domain experts remain responsible for what good means and for changes that alter production authority.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Agents can detect recurring patterns across far more executions than a person can inspect manually. Domain experts supply the judgment that gives those patterns meaning and turns an accepted or rejected output into better system design.</p></div>

## Improvement needs a change contract

An improvement loop should not become a self-modifying production system with polite documentation. Existing evaluation tools, workflow engines, and release controls already handle parts of the problem. APEX gives them a shared decision object: a proposed change to the full production configuration, including the way quality is defined and who has authority.

Consider an explicitly illustrative case. A synthesis agent repeatedly drafts before it receives the policy context needed for the task, then retries after a downstream evaluator flags the omission. A Lead Agent should not be allowed to rewrite the workflow and promote its own fix. It should create a versioned proposal that another part of the system can test and an authorized human can decide.

| Proposal field | Illustrative value |
| --- | --- |
| Current version | `graph-v12` |
| Evidence | Trace IDs showing the same late-context retry pattern |
| Exact change | Provide policy context before synthesis; leave the model and agent count unchanged |
| Protected test | Cases withheld from diagnosis and tuning so they can expose regressions |
| Success threshold | Higher expert acceptance with no unacceptable increase in cost, cycle time, or review effort |
| Authority change | None; the Lead Agent gains no new production permission |
| Approver | Named production owner, plus relevant domain or risk owner when the change affects their boundary |
| Recovery | Revert the configuration and address any side effects already created |

The proposed graph should run against the current graph across repeated trials, because model outputs can vary between runs. Both versions need the same versioned test set, isolated state between trials, and no tuning access to the protected cases; otherwise the comparison is contaminated. A real proposal must also replace the illustrative success labels above with numeric limits before testing begins.

A valid decision can be promote, revise, reject, or no change. If promoted, a canary release sends only a small share of live work to the new version first. Reverting the graph configuration may stop further damage, but it cannot undo an email already sent or a record already changed, so recovery may also require restoring the affected system state or taking a compensating action that corrects an external effect.

The enforceable rule is simple: `proposed` cannot become `production` without the required approval, and the proposing agent cannot fill the approver field. The outer loop earns its place only if accepted quality, cost, latency, or review burden improves against the current system. If it produces more meetings and change records without better outcomes, APEX has added ceremony rather than learning.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Agent-assisted Graph Engineering needs a versioned proposal, protected comparison, explicit authority boundary, human decision, and recovery plan. The Lead Agent may diagnose and propose, but it cannot authorize its own move into production.</p></div>

## Meanwhile in sci-fi

<div class="scifi">
<span class="scifi__label">Meanwhile in sci-fi</span>
<p class="scifi__film">Edge of Tomorrow (2014)</p>
<p><em>Edge of Tomorrow</em> is a science-fiction film in which a soldier repeats the same battle while retaining what he learned from each failed attempt. The mapping is narrow: the production graph is the current battle plan, execution exposes its weaknesses, and APEX carries evidence and expert judgment into the next version. Repetition alone changes nothing; retained learning does.</p>
</div>

## There is no final graph

Imagine a production graph at version one. After several executions, version two changes routing, version three improves context, and version four adds an evaluator. A later version removes an unnecessary agent, moves evaluation earlier, lets one agent decide more of its own process within set limits, or replaces an agentic step with deterministic code. Another may make the opposite move because the task has changed.

Those revisions do not prove that the first graph was badly engineered. They show that the organization learned. The version history becomes a record of accumulated understanding about the work, including which observations were wrong and which changes were rejected.

Even a strong graph cannot remain final because its environment will not remain still. Customers, strategy, models, tools, costs, products, and the organization's own definition of quality continue to change. The best production system is therefore the best one we currently know how to build, paired with a disciplined way to discover a better answer.

The practical goal is to keep that system changeable without making it self-authorizing. Domain experts provide judgment about what good means, while agents provide scale of observation; together they continuously shape the system that does the work, with humans accountable for what enters production.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>A production graph should evolve as tasks, models, costs, and quality standards change. Its version history can capture organizational learning, provided agents help observe while accountable humans decide what enters production.</p></div>
