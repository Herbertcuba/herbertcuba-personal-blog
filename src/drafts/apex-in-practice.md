---
title: "APEX in Practice: Two Teams, One Framework"
date: 2026-04-04
excerpt: "APEX is not a monolith — it's instantiated per use case. This article walks through two complete APEX cycles, one for a product development team and one for a content production team, showing exactly how the same framework adapts to fundamentally different work."
featuredImage: "/images/posts/apex-in-practice.webp"
layout: post.njk
permalink: /drafts/apex-in-practice/
tags: ["ai", "agents", "methodology", "leadership", "teams", "strategy", "framework", "apex"]
eleventyExcludeFromCollections: true
---

[The APEX Framework](/drafts/83c585a6/) defined the complete model: three areas, nine domains, three phases, ten principles, five metrics. That article is the reference. This one is the application.

I keep getting asked the same question after people read Part 1: "This makes sense in theory, but what does it actually look like when a team runs it?" Fair question. A framework that only exists as abstract structure is a framework that never gets used.

So here are two complete APEX cycles. A product development team building a SaaS feature. A content production team running an editorial operation. Same framework, different configurations, different cadences, different artifacts. By the end you should be able to look at your own team and start mapping domains to people.

---

## Chapter 1: Framework Flexibility

APEX is not a monolith. It's instantiated per use case.

The same three areas, nine domains, and three phases exist in every instance — but configured differently per context. A product team and a content team both run Strategic → Execution → Reflection. They both populate all nine domains. They both measure the same five metrics. But the artifacts they produce, the agents they configure, the cadence they operate at, and the people who own each domain are all different.

Each APEX instance runs its own cycle at its own rhythm. A content team might cycle daily — briefs go in the morning, reviewed articles come out by afternoon. A product team might cycle weekly — sprint-length iterations with reflection at the end. Neither cadence is better. The framework adapts to the work, not the other way around.

This is a fundamental design decision. I've seen too many frameworks that try to be everything to everyone by being prescriptive about cadence, tooling, and team structure. APEX prescribes the *shape* of the system — areas, domains, phases — and leaves the *content* of the system to the team that runs it.

![One Framework, Multiple Instances](/images/posts/apex-two-instances.svg)

Think of each instance as a fleet. A fleet has its own agents, its own workspace, its own configuration, its own reflection data. The humans who participate in the fleet might also participate in other fleets, wearing different hats, owning different domains. The fleet is the unit of operation. The organization is the collection of fleets.

---

## Chapter 2: Product Development Team

Let's walk through a complete APEX cycle for a product team building features for a SaaS application. I'll go through each phase with specific artifacts, specific agents, and specific decisions — the kind of detail you'd actually need to set this up.

### The People

Seven experts, each owning specific domains:

- **CTO / Tech Director** — owns Infrastructure. The harness decision, the model strategy, the compute architecture. This is the person who understands runtime tradeoffs and makes the strategic platform calls.
- **Tech Lead** — owns Orchestration Design and co-owns Agent Design. They know the codebase, they know the patterns, they design how work flows between agents.
- **Product Manager** — owns Business Context and Spec Engineering. Closest to the market, the users, the business case. Their specs are what agents execute against.
- **AI Engineer** — owns Agent Design and co-owns Infrastructure. They configure agent identities, skills, memory, and tool access. They understand how agents consume context and where drift happens.
- **Developer** — owns Operational Tooling. Dashboards, metrics pipelines, context-generation tools. The infrastructure that makes data-driven Reflections possible.
- **QA Lead** — owns QA Strategic and QA Operational. They define what "done" means and translate those definitions into automated agent-level checks.
- **Security Engineer** — owns Security & Compliance. Permissions, audit trails, access boundaries.

Notice: every person maps to specific domains. Nobody owns everything. Nobody owns nothing. The [domain ownership matrix from Part 1](/drafts/83c585a6/) isn't decorative — it's the operating agreement.

### Strategic Phase

This is where the team designs the system that agents will execute within. Every artifact here feeds directly into what happens during Execution.

