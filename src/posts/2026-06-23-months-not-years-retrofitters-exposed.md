---
title: "The Months-Not-Years Problem — And Why Retrofitters Are the Most Exposed"
date: 2026-06-23
excerpt: "Five Eyes intelligence agencies just said frontier AI capable of taking down governments is 'months' away. If your company runs on retrofitted AI — tools bolted onto an existing structure, dependent on external APIs that can vanish overnight — that timeline isn't abstract. It's structural."
featuredImage: /images/posts/months-not-years-retrofitters-exposed.webp
layout: post.njk
tags:
  - ai
  - strategy
  - geopolitics
---

On June 22, five intelligence agencies — the US, UK, Canada, Australia, and New Zealand — issued a joint statement. Not a policy paper. Not a committee recommendation. A warning. The Five Eyes said frontier AI models capable of fundamentally disrupting governments and businesses are not years away. They are months away.

That's an unusual thing for intelligence agencies to say out loud.

---

The statement was triggered, at least in part, by something that happened ten days earlier. On June 12, the Trump administration blocked foreign nationals from accessing Anthropic's Fable and Mythos models — no warning, no wind-down period, no transition plan. [I wrote about it then](https://www.cubagarcia.com/posts/the-kill-switch-is-real/): one government, one evening, and an entire intelligence layer was gone for every non-US company that depended on it.

The Five Eyes didn't frame this as a geopolitical curiosity. They framed it as a business risk. "Cyber risk can no longer be treated as a purely technical issue," the statement read. "This is a core business risk and leadership responsibility."

My take: they're telling CEOs something they haven't said this directly before. This is yours to own.

---

Most companies hearing this news will update their threat models. They'll add AI risk to the next board deck. Some will hire a Head of AI Security. And then they'll go back to the architecture they already have — the one where AI is a layer on top, a set of API calls sitting inside a system that was designed for a different era.

That's the move I'd be worried about.

In *The AI First Company*, Benjamin Simkin draws a clear line between two types of operators. Retrofitters bolt AI onto an existing structure — same org chart, same core offer, same delivery model, just with some tooling added on top. AI-first builders start from a clean sheet and ask what a company would look like if it were designed around what AI actually makes possible. Simkin's key observation is simple but cuts deep: "The AI-first competitors in your market are building a structural advantage that compounds over time."

The gap between those two postures isn't just a performance gap. It's becoming a security posture gap.

---

I think the Five Eyes timing is telling since the Fable/Mythos event revealed that retrofitted companies concentrate their AI exposure in exactly the wrong place. Their core processes still run on human-legacy systems — org charts, handoffs, reporting lines, delivery pipelines. But they've added a critical dependency: external APIs for the intelligence layer. The AI piece isn't deeply integrated into the structure. It's *attached* to it.

Which means when a government flips a switch on one of those APIs, the retrofitter loses something they can't immediately replace. Not a tool. A capability that was covering for structural gaps in the underlying system.

An AI-first builder has a different kind of vulnerability — they're deeply dependent on AI too — but the difference is the architecture was *designed* knowing that dependency existed. The redundancy, the fallbacks, the ability to swap models — these get built in from the start, not added later when someone gets scared.

---

The Five Eyes said "months, not years." I don't think that's just a warning about offensive AI. I think it's a warning about how quickly your competitive and operational landscape can be restructured by forces outside your control.

A frontier model that can run autonomous cyber operations doesn't have to target you directly to reshape your situation. Your competitors get access to it. Your suppliers' systems get stress-tested by it. The regulatory environment around it shifts fast enough that whatever compliance posture you built last quarter is already out of date.

In that environment, speed of adaptation isn't just a competitive advantage. It becomes a survival variable.

---

Retrofitted architectures are slow to adapt almost by definition. The AI layer is integrated enough to create dependency but not deeply enough to allow quick pivoting. You can't just swap out Fable for an open-source alternative overnight if your entire workflow was built around Fable's specific capabilities and your team was never trained to think in model-agnostic terms.

I've seen this pattern in smaller companies I've worked with. They adopt a single provider's suite — understandably, it's the path of least resistance — and over 12 to 18 months, the internal language, the workflows, the client-facing outputs all quietly conform to that provider's affordances. By the time a disruption hits, the switching cost isn't financial. It's cognitive and structural.

The Fable pull was a small version of what happens when that disruption comes from a geopolitical direction rather than a product one.

---

This is the part the Five Eyes statement got right that most business commentary missed. They didn't say AI is a security threat. They said the combination of accelerating capability and geopolitical volatility creates a structural risk that leadership has to own.

The question for any company running on retrofitted AI isn't "are we using AI enough?" It's "if our primary AI provider was switched off tomorrow — by a government, by a bankruptcy, by a unilateral model deprecation — what breaks, and how fast could we rebuild?"

My experience is that most companies have never asked that question in those terms. They've asked about API reliability and uptime SLAs. Not about geopolitical kill switches.

---

Simkin's framework gives you the diagnostic, but not the prescription. The prescription isn't "become AI-first overnight" — that's not realistic for most organizations. The prescription is to stop treating the AI layer as a thin add-on and start treating it as core infrastructure with the same resilience requirements you'd apply to anything else that's mission-critical.

That means model diversity. It means internal capability, not just tool access. It means someone in leadership who understands the dependency map well enough to answer the kill-switch question without calling the vendor.

And it means accepting that the timeline for getting that right is — according to the people whose job it is to know — not years.

---

The Fable/Mythos event was a preview. A small, politically motivated one, affecting a specific user group, with limited cascading damage. But the mechanism was identical to what a broader disruption would look like: no warning, no transition window, capability gone.

If you're running a retrofitted stack and your competitive edge depends on an intelligence layer that lives in someone else's infrastructure, you already have the answer to what "months" means for you.

The question is whether leadership treats that as a board-level risk or a ticket in the IT queue.

Based on what I've seen so far, most are still treating it as the latter. The Five Eyes are telling you it's the former.
