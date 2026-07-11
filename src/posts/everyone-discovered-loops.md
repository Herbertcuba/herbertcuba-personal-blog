---
title: "Everyone Discovered Loops. Nobody Agrees What the Word Means."
date: 2026-07-13
excerpt: "The loop became AI engineering's favorite word this summer — and Laurie Voss counted four different architectures hiding behind it. Here's the map, and the operating model that says which loop belongs to whom."
featuredImage: /images/posts/four-loops-one-model.webp
layout: post.njk
theme: agentic-engineering
anthem: true
tags:
  - ai
  - agents
  - operating-model
  - engineering
tldr:
  - "\"The loop\" became the industry's word of the summer — but as Laurie Voss showed, people are naming at least four different architectures with one word: the execution loop, the task loop, the product loop, and the system loop, with an oversight loop on top."
  - "Voss's sharpest cut: a loop without feedback is just a for statement. Dispatch-gather-validate is a pipeline, not a loop. That distinction is the whole game — feedback is what makes a system improve instead of repeat."
  - "APEX is the operating model that names which loop is whose. The inner loops (execute, review, iterate) belong to agents; the outer loops (reflect, calibrate, set goals) belong to humans. Autonomy is a dial set independently per loop, not a single switch."
  - "The key mechanism is the exit condition, not the model size. Each loop terminates on something (environment feedback, spec compliance, a quality gate, a human verification), and whoever owns the exit condition owns the loop. APEX makes the exit conditions explicit and assigns them."
  - "Voss's closing lesson and APEX's founding one are the same: the work is dialing up your level of abstraction and pushing human judgment further up the stack. Loops are how you do it. The operating model is how you keep it from becoming chaos."
---

For about six weeks this summer, everyone in AI engineering started talking about loops.

Boris Cherny: "I write loops, the loops do the work." Addy Osmani published "Loop Engineering." swyx coined "Loopcraft." LangChain ran a piece called "The Art of Loop Engineering." At the AI Engineer World's Fair, half the talks seemed to converge on the same word. The loop had become the unit — the thing you build, the thing you reason about, the thing that separates people shipping real agentic work from people still typing prompts into a box.

And then Laurie Voss did the useful thing. He pointed out that nobody was talking about the same loop. In his post *What the hell is a loop, anyway?* he counted **at least four distinct architectures hiding behind that one word** — and argued that most of the disagreement in the field is really people pointing at different loops and using the same label. He's right. And once you see the four loops clearly, a second question follows immediately: if these are different loops, who owns each one? That's the question I've spent the last year answering with an operating model called [APEX](/apex/), and Voss's taxonomy turns out to be the cleanest way to explain what it actually does.

<div class="statband">
<p class="fig-cap">The dial is already moving</p>
  <div class="statband__grid">
    <div class="statband__item"><div class="statband__num">20→60%</div><div class="statband__label">Warp's target for auto-merged agent PRs, ratcheting up (via Voss, 2026)</div></div>
    <div class="statband__item"><div class="statband__num">65%</div><div class="statband__label">of Anthropic's product-team code shipped via their internal agent tag</div></div>
    <div class="statband__item"><div class="statband__num">4+1</div><div class="statband__label">distinct loop architectures behind one word — four nested, one on top</div></div>
  </div>
</div>

## A Loop Without Feedback Is Just a For Statement

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Voss's definition is exclusionary and it matters: a loop feeds its output back into its next cycle. Dispatch-gather-validate with no feedback is a pipeline — a for statement — not a loop. Getting this distinction right is what separates a system that improves from one that just repeats faster.</p></div>

Start with what a loop *isn't*, because that's where Voss is sharpest. He explicitly excludes Cognition's "Agentic MapReduce" — the dispatch-a-swarm, gather-results, validate pattern — from the category. His reason is exact: *"Dispatch, gather, validate is a pipeline: nothing feeds back into a next cycle, and a loop without feedback is just a for statement."*

Hold onto that sentence. It's the load-bearing distinction in the entire conversation. A loop is defined by feedback — the output of one cycle conditions the next. A pipeline runs start to finish and terminates; run it a thousand times and it produces the same shape of result a thousand times. A loop *changes* because each pass updates the state the next pass runs against. That distinction matters more than it looks. It's the difference between a system that gets better and a system that just gets faster at being the same.

That's the line APEX draws with its Reflection phase, and I'll come back to it — because APEX deliberately runs *both*. Some of the work is a loop on purpose. Some of it is a for-statement on purpose. Knowing which is which is half the discipline.

