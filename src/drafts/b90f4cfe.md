---
title: "Tireless intelligence needs a stopping rule"
description: "Claude's Riemann zeta result shows why persistent AI search should be governed as a capital allocation decision, with evidence and stopping rules fixed before launch."
tldr: "Anthropic's Claude result did not show that persistence alone produces discovery. It showed that an organization can now fund a large, metered search after hundreds of failures. Leaders therefore need to choose questions worth that effort, define independent evidence, fund review as well as generation, and make stopping rules enforceable before persistent agents begin."
permalink: /drafts/b90f4cfe/
layout: post.njk
date: 2026-08-17
---

On 10 August 2026, the AI company [Anthropic reported](https://www.anthropic.com/research/riemann-zeta) a sequence that matters more than the headline result. An unreleased research version of Claude, its AI system, first generated and tried 650 candidate ideas for a difficult mathematics problem. All failed. Anthropic has not published a complete trace or explained how it counted an “idea,” so 650 is the company's reported figure rather than an independently audited attempt log.

Then came a human decision. Jarred Sumner, an Anthropic staff member and non-mathematician who had posed the challenge, prompted the system to continue. The work that followed ran across two sessions in Claude Code, Anthropic's tool-using coding-agent environment, and consumed 31 million output tokens, meaning units of text produced by the model. In the later, more intensive search, Claude coordinated about 60 subagents, or delegated tool-using model runs, over roughly a day and a half.

Claude did not prove the Riemann hypothesis. Nor does Anthropic's account establish that persistence caused the result. What it does show is more useful for leaders: after a failed phase, another large search could be authorized, metered and sustained. Persistence is becoming something an organization can provision, which makes the decision to continue more consequential, not less.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>A human authorized a second phase after Anthropic's reported 650 failed candidate ideas; software then supplied a metered search at unusual scale. The leadership lesson begins with that handoff, not with a story about autonomous genius.</p>
</div>

## What the search budget bought

The Riemann zeta function is a function in complex-number mathematics whose zeros reveal deep patterns related to prime numbers. In 1859, German mathematician Bernhard Riemann proposed that all of its relevant, or “nontrivial,” zeros lie on the critical line, the vertical line where the real component is 1/2. That Riemann hypothesis remains unproved.

The [Claude preprint](https://www-cdn.anthropic.com/564f962e60643842f5fcb4a17c9dbc8f608f1c37.pdf) makes a narrower claim. It raises the lower bound, the proven minimum share of those zeros on the critical line, from 5/12 to at least 2/3, with an optimized result of 0.6725. The previous 5/12 record had stood since 2020. Number theorist J. B. Conrey had proved more than two fifths in a [1989 peer-reviewed paper](https://doi.org/10.1515/crll.1989.399.1), so the popular “37-year record” label marks the span from his paper to 2026; it does not mean human mathematics stood still throughout that period.

The result also depended on that human research lineage. The preprint credits earlier analytic work, including a paper first released in 2023 and published in the specialist journal *Acta Arithmetica* in 2024. Its new ingredient is described as a linear-algebraic reading of a key relationship, recasting it in the language of vectors and matrices. In practical terms, that reframing opened a route to proving a stronger guaranteed minimum.

Anthropic says the search ran numerical tests, hunted for counterexamples, wrote hundreds of Python scripts and downloaded 54 papers from arXiv, an open repository for research manuscripts, to check whether the finding was already known. It also released a [Lean 4 formalization](https://github.com/anthropics/zeta-23-lean). Lean 4 is a proof-assistant language that checks whether a precisely encoded argument follows from its declared assumptions. This is a serious verification layer, but it is not conventional journal review or independent replication.

There is no controlled comparison showing that fewer tokens, different prompts or fewer subagents would have failed. Anthropic also disclosed no dollar cost for the campaign. The defensible conclusion is therefore bounded: the organization funded a large, instrumented search that surfaced a checkable result, while persistence remained only one input alongside prior mathematics, a conceptual reframing and human examination.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>The budget purchased search capacity and multiple checks, not a substitute for mathematical inheritance or proof. The result is specific and auditable, but its public record does not tell us which part of the search caused success or what the full campaign cost.</p>
</div>

## When productivity behaves like capital

I think the economic shift is the option to allocate repeated cognitive work in much the same way leaders allocate computing capacity. In the Three Crucibles framing, this is what it means for productivity to become capital: a capability that can be provisioned, directed and expanded with money and infrastructure rather than drawn only from a person's available hours.

The language of fatigue, shame and career risk helps describe what feels different, but it must remain an interpretation. Anthropic did not measure any of those forces. This case shows only that, after failure, an organization could authorize another metered phase whose software did not need emotional reassurance or a career justification to keep executing.

That does not make thinking free. Capital has an opportunity cost, and more AI activity can even reduce output in the wrong setting. A [2023 working paper](https://www.nber.org/papers/w31161) from the U.S. National Bureau of Economic Research studied 5,179 customer-support agents and found a 14% average increase in issues resolved per hour with an AI assistant. By contrast, [METR](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/), an independent AI-evaluation group, reported in a randomized 2025 study that 16 experienced open-source developers took 19% longer on 246 real software issues when allowed to use early-2025 AI tools. Different tasks, workers and tools produced different economics.

Mathematics is also unusually favorable to persistent search because a theorem can be stated precisely and a formal proof can be checked. Strategy, product and people decisions rarely arrive with such clean tests. “Attempt 651” is therefore useful only as a leadership metaphor, not as a literal audited run number or a general recipe. The scarce resource is shifting from willingness to retry toward the judgment required to define a worthwhile target and credible evidence.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>Persistent AI search turns retries into an allocatable input, but value still depends on the task, the acceptance test and the alternative use of the same budget. The 650 figure is a striking case detail, not a productivity metric.</p>
</div>

## Write the refusal before the request

A tireless system needs a precommitment because every additional batch can produce another plausible reason to continue. The U.S. National Institute of Standards and Technology's [AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework), voluntary guidance released in 2023, organizes AI oversight around governing, mapping, measuring and managing risk. For a persistent agent campaign, those ideas can be compressed into a practical decision record:

| Decision fixed before launch | What the record must contain |
|---|---|
| Question and accountable owner | A specific theorem, decision or experiment, its expected value, and the executive who accepts the result and its consequences. |
| Evidence and independent evaluator | Success, disconfirming evidence and novelty criteria; a reviewer appointed and replaceable by the existing portfolio or risk forum, not by the delivery team. |
| Budget and review capacity | Token or trajectory limits, elapsed time, tool permissions, delivery labor, reviewer hours and replication cost for a fixed task class and time window. |
| Permissions and consultation | Approved data and tools, plus security, procurement and employee-representation review before activation when the campaign affects their responsibilities. |
| Renewal and alternative | A named competing use of the resources, a decision date, and fresh authorization from someone outside the team running the search. |
| Stop enforcement and failure record | Quota reserved before work is dispatched, a cap on already-running tasks, an authoritative state check before new tool use, revoked launch access on pause or closure, and an archive of rejected paths. |

This makes “cost per independently accepted result” a real measure. Its numerator includes model and tool spend, delivery and reviewer labor, and replication costs across both accepted and rejected attempts during the agreed window. Its denominator includes only results accepted by the named evaluator under the frozen test. If there are no accepted results, the metric should say so rather than hiding behind token volume.

The enforcement detail matters because a stop instruction in a document is weak if dozens of tasks can still launch. Reserve capacity before dispatch, limit what can remain in flight, and require every new action to confirm that the campaign is still active. Results arriving after a pause may enter the archive, but they must not reopen the budget. Stopped work can still retain value when failed hypotheses, tests and sources are saved for the next authorized search.

This is the human role I want leadership to protect. People still contribute ideas, domain knowledge and interpretation, but they also decide which question can claim institutional persistence. A system that never gets tired should never inherit the authority to decide that for itself.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>Governed persistence requires a frozen evidence test, funded independent review, a full-cost metric, separate renewal authority and technical controls that prevent paused work from quietly restarting. The right to continue and the ability to stop must be designed together.</p>
</div>

## Meanwhile in sci-fi

<div class="scifi">
<span class="scifi__label">Meanwhile in sci-fi</span>
<p class="scifi__film">Edge of Tomorrow (2014)</p>
<p>Doug Liman's science-fiction film follows Major William Cage through repeated versions of the same battle, with each death returning him to an earlier point. The mapping is precise: persistent agents provide repetition, but repetition becomes useful only when evidence from one run changes the next and someone retains an exit condition. Leadership chooses the battle worth repeating, the signal that counts as learning, and the moment when another run no longer deserves the day.</p>
</div>
