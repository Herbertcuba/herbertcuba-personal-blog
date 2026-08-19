---
title: "The AI-first company has a different shape"
excerpt: "AI adoption can rise while the company underneath stays unchanged. The deeper move is to rebuild work around machine execution, human judgment, and explicit accountability."
tldr: "An AI-first company starts with the commitments it makes, lets governed agents carry the repeatable path, and concentrates people where context and consequences demand judgment. Authority, learning, supplier control, and workforce legitimacy must be designed into that system before temporary experiments become permanent structure."
provenance: verified-by-author
anthem: true
permalink: /drafts/0b3ae4cd/
layout: post.njk
date: 2026-08-20
---

The [2025 AI Index](https://hai.stanford.edu/ai-index/2025-ai-index-report) from the Stanford Institute for Human-Centered Artificial Intelligence, a Stanford University research institute that tracks AI development and use, reported that 78% of surveyed organizations used AI in 2024, up from 55% the year before. That is a remarkable rise in adoption. It says much less about whether the shape of those organizations changed.

A company can add AI to every department while leaving work, authority, and accountability exactly where they were. The more consequential question is which parts of a company commitment software can fulfill repeatedly, and where a person must interpret context and own the result.

An AI agent is software that can interpret a goal, choose among steps, use tools, and act across systems within set limits. A workflow is the ordered path that turns an input, such as a customer request, into a business outcome. I think an AI-first company emerges when agent-run workflows become the normal path for repeatable execution, while people gather around the points where the company changes a promise, accepts risk, or encounters something the system does not understand.

That shift reaches beyond automation. It changes what managers watch, how colleagues learn, where permission lives, and which evidence can justify a lasting organizational decision.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>Widespread AI use is not yet organizational redesign. An AI-first company reallocates repeatable execution to governed agents and reserves human attention for context, commitments, and consequences.</p>
</div>

## Design from commitments inward

Most organizational redesign begins with the boxes on the org chart. AI gives us a reason to begin at the other end: with the promise the company is trying to keep. That promise might be a refund delivered under agreed terms, a supplier paid correctly, or a patient given the right appointment. Roles matter, but the workflow reveals how the promise is actually produced.

Consider a customer refund. An agent can collect the order history, check published policy, verify the payment route, and complete an eligible refund. A person should enter when the case contains conflicting evidence, suspected fraud, a vulnerable customer, or an exception that would change policy. The important boundary is therefore inside the work. It sits between the repeatable path and the decision that changes what the company is willing to promise.

This produces a different geometry from the usual retrofit.

<figure class="anthem-visual" aria-labelledby="work-shape-caption">
<svg viewBox="0 0 920 390" role="img" aria-labelledby="work-shape-title work-shape-desc" style="width:100%;height:auto">
<title id="work-shape-title">The retrofit trap and the AI-first company</title>
<desc id="work-shape-desc">A downward-pointing triangle shows humans running workflows across the wide top and AI agents added at the narrow bottom. An upward-pointing triangle shows agent-run workflows across the wide base and human judgment at the narrow top.</desc>
<text x="220" y="34" text-anchor="middle" font-size="24" font-weight="700" fill="currentColor">Retrofit trap</text>
<polygon points="55,70 385,70 220,315" fill="#f4b183" fill-opacity="0.72" stroke="currentColor" stroke-width="3"/>
<text x="220" y="118" text-anchor="middle" font-size="20" font-weight="700" fill="currentColor">Humans run workflows</text>
<text x="220" y="148" text-anchor="middle" font-size="16" fill="currentColor">AI is added to isolated steps</text>
<line x1="220" y1="286" x2="220" y2="338" stroke="currentColor" stroke-width="2"/>
<text x="220" y="365" text-anchor="middle" font-size="18" font-weight="700" fill="currentColor">AI agents</text>
<text x="700" y="34" text-anchor="middle" font-size="24" font-weight="700" fill="currentColor">AI-first company</text>
<polygon points="700,70 535,315 865,315" fill="#76c7c0" fill-opacity="0.72" stroke="currentColor" stroke-width="3"/>
<line x1="700" y1="70" x2="700" y2="46" stroke="currentColor" stroke-width="2"/>
<text x="700" y="22" text-anchor="middle" font-size="18" font-weight="700" fill="currentColor">Human judgment</text>
<text x="700" y="245" text-anchor="middle" font-size="20" font-weight="700" fill="currentColor">Agent-run workflows</text>
<text x="700" y="274" text-anchor="middle" font-size="16" fill="currentColor">The repeatable path</text>
</svg>
<figcaption id="work-shape-caption">The geometry shows where work begins and where judgment enters. It is an operating design, not a prediction of staffing numbers.</figcaption>
</figure>

In the retrofit trap, people still carry cases through the workflow and AI helps at scattered points. The apparent productivity gain remains tied to the old coordination structure. In the inverted design, agents carry the broad, repeatable path and people intervene where their judgment changes the outcome. The company may still need many people, but it needs them around different work.

This also changes the questions leaders ask. Licence counts and prompt activity give way to the share of cases completed safely, the reasons for escalation, the quality of human decisions, and the time required to recover when the workflow fails. Once the work is visible at that level, organization design can follow reality rather than aspiration.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>Start with the promise and trace the work needed to keep it. Agents can carry the common path, while people enter where an exception changes policy, risk, or the customer commitment.</p>
</div>

## Put the boundary where consequences begin

Machine execution makes permission a design problem. The consequence boundary is the point where an action creates a material commitment: money leaves an account, a customer loses access, personal data moves to a new system, or the company takes a legal position. The closer an agent gets to that boundary, the more explicit its permission and recovery path must become.

The AI model can prepare an action request, but a separate rules service should decide whether that exact action is allowed. The request should identify the agent, action, target, case status, jurisdiction, value, and expiry time. The rules service returns permission, refusal, or a requirement for human approval. The business system acts only on a valid permission and records what happened, which policy version applied, and what state the case reached.

<figure class="anthem-visual" aria-labelledby="consequence-caption">
<table>
<thead>
<tr><th>Action type</th><th>Normal actor</th><th>Control before action</th><th>Proof retained</th></tr>
</thead>
<tbody>
<tr><td>Read and summarize</td><td>Agent</td><td>Approved data access</td><td>Source references and access record</td></tr>
<tr><td>Change an internal record</td><td>Agent within limits</td><td>Case-state and policy check</td><td>Before-and-after state</td></tr>
<tr><td>Create a reversible external commitment</td><td>Agent or person, based on risk</td><td>Time-limited permission and value limit</td><td>Permission, tool response, and outcome</td></tr>
<tr><td>Change rights, policy, or a hard-to-reverse commitment</td><td>Named person</td><td>Human approval and separation of duties</td><td>Decision, rationale, approver, and recovery plan</td></tr>
</tbody>
</table>
<figcaption id="consequence-caption">A practical consequence ladder. The exact placement must reflect the workflow, law, reversibility, and severity of failure.</figcaption>
</figure>

This separation matters when something fails halfway through. If a payment succeeds but the case record does not update, the trace must show the partial effect, stop an unsafe retry, revoke further permission, and route the case to a person. A manual route is part of the operating design because recovery cannot depend on the same service that just failed.

European regulation reinforces the need for this clarity. The [EU AI Act, Regulation (EU) 2024/1689](https://eur-lex.europa.eu/eli/reg/2024/1689/oj), applies obligations according to an AI system's use and risk, with stricter duties for high-risk systems. The [General Data Protection Regulation, or GDPR](https://eur-lex.europa.eu/eli/reg/2016/679/oj), is the European Union's 2016 law governing personal-data processing. Neither law designs the workflow for you, but both make it necessary to know what system acted, on which data, under whose authority, and with what human oversight.

Control also extends into supplier contracts. A buyer needs clear terms for data reuse, audit access, service availability, notice of AI model changes, portability, support, and the right to suspend the service. Without those terms, an internal stop button may do little because the real dependency sits with a vendor. A named assurance owner should test the manual route and supplier exit before the workflow becomes business-critical.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>Agent permission should tighten as actions become more consequential or harder to reverse. External rules, complete records, tested recovery, and enforceable supplier terms turn that principle into operating control.</p>
</div>

## Turn exceptions into expertise

As agents absorb the common path, human work becomes more unusual. That sounds efficient, yet it removes the repeated exposure through which people learn to distinguish a normal case from a dangerous one. If every easy case disappears from view, a new colleague may face only the hardest decisions without having built the pattern recognition those decisions require.

The answer is to make learning an output of the workflow. Each escalation can create an exception record containing the original case, the agent's proposed action, the rule that stopped it, the human decision, and the eventual result. Teams can review a small set of these records, annotate why a choice was sound, and feed recurring patterns into policy, training, and workflow changes. In shadow mode, where an agent proposes an action without carrying it out, less experienced colleagues can compare their judgment with an expert's before they receive live authority.

This changes the role of experienced people. They still handle difficult cases, but they also turn judgment into examples, escalation rules, and feedback that can travel through the system. Expertise becomes less dependent on sitting beside the right person at the right moment.

Arvind KC is the Chief People Officer at [OpenAI](https://openai.com/index/arvind-kc-chief-people-officer/), which describes itself as an AI research and deployment company. In the public LinkedIn post captured below, he writes, “It has been a few months for me at OpenAI, so I thought I'd share a few reflections,” and presents ten numbered reflections. The useful signal here is modest: a senior people leader made early observations explicit before treating them as settled doctrine. The post is a source artifact about reflection inside one organization, not evidence that any operating model performs better.

<figure class="source-artifact" aria-labelledby="arvind-caption">
<a href="https://www.linkedin.com/feed/update/urn:li:activity:7485407006204493825/">
<img src="/images/posts/arvind-kc-linkedin-post.jpg" alt="Screenshot of Arvind KC's LinkedIn post listing ten reflections from his first months at OpenAI" style="width:100%;height:auto">
</a>
<figcaption id="arvind-caption">Source artifact: Arvind KC's public LinkedIn post. Open the image link to read the original post on LinkedIn.</figcaption>
</figure>

The same principle should shape workforce change. Before roles or reporting lines move, leaders should agree how people will be consulted, which skills need rebuilding, who owns exceptions, and how an affected colleague can challenge a decision. For a Nordic company, I would bring employee representatives into that review early. The people inheriting the hardest edge cases should help define the conditions under which the system is trusted.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>Automating routine cases can also remove routine learning. Exception records, shadow practice, expert annotation, and early worker consultation preserve the judgment that the new company will depend on.</p>
</div>

## Make permanence earn its place

An AI-first ambition becomes safer when each trial is designed as a decision instrument. Before work begins, the team should state what promise is being tested, who owns the decision, how current performance will be measured, what the agent may do, and what event will stop the trial. This prevents a lively demonstration from quietly becoming infrastructure.

<figure class="anthem-visual" aria-labelledby="trial-card-caption">
<table>
<thead>
<tr><th>Trial card field</th><th>What must be recorded before approval</th></tr>
</thead>
<tbody>
<tr><td>Promise and owner</td><td>The business outcome, accountable decision owner, assurance owner, and review forum</td></tr>
<tr><td>Baseline</td><td>Current quality, lead time, rework, full cost, incident rate, and customer or employee impact</td></tr>
<tr><td>Exposure</td><td>A complete operating cycle, representative workload, allowed data, value limit, and spend cap</td></tr>
<tr><td>Outcome accounting</td><td>For every 100 cases: completed, escalated, corrected, reversed after an external effect, and unresolved</td></tr>
<tr><td>Recovery</td><td>A tested stop, permission revocation, manual route, supplier suspension, and restoration owner</td></tr>
<tr><td>Legitimacy</td><td>Worker consultation, learning plan, exception ownership, customer remedy, and legal review where needed</td></tr>
<tr><td>Decision date</td><td>Acceptance thresholds, retirement trigger, evidence reviewer, and recorded release or rollback decision</td></tr>
</tbody>
</table>
<figcaption id="trial-card-caption">A compact approval card turns an experiment into evidence that leaders, workers, procurement, and the board can inspect.</figcaption>
</figure>

The amount of proof should rise with consequence, operating volume, legal exposure, and difficulty of reversal. A low-risk internal workflow may earn a narrow production release after one full cycle and a recovery exercise. A workflow that affects employment, regulated data, or customer money needs longer observation, more varied conditions, and independent assurance. A fixed number of successful workflows would offer false comfort because the risk is carried by the decisions inside them.

Evidence should unlock organizational commitments in stages. Stable workflow performance can justify a permanent owner and support budget. Successful transfer to different conditions can justify a shared platform. Changes to roles, reporting lines, or staffing require an additional legitimacy test: consultation has happened, learning is funded, accountability is named, and the company can still stop or exit the system. Each step should leave a board-readable record of who approved it and how it can be reversed.

This is the discipline behind the anthem. Build boldly at the level of work, then become conservative at the level of irreversible commitment. The company earns its new shape by showing that the system can deliver, explain, recover, and teach.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>Trials should begin with a baseline, measurable outcomes, cost and authority limits, a recovery exercise, and a dated decision. Permanent funding and structural change follow only when proof, control, and workforce legitimacy support them.</p>
</div>

## Meanwhile in sci-fi

<div class="scifi">
<span class="scifi__label">Meanwhile in sci-fi</span>
<p class="scifi__film">Star Trek: The Next Generation (1987)</p>
<p>This science-fiction television series follows the starship Enterprise. Its bridge crew does not manually perform every operation of the vessel: the ship's computer handles continuous execution, specialists monitor distinct systems, and the captain takes responsibility when a decision changes the mission. Local expertise works because important context can move across stations before the crew commits to action.</p>
</div>

The mapping to an AI-first company is precise. Agent workflows can carry repeatable operations, specialists must understand enough of the connected system to recognize a dangerous exception, and a named person owns decisions that change rights, risk, or the company's promise. That shared system understanding allows local autonomy without turning every choice into central approval. It is the company shape worth building: broad machine execution underneath, informed human judgment where consequences gather, and a clear route to stop when reality breaks the plan.
