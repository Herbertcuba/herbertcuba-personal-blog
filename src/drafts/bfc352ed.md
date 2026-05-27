---
title: "When Anthropic and OpenAI Found Product-Market Fit, the Honeymoon Ended"
date: 2026-05-28
excerpt: "Both labs repriced enterprise to full API token costs in April. The gap between consumer plans and enterprise pricing just closed — and it's the most important architectural signal of 2026."
featuredImage: "/images/posts/ai-honeymoon-ended.webp"
layout: post.njk
permalink: /drafts/bfc352ed/
tags:
  - ai
  - strategy
  - vendor-lock-in
---

The $200 I was paying Anthropic last month covered about $1,200 in compute. My enterprise clients were paying the full $1,200. In April, both labs quietly repriced — and the gap closed.

That's not a pricing story. That's a signal about what phase we're in now.

---

## The Subsidy Was Always Temporary

When OpenAI launched ChatGPT Plus at $20/month and Anthropic rolled out the Pro plan at $200/month, the economics made no sense at face value. The compute cost to serve heavy users at those price points was substantially higher than the subscription fee. Labs were burning VC capital to acquire users, train inference behavior on real workloads, and establish market position. The subsidy was the business model — at least for a while.

Enterprise customers got a different deal from day one: full token-cost API pricing. Which meant a split-screen reality for anyone paying attention. Consumers got a massive discount while engineers building production workloads paid market rate.

That spread was always going to close. The only question was when.

In April 2026, it did. Anthropic and OpenAI both repriced enterprise tiers toward full API token economics. GPT-5.5 launched at roughly 2x the per-token cost of its predecessor. The consumer plans didn't disappear — but the computational generosity behind them is being recalibrated. The labs found product-market fit. The honeymoon ended.

---

## Cohaagen Controlled the Air

There's a scene near the end of *Total Recall* where the villain, Cohaagen, makes his position explicit. He controls the oxygen supply on Mars. The colonists built their lives, their businesses, their entire existence around infrastructure they didn't own and couldn't replicate. They were fine — right up until the moment Cohaagen decided they weren't.

The colonists didn't choose dependency strategically. They just built on what was available. The infrastructure was there, it worked, it was good enough. The idea of running your own oxygen plant felt like science fiction within the science fiction.

I think about that scene a lot when I look at how engineering teams have been building AI workflows for the past two years.

The compute was cheap. The APIs were reliable. The model quality improved monthly. Every rational incentive pointed toward building on whatever was best right now. Abstractions be damned — just use the model that ships the feature. The cost of architectural independence felt theoretical, and the cost of tight coupling felt invisible.

April made it visible.

---

## What Actually Changed

The raw price increase is the easy part to understand. A pipeline that cost $3,000/month in token costs now costs $8,000. A batch summarization job that ran on Claude Opus at tolerable margins is now a budget line item that needs a conversation. These are real numbers with real consequences for real engineering teams.

But the architecture problem is worse than the math.

Teams that built tightly coupled workflows — prompts tuned specifically for one model's idiosyncrasies, output parsers calibrated to a particular response format, retrieval strategies optimized for a specific context window — now face something harder than a price increase. They face a rewrite with a deadline they didn't set.

In my experience as a Tech Director within AI, the conversation that's happening in engineering rooms right now goes roughly like this: *"Can we just switch to a cheaper model?"* And then someone opens a laptop and discovers that switching models isn't a config change. It's a project.

The prompts behave differently. The structured outputs aren't reliable in the same way. The edge cases that were handled by the expensive model's implicit reasoning now surface as bugs. What looked like a provider swap turns into a three-week remediation sprint — if you're lucky.

That's the real cost of tight coupling. Not the token price. The optionality you surrendered when you decided architecture could wait.

---

## What the Labs Are Telling You

I don't think Anthropic or OpenAI are being predatory here. I think they found product-market fit, and this is what product-market fit looks like when the product is a compute substrate.

The free lunch phase of any platform cycle is the period when the platform needs you more than you need it. During that window, pricing is generous, APIs are stable, and the platform bends backward to make adoption easy. Once the platform flips — once they have the distribution, the mindshare, the embedded workflows — the relationship rebalances. The question stops being "how do we get engineers to adopt us?" and starts being "what's the defensible price for what we've built?"

This is not unique to AI. AWS did it. Twilio did it. Stripe did it. Every platform that achieved genuine adoption eventually discovered that the customers who were most locked in were also the customers who could absorb a price increase with the least resistance.

The difference with foundation model providers is the pace. The embedding happened in months, not years. Engineering teams that were still writing decision docs in Q3 2025 were running production workloads by Q1 2026. The lock-in cycle compressed dramatically because the switching costs are cognitive and architectural, not just contractual.

---

## The Architectural Signal

Here's what I think this means for anyone building AI systems right now.

**Model-agnostic orchestration is no longer an engineering preference. It's a business continuity question.**

The teams that invested early in abstraction layers — frameworks that treat the model as a swappable dependency rather than a foundational assumption — are looking at the April repricing as a negotiating event. They can run cost comparisons. They can shift workloads. They can mix providers by task complexity. The pricing change is annoying; it's not existential.

The teams that built directly on a single provider's API, prompt format, and idiosyncratic behavior are in a different position. The April repricing isn't just annoying for them — it's the moment they discover they don't have an exit.

The practical answer isn't to switch providers. The practical answer is to design so that switching is possible.

That means abstracting your prompt logic behind interfaces that don't assume a specific model. It means separating your evaluation harness from your inference layer. It means building cost-routing logic that can send different task types to different providers based on margin requirements. It means treating any single model as a commodity input — because it is — rather than as the architecture.

None of this is radical. The tooling exists. LangChain, LlamaIndex, PromptLayer, Portkey — there are multiple mature frameworks for model-agnostic orchestration. The barrier isn't technical. The barrier is the organizational habit of optimizing for what works now rather than designing for what changes next.

---

## The Sovereignty Question

The deeper issue is ownership.

When I talk to engineering teams about this, the conversation often surfaces a belief that's worth naming directly: the assumption that whichever lab produces the best model will continue to produce the best model, will continue to be the right economic choice, and will continue to prioritize the API experience that production workloads depend on.

That assumption might be correct for the next six months. I wouldn't bet a production architecture on it.

The **AI Operating Model** that survives the next pricing cycle isn't the one with the smartest prompts — it's the one with the most portable reasoning stack. Sovereignty-ready doesn't mean running your own GPU cluster. It means owning your orchestration logic, your evaluation data, and your routing decisions, even if the inference itself lives with a third-party provider.

The question isn't which model is best. The question is: if the best model doubles in price next quarter, how long does it take your team to move?

If the answer is "weeks," you have architecture. If the answer is "I don't know," you have dependency.

---

April wasn't the end of the AI wave. It was the end of the subsidy that made the wave feel free.

The labs earned this. They built something genuinely useful, and now they're pricing it accordingly. The engineering teams that built on top of that wave have a choice about what to do next. Build for portability, or stay coupled and hope the price holds.

Hope is not an architecture.