**Infrastructure decisions.** The CTO chooses a hybrid harness: OpenClaw for autonomous scheduling and lifecycle management, with Claude Code spawned as a sub-agent for coding tasks. This gives the team scheduled, autonomous execution combined with a capable coding agent inside each run. The model strategy is tiered: Opus for code review (where nuance matters most), Sonnet for code generation (balancing quality and speed), Haiku for quick checks like linting and formatting validation.

**Business Context.** The PM populates the fleet workspace with three documents: a product vision doc articulating where the product is going, a competitive analysis mapping the landscape, and user personas describing who they're building for. All markdown, all in the fleet workspace where agents can reference them. These documents aren't thrown over a wall — they're the context that every agent reads before producing output. The richer they are, the less agents infer, and inference is where drift happens.

**Spec Engineering.** For the current cycle, the PM writes a feature PRD: what the feature does, who it's for, acceptance criteria, technical constraints. The acceptance criteria are specific and testable — not "the feature works well" but "API response time under 200ms, error states render the correct component, validation messages match the copy doc." Vague specs produce vague output. This is Principle 3 in action.

**QA Strategic.** The QA Lead defines the definition of done for this cycle: all tests pass, code review criteria are met (no security vulnerabilities, follows existing architectural patterns, proper error handling), performance benchmarks are hit. These aren't abstract goals — they're the criteria that the review agent will check against in every iteration, and that the Tech Lead will verify at the end.

**Agent Design.** The AI Engineer and Tech Lead configure four agents:

- An **Architect agent** that reads the PRD, understands the system's technical landscape, and decomposes features into implementable tasks. This isn't a generic planner — its identity file contains architectural decision records, system diagrams, and the team's technical standards. It assigns tasks to the right specialist and reviews their output with architectural judgment.
- A **Frontend Developer agent** with a SOUL.md containing UI component standards, design system references, and accessibility requirements. It has skills for running the dev server, executing component tests, and building the frontend. It understands the design system and knows how to translate specs into polished interfaces.
- An **Integrator agent** focused on backend connections, API integrations, data flows, and service orchestration. Its identity includes API contracts, auth patterns, and infrastructure documentation. Where the Frontend Developer builds what users see, the Integrator builds what connects everything underneath.
- A **QA Engineer agent** that writes regression tests and end-to-end tests for completed work. It reads the acceptance criteria from the spec, reviews the implementation, and produces test suites that verify the feature works as intended. It runs after human verification confirms the implementation is correct — codifying that correctness into automated tests.

**Orchestration.** The Tech Lead designs the flow: Architect decomposes the PRD and assigns tasks to Frontend Developer and Integrator (which can work in parallel on independent tasks). When a task is complete, the Architect reviews the output against architectural standards and QA criteria. If it doesn't meet the bar, it goes back to the implementing agent with specific feedback. If it passes, the task surfaces for human verification. Once the human approves, the QA Engineer agent builds regression and e2e tests for that task. After all tasks in the cycle are verified and tested, the execution loop closes. The routing is explicit. No agent decides on its own where work goes next.

**Operational Tooling.** The Developer sets up a dashboard showing iteration depth per task, first-pass acceptance rate, and cycle time per feature. These are the metrics that will make the Reflection phase concrete instead of speculative.

**Security.** The Security Engineer configures access boundaries: the Frontend Developer and Integrator agents can access the staging environment but not production. They cannot access customer data. They can read architectural docs but cannot modify infrastructure configuration. The QA Engineer can run tests against staging but cannot deploy. Least privilege, documented in a Permission Map.

### Execution Phase

The system is designed. Now agents run.

The PM writes the feature spec and pushes it into the fleet workspace. The Architect reads it, reads the product architecture docs, and decomposes the feature into five tasks — three frontend tasks and two integration tasks. The Frontend Developer picks up the first UI task while the Integrator starts on the API layer. They work in parallel on independent tasks.

The Frontend Developer completes its first task. The Architect reviews: does it follow the design system? Are components structured correctly? Is accessibility handled? First pass: the Architect flags that the error state component doesn't match the design system's pattern. The Frontend Developer fixes it. Second pass: the Architect approves. The task surfaces for human verification.

A Developer verifies. They're not checking CSS — the Architect already handled structural review. They're checking intent. Does this implementation capture what the PM specified? Does it fit the user flow? Is this the right abstraction? These are the questions only a human with deep product knowledge and daily context in the codebase can answer.

