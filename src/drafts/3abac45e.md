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

In the first picture, teams slow down, reach for the phone, pull up a different tool, or — here's the uncomfortable one — realize they actually have to think through the problem themselves. Not ideal. But manageable. The work continues at a different pace. This is augmentation. AI was accelerating human judgment, not replacing it.

In the second picture, the work stops. Completely. Someone opens a ticket. Someone else asks in Slack whether it's just them. The decision loop doesn't slow down — it goes silent. Nobody knows what to do because nobody was doing anything. The model was doing it. **If your decision loops go silent when the API goes down, they weren't decision loops. They were pipes.**

That's the tell.

---

## Decision-Memo Factories

I've been calling a specific failure mode the **Decision-Memo Factory**. It's what happens when an organization integrates AI into its knowledge workflows not as a thinking partner but as a production system. Humans set the inputs. The model generates the outputs. The outputs get approved, filed, shipped.

Nobody is thinking.

The organization has, functionally, replaced its cognitive labor with automated throughput — which, in a narrow efficiency-obsessed sense, looks impressive. Output doubles. Turnaround times collapse. Management is pleased.

Until the factory goes offline.

When Claude went down this morning, Decision-Memo Factories across the enterprise stalled out. Not because the humans in those organizations had lost their ability to think. But because the organizational process no longer expected them to. The model had quietly absorbed the judgment function, and no one had drawn a line around it.

**The problem with outsourcing your thinking is that the outsourcer doesn't tell you when it's gone wrong. And neither does the status page.**

---

## Two Companies

Let me run the two-company thought experiment, because I think it makes the point more clearly than any abstract argument.

Picture two insurance companies — same industry, same competitive pressure, both integrated AI deeply into their document-intensive workflows. Contracts, claims analysis, internal reporting, client-facing summaries. On paper they look identical.

Company A treats AI as a thinking accelerator. Their people are trained on prompting, yes, but they're also trained on the underlying reasoning the model is helping them with. Institutional knowledge lives separately from the tool. When the API goes down, Company A slows. Projects delay by a morning. Then humans open the documents themselves, run the numbers themselves, and the work continues.

Company B treats AI as the worker. Processes are built around model output as the primary artifact. Junior staff never developed the underlying skill — why would they, when the model did it faster and cleaner? When the API goes down, Company B stops. Not metaphorically. Literally. The queue fills. Client calls stack up. Someone escalates to leadership. Leadership doesn't know what to do either, because leadership approved the process that created the dependency.

**Company A's outage cost them a morning. Company B's outage is still calculating.**

Now here's what I want you to sit with: you probably think you're Company A. Most leadership teams do. April 28, 2026 is how you find out.

---

## Dependency You Haven't Mapped Is Dependency That Owns You

The SaaS era taught us one version of this lesson. Organizations built on single-vendor infrastructure — no redundancy, no exit plan, no model-agnostic orchestration — found themselves exposed every time a pricing change or acquisition shifted the ground beneath them.

AI is teaching us a harder version of the same lesson.

**SaaS dependency meant your tools could hold you hostage. AI dependency means your thinking can.**

The difference matters. When a CRM goes down, your contact data is unavailable. When your AI reasoning layer goes down, your judgment is unavailable — if you've been outsourcing it. That is a categorically different kind of exposure.

I think most organizations haven't built an AI Operating Model. They've built an AI addiction. There's a real difference. An Operating Model means you've thought deliberately about which decisions AI augments, which it accelerates, and which it actually owns — and you've drawn explicit lines around all three. An addiction means you discovered that model output feels like productivity, and you kept feeding that feeling without asking where the accountability went.

The outage this morning exposed the addicts.

---

## What to Ask After Today

I'm not arguing for slowing AI adoption. I'm arguing for mapping it. Here are four questions every organization should be able to answer before the next outage:

**1. Which workflows stop when a single AI provider goes down?**
List them. Name them explicitly. If you can't, you don't know your dependency profile. You are, right now, flying blind.

**2. For each of those workflows — is there a functioning human fallback?**
Not in theory. In practice. Is there a person who knows how to do this without the model? If not, you haven't augmented a human — you've replaced one without planning for the replacement to fail.

**3. Where is AI augmenting judgment, and where has it absorbed judgment?**
Augmentation means the human is still the reasoner; the model is accelerating them. Absorption means the model is the reasoner, and the human is approving outputs they can no longer independently evaluate. You want as much of the first as possible. The second is where you're exposed.

**4. If your primary AI provider changed terms, raised prices, or went dark permanently — what would you do?**
If the honest answer is "we'd be in serious trouble," you need an exit strategy before you need an exit.

These were not hypothetical questions before today. April 28, 2026 made them operational.

---

## The Reveal

Every technology wave produces a version of this moment — the point where the dependency becomes visible because the thing depended upon is suddenly gone.

The organizations that come out of the AI era with durable competitive advantage won't be the ones who adopted fastest. They'll be the ones who adopted with intention. Who mapped their dependencies as they built them. Who kept the human reasoning layer alive even when it felt redundant, because they understood that a force multiplier needs something to multiply.

**The outage didn't create the problem. It just showed you where you'd already stopped thinking.**

That's the X-ray. Most organizations won't review the results. They'll wait for the API to come back up, close the status page, and keep routing. A few will pull out the image and actually look at the bones.

Those are the ones worth watching.
