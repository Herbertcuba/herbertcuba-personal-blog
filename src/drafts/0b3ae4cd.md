---
layout: post.njk
title: The Retrofit Trap and the AI-First Company
excerpt: McKinsey's March 2025 survey found that more than 80 percent of respondents saw no tangible enterprise-level EBIT impact from generative AI, even as regular use climbed to 71 percent. One architectural explanation is that companies are speeding up individual tasks while leaving the workflow around those tasks intact. This piece maps that retrofit trap and sketches the AI-first operating model that redesigns work around agent execution, with humans placed deliberately at judgment and accountability gates.
anthem: true
permalink: /drafts/0b3ae4cd/
date: 2026-09-02
---

McKinsey published *The state of AI: How organizations are rewiring to capture value* on March 12, 2025. Its online survey of 1,491 respondents, conducted July 16–31, 2024 and weighted by each country's share of global GDP, produced one finding that keeps coming up in board conversations: more than 80 percent said their organizations were not seeing a tangible impact on enterprise-level EBIT from generative AI. In the same survey, 71 percent reported regular generative-AI use in at least one business function.

Adoption is high. Enterprise financial impact is thin. These are respondent reports rather than audited financial statements, so treat them as a signal about the current gap.

McKinsey did not diagnose a single cause. One plausible explanation is architectural, and it is the working thesis of this article. An AI agent — a model-powered system that can perform a bounded sequence of workflow actions under defined controls, call tools, and respond to their results — can make individual tasks dramatically faster while leaving the handoffs, approvals, ownership boundaries, and review meetings around those tasks unchanged. Local speed rises. Cycle time, unit cost, and quality barely move. That is the retrofit trap.

The rest of this piece is a map of that trap and a sketch of the operating model that escapes it. The framework is my interpretation, and I mark where the evidence bounds it as I go.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>McKinsey's survey shows widespread generative-AI adoption alongside little reported enterprise-level EBIT impact. One architectural explanation is that companies are retrofitting agents into unchanged workflows.</p></div>

## The retrofit triangle

Picture a triangle with its point at the bottom. Humans and their workflows fill the wide top: meetings, approvals, handoffs, spreadsheets, weekly reviews, the whole coordination surface an organization runs on today. AI agents sit at the narrow bottom point, tucked inside individual tasks. Person A hands work to person B, who runs it through their copilot, then hands it to person C, who has an agent draft the customer email.

That is what most organizations mean when they say they are using AI. The Microsoft Work Trend Index 2024 reported that 75 percent of surveyed knowledge workers were already using AI at work, and that 78 percent of AI users were bringing their own tools. Task-level gains show up in the field, too: the 2023 study of 5,179 customer-support agents published by the National Bureau of Economic Research found a 14 percent average productivity gain from a conversational assistant, rising to 34 percent for novice and lower-skilled workers. Anthropic's Economic Index, which analyzes anonymized Claude interactions, estimates that current AI use is about 57 percent augmentation and 43 percent automation, spread unevenly across occupational tasks.

Most organizations begin with the retrofit because it is the honest first move. You can learn what the technology can actually do in your context without disturbing the operating model. The trap is treating that initial pattern as the destination. Adoption keeps climbing. Deployment dashboards look healthy. And yet cycle time stays the same, because the queue between step three and step four still exists, the compliance review at step six still waits for a person, and the Monday planning meeting still has thirty attendees.

The retrofit shape is efficient at accumulating tools. It is inefficient at moving work through the organization, because the shape of the work is still the shape you had before agents existed.

<figure class="fig-band article-diagram" data-diagram-id="retrofit-triangle">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 440" width="100%" height="auto" role="img" aria-labelledby="ad-retrofit-triangle-title ad-retrofit-triangle-desc">
<title id="ad-retrofit-triangle-title">The retrofit triangle</title>
<desc id="ad-retrofit-triangle-desc">Humans and their workflows fill the wide top. AI agents sit at the narrow bottom point, tucked inside individual tasks.</desc>
<g class="article-diagram__decoration">
<rect x="20" y="20" width="720" height="400" rx="20" fill="#0a1a0f" />
</g>
<g class="article-diagram__claim" data-claim-id="claim-retrofit-wide-top">
<polygon points="90,70 670,70 455,285 305,285" fill="#00a03a" />
<text x="380" y="125" text-anchor="middle" font-size="24" fill="#dce7de">Humans and their workflows</text>
<text x="380" y="165" text-anchor="middle" font-size="18" fill="#dce7de">meetings, approvals, handoffs, spreadsheets, weekly reviews</text>
</g>
<g class="article-diagram__claim" data-claim-id="claim-retrofit-narrow-point">
<polygon points="305,285 455,285 380,385" fill="#00e653" />
<text x="380" y="325" text-anchor="middle" font-size="20" fill="#0a1a0f">AI agents</text>
<text x="380" y="355" text-anchor="middle" font-size="16" fill="#0a1a0f">individual tasks</text>
</g>
</svg>
<figcaption class="fig-cap">The retrofit shape is efficient at accumulating tools. It is inefficient at moving work through the organization, because the shape of the work is still the shape you had before agents existed.</figcaption>
</figure>

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>In a retrofit organization, humans and their workflows sit at the wide top of the triangle and agents live at the narrow point, embedded in individual tasks. Local speed rises while the surrounding workflow remains untouched.</p></div>

