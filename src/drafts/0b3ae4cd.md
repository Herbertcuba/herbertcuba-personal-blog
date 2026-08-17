---
title: "The AI-first company is built upside down"
description: "Why placing agents beneath human workflows preserves the old bottleneck, and what changes when agents become the execution base."
tldr: "An AI-first company is designed around agents carrying bounded, repeatable execution while people own intent, consequential judgment, exceptions, and accountability. Adding agents to existing roles can improve individual tasks, but the larger gain requires leaders to redesign whole workflows, make control points explicit, and move human attention to the decisions where it matters."
image: "/images/posts/architecture-ai-first-company.webp"
image_alt: "Two opposing organizational triangles showing the retrofit trap and an AI-first company"
provenance: "verified-by-author"
permalink: /drafts/0b3ae4cd/
layout: post.njk
date: 2026-08-17
anthem: true
---

Most companies are placing AI agents underneath work that was designed for humans. The agent drafts, searches or updates a system, then hands the result back into the same meetings, approvals and reporting lines. That can save time, but it leaves the company’s main constraint where it was: people still carry the workflow from step to step.

An AI agent is software that can pursue a goal across several steps and use approved tools under defined rules. By an AI-first company, I mean an organization that designs repeatable work around that execution capacity, then places human judgment where context, risk or accountability require it.

The central move is an inversion. Agents form the broad execution base, while people set direction, decide exceptions and remain accountable. Human attention can then move away from routine coordination and toward the judgments that give the work its meaning.

I think leaders who treat this only as tool adoption will miss the organizational decision already in front of them.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Adding agents to human-designed workflows can improve individual steps while preserving human coordination as the bottleneck. AI-first design reverses that arrangement: software carries bounded execution, and people concentrate on intent, judgment and accountability.</p></div>

## AI-first starts with the shape of work

AI-first is often used as a cultural label. Here it has a stricter meaning: the operating model, or the way work, decisions and responsibility fit together, begins with the path an outcome takes through the company.

That path is a workflow, a repeatable sequence that turns an input into an outcome. Role-by-role adoption asks how each employee can get an AI assistant. Workflow-first design asks what outcome is required, which steps software can carry, what evidence must be produced, and where a person must decide. The second question changes the company’s architecture rather than decorating the current one.

Arvind KC, writing publicly after his first months at OpenAI, a company that builds advanced AI systems and products, shared ten reflections in a LinkedIn post. It is a useful first-party signal from one organization working near the edge of current AI capability. It remains one person’s account from one company, so its value is context rather than a universal blueprint.

<figure class="source-artifact" aria-labelledby="arvind-source-caption">
  <div class="source-artifact__number">10</div>
  <p class="source-artifact__text">reflections from Arvind KC’s first months at OpenAI</p>
  <figcaption id="arvind-source-caption"><strong>Source artifact:</strong> <a href="https://www.linkedin.com/feed/update/urn:li:activity:7485407006204493825/" rel="noopener noreferrer">Arvind KC’s public LinkedIn post</a>.</figcaption>
</figure>

The practical implication is broader than any one company. Leaders need to find work that exists mainly because people have always had to relay information, chase status and move tasks between systems. Those inherited handoffs are design assumptions. Agents make them available for redesign.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>AI-first design begins with workflow outcomes and control points. Giving each role an assistant can help, but a company changes shape only when leaders redesign how an outcome moves from intent to execution and decision.</p></div>

## The retrofit trap keeps the bottleneck

Retrofitting an agent into an existing process is reasonable when the scope is narrow. A drafting assistant or search agent can remove friction without requiring the surrounding organization to change. The trap appears when that local pattern becomes the architecture for the whole company.

In the retrofit model, humans still own every stage of the workflow. An agent may produce something at the bottom, but each meaningful handoff returns to a human queue for interpretation, routing or approval. Execution gets faster in places while coordination remains scarce.

