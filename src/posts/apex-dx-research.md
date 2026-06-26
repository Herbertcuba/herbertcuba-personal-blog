---
title: "The Research Is In. Here's What the Data Says About Building with Agents."
date: 2026-06-26
excerpt: "DX's research briefing with Brian Houck confirmed what practitioners already know: spec quality beats model capability, review is the new bottleneck, and agent experience is an organizational problem, not a tooling one. APEX was built around all of it."
featuredImage: "/images/posts/apex-dx-research.webp"
layout: post.njk
tags: ["ai", "agents", "apex", "strategy"]
---

DX recently published their research briefing with Brian Houck, Distinguished Scientist at DX, on how AI is changing engineering productivity. The data is precise, the framing is careful, and for anyone who has been running agents in production rather than just talking about running them, the findings land exactly where you'd expect.

Not because the research is surprising. Because it confirms what the hard cases already taught us.

I want to take each major finding seriously — not to rubber-stamp them, but because the gap between knowing the research and knowing what to do with it is exactly where most organizations get stuck.

Six findings. Six places where the research names the problem but stops short of telling you what to build. Here's what we'll cover:

<div class="findings-section">
  <div class="findings-section__inner">
    <span class="findings-section__eyebrow">Six findings</span>
    <ol class="findings-list">
      <li class="findings-list__item">
        <span class="findings-list__number">01</span>
        <div class="findings-list__body">
          <p class="findings-list__title">Agent experience is a subset of developer experience</p>
          <p class="findings-list__desc">The conditions that let agents do useful work — clear requirements, accurate data, sufficient context — are the agent-side counterpart to developer experience, not a separate discipline.</p>
        </div>
      </li>
      <li class="findings-list__item">
        <span class="findings-list__number">02</span>
        <div class="findings-list__body">
          <p class="findings-list__title">The DX Core 4 dimensions of productivity remain stable</p>
          <p class="findings-list__desc">Speed, Effectiveness, Quality, and Impact still hold. AI changes how work gets done, not what engineering organizations are trying to accomplish. But diagnostic metrics now require more careful interpretation.</p>
        </div>
      </li>
      <li class="findings-list__item">
        <span class="findings-list__number">03</span>
        <div class="findings-list__body">
          <p class="findings-list__title">Code generation shifts the bottleneck, not eliminates it</p>
          <p class="findings-list__desc">When agents write code fast, the constraint moves downstream — to review, integration, and validation. PR size has nearly doubled over the past year. Most teams haven't adapted.</p>
        </div>
      </li>
      <li class="findings-list__item">
        <span class="findings-list__number">04</span>
        <div class="findings-list__body">
          <p class="findings-list__title">AI readiness depends on culture, infrastructure, and context</p>
          <p class="findings-list__desc">Licenses and access are the easiest layer to solve. Developers adopt AI at 7x the rate when leadership advocates for it and trusted peers model it on real work.</p>
        </div>
      </li>
      <li class="findings-list__item">
        <span class="findings-list__number">05</span>
        <div class="findings-list__body">
          <p class="findings-list__title">Documentation quality compounds as agents rely on shared context</p>
          <p class="findings-list__desc">Teams with higher documentation satisfaction onboard new developers 2x faster. The same effect applies to agents — and human-readable docs may need to be separated from agent-specific memory.</p>
        </div>
      </li>
      <li class="findings-list__item">
        <span class="findings-list__number">06</span>
        <div class="findings-list__body">
          <p class="findings-list__title">AI is changing roles, but engineering judgment remains central</p>
          <p class="findings-list__desc">Writing code is 14% of a developer's day. Agents are far less capable across verification, architecture, and deciding what's worth building. Strong engineers become more valuable, not less.</p>
        </div>
      </li>
    </ol>
  </div>
</div>

Each one maps directly to a structural decision. Let's go through them.

---

### Agent experience is a subset of developer experience

Houck's framing here is worth sitting with. Agent experience — whether agents have the right conditions to do useful work — isn't a new discipline. It's a direct extension of developer experience thinking applied to agents. Clear requirements, accurate data, sufficient context, a shared understanding of what good output looks like. The same variables that determine whether a developer can do great work determine whether an agent can.

The research citation he used makes this concrete: Sara Chizari's work shows that the strongest predictor of multi-agent success is specification quality, not model capability. Houck put it directly: "Agent capabilities are what vendors sell you. Agent experience is what developers actually get."

That's a meaningful reframe. Most AI investment in engineering organizations is going toward model selection, tooling access, and prompt experimentation. The research says the return on those investments is limited by a variable most teams aren't managing: the quality of the conditions they're giving agents to work in.

APEX's entire Strategic Phase is structured around this. The Spec Area — Business Context, Spec Engineering, QA Strategic — exists to answer the question Houck is pointing at: what does an agent actually need to do useful work, and who owns making sure it has it? When agent output is mediocre, the instinct is to blame the model. The correct question is whether the agent had what it needed in the first place.

### The DX Core 4 dimensions of productivity remain stable

This finding deserves more attention than it typically gets in AI coverage. Houck argued that the four dimensions of engineering productivity DX tracks — Speed, Effectiveness, Quality, and Impact — remain stable even as AI reshapes how work gets done. The objective hasn't changed. The path to it has.

What has changed is how you interpret the signals. A high PR merge rate, which once suggested a healthy, fast team, now could mean better code, rubber-stamping, or teams playing it safe and not pushing agents to the edge of their capability. The metric still exists. What it means requires more context to decode.

