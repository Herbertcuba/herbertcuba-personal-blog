---
title: "The Highways Are Being Built: WebMCP, TOON, and the Infrastructure Era of AI"
date: 2026-04-06
excerpt: "---"
layout: post.njk
---

title: "The Highways Are Being Built: WebMCP, TOON, and the Infrastructure Era of AI"
date: 2026-03-15
excerpt: "Nobody writes headlines about asphalt. But without it, nothing moves. WebMCP, TOON, and headless CMS are the motorways of the AI agent era — and the companies laying them now will own the traffic."
featuredImage: "/images/posts/highways-ai-agents.webp"
layout: post.njk
tags: ["ai", "infrastructure", "strategy", "webmcp"]
---

# The Highways Are Being Built: WebMCP, TOON, and the Infrastructure Era of AI

Nobody writes headlines about asphalt.

Nobody tweets about drainage systems or gets excited about surveying stakes driven into dirt along a future highway corridor. And yet, every single thing we depend on — every delivery, every commute, every economy — runs on infrastructure that someone, at some point, had the foresight to build before the demand arrived.

I think we're in that exact moment with AI right now. And I think most of the industry is looking at the wrong thing.

## The pattern repeats

In the mid-1990s, a handful of engineers were laying fiber optic cable under oceans and across continents. They were designing protocols — TCP/IP, HTTP — that almost nobody outside of academia understood or cared about. The exciting stuff was Netscape, maybe Yahoo. The protocols were boring. The cable-laying was backbreaking and invisible.

But then Google showed up. Then Amazon. Then social media reshaped how a billion people communicated. None of it would have been possible without the boring infrastructure that preceded it by a decade.

The same thing happened in the 2010s. AWS was plumbing. REST APIs were standards documents. Mobile networks were cell tower permits and spectrum auctions. Nobody outside of tech circles thought much about any of it. And then Uber appeared. Airbnb appeared. Streaming replaced cable. All of it was riding on infrastructure that had been quietly built while everyone was busy debating whether the iPhone was a fad.