Once the Tech Lead approves, the QA Engineer agent activates. It reads the acceptance criteria from the spec, studies the implementation, and writes regression tests and end-to-end tests that verify the feature works correctly. These tests become part of the codebase — codifying human-verified correctness into automated checks that protect against future regressions.

Meanwhile, the Integrator has finished the API integration task. The Architect reviews: does it follow the auth patterns? Are error states handled? Is the data contract correct? The Integrator adjusts based on feedback, the Architect passes it, the Tech Lead verifies, and the QA Engineer builds integration tests.

![Product Development — Execution Inner Loop](/images/posts/apex-product-execution.svg)

This pattern repeats across all five tasks. Some tasks take one Architect review pass. Some take three. Frontend and Integrator work in parallel where possible, converging when tasks have dependencies. The dashboard updates in real time. By the end of the cycle, five tasks are verified, tested, and merged.

The velocity gain is real. In a traditional workflow, developers review every pull request line by line and QA manually writes test plans. Here, developers review pre-validated output and QA tests are auto-generated from verified implementations. The cycle that used to take a week compresses into two days of agent execution plus verification touchpoints.

### Reflection Phase

The cycle is complete. Five features implemented, reviewed, verified, merged. Now the team pauses to learn.

The Developer pulls up the dashboard. The team sees the data:

- Feature A took 4 iterations average. Feature B took only 2.
- First-pass acceptance rate across the cycle: 62%.
- Human touch rate: 8% — the Tech Lead stepped in once to clarify an architectural decision mid-loop.

The agents report their observations. The Integrator agent's logs show that API integration tasks consistently required more review passes from the Architect. The Architect's reports show a pattern: the Integrator kept misinterpreting the auth flow because the Business Context docs didn't include auth architecture patterns.

The team reflects. The PM realizes the Business Context is missing a critical document — auth architecture and integration patterns. Without it, the Integrator infers auth patterns from code samples, and those inferences are often wrong. The AI Engineer notes that the Integrator agent's identity file doesn't reference any auth-specific documentation because none existed. The QA Engineer also flags that its test coverage for auth flows was shallow because it had no reference architecture to test against.

Calibration actions:
- **PM** adds an auth architecture patterns document to Business Context
- **AI Engineer** updates the Integrator agent's identity file to reference the new auth doc
- **AI Engineer** updates the QA Engineer agent's test-generation context with auth flow patterns
- **QA Lead** adds an auth-pattern-specific check to QA Operational

Next cycle, the Integrator won't struggle with auth integration because the context exists. The QA Engineer will generate more thorough auth tests. Iteration depth on API tasks should drop. First-pass acceptance should improve. That's the hypothesis. The metrics will confirm or deny it.

![Product Development — Full APEX Cycle](/images/posts/apex-product-full-cycle.svg)

This is what it means for the system to evolve. The agents aren't magically smarter. The *context they operate within* is smarter, because humans invested in better Strategic design informed by real execution data.

---

## Chapter 3: Content Production Team

Same framework, different world. Let's walk through an APEX cycle for an editorial team producing content at scale.

### The People

Six experts:

- **Content Manager / Editorial Lead** — owns Business Context and QA Strategic. They know the audience, the brand, and what "publish-ready" means.
- **Content Strategist** — owns Spec Engineering. They write the briefs that drive all content production.
- **Copywriter / Editor** — contributes to Spec Engineering and QA Operational criteria. Their editorial judgment shapes the quality gates.
- **AI Engineer** — owns Infrastructure and Agent Design. Same role as in the product team, different configuration entirely.
- **Developer** — owns Operational Tooling. Editorial dashboards, content metrics, pipeline visibility.
- **Brand Manager** — contributes to Business Context and Security & Compliance. Protects the brand and defines publishing permissions.

### Strategic Phase

**Infrastructure.** The AI Engineer chooses OpenClaw as an autonomous harness — agents run on a schedule, producing content batches without requiring a human to be present for every execution. The model strategy: Opus for writing (where voice and nuance matter most), Sonnet for review (evaluating against criteria), flash models for research (speed over depth, with source evaluation as a separate quality check).

