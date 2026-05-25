---
title: "You Know How to Manage a Database Dependency. You Don't Know How to Manage an LLM One."
date: 2026-05-16
excerpt: "Every dependency management practice you know was designed for deterministic systems. LLMs break all of it."
featuredImage: "/images/posts/llm-dependency-management.webp"
layout: post.njk
tags:
  - ai
  - engineering
  - reliability
---

When a database returns the wrong data, you have a bug. When a model update changes how your LLM summarizes text, you have... what, exactly? An incident? A regression? A feature? Most teams don't have an answer, which means they also don't have a test for it.

That gap is not small. It's where AI systems quietly fall apart.

---

## The Dependency Model You Know

Every software engineer has internalized a model of what a dependency is. A library at version `2.4.1` behaves the same today as it did last Tuesday. A database query against the same schema returns the same rows. A third-party API, when called with the same inputs and the same auth, returns the same response — or a predictable error.

From that baseline, we built an entire discipline. Pin your versions. Write contract tests. Run integration suites against real endpoints in staging. When a dependency changes in a breaking way, you get a semver bump, a changelog, maybe a deprecation notice. You have signal. You can respond.

That model is so deeply embedded in how we think about software reliability that we apply it instinctively — even when it doesn't fit.

LLMs don't fit.

---

## The Nondeterministic Dependency

An LLM API is what I'd call a **Nondeterministic Dependency**. The same call, with the same prompt, at the same temperature, can return meaningfully different outputs across requests. That's not a bug in the dependency — it's the point. The stochasticity is the feature.

But the implications compound quickly. Add in the fact that model providers update base models without treating it as a breaking API change — no semver, often no notice — and you have a dependency that is both unpredictable by design and silently mutable over time.

I think about this like a database that spontaneously reorganizes its own query planner on a Tuesday and doesn't tell you. Except instead of a performance regression, you get a behavioral one. Your summaries get longer. Your extracted entities miss edge cases they used to catch. Your tone classification drifts. None of this shows up in your test suite because your test suite is checking for exact outputs, and exact outputs are the wrong thing to check for.

This is **Silent Model Drift** — the gradual, invisible shift in functional behavior that happens when the model underneath your prompts changes, and you have no mechanism to detect it.

---

## What Your Current Test Suite Actually Catches

Here's what a typical integration test for an LLM-backed feature looks like in the wild: call the endpoint, assert the response isn't empty, maybe assert it contains a keyword or two, call it green.

Some teams go further. They snapshot outputs from a "known good" run and diff against them on subsequent runs. That's closer to right, but it fails in both directions. It fires false positives on harmless variation. It misses real behavioral regressions because the output still looks plausible — it's just wrong in ways the snapshot doesn't capture.

The problem is the frame. We're treating LLM outputs like binary artifacts. Pass or fail. Match or don't. That's the wrong layer to test at.

What you actually want to know is: does this output still satisfy the behavioral contract that justifies its existence in the product? Does the summary still cover the three key points? Does the extracted JSON still conform to the schema? Does the rewritten text still preserve the original meaning? Those are property tests, not equality tests, and writing them requires a different mental model.

---

## Behavioral Contract Testing

**Behavioral Contract Testing** is the practice of asserting properties of LLM outputs rather than their exact content. Instead of `assert output == expected_string`, you write assertions like: the output is under 200 words, the sentiment is negative, the structured data contains a valid date field, the entity list includes at least one named person from the input.

Some of these you can write in code. Others — especially semantic ones — require a second LLM as a judge, which introduces its own reliability questions. That's a real trade-off worth thinking through.

But the core shift is conceptual. You're not testing that the model returned a specific string. You're testing that the behavior of your system is still within the bounds that make it useful. That's a contract with the product, not a contract with the model weights.

Simon Willison made an observation recently that's been rattling around in my head: the framing of "11 agents is meaningless" — the point being that agent count is a vanity metric, and what actually matters is whether the behavior is reliable and recoverable when it isn't. I'd extend that: it's not just about agent count. It's about whether any of your LLM integrations have the observability to tell you when they've quietly stopped doing what you built them to do.

---

## Canary Rollouts for Model Upgrades

When your database provider updates their query engine, you probably don't cut traffic to the new version before running regression tests. With LLMs, you should — because "regression" is harder to define, and drift can be subtle.

The teams I've seen handle this well treat model upgrades the same way they treat deploys. Canary rollout. Shadow scoring. A/B testing on behavioral metrics. Before shifting 100% of traffic to a new model version, they run both in parallel and score the outputs on the dimensions that matter for their use case. Not "is this output the same" but "is this output still good."

That requires having defined what "good" means before the upgrade, which is harder than it sounds. Most teams haven't done that work. They integrated the LLM when it was working well and moved on, without codifying what "working well" actually meant in measurable terms.

The result is an AI stack that becomes untouchable. Nobody wants to upgrade because nobody knows what will break. Nobody changes prompts because last time something unexpected happened. The system calcifies around whatever behavior it exhibited at integration time, including its bugs.

---

## The Bigger Implication

This connects to something I've been thinking about in terms of AI provider fragility more broadly. If you're building with a single LLM provider and have no real plan for what happens when they change pricing, degrade reliability, or deprecate a model — you've created a dependency you can't manage.

The engineering discipline for managing that risk starts at the integration layer. It's not primarily about picking a second provider as a fallback. It's about building your LLM integration so that you actually understand its behavior well enough to replicate it, migrate it, or evaluate a substitute. You need behavioral contracts before you can swap anything out.

Provider redundancy without that discipline is just complexity. You've added a second vendor you also don't understand.

---

## Where to Start

I'm not going to pretend this is a solved space with a clean playbook. It isn't. But there are a few things that meaningfully reduce the risk.

First, define behavioral properties for every LLM call in your system. What properties must the output satisfy for the feature to work correctly? Write those down. Then write tests for them — even rough ones.

Second, log everything. Not just failures. Full input/output pairs, with timestamps and model version identifiers. Distribution shift in real outputs is one of the few signals you'll get that something has changed, but only if you're looking.

Third, treat model upgrades as you would a dependency upgrade with an unknown changelog. That means evaluation before cutover, not after.

The teams building AI systems that are actually reliable over time aren't doing anything magical. They're applying the same rigor that good engineers apply to any dependency — they've just adapted it for a dependency that doesn't behave like any they've managed before. The adaptation is the hard part. The rigor is the same.

The question isn't whether your LLM dependency will drift on you. It will. The question is whether you'll know when it happens.
