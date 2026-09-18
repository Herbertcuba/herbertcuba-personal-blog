---
layout: post.njk
title: 'The Capability Ledger: How Leaders Should Track What AI Systems Can Actually
  Do'
excerpt: AI capability is more than a model attribute. It is the changing combination
  of tools, permissions, data, reliability, and operating conditions.
tldr: Use a living capability ledger to record what each AI system is authorized and
  proven to do, under which conditions, with what evidence, owner, expiry, and rollback
  path.
date: '2026-09-18'
featuredImage: /images/posts/the-capability-ledger-how-leaders-should-track-what-ai-systems-can-actually-do.webp
---

An AI system rarely stays the same after entering production. A new tool is connected, a permission expands, a data source changes, a model is updated, or a policy is revised. The system may keep its name while its capability changes.

Organizations often describe capability as a stable model property: this model can summarize, classify, reason, search, or use tools. But a model without the right data, permissions, and operating conditions cannot perform the same work as a connected agent with production access.

I think technology leaders need a capability ledger: a living record of what each AI system is authorized and proven to do. It separates theoretical possibility from dependable production capability and records the evidence, owner, review date, and rollback path behind each permission.

## Record the operating conditions

“Can process support requests” is too broad to govern. A useful entry describes the bounded conditions under which the system may operate.

Record the task, environment, required inputs, available tools, permissions, performance thresholds, and known failure modes. Specify whether the system may read, write, send, delete, approve, or only recommend.

These fields make scope concrete. An agent may draft an internal response from approved records while having no authority to send external communications. A classifier may handle routine cases while requiring review when records conflict or a requested action changes customer status.

## Separate possible from proven

Model documentation can explain what a system is designed to support. It does not prove that the system is dependable in a particular workflow.

Demonstrated capability requires representative evaluations and production telemetry. Test incomplete inputs, unusual language, conflicting records, tool failures, permission boundaries, and cases requiring escalation. Ordinary examples say little about the edges where errors are costly.

For each permission, record the evaluation slice, system version, operating conditions, outcome measures, acceptance threshold, observed failure modes, unresolved questions, and accountable owner.

This creates three categories:

- **Advertised capability:** what may be possible.
- **Demonstrated capability:** what has been tested under stated conditions.
- **Authorized capability:** what the organization has decided the system may do.

They should not be collapsed. A system can be technically capable without being authorized, or authorized narrowly without evidence for broader access. It can also become unreliable after its data, tools, or policy change.

<aside class="scifi">
<h3>Meanwhile in sci-fi</h3>
<p>In <em>Minority Report</em>, predictions are treated as sufficient grounds for action before the event occurs. The useful tension is between apparent capability and granted authority. A capability ledger records what was demonstrated, under which conditions, and what decision the evidence supports.</p>
</aside>

## Make the ledger operational

A ledger stored in a repository and never consulted will not govern anything. Connect it to access review, deployment changes, workflow routing, and monitoring.

Each entry needs an owner accountable for scope, evidence quality, review date, and the response when conditions change. Add expiry or review triggers after model, tool, data-source, permission, policy, or material workflow changes.

Staleness must have a consequence. The system may move to recommendation-only mode, lose a tool permission, require human approval, or stop until re-evaluated. Record rollback conditions too: a failure threshold, data-quality warning, monitoring gap, new incident class, or ownership change may require access to be reduced.

## Review the portfolio

Capability emerges from combinations. A model may have narrow permissions while a tool grants access to a sensitive system. An agent may appear safe in one workflow but become more consequential when another agent can call it.

Review which systems share sensitive data, which tools create irreversible changes, which capabilities depend on expired evidence, which permissions lack owners, and where agents can trigger one another without a clear boundary.

The answers reveal capability debt: the gap between what systems can do and what the organization has documented, tested, and assigned.

Start with the highest-consequence systems. Record scope, evidence, permissions, owner, expiry, failure modes, and rollback conditions. Trust should grow with evidence. Access should follow.