**Business Context.** The Content Manager populates the workspace with the documents that define the editorial operation: a brand voice document (tone, vocabulary, personality, what the brand sounds like and what it absolutely doesn't sound like), audience personas (who reads this content and what they care about), an editorial calendar (what's planned and when), and competitive positioning (what differentiates this brand's content from everyone else's). These aren't nice-to-haves. They're the foundation that every content agent references.

**Spec Engineering.** The Content Strategist creates editorial briefs — one per planned piece of content. Each brief specifies: topic, angle (the specific perspective or argument), tone (where on the spectrum between formal and conversational), word count, SEO keywords, target persona, and references (articles, data, or examples the piece should draw from). A brief is the content equivalent of a feature PRD. Its quality determines the quality of everything downstream.

**QA Strategic.** The Content Manager defines what "publish-ready" means: fact-checking standards (claims must be sourced), brand voice consistency (measured against the voice document), SEO score threshold, and an originality check. These criteria become the evaluation framework that the review agent uses.

**Agent Design.** Three agents configured:

- A **Research agent** that searches the web, evaluates source credibility, and compiles relevant data and quotes. Its identity includes source evaluation criteria — what counts as a credible source, what doesn't.
- A **Writer agent** with the brand voice document embedded in its SOUL.md. Editorial guidelines are injected into its context. It writes in the brand's voice because it literally carries the brand's voice as part of its identity.
- A **Review agent** configured to be skeptical. It checks each draft against QA criteria and scores multiple dimensions independently: brand voice consistency (scored 1-10), SEO optimization (scored 1-10), factual accuracy (scored 1-10), and audience relevance (scored 1-10). It doesn't produce a vague "this is good" — it produces a scorecard.

**Orchestration.** The flow: Brief → Research agent gathers sources → Writer agent produces a draft → Review agent evaluates and scores → if any dimension is below threshold, Writer revises → Review passes → Editorial Lead verifies.

**Operational Tooling.** An editorial dashboard showing: articles currently in the pipeline, first-pass acceptance rates by content type, iteration depth per content type, and cycle time from brief to published piece.

**Security.** Agents can read all brand docs and editorial guidelines. They cannot publish externally without human approval. No content leaves the system without the Editorial Lead's verification. This is a hard boundary — the Brand Manager's requirement.

### Execution Phase

The Content Strategist writes a brief for a blog post: "How AI is changing content operations." Topic, angle (practical, not hype), conversational tone, 1500 words, targeting the operations manager persona, with three SEO keywords specified.

The Research agent picks up the brief, searches for recent data on AI adoption in content teams, evaluates sources (industry reports over opinion pieces, recent over outdated), and compiles a source collection with key quotes and statistics.

The Writer agent reads the brief, reads the source collection, reads the brand voice document from its SOUL.md, and produces a first draft. The Review agent evaluates:

- Brand voice: 8/10 — consistent with the voice document, one paragraph drifts into overly formal language
- SEO: 6/10 — primary keyword appears but secondary keywords are underrepresented
- Factual accuracy: 9/10 — all claims sourced, one statistic needs a more recent citation
- Audience relevance: 8/10 — angle is practical as specified

The Review agent flags the three issues. The Writer revises: adjusts the formal paragraph, weaves in secondary keywords naturally, updates the statistic. Second review: all dimensions pass threshold. The article surfaces for human verification.

The Editorial Lead reads the final draft. They're not checking grammar or keyword density — the agents handled that. They're checking: Does this actually serve our audience? Is the angle genuinely practical, or did it drift into generic advice? Would I put the team's name on this? These are editorial judgment calls that no agent scorecard can replace.

![Content Production — Execution Inner Loop](/images/posts/apex-content-execution.svg)

This loop runs across a batch of content. Five briefs go in on Monday morning. By Monday afternoon, three articles have passed the agent loop and are ready for verification. Two are still iterating. By Tuesday, all five are verified and scheduled for publication.

### Reflection Phase

The team reviews the weekly data.

The dashboard shows a clear pattern: blog posts hit 75% first-pass acceptance (pass the agent review loop on the first or second try). Social content only hits 40%. LinkedIn posts average 3.2 iterations. Twitter/X posts average 4.1 iterations.

