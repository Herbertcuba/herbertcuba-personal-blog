---
title: "Microsoft's HVE Teams Is the Best Agentic Engineering Framework of 2026. It Has One Blind Spot."
date: 2026-06-24
excerpt: "Microsoft just open-sourced 241 artifacts for AI-augmented engineering teams. It is the most serious attempt I have seen to make agentic production-grade. And it has a hole in the middle."
featuredImage: "/images/posts/241-artifacts-zero-evals.webp"
layout: post.njk
tags: ["ai", "operating-model", "apex", "agentic-production"]
theme: operating-models
---

Microsoft recently open-sourced [HVE Core](https://github.com/microsoft/hve-core). I went and looked. Eight months of work, 241 published artifacts, 1,200 stars, a governance document, a transparency note, a 654-commit history. It is the most serious attempt I have seen to make AI-augmented engineering production-grade.

The methodology is called RPI: Research, Plan, Implement, Review. Each phase is a separate agent, with mandatory context clearing between them. The reasoning is sharp: AI cannot tell the difference between investigating and implementing. When it knows it cannot implement, it stops optimizing for plausible code and starts optimizing for verified truth.

It is a beautiful piece of engineering. And it has a hole in the middle that I think will quietly compound into the next decade's most expensive organizational mistake.

I think we are about to build the same trap at scale. And I want to name it before the trap closes.

## What HVE Teams actually is

HVE stands for Hypervelocity Engineering. The name comes from a reframing of velocity: not speed, but speed with direction. Moving fast toward the right thing, not just moving fast.

Microsoft's implementation — [HVE Core](https://github.com/microsoft/hve-core) — is built specifically for engineering teams. This is not a general-purpose framework. It is GitHub Copilot-native, distributed as VS Code extensions, and designed around software development workflows: code generation, architecture decisions, security review, PR review, backlog management. If your team writes code, this was built for you.

The core methodology is RPI: Research, Plan, Implement, Review. Four phases, four separate agents, with a mandatory context clear between each one. The reasoning behind the context clear is the most important insight in the whole framework: AI cannot tell the difference between investigating and implementing. When an agent knows it is in Research mode and cannot implement, it stops optimizing for plausible-sounding code and starts optimizing for verified truth. Constraining the agent's goal changes what it produces.

In practice: a Task Researcher investigates your codebase and documents findings with source citations down to the line number. A Task Planner turns that into a three-file plan set. A Task Implementor executes the plan task by task. A Task Reviewer validates against the research and plan specs, runs lint and tests, and flags what still needs work.

Getting started is straightforward: install the `ise-hve-essentials` VS Code extension, open GitHub Copilot Chat, and select an agent. The full bundle includes 51 agents, 63 prompts, 102 instructions, and 12 skills across 13 collections covering everything from design thinking to security to data science.

One important contrast worth naming: APEX — the operating model I have been developing in parallel — is domain-agnostic. A content team, a research pipeline, a client delivery operation can all run APEX. HVE Teams is for engineering. That specificity is a feature, not a limitation. It means the agents, instructions, and quality gates are tuned for code, not generic enough to handle everything and good at nothing.

## The 241 problem

When build costs collapse, production volume goes up. That is the whole point of Hypervelocity Engineering, of agentic execution, of /goal loops. Output multiplies. A team that shipped four features last quarter ships sixteen this quarter. The artifact count rises. The dashboard goes green.

The question nobody is tracking is whether the artifacts are getting *better* or just *more*.

HVE Core ships a Review phase. It runs a Task Reviewer agent that validates implementation against research and plan specs. It checks convention compliance. It runs lint, build, and test. It produces a review document. This is genuinely good work. It is also a closed loop. The Reviewer evaluates *this* run against *this* spec. It does not ask whether the spec itself was right. It does not improve the system that produced the spec. It does not feed forward into the next cycle's Strategic configuration.

That is the missing piece. And it is the most expensive piece to be missing, because the cost shows up eighteen months later, when the team is shipping 80% of a working solution three times over and nobody can remember which version is canonical.

## The two systems

I have spent the last year writing about an operating model I call [APEX](https://dev.to/herbertcuba/apex-agentic-production-execution-4gjh). It is structured as three phases: Strategic, Execution, Reflection. The Execution phase is exactly what HVE Core's RPI handles — well-engineered, well-instrumented, with the right separation of concerns. I would not be writing this if I thought the HVE team did not know what they were doing.

The phase most teams skip is Reflection. They ship, they move on, they start the next sprint. The same problems repeat. Iteration depth stays flat. First-pass acceptance does not improve. And after a year of compounding, the team is faster than ever at producing output that does not get meaningfully better.

HVE Core's RPI has a Review phase, not a Reflection phase. Review looks backward at this artifact. Reflection looks forward at the system. The difference is structural, not semantic.

A Review validates the work. A Reflection validates the context. A Review asks, "Did we build what the spec said?" A Reflection asks, "Why did the spec need to say that in the first place? What does this run tell us about the Strategic configuration that produced it? What changes in the spec library, the agent identity files, the QA criteria, the harness decision record before the next cycle starts?"

This is the difference between a 241-artifact output and a system that compounds. The artifact count is a volume number. The system improvement is a rate. Volumes can be matched by any team with the same budget. Rates cannot.

## What 241 artifacts without Reflection actually builds

I have been writing about this in different vocabulary. Quality debt is the term I use for the gap between what an organization can produce and what it can meaningfully evaluate. HVE Core has a partial answer on the production side and no answer on the evaluation side. The Reviewer agent is doing evaluation *of the artifact*. Nobody is doing evaluation *of the system that produced the artifact*.

The compounding dynamic is subtle. In a healthy Reflection cycle, every run produces three things: a shipped artifact, a measured outcome, and a calibrated system. The third one is the most valuable, because it is the only one a competitor cannot copy. The shipped artifact can be inspected. The measured outcome can be benchmarked. The calibrated system — the agent identity files, the spec library, the QA criteria, the accumulated history of what worked and what did not — that is the moat. That is what Satya Nadella was getting at when he wrote about owning your knowledge layer.

Without Reflection, the system does not improve. The artifacts do. So the artifact count rises while the strategic configuration stays flat. The team gets faster at producing things they could not justify producing, and they get slower at noticing that they are doing it.

## The deeper point

I think we are at the end of the Execution era and the beginning of the Verification era. The model is commodity. The harness is commodity. The artifact is commodity. What is not commodity is the judgment to know what should be produced, the discipline to measure whether it worked, and the operating model to feed that measurement back into the system that decides what to produce next.

HVE Core is the best Execution play of 2026. Microsoft should be proud of it. The teams I would watch closest are not the ones with the most artifacts. They are the ones whose artifact from 90 days ago made today's artifact obsolete.

The trap is winning the same way forever. The way out is the loop nobody is naming.
