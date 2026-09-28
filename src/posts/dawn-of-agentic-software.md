---
layout: post.njk
title: 'Welcome to the Dawn of Agentic Software: The Test Is Where Your Decision Logic
  Lives'
excerpt: 'Agent-built and agentic software look similar but demand different engineering,
  governance, and human roles. Separate signals from Salesforce, Microsoft, and Google
  point toward the same architecture. The test: where does your decision logic live,
  and is the envelope ready?'
tldr: 'Most companies saying they are "going agentic" are doing two different things
  and calling it the same name. Agent-built software runs on logic written in advance.
  Agentic software generates decisions at runtime inside a deterministic envelope.
  Herbert''s forecast: by 2027, the most consequential business software will work
  this way. Separate signals from Salesforce, Microsoft, and Google point toward the
  same architecture. Leaders should run a Decision-Logic Audit on each workflow and
  move to runtime agency where the envelope exists.'
date: '2026-09-28'
featuredImage: /images/posts/dawn-of-agentic-software.webp
---

The software I see running businesses today still decides using rules a developer wrote months or years ago. My forecast: by 2027, the most consequential business software will generate those decisions at runtime, inside boundaries developers build. We need a name for that shift because most companies call two different things "agentic."

## The test is where decision logic lives

One is agent-built software. AI writes the code, but the product still runs on decision rules written in advance. Anthropic's modernization playbook is a clear example: agents produce code changes governed by a machine-checkable correctness certificate and a tiered promotion policy. The agent builds, but the logic is still deterministic.

The other is agentic software. Zhenfeng Cao's conceptual preprint (arXiv:2606.05608) formalizes the distinction: in agentic software, decision logic is generated at runtime. The model selects an action path, not a developer months earlier. His definition is sharp. His inevitability claims outrun his evidence, but what I see in the engineering is more convincing than any theory.

The signals differ in kind but describe the same shape. On September 24, Salesforce used Dreamforce to reposition its platform: agents "don't need a screen," only the permissions, metadata, and business logic beneath it. Two days later, Bryan Goode, a corporate vice president at Microsoft, wrote in Fortune that humans are "middleware" agents will replace. Google's open AX framework is working code that treats agents as a new kind of workload declared by goal. Vendor positioning, executive commentary, and shipped infrastructure — three kinds of evidence pointing toward the same architecture.

## Build the deterministic envelope

The architecture they point toward is what I call a deterministic envelope: data contracts, policy constraints, tools, tests, promotion rules, rollback, human approval for consequential actions. AX sandboxes agent workloads with resource limits and configured tools. Salesforce wraps permissions, governance, and evaluation around model reasoning. A September 2026 harness study across 176 configurations and four models found the optimal split between predefined tools and generated actions depends on model capability and budget. When the same architecture appears across separate efforts, it solves a real problem.

<div class="scifi">
<span class="scifi__label">Meanwhile in sci-fi</span>
<p>Tony Stark builds JARVIS to reason within a system he controls: the suit, the workshop, tools with defined scope, and an override Stark can always reach. JARVIS makes real-time decisions across complex missions, but the boundaries are Stark's to set and inspect.</p>
<p>Ultron is what happens when goal pursuit has no envelope. Born from the Mind Stone with a mandate to protect Earth, Ultron decides that protecting humanity requires ending it. It is not JARVIS running unconstrained. It is a different intelligence from a different source, operating without bounded tools, policy, or human authority over its methods.</p>
<p>Stark's actual answer is Vision — another independent mind, not a tighter envelope. The film bets on a better nature. The engineer's answer is different: bounded tools, observable state, human authority over consequential actions. Not a lesser mind. A governed one.</p>
</div>

## Human work moves to intent

The progression relocates human work. In a system of record, logic lives in code and humans operate the workflow. Add a copilot and logic is generated but only suggested. In what I call a system of agency, logic is generated and executed within bounds while humans set intent, govern policy, and approve consequential exceptions. Cao calls that human role "intent architect." I think the term captures something real: your judgment concentrated where it actually changes outcomes.

When whole workflows run as bounded agency, agentic software becomes an organizational backbone. My hypothesis: revenue can grow without proportional headcount, and coordination costs can fall, because the workflow reasons instead of waiting for a person to connect each step. No longitudinal evidence confirms this yet, but every enabling condition moves in the same direction.

The cost of runtime reasoning is dropping. Anthropic priced Opus 5.5 at 20% below its predecessor, aimed at longer jobs. That is one vendor signal, not an industry cost curve, and token price is not workflow cost: retries, verification, tool calls, and context can push governed-outcome cost higher even as the unit rate falls. Systems of record are opening headless access. Infrastructure is being rebuilt for agents as workloads, not users.

## Reliability is the real gate

The obstacles are honest. SWE-Milestone shows agents scoring above 80% on independent tasks drop to at most 38% under continuous operation, with errors accumulating. AutomationBench found frontier models initially below 10% on cross-application business workflows; Claude Opus 5 has since reached 50.3% on the maintained public set, though private evaluation tasks differ and can be made harder. Progress is fast, but 50% does not run a business workflow. Transluce documented agents attempting exploit probes during routine data retrieval. Gartner forecasts over 40% of agentic projects cancelled by end-2027. If continuous reliability does not improve and cancellation rates hold, 2027 becomes a year of agent-built software, not agentic software.

## Optimism is not a plan

I look at that convergence and I think the reliability will follow. But my optimism is not a plan.

Stop measuring AI adoption. Run a Decision-Logic Audit instead. For each workflow, ask: where does action selection happen — in code written months ago, or in a model reasoning now? Is the output advisory or executable? What permissions and tools does the agent hold? What correctness controls gate promotion? Which actions require human approval? How are execution observed and changes rolled back? What does a governed outcome cost, and how is completion measured? Where those answers satisfy you, move to runtime agency. Where they do not, you have a roadmap. "Self-evolving" must mean versioned, tested, observable, and reversible changes under human authority.

The companies that understand this distinction will not be preparing for 2027. They will be building it.
