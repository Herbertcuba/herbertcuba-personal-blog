---
title: "When AI Gets So Good That Its Creators Choose Defense Over Profit"
date: 2026-04-08
excerpt: "Anthropic built a model so capable at finding software vulnerabilities that instead of selling it, they called their biggest competitors and said: we need to work on this together. Project Glasswing is not a security product — it's a capability acknowledgment."
featuredImage: "/images/posts/glasswing-capability-leap.webp"
layout: post.njk
tags: ["ai", "cybersecurity", "enterprise", "strategy", "leadership"]
---

Anthropic just did something unusual. They built a model so capable at finding software vulnerabilities that instead of selling it, they called their biggest competitors and said: we need to work on this together.

Project Glasswing launched this week with a partner list that reads like a who's-who of tech: AWS, Apple, Google, Microsoft, NVIDIA, JPMorgan, CrowdStrike, Cisco, Broadcom, Palo Alto Networks, and the Linux Foundation. Twelve organizations that compete fiercely on almost everything — united around a single model called Claude Mythos Preview.

The model found thousands of zero-day vulnerabilities across every major operating system and every major web browser. Autonomously. Without human steering.

That sentence deserves a pause.

## What Mythos Actually Did

Three examples from the announcement stand out:

A **27-year-old vulnerability in OpenBSD** — one of the most security-hardened operating systems in existence, used to run firewalls and critical infrastructure. The flaw allowed an attacker to remotely crash any machine just by connecting to it. Twenty-seven years of expert human review missed it.

A **16-year-old vulnerability in FFmpeg** — the video encoding library used by essentially every piece of software that touches video. Automated security testing tools had hit the vulnerable line of code five million times without catching the problem. Mythos caught it on the first pass.

And a **chain of Linux kernel vulnerabilities** that the model found and linked together autonomously — escalating from ordinary user access to complete machine control. Not one bug. A chain of them, composed into an exploit path, without a human telling it where to look.

These aren't edge cases cherry-picked for a press release. The announcement says thousands of high-severity vulnerabilities. Thousands. And the benchmarks back it up: on CyberGym (vulnerability reproduction), Mythos scores 83.1% versus Opus 4.6's 66.6%. On SWE-bench Verified, it hits 77.8% versus 53.4%. On Terminal-Bench, 93.9% versus 80.8%.

This isn't incremental improvement. This is a capability threshold being crossed.

## The Decision That Matters More Than the Model

Here's what I find most significant about Glasswing: the business decision.

Anthropic built a model that is dramatically better than anything else available at finding and exploiting software vulnerabilities. The obvious commercial play would be to sell it — to security firms, to governments, to enterprises desperate to harden their systems. The market for this capability is enormous.

They chose not to.

Instead, they committed $100M in usage credits, donated $4M to open-source security organizations, and created a controlled-access partnership where the model is used exclusively for defense. After the preview period, pricing is set at $25/$125 per million tokens — accessible, not extractive.

This tells you something about where the capability frontier actually sits right now. When a company voluntarily restricts access to its most capable product and invites competitors to share it, the capability has crossed a line where unrestricted release creates more risk than revenue. Anthropic isn't being altruistic for fun. They're being strategic about a capability that, if proliferated carelessly, would make the internet meaningfully less safe.

## What This Means for Your Codebase

If Mythos can find a 27-year-old bug in OpenBSD — software maintained by some of the most paranoid security experts on the planet — what does that say about the average enterprise codebase?

Your systems have vulnerabilities that no human review and no existing automated tool has caught. That's not speculation. It's the mathematical implication of what Mythos demonstrated on the most hardened software in existence.

The uncomfortable truth: the same capability trajectory that produced Mythos will produce similar models from other labs within months. Anthropic's announcement explicitly acknowledges this — they formed Glasswing because "it will not be long before such capabilities proliferate, potentially beyond actors who are committed to deploying them safely."

This creates an asymmetry. Defensive scanning takes time to set up, validate, and act on. Offensive exploitation just needs one vulnerability. The window between "AI finds the bug" and "attackers exploit it" is collapsing. CrowdStrike's CISO put it directly: "What once took months now happens in minutes with AI."

## The Capability Leap Nobody Saw Coming

Most of the AI conversation in enterprise circles is still about productivity. Writing code faster, generating content, summarizing documents. Useful things. Incremental things.

Glasswing is not incremental. It signals that frontier models have crossed into a domain where they outperform elite human specialists at tasks that require deep reasoning about complex systems. Finding a vulnerability in the Linux kernel isn't pattern matching — it requires understanding memory management, privilege boundaries, race conditions, and how they interact across millions of lines of code. Chaining multiple vulnerabilities into an exploit path is harder still.

The SWE-bench Multilingual score jump — from 27.1% (Opus 4.6) to 59.0% (Mythos) — tells a similar story in software engineering broadly. This isn't a model that got a bit better at coding. It's a model that crossed from "useful assistant" to "autonomous engineer capable of solving problems that stump experienced developers."

Enterprise leaders need to internalize this: the AI capability curve is not linear. It takes leaps. And the next leap lands in your domain whether you're ready or not.

## What to Do With This Information

Three things, in order of urgency:

**Accept that your security posture is about to be tested by AI-grade attackers.** Not necessarily by Mythos itself — but by models approaching its capability level that will be available to threat actors within the next year. Your current security tooling was designed for human-speed, human-capability attacks.

**Watch how Glasswing partners report results over the next 90 days.** Anthropic committed to a public report. The specific vulnerability classes they find, and the patterns in where those vulnerabilities hide, will be the most valuable security intelligence published this year.

**Re-evaluate your security investment through an AI-capability lens.** The question is no longer "can we afford AI-powered security scanning?" It's "can we afford not to have it, given that AI-powered exploitation is arriving regardless?"

## The Bigger Picture

Project Glasswing is a proof point for something larger: AI capability is reaching levels where responsible deployment requires collective action. No single company — not even Anthropic — can handle what Mythos represents alone.

The twelve partners aren't collaborating because it's good PR. They're collaborating because the alternative — uncoordinated release of this capability tier — creates risks that threaten everyone's infrastructure, including their own.

That's the real signal here. Not the benchmarks. Not the zero-days. The fact that the most competitive companies in technology looked at what AI can now do and concluded: this one, we handle together.

And here's the thing worth sitting with: Mythos is a preview. Not a product. Anthropic explicitly says they plan to bring Mythos-class capabilities to a future Opus release once they've developed adequate safeguards. That means the model that just found thousands of zero-days autonomously is the starting point, not the ceiling.

We are going to get an extraordinarily capable model. And then a better one. And then another. The cybersecurity application is just the most dramatic demonstration of a broader truth: AI capability is compounding faster than our institutions, our security practices, and our mental models can keep up with.

Glasswing landed in cybersecurity because that's where the gap between AI capability and human capability became undeniable first. It won't be the last domain where that happens. We are still at the very beginning of this transformation — and the beginning is already rewriting the rules.
