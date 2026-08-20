---
layout: post.njk
title: "The AI-first company has the opposite shape"
excerpt: "Most organizations are placing agents beneath the company they already have. The deeper opportunity is to redesign work so agents carry repeatable execution while people concentrate judgment, responsibility, and change."
tldr: "An AI-first company starts from outcomes, assigns repeatable workflow execution to agents inside deterministic controls, scales authority with consequence, protects the development of human expertise, and changes its formal structure only after live operations prove quality, reversibility, cost, and accountability."
image: "/images/posts/architecture-ai-first-company.webp"
imageAlt: "Two organizational pyramids showing the retrofit trap and an AI-first company"
provenance: verified-by-author
anthem: true
tags:
  - artificial intelligence
  - operating model
  - organizational design
permalink: /drafts/0b3ae4cd/
date: 2026-08-20
---

AI adoption is moving faster than most company designs. The [2025 AI Index from Stanford University's Institute for Human-Centered AI](https://hai.stanford.edu/ai-index/2025-ai-index-report), an annual report on the state of artificial intelligence, found that 78% of surveyed organizations reported using AI in 2024, up from 55% the year before. The result confirms that tools are spreading while leaving open whether workflows, authority, or accountability have moved with them.

<figure class="anthem-stat" aria-label="Seventy-eight percent of surveyed organizations reported using AI in 2024">
  <div class="anthem-stat__value">78%</div>
  <p class="anthem-stat__statement">of surveyed organizations reported using AI in 2024</p>
  <figcaption>Up from 55% in 2023. Source: <a href="https://hai.stanford.edu/ai-index/2025-ai-index-report">Stanford HAI, 2025 AI Index</a>.</figcaption>
</figure>

That gap matters because an AI agent is more than a chat interface. It is software that can interpret a goal, choose among actions, use tools, and continue with limited supervision. A workflow is the whole route from a trigger to a business outcome, including data, rules, handoffs, exceptions, and proof of what happened. [Anthropic's engineering guide to agents](https://www.anthropic.com/engineering/building-effective-agents), published by the AI company in 2024, makes a useful distinction between model-directed agents and workflows that follow predefined paths.

An AI-first company redesigns that whole route. Repeatable execution moves into governed systems, while people set intent, judge ambiguity, change policy, and remain answerable for consequences. A simple test exposes the difference: if removing the agent tomorrow would leave the workflow and its decision rights essentially unchanged, the company has added a tool rather than changed its operating model.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>AI use is already widespread, but an AI-first operating model begins only when the workflow and its decision rights change.</p></div>

## The work has to change shape

Most organizations place agents at the narrow end of an existing process. People still carry work across functions, reconcile systems, request approvals, and recover failures. The agent drafts a message, summarizes a document, or recommends a next step. That can save time, but the human organization remains the workflow engine.

The AI-first shape reverses the load: agents and ordinary software carry the broad base of repeatable work. Human attention enters where interpretation becomes uncertain, consequences rise, or the rules themselves need to change.

<figure class="work-shape">
  <svg viewBox="0 0 1000 430" role="img" aria-labelledby="work-shape-title work-shape-desc" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;">
    <title id="work-shape-title">The retrofit trap compared with an AI-first company</title>
    <desc id="work-shape-desc">A downward-pointing triangle shows humans carrying workflows above a small layer of AI assistance. An upward-pointing triangle shows agents carrying repeatable workflows at the base and human judgment at the top.</desc>
    <rect x="0" y="0" width="1000" height="430" rx="24" fill="#f8fafc"/>
    <text x="250" y="42" text-anchor="middle" font-family="system-ui, sans-serif" font-size="24" font-weight="700" fill="#0f172a">RETROFIT TRAP</text>
    <polygon points="65,85 435,85 250,350" fill="#dbeafe" stroke="#2563eb" stroke-width="3"/>
    <line x1="130" y1="180" x2="370" y2="180" stroke="#2563eb" stroke-width="2"/>
    <text x="250" y="125" text-anchor="middle" font-family="system-ui, sans-serif" font-size="20" font-weight="650" fill="#0f172a">Humans carry workflows</text>
    <text x="250" y="145" text-anchor="middle" font-family="system-ui, sans-serif" font-size="15" fill="#334155">handoffs, approvals, recovery</text>
    <text x="250" y="270" text-anchor="middle" font-family="system-ui, sans-serif" font-size="19" font-weight="650" fill="#0f172a">AI assists tasks</text>
    <text x="750" y="42" text-anchor="middle" font-family="system-ui, sans-serif" font-size="24" font-weight="700" fill="#0f172a">AI-FIRST COMPANY</text>
    <polygon points="565,350 935,350 750,85" fill="#dcfce7" stroke="#15803d" stroke-width="3"/>
    <line x1="685" y1="180" x2="815" y2="180" stroke="#15803d" stroke-width="2"/>
    <text x="750" y="125" text-anchor="middle" font-family="system-ui, sans-serif" font-size="20" font-weight="650" fill="#0f172a">Human judgment</text>
    <text x="750" y="145" text-anchor="middle" font-family="system-ui, sans-serif" font-size="15" fill="#334155">intent and accountability</text>
    <text x="750" y="285" text-anchor="middle" font-family="system-ui, sans-serif" font-size="19" font-weight="650" fill="#0f172a">Agents carry workflows</text>
    <text x="750" y="307" text-anchor="middle" font-family="system-ui, sans-serif" font-size="15" fill="#334155">repeatable execution and evidence</text>
  </svg>
  <figcaption>The retrofit trap leaves people underneath the process. The AI-first shape puts governed execution underneath human judgment.</figcaption>
</figure>

Consider supplier invoices. Software can receive a document, extract its contents, match it to an order, request missing evidence, and prepare a payment instruction. A bank-account change, disputed delivery, unusual amount, or broken policy condition should change the route and bring in a person with the right authority. Human involvement is triggered by meaning and consequence, rather than placed at every step as a ceremonial checkpoint.

This changes the object of management. Leaders stop designing around queues of tasks and start defining outcomes, allowed states, exception classes, evidence, and stopping rights. The picture makes no promise about headcount, and it grants agents no blanket autonomy. It shows where each kind of work belongs.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>The operating pyramid turns over when governed systems carry routine execution and people enter because a case requires judgment, authority, or a change of rules.</p></div>

## Authority should rise with consequence

Moving execution without redesigning permission creates an impressive demo and a fragile company. Delegated authority means permission to take a specified action within stated limits, for a stated period, with a record that allows the action to be reviewed, stopped, or reversed. “Human in the loop” is too vague unless the company can name which human decides what, and under which condition.

The [EU AI Act, Regulation (EU) 2024/1689](https://eur-lex.europa.eu/eli/reg/2024/1689/oj), is the European Union's 2024 risk-based law for AI systems. Its obligations become stricter as particular uses create greater risk. An internal operating model should follow the same proportional logic without pretending that an internal tier is a legal classification.

<figure class="decision-table">
  <div class="table-scroll" role="region" aria-label="Illustrative authority gradient" tabindex="0">
    <table>
      <caption>An illustrative authority gradient</caption>
      <thead>
        <tr>
          <th scope="col">Operating tier</th>
          <th scope="col">Typical consequence</th>
          <th scope="col">Agent authority</th>
          <th scope="col">Release and renewal</th>
          <th scope="col">Suspend and reverse</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Tier 1: reversible</td>
          <td>Internal routing, classification, or a draft with no external effect</td>
          <td>Execute inside approved rules and budgets</td>
          <td>Workflow owner after measured trial; renew on a fixed review date</td>
          <td>Operations lead can stop the workflow and restore the previous route</td>
        </tr>
        <tr>
          <td>Tier 2: material</td>
          <td>Money, customer commitments, or access to sensitive data</td>
          <td>Act only below explicit thresholds; route exceptions before commitment</td>
          <td>Business owner with risk, security, privacy, and finance input</td>
          <td>Named incident owner can freeze actions, reconcile records, and compensate</td>
        </tr>
        <tr>
          <td>Tier 3: rights or safety</td>
          <td>Employment, essential access, safety, or another potentially high-impact decision</td>
          <td>Gather evidence and propose; a person retains the final decision</td>
          <td>Accountable executive after legal, risk, and employee-representation review where applicable</td>
          <td>Independent control function can halt use and require case review</td>
        </tr>
      </tbody>
    </table>
  </div>
  <figcaption>The boundaries are examples. Each company must set them against the actual use, law, reversibility, and harm.</figcaption>
</figure>

The technical design has to enforce those boundaries. Deterministic orchestration, ordinary software that controls predefined workflow states, should own the official sequence. An agent may interpret an unstructured supplier email and propose the next action, but it should not rewrite the record simply because a model produced a confident answer. A payment path might move from `received` to `matched`, `authorized`, `submitted`, and `settled`; disagreement between a provider receipt and the internal record should send it to `reconciliation_required`. Every approval should be bound to the case, amount, policy version, approver, expiry, and idempotency key, so a stale or mismatched request is rejected.

The engineering foundation predates generative AI. [Temporal](https://docs.temporal.io/workflow-execution), a durable workflow platform, records progress so execution can resume after an interruption. [Open Policy Agent](https://www.openpolicyagent.org/docs/policy-language), an open-source policy engine, evaluates machine-readable permission rules independently of the agent. An idempotency key, documented here by payment provider [Stripe](https://docs.stripe.com/api/idempotent_requests), lets a retried request be recognized so the same payment is not made twice. Safe recovery also needs durable commands, provider receipts, reconciliation, and a compensating action, such as a correcting payment, when the original step cannot simply be undone.

Release evidence should compare quality with the human baseline fixed before the trial, and the bar should be at or above that baseline. High-impact routing recall, the share of dangerous cases correctly escalated, must be paired with the rate of unnecessary escalation so a system cannot look safe by sending everything to a person. Recovery time and fully loaded cost per correctly closed case belong beside outcome quality. Supplier contracts must also preserve audit records, model-change notice, data export and deletion, termination support, and a tested manual route if the service disappears.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Delegated authority should expand only as consequence, enforceable controls, recovery, measured quality, and named ownership allow it.</p></div>

## Meanwhile in sci-fi

<div class="scifi">
  <span class="scifi__label">Meanwhile in sci-fi</span>
  <p class="scifi__film">Star Trek: The Next Generation (1987)</p>
  <p>The television series follows the USS Enterprise, a starship with a clear command hierarchy and specialists who act locally from a shared view of the vessel's condition and mission. An engineering officer can respond to a failure without waiting for the captain to prescribe every step, while decisions that alter the mission or endanger the crew move up the chain.</p>
</div>

The mapping is specific: workflow state is the shared view, policy defines each role's authority, and escalation moves decisions when consequences exceed that authority. Local autonomy works because everyone can see the wider system and because command responsibility remains explicit.

## Judgment needs a supply chain

Controls preserve accountability in a live case. The company also needs people capable of exercising that accountability next year. When agents absorb routine cases, they may remove the repetition through which employees learn normal patterns, notice weak signals, and earn the right to handle exceptions. A junior colleague who sees only unusual failures receives difficulty without the experience that makes difficulty understandable.

Arvind KC, a people executive at OpenAI, the AI research and product company, published a LinkedIn post with ten reflections from his first months inside the organization. Its value here is narrow: it captures a people leader making organizational learning visible while roles and routines are changing, rather than offering evidence that automation weakens apprenticeship.

<figure class="source-artifact">
  <a href="https://www.linkedin.com/feed/update/urn:li:activity:7485407006204493825/">
    <img src="/images/posts/arvind-kc-linkedin-post.jpg" alt="Screenshot of Arvind KC's LinkedIn post listing ten reflections from his first months at OpenAI" loading="lazy">
  </a>
  <figcaption>Arvind KC's public LinkedIn post on ten early reflections from OpenAI. <a href="https://www.linkedin.com/feed/update/urn:li:activity:7485407006204493825/">View the source post.</a></figcaption>
</figure>

An AI-first company should make the development of judgment equally explicit. Keep a teaching sample of ordinary cases, rotate people through agent evaluation and incident review, and require them to explain why a policy or escalation exists. Track the time it takes someone to make sound independent decisions, the quality of human overrides, and whether the team can operate during an agent outage. Those measures reveal whether automation is producing stronger judgment or quietly consuming it.

This is also where employee representation belongs. When a workflow changes job content, performance data, or the route by which people develop expertise, representatives should enter before the trial design is fixed wherever law or collective agreements require it. Their role is part of operating design, rather than a communication step after deployment.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Automation is incomplete if it consumes the routine experience that creates future judgment; learning, evaluation, and employee involvement need their own operating design.</p></div>

## Let evidence redraw the company

This article offers no comparable Nordic production case that proves the complete organizational shape. The responsible response is to treat it as a design to test rather than a benchmark to copy. Formal reporting lines should move only after several workflows show that delegated execution works across normal operations, incidents, renewal, and supplier exit.

The first test can still be small. Reserve one accountable business owner, one workflow lead, one engineer, and one operations expert for an eight-to-ten-week cycle, with part-time participation from risk, security, privacy, procurement, finance, and people or employee representatives as the use requires. Set one capped budget that includes integration, model use, control work, human review, and recovery testing. Hidden review time is still cost.

<figure class="operating-cycle">
  <div class="table-scroll" role="region" aria-label="Bounded first operating cycle" tabindex="0">
    <table>
      <caption>A bounded first operating cycle</caption>
      <thead>
        <tr>
          <th scope="col">Window</th>
          <th scope="col">Work</th>
          <th scope="col">Evidence produced</th>
          <th scope="col">Decision</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Days 1–5</td>
          <td>Choose one workflow and map its states, exceptions, data, owners, supplier dependencies, and risk tier</td>
          <td>Human baseline, cost boundary, release bars, stopping rights, and consultation needs</td>
          <td>Approve or reject the trial design</td>
        </tr>
        <tr>
          <td>Weeks 2–3</td>
          <td>Run in shadow mode, where the agent proposes actions without creating external effects</td>
          <td>Quality by case type, missed high-impact cases, unnecessary escalations, and expected review load</td>
          <td>Revise, stop, or release a narrow scope</td>
        </tr>
        <tr>
          <td>Weeks 4–8</td>
          <td>Operate a bounded live scope with daily review and an incident log</td>
          <td>Correctly closed cases, full cost, recovery time, receipts, reversals, and learning measures</td>
          <td>Continue, suspend, or narrow authority</td>
        </tr>
        <tr>
          <td>Weeks 9–10</td>
          <td>Rehearse supplier exit and review the record with the decision forum</td>
          <td>Manual continuity, data export and deletion, unresolved incidents, and owner sign-off</td>
          <td>Renew, expand, hold, or revoke</td>
        </tr>
      </tbody>
    </table>
  </div>
  <figcaption>The dates are a planning proposal, not an industry benchmark. A higher-risk use may need a longer and stricter path.</figcaption>
</figure>

One successful workflow is not enough to reorganize a company. Look for a portfolio spanning more than one function, with at least one genuine renewal or revocation decision, before changing management layers or role families. The operating record should show who can release, suspend, reverse, and renew authority, along with the quality, incidents, full cost, supplier exposure, and effect on human expertise.

The AI-first company appears when repeatable execution can move into governed systems without sending responsibility away with it. Agents can carry more of the route, but people still define the destination, understand the system, and answer for the consequences. That is the shape an org chart should eventually reflect.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Start with one bounded workflow, make cost and failure visible, and let a portfolio of renewals and revocations earn any permanent change to the organization.</p></div>
