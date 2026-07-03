---
title: "What Happens to Your Organization When Claude Goes Down"
date: 2026-04-28
excerpt: "Claude went down this morning. For most organizations, that was an inconvenience. For some, it was a reveal."
featuredImage: /images/posts/outage-as-org-xray.webp
permalink: /drafts/3abac45e/
tags:
  - ai-strategy
  - enterprise
  - operating-model
---

Claude went down this morning. For most organizations, that was an inconvenience. For some, it was a reveal.

The Hacker News thread was at 205 points and 166 comments by mid-morning — "Claude.ai unavailable and elevated errors on the API." Engineers and knowledge workers across Europe and the US staring at status pages. Refresh. Refresh. What's interesting isn't the outage itself. Outages happen. What's interesting is what the twenty minutes after looked like inside your organization.

Because those twenty minutes told you something a consultant never could.

---

## The Organizational X-Ray

I think of unplanned outages as **Organizational X-Rays**. When a load-bearing system goes dark, you see the skeleton — the real shape of your dependencies, stripped of the comfortable narrative you've been telling yourself about "AI-assisted workflows."

Two very different pictures emerge.

In the first, teams slow down, reach for the phone, pull up a different tool, or — the uncomfortable one — realize they have to think through the problem themselves. Not ideal. But manageable. The work continues at a different pace. This is augmentation. AI was accelerating human judgment, not replacing it.

In the second, the work stops. Completely. Someone opens a ticket. Someone else asks in Slack whether it's just them. The decision loop doesn't slow down — it goes silent. Nobody knows what to do because nobody was doing anything. The model was doing it. **If your decision loops go silent when the API goes down, they weren't decision loops. They were pipes.**

That's the tell.

---

## The Cognitive Passthrough

I've been calling a specific failure mode the **Cognitive Passthrough**. It's what happens when an organization wires AI into its knowledge workflows not as a thinking partner but as a production line: humans set the inputs, the model generates the outputs, the outputs get approved, filed, shipped.

Nobody is thinking.

(To be clear — this is the *opposite* of a well-run decision-memo process, where a human owns the reasoning and the memo is just the artifact that captures it. In a Cognitive Passthrough the memo *is* the point, and the reasoning never happened.)

The organization has functionally replaced its cognitive labor with automated throughput — which, in a narrow efficiency-obsessed sense, looks impressive. Output doubles. Turnaround collapses. Management is pleased.

Until the line goes offline.

When Claude went down this morning, Cognitive Passthroughs across the enterprise stalled out. Not because the humans had lost their ability to think, but because the process no longer expected them to. The model had quietly absorbed the judgment function, and no one had drawn a line around it.

**The problem with outsourcing your thinking is that the outsourcer doesn't tell you when it's gone wrong. And neither does the status page.**

---

## Two Companies

Run the two-company thought experiment — it makes the point more clearly than any abstract argument.

Two insurance companies. Same industry, same competitive pressure, both integrated AI deeply into document-intensive workflows: contracts, claims analysis, internal reporting, client-facing summaries. On paper, identical.

Company A treats AI as a thinking accelerator. Their people are trained on prompting, yes — but also on the underlying reasoning the model is helping them with. Institutional knowledge lives separately from the tool. When the API goes down, Company A slows. Projects delay by a morning. Then humans open the documents themselves, run the numbers themselves, and the work continues.

Company B treats AI as the worker. Processes are built around model output as the primary artifact. Junior staff never developed the underlying skill — why would they, when the model did it faster and cleaner? When the API goes down, Company B stops. Not metaphorically. The queue fills. Client calls stack up. Someone escalates to leadership. Leadership doesn't know what to do either — because leadership approved the process that created the dependency.

**Company A's outage cost them a morning. Company B's outage is still calculating.**

Here's what I want you to sit with: you probably think you're Company A. Most leadership teams do. April 28, 2026 is how you find out.

---

## Dependency You Haven't Mapped Is Dependency That Owns You

The SaaS era taught us one version of this lesson. Organizations built on single-vendor infrastructure — no redundancy, no exit plan, no model-agnostic orchestration — found themselves exposed every time a pricing change or acquisition shifted the ground beneath them.

AI is teaching a harder version of the same lesson.

**SaaS dependency meant your tools could hold you hostage. AI dependency means your thinking can.**

When a CRM goes down, your contact data is unavailable. When your AI reasoning layer goes down, your judgment is unavailable — if you've been outsourcing it. That is a categorically different kind of exposure.

Most organizations haven't built an AI Operating Model. They've built an AI addiction. An Operating Model means you've decided deliberately which decisions AI augments, which it accelerates, and which it actually owns — and drawn explicit lines around all three. An addiction means you discovered that model output *feels* like productivity, and kept feeding that feeling without asking where the accountability went.

The outage this morning exposed the addicts.

---

## What to Ask After Today

I'm not arguing for slowing AI adoption. I'm arguing for mapping it. Four questions every organization should be able to answer before the next outage:

**1. Which workflows stop when a single AI provider goes down?**
List them. Name them explicitly. If you can't, you don't know your dependency profile — you're flying blind.