## The Four Loops, Faithfully

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Voss's taxonomy: the execution loop (an agent's act-observe cycle), the task loop (restart until the spec is met), the product loop (the whole software lifecycle), and the system loop (the loop that improves the loops) — with an oversight loop on top where a human sets goals. Each has a different exit condition and a different owner.</p></div>

Here is Voss's map, as faithfully as I can render it. The four loops are nested — each one contains the ones before it — and the thing that distinguishes them is *what makes them stop*.

<div class="fig-band">
<p class="fig-cap">fig. — the four loops, by exit condition and who lives there</p>
  <table class="matrix">
    <thead>
      <tr><th>Loop</th><th>What cycles</th><th>Exit condition</th><th>Where the human is</th></tr>
    </thead>
    <tbody>
      <tr><th>Execution</th><td>Agent calls a tool, reads the result, decides the next action</td><td>No more tool calls needed</td><td>Absent mid-loop; present at the boundary</td></tr>
      <tr><th>Task</th><td>Restart the agent against the same spec, fresh context each time</td><td>Spec satisfied, tests pass</td><td>Writes the spec, judges done-ness</td></tr>
      <tr><th>Product</th><td>Triage → spec → build → review → ship → monitor</td><td>None — runs on external signal</td><td>Supervises the factory</td></tr>
      <tr><th>System</th><td>An outer loop improves the prompts, harnesses, models, evals of the inner one</td><td>None — "the loop is the product"</td><td>Picks the final configs</td></tr>
      <tr><th>Oversight</th><td>Set goals, allocate budget, cull work</td><td>None</td><td>This is the ring where a human should live</td></tr>
    </tbody>
  </table>
</div>

**The execution loop** is the agent's own act-observe cycle: call a tool, read the result, decide the next action, repeat until there's nothing left to call. It terminates on environment feedback — a test result, an API response, the contents of a file. Humans are absent inside it and present only at its edges.

**The task loop** is "restart the agent until the spec is satisfied." Its purest form is Geoffrey Huntley's **Ralph Loop**: restart a coding agent against the same spec over and over, each iteration with a *fresh context window*, one task per loop. It looks wasteful, and it's wasteful on purpose — the fresh context sidesteps the context rot and compaction decay that accumulate when you let one session run too long. It exits on spec compliance plus passing tests. The human writes the spec and watches for failure patterns — Huntley's "locomotive engineer" who keeps the train on the rails without laying every inch of track.

**The product loop** is the software factory — the whole lifecycle. Zach Lloyd of Warp lists it: triage, specification, implementation, review, verification, shipping, monitoring. It has no fixed exit; it runs continuously off external signals — new issues, error logs, user feedback. This is where the auto-merge numbers live.

**The system loop** is the strangest and most interesting. Roland Gavrilescu calls it autoresearch: an inner loop does the user-facing work while an *outer* loop studies and improves the primary system itself — iterating on the prompts, the harness, the model choice, the evals. His phrase for it: **"the loop is the product."** Karpathy's ~630-line overnight autoresearch script running fifty experiments is one instance. And the honest caveat is baked into the best example — Meta's agents improved a decoding architecture, but *humans still hand-picked the final configs*.

On top of all of them sits a fifth ring that swyx's own diagram literally labeled "???? loop." Voss names it the **oversight loop** — "where goals get set, budgets get allocated, and work gets culled, and it's the one ring where a human should live." Or in Addy Osmani's compression: *"That inner loop is capability. The outer loop is agency."*

## Whoever Owns the Exit Condition Owns the Loop

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>APEX maps cleanly onto Voss's loops because it was built around the same nesting — but it adds the missing piece: it assigns each loop's exit condition to a named owner, human or agent. Autonomy stops being one switch and becomes a dial you set per loop.</p></div>

This is where the operating model earns its keep. Voss maps the loops clearly but leaves the field's real fight open — *who runs each ring, and how much autonomy do you give it?* His key insight is that autonomy is not one switch: it's **a dial set independently per loop**. You can run a fully autonomous execution loop inside a tightly supervised product loop. The mistake is treating "how much do we trust the agents" as a single global setting.