<figure class="anthem-visual" aria-labelledby="inversion-title">
<svg viewBox="0 0 1000 500" role="img" xmlns="http://www.w3.org/2000/svg">
  <title id="inversion-title">The retrofit trap compared with an AI-first company</title>
  <desc>On the left, a downward triangle has humans carrying workflows across its broad top and AI agents assisting at its narrow bottom. On the right, an upward triangle has AI agents running bounded workflows across its broad bottom and human judgment at its narrow top.</desc>
  <rect x="20" y="20" width="460" height="440" rx="20" fill="#F7F4EF"/>
  <rect x="520" y="20" width="460" height="440" rx="20" fill="#EEF5F1"/>
  <text x="250" y="65" text-anchor="middle" font-size="26" font-weight="700" fill="#20242B">The retrofit trap</text>
  <polygon points="85,110 415,110 250,410" fill="#D8DDE8" stroke="#596273" stroke-width="3"/>
  <text x="250" y="155" text-anchor="middle" font-size="21" font-weight="700" fill="#20242B">Humans carry workflows</text>
  <text x="250" y="185" text-anchor="middle" font-size="17" fill="#3E4652">handoffs, routing, approvals</text>
  <text x="250" y="365" text-anchor="middle" font-size="19" font-weight="700" fill="#20242B">AI agents assist</text>
  <text x="750" y="65" text-anchor="middle" font-size="26" font-weight="700" fill="#20242B">The AI-first company</text>
  <polygon points="750,105 585,410 915,410" fill="#BFDCCB" stroke="#35634A" stroke-width="3"/>
  <text x="750" y="155" text-anchor="middle" font-size="20" font-weight="700" fill="#163E2A">Human judgment</text>
  <text x="750" y="350" text-anchor="middle" font-size="21" font-weight="700" fill="#163E2A">Agents run bounded workflows</text>
  <text x="750" y="380" text-anchor="middle" font-size="17" fill="#29523D">execution, evidence, escalation</text>
</svg>
<figcaption>The inversion moves repeatable execution into the broad base while keeping consequential judgment and accountability with people.</figcaption>
</figure>

The right-hand triangle does not grant agents unlimited freedom. They work inside explicit permissions, evidence requirements and escalation thresholds. People enter at designed decision points instead of serving as unavoidable couriers between every step.

This changes the manager’s job as well. Allocating tasks remains useful, but the deeper responsibility becomes designing the conditions under which work can proceed: what the system may do, what it must show, when it must stop, and who owns the consequence.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>A retrofit can speed up a task while leaving every handoff in a human queue. The AI-first inversion lets agents carry bounded workflows end to end, with people entering where a decision, exception or accountable sign-off is genuinely required.</p></div>

## Workflows become the unit of design

Once agents carry more execution, the org chart can no longer be the first map of the work. The workflow becomes the unit of design because it shows the outcome, the dependencies and the moments where authority changes hands.

Each important workflow needs a control loop, meaning a repeated cycle of action, checking and correction. A person defines the intended outcome and the limits. Agents execute permitted steps and return evidence of what changed. A person resolves consequential exceptions, and the result is used to improve the next run.

<figure class="anthem-visual" aria-labelledby="workflow-loop-caption">
  <div class="workflow-chain" role="img" aria-label="Intent leads to bounded agent execution, evidence, human judgment and a corrected next run">
    <span><strong>Intent</strong><small>Outcome and limits</small></span>
    <span aria-hidden="true">→</span>
    <span><strong>Agent execution</strong><small>Permitted actions</small></span>
    <span aria-hidden="true">→</span>
    <span><strong>Evidence</strong><small>Changes and checks</small></span>
    <span aria-hidden="true">→</span>
    <span><strong>Human judgment</strong><small>Exceptions and trade-offs</small></span>
    <span aria-hidden="true">↺</span>
  </div>
  <figcaption id="workflow-loop-caption">The workflow improves when every run leaves evidence and every important correction changes the next run.</figcaption>
</figure>

