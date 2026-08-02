---
title: "96% of What You Pay for Is Text You Already Sent"
date: 2026-08-02
excerpt: "One tracker logged 3.77 billion tokens in a single day of agentic coding. 96% was the same context resent on every turn. Context is a consumable engineering resource, and it deserves the same rigor as memory management."
layout: post.njk
tags: ["ai", "agentic-ai", "engineering"]
theme: agentic-engineering
permalink: /drafts/af3afd91/
---

In one day of agentic coding, one engineer logged 3.77 billion tokens across 143 threads. 96% of that traffic was text his setup had already sent. Four percent was new information.

The engineer is Nate B. Jones, and he [published the numbers](https://www.youtube.com/watch?v=Y8vAQ1FgNbM) along with the tracker that produced them. I run agent swarms every day, and his number stopped me. I don't know my own ratio. My logs are scattered across providers and I have never consolidated them, which is an odd gap for someone who thinks about agent economics for a living. That gap is why this piece exists.

One person's tracker is one person's tracker, so triangulate. Manus, a company running a production agent at scale, [reports an average of 100 input tokens for every output token](https://manus.im/blog/Context-Engineering-for-AI-Agents-Lessons-from-Building-Manus) in its agent loop. Input dominates the bill. And [Anthropic's pricing](https://docs.anthropic.com/en/docs/build-with-claude/prompt-caching) tells the same story from the other side: a cache read, input the model has seen before, costs a tenth of fresh input. The providers know exactly where your money goes.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Most of the token spend in an agentic workflow is text you already sent. Context is a consumable resource with compounding cost, and the habits that control it are boring and cheap to adopt.</p></div>

Caching and cheaper models both earn their place, and I will get to caching below. But the biggest lever sits earlier: how much you send at all.

## Context is a consumable resource

The physics of the tool explain the 96%.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Every turn resends the whole conversation, so threads get expensive in a curve, and stale context degrades answers on top of the cost. Treat context like memory in C: allocate, use, free.</p></div>

A token is the unit of text a model reads and writes, roughly three quarters of a word. The context window is everything the model can see at once, its working memory. And a language model has no memory between requests. None. Every turn, your agent framework takes the full conversation, the system prompt, the tool definitions, every message, every file the model opened, and sends it again with the new question stapled to the end.

Say I ask an agent to fix a checkout bug. The cart total ignores a discount code. Turn one sends the system prompt, the tool list, and the bug report. Turn two resends all of that, plus the model's first reply, plus the file it opened. By turn twenty, I am resending nineteen replies and a pile of file contents to ask one more question. The thread does not get expensive in a straight line. It gets expensive in a curve, because every new turn pays for every old turn.

I think about this the way C programmers think about memory. You allocate, you use, you free. Leak memory and the process bloats until it dies. Context works the same way. It is a consumable engineering resource with compounding cost, and it deserves the same rigor.

The stale part of a long thread deserves its own name, so here is one: context debt. Like technical debt, it charges interest. The interest comes due on every turn, in dollars. And it costs accuracy too. A [2023 study out of Stanford and Berkeley](https://arxiv.org/abs/2307.03172) found that models get measurably worse at using information buried in the middle of long contexts. The 300k token thread is a liability twice: once on the invoice, once in the answer.

Any team that cannot state its reuse ratio will misprice its agent workloads, and badly. A team with no meter on it is taking the invoice's word for its own behavior.

## Five ways agents burn the budget

The failure modes are boring. That is exactly why they are expensive.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Forever threads, whole files, raw PDFs, retry loops, and fat tool servers. All five are the same bug wearing different clothes: sending more than the question needs.</p></div>

First, the forever thread. You fixed the checkout bug in the same thread where you also planned next quarter and argued about naming. Now every new request carries hundreds of thousands of stale tokens, and the model has to wade through all of it before it can think. You pay for the wading.

Second, whole files instead of three lines. The discount logic lives in twelve lines of pricing.py. The agent reads all 2,000 lines of checkout.py to find them. I think of this as grepping with your eyes, and it is the most expensive search engine you own. Search first, send the lines.

Third, raw PDFs and screenshots. The 40 page discount spec dropped into the window as a PDF costs vastly more than the two paragraphs you actually need. Extract the text. Better, extract the section.

Fourth, retry loops that resend the envelope. Many agents run on a pattern called ReAct, short for reason and act. The model thinks, calls a tool, reads the result, thinks again. Every cycle resends the growing transcript. A tool that fails ten times means ten copies of everything, sent to produce one error message.

Fifth, tool servers that eat the window before breakfast. MCP, the Model Context Protocol, is a standard way to plug tools into a model. Connect a few generous MCP servers and the tool definitions alone can burn around 55,000 tokens before the model reads your first sentence. That is overhead, paid again on every single request.

<div class="scifi">
<span class="scifi__label">Meanwhile, in science fiction</span>
<p class="scifi__film">Edge of Tomorrow</p>
<p>In Edge of Tomorrow, Tom Cruise's character relives the same battle over and over. Every loop resets the world, but he keeps his memory, so each run gets sharper. He skips what he already knows and spends the loop on what is new.</p>
<p>Your model lives that movie in reverse. Every turn is a fresh loop, and it remembers nothing. You are the memory. You decide what it carries into the next run, and the lazy default is to hand it everything: the full transcript, every file, every dead end.</p>
</div>

## The practices that move the number

None of this needs new tooling. It is habits, plus one query against your logs.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Clean threads, carry the artifact, cap the output, pre-search yourself, smallest model that passes, stable prefix for the cache. Boring habits, real money.</p></div>

One caveat before the habits. Modern harnesses already compact long threads automatically. Claude Code, Cursor, and friends will summarize old turns when the window fills. That helps, and it is a lossy default: the harness decides what to forget, on the model's schedule, and you keep paying for whatever it decides to keep. Deliberate hygiene means you decide, before the request goes out.

Start a clean task when the job changes. The checkout bug is fixed, the thread is done. New job, new thread. In my experience, this one habit does more for the bill than any model downgrade I have tried. I think it is also the cheapest intervention on this list, because it costs one click.

Carry the artifact, skip the argument. When a task ends, move forward the accepted result, the diff plus three lines on why. Leave the forty turns of debate behind. Some frameworks make this explicit. LangGraph is a library that wires agent steps together as a graph and threads a state object between the steps. That state is often a TypedDict, a Python dictionary where you declare the keys and their types up front. The StateGraph, the piece that decides which step runs next, passes that tidy state along and nothing else. The mess stays out by design.

Ask for exactly the length you need. "Reply with the twelve lines and nothing else." Output tokens cost money too, and a long answer gets resent on the next turn, so verbosity bills you twice.

Pre-search sources yourself. You already know the discount logic is in pricing.py. Send that file, or those twelve lines. Making the model search a haystack you can search in one second is pure waste.

Use the dumbest model that still clears the bar. A small model can classify, route, and summarize. Escalate to the expensive one when the small one fails. Nate Jones takes this further with a layer he calls Ringer that sits between the agent and the provider, intercepts every request, and enforces hard limits. You do not need his framework to steal the idea. Put something between your agent and the API that is allowed to say no.

Then let the cache do its job. Prompt caching gives you the 0.1x price on repeated input, but only if the front of your request stays identical. Keep the system prompt and tool list stable, append new material at the end, and the reused part of every turn gets 90% cheaper on its own. Change one byte early in the request and the discount vanishes. Caching rewards hygiene. It cannot substitute for it.

The cost of getting here is low: one afternoon with your request logs, a team norm that a thread ends when the job ends, maybe a small proxy in front of the API once you want hard limits. No new platform, no migration, no procurement cycle. The bar is attention, which is also why it stays undone.

If your agent logs the raw API responses, most providers already split fresh input from cached input in the usage block. With one JSON object per request in a log file, your reuse ratio is a few lines of jq, a command line tool for JSON:

```bash
jq -s 'map(.usage) |
  { fresh:  (map(.input_tokens) | add),
    cached: (map(.cache_read_input_tokens // 0) | add) } |
  .cached / (.fresh + .cached)' requests.jsonl
```

That is your reuse ratio, or at least a rough proxy for it. If the number comes back above 0.5, most of what you pay for is text you already sent. Jones's tracker suggests it will come back a lot higher.

## Cost per accepted result

The industry quotes token prices the way airlines quote seat prices. It is the visible number. It is rarely the decisive one.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>The KPI is cost per accepted result: total spend to land one change you actually merge. Context hygiene moves that number directly, and at org scale it becomes a budget line someone needs to own.</p></div>

My take: the KPI is cost per accepted result. How much did you spend, end to end, to produce one change you actually merged, one answer you actually used? Token price is an input to that number. Context hygiene is the multiplier.

It works in two directions at once. Less input per turn shrinks every request. And cleaner context raises the odds the answer is right the first time, because the model reasons over the twelve lines that matter instead of 2,000 lines of noise. Fewer retries and smaller envelopes mean cheaper accepted results.

Now scale it. Say 200 developers each push 50 million tokens a day through agent loops, a fraction of what Jones's setup does. That is 10 billion tokens a day. At his ratio, 9.6 billion of those are reused input. Even at cache-read prices, call it $0.30 per million tokens, that is close to $3,000 a day spent on text already sent. Roughly a quarter of a million dollars a quarter for one mid-size engineering org, or about $5,000 per seat per year. Multiply that against your own headcount and you get a number a CFO will ask about. The teams that can answer it are the teams where someone owns the context budget. I think every org past a handful of seats needs a named owner for that number. In a governed setup the owner is the platform team, the same people who own the cloud bill and the slow query log, and the report lives where the cloud bill lives: the monthly FinOps review.

How do you get 200 developers to actually close their threads? The same way you get them to write tests. Make the norm a default. Set a thread limit in the harness config. Put the team's reuse ratio on the dashboard next to build time. People follow defaults, and the owner watches the number.

There is a second reason the owner earns their seat. A bounded, curated context makes every agent run reconstructable: what the model saw is what someone decided to show it. As AI regulation tightens, that record stops being optional.

## You rent the discount, you own the meter

The savings from better hygiene have more than one claimant.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>The cache discount is vendor-controlled and can be repriced at the next contract renewal. Your instrumentation is portable and stays yours. Build the part you own.</p></div>

Today the provider takes a share through cache pricing. The discount for a stable prefix is real money, and the vendor still collects on every cached token you resend. Tomorrow nothing stops repricing. The discount lives on a vendor's pricing page, and pricing pages change at contract renewal. The discount is rented.

The instrumentation is owned. Your logs, your ratio, your norms: they travel with you to any provider and survive every pricing change. The team that knows its reuse ratio can defend its agent budget in a review and negotiate from numbers. A team without one negotiates from vibes.

This is why I think context discipline beats model upgrades for cost. A cheaper model shaves the price of each token. Hygiene removes the tokens. Only one of those compounds. One honest limit on the claim: for one-shot tasks and frontier reasoning work where broad context is the whole point, hygiene buys little. The claim covers looping, multi-turn agent work, which is where the bills are.

I don't know where the floor is. I do know where the meter starts: one query against your logs, run tonight. I will be running it on mine.

This is the orchestration thesis at the smallest scale there is. Decide what enters the room. Carry forward only what earned its place. The cheapest token is the one you never send.
