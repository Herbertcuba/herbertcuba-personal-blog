---
title: "How AI changes the shape of a company"
date: 2026-07-24
excerpt: "AI agents can absorb repeatable execution and routine coordination, but a thinner hierarchy is justified only when the workflow is measurable, bounded, reversible, and owned. Change the work first, then let the evidence decide what happens to the org chart."
featuredImage: "/images/posts/architecture-ai-first-company.webp"
layout: post.njk
tags: ["ai", "organization", "leadership", "strategy", "agents"]
anthem: true
tldr: "An AI-first company redesigns workflows around AI agents, software that can take several actions and use approved tools within defined limits, while people own judgment, exceptions, and consequences. Some coordination layers may shrink, but only when the evidence shows that owner hours, unresolved exceptions, serious misses, escalation time, and full cost improve together. Otherwise the work has merely moved into review queues and overloaded owners."
permalink: /drafts/0b3ae4cd/
provenance: verified-by-author
---

[Arvind KC joined OpenAI as Chief People Officer in February 2026](https://openai.com/index/arvind-kc-chief-people-officer/). OpenAI is an [AI research and product company](https://openai.com/index/introducing-chatgpt-agent/) developing systems that can write, reason, and use software tools across many kinds of work, so its people leader has a close view of how those systems affect roles and decisions. A few months after joining, Arvind published [ten reflections on LinkedIn](https://www.linkedin.com/feed/update/urn:li:activity:7485407006204493825/). I read them twice, first as observations from a fast-moving company and then as a blueprint for workflows, roles, and decision rights. Decision rights are the rules that specify who may decide what.

Those reflections share a view with Benjamin Simkin's May 2026 book, [*The AI First Company*](https://www.amazon.com/AI-First-Company-Engineering-Business/dp/B0H45WZRX5). Simkin documents two years spent finding a way out of what he calls the Retrofit Trap: preserving an old human workflow while adding AI around its edges. That may speed up individual steps, but it leaves the same handoffs, queues, and authority structure in place.

Neither account proves that a large enterprise has completed this transition. Together they offer a structural hypothesis that leaders can test. One useful measure is cross-domain escalation time: the elapsed time between detecting an exception that affects more than one business area and placing it with people authorized to resolve it. If agents absorb routine work while review load, unresolved exceptions, cross-domain escalation time, or owner hours rise, coordination has not disappeared. It has changed address.

An AI-first company begins with a different production model. It designs the sequence of work around AI agents, software that can pursue a goal through several actions, use approved tools, and return a result or an exception under human oversight. This is agentic production: agents complete and coordinate defined work while people retain judgment where the consequences matter.

Two of Arvind's reflections carry the structural argument. His seventh says, *“Every role is a technical role.”* His third says OpenAI is *“designed for bottom-up innovation”* and that *“things will seem chaotic”* because the organization promotes individual empowerment. Technical reasoning means understanding what the systems inside your work can and cannot do. Bottom-up innovation means people close to the work can improve it and make decisions within clear limits, without sending every choice through senior leaders.

My inference goes one step further. When agents absorb reliable execution and routine coordination, some layers built mainly to route work can shrink. The company does not become leaderless. Coaching, accountability, resource choices, conflict, and trade-offs across the business remain human responsibilities, and they become more important when fewer approvals stand between a local decision and its consequences.

The sequence matters. Establish how the current workflow performs, redesign the work, inspect what the system can carry safely, and only then decide whether the organization should change around it.

<div class="fig-band">
<p class="fig-cap">source artifact / ten reflections from inside OpenAI</p>
<div class="versus">
  <div class="versus__side versus__side--a">
    <a href="https://www.linkedin.com/feed/update/urn:li:activity:7485407006204493825/" aria-label="Open Arvind KC's LinkedIn post">
      <img src="/images/posts/arvind-kc-linkedin-post.jpg" alt="Screenshot of Arvind KC's LinkedIn post listing ten reflections from his first months at OpenAI" width="458" height="800" loading="lazy" style="display:block;width:100%;max-width:458px;height:auto;margin:0 auto;" />
    </a>
    <p><a href="https://www.linkedin.com/feed/update/urn:li:activity:7485407006204493825/">View Arvind KC's original public LinkedIn post</a></p>
  </div>
  <div class="versus__vs">→</div>
  <div class="versus__side versus__side--b">
    <span class="versus__tag">What carries the architecture</span>
    <span class="versus__name">Ten observations, two structural claims</span>
    <ul class="versus__list">
      <li><strong>7</strong>: every role is a technical role</li>
      <li><strong>3</strong>: innovation moves from the bottom up</li>
      <li><strong>8</strong>: every role also directs agents, sets their limits, and reviews their work</li>
      <li><strong>1 question</strong>: when routine routing disappears, who owns the outcome?</li>
    </ul>
  </div>
</div>
</div>

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Arvind KC and Benjamin Simkin describe the same structural shift from different vantage points. An AI-first company spreads technical judgment across the business and may reduce layers devoted mainly to routine routing, but the claim fails if coordination merely moves into review queues, unresolved exceptions, and overloaded owners.</p></div>

## Every role becomes a technical role

“Every role is a technical role” can sound like a demand for universal coding skills. The practical demand is broader. Everyone should understand what the systems supporting their work do well, where they fail, and how those limits affect the decisions they own. Coding remains specialist work, while technical judgment becomes a shared language.

A sales lead should know which parts of lead qualification an AI system handles reliably and which cases need review. An operations lead should understand the error rate in automated ticket classification before allowing a customer request to bypass a person. Finance and marketing carry the same responsibility within their decisions because they need enough system knowledge to judge investment quality and AI-generated claims.

In my work advising organizations on agentic production, I see teams stall when technical reasoning remains inside a separate department and everyone else submits requests. The problem then appears in specific workflows. A marketing team may accept an unsupported campaign claim because nobody owns the output standard. An operations team may automate a weak labeling scheme and send customer tickets to the wrong queue faster.

Conventional workflow software deserves a strong defense here. Deterministic automation follows rules written in advance, such as routing every invoice above an agreed amount to a reviewer. When the cases and conditions are stable, a rules engine is easier to test and usually easier to trust than an AI agent. A tool-using agent earns its place when requests arrive in varied language, context must be gathered from several approved sources, and the next permitted action cannot be captured sensibly in a fixed decision tree.

That flexibility adds a reliability burden. A model-driven choice can vary even when two cases look similar, so the owner needs reviewed samples, named error categories, a record of every tool action, and a route for uncertain cases. A capable-sounding response proves little; the team has to detect a wrong choice before it becomes an expensive one.

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

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>A technical role is one whose owner can judge the AI system within the scope of their decisions. Rules remain the better tool for stable, fully specified work; agents take on variable cases only when people can inspect their actions, measure their errors, and catch exceptions before automation multiplies them.</p></div>

## The production pyramid flips

Hierarchies serve several purposes, and treating all of them as routing produces bad organizational design. Managers allocate resources and coach people. They also resolve conflict, maintain accountability, and make trade-offs across areas of the business. A separate category is repeatable coordination: collecting status, assigning routine work, translating updates, routing approvals, and surfacing exceptions. AI agents can absorb parts of that category once the work is explicit and the result can be tested.

Applied to ownership, Simkin's clean-slate question changes the job. Instead of approving every movement inside an inherited process, the owner designs the system, chooses its limits, and concentrates on decisions with consequences across the business. Arvind's account of bottom-up innovation describes the corresponding move inside OpenAI: decisions shift toward people with current context, while senior leaders retain authority over trade-offs that no local workflow can settle.

Consider an enterprise customer-support workflow. An agent may classify an inbound request, retrieve approved account context, prepare a summary, and route the case to the right specialist. It may not close the account, issue a refund, change a contract, or decide whether an event is a security incident. If a message says, “Your system exposed our employee records,” the agent must reject ordinary routing and send the untouched case to the security queue for immediate human review.

That workflow needs a contract, not just a prompt. The team should list every permitted tool and data source, record each attempted action, and define error categories such as wrong destination, unsupported summary, restricted-data access, missed escalation, and tool failure. Quality can then be measured on a reviewed sample, while the share of recommendations changed by people reveals the override rate. The time between an agent flag and a human response reveals whether the escalation path works under real conditions.

Customer tickets often contain personal data. [Article 5 of the General Data Protection Regulation](https://eur-lex.europa.eu/eli/reg/2016/679/oj/eng#art_5), the European Union's 2016 data-protection law, requires personal data to be collected for specified purposes and limited to what is necessary. In practical terms, a named data owner must approve which customer fields the agent can retrieve and why. Giving it the whole customer record because access is convenient would turn an operating shortcut into a governance failure.

*Domain-mapped ownership* is the useful frame here: one coherent area of work, one named human owner, and one explicit boundary beyond which the agent cannot decide. A product owner may prioritize features, while a platform team keeps shared technical services reliable. The domain owner carries a different obligation: the end-to-end outcome of one operating workflow, including its data access, exception rules, evidence, and effects on people.

At enterprise scale, that domain may cross business units and vendors. The owner therefore needs authority to bring support, engineering, security, privacy, procurement, and workforce concerns into one release decision. A name on a slide is not ownership if the person cannot obtain the logs, change the vendor contract, fund the manual queue, or stop the workflow.

The strongest counterargument is that agents may create more coordination rather than less. Review queues can grow, vendor failures can require several teams to respond, and one local exception can cross security, legal, and customer boundaries. A thinner organization is earned only when the measured review load, unresolved-exception queue, cross-domain escalation time, and vendor oversight all fall within funded capacity. If that work merely moves from managers into hidden exception queues, the hierarchy has not become simpler. Its coordination cost has changed address.

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

Before any management layer is removed, owner hours, the unresolved-exception queue, serious misses, and cross-domain escalation time must improve together against the old process, within funded capacity. If one measure gets worse or the workflow cannot be reversed safely, the coordination layer should stay. A leader who removes managers anyway has automated the org chart rather than improved the work.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Agents can absorb routine routing only inside an explicit, measurable, and reversible workflow. The production pyramid flips when agents carry the repeatable base and named people own judgment at the top; if review and exceptions create more coordination than the system removes, the existing layer still has a job.</p></div>

## The advantage compounds through feedback

Arvind's eighth reflection gives every role a second label: *“agent manager.”* Agent management means using domain expertise to set a standard, direct agents within limits, evaluate their work, and review exceptions. That combination changes how much work one knowledgeable person can direct and how consistently their judgment can be applied.

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

Arvind's fourth reflection describes OpenAI as *“all in on AGI for the benefit of humanity. There is no Plan B.”* AGI means artificial general intelligence, OpenAI's stated long-term goal of building systems with broad ability across cognitive tasks; the [OpenAI Charter](https://openai.com/charter/) says that capability should benefit all humanity. An ordinary company has customers, contracts, employees, and a portfolio of commitments, so OpenAI's singular mission is a limited comparison. The transferable lesson is smaller: choose the priority for one workflow and make competing goals visible before granting local autonomy.

The Monday-morning version should fit on one page. The following support trial is illustrative rather than a universal benchmark. It starts with six weeks in shadow mode, where the agent recommends actions but a person still executes them.

The charter reserves one day a week from the support operations owner and up to two engineering days a week. It also sets a cost cap of 150,000 Swedish kronor (SEK) for the vendor, integration, security review, and evaluation. The team chooses its own numbers, but it chooses them before the trial so enthusiasm cannot move the goalposts later.

The evidence trail must survive changes to the system. For each run, the team should retain the model and prompt version, tool permissions, retrieved inputs, state changes, rejected actions, retries, and tool failures. A change to the model, prompt, tool, or permission creates a different system, so the release gate has to evaluate it again.

Random samples can estimate routine routing accuracy, but they cannot establish safety for rare, severe cases. Those need a fixed adversarial test set, deliberately constructed cases that try to trigger a missed security or legal escalation, plus review of every real high-severity event. The control model is portable across workflow engines, audit systems, and evaluation tools. The implementation may vary, but a changed system must stay behind the release gate until the fixed test set passes again.

European rules make the ownership question concrete without applying the same duty to every AI tool. Article 26 of the [European Union's 2024 Artificial Intelligence Act](https://eur-lex.europa.eu/eli/reg/2024/1689/oj/eng#art_26) sets duties for organizations deploying systems that qualify as high risk, with [application dates staged](https://eur-lex.europa.eu/eli/reg/2024/1689/oj/eng#art_113) from August 2026 and, for some product-related systems, August 2027. It requires deployers to assign human oversight to people with the necessary competence, training, and authority. It also requires automatically generated logs under the deployer's control to be retained for at least six months. The first governance task is therefore to classify the use correctly; whether or not Article 26 applies, the named owner needs both the evidence and the authority to stop the system.

<div class="fig-band">
<p class="fig-cap">fig. 04 / an illustrative support-agent trial charter</p>
<div class="checklist">
  <div class="checklist__eyebrow">Six weeks in shadow mode · thresholds and decision rights agreed before the first run</div>
  <div class="checklist__item"><span class="checklist__tick">1</span><span class="checklist__text"><b>Scope:</b> Classify, summarize, and recommend a queue; review 100 randomly sampled tickets each week, every security and legal escalation, and a fixed adversarial set of known security and legal edge cases.</span></div>
  <div class="checklist__item"><span class="checklist__tick">2</span><span class="checklist__text"><b>Trace:</b> Use read-only approved data; record model and prompt versions, retrievals, state changes, rejected actions, retries, and tool failures. A security signal may never transition to the ordinary support queue.</span></div>
  <div class="checklist__item"><span class="checklist__tick">3</span><span class="checklist__text"><b>Forbidden:</b> No refunds, account closures, contract changes, customer commitments, or decisions that an event is not a security incident.</span></div>
  <div class="checklist__item"><span class="checklist__tick">4</span><span class="checklist__text"><b>Pass:</b> At least 95% correct routing in the reviewed sample, no missed security or legal cases, and a median human response within 15 minutes for urgent escalations.</span></div>
  <div class="checklist__item"><span class="checklist__tick">5</span><span class="checklist__text"><b>Owner and approvers:</b> The support operations owner is accountable. Engineering, security, privacy, and procurement approve their boundaries; workforce representatives are consulted where roles or monitoring change. A senior sponsor resolves business trade-offs and funds the manual queue.</span></div>
  <div class="checklist__item"><span class="checklist__tick">6</span><span class="checklist__text"><b>Expand, hold, or stop:</b> Expand only when every pass condition and the funded owner-load limit hold. Hold for a bounded fix with no serious miss. Stop and return to manual handling after any missed restricted case, uncontained data access, or review load above capacity.</span></div>
</div>
</div>

At the end of the six-week trial, the accountable owner should take the report to the people who control the dependent boundaries. The owner recommends expand, hold, or stop; each required approver accepts or rejects the risk within their area; and the senior sponsor accepts the remaining business risk only after those boundaries are satisfied. If quality stays below the agreed level, serious exceptions escape, or the owner cannot absorb the review load within funded capacity, the coordination layer should not shrink.

A workflow that passes should enter the quarterly operating review rather than disappear into the portfolio. The domain owner compares owner hours, the unresolved-exception queue, cross-domain escalation time, serious misses, and full cost with the old process. Full cost includes the manual queue, review capacity, integration upkeep, vendor changes, and employee-transition costs. Expansion across business units remains blocked until data-residency rules, meaning where customer and employee data may be stored and processed, access and logging controls, incident duties, vendor change terms, and accountable owners are agreed for every unit. If these measures do not improve together, the use case should be redesigned or retired because review and exception work has merely moved elsewhere.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Local autonomy works when a contained workflow has measurable quality, inspectable system state, bounded authority, a funded owner, and a stop condition agreed before the trial. Trial and quarterly reviews should compare the new workflow with the old one, count its full cost, and block wider release when severe failures, hidden queues, vendor boundaries, or owner load remain unresolved.</p></div>

## Meanwhile in sci-fi

[*Star Trek: The Next Generation*](https://api.tvmaze.com/shows/491), the science-fiction television series that began in 1987, follows Captain Jean-Luc Picard and the crew of the starship Enterprise. I think it is a better metaphor for this argument than a leaderless swarm because the ship keeps an explicit command structure. Local expertise and mission-level authority coexist.

<div class="scifi">
<span class="scifi__label">Meanwhile, in science fiction</span>
<p class="scifi__film">Star Trek: The Next Generation, every station sees the same ship</p>
<p>Imagine the Enterprise as a company with several operating domains. Engineering, navigation, medicine, security, and command each have specialist knowledge, but a local decision can change the condition of the whole vessel. The officer at a station therefore needs enough of the shared picture to recognize when a choice has crossed the boundary of that station.</p>
<p>This is the useful comparison for an AI-first company. Agents can handle bounded execution and routing inside a domain. Domain owners judge the output and escalate consequences that travel across domains, while senior leaders remain accountable for conflicts that change the mission itself.</p>
</div>

The metaphor works because it preserves hierarchy where hierarchy still carries a necessary function. Local autonomy does not require the absence of command. It requires shared system literacy, visible conditions, and people at every station who know exactly when their authority ends.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>The Enterprise combines specialist stations, a shared operating picture, and explicit command. AI-first organizations need the same balance: bounded autonomy for ordinary decisions, enough system knowledge to recognize wider consequences, and clear human authority when one domain's choice changes the whole mission.</p></div>

## The people transition is part of the architecture

The technical design is easier than the human transition. Some coordination-heavy roles can grow into domain ownership. Others may move toward agent management, setting standards, assigning work, testing results, and handling exceptions. Some positions will disappear because the work that justified them no longer exists in the same form.

I don't know a clean formula for this, and I distrust anyone who offers one. Treating every middle-management role as routine routing hides coaching, conflict resolution, institutional memory, and care. Preserving every role regardless of the work would be equally dishonest. A responsible redesign has to inspect the job itself, separate its functions, and say which ones remain valuable.

In Sweden, this is also an operating obligation rather than a courtesy after the technical choice. [Section 11 of the 1976 Co-Determination Act](https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/lag-1976580-om-medbestammande-i-arbetslivet_sfs-1976-580/) requires an employer bound by a collective agreement to initiate negotiations with the employee organization covered by that agreement, usually the union, before deciding on significant changes to the business or to employees' working or employment conditions. The timing matters here. That negotiation must happen early enough to change the workflow's monitoring, staffing, training, and transition plan, rather than after a pilot has made those choices difficult to reverse.

The people plan should move with the technical trial. Before shadow mode, the company maps which tasks and roles may change, begins required consultation, and names credible destination roles. During the trial, affected people should have funded time for training and supervised work in those destinations, while the team measures whether the new jobs carry real authority or merely extra duties. Before reporting lines change, each affected person needs a confirmed role with clear terms or a transparent, supported exit. After release, leaders should review workload, pay, progression, and the human cost of the exception queue rather than assuming the new chart settled the question.

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

When coordination stops being the road to management, companies must build another road to mastery and responsibility. The org chart may become thinner, but the obligation to design authority, evidence, and human growth only gets heavier.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Workflow redesign changes jobs and removes familiar career steps, so destination roles, funded training, early employee representation, and transparent exits belong in the architecture from the start. If people cannot see both where the agents stop and where their own growth continues, the architecture is incomplete.</p></div>
