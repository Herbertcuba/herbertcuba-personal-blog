---
title: "The AI-first company is an inverted pyramid"
excerpt: "Most companies are attaching agents to an organization built for human execution. The harder move is to decide which layer should carry the routine work, and which layer must remain answerable for judgment."
tldr: "An AI-first company should use bounded agents as its repeatable execution layer while people retain authority, exception judgment, and responsibility for outcomes. Prove that inversion in one workflow, preserve the human capacity to supervise it, and scale only when another team can reproduce the result against its own baseline."
provenance: verified-by-author
anthem: true
permalink: /drafts/0b3ae4cd/
layout: post.njk
date: 2026-08-20
---

I use **AI-first company** to mean an organization designed around software carrying a bounded business outcome from one state to the next. An AI agent here is software that lets a language model choose steps and use approved tools toward that outcome. A workflow is the connected route from an event, such as an invoice arriving, to a completed result.

The organizational claim is simple: agents can form the broad execution layer, while people concentrate on judgment, exceptions, and accountability above it. The shape is an inverted pyramid. Its width represents the share of repeatable workflow execution, not the number of people on the payroll.

Adoption alone does not prove that shape. The [2025 AI Index from Stanford University's Institute for Human-Centered AI](https://hai.stanford.edu/ai-index/2025-ai-index-report), an annual report on the state of artificial intelligence, found that 78% of surveyed organizations reported using AI in 2024, up from 55% a year earlier. That is a large shift in use, but it says nothing by itself about who holds authority, who resolves a partial failure, or whether the economics survive human review.

<figure class="anthem-stat" aria-label="Reported organizational AI use rose from 55 percent in 2023 to 78 percent in 2024">
  <div style="display:grid;gap:0.75rem;margin:1.25rem 0;">
    <div><span style="display:inline-block;width:5rem;">2023</span><span style="display:inline-block;width:55%;min-width:5.5rem;padding:0.45rem 0.65rem;background:#476b74;color:#fff;border-radius:0.25rem;"><strong>55%</strong></span></div>
    <div><span style="display:inline-block;width:5rem;">2024</span><span style="display:inline-block;width:78%;min-width:5.5rem;padding:0.45rem 0.65rem;background:#0f766e;color:#fff;border-radius:0.25rem;"><strong>78%</strong></span></div>
  </div>
  <figcaption>Organizations reporting AI use. Source: Stanford HAI, 2025 AI Index. The figures measure adoption, not AI-first organizational design.</figcaption>
</figure>

I think the inversion is useful precisely because it can be tested. Before moving boxes on an org chart, a leadership team should make one workflow prove that agent-led execution is better, controllable, and reversible.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>AI use is spreading quickly, but an AI-first operating model begins with a testable allocation of work: agents carry bounded execution, while accountable people retain judgment and control.</p>
</div>

## Begin with a bet that can lose

The sources for this article do not offer a comparable Nordic production case with a complete baseline, failure record, rollback test, and cost model. That matters. The inverted pyramid should therefore enter the boardroom as an operating hypothesis with a clear way to fail, rather than as a proven destination.

One practical test would run for twelve weeks on a single, contained workflow. Record its current quality, elapsed time, human effort, rework, and cost before introducing an agent. Let the agent first replay completed cases without taking action, then give it limited authority over a low-risk subset. The thresholds for expansion, pause, and retirement should be agreed before the results arrive.

The economic denominator needs discipline. **Full cost per correctly completed case** means model and software charges, integration, monitoring, human review, incident work, and rework divided by the cases that meet the agreed quality standard. An agent that finishes twice as many cases while creating a larger review queue has moved work around rather than removed it.

<figure class="anthem-scorecard" aria-label="Five-part evidence gate for an agent-led workflow">
  <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(12rem,1fr));gap:0.75rem;margin:1.25rem 0;">
    <div style="border:1px solid currentColor;border-radius:0.4rem;padding:0.8rem;"><strong>Outcome</strong><br>Correct results and failure severity versus the baseline.</div>
    <div style="border:1px solid currentColor;border-radius:0.4rem;padding:0.8rem;"><strong>Human load</strong><br>Review minutes, interventions, and rework per correct case.</div>
    <div style="border:1px solid currentColor;border-radius:0.4rem;padding:0.8rem;"><strong>Economics</strong><br>Full cost per correctly completed case.</div>
    <div style="border:1px solid currentColor;border-radius:0.4rem;padding:0.8rem;"><strong>Recovery</strong><br>Ability to reconcile uncertain state and restore the previous path.</div>
    <div style="border:1px solid currentColor;border-radius:0.4rem;padding:0.8rem;"><strong>Capability</strong><br>People can still diagnose and resolve sampled exceptions.</div>
  </div>
  <figcaption>Every measure needs a baseline, an accountable owner, and a stopping condition set before the test.</figcaption>