The Review agent's reports reveal the diagnosis: social content briefs don't include platform-specific guidance. The Writer agent uses the same voice and structure for LinkedIn as for Twitter, but they're fundamentally different platforms. LinkedIn tolerates longer, more detailed posts. Twitter demands compression and punch. The briefs treat them identically.

The team reflects. The Content Strategist realizes the editorial briefs need a platform-specific tone appendix — not just "conversational" but "LinkedIn-conversational" vs "Twitter-conversational" with concrete examples of each. The Copywriter/Editor contributes specific criteria: LinkedIn can include data and nuance, Twitter needs a single compelling point with no preamble.

Calibration actions:
- **Content Strategist** adds platform tone appendix to editorial briefs in Spec Engineering
- **AI Engineer** creates platform-specific skills for the Writer agent — different writing approaches loaded based on the target platform in the brief
- **QA Lead** adds platform-specific criteria to QA Operational — the Review agent now evaluates Twitter content against Twitter standards, not generic standards

![Content Reflection — Data to Calibration](/images/posts/apex-content-reflection.svg)

Next cycle, social content acceptance should improve because the specs are sharper and the agents are configured for platform-specific execution. The hypothesis goes into the next Reflection for validation.

---

## Chapter 4: One Organization, Two Instances

Here's where it gets interesting. Both of these teams exist in the same organization. Some of the same people participate in both APEX instances — but with different domain ownership in each.

The AI Engineer owns Infrastructure and Agent Design in both fleets. In the product fleet, they configure an Architect, Frontend Developer, Integrator, and QA Engineer with architectural context. In the content fleet, they configure writing agents with brand voice context. Same domains, completely different artifacts. The skill — understanding how agents consume context, where drift happens, how identity files should be structured — transfers between fleets. The content doesn't.

The Developer owns Operational Tooling in both fleets. They might build a shared dashboard platform or separate dashboards per fleet. The tooling expertise transfers. The metrics being tracked are different: iteration depth per feature vs iteration depth per content type. Cycle time means different things in weekly product cycles vs daily content cycles.

The Product Manager owns Business Context in the product fleet and gets consulted on Spec Engineering in the content fleet (because they understand the product well enough to inform content about it). Different hat, different depth of involvement.

The Security Engineer owns Security & Compliance in both. The permission boundaries are different — staging access for code agents, no-external-publish for content agents — but the discipline of documenting and enforcing least privilege is the same.

![One Organization, Two APEX Instances](/images/posts/apex-org-two-fleets.svg)

### Different Cadences, Different Rhythms

The product fleet runs weekly cycles. Sprint-length iterations, with Reflection at the end of each sprint. The content fleet runs daily cycles — briefs in the morning, verified content by end of day, with a weekly Reflection that looks at the daily metrics in aggregate.

These cadences are independent. The product team's Reflection doesn't wait for the content team's, and vice versa. Different work has different rhythms, and forcing them into the same cadence is an anti-pattern. Each fleet calibrates based on its own data, its own metrics, its own patterns.

The metrics look different too. The product fleet tracks iteration depth per feature type, first-pass acceptance on code changes, and cycle time from spec to merged PR. The content fleet tracks first-pass acceptance by content type, iteration depth per platform, and time from brief to verified article. Both fleets track Human Touch Rate and Calibration Impact — those are universal. But the numbers mean different things. A 70% first-pass acceptance rate on blog posts might be excellent. A 70% first-pass acceptance rate on critical infrastructure code changes might signal a problem in the spec quality.

### Cross-Fleet Learning

Quarterly, the organization might run a cross-fleet review: what patterns are emerging across fleets? Are there infrastructure improvements that benefit everyone? Has the AI Engineer discovered agent design patterns in one fleet that transfer to the other?

In my experience, the most valuable cross-fleet insights tend to be structural, not content-specific. An AI Engineer who discovers that agents produce better output when identity files reference specific architectural documents in the product fleet will bring that same principle to the content fleet — reference specific brand docs in the writer agent's identity, not just generic instructions. The pattern transfers even though the content is completely different.

This cross-fleet review is useful but it's not part of the regular APEX cycle. It sits above it. The regular cycle is fleet-specific — that's what keeps the cadence tight and the calibration relevant. I want to be clear about this because I've seen organizations try to create a "meta-APEX" layer that coordinates across all fleets. That's overhead that doesn't earn its keep. Each fleet runs independently. Cross-pollination happens through people who participate in multiple fleets, and through quarterly reviews that surface transferable patterns. Keep it simple.

