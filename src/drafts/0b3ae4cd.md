---
title: "The AI-first company has a different shape"
description: "Why agent-led workflows require a redesign of execution, judgment, and accountability."
tldr: "An AI-first company begins with bounded workflows that agents can carry, then places people where judgment and accountability are required. Leaders should redesign one workflow at a time, measure the complete result, and change the organization only when the new operating pattern has earned it."
provenance: verified-by-author
anthem: true
permalink: /drafts/0b3ae4cd/
layout: post.njk
date: 2026-08-17
---

The easiest way to adopt an AI agent is to place it beneath an existing process. People continue to move the work between teams, and the agent drafts a document, retrieves information, or updates a system when asked. The tool may be useful, but the company still runs on human handoffs.

An **AI agent** is software that uses an AI model, instructions, and tools to pursue a defined goal across several steps. [OpenAI's Agents SDK](https://openai.github.io/openai-agents-python/), a developer toolkit from OpenAI, an AI research and product company, describes this as a loop that continues until the task reaches an outcome. A **workflow** is the connected sequence of inputs, decisions, actions, and outputs that produces a business result. [AWS Step Functions](https://docs.aws.amazon.com/step-functions/latest/dg/welcome.html), a workflow service from Amazon Web Services, Amazon's cloud-computing division, gives the technical version: units of work pass information into later steps.

My take is that a company becomes AI-first only when it starts designing selected workflows for agent execution and adds human judgment where the work requires it. Those workflows must be bounded, meaning they have a clear start, finish, permission set, and stopping condition. The organizational question then changes from “Where can we add an agent?” to “Where must a person enter this flow, and why?”

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Adding agents to human-led processes improves tasks. Becoming AI-first means redesigning bounded workflows so agents carry repeatable execution while people retain deliberate judgment and accountability.</p></div>

## Invert the starting point

The **retrofit trap** begins when an agent is attached to the narrow end of a workflow that remains organized around people. Humans still trigger the work, transfer context, check intermediate output, and decide what happens next. A faster task can therefore leave the full process almost unchanged, or create more review and coordination around a larger volume of output.

<figure class="article-figure">
<svg viewBox="0 0 1000 500" role="img" aria-labelledby="org-shape-title org-shape-desc" xmlns="http://www.w3.org/2000/svg">
  <title id="org-shape-title">The retrofit trap compared with an AI-first company</title>
  <desc id="org-shape-desc">A downward triangle shows humans carrying most of the workflow with agents added at the narrow tip. An upward triangle shows agents carrying bounded workflows across the base with human judgment at the top.</desc>
  <rect x="30" y="30" width="450" height="430" rx="22" fill="#F7F4EF"/>
  <rect x="520" y="30" width="450" height="430" rx="22" fill="#F1F5F4"/>
  <text x="255" y="78" text-anchor="middle" font-size="27" font-weight="700" fill="#202020">Retrofit trap</text>
  <text x="745" y="78" text-anchor="middle" font-size="27" font-weight="700" fill="#202020">AI-first design</text>
  <polygon points="85,125 425,125 255,420" fill="#E7C9C1" stroke="#7A4038" stroke-width="3"/>
  <line x1="151" y1="240" x2="359" y2="240" stroke="#7A4038" stroke-width="2"/>
  <text x="255" y="171" text-anchor="middle" font-size="22" font-weight="650" fill="#3A2522">Humans carry</text>
  <text x="255" y="199" text-anchor="middle" font-size="22" font-weight="650" fill="#3A2522">the workflow</text>
  <text x="255" y="322" text-anchor="middle" font-size="20" font-weight="650" fill="#3A2522">Agent handles</text>
  <text x="255" y="348" text-anchor="middle" font-size="20" font-weight="650" fill="#3A2522">a narrow task</text>
  <polygon points="575,420 915,420 745,125" fill="#BDD9D2" stroke="#285F55" stroke-width="3"/>
  <line x1="679" y1="240" x2="811" y2="240" stroke="#285F55" stroke-width="2"/>
  <text x="745" y="179" text-anchor="middle" font-size="20" font-weight="650" fill="#183A34">Human</text>
  <text x="745" y="205" text-anchor="middle" font-size="20" font-weight="650" fill="#183A34">judgment</text>
  <text x="745" y="326" text-anchor="middle" font-size="22" font-weight="650" fill="#183A34">Agents carry bounded</text>
  <text x="745" y="354" text-anchor="middle" font-size="22" font-weight="650" fill="#183A34">workflows</text>
</svg>
<figcaption>The triangles show which layer carries repeatable work. Vertical position does not represent human status.</figcaption>
</figure>

The right-hand shape starts from the outcome rather than the existing org chart. Agents carry the repeatable path across the broad base. People enter at the narrower points where purpose is unclear, evidence conflicts, policy requires discretion, or the consequences exceed an agreed limit.

The inversion applies selectively. Some work changes too often to specify well, while other work carries consequences that make human control essential. The useful measure is how much suitable work follows this design; an agent-to-employee ratio tells us little.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>The retrofit trap leaves people carrying the process and gives agents isolated tasks. The inverted design places repeatable workflows in the agent layer and reserves explicit points for human judgment.</p></div>

## Put judgment on the map

A demonstration of the standard case does not make a workflow ready for agent execution. It needs a defined outcome, limits on what the agent may do, and **decision rights**, meaning a clear statement of who or what may make each decision. It also needs a named human owner who remains answerable for the business result.

An **exception** is a case that falls outside the approved rules, evidence threshold, permissions, or risk level. Exceptions are where vague promises of autonomy usually become queues of hidden human work. Designing them in advance makes the real division of labor visible.

| Part of the workflow | Default actor | Boundary that must be explicit |
|---|---|---|
| Purpose and success criteria | Human owner | Which outcome matters, and what must never be traded away |
| Repeatable execution | Agent | Approved data, tools, actions, spending limits, and stopping conditions |
| Exception handling | Human decision-maker | Which signals pause the workflow and who receives the case |
| Outcome acceptance | Rule or human, based on consequence | What quality and policy checks make the result acceptable |

An **accepted outcome** is a result that meets the agreed quality, policy, and risk criteria. Low-consequence results may pass automatically when those criteria are testable. Higher-consequence results may require human approval, but the need for approval should be designed into the flow rather than discovered after deployment.

The technology can run the loop; it cannot settle the organization's values or accountability. The prompt is therefore only one part of the design. The operating agreement around the workflow carries the harder decisions about purpose, authority, evidence, escalation, and ownership.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Agent execution becomes governable when purpose, permissions, exception triggers, acceptance criteria, and human accountability are explicit before the workflow runs.</p></div>

## Redesign the human job

When agents take over repeatable steps, the human role should move beyond constant forwarding and approval. Keeping people in that position would preserve the old coordination cost in a new interface. They need enough authority and context to set direction, resolve genuinely difficult cases, examine patterns of failure, and improve the boundaries of the system.

That shift also changes how expertise is built. If junior employees no longer learn by performing routine work, the company needs a deliberate replacement for that apprenticeship. Reviewing agent decisions, tracing failures, comparing outcomes, and working beside experienced decision-makers can become part of the path, but only if leaders design it as carefully as the automation.

<figure class="source-artifact">
  <a href="https://www.linkedin.com/feed/update/urn:li:activity:7485407006204493825/">
    <img src="./arvind-kc-linkedin-post.jpg" alt="Screenshot of Arvind KC's LinkedIn post listing ten reflections from his first months at OpenAI" loading="lazy" />
  </a>
  <figcaption><a href="https://openai.com/index/arvind-kc-chief-people-officer/">Arvind KC, OpenAI's Chief People Officer</a>, shared ten reflections from his first months at the company in this <a href="https://www.linkedin.com/feed/update/urn:li:activity:7485407006204493825/">public LinkedIn post</a>.</figcaption>
</figure>

KC's post is a primary artifact from one people executive. A single post cannot support a general workforce claim, but its narrower value is still useful: the executive responsible for people inside a company that develops advanced AI systems is documenting the working environment as a subject in its own right. Technical architecture and workforce design are already part of the same conversation.

The practical consequence is bigger than rewriting job descriptions. Leaders must decide how employees gain broad system knowledge, how authority grows with demonstrated judgment, and how accountability remains human even when execution is distributed across agents. Removing routine work without rebuilding those paths would make the company faster today and less capable tomorrow.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Moving routine execution to agents requires a new human role built around judgment, system improvement, and accountability, plus a deliberate way for less-experienced employees to develop those abilities.</p></div>

## Meanwhile in sci-fi

<div class="scifi">
<span class="scifi__label">Meanwhile in sci-fi</span>
<p class="scifi__film">Star Trek: The Next Generation (1987)</p>
<p><em>Star Trek: The Next Generation</em>, the science-fiction television series that ran from 1987 to 1994, follows the crew of the starship Enterprise. The useful organizational idea lies in how its officers work: command is explicit, each officer can act within a specialty, and the crew shares system literacy, meaning enough knowledge of the whole ship to see when a local problem must move upward. In this article's terms, agent workflows are the specialized stations, while human leaders hold mission and exception authority. Shared system literacy keeps local autonomy from damaging the wider operation. The mapping stops at visibility and escalation.</p>
</div>

## Make the org chart earn its place

Shared understanding matters only if the operating evidence supports the new design. A successful agent demonstration says little about the complete workflow, because the surrounding review, waiting, correction, and recovery work may absorb the apparent gain. Measure from the initial trigger to an accepted outcome.

| Decision question | Evidence to collect | Warning sign |
|---|---|---|
| Does the result hold up? | Accepted outcomes and the work needed to correct rejected ones | Output rises while rework rises with it |
| Is the whole path faster? | Total elapsed time, including waits and escalations | One task speeds up while the end-to-end time stays flat |
| Did human effort move? | Review, exception, and recovery time per accepted outcome | Employees become permanent supervisors of routine cases |
| Is control intact? | Records of data used, tools called, approvals given, and stops triggered | A consequential action cannot be reconstructed |

Start with one workflow whose outcome is clear and whose mistakes can be contained. Mark every point that currently requires judgment, give the agent only the permissions needed for the repeatable path, and record what happens across the full run. Compare the result with the current process before changing roles or reporting lines.

If the rules remain unstable, exceptions dominate, or a mistake could cause unacceptable harm, keep the workflow human-led and use agents for narrower support. If accepted outcomes improve, the total path becomes faster, human recovery work stays within its limit, and consequential actions remain traceable, then the organization has evidence for moving execution into the agent layer.

The practical sequence is workflow, evidence, then structure. That order is less dramatic than announcing an AI-first reorganization, but it reveals whether execution has actually moved. Once it has, the upward triangle stops describing an ambition and starts describing the company.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Change the org chart only after one bounded workflow improves end-to-end outcomes, reduces total time without hiding human work, and preserves traceable control. Where those conditions fail, keep people in the execution path.</p></div>
