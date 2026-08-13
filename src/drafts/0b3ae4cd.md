---
title: "How AI changes the shape of a company"
date: 2026-07-24
excerpt: "AI agents can absorb repeatable execution and routine coordination, but a thinner hierarchy is justified only when the workflow is measurable, bounded, reversible, and owned. Change the work first, then let the evidence decide what happens to the org chart."
featuredImage: "/images/posts/architecture-ai-first-company.webp"
layout: post.njk
tags: ["ai", "organization", "leadership", "strategy", "agents"]
tldr: "An AI-first company redesigns workflows around AI agents, software that can take several actions and use approved tools within defined limits, while people own judgment, exceptions, and consequences. The coordination displacement test asks whether owner hours, unresolved exceptions, serious misses, escalation time, and full cost improve together. If they do not, the work has merely moved into review queues and overloaded owners, and a thinner hierarchy is not justified."
permalink: /drafts/0b3ae4cd/
provenance: verified-by-author
anthem: true
---

An AI-first company earns a thinner hierarchy only when coordination truly disappears. I call the evidence required the *coordination displacement test*: prove that routine coordination has been removed rather than moved into review queues, exception backlogs, or an owner's calendar. If agents absorb routine work while review load, unresolved exceptions, owner hours, or cross-domain escalation time rise, the company has not become simpler. Cross-domain escalation time means the elapsed time between detecting an exception that affects more than one business area and placing it with people authorized to resolve it.

Here is the bet that follows from that test. My prediction is that premature flattening will show up before any headline failure: owner hours rise, the oldest exceptions keep aging, and cross-domain escalations take longer, even while the top-line productivity chart still looks healthy. For the board, the decision rule is short: do not change the org chart until the workflow beats the old process on quality, serious exceptions, owner load, escalation time, and full cost, while remaining safe to reverse. One consequence reaches beyond the workflow. When routine coordination stops being the route to status and pay, “flat” becomes a polite word for fewer opportunities above you, so the career system has to change together with the org chart.

