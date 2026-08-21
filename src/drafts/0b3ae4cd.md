---
title: "The AI-First Company Flips the Pyramid"
excerpt: "Most companies add agents beneath the organization they already have. The deeper move is to let bounded agents carry workflow execution while people concentrate judgment, accountability, and change."
anthem: true
provenance: verified-by-author
permalink: /drafts/0b3ae4cd/
layout: post.njk
date: 2026-08-21
---

Two triangles expose a choice hidden inside the phrase AI-first.

One points down. At its wide top, people carry business workflows, the paths from a triggering event to a verified outcome. At the narrow tip sit AI agents: software that lets a language model choose its next approved step or tool from the case in front of it. The other triangle points up. Agents form a broad execution base, while people apply judgment at the apex.

The choice matters because adoption is moving faster than organizational design. The [2025 AI Index from Stanford University's Institute for Human-Centered Artificial Intelligence](https://hai.stanford.edu/ai-index/2025-ai-index-report) found that 78% of surveyed organizations reported using AI in 2024, up from 55% the year before. That is a 23-percentage-point rise in twelve months. A company can still achieve that kind of adoption while leaving every queue, handoff, approval, and exception exactly where it was.

An AI-first company changes who carries the work. Agents handle repeatable movement within explicit limits. People set intent, resolve conflicts, accept consequences, and decide when the system itself must change. The pyramid describes the distribution of execution and judgment, not rank or future headcount.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>AI-first is a different allocation of work and authority, not a larger collection of AI tools.</p></div>

## The pyramid has to change direction

The retrofit trap begins with the organization already in place. AI is attached to roles one task at a time, while employees remain responsible for moving each case from beginning to end.

In the retrofit trap, people remain the broad operating layer: they open cases, move information between systems, chase approvals, and absorb exceptions. Agents occupy the narrow point beneath them, drafting a message or suggesting the next action. The triangle points down because the weight of the workflow still rests on people.

In an AI-first company, bounded agents form the broad execution layer. They receive events, gather permitted evidence, advance cases through approved stages, and route uncertainty. People occupy the apex, where judgment, accountability, and changes to the system belong. Routine volume is handled below; decisions with wider consequences rise.

This geometry is easy to misread. The apex is not an executive caste. A customer-service specialist may occupy it while deciding a novel remedy. A finance analyst may move between layers, reviewing an unusual exception in the morning and improving an automated rule in the afternoon. The distinction concerns the work being performed at that moment.

Once the triangle changes direction, the design target changes with it. The question is no longer how to make each existing task faster. It becomes whether a complete, bounded outcome can proceed without a person carrying it through every step.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>The retrofit trap gives people faster tools; the upright pyramid gives agents bounded workflow responsibility.</p></div>

## Decide what belongs at the apex

The human layer should be designed first because it determines the limits of everything below it. Three responsibilities belong there.

People set intent when objectives conflict. They decide consequential exceptions when evidence is incomplete or policy points in different directions. They also change the system by approving new rules, permissions, and measures of success. These responsibilities may be distributed across frontline specialists, operations leaders, control functions, and executives, but their ownership must be visible.

Judgment also needs regular practice. As agents absorb ordinary cases, specialists encounter a narrower and stranger sample of the work. Without deliberate review, they can lose their feel for normal conditions, new colleagues have fewer examples from which to learn, and overrides disappear without improving the workflow.

Arvind KC, Chief People Officer at OpenAI, the AI company behind ChatGPT, offers a small example of making observations visible. In a [public LinkedIn post](https://www.linkedin.com/feed/update/urn:li:activity:7485407006204493825/), he organized ten reflections from his first months at the company. The post is a reflection artifact rather than evidence for the operating design proposed here. Its relevance is the practice: recent observations become named material that other people can inspect and challenge.

[![Screenshot of Arvind KC's LinkedIn post listing ten reflections from his first months at OpenAI](./arvind-kc-linkedin-post.jpg)](https://www.linkedin.com/feed/update/urn:li:activity:7485407006204493825/)

*Arvind KC recorded ten reflections from his first months as OpenAI's Chief People Officer. The source artifact documents that reflection practice; it does not establish an AI-first operating model.*

Learning from live operations needs a more rigorous version of the same habit. A regular review should examine a sample of normal completions, every human override, and every material failure. The team can then distinguish missing data from unclear policy, tool failure, model error, or an authority boundary that was drawn in the wrong place. Stable decisions can become ordinary rules. Context-dependent decisions stay with people. Uncertain behavior becomes a repeatable test before the next release.

This turns the apex into a working capability. People remain close enough to the flow to judge it, and every intervention has a chance to make the system better.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Human judgment must be assigned, exercised, and converted into better boundaries rather than reserved for emergencies.</p></div>

## Build the base around completed outcomes

[Anthropic, the AI company that develops the Claude model family, distinguished workflows from agents in a 2024 engineering guide](https://www.anthropic.com/engineering/building-effective-agents). In its terminology, workflows follow paths defined in code, while agents let a language model direct parts of the process and choose tools dynamically. A business workflow can contain both.

Consider an illustrative supplier-invoice mismatch. An invoice covers two deliveries whose item descriptions do not match the purchase order. The required result is a correctly reconciled payable or a documented exception, not merely an AI-written email.

Deterministic software, ordinary code that applies the same rule to the same recorded input, should keep the official case record and control which stage may follow another. The agent handles variable documents and language. A person decides exceptions that alter a commercial commitment or cross a risk limit.

| Mechanism | Job in the invoice workflow | Boundary |
| --- | --- | --- |
| Rule-based software | Records the stages received, evidence requested, proposed match, approved, paid, or exception; performs arithmetic and enforces limits | Rejects any unapproved move between stages |
| AI agent | Reads permitted documents, compares descriptions, requests missing evidence, and proposes the next allowed action | Cannot change bank details, exceed the value limit, or move a disputed case directly to paid |
| Person | Resolves conflicting evidence, approves exceptional commitments, and decides whether policy should change | Owns the exception and any expansion of agent permission |

This separation gives the model room to interpret without letting it redefine reality. Every attempt should leave enough evidence to reconstruct what happened: the input documents, tools used, proposed action, accepted or rejected stage change, policy version, and final outcome.

Designing from job titles obscures this structure because one job usually contains several unrelated flows. Designing from the verified outcome makes the boundary measurable. It also reveals whether the agent is carrying work or merely helping a person carry it.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>The broad base should be built from complete, testable workflows in which models interpret and ordinary software protects the official record.</p></div>

## Give the base a permission map

A workflow moves only when someone or something may change it. Giving that permission to an agent creates an authority budget: the limited data it may use, actions it may take, value it may commit, volume it may process, and consequences it may create before escalation.

The [EU AI Act, Regulation (EU) 2024/1689](https://eur-lex.europa.eu/eli/reg/2024/1689/oj), is the European Union's 2024 risk-based law for AI systems and places stronger obligations on higher-risk uses. It does not provide a company operating design, but its structure reinforces a useful principle: control effort should rise with consequence.

| Permission dimension | Limit to record | Accountable owner |
| --- | --- | --- |
| Data | Approved sources, fields, purpose, retention, and location or transfer conditions | Business and privacy or legal owners |
| Action | Tools, case-stage changes, and external communications the agent may initiate | Business and technology owners |
| Economic exposure | Per-case and cumulative commitment limits | Finance and business owners |
| Time and volume | Operating window, case population, and rate limits | Operations owner |
| Escalation | Conditions that require human judgment before work continues | Frontline and control owners |
| Revocation | Who may pause the agent, how unfinished cases are reconciled, and where evidence is stored | Operations and CIO |

These owners need to enter before the workflow goes live. Frontline experts and employee representatives should help identify hidden work, role effects, and capability needs while the boundary can still change. Privacy and legal owners should approve data conditions before historical cases are replayed. Procurement should secure model-change notice, data-reuse terms, audit-log export, service capacity, portability, fallback operation, and termination assistance before dependency hardens.

Revocation also has to work in practice. The team should suspend the agent, return to the previous operating mode, identify every partially completed case, and reconcile the official record. A written pause right that has never been exercised is weak evidence of control.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Agent capability becomes governable only when every permission, owner, escalation path, and revocation step is explicit.</p></div>

## Meanwhile in sci-fi

<div class="scifi">
<span class="scifi__label">Meanwhile in sci-fi</span>
<p class="scifi__film">Star Trek: The Next Generation (1987)</p>
<p>The television series, which ran from 1987 to 1994, follows the crew of the starship Enterprise. Its specialists do not ask Captain Picard to approve every local action. They can act because the crew shares a current picture of the ship, understands when one system affects another, and recognizes when a local decision has become a command decision. For an AI-first company, the mapping is precise: agents need limited local authority and a common operating record, while people need enough visibility to spot when an exception changes risk, customer promises, or intent. Local autonomy depends on shared information and practiced escalation, not universal approval.</p>
</div>

## Make the inversion earn its scale

The evidence cited here does not prove the upright pyramid at enterprise scale. Stanford measures adoption. Anthropic explains engineering patterns. The EU AI Act establishes legal rules. Arvind KC's post records reflections, and the Enterprise is fictional. None provides a comparable Nordic production case with a manual baseline, failure record, tested rollback, and complete cost model.

The responsible position is therefore to treat the pyramid as an operating hypothesis. On Monday morning, choose one high-volume but recoverable workflow with a clear accepted outcome. Fix the case population, budget ceiling, decision date, and manual baseline. Name the business, operations, technology, privacy or legal, procurement, and employee-representative owners. Give each the right to stop the trial within its domain.

Before the first live case, replace every bracket in the scorecard with an agreed number:

| Gate | Precommitted pass condition |
| --- | --- |
| Correct completion | Accepted cases with no hidden rework are at least the manual baseline plus [margin] |
| Human intervention load | The share of cases requiring escalation or correction is at most [rate], while total human time and cost stay below [ceilings] |
| Incident and recovery | There are zero incidents at [agreed severity], and the previous operating mode is restored with records reconciled within [time] |
| Full cost per correctly completed case | Model, software, integration, human review, correction, control, and supplier costs divided by accepted cases remain below [amount] and beat the baseline |
| Supplier exit | The team exports required logs and configuration, activates fallback operation, and completes [share] of the rehearsal without the primary supplier |
| Workforce readiness | Required consultation decisions are recorded, affected roles are defined, and training is funded before bounded live use |

Start by replaying historical cases without taking real actions. Then run the agent alongside the existing process and compare its proposed decisions. Bounded live authority comes only after those results pass. During the live trial, perform the pause, rollback, and supplier-exit drills rather than treating them as paperwork. A different team should repeat the result before the permission map expands to another workflow.

The board is not deciding whether agents are impressive. It is deciding whether a named workflow has earned a larger authority budget. If the scorecard fails, permission shrinks and the workflow returns to the last proven state. If it passes independently, the base may grow.

An AI-first company emerges from that accumulation of earned delegations. Its broad base is built from workflows that can carry themselves within known limits. Its apex remains close enough to the work to exercise judgment and improve the system. The pyramid flips one workflow at a time.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Scale the upright pyramid only when a bounded workflow beats its baseline, stays within its authority budget, and survives rollback and independent repetition.</p></div>