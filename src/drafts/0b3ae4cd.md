---
title: "The AI-first company turns the triangle upside down"
description: "A practical argument for moving repeatable workflow execution into bounded AI systems while keeping judgment, control, and accountability human."
tldr: "An AI-first company lets software with bounded goals and tools carry repeatable work from request to accepted outcome, while people concentrate on judgment and accountability. That inversion is credible only when authority is enforced outside the AI model, economics are measured across the whole workflow, and the company deliberately preserves how people learn."
image: "/images/posts/architecture-ai-first-company.webp"
provenance: verified-by-author
anthem: true
permalink: /drafts/0b3ae4cd/
layout: post.njk
date: 2026-08-18
---

AI adoption has become too easy a label. A company can give every employee a chatbot and leave the way work moves, decisions get made, and accountability is assigned almost untouched.

The deeper shift begins when routine execution changes address. Here, an **AI agent** means software given a goal, a limited set of tools, and permission to choose the next allowed step. A **workflow** is the full route by which an incoming event becomes a business result that an accountable owner is willing to accept.

The [2025 AI Index](https://hai.stanford.edu/ai-index/2025-ai-index-report) from the Stanford Institute for Human-Centered AI, an interdisciplinary AI research institute at Stanford University, reported that 78% of organizations said they used AI in 2024. That is an adoption statistic. It tells us nothing about whether those organizations changed who, or what, carries the work.

I think that distinction defines the AI-first company. Repeatable execution moves into bounded software, while people concentrate on judgment, exceptions, relationships, invention, and responsibility for the result. The org chart then becomes a consequence of the workflow design rather than its starting point.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>AI-first describes where work runs, not how many AI tools a company has. Software carries the repeatable path; people own judgment and the accepted outcome.</p></div>

## Turn the triangle

The common retrofit places an agent inside a process that people still have to carry. A person opens the queue, decides what happens next, moves the case across systems, checks the output, and routes the exception. The agent may accelerate one step, but the human remains the workflow engine.

An AI-first design starts from the opposite allocation. Agents carry the broad base of repeatable work across approved systems. People enter where context is disputed, consequences are material, authority is reserved, or the definition of a good result needs to change.

<figure class="article-visual article-visual--inversion">
<svg viewBox="0 0 960 760" width="100%" role="img" aria-labelledby="triangle-title triangle-desc" xmlns="http://www.w3.org/2000/svg">
  <title id="triangle-title">The retrofit trap and the AI-first company shown as opposing triangles</title>
  <desc id="triangle-desc">In the retrofit trap, humans carry workflows across the wide top while AI agents assist at the narrow bottom. In the AI-first company, agents carry repeatable workflows across the wide bottom while humans add judgment at the narrow top.</desc>
  <rect x="20" y="20" width="920" height="330" rx="24" fill="#f7f4ef" stroke="#c8c1b7" stroke-width="2"/>
  <text x="480" y="68" text-anchor="middle" font-size="30" font-weight="700" fill="#25221f">The retrofit trap</text>
  <polygon points="220,110 740,110 480,310" fill="#d8dde8" stroke="#56647c" stroke-width="3"/>
  <text x="480" y="155" text-anchor="middle" font-size="24" font-weight="700" fill="#252b35">Humans carry workflows</text>
  <text x="480" y="188" text-anchor="middle" font-size="18" fill="#252b35">route · reconcile · approve · hand off</text>
  <text x="480" y="275" text-anchor="middle" font-size="20" font-weight="700" fill="#252b35">AI agents assist</text>

  <rect x="20" y="390" width="920" height="350" rx="24" fill="#eff6f3" stroke="#9bbcaf" stroke-width="2"/>
  <text x="480" y="438" text-anchor="middle" font-size="30" font-weight="700" fill="#19352c">The AI-first company</text>
  <polygon points="480,480 220,700 740,700" fill="#b9ddcf" stroke="#2d6a58" stroke-width="3"/>
  <text x="480" y="527" text-anchor="middle" font-size="22" font-weight="700" fill="#19352c">Humans add judgment</text>
  <text x="480" y="630" text-anchor="middle" font-size="24" font-weight="700" fill="#19352c">AI agents carry workflows</text>
  <text x="480" y="663" text-anchor="middle" font-size="18" fill="#19352c">execute · record · escalate · recover</text>
</svg>
<figcaption>One design makes AI an assistant inside human-carried work. The other gives software the routine path and reserves consequential judgment for people.</figcaption>
</figure>

Turning the triangle does not mean giving software unlimited discretion or treating people as a thin approval layer. It changes the unit of design from a task to an accepted outcome. A team can then organize around ownership of that outcome, the rules that constrain it, and the exceptions that reveal where the rules are incomplete.

This shift may reduce the value of organizational layers devoted mainly to routing information. At the same time, it raises the value of workflow owners, domain experts, risk specialists, and leaders who can understand consequences across several systems. Moving execution downward therefore makes explicit authority more important, not less.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>The retrofit trap leaves people carrying the process while AI speeds up fragments. The inverted company lets agents carry repeatable workflows and places human attention where judgment changes the outcome.</p></div>

## Authority needs a constitution

An agent should never be the final judge of its own authority. The model can propose an action, but a separate control must decide whether the action is allowed. **Deterministic control** means that the same declared rule returns the same permission decision, regardless of how persuasive or confident the model sounds.

The engineering foundations are familiar. A **state machine** records the stages a case may occupy and the transitions permitted between them. A durable workflow engine preserves progress through interruptions, while narrow credentials let a service perform only named actions in named systems. AI can choose among allowed next steps without being allowed to rewrite the boundary itself.

<figure class="article-visual article-visual--state-control">
<svg viewBox="0 0 1040 430" width="100%" role="img" aria-labelledby="state-title state-desc" xmlns="http://www.w3.org/2000/svg">
  <title id="state-title">A controlled state and permission path</title>
  <desc id="state-desc">A proposal passes an authorization check before execution and acceptance. A direct jump from proposed to executed is blocked. Failed execution enters recovery.</desc>
  <defs>
    <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#41546b"/></marker>
    <marker id="red-arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#a23b3b"/></marker>
  </defs>
  <rect x="35" y="105" width="150" height="70" rx="14" fill="#edf1f6" stroke="#41546b" stroke-width="2"/>
  <text x="110" y="148" text-anchor="middle" font-size="21" font-weight="700" fill="#223044">Proposed</text>
  <polygon points="300,90 405,140 300,190 195,140" fill="#fff3cf" stroke="#8e7427" stroke-width="2"/>
  <text x="300" y="133" text-anchor="middle" font-size="17" font-weight="700" fill="#4f421a">Authorization</text>
  <text x="300" y="155" text-anchor="middle" font-size="17" font-weight="700" fill="#4f421a">check</text>
  <rect x="420" y="105" width="150" height="70" rx="14" fill="#e8f3ee" stroke="#2d6a58" stroke-width="2"/>
  <text x="495" y="148" text-anchor="middle" font-size="21" font-weight="700" fill="#19352c">Authorized</text>
  <rect x="635" y="105" width="150" height="70" rx="14" fill="#e8f3ee" stroke="#2d6a58" stroke-width="2"/>
  <text x="710" y="148" text-anchor="middle" font-size="21" font-weight="700" fill="#19352c">Executed</text>
  <rect x="850" y="105" width="150" height="70" rx="14" fill="#d8eadf" stroke="#2d6a58" stroke-width="2"/>
  <text x="925" y="148" text-anchor="middle" font-size="21" font-weight="700" fill="#19352c">Accepted</text>
  <line x1="185" y1="140" x2="195" y2="140" stroke="#41546b" stroke-width="3" marker-end="url(#arrow)"/>
  <line x1="405" y1="140" x2="420" y2="140" stroke="#41546b" stroke-width="3" marker-end="url(#arrow)"/>
  <line x1="570" y1="140" x2="635" y2="140" stroke="#41546b" stroke-width="3" marker-end="url(#arrow)"/>
  <line x1="785" y1="140" x2="850" y2="140" stroke="#41546b" stroke-width="3" marker-end="url(#arrow)"/>
  <path d="M110 95 C260 20, 590 20, 710 95" fill="none" stroke="#a23b3b" stroke-width="3" stroke-dasharray="9 8" marker-end="url(#red-arrow)"/>
  <text x="410" y="38" text-anchor="middle" font-size="18" font-weight="700" fill="#8b2f2f">Blocked: proposed cannot jump directly to executed</text>
  <rect x="635" y="275" width="150" height="70" rx="14" fill="#f7e3e1" stroke="#a23b3b" stroke-width="2"/>
  <text x="710" y="318" text-anchor="middle" font-size="21" font-weight="700" fill="#652929">Failed</text>
  <rect x="850" y="275" width="150" height="70" rx="14" fill="#f4eee0" stroke="#8e7427" stroke-width="2"/>
  <text x="925" y="318" text-anchor="middle" font-size="21" font-weight="700" fill="#4f421a">Recovery</text>
  <line x1="710" y1="175" x2="710" y2="275" stroke="#a23b3b" stroke-width="3" marker-end="url(#red-arrow)"/>
  <line x1="785" y1="310" x2="850" y2="310" stroke="#41546b" stroke-width="3" marker-end="url(#arrow)"/>
</svg>
<figcaption>Language-model output can propose a move. Declared state and permission rules decide whether the move can happen and how the system recovers when it fails.</figcaption>
</figure>

Control also requires a usable history. At minimum, each case should preserve the agent and model version, its governing instructions, the policy and authorization result, every tool call and side effect, the exception raised, any human decision, and the action used to resume or reverse the work. A log that records only the final answer cannot explain what changed in the business system.

For European operators, this technical boundary meets an existing legal one. The [EU AI Act, Regulation (EU) 2024/1689](https://eur-lex.europa.eu/eli/reg/2024/1689/oj), assigns obligations according to an AI system's use and risk, with strict obligations for high-risk systems. The [General Data Protection Regulation, or GDPR](https://eur-lex.europa.eu/eli/reg/2016/679/oj), governs the processing of personal data in the European Union. Neither law draws the company for you, but both make vague ownership and uncontrolled data movement poor foundations.

Before production, the control boundary should state where data may reside, which actions each credential permits, how access is revoked, how records and work can leave a supplier, and which named owner can shut the workflow down. Those decisions belong in the operating model because they determine whether autonomy can be withdrawn when conditions change.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Agent authority must live in enforceable rules outside the model. Allowed states, narrow access, a complete action record, recovery paths, supplier exit, and a named stop owner turn autonomy into a governed operating choice.</p></div>

## A workflow must earn its place

The inverted triangle is a design hypothesis until a production workflow meets evidence fixed in advance. The 78% adoption figure cannot tell a Nordic or European enterprise whether this arrangement will improve an accepted outcome, reduce human effort, survive exceptions, or lower total cost. I do not know whether it will beat your current model.

That uncertainty is manageable if the trial cannot quietly redefine success. The team should record the current baseline, the acceptance rule, the review capacity, all operating costs, recovery tests, and stop conditions before the first live case. The following envelope is illustrative rather than a reported result or industry benchmark; its purpose is to show what a falsifiable decision can look like.

<figure class="article-visual article-visual--trial-envelope">
<table>
  <thead>
    <tr><th>Decision field</th><th>Illustrative threshold for standard customer address changes</th></tr>
  </thead>
  <tbody>
    <tr><td>Scope</td><td>Eight weeks or 1,000 in-scope requests, whichever comes first</td></tr>
    <tr><td>Accepted outcome</td><td>Identity and authorization recorded; every permitted system holds the same address; confirmation sent; no unauthorized write</td></tr>
    <tr><td>Human effort</td><td>At most three human minutes per accepted request across the final 250 cases; full manual rework below 5%</td></tr>
    <tr><td>All-in cost</td><td>No more than 90% of the measured baseline for the same volume, including models, integration, operations, review, incidents, and supplier charges</td></tr>
    <tr><td>Recovery</td><td>All 20 seeded interruption tests can be reconstructed and either resumed safely or reversed</td></tr>
    <tr><td>Stop rule</td><td>Stop on any unauthorized write, undisclosed data transfer, or case that cannot be reconstructed</td></tr>
    <tr><td>Decision forum</td><td>In week nine, the workflow owner, operations, security, risk or legal, finance, and workforce representation choose expand, repair, or stop</td></tr>
  </tbody>
</table>
<figcaption>These are example governance thresholds, not claimed results. A real trial must replace them with values grounded in its own baseline, risk, and economics.</figcaption>
</figure>

A successful trial supports a decision about that workflow. A permanent operating-model change needs evidence that the control approach, support burden, and economics can transfer to materially different work. Otherwise, the company may have built one useful automation and mistaken it for a new organizational architecture.

The expand-or-stop forum also has to assign the unglamorous work that follows a pilot: permanent support, incident ownership, supplier commitments, portfolio funding, and workforce consultation. If those responsibilities remain temporary, the organization has not moved the workflow into its operating core.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Set outcome, effort, cost, recovery, and stop thresholds before live work begins. One good trial can justify one workflow; organizational redesign requires evidence that the control and support model transfers.</p></div>

## People still need a way to become expert

When software absorbs routine cases, it can also remove the practice through which people learn to recognize patterns. In a [2004 peer-reviewed review](https://doi.org/10.1080/158037042000225245), workplace-learning researcher Michael Eraut found that much learning at work was informal, combining direct experience with participation, challenging tasks, and learning alongside other people. Remove those encounters without replacing their teaching function, and the future pool of human judgment may narrow.

One useful response is **cognitive apprenticeship**, a teaching approach that makes expert reasoning observable through modelling, coaching, supported practice, reflection, and feedback. A [2009 peer-reviewed study](https://doi.org/10.1007/s10459-008-9136-0) examined the model in undergraduate clinical training. That setting does not prove an enterprise outcome, but it clarifies the mechanism: learners improve their access to judgment when experts expose how they think, not only the answer they reached.

An AI-first company can build that mechanism into work. Junior staff can review sampled agent decisions, rehearse unusual cases in simulation, shadow exception owners, and rotate through workflow design and incident review. Senior experts then have an explicit duty to explain the reasoning that routine work once revealed indirectly.

[Arvind KC, Chief People Officer at OpenAI](https://openai.com/index/arvind-kc-chief-people-officer/), which describes itself as an AI research and deployment company, published a [public LinkedIn post](https://www.linkedin.com/feed/update/urn:li:activity:7485407006204493825/) containing ten numbered reflections from his first months in the role. The artifact below is not comparative evidence that an AI-first operating model performs better. Its useful signal is narrower: a senior people leader is documenting operating observations while the practices of an AI-intensive organization are still being formed.

<figure class="article-visual article-visual--source-artifact">
<a href="https://www.linkedin.com/feed/update/urn:li:activity:7485407006204493825/"><img src="/images/posts/arvind-kc-linkedin-post.jpg" alt="Screenshot of Arvind KC's public LinkedIn post listing ten numbered reflections from his first months at OpenAI" loading="lazy"></a>
<figcaption>Primary-source artifact: Arvind KC's ten public reflections from his first months as OpenAI's Chief People Officer. The post offers qualitative observations, not a performance benchmark.</figcaption>
</figure>

That distinction matters because the people function cannot arrive after the technical design is finished. It has to help decide which experiences remain human, how expertise will be reproduced, how roles change, and where workforce representation enters the decision. Otherwise, the company may gain execution capacity while weakening the judgment it expects people to supply at the top of the triangle.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Routine work has also been a training ground. If agents take that work, the company must deliberately recreate observation, practice, coaching, and exception handling so human judgment continues to develop.</p></div>

## Meanwhile in sci-fi

Human judgment at the point of the triangle should not mean remote supervision. People need a shared view of connected workflows so they can foresee effects, resolve conflicts, and take responsibility when local choices have wider consequences.

<div class="scifi">
<span class="scifi__label">Meanwhile in sci-fi</span>
<p class="scifi__film">Star Trek: The Next Generation (1987)</p>
<p><em>Star Trek: The Next Generation</em> is a science-fiction television series set aboard the starship Enterprise. Its computer carries routine operations across complex subsystems, while officers with different specialties share an operating picture and retain explicit command. The mapping to an AI-first company is precise: agents can execute local workflow steps only when human owners can see the wider system, settle cross-workflow exceptions, and stop action. The point at the top of the triangle represents accountable judgment over the whole, not status above it.</p>
</div>