This requires more than connecting an agent to several applications. The agent needs a defined identity, only the access required for its task, and a record of the tools it used and the changes it made. Without those conditions, faster execution creates a larger verification problem for the people at the top of the triangle.

One human owner should remain accountable for the workflow’s outcome. That owner decides which actions can run without approval, which evidence is sufficient, and which conditions trigger escalation. Responsibility becomes clearer because it is attached to the outcome rather than scattered across a chain of relays.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>The workflow replaces the role as the main unit of design. A usable control loop connects human intent, bounded agent action, visible evidence, exception decisions and correction, with one named person accountable for the outcome.</p></div>

## Human judgment moves to the decision points

An AI-first company asks more of human judgment because it concentrates that judgment where the consequences are real. Judgment means choosing when rules conflict, context is incomplete or the cost of a mistake is uneven. These choices cannot be reduced to moving a task to the next column.

| Suitable for bounded agent execution | Requires named human authority |
| --- | --- |
| Carry out repeatable steps within permission | Set the goal and decide trade-offs |
| Gather evidence and flag an exception | Accept, reject or redirect a consequential exception |
| Record actions, checks and outcomes | Own the consequence and change the rules |

The dividing line is consequence and uncertainty, rather than whether a task appears intellectual. An agent may handle a complex sequence when the boundaries and checks are clear. A simple-looking decision may still need a person when it changes a customer’s rights, commits significant money or creates an irreversible effect.

Governance therefore belongs inside the workflow. Permissions limit action, records make action reviewable, escalation routes uncertainty, and a stop control contains harm. Mandatory approval at every step can look safe while merely preserving the old bottleneck. Approvals matter most where a person can still change the outcome.

This model also changes what expertise looks like. Deep knowledge of one function remains valuable, but local experts need enough understanding of the surrounding workflow to anticipate effects elsewhere. Wider local freedom depends on that shared view.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Human work becomes more consequential when routine execution moves to agents. People set goals, resolve uncertain or high-impact exceptions, own outcomes and adjust the rules, while governance is built into permissions, evidence, escalation and stop controls.</p></div>

## Meanwhile in sci-fi

<div class="scifi">
<span class="scifi__label">Meanwhile in sci-fi</span>
<p class="scifi__film">Star Trek: The Next Generation (1987)</p>
<p>The television series, launched in 1987, follows the starship Enterprise and a bridge crew with distinct specialties, explicit authority and a shared view of the ship’s condition. The mapping is organizational: an AI-first company needs the same kind of shared system literacy, meaning enough knowledge of the wider workflow to understand how a local action changes risk elsewhere. Local freedom becomes responsible when people can see dependencies, agents produce usable evidence, and everyone knows when a decision must move to a different level.</p>
</div>

## The inversion is a leadership choice

A change this large should begin with one bounded, end-to-end workflow. Choose an outcome that matters, has clear limits and contains enough repeated coordination to reveal the current bottleneck. Then map every human handoff and separate genuine judgment from work that only transports information or waits for status.

Give agents the minimum permissions needed to carry the repeatable steps. Specify the evidence each action must leave, the conditions that require escalation and the person who can stop the workflow. Measure cycle time, exception frequency, correction work and the quality of the final decision. Those measures show whether the company has removed coordination or merely hidden it inside a new tool.

Some workflows should remain human-led because their purpose is still unclear, their context changes too quickly or their consequences cannot yet be contained. AI-first is a design discipline, not a demand for maximum automation. Its value comes from making the boundary between machine execution and human authority explicit.

Agent count tells us very little about that boundary. The stronger signal is architectural: routine execution can move without constant human relay, while consequential decisions reach a person with context, evidence and authority.

That is how the company turns. The work changes shape first, and the org chart follows.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Leaders can begin with one bounded workflow: separate judgment from relay work, define agent permissions and evidence, assign a human owner, then measure exceptions and corrections. Repeating that discipline changes the company from the workflow outward.</p></div>
