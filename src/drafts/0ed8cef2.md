---
title: "Vibe Coding Is a Consumer Experience. Accountability Is Still Your Job."
date: 2026-04-28
excerpt: "Vibe coding is a fine way to build a prototype on a Sunday. It's a terrible way to run an engineering organization."
featuredImage: /images/posts/vibe-coding-accountability-gap.webp
permalink: /drafts/0ed8cef2/
tags:
  - engineering
  - ai-strategy
  - accountability
---

Vibe coding is a fine way to build a prototype on a Sunday. It's a terrible way to run an engineering organization.

Matthew Yglesias put it cleanly this week: *"I don't want to vibecode — I want professionally managed software companies to use AI coding assistance to make more/better/cheaper software products."* Simon Willison flagged it the same day under a tag that tells you everything: "agentic-engineering." Not vibe coding. Agentic engineering. The distinction isn't semantic. It's the whole argument.

**The vibe coding debate isn't a tool debate. It's a context debate.** And almost no one is making that distinction with any precision.

## What vibe coding actually is

Vibe coding — the term Andrej Karpathy popularized — describes a mode of development where you describe what you want, the AI generates code, and you accept it without necessarily reading every line. You're steering by feel. You're moving fast. You're not verifying every function. You're trusting the output to roughly approximate your intent, and if something breaks, you prompt your way out of it.

That is a perfectly reasonable approach for certain things. Throwaway experiments. Personal tools no one else depends on. Sunday afternoon prototypes. Low-stakes explorations where the cost of being wrong is a wasted afternoon.

I use it. Most people building with AI use it. There is nothing wrong with it in context.

**The problem isn't vibe coding. The problem is the organizational context collapse — when a consumer experience gets imported wholesale into a professional accountability structure.**

That's what I'd call the **Accountability Gap** — the space that opens up between what AI-generated code does and what any human in the organization is prepared to stand behind. When "the AI wrote it" becomes an acceptable answer to "why does this behave this way in production," the gap is already open. It's just a question of when something falls through it.

## Why the consumer framing matters

Think about how consumer products are designed. Spotify doesn't hold you accountable for your playlist. Google Maps doesn't ask you to verify its routing algorithm. The consumer experience is optimized for fluency, for the feeling of capability, for speed. You don't need to understand the system — you just need to get the output you wanted.

That design logic makes complete sense for consumer software. And it's exactly what makes vibe coding feel so frictionless. Modern AI coding tools are consumer products. They are optimized for the experience of generation. The interface is smooth. The output appears immediately. The prompt-to-code loop is satisfying.

**But professional software engineering is not a consumer experience. It's an accountability structure.**

When you ship code into production, you are not accepting a playlist. You are signing your name to a claim about how a system behaves — for customers, for colleagues, for the business that depends on it. You are asserting: *I know what this does. I am responsible for what this does. When it breaks, that is my problem to fix.*

That accountability doesn't evaporate because an AI wrote the first draft.

## The Orchestrator and the signature

There's a framing I keep coming back to when thinking about AI in professional engineering. The engineer's role is shifting from execution to orchestration — from writing every line to designing the system, setting the standard, and verifying the output. I think this shift is real and it's good. It's a better use of human intelligence.

**But the Orchestrator doesn't get to waive accountability. The Orchestrator's job is to hold the line.**

This is what gets lost in the vibe coding hype. People correctly observe that AI can accelerate development. They correctly observe that you don't need to manually write every function anymore. Then they make the leap that shouldn't follow — that because the AI wrote it, the accountability is somehow distributed or dissolved.

It isn't. *Every line of code remains the engineer's responsibility.* That's not a policy I invented. That's the logical consequence of what it means to be the professional in the room.

The question you need to be able to answer is this: if something in production behaves unexpectedly — if a critical function runs wrong under a specific condition, if a security assumption fails, if a data model causes corruption — can anyone on your team explain what the code does and why? Or did it arrive via a prompt chain nobody fully read, accepted because the tests passed, shipped because nobody pushed back?

**If the answer is "we accepted it because the AI seemed confident," you don't have an engineering organization. You have an autocomplete operation.**

## What professional AI-assisted development actually requires

I want to be clear: I am not arguing against AI-assisted development. I'm arguing for building the right architecture around it. The Yglesias framing is exactly right — the goal is professionally managed software companies using AI assistance to build more, better, cheaper software. That requires three things that vibe coding, by design, doesn't enforce.

**1. Comprehension ownership.** Someone on the team — specifically, the engineer closest to the code — needs to understand what the AI generated at sufficient depth to explain it, modify it, and debug it under pressure. Not line by line for trivial utility functions. But for any logic that touches business-critical paths, security, data integrity, or performance at scale. AI can draft it. The engineer owns the comprehension.

**2. Rigor calibration.** Not every part of a system requires the same level of scrutiny. That's not a concession to laziness — it's intentional craft. The mistake vibe coding as an organizational norm makes is applying consumer-grade scrutiny uniformly. A thoughtful engineering team assigns explicit rigor levels: high scrutiny on the paths that matter most, lighter scrutiny on the scaffolding. The calibration is deliberate. It's not "vibe."

**3. Accountability naming.** For any significant feature in production, there is a name attached to it. An engineer who can be asked: "You shipped this — why does it work this way?" That name isn't punishment. It's craft. It's the difference between a professional who signed their work and an autocomplete output that escaped into the world.

## What this means for teams building with AI now

I think the organizations that will build the best software in the next five years are not the ones that adopt AI coding tools the fastest. They're the ones that build the **Accountability Architecture** — the human layer of design, judgment, and ownership that makes AI assistance professionally safe.

That architecture looks like this:

- AI generates, humans verify — with standards for what verification means at each rigor tier
- Every significant piece of shipped code has an owner who can explain it under pressure
- "The AI wrote it" is the beginning of an explanation, not the end of one
- Agentic tools run inside a structure of human intent, not instead of one

**The consumer AI experience optimizes for fluency. The professional engineering model optimizes for trust.**

Those are different things. The consumer experience asks: did I get an output that looks right? The professional model asks: do I know that this is right, and am I prepared to stand behind it when it isn't?

## The real question Yglesias is asking

When Yglesias says he wants professionally managed software companies to use AI to make more, better, cheaper software, he's not asking for vibe coding at scale. He's asking for the Orchestrator model done properly — AI as a force multiplier inside an accountability structure, not a replacement for one.

The industry conversation is starting to catch up with this. Willison's "agentic-engineering" tag is a signal. The era of treating AI coding as a novelty consumer experience is ending. The serious question now is organizational: how do you build the human architecture that makes AI-assisted software trustworthy?

I think the answer isn't complicated, but it does require something most organizations are reluctant to admit: that speed and accountability are not the same axis, and optimizing for one doesn't give you the other.

**AI can make your engineers faster. It cannot make your organization more accountable. That part is still human work.**

Craft got amplified. Trust didn't come along for free.