## The AI-first triangle

Turn the triangle upright. Agents form the wide base: they execute the end-to-end workflow, retrieve information, draft, decide within defined bounds, call tools, and hand off to one another. Humans occupy the narrow point at the top and enter at explicit judgment gates — defining objectives, resolving ambiguity, approving consequential action, catching subtle failures, and carrying accountability.

This shape assumes the workflow itself has been redesigned around agent execution. McKinsey's survey found that only 21 percent of respondents reporting generative-AI use said their organizations had fundamentally redesigned at least some workflows, and it identified workflow redesign as the organizational practice most strongly associated with reported EBIT impact. The survey shows an association, and it points at a plausible mechanism: value follows the redesign, because retrofitted tasks feed the same queues.

The AI-first shape does not promise that everything runs autonomously. Anthropic's usage data still shows more augmentation than full automation. The preregistered Boston Consulting Group experiment described in *Navigating the Jagged Technological Frontier* found that GPT-4 users were more productive on 18 tasks selected as inside the model's capability frontier and less accurate on a task deliberately chosen outside it. METR's July 2025 randomized study of 16 experienced open-source developers found that early-2025 AI tools increased their completion time by 19 percent in mature repositories. Task fit matters. Model choice matters. Review controls matter.

What the AI-first shape does is locate the human deliberately. Instead of a person in every seat performing supervision that has calcified into habit, one accountable person makes the decision the workflow actually requires and takes responsibility for it.

<figure class="fig-band article-diagram" data-diagram-id="ai-first-triangle">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 440" width="100%" height="auto" role="img" aria-labelledby="ad-ai-first-triangle-title ad-ai-first-triangle-desc">
<title id="ad-ai-first-triangle-title">The AI-first triangle</title>
<desc id="ad-ai-first-triangle-desc">Agents form the wide base. Humans occupy the narrow point at the top and enter at explicit judgment gates.</desc>
<g class="article-diagram__decoration">
<rect x="20" y="20" width="720" height="400" rx="20" fill="#0a1a0f" />
</g>
<g class="article-diagram__claim" data-claim-id="claim-ai-first-narrow-point">
<polygon points="380,55 455,155 305,155" fill="#00e653" />
<text x="380" y="105" text-anchor="middle" font-size="20" fill="#0a1a0f">Humans</text>
<text x="380" y="135" text-anchor="middle" font-size="16" fill="#0a1a0f">judgment gates</text>
</g>
<g class="article-diagram__claim" data-claim-id="claim-ai-first-wide-base">
<polygon points="305,155 455,155 675,380 85,380" fill="#00a03a" />
<text x="380" y="245" text-anchor="middle" font-size="24" fill="#dce7de">Agents</text>
<text x="380" y="285" text-anchor="middle" font-size="18" fill="#dce7de">execute the end-to-end workflow</text>
<text x="380" y="325" text-anchor="middle" font-size="16" fill="#dce7de">retrieve information, draft, decide within defined bounds, call tools</text>
</g>
</svg>
<figcaption class="fig-cap">What the AI-first shape does is locate the human deliberately.</figcaption>
</figure>

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>In an AI-first organization, agents form the base of the triangle and execute the workflow, while humans sit at the point and enter at explicit judgment and accountability gates. This shape assumes a redesigned workflow, not a smarter tool inserted into the old one.</p></div>

## Where judgment concentrates

An AI-first design does not eliminate expertise. It rearranges where expertise pays off.

Three kinds of human work become more valuable when agents absorb execution. The first is domain judgment: understanding what "good" looks like inside a business function, spotting the exception the agent does not flag, and knowing when a superficially reasonable draft is quietly wrong. The 2023 field study found that experienced workers gained little from the conversational assistant, precisely because their advantage lay in exactly this kind of judgment. That advantage becomes the reason the whole workflow does not go off the rails when execution scales.

The second is system literacy — understanding how a decision at one station affects the wider workflow, controls, data, and downstream outcomes. When an agent can execute a policy change across a thousand transactions in a minute, whoever authorizes that change has to be able to reason about second-order effects. Reason about, not necessarily solve. The World Economic Forum's *Future of Jobs Report 2025*, based on employer responses covering more than 14 million workers, found that employers expected 39 percent of workers' key skills to change by 2030, with technological literacy rising alongside analytical thinking, resilience, leadership, and creative thinking.

The third is accountability. Segregation of duties, regulated approvals, security review, and professional responsibility exist for reasons that predate AI. Some human reviews genuinely protect against material risk. Others are habit dressed as governance. The design job is to distinguish them and place the necessary human decision explicitly, rather than distributing informal supervision across every seat that used to touch the work.

