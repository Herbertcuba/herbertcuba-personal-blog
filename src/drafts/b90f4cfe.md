---
title: "Tireless intelligence needs a stopping rule"
description: "Anthropic says Claude raised the proven minimum share of nontrivial zeros of the Riemann zeta function that lie on the critical line. The function helps study prime-number patterns; its zeros are inputs where it equals zero, nontrivial ones exclude negative even numbers, and the critical line is the center of their known band. The result did not prove the Riemann hypothesis. Its 650 rejected ideas turn AI persistence into a leadership question about evidence, budget, and stopping authority."
tldr: "Anthropic says an unreleased Claude system used 31 million output tokens, metered units of model text, across two Claude Code sessions and tried 650 failed ideas. Its proof guarantees that at least two thirds of nontrivial zeros lie on the critical line. The Riemann zeta function helps study prime-number patterns; its zeros are inputs where it equals zero, nontrivial ones exclude negative even numbers, and the critical line is the center of their known band. Claude did not prove the Riemann hypothesis or show persistence caused it. Leaders need independent evidence and stopping authority before tireless search begins."
permalink: /drafts/b90f4cfe/
layout: post.njk
date: 2026-08-14
---

After 650 failed ideas, continuing was no longer just an act of thought. It was an authorization.

On August 10, 2026, [Anthropic, the AI company behind Claude](https://www.anthropic.com/research/riemann-zeta), reported that an unreleased research version of the system had advanced a difficult mathematical bound. The result emerged across two sessions in Claude Code, Anthropic's coding-agent environment, using 31 million output tokens, units of text produced by the model and used to meter its activity.

Anthropic says Claude first generated and tried 650 ideas, none of which worked. A later day-and-a-half effort coordinated about 60 subagents, delegated AI processes working on parts of the problem. They did not produce one answer and hope for the best; they generated candidates, tested them, searched for errors, and reviewed one another's work.

The tempting explanation is that Claude simply outlasted mathematicians. I think that is too clean. Anthropic's public account contains no controlled comparison showing that the number of attempts caused the result, and it gives no full cost ledger. The successful route also depended on decades of human mathematics, a new conceptual reading of prior work, numerical tests, software-assisted proof checking, and specialist review.

Fatigue, shame, and career risk are therefore a metaphor here, not measurements from this project. They name some of the human pressures that can make repeated failure expensive. I think the important change is that part of this burden can now be moved into an allocatable search budget, which concentrates human responsibility around the question, the evidence, and the permission to continue.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Claude's 650 rejected ideas show that retry capacity can now be funded as an organizational resource. The leadership choice is which question deserves another batch, what evidence can reject its answer, and who has authority to stop.</p></div>

## What actually moved

The Riemann zeta function is a mathematical function used to study how prime numbers are distributed. A zero is an input where the function's value equals zero. The easy-to-describe zeros at negative even numbers are called trivial; the other zeros relevant to this problem are nontrivial and are known to lie within a vertical band.

In 1859, German mathematician Bernhard Riemann proposed that every nontrivial zero lies on the center of that band, a location called the critical line. That claim became the Riemann hypothesis, one of mathematics' best-known unsolved problems. Claude did not prove it.

Claude's [preprint, a research paper released before conventional journal peer review](https://www-cdn.anthropic.com/564f962e60643842f5fcb4a17c9dbc8f608f1c37.pdf), proves a narrower lower bound, meaning a guaranteed minimum share. As mathematicians count zeros at increasingly great heights, the paper raises the proven minimum share of nontrivial zeros on the critical line from 5/12, about 41.67 percent, to at least 2/3, about 66.67 percent. An optimized version reports 0.6725, or 67.25 percent.

That result is asymptotic: it describes the long-run proportion as the count extends higher, rather than a census at one fixed point. The denominator counts repeated zeros by multiplicity, the number of times a zero occurs. The paper separately states that at least two thirds are simple zeros, which occur once, and lie on the critical line. The rest are not thereby shown to lie off the line. A lower bound proves a floor, not the full hypothesis.

The popular 37-year framing also needs care. Number theorist J. B. Conrey proved that more than two fifths of the nontrivial zeros lie on the line in a [peer-reviewed 1989 paper](https://doi.org/10.1515/crll.1989.399.1), but later mathematicians kept improving the result and reached the previous 5/12 record in 2020. Claude's paper credits a peer-reviewed 2024 precursor by four number theorists and describes its own new ingredient as using linear algebra, the mathematics of vectors and matrices, to read that prior work differently. This was a living human research frontier, not 37 years of silence followed by a machine.

Anthropic reports 2,400 command-line instructions, hundreds of small programs written in Python, a widely used programming language, numerical checks, searches for counterexamples, proof review, and a search through 54 research papers for prior work. Two Anthropic mathematicians studied the result, and two outside number theorists examined it on short notice. The company also released a [Lean 4 formalization](https://github.com/anthropics/zeta-23-lean). Lean 4 is a theorem-proving programming language; formal verification here means software checked precisely encoded statements and proofs under declared logical assumptions. It gives reviewers another way to reject an invalid proof, although it remains distinct from conventional journal review and broader scrutiny by the field.

I think this hard evidence is why the case matters beyond mathematics. A theorem can be rejected through explicit statements, computation, specialist criticism, and formal checks. Most strategy and product questions do not arrive with an equivalent test, so leaders have to design one before they buy more attempts.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>The result is a specific, asymptotic lower-bound advance built on decades of human mathematics. Several independent checks could test it, which makes this a favorable case for persistent AI search rather than a template that transfers automatically.</p></div>

## Persistence became a budget decision

The 31 million output tokens make the activity visible, but they do not reveal its price. Anthropic disclosed no model price, input-token total, hardware or energy bill, reviewer cost, opportunity cost, or return across comparable campaigns. I don't know whether 60 subagents were necessary, and the released evidence cannot tell us. Copying those numbers would be imitation without economics.

The leadership issue does not depend on claiming that repeated AI search began with this project. It depends on what the disclosed case makes operationally visible: an organization can provision a large search rather than asking one person to absorb every dead end. I think productivity begins to behave like capital at that point. Attempts become easier to supply, while expert attention, independent review, and the choice among competing questions remain scarce.

Evidence from ordinary work reinforces the distinction between activity and value. A [2023 working paper](https://www.nber.org/papers/w31161), research circulated before conventional journal peer review, from the National Bureau of Economic Research, a U.S. economics research organization, studied 5,179 customer-support workers and reported a 14 percent average increase in issues resolved per hour after access to a conversational assistant. By contrast, a [2025 randomized study](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/) by METR, an independent organization that evaluates AI systems, assigned 246 software issues to 16 experienced open-source developers and found that those allowed early-2025 AI tools took 19 percent longer. METR now labels that historical result out of date after newer 2026 data, but it still shows why a measured task matters more than confidence or output volume.

My take is that cheap-looking attempts can hide expensive institutions. Every additional batch consumes review, delays alternatives, and gives the original hunch another chance to redefine success. The economic unit that matters is the full cost per result that survives an agreed, independent test, not tokens generated.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Output tokens reveal the scale of activity, not the campaign's financial return. Persistent AI work should be judged by the full cost of producing a result that an independent evaluator can reproduce.</p></div>

## Decide before another batch

A tireless system can always produce one more reason to continue. I think leaders should answer that problem with a Tireless Intelligence Charter: a short commitment written before the search begins. It should name the exact question, what counts as success, what evidence would count against the working hunch, the first resource limit, the independent evaluator, and the forum allowed to renew the work. This is my proposed operating rule, not a process Anthropic says it followed.

Authority should be split because the people running a campaign are also best placed to explain why its latest failure looks promising. A business sponsor should own the question and its value, while an evaluator outside the delivery team owns the acceptance test and tries to reproduce the result. An existing quarterly portfolio review or architecture board should own renewal because it can compare another batch with the strongest unfunded alternative.

The charter should also require a full cost envelope for each stage: model usage, external tools, elapsed time, reviewer hours, replication work, and the opportunity cost of delayed projects. Anthropic disclosed no defensible dollar figure, so leaders should fill this envelope from their own prices and reviewer rates rather than treating 31 million tokens as a benchmark. Renewal should require an independently reproduced improvement, a new claim that the next test could disprove, or evidence that materially changes the test. Repeated failure without a new test, failed replication, or risk beyond the original authority should stop the campaign or send it back for a new charter.

Without that commitment, the evidence standard can move after the result is known. A miss becomes “learning,” recurring error becomes “exploration,” and more output becomes evidence that the problem deserves still more output. I call this evidence-threshold inflation. Prewritten stopping rules protect the institution from quietly making every hunch impossible to disprove.

A stopped search need not disappear. Preserve rejected hypotheses, failed checks, reviewer objections, and the reason each route ended, so another team can inspect what was tried rather than paying to rediscover the same dead ends. I think this is what leadership becomes when attempt 651 is easy to authorize: choosing what deserves persistence and remaining accountable for the word enough.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Before persistent AI work starts, assign the question, evidence test, staged cost envelope, independent evaluator, renewal forum, and stopping rule. The delivery team may request another batch, but it should not own the authority to grant one.</p></div>

## Meanwhile in sci-fi

<div class="scifi">
<span class="scifi__label">Meanwhile in sci-fi</span>
<p class="scifi__film">Edge of Tomorrow (2014)</p>
<p>Doug Liman's 2014 science-fiction film follows Major William Cage, a soldier who returns to the start of the same battle whenever he dies. The reset helps because he remembers what each failed loop revealed.</p>
</div>

The mapping is precise up to a point: an AI subagent can begin another attempt without carrying human fatigue, while the institution pays cumulative compute, review, delay, and diverted attention. Unlike Cage, the organization does not reset its budget or recover the alternatives it postponed. Humans do not add value by matching the machine's willingness to repeat. They decide which day is worth repeating, what evidence would count as escape, and when another loop no longer deserves permission.