I wrote about this pattern in my [Six Unlocks](https://cubagarcia.com/posts/2026-03-14-six-unlocks-ai-ambition/) piece — the idea that we're deep in what I called the "plumbing phase." The work that feels unsexy but decides everything.

Here's where I think we are right now:

| Era | Infrastructure | "Boring" work | Killer app (came later) |
|-----|---------------|---------------|------------------------|
| 1990s | TCP/IP, fiber, HTTP | Cable laying, protocol design | Google, Amazon |
| 2010s | Cloud, APIs, mobile | AWS setup, REST standards | Uber, Airbnb |
| 2026 | WebMCP, TOON, headless CMS | Structured data, agent APIs | ??? |

That "???" is the whole point. We don't know what the killer apps will be. But we can see the roads being built.

## WebMCP: the HTTP of the agent web

This is the one that makes me sit up straight. WebMCP landed in Chrome 146 Canary earlier this year — a joint effort between Google and Microsoft, heading toward W3C standardization.

The idea is straightforward: websites can expose structured tools to AI agents through a browser API called `navigator.modelContext.registerTool()`. Instead of an AI agent trying to scrape a website, clicking buttons, reading DOM elements, and hoping the layout hasn't changed — the site just tells the agent what it can do.

One structured API call replaces twenty fragile browser-scraping interactions.

If that sounds familiar, it should. It's the same leap we made from screen-scraping mainframe terminals to using HTTP APIs. We went from brittle, presentation-dependent hacks to clean, structured, reliable communication. WebMCP does the same thing for the agent era.

My take: this is the single most important web standard since REST. When every website can expose its capabilities as structured tools that agents understand natively, we get a fundamentally different internet. Not a human-readable web with AI awkwardly taped on top — an agent-native web where machines and humans coexist as first-class consumers.

We're not there yet. But the standard is being written, the browsers are implementing it, and the big players are aligned. That alignment matters more than any individual feature.

## TOON: making data speak agent

While WebMCP solves how agents talk to websites, TOON — Token-Oriented Object Notation — tackles something more subtle: how we format data so that LLMs can actually work with it efficiently.

TOON is a compact alternative to JSON designed specifically for LLM consumption. It uses YAML-like indentation combined with CSV-style tabular arrays, and the results are striking: 40% fewer tokens with slightly better accuracy (76.4% vs 75.0% in benchmarks across four models). You can find the spec and TypeScript SDK at [github.com/toon-format/toon](https://github.com/toon-format/toon).

The sweet spot is uniform arrays of objects — think product catalogs, real estate listings, inventory data, anything tabular. Exactly the kind of structured content that businesses have tons of and that agents will need to consume at scale.

In my experience working with CMS migrations and content architecture, I've seen how much waste lives in data formatting. We send massive JSON payloads full of curly braces, quotation marks, and repeated key names — all of which eat tokens and cost money without adding information. TOON strips that away. It's a compression protocol for the agent economy.

This is the kind of boring, incremental improvement that compounds. Each token saved is money saved and latency reduced. At scale, across millions of agent interactions per day, a 40% reduction changes the economics of everything.

## MCP: the universal adapter

Anthropic's Model Context Protocol deserves mention here because it completes the picture. MCP is becoming the standard for how AI agents connect to tools and data sources — a universal adapter between models and the systems they need to interact with.

Where WebMCP handles the browser-to-agent relationship, MCP handles the agent-to-everything-else relationship: databases, APIs, file systems, third-party services. Together, they form a complete connectivity layer. The agent can talk to websites through WebMCP and to backend systems through MCP.

What strikes me about MCP's adoption is how quickly it went from Anthropic's internal project to an industry-wide standard. That speed signals real demand — developers and companies were already building these connections ad hoc, and MCP gave them a shared language.

## Headless CMS: the roads these highways connect to

This is where my day-to-day work intersects with all of this. I spend a lot of time helping organizations think about content architecture and CMS strategy, and the connection to the agent era is direct.

A headless CMS — content stored as structured data, served through clean APIs, decoupled from any specific frontend — is inherently agent-ready. The content is already machine-readable. The APIs already exist. When agents start consuming digital presence at scale, organizations with structured content will be ready. Organizations still locked into monolithic, presentation-coupled CMS platforms will need to rebuild.

I've been telling teams this for a while now: your CMS migration isn't just a technical upgrade. It's infrastructure positioning. You're building the roads that agents will drive on. The question is whether your roads will be paved or dirt tracks.

When you combine headless CMS with WebMCP exposure and TOON-formatted data delivery, you get something powerful: a complete stack where content is created once, structured properly, and served to both human visitors and AI agents through native, efficient channels. No scraping. No guessing. No wasted tokens.

## Why the boring stuff matters most

I keep coming back to a line from my [Strategic Velocity](https://cubagarcia.com/posts/write-blog-article-the-coming-era-of-strategic-velocity/) article: speed of insight requires infrastructure that can keep up. You can have the best AI models in the world, but if the data they're consuming is trapped in PDFs, buried in legacy CMSs, or locked behind presentation layers that require screen-scraping — the speed bottleneck isn't the model. It's the plumbing.

The companies that understand this are already moving. They're migrating to headless CMS. They're structuring their content for machine consumption. They're watching WebMCP and planning how to expose their services as agent-callable tools. They're evaluating data formats like TOON for efficiency gains.

They're building highways while everyone else is still debating what kind of car to buy.

The killer apps of the AI era will come — I'm sure of it. We just can't predict exactly what they'll look like, the same way nobody in 1994 could have predicted Google, and nobody in 2010 could have predicted that a startup would let strangers sleep in each other's apartments.

But here's what we can predict: whatever those apps turn out to be, they'll run on infrastructure. They'll need structured data, efficient protocols, and clean connectivity. The organizations building that infrastructure today are the ones that will carry the traffic tomorrow.

Nobody writes headlines about asphalt. But without it, nothing moves.