**2. For each of those workflows — is there a functioning human fallback?**
Not in theory. In practice. Is there a person who knows how to do this without the model? If not, you haven't augmented a human — you've replaced one without planning for the replacement to fail.

**3. Where is AI augmenting judgment, and where has it absorbed judgment?**
Augmentation means the human is still the reasoner and the model accelerates them. Absorption means the model is the reasoner and the human is approving outputs they can no longer independently evaluate. You want as much of the first as possible. The second is where you're exposed.

**4. If your primary provider changed terms, raised prices, or went dark permanently — what would you do?**
If the honest answer is "we'd be in serious trouble," you need an exit strategy before you need an exit.

These weren't hypothetical questions before today. April 28, 2026 made them operational.

---

## What a Fallback Actually Looks Like

Diagnosis is cheap. Let me be concrete about the two fallbacks that matter — one technical, one human — because an audit that ends in a list of gaps and no build plan is just anxiety with a spreadsheet.

**The technical fallback is resilience engineering, and it's not exotic.** If a single provider outage can halt a revenue workflow, that's an architecture decision you made by default. The patterns that fix it are well understood:

- **Multi-provider routing.** Put an abstraction layer between your app and any one model API, so a failing provider fails over to another (Anthropic → OpenAI → Google, or an open-weight model you host) instead of failing the user. Model-agnostic orchestration is the AI-era version of not single-homing your database.
- **Degraded-mode fallbacks.** Decide in advance what "the model is down" *does*. Serve a cached answer? Route to a smaller/local model? Drop to a deterministic rules path and flag for human review? A workflow with no degraded mode isn't resilient — it's just up until it isn't.
- **Caching and circuit breakers.** Cache frequent responses so an outage doesn't take out your entire read path, and wrap provider calls in circuit breakers so one hung dependency doesn't cascade into everything that touches it.

None of this is a research project. It's a Tuesday for a competent platform team — and the reason to fund it is that the alternative is Company B.

---

## Rebuilding the Muscle

The technical fallback keeps the lights on. The **human** fallback is the harder one, because you can't provision it in a sprint — and it's the gap Question 2 usually exposes.

If your junior staff never built the underlying skill, "keep a human in the loop" is a slogan, not a capability. Rebuilding an atrophied reasoning muscle is a program, and it looks like this:

- **Name the load-bearing judgments.** For each critical workflow, identify the two or three reasoning steps the model actually performs — the claims triage call, the risk read, the exception decision. Those are the muscles that atrophied.
- **Reintroduce friction on purpose.** Rotate people through "model-off" cycles — a day, a case, a shift — where they do the reasoning first and check the model second. You're not slowing down for its own sake; you're keeping the skill live so the fallback is real.
- **Make the reasoning the artifact, not the output.** Reward the memo that shows *why*, not just the one that ships fastest. If the only thing measured is throughput, throughput is the only thing you'll have when the model is gone.

One concrete org-design move I'd point to: a claims team that had collapsed into pure output review split itself into two tracks — a "flow" track running AI-accelerated volume, and a rotating "reasoning" track that works a subset of cases model-off and owns training the flow track. Same headcount, restructured. The reasoning track is the insurance policy. It costs a little throughput and buys back the thing Company B lost: people who can still do the work when the API can't.

---

## Run This Monday: A Two-Hour Exercise

If you want the X-ray developed rather than filed, put two hours on your leadership team's calendar. Here's the agenda:

1. **(20 min) List the workflows.** Whiteboard every process that touches an AI provider. Star the ones that generate revenue or carry compliance risk.
2. **(30 min) Run Company A / Company B on your top three.** For each starred workflow, ask honestly: if the provider went dark right now, do we slow down or stop? Be specific about who does what in the first hour. Discomfort in this section is the point.
3. **(30 min) Score augmentation vs. absorption.** Walk Question 3 across each workflow. Where is the human still the reasoner? Where have they become an approver of outputs they can't independently check?
4. **(20 min) Assign two owners.** One for the technical fallback (routing, degraded mode, caching), one for the human fallback (the reskilling program). No owner means no fallback.
5. **(20 min) Write the exit answer.** For your single biggest dependency, draft the honest answer to Question 4. If it's "we'd be in serious trouble," you've just found your most important AI initiative of the quarter.

Two hours. No consultant. You'll learn more about your real AI posture than any maturity assessment will tell you.

---

## The Reveal

Every technology wave produces a version of this moment — the point where the dependency becomes visible because the thing depended upon is suddenly gone.

The organizations that come out of the AI era with durable advantage won't be the ones that adopted fastest. They'll be the ones that adopted with intention. That mapped their dependencies as they built them. That kept the human reasoning layer alive even when it felt redundant — because they understood that a force multiplier needs something to multiply.

**The outage didn't create the problem. It just showed you where you'd already stopped thinking.**

That's the X-ray. Most organizations won't review the results. They'll wait for the API to come back up, close the status page, and keep routing. A few will pull out the image and actually look at the bones.

Those are the ones worth watching.
