---
title: "The graph is a hypothesis"
description: "Graph Engineering builds agentic production. APEX is the outer loop through which execution evidence, agents, and domain experts continuously reshape it."
tldr: "Graph Engineering builds the production system for complex agentic work, while APEX provides the outer improvement loop. Each run produces both an output and evidence; agents can analyze that evidence at scale, domain experts define what good means, and an enforced change path turns both into versioned, measurable improvements without allowing agents to promote their own proposals."
provenance: verified-by-author
permalink: /drafts/64bebaf6/
layout: post.njk
date: 2026-08-18
---

Agentic engineering is moving beyond the single-agent loop. An agentic system is software in which AI models can use tools, make decisions, hand work to other agents, and act across several steps. Once that work involves multiple agents, models, tools, evaluators, human interventions, and deterministic code paths, meaning conventional code intended to behave the same way for the same input, production becomes a coordination problem.

The emerging name for this discipline is Graph Engineering. The term is useful because complex agentic production needs structure, but it can also point us toward the wrong deliverable: design the right graph, build it, and deploy it. For sufficiently complex knowledge work, the first graph cannot be right. It encodes assumptions about the work before production has given us enough evidence to test them.

Graph Engineering builds the production system. [APEX, short for Agentic Production Execution](/posts/2026-04-05-apex-framework/), is the outer improvement system that helps humans and agents continuously reshape it. I think that distinction matters more than the diagram, because a sophisticated workflow that cannot learn from its own operation will eventually become a sophisticated form of technical debt.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>Graph Engineering structures agentic production. APEX surrounds that structure with a human-governed learning loop, because the first production graph is an informed hypothesis rather than a finished answer.</p>
</div>

## The graph is a hypothesis

A production graph represents our current best understanding of how work should happen. It decides which agents exist, what each one owns, which model and tools they use, what context they receive, where work runs in sequence or in parallel, when evaluation occurs, and when a person must intervene. Those choices are not merely implementation details. They encode a theory of the work itself.

The graph is also broader than nodes and edges on a screen. Its topology, meaning which components connect and in what order, is only one part of the execution configuration. Prompts, skills, memory, routing, model selection, deterministic components, evaluators, quality gates, human checkpoints, and autonomy boundaries can all change how the same visible workflow behaves.

This is why local improvements are hard to predict. Another evaluator, an automated or human check against stated criteria, may catch more failures while adding enough latency to damage the service. A stronger model may improve one step without changing final acceptance, leaving only a higher bill. An agent that repeatedly fails may have a weak prompt, but it may also receive the wrong context, sit at the wrong point in the workflow, lack the right tool, or be an unnecessary division of work.

