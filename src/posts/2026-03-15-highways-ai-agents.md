---
title: "The Highways Are Being Built: A2A, MCP, WebMCP, TOON, and the Infrastructure Era of AI"
date: 2026-03-15
excerpt: "Nobody writes headlines about asphalt. But without it, nothing moves. A2A, MCP, WebMCP, TOON, and headless CMS are the motorways of the AI agent era — and the companies laying them now will own the traffic."
featuredImage: "/images/posts/highways-ai-agents.webp"
layout: post.njk
tags: ["ai", "infrastructure", "strategy", "webmcp", "a2a", "mcp"]
---

# The Highways Are Being Built: A2A, MCP, WebMCP, TOON, and the Infrastructure Era of AI

Nobody writes headlines about asphalt.

Nobody tweets about drainage systems or gets excited about surveying stakes driven into dirt along a future highway corridor. And yet, every single thing we depend on — every delivery, every commute, every economy — runs on infrastructure that someone, at some point, had the foresight to build before the demand arrived.

I think we're in that exact moment with AI right now. And I think most of the industry is looking at the wrong thing.

## The pattern repeats

In the mid-1990s, a handful of engineers were laying fiber optic cable under oceans and across continents. They were designing protocols (TCP/IP, HTTP) that almost nobody outside of academia understood or cared about. The exciting stuff was Netscape, maybe Yahoo. The protocols were boring. The cable-laying was backbreaking and invisible.

But then Google showed up. Then Amazon. Then social media reshaped how a billion people communicated. None of it would have been possible without the boring infrastructure that preceded it by a decade.

The same thing happened in the 2010s. Cloud platforms were plumbing. REST APIs were standards documents. Mobile networks were cell tower permits and spectrum auctions. Nobody outside of tech circles thought much about any of it. And then ride-sharing appeared. Home-sharing appeared. Streaming replaced cable. All of it was riding on infrastructure that had been quietly built while everyone was busy debating whether smartphones were a fad.