The same applies to token usage. Houck framed it explicitly as a cost metric, not an outcome metric. If token usage rises and idea-to-customer time improves, there may be a productivity story. If token usage rises and nothing else moves, there isn't. The number alone tells you nothing.

This is where APEX Metrics matter. First-pass acceptance rate, iteration depth, human touch rate, calibration impact — these are designed to give you the additional context that makes traditional metrics interpretable again. You don't abandon the DX Core 4. You surround them with the agent-specific signals that explain what's driving them.

### Code generation shifts the bottleneck

DX's data shows PR size has nearly doubled over the past year. Agents write code fast. Everything downstream — integration, testing, review — hasn't scaled at the same rate. The bottleneck moved without anyone planning for it.

Justin Reock, DX's Deputy CTO, acknowledged this directly: if code can be generated instantly but builds take 45 minutes or tests are flaky, you haven't eliminated the constraint. You've relocated it. And a relocated bottleneck that nobody has redesigned around is often worse than the original one, because the team is still optimizing for the wrong thing.

Houck proposed measuring "idea to customer" rather than PR merge rate — how fast intent becomes production reality, not how fast code gets written. That's a metric that survives the shift. PR throughput is still useful as a system-level flow measure, but the leading signal for organizational velocity has moved.

This is the structural reason agent-to-agent review matters. In APEX, work passes through an automated review loop before a human sees it. By the time a human verifies, the mechanical problems are already resolved. The human's job is to assess whether the work actually captures the intent — the "idea to customer" signal Houck is pointing at. Without that structure, faster generation just produces more unvalidated output for humans to sort through.

### AI readiness depends on culture, infrastructure, and context

Houck described AI readiness across four dimensions: tooling, culture, infrastructure, and context. Of these, tooling and licenses are the easiest layer to solve. They're also where most organizations stop.

The harder layers are the ones that actually move adoption. Brian cited research showing that developers in organizations where leadership strongly advocates for AI report daily adoption at 7x the rate of those without it. Social proof — seeing trusted peers use AI on real work — was identified as the most consistent adoption catalyst. Developers don't adopt because they have access. They adopt because they see someone they respect doing it on something that matters.

Context readiness is especially critical for agents specifically. Agents amplify whatever specification quality already exists. Clear specs produce good outcomes. Unclear specs produce unpredictable results — and unpredictable results erode the trust that drives adoption. The two problems are connected. You can't build social proof on top of inconsistent output.

This maps directly to why APEX treats the Reflection Phase as mandatory. The organizations that run calibration cycles consistently — measuring what worked, adjusting the system, running again — are the ones where agents visibly improve over time. Visible improvement is how you build the internal social proof that compounds into organization-wide adoption.

### Documentation quality compounds

Brian's unpublished DX research shows that teams with higher documentation satisfaction onboard new developers about 2x faster. The same effect applies to agents, though further research is still being done. The mechanism is the same: shared context reduces inference, and inference is where drift happens.

Reock added a useful distinction here that often gets glossed over: human-readable documentation and agent memory are not the same thing and shouldn't be treated as the same artifact. The format that helps a developer understand a system may differ significantly from what helps an agent operate within it. Merging them produces something that does neither job well.

This is an extension of the specification quality finding, but at the infrastructure level. It's not just about writing better specs for individual tasks. It's about maintaining a context layer — agent-specific markdown, structured memory, versioned instructions — that agents can actually consume reliably. And then validating that it's working. Houck emphasized this explicitly: if you invest in better context, you also need ways to confirm it improves agent output and to detect regressions when it doesn't.

### AI is changing roles, but engineering judgment remains central

Writing code is roughly 14% of a developer's day. Agents are increasingly capable at that 14%. Across the rest of the job — verification, failure detection, architecture, operations, deciding what's worth building — they're far less capable. The scope of what's being automated is narrower than the coverage of the conversation around it.

Reock shared that companies like Zapier are hiring more engineers than ever precisely because each engineer produces more value with the right tools and systems in place. The frame isn't replacement. It's leverage. Strong engineers become more valuable because their judgment — the 86% that agents can't reliably handle — gets amplified rather than substituted.

Houck acknowledged a real risk in this: even if the research supports this view, executives may misread productivity claims and make organizational decisions based on incomplete data. Headcount decisions based on token output or PR counts, rather than on the harder-to-measure variables that actually determine engineering value. That's a reason to invest in better measurement and better communication of what AI impact actually means at the organizational level.

The APEX framework's Domain-Mapped Ownership model is built around this reality. The tech lead who understands architecture owns QA Strategic. The product manager closest to users owns Business Context. The engineer who knows the codebase becomes the verification gate for agent output. Expertise doesn't disappear. It moves up one level of abstraction — from doing to orchestrating. And it becomes more concentrated, not less.

---

The data from DX points in the same direction as the practical lessons from running agents at scale: the constraint has never been model capability. It's organizational readiness — the quality of the context you provide, the clarity of the specs you write, the structure you put around review and verification, the measurement systems that make improvement visible, and the willingness to run calibration cycles that actually change how the system is configured.

APEX is an attempt to give that problem an organizational structure that scales. Not a replacement for your existing methodology, but a way of ensuring the conditions that research says matter are owned, measured, and continuously improved.

The research is in. The question is what you build around it.

If you want to go deeper on the framework itself, [the full APEX reference is here](/posts/2026-04-05-apex-framework/).
