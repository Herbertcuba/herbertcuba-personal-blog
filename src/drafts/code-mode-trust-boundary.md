---
title: "Code Mode Moves the Trust Boundary"
date: 2026-07-27
excerpt: "A pattern called \"code mode\" is gaining traction: instead of exposing discrete tools to an LLM and letting it make individual JSON-RPC calls, you let the agent write actual code that chains tools together with loops, conditionals, and error handling. Cloudflare named it. Redo just wrote about building a sandbox for it. The appeal is obvious: fewer round trips, less context bloat, deterministic execution. But the trust boundary moves. When the agent makes tool calls, you audit the calls. When the agent writes code, you audit programs. That is a different rigor tier."
featuredImage: ""
layout: post.njk
permalink: /drafts/code-mode-trust-boundary/
tags: ["ai", "agents", "engineering", "security", "governance", "wip"]
---

## Idea Brief

**Angle:** A pattern called "code mode" is gaining traction: instead of exposing discrete tools to an LLM and letting it make individual JSON-RPC calls, you let the agent write actual code that chains tools together with loops, conditionals, and error handling. Cloudflare named it. Redo just wrote about building a sandbox for it. The appeal is obvious: fewer round trips, less context bloat, deterministic execution. But the trust boundary moves. When the agent makes tool calls, you audit the calls. When the agent writes code, you audit programs. That is a different rigor tier. Most teams adopting code mode are optimizing for speed and not noticing they have changed what "review" means.

**Why it matters:** Engineers building agent systems are choosing between tool-call architectures and code-mode architectures right now. The tool-call model feels safer because each action is explicit and inspectable. Code mode is more powerful but the audit surface expands: you are no longer checking a sequence of API calls, you are checking a program that may have side effects, loops, and conditional logic. Herbert's Umain Engineering Playbook is built on intentional calibration of rigor by domain. Code mode demands a higher rigor tier than tool calling, and teams that adopt it without upgrading their review process are accumulating risk they cannot see. The agent is not just calling your API anymore. It is writing software that calls your API.

**Suggested hook:** The agent stopped making tool calls and started writing programs. The demo got faster. The audit got harder. Nobody updated the runbook.

**Source:** Redo Engineering blog (2026-07-26): "Just Let Agents Write Code" by PJ Tatlow. Describes their homegrown sandbox for code mode, where agents write executable code against tools instead of making individual tool calls. References Cloudflare's original "code mode" naming. Surfaced via Hacker News front page (2026-07-27).

**Related theses:** - AI Operating Model: the architecture choice (tool calls vs. code mode) determines what "governance" actually means

**Tags:** #article #agent-architecture #code-mode #tool-design #security

---

## Research Notes

### Primary Source: Redo Engineering

- **Title:** "Just Let Agents Write Code"
- **Author:** PJ Tatlow
- **Date:** 2026-07-26
- **URL:** https://redo.com/eng-blog/just-let-agents-write-code/
- **HN:** Posted 2026-07-27 16:55 UTC by joshmoody24, 2 points, 0 comments (still on front page at time of research)

**Key claims from the article:**

1. Code mode is where agents write code to access tools as functions instead of explicit "tool calls" in the LLM output. Originally named by Cloudflare "last year" (the article says "last year" but the Cloudflare blog post is dated February 20, 2026).

2. Traditional tool calling requires multiple round trips to the LLM. Example: updating product prices requires searchProducts, then updateProductPrice per item — each call is a separate LLM round trip, filling the context with intermediate data.

3. Code mode solves this by having the agent write code that interacts with tools deterministically. Tool calls can be chained with conditional statements, loops, and functions.

4. Only two tools are exposed to the LLM:
   - `search-tools` — accepts a query string, returns matching functions with parameters and descriptions
   - `execute-code` — accepts a chunk of code to execute in a sandbox, returns stdout/stderr

5. This enables a very large number of tools to be exposed without filling the context window. The agent takes many chained actions faster and cheaper.

6. The hard part: executing untrusted code the agent wrote, connecting tool implementations, validating arguments, capturing stdout/stderr, enforcing permissions, allowing human-in-the-loop.

7. Redo's solution: V8 isolates (same approach as Cloudflare Workers). Rust-based HTTP server running Rusty-V8. WebSocket connections between harness and RedoJS server for tool call lifecycle. Cold start: ~5ms vs ~3s for containers, ~150ms for Lambda microVMs.

8. Tools are available under a global namespace: `Redo.tools.toolname(...)`. Tool calls are promises in the isolate, enabling concurrent execution via `Promise.all`.

9. Example given: finding all products ordered more than 1,000 units in the last 90 days with the "new-product" tag, then creating a purchase order. The agent writes ~30 lines of JavaScript that would have required many specific tools or burned millions of tokens in a traditional approach.

### Secondary Source: Cloudflare

- **Title:** "Code Mode: give agents an entire API in 1,000 tokens"
- **Author:** Matt Carey
- **Date:** 2026-02-20
- **URL:** https://blog.cloudflare.com/code-mode-mcp/

**Key claims:**

