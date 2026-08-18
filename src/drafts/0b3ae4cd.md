---
title: "The AI-First Company Starts at the Bottom"
description: "An organizational design that puts governed agents beneath repeatable work and people where judgment, learning, and accountability matter."
tldr: "An AI-first company is built from workflows upward: governed agents carry repeatable execution while people set intent, handle exceptions, develop expertise, and remain accountable. Funding, authority, ownership, and reporting lines should move only after the model proves its outcomes, total cost, control, recovery, and transfer across materially different workflows."
provenance: verified-by-author
anthem: true
permalink: /drafts/0b3ae4cd/
layout: post.njk
date: 2026-08-18
---

An AI-first company should be built from the workflow up. Governed agents can become the execution floor for repeatable work, while people concentrate where intent, interpretation, exceptions, and accountability meet.

Here, an **AI agent** is software that can pursue an assigned outcome by calling approved tools without a person selecting every intermediate step. A **workflow** is the whole path from an incoming need to a business result someone is prepared to accept. An AI assistant inside a human-run workflow may save time, yet the company still depends on people to carry the work across its handoffs.

Adoption numbers can hide that difference. The [2025 AI Index](https://hai.stanford.edu/ai-index/2025-ai-index-report) from the Stanford Institute for Human-Centered Artificial Intelligence, a Stanford University research institute that tracks AI development and use, reported that 78% of organizations said they used AI in 2024. That figure shows how widely AI has spread. It leaves the allocation of execution and authority unmeasured.

<figure class="anthem-stat" aria-labelledby="ai-adoption-caption">
  <div class="anthem-stat__number">78%</div>
  <div class="anthem-stat__text">of organizations reported using AI in 2024</div>
  <figcaption id="ai-adoption-caption">Source: Stanford HAI, <em>2025 AI Index</em>. The measure records reported AI use; operating-model design falls outside its scope.</figcaption>
</figure>

The organizational question is more demanding: which parts of work should run continuously through software, and where must a person judge, intervene, or own the consequence? I think the org chart should be the last artifact to change. First the workflow must show that machine execution, human judgment, and accountable control can work as one system.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>AI-first describes an allocation of work: governed agents carry repeatable execution, while people hold explicit judgment and accountability.</p>
</div>

## Invert the default

A retrofit leaves the broadest part of a workflow human. People receive requests, interpret state, move information between systems, chase approvals, and close cases. Agents sit at the pointed end, helping with a draft, lookup, or recommendation. The local gain can be real, but each tool still passes through the same human coordination layer.

The inverse begins with the accepted outcome and works backward. Repeatable steps move into an agent-run workflow; people define success, change policy, resolve exceptions, and accept consequences that should remain human. The triangle turns because the default location of execution changes.

<figure class="anthem-diagram" aria-labelledby="triangle-caption">
<svg viewBox="0 0 1000 460" role="img" aria-labelledby="triangle-title triangle-desc" style="width:100%;height:auto">
  <title id="triangle-title">The retrofit trap and the AI-first company</title>
  <desc id="triangle-desc">A downward triangle places human-run workflows at the broad top and isolated AI agents at the bottom point. An upward triangle places agent-run workflows at the broad bottom and human judgment at the top point.</desc>
  <text x="250" y="38" text-anchor="middle" font-size="24" font-weight="700">THE RETROFIT TRAP</text>
  <polygon points="60,70 440,70 250,400" fill="#465466"></polygon>
  <text x="250" y="125" text-anchor="middle" fill="#ffffff" font-size="22" font-weight="700">Human-run workflows</text>
  <text x="250" y="160" text-anchor="middle" fill="#ffffff" font-size="17">AI helps inside existing handoffs</text>
  <text x="250" y="335" text-anchor="middle" fill="#ffffff" font-size="18" font-weight="700">AI agents</text>
  <path d="M470 235 H530" stroke="#6b7280" stroke-width="4"></path>
  <path d="M518 222 L535 235 L518 248" fill="none" stroke="#6b7280" stroke-width="4"></path>
  <text x="750" y="38" text-anchor="middle" font-size="24" font-weight="700">THE AI-FIRST COMPANY</text>
  <polygon points="750,70 560,400 940,400" fill="#176b5b"></polygon>
  <text x="750" y="118" text-anchor="middle" fill="#ffffff" font-size="18" font-weight="700">Human judgment</text>
  <text x="750" y="315" text-anchor="middle" fill="#ffffff" font-size="22" font-weight="700">Agent-run workflows</text>
  <text x="750" y="350" text-anchor="middle" fill="#ffffff" font-size="17">Repeatable execution at the base</text>
</svg>
<figcaption id="triangle-caption">The area represents where routine execution lives, not how many people the company employs or how much they matter.</figcaption>
</figure>

The triangle describes an operating model rather than a headcount forecast. Some workflows should stay human-led because ambiguity, trust, or responsibility is central to the work. Even where execution moves, every workflow still needs a named person who owns its accepted outcome and can change its rules.

That ownership leads to the hard part. A job title no longer tells the system what it may do, so authority has to be made explicit at the workflow boundary.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>Invert a workflow only when repeatable execution can sit beneath a clearly named human judgment point and accountable owner.</p>
</div>

## Give agents a bounded field of action

Once software carries work across systems, governance becomes a precise question: how far may this workflow act before it must ask? The workflow's permission should live in a rule-based service outside the model. Prompts express goals in language, while the permission service returns a recorded yes-or-no decision from declared rules.

That service evaluates a complete decision context: the identity on whose behalf the agent acts, the requested action, the target record or system, the current case state, applicable limits, the policy version, and the authorization-service version. If external facts such as account status affect the answer, the values used in the decision are stored too. Replaying that recorded context should reproduce the permission decision. The **authority envelope** is the documented set of actions the workflow may take without fresh human approval.

<figure class="anthem-matrix" aria-labelledby="authority-caption">
<div class="anthem-table-scroll" style="overflow-x:auto">
<table>
<thead>
<tr><th>Boundary</th><th>What the agent may do</th><th>Control required</th><th>Human ownership</th></tr>
</thead>
<tbody>
<tr><td>Read</td><td>Retrieve approved information</td><td>Narrow credentials and data scope</td><td>Data owner</td></tr>
<tr><td>Prepare</td><td>Calculate or draft without changing a live record</td><td>Source trace and validation rules</td><td>Workflow owner</td></tr>
<tr><td>Change</td><td>Update reversible internal state</td><td>External authorization, limits, and an audit record</td><td>Operations owner</td></tr>
<tr><td>Commit</td><td>Create an external, financial, legal, or employment consequence</td><td>Explicit pre-authorization or human approval</td><td>Accountable executive</td></tr>
</tbody>
</table>
</div>
<figcaption id="authority-caption">An illustrative authority envelope. The boundary should reflect the workflow's actual risk, law, and reversibility.</figcaption>
</figure>

European rules make several of those choices unavoidable. The [EU AI Act](https://eur-lex.europa.eu/eli/reg/2024/1689/oj), Regulation (EU) 2024/1689, sets obligations according to how an AI system is used and its level of risk, with stricter duties for high-risk systems. The [General Data Protection Regulation](https://eur-lex.europa.eu/eli/reg/2016/679/oj), or GDPR, is the European Union's 2016 law governing personal-data processing. Their relevance here is concrete: the workflow needs a declared purpose, a known data path, and an accountable owner. It also needs decisions about data residency, meaning where data may be stored or processed, and a supplier exit path that allows the company to move without losing its data or control.

Control must remain reversible. The organization needs to be able to withdraw the workflow's permission to act without further approval, freeze new work, invalidate its credentials, reconstruct affected cases, and restore a manual route. The record should include the requested action, permission decision, model, prompt, policy, authorization service, tool and data versions, tool response, and resulting business state. Recovery becomes credible after it has been exercised under realistic conditions.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>Grant machine authority through external, versioned rules that can be audited, tested, narrowed, and revoked without retraining the model.</p>
</div>

## Rebuild the path to expertise

Strong controls can reduce routine human touches. They can also remove the practice through which people learn to exercise judgment.

Workplace-learning researcher Michael Eraut's 2004 peer-reviewed article, [“Informal learning in the workplace”](https://doi.org/10.1080/158037042000225245), described learning at work as often informal and connected to direct experience, participation, challenging tasks, and learning alongside other people. The mechanism matters here. Ordinary cases expose a learner to recurring patterns, difficult cases stretch judgment, and nearby experts can explain why one detail changes the decision. If agent workflows absorb that progression, the future expert sees fewer chances to practise.

**Cognitive apprenticeship** is a teaching model that makes expert reasoning observable through modelling, coaching, supported practice, reflection, and feedback. A [2009 peer-reviewed study](https://doi.org/10.1007/s10459-008-9136-0) examined the model in undergraduate clinical training. The setting limits what the study can establish about enterprises, while the learning mechanism remains useful: people improve when they can attempt a decision, see expert reasoning, compare the two, and try again with support.

Arvind KC is Chief People Officer at [OpenAI](https://openai.com/about/), which describes itself as an AI research and deployment company. In the public LinkedIn post captured below, he writes, “It has been a few months for me at OpenAI, so I thought I'd share a few reflections,” and presents ten numbered reflections. The artifact contributes evidence of a practice rather than proof of operating performance: a people leader records early organizational observations so they can be examined instead of left as private intuition.

<figure class="anthem-image">
  <img src="./arvind-kc-linkedin-post.jpg" alt="Screenshot of Arvind KC's public LinkedIn post listing ten reflections from his first months at OpenAI" style="max-width:100%;height:auto">
  <figcaption>Arvind KC's ten reflections from his first months at OpenAI. Source: <a href="https://www.linkedin.com/feed/update/urn:li:activity:7485407006204493825/">public LinkedIn post</a>.</figcaption>
</figure>

An AI-first company needs that observation habit, then it needs practice. Workflow owners can maintain an exception library from live cases. Learners can work in **shadow mode**, making a decision that does not affect the live result before comparing it with the agent and an expert. Senior specialists can annotate why a boundary moved, while recovery exercises teach people how the system fails. Busywork can disappear while its useful feedback is rebuilt deliberately.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>When agents take routine cases, replace lost practice deliberately by exposing edge cases, making expert reasoning visible, and testing human judgment before the machine's answer becomes the default.</p>
</div>

## Meanwhile in sci-fi

<div class="scifi">
<span class="scifi__label">Meanwhile in sci-fi</span>
<p class="scifi__film">Star Trek: The Next Generation (1987)</p>
<p>The television series follows the starship Enterprise, where extensive automation supports a clear command structure. Officers do not approve every routine system action; each specialist has a defined remit, sees the ship's shared operational state, and escalates when a decision affects the wider mission.</p>
<p class="scifi__mapping"><strong>The mapping:</strong> agent workflows are the continuously running execution layer, while people occupy explicit judgment stations with a shared view of goals, constraints, and consequences. Local autonomy becomes governable when its boundaries are visible and a named person can take command as conditions leave the designed envelope. The analogy clarifies the allocation; operating evidence still has to justify it.</p>
</div>

## Let evidence redraw the company

A design can be coherent on paper and still fail in operations. The evidence cited here does not establish that this organizational inversion works at Nordic enterprise scale. Stanford's statistic measures adoption, European law defines constraints, and workplace-learning research explains a capability risk. None supplies a comparable production baseline, total cost, incident history, support burden, or resulting change in ownership.

The org chart should therefore lag workflow proof. Before a live trial, set the baseline and thresholds for accepted business outcomes, human effort, all-in cost, policy exceptions, incident count and severity, recovery time, and support demand. **All-in cost** includes model fees, infrastructure, integration, monitoring, human review, correction, incident response, and internal or supplier support. A **full operating cycle** includes the workflow's normal peaks and exception periods, extending beyond its quiet first weeks.

One successful workflow shows local fit. Transfer requires a **materially different workflow**: one with a different combination of data, tools, failure modes, and accountable business owner. The matrix below turns that evidence into organizational consequences instead of letting a promising pilot move its own goalposts.

<figure class="anthem-matrix" aria-labelledby="proof-caption">
<div class="anthem-table-scroll" style="overflow-x:auto">
<table>
<thead>
<tr><th>Evidence state</th><th>Funding</th><th>Authority and ownership</th><th>Roles and reporting</th></tr>
</thead>
<tbody>
<tr><td>Unproven, bounded trial</td><td>Temporary trial budget</td><td>Human owner approves actions in the live workflow</td><td>No structural change</td></tr>
<tr><td>One workflow passes a full cycle</td><td>Recurring workflow budget</td><td>Permanent owner and support path</td><td>Work allocation may change within the team</td></tr>
<tr><td>Transfer across at least two materially different workflows</td><td>Portfolio funding</td><td>Reusable controls with local workflow owners</td><td>Decision rights and roles may move</td></tr>
<tr><td>Repeated proof at material operating volume</td><td>Permanent operating budget</td><td>Board-approved accountability and oversight</td><td>Reporting lines may follow the new ownership</td></tr>
<tr><td>Control breach or poor economics</td><td>Repair within a time limit or retire</td><td>Revoke permission and restore the manual route</td><td>No expansion</td></tr>
</tbody>
</table>
</div>
<figcaption id="proof-caption">A proof-to-organization gate: stronger evidence permits a larger, still reversible organizational commitment.</figcaption>
</figure>

This separates a change in daily work from a change in the company. A team can spend less time on routine execution after one successful workflow, while permanent decision rights need transfer evidence. Reporting lines should move later, once the new accountability has a permanent owner, budget, support path, and learning plan.

A board-defensible rule is clear enough to write down in advance. Allow reporting lines to change only after at least two materially different workflows beat their declared baselines through a full operating cycle, remain inside legal and risk limits, and recover from controlled interruptions. That is when the org chart can begin to reflect the system already running beneath it.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>Fund exploration after a bounded win, move decision rights after transfer proof, and change reporting lines only when repeated operating evidence, permanent ownership, support, and a learning plan all exist.</p>
</div>
