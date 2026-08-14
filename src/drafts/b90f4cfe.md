---
title: "Tireless intelligence needs a stopping rule"
description: "Anthropic says Claude raised the proven minimum share of nontrivial Riemann zeta zeros lying on the critical line after 650 failed ideas. The result does not prove the Riemann hypothesis; it turns scalable AI persistence into a leadership question about evidence, budgets, and when to stop."
tldr: "Anthropic says an unreleased Claude system used 31 million output tokens, units of model-produced text, tried 650 unsuccessful ideas, and coordinated about 60 subagents before producing a new lower-bound proof: at least two thirds of nontrivial Riemann zeta zeros lie on the critical line, the center of their known band. It did not prove the Riemann hypothesis, and persistence alone is not shown to have caused the result. Leaders now need independent evidence, staged budgets, and stopping authority before tireless search begins."
permalink: /drafts/b90f4cfe/
layout: post.njk
date: 2026-08-14
---

After 650 failed ideas, continuing was no longer just an act of thought. It was an authorization.

On August 10, 2026, [Anthropic, the AI company behind Claude](https://www.anthropic.com/research/riemann-zeta), reported that an unreleased research version of its system had advanced a difficult mathematical bound. The work generated 31 million output tokens, units of model-produced text, across two sessions in Claude Code, Anthropic's coding-agent environment. After the initial ideas failed, Anthropic says a later day-and-a-half effort coordinated about 60 subagents, delegated AI processes working on parts of the problem.

The tempting explanation is that Claude simply outlasted mathematicians. I think that is too clean. Anthropic's public account contains no controlled comparison showing that the number of attempts caused the result, and it gives no complete cost ledger. The successful route also depended on decades of human mathematics, a new conceptual reading of prior work, numerical tests, software-assisted proof checking, and specialist review.

What changed was narrower and, for leaders, more consequential: persistence became an input an organization could allocate. In this article, fatigue, shame, and career risk are shorthand for human pressures that make repeated failure costly; Anthropic did not measure them in this project. Moving part of that burden into a metered search budget does not remove human responsibility. It concentrates responsibility around the question, the evidence, and the permission to continue.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Claude's 650 rejected ideas show that retry capacity can now be funded as an organizational resource. The important leadership choice is what deserves another batch and what evidence must be able to end the search.</p></div>

## What actually moved

The Riemann zeta function is a mathematical function used to study how prime numbers are distributed. Its zeros are inputs where the function's value equals zero. The easily described zeros at negative even numbers are called trivial; the remaining zeros relevant to this problem are nontrivial and are known to lie in a vertical band. In 1859, the German mathematician Bernhard Riemann proposed that every nontrivial zero lies on the band's center, the critical line, whose horizontal coordinate is one-half. That proposal, the Riemann hypothesis, remains unproved.

Claude's [preprint, a research paper released before conventional journal peer review](https://www-cdn.anthropic.com/564f962e60643842f5fcb4a17c9dbc8f608f1c37.pdf), proves something narrower. As mathematicians count zeros at increasingly great heights, the paper raises the proven minimum share of nontrivial zeros on the critical line from 5/12, about 41.67 percent, to at least 2/3, about 66.67 percent. An optimized version reports 0.6725, or 67.25 percent.

The result is asymptotic: it describes the long-run proportion as mathematicians count higher and higher, rather than a census at one fixed point. Its denominator counts repeated zeros by multiplicity, meaning the number of times a zero occurs. The paper separately states that at least two thirds are simple zeros, which occur once, and lie on the critical line. The remaining zeros are not thereby shown to lie off the line; a lower bound proves a minimum, not the full hypothesis.

The popular 37-year framing also needs care. Number theorist J. B. Conrey proved that more than two fifths of the nontrivial zeros lie on the line in a [peer-reviewed 1989 paper](https://doi.org/10.1515/crll.1989.399.1), but later mathematicians kept improving the result and reached the previous 5/12 record in 2020. Claude's paper credits a peer-reviewed 2024 precursor by four number theorists and describes its own new ingredient as using linear algebra, the mathematics of vectors and matrices, to read that work differently. The achievement emerged from a living research chain, not a machine starting from an empty page.

Anthropic reports 2,400 command-line instructions, hundreds of small programs written in the Python language, numerical checks, searches for examples that would disprove candidate claims, proof review, and a search through 54 research papers for prior work. Two Anthropic mathematicians studied the result, and two outside number theorists examined it on short notice. The company also released a [Lean 4 formalization](https://github.com/anthropics/zeta-23-lean). Lean 4 is a theorem-proving programming language; formal verification here means that software checked precisely encoded statements and proofs under declared logical assumptions. It adds an unusually strong rejection mechanism, although it remains separate from conventional journal review and wider scrutiny by the field.

I think this hard-edged evidence is why the case matters. Mathematics could reject an attractive answer through theorem statements, computation, specialist criticism, and formal checks. Most strategy and product questions do not arrive with an equivalent test, so leaders have to design one before they purchase persistence.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>The result is a specific, asymptotic lower-bound advance built on decades of human mathematics. Several kinds of evidence could test it, which makes this a favorable case for persistent AI search rather than a template that transfers automatically.</p></div>

## Persistence became a budget decision

The 31 million output tokens make the search visible, but they do not give us its price. Anthropic disclosed no model pricing, amount of text fed into the system, hardware or energy bill, reviewer cost, opportunity cost, or return across comparable campaigns. I don't know whether 60 subagents were necessary, and the released evidence cannot tell us. Copying those numbers would be imitation without economics.

I think productivity begins to behave like capital when another batch of cognitive work can be provisioned instead of waiting for more human hours. Attempts become easier to supply, but expert attention, independent review, and the choice among competing questions remain scarce. The relevant economic unit is therefore the full cost per result that survives an agreed test, rather than tokens generated.

Evidence from ordinary work reinforces that distinction. A [2023 working paper](https://www.nber.org/papers/w31161), research circulated before conventional journal peer review, from the National Bureau of Economic Research, a U.S. economics research organization, studied 5,179 customer-support agents and reported a 14 percent average increase in issues resolved per hour after access to a conversational assistant. By contrast, a [2025 randomized study](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/) by METR, an independent organization that evaluates AI systems, assigned 246 software issues to 16 experienced open-source developers and found that those allowed early-2025 AI tools took 19 percent longer. METR now labels that result out of date after newer 2026 data, but the comparison still makes the strategic point: model activity has no context-free economic value.

My take is that cheap-looking attempts can hide expensive institutions. Every additional batch consumes review, delays alternatives, and gives the original hunch another chance to redefine success. I think that makes independent rejection, rather than tirelessness, the scarce capability.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Output tokens reveal the scale of activity, not the campaign's financial return. Persistent AI work should be judged by the full cost of producing a result that independent evidence can reproduce.</p></div>

## Decide before another batch

A tireless system can always produce one more reason to continue. I think leaders should answer that problem with a Tireless Intelligence Charter: a short commitment written before the search begins that names the exact question, what would count as success, what evidence would count against the working hunch, the first resource limit, the independent evaluator, and the forum allowed to renew the work. This is my proposed operating rule, not a process Anthropic says it followed.

Authority should be split because the people running a campaign are also the people most able to explain why its latest failure is promising. A business sponsor owns the question and its value, while an evaluator outside the delivery team owns the acceptance test and tries to reproduce the result. An existing quarterly portfolio review owns renewal because it can compare another batch with the strongest unfunded alternative.

The charter should require a full cost envelope for each stage: model usage, external tools, elapsed time, reviewer hours, replication work, and the opportunity cost of delayed projects. Renewal then requires an independently reproduced improvement, a new claim that the next test could disprove, or evidence that materially changes the next test. Repeated failure without a new test, failed replication, or risk beyond the original authority should stop the campaign or send it back for a new charter.

Without that commitment, the evidence standard tends to move after the result is known. A miss becomes “learning,” recurring error becomes “exploration,” and more output becomes evidence that the problem deserves still more output. I call this evidence-threshold inflation. Prewritten stopping rules protect the institution from quietly making every hunch impossible to disprove.

A stopped search need not be wasted. Preserve rejected hypotheses, failed checks, reviewer objections, and the reason each route ended, so another team does not pay to rediscover the same dead ends. I think this is what leadership becomes when attempt 651 is easy to authorize: choosing what deserves persistence, preserving what failure taught, and remaining accountable for the word enough.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Before persistent AI work starts, assign the question, evidence test, staged cost envelope, independent evaluator, renewal forum, and stopping rule. The team may request another batch, but it should not own the authority to grant one.</p></div>

## Meanwhile in sci-fi

<div class="scifi">
<span class="scifi__label">Meanwhile in sci-fi</span>
<p class="scifi__film">Edge of Tomorrow (2014)</p>
<p>Doug Liman's 2014 science-fiction film follows Major William Cage, a soldier who returns to the start of the same battle whenever he dies. The reset lets him learn because he remembers what each failed loop revealed.</p>
</div>

The mapping is precise up to a point: an AI subagent can start another attempt without carrying human fatigue, while the institution pays cumulative compute, review, delay, and diverted attention. Unlike Cage, the organization does not reset its budget or recover the alternatives it postponed. Humans do not add value by matching the machine's willingness to repeat. They decide which day is worth repeating, what evidence would count as escape, and when another loop no longer deserves permission.
