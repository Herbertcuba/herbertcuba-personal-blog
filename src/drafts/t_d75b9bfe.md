---
title: "The 15-Minute Graph vs. the 105-Minute Eval"
date: 2026-07-29
excerpt: "Lance Martin's two-hour workshop at the AI Engineer World's Fair drew half a million views for the graph. The people who watched it carefully noticed something else: the diagram was done in fifteen minutes. The rest of the time was evaluation."
featuredImage: "/images/posts/graph-eval-trust-plane.webp"
layout: post.njk
permalink: /drafts/graph-eval-trust-plane/
tags: ["ai", "agentic-engineering", "evaluation", "graphs"]
tldr:
  - "Lance Martin's two-hour workshop at the AI Engineer World's Fair drew half a million views for the graph. The people who watched it carefully noticed something else: the diagram was done in fifteen minutes. The rest of the time was evaluation."
  - "The viral takeaway — '70% of Anthropic engineers use self-improving loops, no more prompting in 3-6 months' — is a hype account's paraphrase. Treat it as a signal about where tooling is heading, not a roadmap for your team this quarter."
  - "A graph without an eval set is a diagram with opinions. Drawing the graph is an afternoon. Proving it holds on inputs you did not choose is the job."
  - "Graphs are the control plane. Types and evals are the trust plane. You need both, but the trust plane is where the engineering actually lives."
---

I tried to build a self-improving agent graph last month. I got the diagram working in an afternoon. Then I spent two weeks trying to figure out whether it was actually improving or just getting louder.

That gap — between drawing the graph and proving it works — is what Lance Martin's workshop at the AI Engineer World's Fair was actually about. If you only saw the screenshots, you missed the point.

## The viral version vs. the actual workshop

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>The hype account said '70% of Anthropic engineers use self-improving loops, no more prompting in 3-6 months.' The workshop itself was fifteen minutes of graph, 105 minutes of eval. The ratio is the argument.</p></div>

Movez's post got 553,800 views and 2,900 reposts. The claim: 70% of Anthropic engineers are using self-improving loops, and in three to six months we'll all be building graphs to orchestrate self-improving agents. No more prompting.

I think that number deserves scrutiny before you quote it. Movez is a hype account. The claim is a paraphrase of a talk, not a direct quote from Lance Martin or Anthropic. I don't know if 70% is accurate, what 'self-improving loops' means in that context, or whether the three-to-six-month timeline is Martin's projection or Movez's compression. Treat it as directional, not documentary.

What I do know is what Jey noticed. The graph diagram is done in the first fifteen minutes of the workshop. The remaining 105 minutes keep returning to evaluation. Martin ends by building eval datasets for the graph. The structure of the talk is the argument: the graph is the easy part. The eval is the work.

## A graph without an eval set is a diagram with opinions

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Drawing a graph is an afternoon. Proving it holds on inputs you did not choose is the job. Most teams have the first and not the second.</p></div>

Here's the question I want you to sit with: which node in your graph has never met an input you did not write yourself?

If you built a multi-agent system and your eval set is the same five test cases you used during development, you have a diagram with opinions. You have a system that performs on the distribution you imagined, not the distribution that exists. The gap between those two is where production failures live.

In my experience, this is the most common failure mode in agentic engineering right now. The graph looks sophisticated. The eval is an afterthought. The team ships, the system encounters inputs from outside the training distribution of the eval set, and the failure is silent. The agent doesn't crash. It produces plausible output that is wrong in ways nobody checks for.

I think this happens because evals feel like overhead. Graphs feel like progress. You can demo a graph. You can put it in a slide. An eval set is a spreadsheet of inputs and expected outputs that nobody wants to maintain. It feels like documentation. It is actually the control system.

<div class="scifi">
<span class="scifi__label">Meanwhile, in science fiction</span>
<p class="scifi__film">Blade Runner — the Voight-Kampff test</p>
<p>In <em>Blade Runner</em>, the Voight-Kampff machine doesn't ask replicants what they can do. It asks them questions designed to produce responses their designers didn't anticipate. The test isn't about capability. It's about whether the system holds when the input distribution shifts.</p>
<p>That's what an eval set is. It's your Voight-Kampff. Without it, you're running replicants and calling them human because they passed your own five questions.</p>
</div>

## The control plane and the trust plane

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Graphs are the control plane — they route work. Types and evals are the trust plane — they define what 'correct' means. You need both, but the trust plane is where the engineering lives.</p></div>

This connects to something I wrote about typed state in agent systems. The typed state article argued that types are the contract between nodes. The graph article extends that: the graph is the control plane, the types and evals are the trust plane.

The control plane decides where work goes. The trust plane decides whether the work is any good. A system with a control plane and no trust plane is a router that sends packets into the void. A system with a trust plane and no control plane is a quality inspector with no factory.

The 'no more prompting' claim is worth taking seriously and deflating at the same time. It's the new 'no more code.' Prompting isn't disappearing. It's being absorbed into the graph as a design material. The prompt becomes one node among many, governed by the same eval discipline as the rest of the system. The skill isn't prompting. The skill is designing systems where the prompt's output can be verified.

## What 70% adoption inside Anthropic actually tells you

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Anthropic's internal adoption rate tells you what tooling will assume in twelve months. It does not tell you what your org should do this quarter.</p></div>

If 70% of Anthropic engineers really are building self-improving loops, that tells you something important about the tooling roadmap. The frameworks will converge on graph-native abstractions. The eval tooling will improve. The default assumptions in twelve months will look like the workshop's structure: graph first, eval immediately after.

That does not mean your team should drop what it's doing and rebuild everything as self-improving agent graphs. In my experience, the gap between 'Anthropic's internal tooling assumptions' and 'what a normal enterprise can safely adopt' is eighteen to twenty-four months. The early adopters inside frontier labs are debugging the failure modes. You want to adopt after they've published the postmortems.

The practical move this quarter is narrower. Take one workflow you already run. Draw the graph — fifteen minutes, it's genuinely not hard. Then spend the rest of your time building the eval set for that graph. Not the happy path. The adversarial inputs. The edge cases. The ones you didn't choose.

## The through-line

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Everyone screenshots the graph. Nobody ships the eval set. The ratio between the two is where agent engineering actually lives.</p></div>

The workshop's ratio is the industry's ratio. Fifteen minutes of architecture, 105 minutes of verification. The graph is the visible artifact. The eval set is the invisible infrastructure that makes the artifact worth anything.

I think the teams that pull ahead in the next year won't be the ones with the most sophisticated graphs. They'll be the ones with the most honest eval sets. The ones who can answer the question: which node has never met an input you did not write yourself, and what happens when it does?

The graph is an afternoon. The eval is the job.
