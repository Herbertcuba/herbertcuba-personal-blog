---
title: "The Alignment Tax: Why AI Productivity Gains Disappear Without an Operating Model"
date: 2026-06-03
excerpt: "A senior engineer's honest report from three years inside AI-driven development confirms what APEX was built to solve: build costs collapsed, but coordination costs exploded. The productivity gains got captured by volume, not quality."
featuredImage: /images/posts/alignment-tax-apex.webp
layout: post.njk
tags:
  - ai
  - agentic
  - apex
  - leadership
  - teams
---

[Jamie Hurst](https://jamiehurst.co.uk/2026-05-24_ai-sustainable) published something last week that deserves more attention than it's getting. He's a senior engineer inside an organisation of roughly 4,000 engineers. He's been using AI development tools heavily for three years. His report is honest in a way that most AI content isn't — no hype, no triumph, no fear. Just an engineer telling you what actually happened.

I agree with every word of it.

What strikes me most isn't any single observation. It's the pattern underneath them. Jamie describes a world where individual building got dramatically cheaper — and where that cheapness created a new, expensive problem that nobody had planned for.

## The Alignment Tax

Jamie describes a situation that will be familiar to anyone working in a mid-to-large engineering team right now. Multiple people, in separate corners of the organisation, each build a working solution to the same problem. Not because they're incompetent. Because with AI tools, it's now faster to build than to write a proposal. The conversation that would have aligned them before happens after the fact — if it happens at all.

He puts it plainly: it becomes easier to build a new bot than to adopt someone else's. That sentence describes a structural shift, not a failure of communication. When the cost of building collapses, the threshold for duplication drops with it. Three teams each reach 80% of a working solution before they've even spoken to each other. The coordination that should have happened at the start happens at the end, as expensive cleanup.

I want to name this pattern: **The Alignment Tax**.

The Alignment Tax is what you pay when build costs fall faster than coordination costs. The productivity gain is real — it shows up clearly in velocity metrics. But the gain gets consumed. It goes toward untangling duplicated systems, merging fragmented implementations, and resolving the decisions that nobody made explicitly but that every team now depends on. The output isn't waste in the traditional sense. It's costly realignment masquerading as progress.

The net result, in Jamie's framing, is that productivity gains got captured by volume rather than quality. More was built. Whether more of the right things were built is a different question entirely.

## Single-Player Mode Is the Bug

The deeper question is why this keeps happening. And I think the answer is structural: the tools are built for individuals.

Copilot, Cursor, Claude, Gemini — all of them are designed around a single developer, a single context window, a single session. They are remarkable at that scale. A skilled engineer with good AI tooling is genuinely a different category of operator than they were three years ago. Jamie says he's been coding more than at any point in the last three years combined. I believe it. I've seen the same pattern myself.

But the gains compound strangely. As individuals become more capable, the team structure that was designed around older individual output rates starts to misalign. Senior engineers get pulled in more directions, not fewer. More coding, more architecture decisions, more meetings to align the very work the tools were supposed to streamline. Jamie describes mentoring time and thinking time getting squeezed out. That's a specific kind of loss — invisible in output metrics, but real in team trajectory and long-term capability.

I'd call this **Single-Player Mode**: the condition where tooling is optimised for individual throughput with no structural adjustment to how team-level work is distributed or governed. The skills redistribution Jamie notices — where engineers who adopt AI get more influence — is a symptom of this. It isn't that those engineers are doing better work in any meaningful sense. It's that they're producing more output, and output volume starts shaping decisions in the absence of any other signal. Single-Player Mode isn't a feature of the technology. It's a bug in how organisations have absorbed it.

## The Missing Operating Model

The industry found the engine. It hasn't finished building the vehicle.

The tools give us extraordinary individual capability. What they don't give us is a model for how that capability distributes across a team — who owns which decisions, how work aligns before it starts rather than after it collides, how quality is defined and by whom. That structure has to come from somewhere else.

This is the gap I tried to address when I built [APEX](/posts/2026-04-05-apex-framework/). I want to be direct about what it is: my attempt to map out an operating model for teams running agentic work. Not a product, not a prescription — a framework I put together because I kept running into the same structural failure. Capable people, capable tools, and coordination that kept breaking down at the seams.

APEX organises work into three phases: **Strategic**, **Execution**, and **Reflection**. Nine domains distributed across those phases, each with defined ownership. The core principle is simple: nobody owns everything, nobody owns nothing.

The Strategic Phase is where Jamie's alignment problems get solved — before execution starts. This is where teams define what they're building, why, and for whom. Where specs are written and shared. Where the boundaries that agents will work within get drawn explicitly. The work that feels like overhead is, in practice, the most important work. When three teams skip the Strategic Phase and each build independently, they aren't being efficient. They're borrowing time from future alignment and paying interest.

The Reflection Phase is where the system learns. Not just whether a cycle shipped — but whether it shipped the right things, whether the process improved, whether the quality signal is getting sharper or noisier over time. This is where Jamie's concern about productivity gains going to volume rather than quality actually gets addressed. Without a Reflection Phase, there's no mechanism to tell volume from value. The system just runs faster, with no way to verify it's heading in the right direction.

## The Squad That Had No Briefing

There's a scene in *Aliens* (1986) worth pausing on here.

The colonial marines are genuinely capable. Weapons, training, defined squad roles. They arrive with real capacity. And then things fall apart almost immediately — not because they're incompetent, but because they walked into the operation without adequate context about what they were facing. The Strategic Phase of that mission was skipped. Nobody briefed them correctly on what a xenomorph hive actually looks like or how it behaves. And Burke, the company representative, actively withheld the information that would have changed their entire approach.

That's the parallel that matters to me. Burke didn't lie about whether the threat existed. He just didn't give the squad the context they needed to configure themselves correctly for what was ahead. Capable operators, walking into a situation they weren't set up to handle. The result is exactly what you'd predict.

Ripley's approach — working alone, improvising, holding everything together in her own head — is the single-player model. It works. It's genuinely impressive. It's also unsustainable at scale, and by the end of the film she knows it. The squad model, with defined roles and clear ownership, is the right design for operating at that kind of complexity. It just requires the briefing that Burke withheld.

Organisations that skip the Strategic Phase are, in this sense, Burke. They deploy capable teams — human and agent alike — without the context those teams need to operate coherently. The failure mode isn't a lack of capability. It's a failure of configuration.

## An Open Question About Sustainability

I don't have the full picture on where this goes. I don't think anyone does yet.

What I can say from experience is that the tools are genuinely powerful, and the individual gains are real. But individual gains that generate collective chaos aren't net gains — they're debt with a lag. Jamie's article is a senior engineer three years deep, telling you that lag is already being felt inside a 4,000-person engineering organisation.

The question isn't whether AI makes individuals more productive. At this point, the evidence on that is strong enough. The harder question is whether the organisations around those individuals are building the structures to make that productivity hold — the alignment before execution starts, the shared definition of quality, the mechanisms that let the system learn rather than just run faster.

Is the industry ready to do that work? Or does it keep optimising for throughput and accepting the Alignment Tax as a cost of doing business?

I think the answer to that is still genuinely open.

---

<!-- 
AUTHOR FLAGS — passages to review before publishing:

1. **Aliens / Burke parallel (precision):** Burke's motivation in the film is profit and cover-up — he's actively malicious, not merely negligent. The parallel as written maps him to "organisations that skip the Strategic Phase," which is a structural/negligence reading rather than a bad-faith reading. This works rhetorically but a film-literate reader may notice the stretch. Consider softening to "something like Burke's role" or adding a brief note that the parallel is structural rather than motivational, if precision matters more than momentum here.

2. **"does real work for me when I explain this" (Aliens section opener):** This phrasing was chosen to avoid the banned "I keep coming back to..." variant. It's close but distinct. Review whether it still sounds natural in Herbert's voice or whether a simpler opener works better — e.g. "There's a scene in *Aliens* (1986) worth pausing on here."

3. **Closing tone:** The brief asked for an "open question, not punchline." Current closing ends on "I think the answer to that is still genuinely open." This lands as a stance rather than a pure question. If Herbert prefers to close on a literal open question (e.g. "What would it take for the organisations around those tools to catch up?"), that's an easy adjustment. Current version reads as measured and honest — but flag for Herbert to decide.

4. **Word count:** Approximately 1,380 words (body text, excluding frontmatter). Within the 1,300–1,500 target.

5. **APEX description — "nine domains":** The article mentions nine domains distributed across three phases but doesn't name any of them. This is intentional (the APEX article link handles that depth), but if Herbert wants one concrete example — e.g. "the Business Context domain, owned by whoever knows the market best" — it could ground the framework claim more quickly. Currently left at the structural level to keep this article tight and not duplicate the APEX post.
-->