1. MCP has become the standard way for AI agents to use external tools, but there's a tension: agents need many tools, yet every tool added fills the context window.

2. Code Mode reduces context window usage by letting the model write code against a typed SDK instead of describing every operation as a separate tool.

3. Cloudflare introduced a new MCP server for the entire Cloudflare API using Code Mode. With just two tools — `search()` and `execute()` — the server provides access to the entire Cloudflare API while consuming only ~1,000 tokens. The footprint stays fixed regardless of how many API endpoints exist.

4. For the Cloudflare API, Code Mode reduces input tokens by 99.9%. An equivalent MCP server without Code Mode would consume 1.17 million tokens — more than the entire context window of the most advanced foundation models.

5. Both tools run generated code inside a Dynamic Worker isolate — a lightweight V8 sandbox with no file system, no environment variables, and external fetches disabled by default. Outbound requests can be explicitly controlled.

6. Anthropic independently explored the same pattern in their "Code Execution with MCP" post.

### Tertiary Source: Anthropic

- **Title:** "Code Execution with MCP"
- **URL:** https://www.anthropic.com/engineering/code-execution-with-mcp
- **Note:** Referenced by both Redo and Cloudflare as exploring the same pattern independently.

### Tertiary Source: TanStack

- **Title:** TanStack AI Code Mode
- **URL:** https://tanstack.com/blog/tanstack-ai-code-mode
- **Note:** Referenced by Redo as another example of the pattern popping up.

### The Trust Boundary Argument

The core insight from the idea brief is that code mode moves the trust boundary in a way most teams don't notice:

**Tool-call model:**
- Each action is explicit and inspectable
- You audit a sequence of API calls
- The LLM output is a structured request (JSON-RPC)
- The harness validates and executes
- The audit surface is: what tool was called, with what arguments, what was the result

**Code-mode model:**
- The agent writes a program
- You audit a program, not a sequence of calls
- The program may have side effects, loops, conditional logic
- The audit surface expands: what does this code do? What are its side effects? What data does it touch? What if the loop runs 10,000 times? What if the conditional logic has a bug?

**The shift:**
- From "review each action" to "review the program that produces actions"
- From "validate JSON schema" to "understand code semantics"
- From "rate limit API calls" to "bound execution time and resource usage"
- From "human approves each step" to "human reviews the code before execution" (or trusts the sandbox)

**What Redo's article reveals:**
- They built V8 isolates with memory limits, CPU time limits, wall time limits
- They intercept tool calls over WebSocket
- They validate tool arguments
- They capture stdout/stderr
- They enforce permissions
- They allow human-in-the-loop

But the article is optimistic about the security model: "V8 isolates are a great way to provide that environment because they are fast and put you in control of which parts of the outside world are exposed in that sandbox."

The gap: the article focuses on sandboxing the execution environment, but doesn't address the audit problem. How do you review the code the agent wrote? How do you know it's correct? How do you detect when the agent has written code that does something subtly wrong?

### The Umain Playbook Connection

Herbert's Umain Engineering Playbook calibrates rigor by domain. The insight here is that code mode demands a higher rigor tier than tool calling:

- **Tool calling:** You can apply standard API governance — rate limits, schema validation, audit logs, human approval for destructive operations.
- **Code mode:** You need program review — static analysis, semantic understanding, bounded execution, sandboxing, and a different kind of human oversight.

Teams adopting code mode for speed (fewer tokens, faster execution) are not upgrading their review process to match. They're accumulating risk they cannot see.

### Open Questions for the Article

1. What does "review" mean when the artifact is a program, not a sequence of API calls?
2. How do you audit code that was generated on the fly and executed in a sandbox?
3. What is the equivalent of "CODEOWNERS" for agent-generated code?
4. How do you bound the blast radius of a bug in agent-written code?
5. What is the failure mode when the sandbox itself has a bug?
6. How do you version control and test agent-generated code?
7. What is the organizational process for approving code mode vs. tool calling?

### Potential Structure

1. **Hook:** The agent stopped making tool calls and started writing programs. The demo got faster. The audit got harder. Nobody updated the runbook.

2. **What is code mode:** Explain the pattern with the Redo example. Two tools: search and execute. The LLM writes code, the sandbox runs it.

3. **Why it's appealing:** Fewer round trips, less context bloat, deterministic execution, more expressive power.

4. **The trust boundary moves:** When the agent makes tool calls, you audit the calls. When the agent writes code, you audit programs. That is a different rigor tier.

5. **What most teams miss:** They optimize for speed and don't notice they've changed what "review" means. The agent is not just calling your API anymore. It is writing software that calls your API.

6. **The rigor calibration argument:** Code mode demands a higher rigor tier. Teams that adopt it without upgrading their review process are accumulating risk they cannot see.

7. **What to do about it:** Bounded execution, sandboxing, human review of generated code, version control for agent code, testing agent code, organizational process for approving code mode.

8. **Closing:** The question isn't whether to use code mode. The question is whether you've upgraded your governance to match the new trust boundary.

---

## Next Step

Herbert reviews the research notes and says "skriv artikeln" to move to WRITING lane.