### Context Architecture

In practice, the organization uses Notion as its master source for documentation. An automated export pipeline generates fleet-specific markdown workspaces — the product fleet workspace contains product vision docs, PRDs, and architecture patterns. The content fleet workspace contains brand voice docs, editorial guidelines, and audience personas. Each workspace is the complete context for that fleet's agents. Clean boundaries, no cross-contamination.

This separation matters more than it might seem. When a content agent has access to product architecture docs, it doesn't use them maliciously — it uses them *confusingly*. Context pollution leads to drift. An agent that sees engineering specs alongside editorial briefs will sometimes blend the styles, referencing technical details in audience-facing content or adopting a formal spec-writing tone when it should be writing in brand voice. Fleet-specific workspaces eliminate this class of problem entirely.

The master source stays unified for the humans. The Content Strategist can look up product roadmap context in Notion when writing a brief about an upcoming feature. The PM can reference brand guidelines when writing a feature spec that affects the user interface. But agents see only their fleet workspace. Humans bridge the fleets. Agents stay in their lane.

---

## Chapter 5: Start Thinking in APEX

APEX scales by instantiation, not by making one instance bigger.

When a new team needs agentic execution — a customer support team, a data analytics team, a marketing operations team — you don't bolt them onto an existing fleet. You instantiate a new one. Same framework, same areas, same domains, same phases. Different people, different agents, different artifacts, different cadence.

Each fleet is lightweight. Add one when you need it. Remove it when you don't. The cost of running a fleet is the investment in its Strategic artifacts and the discipline of running Reflections. That investment pays off because calibration makes the system better every cycle.

The tooling is almost beside the point. I know that sounds counterintuitive in a field obsessed with tools, but the durable advantage isn't in which harness you pick or which model you use. Models improve every quarter. Harnesses evolve. The durable advantage is in the artifacts — the business context docs, the spec engineering templates, the agent identity files, the QA criteria, the orchestration designs — and in the calibration discipline that keeps those artifacts improving.

Organizations that figure out human-agent team structures will have structural advantages that compound over time. I wrote about this compounding effect in [The Three Levels of AI Acceleration](/posts/2026-03-21-three-levels-ai-acceleration/) and mapped the domain expertise needed in [Nine Domains of Autonomous AI](/posts/2026-03-27-anatomy-level-3-agent/). APEX is the operating model that connects those ideas into something a team can actually run.

If I were starting from zero today, here's what I'd do:

**Pick one team.** The one with the clearest work patterns and the most receptive people. Don't try to transform the whole organization at once.

**Map the domains.** Walk through the nine domains and figure out who owns what. Use the product development and content production examples from this article as templates, not prescriptions. Your team is different. Your mapping will be different.

**Run one cycle.** Configure the Strategic phase (even partially — it doesn't need to be perfect). Run Execution. Run Reflection. Measure what happens. The first cycle will be messy. That's fine. The point is to start the learning loop.

**Calibrate and repeat.** Use Reflection data to improve the Strategic configuration. Run another cycle. The second cycle will be better than the first. The fifth will be dramatically better than the second. This is the compounding effect in action.

I think the organizations that treat human-agent team design as a first-class discipline — not an afterthought, not a weekend experiment, but a genuine operational investment — will pull ahead in ways that are hard to reverse. The compounding nature of calibration means that every cycle creates distance between teams that run the full loop and teams that set up agents once and hope for the best.

The tools will keep changing. The models will keep improving. The harness options will multiply. The thing that stays constant is the need for humans to design the system, verify the output, and feed execution data back into better design. That's the APEX cycle. It doesn't depend on any specific tool or model. It depends on the discipline of running all three phases, every cycle, without cutting corners on Reflection.

The complete framework reference is in [The APEX Framework](/drafts/83c585a6/). Everything you need to understand the areas, domains, principles, and metrics lives there. This article showed you what it looks like when real teams run it.

Start with one fleet. One cycle. Measure, reflect, calibrate. The system will teach you what it needs next.