</figure>

A fixed horizon prevents an interesting pilot from becoming permanent infrastructure by inertia. It also gives finance, operations, technology, risk, privacy, and employee representatives the same evidence when they decide what happens next.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>Treat the inverted pyramid as a fixed-horizon experiment. Quality, human effort, complete cost, recovery, and retained human capability should decide whether the workflow expands or stops.</p>
</div>

## Invert one workflow, not the whole company

The retrofit trap begins when an agent is attached beneath an unchanged human process. It may summarize documents or recommend a next step, yet people still move every case, reconcile conflicting systems, and carry the coordination burden. Output rises without changing the layer that owns execution.

An AI-first workflow turns that arrangement over. Conventional software with fixed rules keeps the official process state and enforces policy. Within those boundaries, an agent interprets messy inputs, chooses permitted steps, and uses approved tools. People handle cases where context, values, or consequences make a rule insufficient.

This division follows a useful distinction in [Anthropic's 2024 engineering guide](https://www.anthropic.com/engineering/building-effective-agents). Anthropic, the AI research company behind the Claude models, describes workflows as systems that follow paths defined in code, while agents let a language model direct parts of the process and choose tools dynamically. A dependable operating model needs both: flexible interpretation inside a route whose authority and state do not depend on the model's confidence.

<figure class="anthem-pyramids" aria-label="A retrofit organization compared with an AI-first organization">
  <svg viewBox="0 0 800 390" width="100%" role="img" aria-labelledby="pyramid-title pyramid-desc">
    <title id="pyramid-title">The retrofit trap and the AI-first company</title>
    <desc id="pyramid-desc">The retrofit triangle points down from broad human-run workflows to a narrow agent layer. The AI-first triangle points up from broad agent-run workflows to focused human judgment.</desc>
    <text x="200" y="28" text-anchor="middle" fill="currentColor" font-size="22" font-weight="700">Retrofit trap</text>
    <text x="600" y="28" text-anchor="middle" fill="currentColor" font-size="22" font-weight="700">AI-first company</text>
    <polygon points="65,78 335,78 200,305" fill="#b45309" fill-opacity="0.76" stroke="currentColor" stroke-width="2" />
    <polygon points="465,305 735,305 600,78" fill="#0f766e" fill-opacity="0.8" stroke="currentColor" stroke-width="2" />
    <text x="200" y="62" text-anchor="middle" fill="currentColor" font-size="18">Humans run workflows</text>
    <text x="200" y="338" text-anchor="middle" fill="currentColor" font-size="18">Agents assist</text>
    <text x="600" y="62" text-anchor="middle" fill="currentColor" font-size="18">Human judgment</text>
    <text x="600" y="338" text-anchor="middle" fill="currentColor" font-size="18">Agents run bounded workflows</text>
  </svg>
  <figcaption>The width shows where repeatable execution sits. It does not predict a staffing ratio.</figcaption>
</figure>

This changes the manager's work before it changes the org chart. Someone must define a good outcome, decide which actions may be delegated, review the exception pattern, and improve the workflow when the same exception keeps returning. The organization becomes AI-first when those responsibilities are explicit, not when it has accumulated a large collection of agents.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>The useful inversion moves repeatable execution into bounded agent-led workflows while ordinary software preserves state and policy. Human work shifts toward outcomes, exceptions, and the design of better boundaries.</p>
</div>

## Keep the system readable to people

Delegation becomes real at the point where an agent can change business state. That point needs an **authority envelope**: a machine-enforced statement of which data the agent may use, which tools and actions are allowed, how long the permission lasts, and which conditions require a person.

Consider a purchase-invoice mismatch. An agent may compare the invoice with the purchase order, ask the buyer for missing evidence, and propose the next state. The workflow system records what has happened and checks the rules. The agent cannot approve its own exception, create new bank details, or release payment outside its envelope.

Partial failure deserves equal attention. If the evidence is stored but a call to the payment system times out, the workflow must stop, check the authoritative payment record, and route uncertainty to a named person before trying again. The same control record should state which commercial or personal data may enter the model, where a supplier processes it, how long the audit record is kept, who can reverse an action, and how the company exits the supplier without losing the workflow history.

The [EU AI Act, Regulation (EU) 2024/1689](https://eur-lex.europa.eu/eli/reg/2024/1689/oj), is the European Union's 2024 risk-based law for AI systems, with stronger obligations for higher-risk uses. An internal authority envelope does not replace legal, privacy, security, or worker consultation. It gives those reviews a concrete workflow, data boundary, action set, and accountable owner to examine.

Readability also protects human skill. When routine cases disappear from a person's desk, so do many of the repetitions through which that person learns what normal looks like. Teams can preserve that practice with regular case replays, exercises in which people predict an exception outcome before seeing the answer, and reviews of cases where the agent was uncertain. These are part of the operating cost, because supervision without practiced judgment is only ceremonial control.

Arvind KC, Chief People Officer at OpenAI, the AI company behind ChatGPT, used a [public LinkedIn post](https://www.linkedin.com/feed/update/urn:li:activity:7485407006204493825/) to record ten reflections from his first months at the company. The artifact matters here for its form: observations become named, visible, and open to challenge. It does not establish that OpenAI uses the operating model proposed in this article.

<figure class="source-artifact">
  <a href="https://www.linkedin.com/feed/update/urn:li:activity:7485407006204493825/"><img src="/images/posts/arvind-kc-linkedin-post.jpg" alt="Screenshot of Arvind KC's LinkedIn post listing ten reflections from his first months at OpenAI" loading="lazy" style="display:block;width:100%;height:auto;border-radius:0.5rem;" /></a>
  <figcaption>Source artifact: Arvind KC's public LinkedIn post. The screenshot documents his written reflections; it is not evidence for the inverted-pyramid model.</figcaption>
</figure>

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>Agent autonomy becomes governable when permissions, data boundaries, partial failures, reversal, and ownership are visible. Human judgment also needs deliberate practice once agents absorb the routine cases that used to teach it.</p>
</div>

## Meanwhile in sci-fi

<div class="scifi">
<span class="scifi__label">Meanwhile in sci-fi</span>
<p class="scifi__film">Star Trek: The Next Generation (1987)</p>
<p>The <a href="https://www.startrek.com/en-un/series/star-trek-the-next-generation">1987–1994 fictional television series</a> follows the crew of the starship Enterprise, where specialists can act locally because they share the ship's operational picture, understand the limits of their station, and escalate consequential exceptions through an explicit command structure. The mapping is not a call for starship hierarchy: an AI-first company needs the same combination of local freedom, visible system state, bounded authority, and a person who remains responsible for the whole outcome.</p>
</div>

## Scale what the evidence can carry

A successful first workflow is local proof. Broader organizational change becomes defensible only when another team can reproduce the result against its own baseline, without relying on hidden support from the people who built the pilot. That second implementation tests whether the company has learned a reusable operating practice or merely created one exceptional project.

<figure class="anthem-scale" aria-label="Evidence path from a candidate workflow to an operating standard">
  <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(10rem,1fr));gap:0.75rem;margin:1.25rem 0;counter-reset:stage;">
    <div style="border-top:0.35rem solid #476b74;padding:0.75rem;"><strong>1. Candidate</strong><br>A bounded outcome, baseline, owner, and exit path.</div>
    <div style="border-top:0.35rem solid #476b74;padding:0.75rem;"><strong>2. Local proof</strong><br>The fixed-horizon evidence gate is passed.</div>
    <div style="border-top:0.35rem solid #0f766e;padding:0.75rem;"><strong>3. Independent repeat</strong><br>A second unit meets its own thresholds.</div>
    <div style="border-top:0.35rem solid #0f766e;padding:0.75rem;"><strong>4. Operating standard</strong><br>Controls, learning practices, and ownership become reusable.</div>
  </div>
  <figcaption>Scale the pattern only after local proof survives an independent repeat.</figcaption>
</figure>

The portfolio needs permanent ownership. The CIO can hold the common evidence model and technical guardrails, while each business process retains a named outcome owner. Risk, privacy, security, finance, procurement, and employee representatives join according to the workflow's consequences, rather than arriving after a tool has already become difficult to remove.

A regular portfolio review can then compare workflows on the same questions: outcome quality, human load, complete cost, recovery, learning, and supplier exit. A candidate advances when it passes its own pre-agreed thresholds and the control pattern remains intact in a second setting. It pauses when uncertainty cannot be reconciled. It retires when the economics depend on invisible human repair.

That is where the inverted pyramid becomes an operating model rather than a picture. The broad layer may be machine-executed, but responsibility does not travel downward with it. Leaders remain answerable for the authority they grant, the human judgment they preserve, the evidence they accept, and the moment they decide to stop.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>Local success earns replication, not immediate reorganization. The inverted pyramid becomes a company pattern only after another unit reproduces the result and accountable leaders keep common standards for evidence, control, learning, and exit.</p>
</div>