A [2026 study in the AI research journal *Nature Machine Intelligence*](https://www.nature.com/articles/s42256-026-01268-y) tested 260 controlled configurations across five agent architectures, three model families, and six benchmarks. Multi-agent designs improved the Finance Agent benchmark by as much as 80.8 percent, yet degraded the sequential planning benchmark PlanCraft by as much as 70 percent. These are benchmark results, not proof of enterprise performance, but the mechanism matters: coordination helped work that decomposed naturally and became overhead when the task depended on a tightly shared sequence of state.

The production question is therefore not whether a graph looks coherent. It is whether its current configuration performs better than the alternatives under real quality, cost, latency, and intervention constraints. Design must lead to execution, observation, evaluation, learning, and another design decision.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>The graph includes the full execution configuration, not just workflow topology. Because its components interact and task structure changes the value of coordination, each version must be treated as a testable production hypothesis.</p>
</div>

## Each run should teach the system

APEX puts an outer loop around the production graph. Strategy defines the intended outcome and constraints. Execution runs the graph. Reflection compares what happened with what was expected. Calibration turns that comparison into a decision about the next configuration. Here, calibration means changing the system in response to evidence, not merely tuning a model score.

Every execution now has two outputs. The first is the intended result for the user or business process. The second is evidence about the system that produced it. An execution trace, the time-ordered record of agent decisions, tool calls, handoffs, intermediate results, and outcomes, can be read alongside failures, retries, expert corrections, evaluation scores, cost, and latency.

A Lead Agent can inspect that evidence across many runs and find patterns that are difficult for one person to see. It can identify where failures concentrate, which agent creates most retries, where expensive context adds little value, which model is oversized for its task, or which evaluator correlates poorly with final expert acceptance. Its proper first role is to observe, diagnose, and propose. It should not be able to promote its own change.

A bounded example shows why this matters. [Anthropic, the company behind the Claude AI assistant, reports](https://www.anthropic.com/engineering/multi-agent-research-system) that a tool-testing agent exercised a flawed Model Context Protocol tool dozens of times, found bugs and important details, and rewrote its description. Model Context Protocol, or MCP, is a standard for connecting AI applications to external tools and data. Anthropic reported a 40 percent decrease in task-completion time for later agents using the revised description because they avoided most earlier mistakes.

That is first-party evidence at the scale of one tool interface, not independent proof that whole production graphs can improve themselves. Still, it demonstrates the relevant mechanism: execution produces evidence, an agent diagnoses a configuration problem, and a revised component changes later performance. APEX extends that mechanism across the production system while keeping consequential change under human authority.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>Each run should produce operational evidence as well as a deliverable. Agents can analyze traces across many runs and propose changes quickly, but proposal power is different from deployment authority.</p>
</div>

## A proposal is not a deployment

The strongest objection to APEX is that much of this sounds like existing engineering practice. It does. Continuous integration and delivery, usually shortened to CI/CD, versions, tests, and promotes software changes. Machine-learning operations, or MLOps, applies related discipline to models and data in production. Durable workflow engines preserve execution state through failures, evaluation-driven development tests behavior against explicit cases, and policy-as-code turns governance rules into checks that software can enforce.

APEX should not replace any of them. Its narrower job is to connect them around the changing definition of an agentic production system: use traces and expert judgment to form a system-level hypothesis, express the proposed difference, test it, assign authority, and measure the result after release. That extra loop is useful when a failure may originate in the interaction among prompts, tools, context, routing, models, evaluators, and agent responsibilities, while the meaning of quality is still being discovered. If the workflow is stable, the quality criteria are fixed, and the existing release process already makes the same evidence-based decisions, APEX adds little.

The boundary becomes concrete through an enforced transition contract:

`Proposed → Replay-passed → Human-approved → Canary → Promoted`

A deterministic promotion controller, not an agent, should verify the current state, required test evidence, and recorded human approval before allowing the next transition. If an agent tries to move a proposal directly into a canary, the controller denies the transition and records the attempt. Human authority is then part of the executable system rather than a sentence in a policy document.

The test itself needs discipline. Offline replay means rerunning recorded work outside live production. The candidate should be compared with a declared baseline and effect threshold on failure-derived cases plus a sealed holdout, a set of cases the proposal agent cannot inspect. Once a holdout has influenced repeated decisions, it is no longer truly unseen, so it should be refreshed or rotated. A canary release then sends a limited, comparable share of live work to the candidate, with a stable version as the comparator and stopping rules for quality, cost, latency, and human intervention.

Rollback also needs precise language. Configuration rollback restores an earlier graph for future executions; it does not unsend an email, reverse an external transaction, repair incompatible state, or erase an unsafe tool action. Systems that can change the world need checkpoints for state restoration, compensating actions that repair what can be repaired, and autonomy boundaries that prevent irreversible work without explicit authority.

Decision rights should be equally clear. The system owner accepts production accountability, the platform owner implements and operates the change, domain experts own the quality judgment, and risk or budget owners set constraints where the change affects regulated data, suppliers, safety, or material spend. The outer loop is learning only when it improves predeclared outcomes after its own cost is counted. If it produces more review, more versions, and no reliable gain over the existing release process, it is simply another layer of complexity.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>APEX adds value beyond CI/CD and MLOps only when it turns system-wide evidence and evolving expert criteria into better decisions. A deterministic controller, sealed tests, comparable canaries, explicit authority, and honest recovery limits keep agent-assisted improvement governed and falsifiable.</p>
</div>

## Human judgment changes the specification

Human-in-the-Loop, or HITL, often gets reduced to final review, although established practice can also include correction, interruption, escalation, and approval. APEX makes a more specific claim: in complex knowledge work, expert judgment is part of the learning mechanism because quality cannot always be fully specified before people see real outputs.

A domain expert may reject an output that passes every automated evaluation. That does not automatically mean the expert is inconsistent or the methodology failed. The rejection may reveal that the evaluator measures the wrong property, necessary context is missing, the wrong agent owns the task, the examples are weak, or the workflow decomposes the problem incorrectly.

This is not just a theoretical possibility. [*Who Validates the Validators?*](https://arxiv.org/abs/2404.12272), a 2024 human-computer interaction paper by Shreya Shankar and co-authors, observed people refining their criteria while they graded language-model outputs. The researchers called this “criteria drift.” The name can sound like a defect, but the finding points to something useful here: evaluation can reveal what people mean by quality, not only whether an output meets a definition written earlier.

Reflection should therefore ask why the production system failed to recognize what the expert recognized. The answer can become better context, instructions, examples, evaluations, decomposition, routing, agent responsibilities, or quality criteria in the next version. Domain experts do more than approve or reject the output. They help shape the system that produces the next one.

Agents contribute scale of observation. Experts contribute grounded judgment about what good means in the domain. Neither contribution is sufficient alone, and the goal is not to push people progressively out of the loop. It is to place their expertise where it can change many future executions instead of correcting the same failure one output at a time.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>Expert rejection can expose a missing quality criterion rather than merely block an output. APEX turns that judgment into a change to the production system, while agents supply the scale needed to find recurring patterns across executions.</p>
</div>

## Meanwhile in sci-fi

<div class="scifi">
<span class="scifi__label">Meanwhile in sci-fi</span>
<p class="scifi__film">Edge of Tomorrow (2014)</p>
<p>Doug Liman's film follows Major William Cage as he repeatedly relives the same battle and changes his actions using what each failed cycle reveals. The mapping to APEX is narrow: repetition creates value only when evidence from one execution changes the configuration of the next, while a human purpose still determines what counts as progress.</p>
</div>

## There is no final graph

Imagine a production graph at version one. After ten executions, the evidence may justify changing routing in version two, improving context in version three, adding an evaluator in version four, and removing an unnecessary agent in version five. A later version might move evaluation earlier or grant one agent more autonomy. Another could replace three deterministic steps with an agentic loop, while the version after that makes a previously agentic step deterministic because the evidence favors predictability.

None of these changes proves that the earlier graph was badly engineered. They show that the organization learned. The version history becomes a record of that learning only when each change preserves its hypothesis, evidence, approval, measured result, and any decision to roll back or make no change. Without that record, continuous improvement can become configuration churn that nobody can explain.

There is no final graph because the environment does not hold still. Customers, strategy, models, tools, costs, products, and the organization's understanding of quality all change. The best production system is therefore the best one we currently know how to build, together with a disciplined way to discover when it is no longer good enough.

The future of agentic production will not be defined by who can draw the most sophisticated graph. It will be defined by who can make graphs learn without handing judgment and authority to the system proposing the changes. Graph Engineering gives us the production system. APEX gives humans and agents the improvement system around it.

You do not build the perfect graph. You continuously shape it. Domain experts provide judgment, agents provide scale, and an enforced change path turns both into accumulated organizational learning.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>A graph should evolve as evidence, technology, and the definition of quality change. Its version history becomes organizational learning only when humans retain authority and each proposed improvement is measured, explainable, reversible where possible, and allowed to end in no change.</p>
</div>
