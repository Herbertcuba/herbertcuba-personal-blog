---
title: "96% of What You Pay for Is Text You Already Sent"
date: 2026-07-31
excerpt: "One tracker logged 3.77 billion tokens in a single day of agentic coding. 96% was the same context resent on every turn. Context is a consumable engineering resource, and it deserves the same rigor as memory management."
layout: post.njk
tags: ["ai", "agentic-ai", "engineering"]
theme: agentic-engineering
permalink: /drafts/af3afd91/
---

I tried to fix my agent costs last month by switching to a cheaper model. The bill barely moved.

The reason was sitting in my own request logs. I was paying to send the same text, over and over, on every turn.

Nate B. Jones just put hard numbers on this. He ran a tracker across his agentic coding setup for one day and [logged 3.77 billion tokens across 143 threads](https://www.youtube.com/watch?v=Y8vAQ1FgNbM). Roughly 96% of that was reused input, the same context resent again and again. Four percent was new information.

One person's tracker is one person's tracker. So triangulate. Manus, a company running a production agent at scale, [reports an average of 100 input tokens for every output token](https://manus.im/blog/Context-Engineering-for-AI-Agents-Lessons-from-Building-Manus) in its agent loop. Input dominates the bill. And [Anthropic's pricing](https://docs.anthropic.com/en/docs/build-with-claude/prompt-caching) tells the same story from the other side: a cache read, input the model has seen before, costs a tenth of fresh input. The providers know exactly where your money goes.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Most of the token spend in an agentic workflow is text you already sent. Context is a consumable resource with compounding cost, and the habits that control it are boring and cheap to adopt.</p></div>

Most people see numbers like that and reach for prompt caching or a cheaper model. I think that optimizes the wrong variable. The lever is how much you send in the first place.

## Context is a consumable resource

The physics of the tool explain the 96%.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Every turn resends the whole conversation, so threads get expensive in a curve, and stale context degrades answers on top of the cost. Treat context like memory in C: allocate, use, free.</p></div>

A token is the unit of text a model reads and writes, roughly three quarters of a word. The context window is everything the model can see at once, its working memory. And a language model has no memory between requests. None. Every turn, your agent framework takes the full conversation, the system prompt, the tool definitions, every message, every file the model opened, and sends it again with the new question stapled to the end.

Say I ask an agent to fix a checkout bug. The cart total ignores a discount code. Turn one sends the system prompt, the tool list, and the bug report. Turn two resends all of that, plus the model's first reply, plus the file it opened. By turn twenty, I am resending nineteen replies and a pile of file contents to ask one more question. The thread does not get expensive in a straight line. It gets expensive in a curve, because every new turn pays for every old turn.

I think about this the way C programmers think about memory. You allocate, you use, you free. Leak memory and the process bloats until it dies. Context works the same way. It is a consumable engineering resource with compounding cost, and almost nobody treats it with that rigor.

The stale part of a long thread deserves its own name, so here is one: context debt. Like technical debt, it charges interest. The interest comes due on every turn, in dollars. And it costs you accuracy too. A [2023 study out of Stanford and Berkeley](https://arxiv.org/abs/2307.03172) found that models get measurably worse at using information buried in the middle of long contexts. A [2026 preprint on long agent runs](https://arxiv.org/abs/2606.29718) found that as context piles up, models start giving up early or answering with less confidence. The 300k token thread is a liability twice: once on the invoice, once in the answer.

Here is the claim I will stake on the name: any team that cannot state its reuse ratio will misprice its agent workloads, and badly. Context debt is measurable, it compounds, and right now almost nobody has a meter on it.

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
<p>Your model lives that movie in reverse. Every turn is a fresh loop, and it remembers nothing. You are the memory. You decide what it carries into the next run, and most people hand it everything: the full transcript, every file, every dead end.</p>
</div>

## The practices that move the number

None of this needs new tooling. It is habits, plus one query against your logs.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Clean threads, carry the artifact, cap the output, pre-search yourself, smallest model that passes, stable prefix for the cache. Boring habits, real money.</p></div>

Start a clean task when the job changes. The checkout bug is fixed, the thread is done. New job, new thread. In my experience, this one habit does more for the bill than any model downgrade I have tried.

Carry the artifact, skip the argument. When a task ends, move forward the accepted result, the diff plus three lines on why. Leave the forty turns of debate behind. Some frameworks make this explicit. LangGraph is a library that wires agent steps together as a graph and threads a state object between the steps. That state is often a TypedDict, a Python dictionary where you declare the keys and their types up front. The StateGraph, the piece that decides which step runs next, passes that tidy state along and nothing else. The mess stays out by design. That is the whole idea.

Ask for exactly the length you need. "Reply with the twelve lines and nothing else." Output tokens cost money too, and a long answer gets resent on the next turn, so verbosity bills you twice.

Pre-search sources yourself. You already know the discount logic is in pricing.py. Send that file, or those twelve lines. Making the model search a haystack you can search in one second is pure waste.

Use the dumbest model that still clears the bar. A small model can classify, route, and summarize. Escalate to the expensive one when the small one fails. Nate Jones takes this further with a layer he calls Ringer that sits between the agent and the provider, intercepts every request, and enforces hard limits. You do not need his framework to steal the idea. Put something between your agent and the API that is allowed to say no.

Then let the cache do its job. Prompt caching gives you the 0.1x price on repeated input, but only if the front of your request stays identical. Keep the system prompt and tool list stable, append new material at the end, and the reused part of every turn gets 90% cheaper on its own. Change one byte early in the request and the discount vanishes. Caching rewards hygiene. It does not replace it.

The cost of getting here is low. One afternoon with your request logs to compute your reuse ratio. A team norm that a thread ends when the job ends. Maybe a small proxy in front of the API once you want hard limits. No new platform, no migration, no procurement cycle. The bar is attention, which is also why it stays undone.

The first step is one number, and you can compute it tonight. If your agent logs the raw API responses, most providers already split fresh input from cached input in the usage block. With one JSON object per request in a log file, the ratio is a few lines of jq:

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

It works in two directions at once. Less input per turn shrinks every request. And cleaner context raises the odds the answer is right the first time, because the model reasons over the twelve lines that matter instead of 2,000 lines of noise and three stale files from a different task. Fewer retries and smaller envelopes mean cheaper accepted results.

Now scale it. Say 200 developers each push 50 million tokens a day through agent loops, a fraction of what Jones's setup does. That is 10 billion tokens a day. At his ratio, 9.6 billion of those are reused input. Even at cache-read prices, call it $0.30 per million tokens, that is close to $3,000 a day spent on text already sent. Roughly a quarter of a million dollars a quarter, for one mid-size engineering org. That is a number a CFO will ask about, and right now most orgs cannot answer, because nobody owns the context budget. In a governed setup that owner is the platform team, the same people who own the cloud bill and the slow query log.

Who captures the savings? Today the provider takes a share through cache pricing: the discount for a stable prefix is real, and the vendor still collects on every cached token you resend. Tomorrow nothing stops repricing. The part nobody can take back is the instrumentation itself. The team that knows its reuse ratio can defend its agent budget in a review and negotiate from numbers. The team that cannot will accept whatever the invoice says.

This is why I think context discipline beats model upgrades for cost. A cheaper model shaves the price of each token. Hygiene removes the tokens. Only one of those compounds. And the providers have already told you where this ends: cache pricing is hygiene turned into a price list. The savings from clean context exist today, waiting for anyone with a stable prefix.

I don't know where the floor is. I do know most teams are nowhere near it, because the context budget has no owner and no meter. The moment it gets both, the number starts moving.

This is the orchestration thesis at the smallest scale there is. Decide what enters the room. Carry forward only what earned its place. The cheapest token is the one you never send.
