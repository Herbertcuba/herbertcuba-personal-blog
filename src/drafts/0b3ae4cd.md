---
title: "How AI changes the shape of a company"
date: 2026-07-24
excerpt: "When AI agents absorb defined execution and routine coordination, the production pyramid can flip: agents run repeatable workflows while people own judgment, exceptions, and consequences."
featuredImage: "/images/posts/architecture-ai-first-company.webp"
layout: post.njk
tags: ["ai", "organization", "leadership", "strategy", "agents"]
anthem: true
tldr: "An AI-first company redesigns workflows around AI agents, software that can take several actions and use tools within defined limits, while people own judgment, exceptions, and consequences. As agents absorb reliable execution and routine coordination, technical reasoning spreads across roles and some management layers may shrink. That redesign is defensible only when quality can be measured, authority is bounded, ownership is named, failures are reversible, and affected people have credible paths forward."
permalink: /drafts/0b3ae4cd/
provenance: verified-by-author
---

[Arvind KC joined OpenAI as Chief People Officer in February 2026](https://openai.com/index/arvind-kc-chief-people-officer/). OpenAI is an [AI research and product company](https://openai.com/index/introducing-chatgpt-agent/) developing systems that can write, reason, and use software tools across many kinds of work, so its people leader has a close view of how those systems affect roles and decisions. A few months after joining, Arvind published [ten reflections on LinkedIn](https://www.linkedin.com/feed/update/urn:li:activity:7485407006204493825/). I read them twice, first as observations from a fast-moving company and then as a blueprint for workflows, roles, and decision rights. Decision rights are the rules that specify who may decide what.

Those reflections share a view with Benjamin Simkin's May 2026 book, [*The AI First Company*](https://www.amazon.com/AI-First-Company-Engineering-Business/dp/B0H45WZRX5). Simkin documents two years spent finding a way out of what he calls the Retrofit Trap: preserving an old human workflow while adding AI around its edges. That may speed up individual steps, but it leaves the same handoffs, queues, and authority structure in place.

An AI-first company begins with a different production model. It designs the sequence of work around AI agents, software that can pursue a goal through several actions, use approved tools, and return a result or an exception under human oversight. This is agentic production: agents complete and coordinate defined work while people retain judgment where the consequences matter.

I think two of Arvind's reflections carry the structural argument. His seventh says, *“Every role is a technical role.”* His third says OpenAI is *“designed for bottom-up innovation”* and that *“things will seem chaotic”* because the organization promotes individual empowerment. Technical reasoning means understanding what the systems inside your work can and cannot do. Bottom-up innovation means people close to the work can improve it and make decisions within clear limits, without sending every choice through senior leaders.

My inference goes one step further. When agents absorb reliable execution and routine coordination, some layers built mainly to route work can shrink. The company does not become leaderless. Coaching, accountability, resource choices, conflict, and trade-offs across the business remain human responsibilities, and they become more important when fewer approvals stand between a local decision and its consequences.

<div class="fig-band">
<p class="fig-cap">source artifact / ten reflections from inside OpenAI</p>
<div class="versus">
  <div class="versus__side versus__side--a">
    <a href="https://www.linkedin.com/feed/update/urn:li:activity:7485407006204493825/" aria-label="Open Arvind KC's LinkedIn post">
      <img src="/images/posts/arvind-kc-linkedin-post.jpg" alt="Screenshot of Arvind KC's LinkedIn post listing ten reflections from his first months at OpenAI" loading="lazy" style="display:block;width:100%;max-width:458px;height:auto;margin:0 auto;" />
    </a>
  </div>
  <div class="versus__vs">→</div>
  <div class="versus__side versus__side--b">
    <span class="versus__tag">What carries the architecture</span>
    <span class="versus__name">Ten observations, two structural claims</span>
    <ul class="versus__list">
      <li><strong>7</strong>: every role is a technical role</li>
      <li><strong>3</strong>: innovation moves from the bottom up</li>
      <li><strong>8</strong>: every role also becomes an agent manager</li>
      <li><strong>1 question</strong>: when routing disappears, who owns the outcome?</li>
    </ul>
  </div>
</div>
</div>

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Arvind KC and Benjamin Simkin describe the same structural shift from different vantage points. An AI-first company spreads technical judgment across the business and may reduce layers devoted mainly to routine routing, while human authority, accountability, and care for people remain load-bearing.</p></div>

## Every role becomes a technical role

“Every role is a technical role” can sound like a demand for universal coding skills. The practical demand is broader. Everyone should understand what the systems supporting their work do well, where they fail, and how those limits affect the decisions they own. Coding remains specialist work, while technical judgment becomes a shared language.

A sales lead should know which parts of lead qualification an AI system handles reliably and which cases need review. An operations lead should understand the error rate in automated ticket classification before allowing a customer request to bypass a person. Finance and marketing carry the same responsibility within their decisions because they need enough system knowledge to judge investment quality and AI-generated claims.

In my work advising organizations on agentic production, I see teams stall when technical reasoning remains inside a separate department and everyone else submits requests. The problem then appears in specific workflows. A marketing team may accept an unsupported campaign claim because nobody owns the output standard. An operations team may automate a weak labeling scheme and send customer tickets to the wrong queue faster.

The distinction between fixed automation and AI agents matters here. Deterministic automation follows rules written in advance, such as routing every invoice above an agreed amount to a reviewer. A tool-using agent can interpret a less structured request and choose several actions within its permissions. That flexibility handles more variation, but it also creates more ways to fail, which means the people using it need to understand the boundary rather than admire the output.

Simkin describes AI as an amplifier because it produces more of whatever the workflow gives it, faster. Clear instructions and sound review criteria can increase useful output. Confused ownership can repeat the same mistake across a large batch before a dashboard reveals the damage. I think shared technical literacy is the first structural requirement of an AI-first company because local autonomy becomes reckless without it.

<div class="fig-band">
<p class="fig-cap">fig. 01 / technical reasoning at the altitude of each decision</p>
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

The test is simple enough to say and hard enough to matter: if the person who owns a decision cannot explain the system's likely failure modes, that decision is not ready to move closer to the machine.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>A technical role is one whose owner can judge the AI system within the scope of their decisions. Shared literacy lets teams recognize weak inputs, unreliable outputs, and cases that need human review before automation multiplies an error.</p></div>

## The production pyramid flips

Hierarchies serve several purposes, and treating all of them as routing produces bad organizational design. Managers allocate resources and coach people. They also resolve conflict, maintain accountability, and make trade-offs across areas of the business. A separate category is repeatable coordination: collecting status, assigning routine work, translating updates, routing approvals, and surfacing exceptions. AI agents can absorb parts of that category once the work is explicit and the result can be tested.

Simkin describes the owner moving from day-to-day operator toward architect of the system. Arvind's account of bottom-up innovation describes the corresponding move inside OpenAI: decisions shift toward people with current context, while senior leaders concentrate on system design and consequences that cross domains. Both accounts reduce the need for routine routing without removing the need for authority.

Consider an enterprise customer-support workflow. An agent may classify an inbound request, retrieve approved account context, prepare a summary, and route the case to the right specialist. It may not close the account, issue a refund, change a contract, or decide a security incident. The support operations leader owns the workflow, while legal, security, and commercial owners define the exceptions that cross into their domains.

That workflow needs a contract, not just a prompt. The permitted actions must be listed, and quality needs an observable measure such as routing accuracy on a reviewed sample. The team should agree on the acceptable error rate before the trial begins. A missed security or legal case should send the system back to shadow mode, where it recommends actions but a person still executes them. Allowlisted data access, complete activity logs, and a manual queue keep the change reversible.

This is where I think the useful frame is *domain-mapped ownership*. Domain-mapped ownership means one coherent area of work, one named human owner, and one explicit boundary beyond which the agent cannot decide. The boundary matters as much as the owner. A domain cannot be delegated safely when the team lacks an observable way to distinguish acceptable work from a plausible-looking failure before harm occurs.

The geometry then changes. In the Retrofit Trap, humans still carry the full workflow and AI assists at the narrow edge. In an AI-first design, agents carry the broad base of repeatable execution while a smaller number of people add judgment, set direction, and own exceptions at the top.

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

The falsifier is equally important. If task variation keeps outrunning the instructions, quality cannot be measured, failures carry a high and irreversible cost, or exceptions consume most of the owner's time, the coordination layer should not shrink. The evidence has rejected the redesign, at least for that workflow. A leader who removes managers anyway has automated the org chart rather than improved the work.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Agents can absorb routine routing only inside an explicit, measurable, and reversible workflow. The production pyramid flips when agents carry the repeatable base and named people own judgment at the top; where quality cannot be tested or failures contained, the existing coordination layer still has a job.</p></div>

## The advantage compounds through feedback

Arvind's eighth reflection gives every role a second label: *“agent manager.”* Agent management means using domain expertise to set a standard, direct agents within limits, evaluate their work, and review exceptions. That combination changes how much work one knowledgeable person can direct and how consistently their judgment can be applied.

Take a content editor. Agents can prepare a draft, check factual claims against approved sources, and flag repeated language before human review. In finance, they can pull records and reconcile known fields before surfacing anomalies for investigation. A customer-success lead might use them to triage requests and prepare account summaries while retaining control of commitments to the customer.

The gain is not a universal productivity ratio. It depends on how often the task changes, whether quality can be measured, the cost of integration and review, and what happens when the system is wrong. Fixed claims about two people doing the work of six conceal those differences and give leaders the confidence of a number without the evidence behind it.

I think the real compounding mechanism is more useful. Each run leaves behind reusable instructions, evaluated examples, sharper standards, and a history of exceptions. Those assets improve the next run if someone reviews them and changes the workflow. Without that work, the same loop compounds mistakes with equal efficiency.

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

This is also why technically literate people matter more over time. They do not merely operate an agent. They turn its failures into better operating context and know when a failure reveals that the task should stay human. The durable advantage is the accumulated ability to make that distinction.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Agent management can multiply domain expertise when each run produces evidence that improves the next one. The advantage comes from reusable standards, evaluated outcomes, and learned exceptions, while weak review loops compound errors just as quickly.</p></div>

## Local autonomy needs a stop condition

Fewer approvals and more decisions close to the work can make an organization look untidy from the outside, although appearance proves very little. Useful decentralization has capable owners, measurable outputs, visible failure signals, and clear routes for cases that exceed local authority. Conflicting priorities, uncertain ownership, and hidden failures are simply disorder.

A clean org chart can also mean two things. It may reflect discipline when decision rights are clear and teams know when to escalate. It may reveal a bottleneck when routine choices wait for the same small group of executives. I think leaders should inspect queues, repeated overrides, and unresolved exceptions before treating either neatness or mess as evidence of performance.

Simkin's clean-slate question is useful because it brings the argument back to actual work: *“If I were building this business today, from scratch, knowing what AI can do, would it look like this?”* Applied to one workflow, it can expose an approval kept by habit, a rarely used feature that creates recurring support exceptions, or a data handoff nobody trusts. Removing that burden first lowers the practical cost of redesign.

Arvind's fourth reflection describes OpenAI as *“all in on AGI for the benefit of humanity. There is no Plan B.”* AGI means artificial general intelligence, OpenAI's stated long-term goal of building systems with broad ability across cognitive tasks; the [OpenAI Charter](https://openai.com/charter/) says that capability should benefit all humanity. An ordinary company has customers, contracts, employees, and a portfolio of commitments, so OpenAI's singular mission is a limited comparison. The transferable lesson is smaller: choose the priority for one workflow and make competing goals visible before granting local autonomy.

The Monday-morning version should fit on one page. Pick a contained workflow, then set the trial window, budget, and time required from the domain owner. Include integration, evaluation, procurement, and change costs rather than only the model subscription. Decide in advance what evidence permits expansion and what sends the system back to shadow mode. If the work affects roles or monitoring, involve employee representatives before the operating model hardens around a technical pilot.

<div class="fig-band">
<p class="fig-cap">fig. 04 / the workflow selection test</p>
<div class="checklist">
  <div class="checklist__eyebrow">Progress only when every answer is credible</div>
  <div class="checklist__item"><span class="checklist__tick">1</span><span class="checklist__text"><b>Contained:</b> Does the workflow have a clear beginning, end, and accountable business outcome?</span></div>
  <div class="checklist__item"><span class="checklist__tick">2</span><span class="checklist__text"><b>Measurable:</b> Can reviewers tell good work from failure using agreed evidence?</span></div>
  <div class="checklist__item"><span class="checklist__tick">3</span><span class="checklist__text"><b>Bounded:</b> Are permitted actions, data access, and forbidden decisions explicit?</span></div>
  <div class="checklist__item"><span class="checklist__tick">4</span><span class="checklist__text"><b>Reversible:</b> Can the team return to shadow mode or a manual queue without losing the work?</span></div>
  <div class="checklist__item"><span class="checklist__tick">5</span><span class="checklist__text"><b>Owned:</b> Is one person funded and empowered to maintain quality and decide exceptions?</span></div>
  <div class="checklist__item"><span class="checklist__tick">6</span><span class="checklist__text"><b>Responsible:</b> Are redeployment, training, employee representation, and possible exits part of the trial plan?</span></div>
</div>
</div>

This diagnostic prevents a pilot from becoming an alibi for a reorganization. The workflow earns a structural change by producing evidence. The org chart does not get to declare victory first.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Local autonomy works when a contained workflow has measurable quality, bounded authority, a funded owner, and a stop condition agreed before the trial. Leaders should include data, procurement, control, and people costs in the test, then let the evidence decide whether the design expands.</p></div>

## Meanwhile in sci-fi

[*Star Trek: The Next Generation*](https://api.tvmaze.com/shows/491), the science-fiction television series that began in 1987, follows Captain Jean-Luc Picard and the crew of the starship Enterprise. It is a better metaphor for this argument than a leaderless swarm because the ship has an explicit command structure. The useful idea is how that authority works alongside specialist knowledge and a shared view of the vessel.

<div class="scifi">
<span class="scifi__label">Meanwhile, in science fiction</span>
<p class="scifi__film">Star Trek: The Next Generation, every station sees the same ship</p>
<p>Each officer owns a specialist station, but nobody treats a local reading as the whole truth. Navigation, engineering, medicine, security, and command operate from a common picture of the mission and the ship's condition. That shared system literacy lets an officer act quickly inside a domain while recognizing when a local choice could endanger the wider vessel.</p>
<p>The Enterprise computer can execute commands, retrieve information, and coordinate systems, but it does not own the mission. Picard remains accountable for trade-offs across the ship. An AI-first company needs the same separation: agents handle bounded execution and routing, domain owners judge their part of the system, and senior leaders decide conflicts that no local workflow can resolve.</p>
</div>

The point is clearer once the hierarchy stays in the metaphor. Local autonomy does not require the absence of command. It requires people at every station to understand enough of the wider system to know when their authority ends.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>The Enterprise works through specialist stations, a shared operating picture, and explicit command. AI-first organizations need the same combination: local expertise and bounded autonomy for ordinary decisions, with clear human authority when one domain's choice changes the whole mission.</p></div>

## The people transition is part of the architecture

The technical design is easier than the human transition. Some coordination-heavy roles can grow into domain ownership. Others may move toward agent management, setting standards, assigning work, testing results, and handling exceptions. Some positions will disappear because the work that justified them no longer exists in the same form.

I don't know a clean formula for this, and I distrust anyone who offers one. Treating every middle-management role as routine routing hides coaching, conflict resolution, institutional memory, and care. Preserving every role regardless of the work would be equally dishonest. A responsible redesign has to inspect the job itself, separate the functions, and say which ones remain valuable.

The transition needs concrete answers before reporting lines change. Which people have a credible destination role, and what authority will it carry? Who funds the new domain owner rather than asking someone to perform it beside a full-time job? What training leads to real work instead of a certificate? When should employee representatives enter the process? If no destination exists, how will the company explain and support the exit?

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

When coordination stops being the road to management, companies must build another road to mastery and responsibility. An AI-first architecture is only credible if people can see both where the agents stop and where their own growth continues.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Workflow redesign changes jobs and removes familiar career steps, so destination roles, funded ownership, employee representation, and transparent exits belong in the architecture. A thinner hierarchy is responsible only when the company replaces coordination-based advancement with credible growth through expertise, scope, and judgment.</p></div>
