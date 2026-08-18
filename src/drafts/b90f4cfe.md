---
title: "The economics of the 650th attempt"
tldr: "Anthropic’s reported mathematical advance shows that organizations can now provision repeated AI search at a scale no person could comfortably sustain. The opportunity is real, but so is the risk of funding polished dead ends. Leaders should treat machine persistence as expiring authority, with independent evidence, review capacity, renewal rights, and stopping rules fixed before the first run."
permalink: /drafts/b90f4cfe/
layout: post.njk
date: 2026-08-18
---

One number in Anthropic’s new mathematics result matters far beyond mathematics: 650.

That is how many ideas the AI company says an unreleased research version of Claude, Anthropic’s AI system, tried without success before producing a reported proof about the Riemann zeta function, a mathematical function tied to patterns in prime numbers. [Anthropic reports](https://www.anthropic.com/research/riemann-zeta) that the project ran across two sessions in Claude Code, its tool-using environment for coding and research, and produced 31 million output tokens. An output token is a metered unit of model-generated text. After the early failures, Claude reportedly coordinated about 60 subagents, meaning delegated AI runs working on parts of the problem, for roughly a day and a half.

Anthropic is both the operator and the source for those process figures, so they are not an independent audit. Even with that boundary, the case exposes a consequential change. An organization can now provision another large batch of attempts without asking one person to carry every dead end. Leadership therefore moves upstream: choose the question that deserves such persistence, decide what evidence could justify more of it, and give someone clear authority to end the campaign.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>Claude’s reported achievement matters because repeated search has become an input leaders can allocate. That makes question choice, evidence, and termination more important, not less.</p>
</div>

## The result has several owners

The mathematics keeps the larger claim honest. The Riemann zeta function takes complex numbers as inputs, and its zeros reveal patterns in the distribution of prime numbers. In 1859, German mathematician Bernhard Riemann proposed that all its nontrivial zeros, the solutions left after a known family is set aside, lie on a vertical location called the critical line, where the real coordinate equals one half. That still-unproved claim is the Riemann hypothesis, and Claude did not solve it.

A lower bound means a proven minimum share of those zeros on the critical line. The [August 13, 2026 arXiv preprint](https://arxiv.org/abs/2608.13637v1), posted to an open repository for scholarly papers before journal publication, reports an unconditional lower bound of at least two thirds, meaning the proof does not assume the Riemann hypothesis is true. A refined version gives 0.6725. The previous record was 5/12, about 41.7%, and had stood since 2020. The popular “37-year” framing reaches back to a peer-reviewed 1989 result, but human mathematicians continued improving the bound in between.

The preprint lists Levent Alpöge and Ralph Furman, mathematicians at Anthropic. It says Claude discovered the proof while the listed authors verified and communicated it and took responsibility for the paper. Anthropic also says outside number theorists Brian Conrey and Dan Goldston examined the work on short notice. A [public Lean 4 companion](https://github.com/anthropics/zeta-23-lean) adds another layer: Lean 4 is a proof assistant that checks whether a precisely encoded argument follows from its stated assumptions.

Those checks matter, but they are different from broad independent acceptance. The result remains a fresh preprint without conventional journal peer review or independent replication. Lean can check the formal statement it was given; it cannot settle the paper’s importance, priority, or every judgment involved in translating mathematics into code.

Nor did 650 failures create the proof from nothing. The paper builds on decades of number theory, including [peer-reviewed work published in 2024](https://arxiv.org/abs/2306.04799) on how zeta zeros are spaced, and describes its new ingredient as a new interpretation of that earlier work using linear algebra, the mathematics of vectors and transformations. Anthropic also reports numerical checks, counterexample searches, scripts, and a review of 54 papers for prior art. Persistence was part of an instrumented research process, not a substitute for inherited knowledge or verification.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>The reported bound is a substantial but narrow preprint result built on human mathematics and several checking layers. It supports a case for scaled search, not a claim that retries alone produced truth.</p>
</div>

## Count accepted results, not attempts

Once the claim is bounded, its economic meaning becomes clearer. Human persistence has usually been bundled with a person’s time, health, reputation, and alternative opportunities. Fatigue, shame, and career risk can end a promising inquiry too early; the Claude case did not measure any of them. Yet those human limits also supplied a rough brake. A tireless system removes the discomfort without automatically replacing the judgment behind stopping.

The reported token count does not tell us what the project cost. Anthropic has not publicly supplied the input-token volume, exact model build and settings, complete tool and compute ledger, total human and reviewer effort, or a full record of every abandoned branch. “650 ideas” is also Anthropic’s unit, not a standard category that can be compared across research campaigns. There is no published denominator showing how often similarly large searches fail completely.

That changes what belongs on the value side of the ledger. Model output, attempts, and agent hours are inputs. They become organizational value only when a separate acceptance process can reproduce or use the outcome. For hard searches, the scarce resource may therefore become qualified review rather than machine effort: adding agents can expand the queue faster than experts can reject weak claims.

Evidence from ordinary work reinforces the need to measure outcomes in context. A [2023 working paper from the National Bureau of Economic Research](https://www.nber.org/papers/w31161), a U.S. economics research organization, found that an AI assistant raised issues resolved per hour by 14% on average among 5,179 customer-support workers. In a different setting, a [2025 randomized study from METR](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/), an independent AI research organization, found that 16 experienced open-source developers using early-2025 AI tools took 19% longer on 246 real tasks. Neither study concerns frontier mathematics. Together, they show why activity and confidence cannot stand in for measured value.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>The meaningful economic unit is an independently accepted outcome, including the cost of review. Cheap retries can increase value, but they can also produce a larger and more persuasive backlog of claims.</p>
</div>

## Make permission expire

A universal token limit would be simple and mostly useless. A theorem search, a product decision, and a hiring question do not share an acceptance test. The reusable control is an expiring search mandate: a one-page record that binds spending and authority to a specific question.

That record should contain:

- **Question and comparator:** the exact claim or decision being investigated, plus how the organization handles it today.
- **Evidence gate:** what would count as success, disconfirmation, and novelty, and which reviewer with a different failure mode can accept the result.
- **Capacity:** ceilings for cash, elapsed time, tool access, data permissions, and reviewer hours.
- **State:** `ACTIVE` may launch new work; `PAUSED` preserves evidence but launches nothing; `CLOSED` revokes access and archives the campaign.
- **Renewal and closure:** an expiry date, a renewal owner outside the delivery team, the new evidence required for another tranche, and responsibility for preserving failed paths.

The state has to control execution, not merely describe it in a document. Before any new run starts, the system should read the current authoritative record. An expired approval, a stale copy, or an attempt by the delivery team or its agents to renew themselves should refuse to launch rather than assume permission.

This matters even more outside mathematics. A formal proof has a precise statement and a machine-checkable route to validation. A strategy campaign can generate its own assumptions, evidence, and recommendation, then cite that closed circle as progress. Independent acceptance and expiring permission are what prevent a hunch from acquiring a permanent budget simply because the system can keep arguing for it.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>Persistent AI search should run under a mandate with explicit evidence, resource caps, operational states, separate renewal authority, and a closure duty. When permission expires, the system should default to refusing another run.</p>
</div>

## Test the mandate against today’s process

The operating model becomes credible only when it beats a real alternative. An illustrative pilot might run for six weeks across ten already-approved research or design questions while a comparable set follows the current process. Before launch, the team could require at least two independently accepted outcomes within a fixed full-cost ceiling, including model, tool, operator, and reviewer expense. It could also cap the reviewer queue at five working days and pause any campaign that crosses a permission boundary or seeks two renewals without new falsifiable evidence.

Those figures are examples, not universal benchmarks. Their purpose is to make the decision date and the conditions for rejection visible before anyone becomes attached to a result. Some searches may be worth funding even when they produce no accepted answer, but then the valuable learning and the conditions for recognizing it must also be declared in advance.

At the decision date, compare accepted outcomes, reviewer delay, full campaign cost, renewals granted without new evidence, and closures later reopened because useful evidence emerged. Include the failed paths in the archive so another system does not pay to rediscover them. This shows which campaigns continued too long and which may have stopped too soon, while keeping the comparison anchored to the organization’s present way of working.

I think this is the leadership shift hidden inside the mathematics. People are not reduced to supervising machines; they still contribute ideas, domain knowledge, interpretation, relationships, and accountability. But when another attempt is easy to authorize, the human obligation is no longer expressed by saying “keep going.” It is expressed by deciding when another attempt remains worthy of shared money and attention.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>A bounded pilot should predeclare its comparator, review capacity, cost threshold, decision date, and reasons to pause. The test is whether governed persistence creates more independently accepted value than the current process.</p>
</div>

## Meanwhile in sci-fi

<div class="scifi">
<span class="scifi__label">Meanwhile in sci-fi</span>
<p class="scifi__film">Edge of Tomorrow (2014)</p>
<p>Doug Liman’s 2014 science-fiction film follows a soldier trapped in the same battle, able to carry information from each death into the next attempt. The mapping is precise: repeated AI search matters only when failure changes the next run and an external objective defines escape. Leaders do not have to match a machine’s willingness to repeat the day; they have to decide which day deserves repeating, what evidence shows learning, and when permission ends.</p>
</div>