I wrote about this pattern in my [Six Unlocks](https://cubagarcia.com/posts/2026-03-14-six-unlocks-ai-ambition/) piece, the idea that we're deep in what I called the "plumbing phase." The work that feels unsexy but decides everything.

The pattern is consistent. In the 1990s, the boring work was cable laying and protocol design. The infrastructure was TCP/IP, fiber, HTTP. The killer apps that followed — search engines, online retail — were unimaginable when the cables were going into the ground. In the 2010s, the boring work was cloud setup and API standards. The infrastructure was cloud computing, REST, mobile networks. The killer apps that followed — ride-sharing, home-sharing, streaming — only made sense in retrospect.

Now, in 2026, the boring work is agent protocols, structured data, and connectivity layers. The infrastructure is A2A, MCP, WebMCP, TOON, and headless CMS. The killer apps? We don't know yet. That's the whole point. We can't see them, the same way nobody laying fiber in 1994 could picture a search engine indexing the entire web.

But we can see the roads being built.

And this time, the roads are being built fast. Four distinct protocols are converging to form a complete connectivity layer for the agent era. Each one solves a different part of the puzzle.

**WebMCP** connects agents to websites. Think of it as the browser-native bridge. **A2A** connects agents to other agents across organizations, like an inter-agency phone network. **MCP** connects agents to tools and data sources, a universal adapter. And **TOON** connects raw data to LLM consumption, a compression codec that makes everything cheaper and faster.

![Protocol Map](/images/posts/highways-protocol-map.svg)

Let me walk through each one.

## WebMCP: the HTTP of the agent web

This is the one that made me sit up straight. WebMCP landed in Chrome 146 Canary earlier this year, a joint effort heading toward W3C standardization.

The idea is straightforward: websites can expose structured tools to AI agents through a browser API called `navigator.modelContext.registerTool()`. Instead of an AI agent trying to scrape a website, clicking buttons, reading DOM elements, and hoping the layout hasn't changed, the site just tells the agent what it can do.

One structured API call replaces twenty fragile browser-scraping interactions.

If that sounds familiar, it should. It's the same leap we made from screen-scraping mainframe terminals to using HTTP APIs. We went from brittle, presentation-dependent hacks to clean, structured, reliable communication. WebMCP does the same thing for the agent era.

I think this is the single most important web standard since REST. When every website can expose its capabilities as structured tools that agents understand natively, we get a fundamentally different internet. Not a human-readable web with AI awkwardly taped on top, but an agent-native web where machines and humans coexist as first-class consumers.

We're not there yet. But the standard is being written, browsers are implementing it, and the big players are aligned. That alignment matters more than any individual feature.

## A2A: agents talking to agents

WebMCP solves how an agent interacts with a website. MCP (more on that below) solves how an agent connects to tools and data. But there's a gap neither one covers: how does an agent from one organization talk to an agent from a completely different organization?

That's what the Agent-to-Agent Protocol (A2A) is built for. And the coalition behind it tells you how seriously the industry is taking this problem: over 50 partners across cloud, enterprise software, and database providers. This isn't a side project. It's a coordinated bet on interoperability.

A2A is built on HTTP, JSON-RPC 2.0, and Server-Sent Events. Familiar web standards. No proprietary transport layer, no vendor lock-in. If you've built anything on the modern web, you already understand the building blocks.

The discovery mechanism is what I find most interesting. Every A2A-capable agent publishes an Agent Card at `/.well-known/agent.json`. Think of it like a resume that machines can read. The card describes what the agent can do, what inputs it accepts, what modalities it supports (text, audio, video, images, structured data), and how to communicate with it. When one agent needs help with something outside its own capabilities, it can discover and delegate to another agent based on these published cards.

This is goal-oriented delegation, not simple function calling. An agent can hand off a complex, multi-step task to another agent and get results back hours or even days later. A2A has built-in support for long-running tasks, which is critical for real business workflows. A procurement agent negotiating with a supplier's pricing agent doesn't wrap up in 200 milliseconds.

The design is also modality-agnostic. Agents can exchange text, images, audio, video, or structured data through the same protocol. That flexibility matters because real-world agent interactions won't fit neatly into text-only channels.

I think about it this way: MCP gave agents hands to grab tools. A2A gives them a phone to call each other. And the phone book is built into the protocol through Agent Cards.

The gap A2A fills is significant. Without it, every cross-system agent integration is a custom, point-to-point connection. I've seen this before in the API era. Before REST became a shared convention, every integration was bespoke. Every partner required custom work. Scaling was painful. A2A is aiming to prevent that same fragmentation from happening in the agent era.

## MCP: the universal adapter

The Model Context Protocol has quickly become the standard for how AI agents connect to tools and data sources. It's the universal adapter between models and the systems they need to interact with: databases, APIs, file systems, third-party services.

What I find worth paying attention to is how MCP, A2A, and WebMCP together form a complete connectivity layer. Each one covers a distinct relationship. WebMCP handles agent-to-website through the browser. A2A handles agent-to-agent across organizational boundaries. MCP handles agent-to-tool-and-data within the agent's own ecosystem.

Together, an agent can browse the web (WebMCP), talk to other agents it has never met before (A2A), and plug into databases, APIs, and services (MCP). That's full connectivity. No relationship left unaddressed.

The speed of MCP's adoption signals something important. It went from an internal project to an industry-wide standard remarkably fast. Developers and companies were already building these connections ad hoc, and MCP gave them a shared language. When a standard spreads that quickly, it means the pain was already there and people were just waiting for someone to name it.

## TOON: making data speak agent

While the protocols above solve connectivity, TOON tackles something more subtle: how we format data so that LLMs can actually work with it efficiently.

TOON (Token-Oriented Object Notation) is a compact alternative to JSON designed specifically for LLM consumption. It uses YAML-like indentation combined with CSV-style tabular arrays, and the results are striking: 40% fewer tokens with slightly better accuracy (76.4% vs 75.0% in benchmarks across four models). You can find the spec and TypeScript SDK at [github.com/toon-format/toon](https://github.com/toon-format/toon).

The sweet spot is uniform arrays of objects. Think product catalogs, real estate listings, inventory data, anything tabular. Exactly the kind of structured content that businesses have tons of and that agents will need to consume at scale.

In my experience working with CMS migrations and content architecture, I've seen how much waste lives in data formatting. We send massive JSON payloads full of curly braces, quotation marks, and repeated key names, all of which eat tokens and cost money without adding information. TOON strips that away. It's a compression protocol for the agent economy.

This is the kind of boring, incremental improvement that compounds. Each token saved is money saved and latency reduced. At scale, across millions of agent interactions per day, a 40% reduction changes the economics of everything.

## Headless CMS: the roads these highways connect to

This is where my day-to-day work intersects with all of this. I spend a lot of time helping organizations think about content architecture and CMS strategy, and the connection to the agent era is direct.

A headless CMS — content stored as structured data, served through clean APIs, decoupled from any specific frontend — is inherently agent-ready. The content is already machine-readable. The APIs already exist. When agents start consuming digital presence at scale, organizations with structured content will be ready. Organizations still locked into monolithic, presentation-coupled CMS platforms will need to rebuild.

I've been telling teams this for a while: your CMS migration isn't just a technical upgrade. It's infrastructure positioning. You're building the roads that agents will drive on. The question is whether your roads will be paved or dirt tracks.

When you combine headless CMS with WebMCP exposure, A2A discoverability, MCP tool integration, and TOON-formatted data delivery, you get something powerful: a complete stack where content is created once, structured properly, and served to both human visitors and AI agents through native, efficient channels. No scraping. No guessing. No wasted tokens. And now, no isolated agents either. Your content can be discovered and consumed by agents from any organization that speaks A2A.

## Why the boring stuff matters most

I keep coming back to a line from my [Strategic Velocity](https://cubagarcia.com/posts/write-blog-article-the-coming-era-of-strategic-velocity/) article: speed of insight requires infrastructure that can keep up. You can have the best AI models in the world, but if the data they're consuming is trapped in PDFs, buried in legacy CMSs, or locked behind presentation layers that require screen-scraping, the speed bottleneck isn't the model. It's the plumbing.

The connectivity picture is clearer now than it was even six months ago. WebMCP for browsers. A2A for cross-organization agent collaboration. MCP for tools and data. TOON for efficient data formatting. Headless CMS for structured content. Each piece has a defined role. Each piece is being built right now.

The companies that understand this are already moving. They're migrating to headless CMS. They're structuring their content for machine consumption. They're watching WebMCP and planning how to expose their services as agent-callable tools. They're publishing Agent Cards so other organizations' agents can discover and interact with them. They're evaluating data formats like TOON for efficiency gains.

They're building highways while everyone else is still debating what kind of car to buy.

The killer apps of the AI era will come. I'm sure of it. We just can't predict exactly what they'll look like, the same way nobody in 1994 could have predicted a search engine that indexed the entire web, and nobody in 2010 could have predicted that a startup would let strangers sleep in each other's apartments.

But here's what we can predict: whatever those apps turn out to be, they'll run on infrastructure. They'll need structured data, efficient protocols, clean connectivity between agents and tools, and open standards for agents to find and talk to each other. The organizations building that infrastructure today are the ones that will carry the traffic tomorrow.

Nobody writes headlines about asphalt. But without it, nothing moves.