My take: APEX is what you get when you take that seriously and assign every loop an owner by its exit condition. (To be direct: APEX predates Voss's post by over a year — the fact that it maps this cleanly is evidence the nesting is natural, not that I reverse-engineered a taxonomy to fit a product.) The mapping is almost one-to-one:

<div class="fig-band">
<p class="fig-cap">fig. — Voss's loops → APEX's operating model</p>
  <div class="numlist">
    <span class="numlist__eyebrow">who owns which ring</span>
    <div class="numlist__item">
      <span class="numlist__n">E</span>
      <div class="numlist__body">
        <p class="numlist__title">Execution loop → APEX <em>Execute</em> · agent-owned</p>
        <p class="numlist__desc">The act-observe cycle inside a single agent. Fully autonomous by design — no human mid-loop. In APEX this is the middle of the inner loop, bounded by the agent's identity file (what the agent is and is not allowed to do) and its tool permissions (what it can touch). Dial: max autonomy, hard walls.</p>
      </div>
    </div>
    <div class="numlist__item">
      <span class="numlist__n">T</span>
      <div class="numlist__body">
        <p class="numlist__title">Task loop → APEX <em>Review ⇄ Iterate</em>, gated by QA Operational · agent-owned, human-specced</p>
        <p class="numlist__desc">"Restart until the spec is satisfied" is exactly APEX's agent-to-agent review cycle. The exit condition — spec met, checks pass — is enforced by a skeptical review agent instantiated separately from the build agent, one that never grades its own homework. The human authors the written spec and the definition of done before the loop starts, not during it.</p>
      </div>
    </div>
    <div class="numlist__item">
      <span class="numlist__n">P</span>
      <div class="numlist__body">
        <p class="numlist__title">Product loop → APEX <em>Execution phase</em> across a fleet · agent-run, human-verified</p>
        <p class="numlist__desc">The full lifecycle is APEX's Execution phase instantiated per use case — the product-dev fleet, the content fleet, the data fleet. Its one human exit gate is verification: work surfaces pre-validated, and a domain expert checks intent, not mechanics. The dial here is the auto-merge ratchet — and APEX says exactly how far to turn it: as far as first-pass acceptance and human touch rate say you've earned.</p>
      </div>
    </div>
    <div class="numlist__item">
      <span class="numlist__n">S</span>
      <div class="numlist__body">
        <p class="numlist__title">System loop → APEX <em>Reflection → Calibrate → Strategic</em> · human-decided</p>
        <p class="numlist__desc">"The loop is the product" is APEX's outer loop: the system that improves the system. Reflection reads the metrics, Calibration changes the specs, harnesses, agent configs, and evals, and the next cycle runs on an evolved system. Voss's honest caveat — Meta's humans still hand-pick the configs — <em>is</em> the APEX rule: agents pre-compile the metrics, humans decide the changes.</p>
      </div>
    </div>
    <div class="numlist__item">
      <span class="numlist__n">O</span>
      <div class="numlist__body">
        <p class="numlist__title">Oversight loop → APEX <em>Strategic phase</em> + Principle 2 · human-owned, non-negotiable</p>
        <p class="numlist__desc">Voss's "one ring where a human should live" is APEX's Strategic phase and its second principle: <em>human in control of the outcome</em>. Goals, budgets, what gets culled — this ring does not get a dial. Everything below it can be tuned toward autonomy; this is the one you keep.</p>
      </div>
    </div>
  </div>
</div>

The reframe Voss gives you is that "how autonomous are your agents?" is the wrong question because it assumes one number. I think the reframe APEX gives you is the answer to his open question, who runs the top ring, by making the exit condition of every loop an explicit, owned artifact. The execution loop exits on environment feedback (agent's call). The task loop exits on a review agent's gate (human-designed, agent-enforced). The product loop exits on human verification. The system loop exits on a human calibration decision. The oversight loop doesn't exit at all, and that's the point. It's the ring you never hand over.

I learned this the hard way. Early in building the product loop for a content fleet, I let the review agent own the final quality gate — not just the mechanical checks but the judgment call on whether a piece was ready to surface. The agent was confident. It was wrong in a specific, systematic way: it had learned to rate output that matched its own training distribution as high-quality, which meant anything novel or off-template got quietly downgraded. For three weeks, the fleet was optimizing toward sameness. Nobody caught it because the exit condition had no human owner — only a score. The fix was immediate once I saw it: move the quality judgment back to a human, let the agent handle the objective checks. One ownership reassignment, and the loop started producing useful work again. The exit condition was the design. The missing owner was the flaw.

## Meanwhile, in Cybernetics

<div class="scifi">
<span class="scifi__label">Meanwhile, in cybernetics</span>
<p class="scifi__film">Wiener · Ashby · Beer</p>
<p>In 1948 <a href="https://en.wikipedia.org/wiki/Norbert_Wiener">Norbert Wiener</a> named a science after the Greek <a href="https://en.wikipedia.org/wiki/Cybernetics#Etymology">kybernetes</a>, the steersman. <a href="https://en.wikipedia.org/wiki/Cybernetics">Cybernetics</a> was the study of control through feedback, and its central object was exactly what the industry just rediscovered and called "the loop." We are not inventing this.</p>
<p>Two laws land directly. <a href="https://en.wikipedia.org/wiki/W._Ross_Ashby">Ashby's</a> <a href="https://en.wikipedia.org/wiki/Variety_(cybernetics)#Law_of_requisite_variety">Law of Requisite Variety</a>: a review gate simpler than the outputs it judges will always miss things — which is why you need an agent, not a regex, guarding the task loop. <a href="https://en.wikipedia.org/wiki/Stafford_Beer">Beer's</a> <a href="https://en.wikipedia.org/wiki/Viable_system_model">Viable System Model</a>: viable systems are loops nested inside loops, each regulating its level. That is APEX's nesting. And Wiener's steersman never leaves the boat. Eighty years later, the oversight loop is the steersman — "the one ring where a human should live" is a sentence he could have written.</p>
</div>

## When You Actually Want a For Statement

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>The pipeline Voss excludes isn't a mistake — sometimes it's the correct choice. When you need determinism and auditability over adaptability, you want a for statement, not a loop. APEX runs one on purpose for exactly that reason.</p></div>

Voss excludes the pipeline from the loop category, correctly, by his definition. But exclusion isn't a verdict. Sometimes a for statement is exactly what you want.

APEX's data-and-research fleet is a **deliberate pipeline**: a fixed DAG — three analyst agents in parallel, then a correlator, then a report writer, then a compliance checker, then human sign-off. No feedback mid-run. And that's the right call, because when compliance is on the line, *determinism beats recoverability*. You want the same inputs to produce the same auditable path every time, not a system that creatively adapts its way to an answer you can't reconstruct for a regulator. The feedback in that fleet lives entirely in the outer system loop — Reflection changes the pipeline between runs — while each run stays a clean, replayable for-statement.

So the full picture is: loops where you want adaptation, pipelines where you want auditability, and an outer loop wrapping both so the pipelines themselves keep improving. Voss draws the boundary between loop and for-statement. The operating model tells you which side of it each piece of your work belongs on — and that's a design decision, not an accident.

## The Same Lesson From Both Ends

Voss ends his post on a line that could be APEX's epigraph: *"people are dialing up their level of abstraction and pushing human judgment further up the stack. That's the actual lesson of loops."*

That is the whole thing. Every loop in the taxonomy is a rung — you start inside the execution loop writing tool calls, and each loop out is a step up in abstraction, a step further from doing and closer to governing. The execution loop is capability. The oversight loop is agency. The trajectory of the last two years is people climbing from the first to the last, and the climb is the skill. It's the same move I described as [raising colleagues instead of hiring tools](/posts/stop-hiring-tools-start-raising-colleagues/) — pushing yourself up from operator to orchestrator — seen from the engineering side instead of the organizational one.

But there's a reason the climb needs an operating model and not just enthusiasm. Mike Krieger made the observation that should sober everyone: even at Anthropic, the agent tag team is bottlenecked on human review and conceptualization. *The checkpoint humans kept for themselves is now the constraint.* Push judgment up the stack carelessly and you don't remove the bottleneck — you relocate it to a place you haven't staffed or designed for. That's what an operating model is *for*: making sure that when human judgment moves up a level, there's an actual structure waiting for it — owned exit conditions, named verification gates, a calibration cadence — instead of a single overwhelmed person rubber-stamping a firehose.

<div class="keymsg">
<span class="keymsg__label">The lesson of loops</span>
<p class="keymsg__text">The loop is the unit. The <span class="hl">exit condition</span> is the design. The <span class="hl">owner of the exit condition</span> is the decision.</p>
<p>Four loops, one on top. Agents own the inner rings, humans own the outer ones, and the dial between them is set per loop, not once. Get that assignment right and you climb the abstraction ladder without falling off it. That's an operating-model problem, not a loop problem. And it's the one worth solving.</p>
</div>

The industry spent the summer discovering that AI work is loops. The next year will be spent discovering that loops without an operating model are just faster ways to lose track of who's in control. Voss drew the map. The question the map raises — who runs which ring — is the one worth answering before you scale, not after.
