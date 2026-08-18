---
title: "After 650 Failed Ideas, Who Decides to Continue?"
excerpt: "Claude’s mathematics run makes a new kind of leadership decision visible: when persistence can be bought in another batch of compute, someone must decide whether the next search deserves funding."
tldr: "Anthropic’s Claude did not prove the Riemann hypothesis, and the published evidence does not show that 650 failed ideas caused the new result. The case does show that organizations can provision persistent search as a metered input, which makes question selection, independent verification, staged renewal, controlled redirection, and enforceable stopping conditions part of capital allocation."
tags:
  - AI
  - leadership
  - strategy
permalink: /drafts/b90f4cfe/
layout: post.njk
date: 2026-08-18
---

For a leader, the revealing part of Anthropic’s mathematics experiment sits between two sessions. The first did not solve its original challenge. According to [Anthropic’s account](https://www.anthropic.com/research/riemann-zeta), staff member Jarred Sumner, a non-mathematician who prompted the challenge, encouraged continued work, and a second session produced a narrower result worth examining.

Anthropic, the AI company behind Claude, reported on 10 August 2026 that an unreleased research version of its system had generated 650 unsuccessful ideas. Across two sessions in Claude Code, Anthropic’s tool-using coding environment, the work consumed 31 million output tokens and involved about 60 subagents over roughly a day and a half. An output token is a metered unit of model-generated text; a subagent is a delegated AI process working on part of the task, not another employee.

Those figures establish the scale of the search, not what caused its success. Anthropic published no dollar cost, released no controlled comparison, and has not made the research model available for a full rerun. Still, the sequence exposes something important: an organization can now provision another large batch of search after hundreds of dead ends. Persistence has become a capital decision.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>The case is best read as a human renewal decision around a large AI search, not as proof that failure counts mechanically produce discovery.</p>
</div>

## The result had somewhere firm to land

The Riemann zeta function is a mathematical function closely connected to the distribution of prime numbers. A zero is a complex-number input where the function equals zero, and “nontrivial” excludes a known family of easy cases. The Riemann hypothesis, proposed by German mathematician Bernhard Riemann in 1859, says all nontrivial zeros lie on the critical line, a fixed line where the real part of the input equals one half.

Claude did not prove that hypothesis. Its [public preprint](https://www-cdn.anthropic.com/564f962e60643842f5fcb4a17c9dbc8f608f1c37.pdf) claims that at least two thirds of the relevant zeros are simple, meaning they occur once rather than repeatedly at the same point, and lie on the critical line. That raises the unconditional lower bound, the minimum share proved without assuming the hypothesis, from 5/12 to 2/3. It is a 25-percentage-point advance, while leaving the famous conjecture and the remaining third unresolved.

The result also rests on a long human research chain. Number theorist J. Brian Conrey’s [1989 journal paper](https://doi.org/10.1515/crll.1989.399.1) proved that more than two fifths of the zeros lie on the line, and later work reached 5/12 in 2020. The “37-year record” framing spans that history; it does not mean mathematics stood still for 37 years. The new proof explicitly uses a [2024 published result](https://arxiv.org/abs/2306.04799) by number theorists Siegfred Baluyot, Daniel Goldston, Ade Irma Suriajaya, and Caroline Turnage-Butterbaugh, then adds a new linear-algebraic reading, which recasts part of the problem as relationships that linear algebra can analyze.

Verification made this search more than a volume exercise. Anthropic reports numerical tests, searches for counterexamples, reciprocal proof review among subagents, and checks across 54 papers on arXiv, an open repository for research preprints. It also released a [Lean 4 formalization](https://github.com/anthropics/zeta-23-lean); Lean 4 is software that checks whether a precisely encoded proof follows from its declared assumptions. That artifact improves auditability, but it cannot establish importance, novelty, or broad acceptance by the field. Anthropic’s internal mathematicians reviewed the work, and the company says two outside specialists examined it on short notice, which remains different from completed journal peer review or independent replication.

This matters to the economic argument because mathematics offers unusually sharp rejection signals. A proof can fail at a specific step, a numerical test can expose a counterexample, and a formal checker can reject an invalid derivation. Persistent AI search has a much weaker foundation when the objective is merely to produce a convincing strategy or a plausible product idea.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>The advance is a bounded, inspectable theorem built on decades of human mathematics. Its clear tests make it a favorable case for persistent search, not a general proof that more agent activity creates value.</p>
</div>

## Search capacity is not the same as knowledge

Humans do not make hundreds of visible bets at zero personal cost. Fatigue limits attention, repeated failure can carry shame, and a long-shot problem competes with the finite time of a career. The Claude case did not measure those effects. The narrower economic point is that an AI system can absorb more retries without experiencing them, while its organization converts the effort into compute, tool access, and reviewer hours.

That changes where scarcity appears. When subagents generate candidate arguments faster than qualified people or independent systems can check them, the verification queue grows. At that point, another million output tokens may buy more unresolved claims rather than more knowledge. The meaningful measure is therefore total resources per independently validated outcome, including review time, replication work, failed paths, and the opportunity cost of projects left unfunded.

I think this is what it means for productivity to become capital. Search capacity can be bought in stages and moved between questions, much like any other productive resource. Yet capital only creates an option; it does not tell us whether exercising that option is wise. One spectacular case supplies no average return for agent swarms, and a machine’s willingness to continue can make a weak hunch more expensive without making it better.

Failures become useful assets only when they are preserved with enough detail to change the next search. A record of rejected hypotheses, tests, sources, and proof paths can prevent another agent from purchasing the same dead ends. Without that memory and a real feedback signal, tirelessness is repetition with a meter attached.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>AI can shift the constraint from generating candidates to verifying them. Leaders should value independently accepted outcomes and reusable failure evidence, not tokens, retries, or agent counts on their own.</p>
</div>

## Continuation needs an owner and an expiry

A persistent search should enter an existing portfolio forum as a time-limited investment. Before work begins, four accountabilities need names:

- The **value owner** states the primary question and why its possible answer is worth the budget.
- An **independent evidence owner** defines what would count as success or failure and the amount of review the organization can actually supply.
- The **platform owner** enforces the total ceiling across subagents, time, tool permissions, queued work, and jobs already in flight.
- A **renewal authority**, separate from the running agents, compares the evidence with the next best use of the resources and decides whether another stage is justified.

The authorization itself should move from proposed to authorized, running, and closed. Once closed, the same authorization cannot return to running. Continuing requires a newly signed version with an explicit objective, evidence gate, reviewer capacity, and budget; the agent cannot renew its own campaign. When a ceiling is reached, the platform must block new and queued work, handle in-flight jobs according to the agreed risk rule, and revoke unneeded credentials.

Hard searches can also produce valuable adjacent findings, as this one did after the original objective remained out of reach. That possibility needs a boundary rather than a ban. A side result may be promoted only when it can be stated as a new objective that evidence could also disprove and judged on its own terms. It cannot be counted retroactively as success for the question that failed.

Applied as an illustration, the public Claude story would reach its first boundary with the original hypothesis unresolved, 650 rejected ideas recorded, and a narrower lower-bound direction proposed. A second stage could authorize that revised target, reserve specialist review, cap the added search, and require a rigorous proof, attempts to break it, a literature check, and formal verification. It would stop if no new testable path appeared before the cap or if candidate production outran the available reviewers. This is a governance example built from published facts, not a claim about Anthropic’s internal approval process.

These controls keep experimentation lightweight while preventing sunk cost and abundant output from quietly granting themselves more authority. Business, risk, data, procurement, and employee representatives can join through the organization’s existing forums when the scope requires them. Someone still has to own the final refusal.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>Fund persistent AI search in expiring stages with separate owners for value, evidence, technical enforcement, and renewal. Redirect adjacent discoveries through a new objective, and make closure technically binding rather than advisory.</p>
</div>

## Meanwhile in sci-fi

<div class="scifi">
<span class="scifi__label">Meanwhile in sci-fi</span>
<p class="scifi__film">Edge of Tomorrow (2014)</p>
<p>In this science-fiction film, a soldier relives the same deadly day and improves because information survives each reset. The mapping here is limited but useful: an agent loop gains value when each failed run changes the next one, while human leaders control whether the loop receives another reset. Tirelessness becomes productive only when the organization can also refuse it.</p>
</div>