Arvind KC, OpenAI's Chief People Officer, described this shift in a LinkedIn post from July 2026 that collected ten reflections from his first months at the company. He wrote about bottom-up innovation, small teams, dense internal agent use, and what he called agent managers — people who direct and evaluate agent systems within their domain. OpenAI is an extreme case. It has unusual talent, capital, and access to models, and its operating model does not automatically transfer to ordinary companies. The direction of change, though, shows up in the broader evidence as well: human work concentrated around objectives, judgment, and evaluation, with agents handling execution.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>As agents absorb execution, human value concentrates in domain judgment, system literacy, and accountability. Reviews required by law or material risk stay; reviews preserved only by habit become expensive.</p></div>

## Meanwhile in sci-fi

<div class="scifi">
<span class="scifi__label">Meanwhile in sci-fi</span>
<p><em>Star Trek: The Next Generation</em> (1987) offers a useful picture of what shared system literacy looks like in practice. The USS Enterprise-D has an unambiguous chain of command: Captain Picard makes the call, Commander Riker executes, department heads own their stations. The bridge is not a flat organization.</p>
<p>What makes the crew interesting is that each specialist — flight control at the conn, engineering, tactical, medical, science — combines deep expertise at one station with enough understanding of the wider ship to anticipate effects elsewhere. When the chief engineer proposes routing power away from a system, everyone on the bridge already knows what that will do to weapons, life support, and warp capability. Local autonomy works because system literacy is distributed across the crew.</p>
<p>An AI-first company needs the same combination. Agents can execute inside a domain safely only when the person who owns that domain understands how a local change ripples through the workflow. Autonomy without system literacy is how a small tweak in a pricing agent quietly reprices half the inventory.</p>
</div>

## Monday morning inside a retrofit company

Consider a Monday morning at a company that has been enthusiastically adopting AI for eighteen months. The AI committee has 47 pilots in flight. The intranet page has case studies. Every knowledge worker has a copilot licence. Individual employees report saving several hours a week on drafting, summarizing, and searching.

And yet the sales operations lead still spends her Monday morning in the same three status meetings. Marketing still waits four days for legal review on a campaign asset. Finance still runs the same close process, with the same seven approvers, over the same nine business days. Customer support has a chatbot at the top of the funnel and the same queue behind it, because the tickets that reach a human are the exact tickets that were hard to route before.

Adoption metrics tell one story. Cycle time, unit economics, escalation rates, and customer outcomes tell another. When those measurements disagree with the pilot dashboard, the workflow has not actually changed — only the seat covers. The diagnosis is straightforward, and it is where most organizations get stuck: the retrofit was successful as a tool-adoption program, and it has produced almost nothing at the level of the company.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>A retrofit organization can post strong adoption metrics while cycle time, unit economics, and customer outcomes remain unchanged. The diagnosis is that the tool-adoption program succeeded on its own terms and did almost nothing to the workflow.</p></div>

## Model improvements and the agent layer

Here is a structural consequence worth thinking through, marked clearly as a hypothesis rather than a proven law. When your operating model puts agents in the execution layer of a workflow, a capability improvement in the underlying model can reach outcomes directly. Latency drops. Reliability rises. New tasks come inside the capability frontier. The organization feels the release.

When your operating model keeps agents inside isolated tasks, a capability improvement stops at the edge of that task. The person still hands off. The queue still forms. The review still waits. The release lands in your inbox and dies there.

Better benchmark scores do not automatically translate into better reliability, cost, latency, security, or regulatory fit in your specific workflow. "Compounding advantage" is a testable claim, not a physical law. What the AI-first shape gives you is exposure to improvement. Whether that exposure turns into value depends on the workflow, the controls, and the people who own the judgment gates.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Workflow shape determines how much of a model release your organization can absorb. Agents in the execution layer expose more of the workflow to capability improvements; agents inside isolated tasks cap the benefit at the task boundary.</p></div>

## The design question

The design question is not which tools to buy. It is which workflow to redesign around agent execution first.

Pick one flow where the outcome matters, where you can measure cycle time and quality, and where the failure modes are recoverable. Map every handoff, approval, and review. For each control, ask two questions. Does this exist because of a material risk we are legally or ethically bound to manage? Or does it exist because that is how the work was done before agents? Keep the first category. Move the second to the judgment point where a real decision needs a real human.

Then redesign the workflow itself. Assign one accountable owner. Instrument cycle time, unit cost, quality, escaped errors, and customer outcome. Run the redesigned flow against the retrofitted flow for a defined period. When cycle time and unit economics move materially, you have escaped the trap for that flow. Then choose the next one.

McKinsey did not prove any of this. The framework is my interpretation of a pattern that shows up in the survey, in the field studies, in the platform telemetry, and in the organizations I talk to. What McKinsey did show is that a lot of adoption has not turned into a lot of enterprise value yet. The retrofit shape is one explanation for why. The AI-first shape is one design that treats the gap as a workflow problem rather than a tool problem.

The organizations that will look different in three years are the ones that pick a single workflow this quarter and let the redesign teach them what the rest should become.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Choose one end-to-end workflow, separate risk-based controls from habit-based ones, redesign around agent execution, and measure against cycle time, unit economics, quality, and customer outcome. That is the concrete first step out of the retrofit trap.</p></div>