[Arvind KC joined OpenAI as Chief People Officer in February 2026](https://openai.com/index/arvind-kc-chief-people-officer/). OpenAI is an [AI research and product company](https://openai.com/index/introducing-chatgpt-agent/) developing systems that can write, reason, and use software tools across many kinds of work, so its people leader has a close view of how those systems affect roles and decisions. A few months after joining, Arvind published [ten reflections on LinkedIn](https://www.linkedin.com/feed/update/urn:li:activity:7485407006204493825/). I read them twice, first as observations from a fast-moving company and then as a blueprint for workflows, roles, and decision rights. Decision rights are the rules that specify who may decide what.

Benjamin Simkin is the author of the independently published May 2026 book [*The AI First Company*](https://www.amazon.com/AI-First-Company-Engineering-Business/dp/B0H45WZRX5), a field manual for business owners redesigning companies around AI. The publisher's description says Simkin spent two years finding a way out of what he calls the Retrofit Trap: preserving an old human workflow while adding AI around its edges. That may speed up individual steps, but it leaves the same handoffs, queues, and authority structure in place.

Neither account proves that a large enterprise has completed this transition. Together they offer a structural hypothesis that leaders can test. An AI-first company begins with a different production model: it designs the sequence of work around AI agents, software that can pursue a goal through several actions, use approved tools, and return a result or an exception under human oversight. This is agentic production, where agents complete and coordinate defined work while people retain judgment where the consequences matter.

The evidence has four levels. Arvind's post and Simkin's book are source observations; the claim that routine-routing layers can shrink is my inference from them. The support workflow later in this article is an illustrative operating design, not a reported deployment. Proof would require comparisons of the same workflows before and after redesign over time, including quality, serious exceptions, owner load, escalation time, and full cost. If those measures fail to improve together, the structural hypothesis fails its own test.

Two of Arvind's reflections carry the structural argument. His seventh says, *“Every role is a technical role.”* His third says OpenAI is *“designed for bottom-up innovation”* and that *“things will seem chaotic”* because the organization promotes individual empowerment. Technical reasoning means understanding what the systems inside your work can and cannot do. Bottom-up innovation means people close to the work can improve it and make decisions within clear limits, without sending every choice through senior leaders.

My inference goes one step further. When agents absorb reliable execution and routine coordination, some layers built mainly to route work can shrink. The company does not become leaderless. Coaching, accountability, resource choices, conflict, and trade-offs across the business remain human responsibilities, and they become more important when fewer approvals stand between a local decision and its consequences.

The sequence matters. Establish how the current workflow performs, redesign the work, inspect what the system can carry safely, and only then decide whether the organization should change around it.

The other concepts in this article serve that test rather than compete with it. The Retrofit Trap describes the baseline problem, domain-mapped ownership (one coherent area of work tied to one named human owner) assigns the human accountability needed to change it, and agent management (the skill of directing and evaluating agents within limits) describes the capability people need once execution moves to agents. None of them justifies a new org chart without measured evidence.

<figure class="fig-band article-diagram" data-diagram-id="workflow-sequence">
<figcaption class="fig-cap">Fig. — sequence before structure</figcaption>
<svg width="100%" height="auto" viewBox="0 0 360 584" role="img" aria-labelledby="ad-workflow-sequence-title ad-workflow-sequence-desc" xmlns="http://www.w3.org/2000/svg">
<title id="ad-workflow-sequence-title">Decide on organization after evidence about the workflow</title>
<desc id="ad-workflow-sequence-desc">A four-stage vertical sequence: establish current workflow performance, redesign the work, inspect what the system can carry safely, then decide whether the organization should change around it.</desc>
<defs><marker id="ad-workflow-sequence-arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 Z" fill="#00E653"></path></marker></defs>
<g class="article-diagram__decoration"><rect x="0" y="0" width="360" height="584" fill="#000000"></rect><rect x="8" y="16" width="4" height="552" fill="#00E653"></rect></g>
<g class="article-diagram__claim" data-claim-id="claim-workflow-sequence"><rect x="28" y="16" width="312" height="104" fill="#0A1A0F" stroke="#00E653" stroke-width="2"></rect><text x="48" y="58" fill="#DCE7DE" font-family="JetBrains Mono, monospace" font-size="18" font-weight="700">1 / establish current</text><text x="48" y="82" fill="#DCE7DE" font-family="JetBrains Mono, monospace" font-size="18" font-weight="700">workflow performance</text><line x1="184" y1="120" x2="184" y2="151" stroke="#00E653" stroke-width="3" marker-end="url(#ad-workflow-sequence-arrow)"></line><rect x="28" y="156" width="312" height="104" fill="#0A1A0F" stroke="#00E653" stroke-width="2"></rect><text x="48" y="218" fill="#DCE7DE" font-family="JetBrains Mono, monospace" font-size="18" font-weight="700">2 / redesign the work</text><line x1="184" y1="260" x2="184" y2="291" stroke="#00E653" stroke-width="3" marker-end="url(#ad-workflow-sequence-arrow)"></line><rect x="28" y="296" width="312" height="104" fill="#0A1A0F" stroke="#00E653" stroke-width="2"></rect><text x="48" y="338" fill="#DCE7DE" font-family="JetBrains Mono, monospace" font-size="18" font-weight="700">3 / inspect safe</text><text x="48" y="362" fill="#DCE7DE" font-family="JetBrains Mono, monospace" font-size="18" font-weight="700">system capacity</text><line x1="184" y1="400" x2="184" y2="431" stroke="#00E653" stroke-width="3" marker-end="url(#ad-workflow-sequence-arrow)"></line><rect x="28" y="436" width="312" height="132" fill="#00E653"></rect><text x="48" y="490" fill="#000000" font-family="JetBrains Mono, monospace" font-size="18" font-weight="700">4 / decide whether</text><text x="48" y="514" fill="#000000" font-family="JetBrains Mono, monospace" font-size="18" font-weight="700">organization changes</text></g>
</svg>
</figure>

<div class="fig-band">
<p class="fig-cap">source / ten reflections from inside OpenAI</p>
<div class="versus">
  <div class="versus__side versus__side--a">
    <a href="https://www.linkedin.com/feed/update/urn:li:activity:7485407006204493825/" aria-label="Open Arvind KC's LinkedIn post">
      <img src="/images/posts/arvind-kc-linkedin-post.jpg" alt="Screenshot of Arvind KC's LinkedIn post listing ten reflections from his first months at OpenAI" width="458" height="800" loading="lazy" style="display:block;width:100%;max-width:458px;height:auto;margin:0 auto;" />
    </a>
    <p><a href="https://www.linkedin.com/feed/update/urn:li:activity:7485407006204493825/" rel="external">Open the original public post on LinkedIn</a></p>
  </div>
  <div class="versus__vs">→</div>
  <div class="versus__side versus__side--b">
    <span class="versus__tag">What carries the architecture</span>
    <span class="versus__name">Ten observations, two structural claims</span>
    <ul class="versus__list">
      <li><strong>7</strong>: every role is a technical role</li>
      <li><strong>3</strong>: innovation moves from the bottom up</li>
      <li><strong>8</strong>: every role should wield agents to amplify the person or team</li>
      <li><strong>1 question</strong>: when routine routing disappears, who owns the outcome?</li>
    </ul>
  </div>
</div>
</div>

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Arvind KC and Benjamin Simkin describe the same structural shift from different vantage points. An AI-first company spreads technical judgment across the business and may reduce layers devoted mainly to routine routing, but it passes the coordination displacement test only when review queues, unresolved exceptions, and owner load fall rather than move elsewhere.</p></div>

## Every role becomes a technical role

“Every role is a technical role” can sound like a demand for universal coding skills. The practical demand is broader. Everyone should understand what the systems supporting their work do well, where they fail, and how those limits affect the decisions they own. Coding remains specialist work, while technical judgment becomes a shared language.

A sales lead should know which parts of lead qualification an AI system handles reliably and which cases need review. An operations lead should understand the error rate in automated ticket classification before allowing a customer request to bypass a person. Finance and marketing carry the same responsibility within their decisions because they need enough system knowledge to judge investment quality and AI-generated claims.

In my work advising organizations on agentic production, I see teams stall when technical reasoning remains inside a separate department and everyone else submits requests. The problem then appears in specific workflows. A marketing team may accept an unsupported campaign claim because nobody owns the output standard. An operations team may automate a weak labeling scheme and send customer tickets to the wrong queue faster.

Conventional workflow software deserves a strong defense here. Deterministic automation follows rules written in advance, such as routing every invoice above an agreed amount to a reviewer. When the cases and conditions are stable, a rules engine is easier to test and usually easier to trust than an AI agent. A tool-using agent earns its place when requests arrive in varied language, context must be gathered from several approved sources, and the next permitted action cannot be captured sensibly in a fixed decision tree.

Established software can enforce part of that boundary. A durable workflow engine records the state of a process so it can resume reliably after a failure, while typed validation checks whether data matches a declared structure before the next step. These controls can prevent some illegal transitions and malformed inputs, but they cannot assign human decision rights or judge whether the business outcome is acceptable. For a board, the boundary is simple: stable cases stay with conventional automation; an agent is justified only when variable context matters and its choices can be bounded, observed, and reversed.

A skeptical engineer could describe the design in this article as a workflow engine with a language-model step, and for stable work that description is a compliment. Existing durable-execution and validation tools already carry everything that can be fixed in advance. An agent adds only the part fixed rules cannot express: reading varied language, gathering context from several approved sources, and choosing a bounded next action when the decision tree would be too large to maintain. Claiming more than that is how pilots oversell; claiming less is how teams rebuild what they already own.

That flexibility adds a reliability burden. A model-driven choice can vary even when two cases look similar, so the owner needs reviewed samples, named error categories, a protected record of relevant tool actions, and a route for uncertain cases. A capable-sounding response proves little; the team has to detect a wrong choice before it becomes an expensive one.

The amplifier metaphor is useful because AI produces more of whatever the workflow gives it, faster. Clear instructions and sound review criteria can increase useful output. Confused ownership can repeat the same mistake across a large batch before a dashboard reveals the damage. I think shared technical literacy is the first structural requirement of an AI-first company because local autonomy becomes reckless without it.

<div class="fig-band">
<p class="fig-cap">fig. 01 / technical judgment at each decision level</p>
<table class="matrix">
  <thead>
    <tr><th>Role</th><th>AI-supported decision</th><th>Human review trigger</th></tr>
  </thead>
  <tbody>
    <tr><th>Sales</th><td class="matrix__col1">Qualify and route a lead</td><td>Novel account, weak evidence, or a high-value exception</td></tr>
    <tr><th>Operations</th><td class="matrix__col1">Classify a support request</td><td>Security, legal, safety, or uncertain category</td></tr>
    <tr><th>Finance</th><td class="matrix__col1">Reconcile known fields</td><td>Unmatched records, policy conflict, or unusual value</td></tr>
    <tr><th>Marketing</th><td class="matrix__col1">Draft from approved sources</td><td>Unsupported claim, missing source, or brand risk</td></tr>
  </tbody>
</table>
</div>

Before a decision moves closer to the machine, its human owner should be able to explain the system's likely failure modes and the evidence that would reveal them. If they cannot, the work is not ready.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>A technical role is one whose owner can judge the AI system within the scope of their decisions. Rules, durable workflows, and typed validation should carry stable work and enforce known boundaries; agents take on variable cases only when people can inspect their actions, measure their errors, and catch exceptions before automation multiplies them.</p></div>

## The production pyramid flips

Hierarchies serve several purposes, and treating all of them as routing produces bad organizational design. Managers allocate resources and coach people. They also resolve conflict, maintain accountability, and make trade-offs across areas of the business. A separate category is repeatable coordination: collecting status, assigning routine work, translating updates, routing approvals, and surfacing exceptions. AI agents can absorb parts of that category once the work is explicit and the result can be tested.

Applied to ownership, Simkin's clean-slate question changes the job. Instead of approving every movement inside an inherited process, the owner designs the system, chooses its limits, and concentrates on decisions with consequences across the business. Arvind's account of bottom-up innovation supports individual empowerment close to the work. My governance proposal adds the boundary: senior leaders retain authority over trade-offs that no local workflow can settle.

Consider an enterprise customer-support workflow. An agent may classify an inbound request, retrieve approved account context, prepare a summary, and route the case to the right specialist. It may not close the account, issue a refund, change a contract, or decide whether an event is a security incident. If a message says, “Your system exposed our employee records,” the agent must reject ordinary routing and send the untouched case to the security queue for immediate human review.

That workflow needs a contract, not just a prompt. The team should list every permitted tool and data source, record each attempted action, and define error categories such as wrong destination, unsupported summary, restricted-data access, missed escalation, and tool failure. Quality can then be measured on a reviewed sample, while the share of recommendations changed by people reveals the override rate. The time between an agent flag and a human response reveals whether the escalation path works under real conditions. Because a ticket may contain personal data, the trace should contain only what investigation requires, be visible only to approved roles, and expire under a stated retention policy.

A useful starting taxonomy separates routine quality faults from severe authority failures. A wrong destination belongs to support operations; an unsupported summary belongs to the domain owner and whoever owns source quality. A missed security escalation is severe: security leads the response and the domain owner stops release. Every production miss or credible near miss should become a versioned test case, so the adversarial set grows from real failure rather than staying frozen at launch.

At minimum, each case record should carry its current state, accountable owner, approved tools and data, escalation target, retention boundary, and any rejected transition. In the example above, a move from *security signal* to *ordinary support* is illegal. The workflow engine blocks and records that transition; a qualified person determines whether the event is a security incident, and the accountable owner decides whether the workflow is fit for release. The workflow engine, rather than the agent, owns these deterministic state transitions. The agent proposes bounded actions inside that state model.

Customer tickets often contain personal data. [Article 5 of the General Data Protection Regulation](https://eur-lex.europa.eu/eli/reg/2016/679/oj/eng#art_5), the European Union's 2016 data-protection law, requires personal data to be collected for specified purposes and limited to what is necessary. In practical terms, a named data owner must approve which customer fields the agent can retrieve and why. Giving it the whole customer record because access is convenient would turn an operating shortcut into a governance failure.

*Domain-mapped ownership* is the useful frame here: one coherent area of work, one named human owner, and one explicit boundary beyond which the agent cannot decide. A product owner may prioritize features, while a platform team keeps shared technical services reliable. The domain owner carries a different obligation: the end-to-end outcome of one operating workflow, including its data access, exception rules, evidence, and effects on people.

At enterprise scale, that domain may cross business units and vendors. The owner therefore needs authority to bring support, engineering, security, privacy, procurement, and workforce concerns into one release decision. A name on a slide is not ownership if the person cannot obtain the logs, change the vendor contract, fund the manual queue, or stop the workflow.

Imagine a 5,000-person company running customer support across three business units through an external AI vendor. The senior sponsor funds the manual queue. Procurement and security can pause a vendor change that alters tools, data access, or model behavior, while a complaint involving exposed employee data goes to a named incident lead, privacy lead, and support owner instead of bouncing among local queues. If those owners disagree about speed, customer commitments, or acceptable residual risk, meaning the risk left after controls, the senior sponsor resolves the business trade-off after the control owners have enforced their boundaries. Scale changes the number of participants, but not the need for named authority.

A central AI control function should keep the minimum rules shared across domains: identity and access, trace protection, release gates, severe-event definitions, and vendor-change controls. Domain owners still own workflow outcomes, while security, privacy, procurement, and workforce leaders retain authority within their boundaries. To scale without pulling ordinary decisions back to the center, the central function publishes versioned controls, reusable tests, and a common evidence format rather than approving every workflow run; a domain owner may release within that floor, and central specialists step in when a domain seeks an exception, a shared control changes, or a severe event crosses domains.

With an external vendor, the vendor-change control belongs in the procurement contract: any change to the model, tools, data access, or hosting region requires notice and renewed approval before it reaches production.

The senior sponsor should receive one versioned release pack that fits on one page and carries the same mandatory fields at any scale. One group of fields defines the work itself: the workflow boundary and forbidden actions, the accountable owner and required approvers, and the allowed tools, data, and state transitions. The other group defines the decision: baseline and pass measures, funded review and exception capacity, the cost ceiling, and an explicit recommendation to expand, hold, or stop. That makes the decision forwardable without hiding the operating detail in several committee papers.

The strongest counterargument is that agents may create more coordination rather than less. Review queues can grow, vendor failures can require several teams to respond, and one local exception can cross security, legal, and customer boundaries. A thinner organization is earned only when the coordination displacement test shows that measured review load, the unresolved-exception queue, cross-domain escalation time, and vendor oversight all fit within funded capacity. If that work merely moves from managers into hidden review and exception handling, the hierarchy has not become simpler.

That is where premature flattening becomes visible: the measures expose the hidden coordination layer while the top-line productivity chart may still look healthy.

This changes the production structure. In the Retrofit Trap, people still carry the full workflow and AI assists at the narrow edge. In an AI-first design, agents carry the broad base of repeatable execution while a smaller number of people add judgment, set direction, and own exceptions at the top.

<div class="fig-band">
<p class="fig-cap">fig. 02 / the retrofit trap and the AI-first inversion</p>
<div class="versus">
  <div class="versus__side versus__side--a">
    <span class="versus__tag">Retrofit Trap</span>
    <span class="versus__name">Old human process, AI at the edge</span>
    <svg viewBox="0 0 360 330" role="img" aria-labelledby="retrofit-title retrofit-desc" style="display:block;width:100%;height:auto;">
      <title id="retrofit-title">The Retrofit Trap as a downward-pointing triangle</title>
      <desc id="retrofit-desc">Humans run workflows across the broad top while AI agents assist at the narrow bottom tip.</desc>
      <polygon points="20,25 340,25 180,300" fill="#102519" stroke="#6f7a72" stroke-width="2" />
      <text x="180" y="72" text-anchor="middle" fill="#f2f5f2" font-family="Chakra Petch, sans-serif" font-size="17" font-weight="700">HUMANS RUN WORKFLOWS</text>
      <text x="180" y="232" text-anchor="middle" fill="#00e653" font-family="JetBrains Mono, monospace" font-size="12">AI AGENTS</text>
      <text x="180" y="251" text-anchor="middle" fill="#00e653" font-family="JetBrains Mono, monospace" font-size="12">ASSIST</text>
      <text x="180" y="322" text-anchor="middle" fill="#9aa59d" font-family="JetBrains Mono, monospace" font-size="12">old process preserved</text>
    </svg>
  </div>
  <div class="versus__vs">→</div>
  <div class="versus__side versus__side--b">
    <span class="versus__tag">AI-first company</span>
    <span class="versus__name">Agents carry execution, people add judgment</span>
    <svg viewBox="0 0 360 330" role="img" aria-labelledby="ai-first-title ai-first-desc" style="display:block;width:100%;height:auto;">
      <title id="ai-first-title">The AI-first company as an upward-pointing triangle</title>
      <desc id="ai-first-desc">Humans add judgment at the narrow top while AI agents run workflows across the broad bottom.</desc>
      <polygon points="180,25 340,300 20,300" fill="#0b321c" stroke="#00e653" stroke-width="2" />
      <text x="180" y="74" text-anchor="middle" fill="#f2f5f2" font-family="Chakra Petch, sans-serif" font-size="12" font-weight="700">HUMAN</text>
      <text x="180" y="92" text-anchor="middle" fill="#f2f5f2" font-family="Chakra Petch, sans-serif" font-size="12" font-weight="700">JUDGMENT</text>
      <text x="180" y="250" text-anchor="middle" fill="#00e653" font-family="Chakra Petch, sans-serif" font-size="17" font-weight="700">AGENTS RUN WORKFLOWS</text>
      <text x="180" y="322" text-anchor="middle" fill="#9aa59d" font-family="JetBrains Mono, monospace" font-size="12">work redesigned around capability</text>
    </svg>
  </div>
</div>
</div>

Before any management layer is removed, owner hours, the unresolved-exception queue, serious misses, cross-domain escalation time, and full cost must improve together against the old process, within funded capacity. If one measure gets worse or the workflow cannot be reversed safely, the coordination layer should stay. A leader who removes managers anyway has automated the org chart rather than improved the work.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Agents can absorb routine routing only inside an explicit, measurable, and reversible workflow. The production pyramid flips when agents carry the repeatable base and named people own judgment at the top; shared controls provide a reusable floor across domains without taking release ownership from them, and the coordination layer stays wherever review and exceptions create more work than the system removes.</p></div>

## The advantage compounds through feedback

Arvind's eighth reflection calls every role an *“agent manager.”* He says people should wield agents in ways that significantly amplify themselves or their teams. I interpret agent management as using domain expertise to set a standard, direct agents within limits, evaluate their work, and review exceptions. That combination changes how much work one knowledgeable person can direct and how consistently their judgment can be applied.

Take a content editor. Agents can prepare a draft, check factual claims against approved sources, and flag repeated language before human review. In finance, they can pull records and reconcile known fields before surfacing anomalies for investigation. A customer-success lead might use them to triage requests and prepare account summaries while retaining control of commitments to the customer.

The gain is not a universal productivity ratio. It depends on how often the task changes, whether quality can be measured, the cost of integration and review, and what happens when the system is wrong. Fixed claims about two people doing the work of six conceal those differences and give leaders the confidence of a number without the evidence behind it.

I think the compounding begins in the feedback. Each run leaves behind reusable instructions, evaluated examples, sharper standards, and a history of exceptions. This creates a feedback loop: someone studies those results and changes the workflow so the next run can improve. Without that work, the same loop compounds mistakes with equal efficiency.

<div class="fig-band">
<p class="fig-cap">fig. 03 / the compounding loop lives in the feedback</p>
<div class="bshift">
  <div class="bshift__stage"><span class="bshift__k">1 · standard</span><span class="bshift__v">Define good work</span><span class="bshift__note">instructions, sources, limits</span></div>
  <div class="bshift__arrow">→</div>
  <div class="bshift__stage"><span class="bshift__k">2 · run</span><span class="bshift__v">Agent executes</span><span class="bshift__note">actions stay observable</span></div>
  <div class="bshift__arrow">→</div>
  <div class="bshift__stage"><span class="bshift__k">3 · evaluate</span><span class="bshift__v">Test the outcome</span><span class="bshift__note">measure quality and failure</span></div>
  <div class="bshift__arrow">→</div>
  <div class="bshift__stage"><span class="bshift__k">4 · learn</span><span class="bshift__v">Study exceptions</span><span class="bshift__note">change the standard or stop</span></div>
</div>
</div>

This is also why technically literate people matter more over time. They do more than operate an agent. They turn failures into better operating context and recognize when a failure reveals that the task should stay human. The durable advantage sits in that accumulated judgment, because the system improves only when somebody understands what the evidence means.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Agent management can multiply domain expertise when each run produces evidence that improves the next one. The advantage comes from reusable standards, evaluated outcomes, and learned exceptions, while weak review loops compound errors just as quickly.</p></div>

## Local autonomy needs a stop condition

Fewer approvals and more decisions close to the work can make an organization look untidy from the outside, although appearance proves very little. Useful decentralization has capable owners, measurable outputs, visible failure signals, and clear routes for cases that exceed local authority. Conflicting priorities, uncertain ownership, and hidden failures are simply disorder.

A clean org chart can also mean two things. It may reflect discipline when decision rights are clear and teams know when to escalate. It may reveal a bottleneck when routine choices wait for the same small group of executives. I think leaders should inspect queues, repeated overrides, and unresolved exceptions before treating either neatness or mess as evidence of performance.

Simkin's clean-slate question is useful because it brings the argument back to actual work: *“If I were building this business today, from scratch, knowing what AI can do, would it look like this?”* Applied to one workflow, it can expose an approval kept by habit, a rarely used feature that creates recurring support exceptions, or a data handoff nobody trusts. Removing that burden first lowers the practical cost of redesign.

To choose among candidate workflows, rank them by expected reduction in routine coordination, case variability, reversibility, data sensitivity, measurable quality, and funded review capacity. Start where cases vary enough to justify an agent rather than fixed rules, a failure can be reversed, data sensitivity is understood, quality can be measured, and people have paid capacity to review the work. A simple portfolio score can compare candidates across those dimensions, but reversibility, measurable quality, and funded review capacity are gates: a weak result on any one keeps the workflow out of shadow mode, the trial stage where an agent recommends actions while a person still executes them, regardless of its total. Support routing may fit when restricted cases always escalate. A finance workflow that releases payments or a marketing workflow that publishes unsupported claims should begin with much narrower authority because a wrong action is harder to contain.

Before a portfolio team proposes shadow mode, it should answer five questions:

1. Which routine coordination burden should disappear?
2. Why does the variable context justify an agent instead of fixed rules?
3. Can a wrong action be reversed, and can severe cases be stopped before harm?
4. Which measures will reveal quality, data misuse, and hidden review work?
5. Who owns the outcome, funds the exception queue, and has authority to stop the trial?

An employee-dismissal decision is the opposite kind of case. The evidence can cross performance, legal, and human contexts, the quality of the decision cannot be reduced to a fast accuracy score, and reversal cannot repair every consequence. Agents may organize approved evidence, but the human coordination and decision layer should remain.

Arvind's fourth reflection describes OpenAI as *“all in on AGI for the benefit of humanity. There is no Plan B.”* AGI means artificial general intelligence; the [OpenAI Charter](https://openai.com/charter/) defines it as *“highly autonomous systems that outperform humans at most economically valuable work”* and says OpenAI's mission is to ensure that capability benefits all humanity. An ordinary company has customers, contracts, employees, and a portfolio of commitments, so OpenAI's singular mission is a limited comparison. The transferable lesson is smaller: choose the priority for one workflow and make competing goals visible before granting local autonomy.

The board's decision rule from the opening now needs an operating instrument. That instrument is the release pack described above, filled in for one contained workflow.

The following support trial is illustrative rather than a universal benchmark. It starts with six weeks in shadow mode. If your first candidate is not support routing, set the pass levels from your own baseline: measure the current process's error rate, escalation response time, and weekly review hours, then require the trial to beat those numbers by a margin agreed before the first run. The charter's numbers are examples of that discipline, not targets to copy.

The charter reserves one day a week from the support operations owner and up to two engineering days a week. It also sets a cost cap of 150,000 Swedish kronor (SEK) for the vendor, integration, security review, and evaluation. The accountable owner and required approvers may choose different numbers, but they must set them before the trial so enthusiasm cannot move the goalposts later.

Capacity should be calculated before launch. Multiply the expected number of flagged cases by the median review time, then add a reserve for severe exceptions and owner decisions. The trial stays manual if that weekly load exceeds the reviewer hours and owner ceiling reserved in the charter. A held trial keeps consuming the same capacity, so its fix window needs an end date rather than an open place in the portfolio. My default is one bounded fix window. If the same safety or capacity gate still fails after the agreed changes, retire the pilot and return the workflow to manual operation rather than hold it again.

Each weekly review should place routing quality, override rate, the age of the oldest unresolved exception, reviewer and owner hours, and full cost on one line. A quality gain does not pass if it depends on an exception queue the funded team cannot clear.

The evidence trail must survive changes to the system without becoming an uncontrolled copy of customer data. For each run, the team should retain the model and prompt version, tool permissions, retrieved inputs needed for evaluation, state changes, rejected actions, retries, and tool failures. Access should be restricted by role, unnecessary personal fields removed, and the retention period agreed before launch. A change to the model, prompt, tool, or permission creates a different system, so the release gate has to evaluate it again.

Random samples can estimate routine routing accuracy, but they cannot establish safety for rare, severe cases. Those need a fixed adversarial test set, deliberately constructed cases that try to trigger a missed security or legal escalation, plus review of every real high-severity event. Every serious production miss and credible near miss should be classified, added to the versioned set, and included in the evidence for the next release gate. The control model is portable across workflow engines, audit systems, and evaluation tools. The implementation may vary, but a changed system must stay behind the release gate until the fixed test set passes again.

European rules make the ownership question concrete without applying the same duty to every AI tool. Article 26 of the [European Union's 2024 Artificial Intelligence Act](https://eur-lex.europa.eu/eli/reg/2024/1689/oj/eng#art_26) sets duties for organizations deploying systems that qualify as high risk, with [application dates staged](https://eur-lex.europa.eu/eli/reg/2024/1689/oj/eng#art_113) from August 2026 and, for some product-related systems, August 2027. It requires deployers to assign human oversight to people with the necessary competence, training, and authority. It also requires automatically generated logs under the deployer's control to be retained for at least six months. The first governance task is therefore to classify the use correctly; whether or not Article 26 applies, the named owner needs both the evidence and the authority to stop the system.

<div class="fig-band">
<p class="fig-cap">fig. 04 / an illustrative support-agent trial charter</p>
<div class="checklist">
  <div class="checklist__eyebrow">Six weeks in shadow mode · thresholds and decision rights agreed before the first run</div>
  <div class="checklist__item"><span class="checklist__tick">1</span><span class="checklist__text"><b>Scope:</b> Classify, summarize, and recommend a queue; review 100 randomly sampled tickets each week, every security and legal escalation, and a fixed adversarial set of known security and legal edge cases.</span></div>
  <div class="checklist__item"><span class="checklist__tick">2</span><span class="checklist__text"><b>Trace:</b> Use read-only approved data; minimize trace content, restrict access by role, and apply the approved retention period while recording model and prompt versions, retrievals, state changes, rejected actions, retries, and tool failures. A security signal may never transition to the ordinary support queue.</span></div>
  <div class="checklist__item"><span class="checklist__tick">3</span><span class="checklist__text"><b>Forbidden:</b> No refunds, account closures, contract changes, customer commitments, or decisions that an event is not a security incident.</span></div>
  <div class="checklist__item"><span class="checklist__tick">4</span><span class="checklist__text"><b>Pass:</b> At least 95% correct routing in the reviewed sample, no missed security or legal cases, and a median human response within 15 minutes for urgent escalations.</span></div>
  <div class="checklist__item"><span class="checklist__tick">5</span><span class="checklist__text"><b>Owner and approvers:</b> The support operations owner is accountable. Engineering, security, privacy, and procurement approve their boundaries. Where roles, monitoring, or staffing may change, workforce representatives are consulted before shadow mode so their input can change access, sampling, staffing, training, and transition plans. A senior sponsor resolves business trade-offs and funds the manual queue.</span></div>
  <div class="checklist__item"><span class="checklist__tick">6</span><span class="checklist__text"><b>Expand, hold, or stop:</b> Expand only when every pass condition and the funded owner-load limit hold. Hold for a bounded fix with no serious miss. Stop and return to manual handling after any missed restricted case, uncontained data access, or review load above capacity.</span></div>
</div>
</div>

At the end of the six-week trial, the accountable owner should take the release pack to engineering, security, privacy, procurement, any required workforce representatives, and the senior sponsor. The owner recommends expand, hold, or stop; each required approver accepts or rejects the risk within their area; and the senior sponsor accepts the remaining business risk only after those boundaries are satisfied. If quality stays below the agreed level, serious exceptions escape, or the owner cannot absorb the review load within funded capacity, the coordination layer should not shrink.

A workflow that passes should enter the quarterly operating review rather than disappear into the portfolio. The domain owner compares owner hours, the unresolved-exception queue, cross-domain escalation time, serious misses, and full cost with the old process. Full cost includes the manual queue, review capacity, integration upkeep, vendor changes, and employee-transition costs. Expansion across business units remains blocked until data-residency rules, meaning where customer and employee data may be stored and processed, access and logging controls, incident duties, vendor change terms, and accountable owners are agreed for every unit. If these measures do not improve together, the use case should be redesigned or retired because review and exception work has merely moved elsewhere.

At portfolio level, the executive team should report to the board how many workflows have passed their release gate with funded exception capacity, not how many pilots were launched. Wider expansion starts only after shared minimum controls and domain ownership are in place; every other pilot remains contained.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Local autonomy works when leaders select a contained workflow for reversibility, measurable quality, understood data sensitivity, and funded review, then give it inspectable state, bounded authority, a named owner, and a stop condition. Portfolio progress means workflows that pass their release gates and keep exception work within capacity, not a growing count of pilots.</p></div>

## Meanwhile in sci-fi

[*Star Trek: The Next Generation*](https://api.tvmaze.com/shows/491), the science-fiction television series that began in 1987, follows Captain Jean-Luc Picard and the crew of the starship Enterprise. I think it is a better metaphor for this argument than a leaderless swarm because the ship keeps an explicit command structure. Local expertise and mission-level authority coexist.

<div class="scifi">
<span class="scifi__label">Meanwhile in sci-fi</span>
<p class="scifi__film">Star Trek: The Next Generation (1987)</p>
<p>Imagine the Enterprise as a company with several operating domains. Engineering, navigation, medicine, security, and command each have specialist knowledge, but a local decision can change the condition of the whole vessel. The officer at a station therefore needs enough of the shared picture to recognize when a choice has crossed the boundary of that station.</p>
<p>This is the useful comparison for an AI-first company. Agents can handle bounded execution and routing inside a domain. Domain owners judge the output and escalate consequences that travel across domains, while senior leaders remain accountable for conflicts that change the mission itself.</p>
</div>

The metaphor works because it preserves hierarchy where hierarchy still carries a necessary function. Local autonomy does not require the absence of command. It requires shared system literacy, visible conditions, and people at every station who know exactly when their authority ends.

## The people transition is part of the architecture

I think the technical design is easier to specify than the human transition. Some coordination-heavy roles can grow into domain ownership. Others may move toward agent management, setting standards, assigning work, testing results, and handling exceptions. Some positions will disappear because the work that justified them no longer exists in the same form.

I don't know a clean formula for this, and I distrust anyone who offers one. Treating every middle-management role as routine routing hides coaching, conflict resolution, institutional memory, and care. Preserving every role regardless of the work would be equally dishonest. A responsible redesign has to inspect the job itself, separate its functions, and say which ones remain valuable.

In Sweden, this can also become an operating obligation rather than a courtesy after the technical choice. [Section 11 of the 1976 Co-Determination Act](https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/lag-1976580-om-medbestammande-i-arbetslivet_sfs-1976-580/) ordinarily requires an employer bound by a collective agreement to initiate negotiations with the employee organization covered by that agreement, usually the union, before deciding on significant changes to the business or to employees' working or employment conditions. The section also allows the employer to decide and implement first when exceptional reasons apply. The law does not prescribe a workflow-design timetable; my recommendation is to begin consultation early enough to affect monitoring, staffing, training, and transition plans, rather than waiting until a pilot has made those choices difficult to reverse.

The people plan should move with the technical trial. Before shadow mode, the company maps which tasks and roles may change, begins required consultation, and names credible destination roles. During the trial, affected people should have funded time for training and supervised work in those destinations, while the team measures whether the new jobs carry real authority or merely extra duties. Before reporting lines change, each affected person needs a confirmed role with clear terms or a transparent, supported exit. After release, leaders should review workload, pay, progression, and the human cost of the exception queue rather than assuming the new chart settled the question.

Treat a destination role as real only when decision rights, pay progression, and protected training time move with the title. Otherwise retraining becomes additional work under a new label.

The career system also has to change. Traditional pyramids turn coordination into a route toward status, pay, and broader responsibility. When routine coordination shrinks, companies need another route based on deeper expertise, wider system scope, and demonstrated judgment. Otherwise “flat” becomes a polite word for fewer opportunities above you.

<div class="fig-band">
<p class="fig-cap">fig. 05 / when the ladder loses its middle</p>
<div class="versus">
  <div class="versus__side versus__side--a">
    <span class="versus__tag">Traditional ladder</span>
    <span class="versus__name">Progress through coordination</span>
    <ul class="versus__list">
      <li>Own more approvals and reporting</li>
      <li>Gain status through headcount</li>
      <li>Move information between layers</li>
      <li>Advance by becoming a manager</li>
    </ul>
  </div>
  <div class="versus__vs">→</div>
  <div class="versus__side versus__side--b">
    <span class="versus__tag">AI-first career system</span>
    <span class="versus__name">Progress through judgment and scope</span>
    <ul class="versus__list">
      <li>Own a durable domain and its outcomes</li>
      <li>Deepen expertise while widening system impact</li>
      <li>Improve the standards agents work within</li>
      <li>Advance without requiring a larger team</li>
    </ul>
  </div>
</div>
</div>

My take is that organizational redesign should begin with one contained workflow and evidence about where agents perform reliably. Let that evidence determine which handoffs disappear, which decisions move closer to the work, and which human responsibilities become more important. Then name the destination roles or transparent exits for the people affected, before efficiency language makes the choice sound inevitable.

When coordination stops being the road to management, companies must build another road to mastery and responsibility. The org chart may become thinner, but the obligation to design authority, evidence, and human growth only gets heavier. The final question remains measurable: did the company's coordination burden fall before it redrew the org chart?

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Workflow redesign changes jobs and removes familiar career steps, so destination roles need real decision rights, pay progression, protected training time, early employee representation, and transparent exits. Before redrawing the org chart, can the company show that its measured coordination burden actually fell?</p></div>
