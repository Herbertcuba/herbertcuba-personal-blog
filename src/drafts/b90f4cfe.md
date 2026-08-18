---
title: "Tireless intelligence needs a stopping rule"
excerpt: "Claude’s mathematical result makes one change hard to ignore: persistence can now be provisioned. That gives leaders a new duty to fund questions, evidence, and stopping rules together."
tldr: "Anthropic reports that an unreleased Claude system used 31 million output tokens across two sessions and, after 650 unsuccessful ideas, produced a new bound on Riemann-zeta zeros. The case does not show that retry volume caused the result; it shows that long searches can be funded as metered work, so leaders must define the question, reserve independent review, compare alternative uses of capital, and enforce an expiry before the search begins."
permalink: /drafts/b90f4cfe/
layout: post.njk
date: 2026-08-18
---

Most accounts of Claude’s new mathematics begin with 650 failed ideas. I think the more consequential number is one Anthropic did not publish: what permission to continue cost, including expert attention and the work that money displaced.

In August 2026, [Anthropic](https://www.anthropic.com/research/riemann-zeta), the AI company behind Claude, reported that an unreleased research version of its system worked across two sessions in Claude Code, Anthropic’s tool-using coding-agent environment, and produced 31 million output tokens in total. An output token is a metered unit of model-generated text. Anthropic calls 650 ideas in the initial effort unsuccessful; “ideas” is its reported unit, not a standardized attempt count. The later session ran for about a day and a half and coordinated roughly 60 subagents, meaning delegated AI processes working in separate contexts rather than 60 employees.

Those figures establish the scale of the search. They do not establish that scale caused the result because Anthropic published no controlled comparison of smaller runs, different models, or different prompts. The defensible lesson is still substantial: persistence that once depended heavily on one person’s willingness to absorb another dead end can now be provisioned as compute, tools, and review. Leadership therefore has to authorize the question, the evidence, and the end of the search as one decision.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>Claude’s run shows that organizations can provision an unusually long search, while the public record cannot tell us whether retry volume caused the breakthrough. The leadership problem is authorization: which question deserves the resources, who checks the answer, and who can end the work.</p>
</div>

## Proof gives persistence somewhere to land

The Riemann zeta function is a mathematical function whose zeros reveal fine structure in the distribution of prime numbers. In 1859, the German mathematician Bernhard Riemann proposed what became the Riemann hypothesis: every nontrivial zero, excluding a known family of easy zeros, lies on the “critical line,” where the real part of its input equals one half. The hypothesis remains unproved.

Claude’s result concerns a narrower claim. As of Anthropic’s 13 August 2026 update, the [current arXiv paper](https://arxiv.org/abs/2608.13637), *More than two thirds of the zeros of the Riemann zeta function lie on the critical line*, is the source of record for the work’s attribution and scope. It proves an unconditional lower bound, meaning a minimum share established without first assuming the Riemann hypothesis. When zeros are counted with their multiplicity, the base theorem says at least two thirds of the nontrivial zeros are simple, meaning unrepeated, and lie on the critical line.

The previous bound was 5/12, reached in 2020, so the base result adds exactly 25 percentage points. An optimized argument in the paper reaches 0.6725, or 67.25%, which Anthropic’s live announcement presents as 67.2%. The remaining zeros are not shown to lie elsewhere; the proof simply does not reach them.

The popular “37-year record” framing begins with number theorist J. Brian Conrey’s 1989 peer-reviewed result that more than two fifths of the zeros lie on the critical line. Human mathematicians made further progress before the 5/12 result in 2020. The new proof also builds on a peer-reviewed 2024 paper about the spacing between zeta zeros, then adds a linear-algebraic reading. This was a search across a mature research frontier, not a blank-slate act of brute force.

The evidence is unusually inspectable. Anthropic reports numerical tests, a search through 54 papers on arXiv, the open repository for research preprints, internal mathematical review, and examination by outside specialists on short notice. A public [Lean 4 companion artifact](https://github.com/anthropics/zeta-23-lean) uses a theorem-proving programming language to let a proof assistant check a precisely encoded theorem and its stated dependencies. That formal verification is stronger than persuasive prose, but it does not establish novelty or mature field acceptance by itself. The paper remains a preprint, independent replication has not been reported, and the unreleased model and build prevent a full public rerun.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>The advance is a precise lower-bound theorem, supported by formal and human checks and built on decades of prior mathematics. Its unusually clear acceptance conditions make mathematics a favorable case for persistent AI search, while preprint status and an unreleased model still limit what outsiders can conclude.</p>
</div>

## The scarce resource becomes judgment

Fatigue, shame, and career risk were not measured in Anthropic’s run. They are an interpretation of what changes when hundreds of rejected paths can be assigned to a system that does not experience those human pressures. What we can observe is that every additional path consumes metered output, tool access, and scarce reviewer time. Purchasable persistence is not free persistence.

This changes the bottleneck. When a system can produce candidate arguments faster than specialists can examine them, verification becomes a queue and plausible output accumulates ahead of knowledge. The useful economic measure is therefore full resource cost per independently validated outcome, including failed paths, reviewer hours, replication effort, and the strongest project that did not receive those resources.

Evidence from ordinary work reinforces the need to measure the outcome rather than the activity. A 2023 working paper from the U.S. National Bureau of Economic Research found that an AI assistant raised issues resolved per hour by 14% across 5,179 customer-support agents. In a different setting, a 2025 randomized study by METR, an independent AI research organization, found that 16 experienced open-source developers took 19% longer on 246 tasks when allowed to use early-2025 AI tools. The studies should not be averaged because their people, tasks, and tools differ. Together they show why more AI use cannot serve as its own business case.

Human experts remain inside the intellectual work, contributing concepts, domain judgment, and interpretation. The operating boundary is narrower: the search process should not control its own objective, evidence threshold, or renewal. As execution becomes easier to buy, those decisions carry more of the leadership burden.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>Metered retries move pressure away from human endurance but create costs in compute, review, and displaced work. Once candidate production outruns verification, leadership should fund validated outcomes rather than agent activity and keep renewal outside the executing loop.</p>
</div>

## Give every search an expiry

Organizations already have useful controls for persistence. Software teams use retry budgets and circuit breakers, automatic cutoffs that stop execution after a failure threshold. Investment committees release capital in stages, while separation of duties keeps the person doing the work from approving it. Persistent AI search applies those familiar controls to the production of claims.

A compact renewal card makes the decision visible. The following is a reconstruction from the public Claude record, not a claim that Anthropic used this operating model.

| Renewal field | Claude case and requirement for another stage |
| --- | --- |
| **Owner and fixed question** | Anthropic names staff member Jarred Sumner, who is not a mathematician, as the original prompt sponsor. The initial Riemann-hypothesis attempt failed before the work shifted to a related lower bound. Another stage should freeze one falsifiable question under one accountable human owner. |
| **Accepted outcome** | The record includes a theorem, numerical checks, prior-art search, specialist examination, and Lean formalization. The card must say whether renewal requires a formal check, independent replication, mature field acceptance, or another exact evidence level. |
| **Search ceiling** | The 31 million output tokens cover both sessions; about 60 subagents and a day and a half describe the later one. Dollar cost and total personnel cost are not public. A new stage needs ceilings for cash, output, wall-clock time, and tool access. |
| **Reviewer capacity** | Anthropic reports two internal mathematicians and outside specialist scrutiny on short notice, but not their hours. Independent reviewer names and reserved hours should be budgeted before the search starts. |
| **Strongest alternative** | The public account does not identify the project displaced by this run. A renewal decision should name the best competing use of the same capital and expert attention. |
| **Renewal authority** | A human sponsor asked the system to try again, but the public account does not describe a formal authorization process. Someone outside the executing loop must own renewal. |
| **Close transition** | No predeclared public stopping rule is documented. Reaching a ceiling or failing the evidence gate should move the authorization to a closed state; an interesting side result needs a new question and a new card. |

The missing entries are part of the lesson. A spectacular output does not retroactively supply the budget ceiling, reviewer capacity, or alternative that a responsible funding decision needed at the start.

The card also has to bind execution. One control service should hold the authoritative state: proposed, active, expired, or closed. A gateway, the checkpoint for every model call, tool request, and queued job, reads that state before allowing work. If the authorization is closed, expired, or unavailable, the gateway denies new work by default, freezes its quota, and revokes its tool access. Teams must also decide in advance whether work already running is cancelled or allowed to finish. The agent cannot extend its own expiry, and a request to move directly from closed back to active is rejected; a separately authorized stage receives a new record.

Finally, preserve the rejected hypotheses, tests, and proof paths. A stopped search can still leave an auditable asset that prevents the next system from paying for the same dead ends. Stopping is then a decision about where learning has ended, rather than an admission that every earlier attempt was wasted.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>Authorize persistent search with a fixed question, evidence test, resource and reviewer ceilings, named alternative, independent renewal owner, and irreversible close transition. The stopping rule becomes real only when the execution gateway denies further work and the failure record remains available for the next decision.</p>
</div>

## Meanwhile in sci-fi

<div class="scifi">
<span class="scifi__label">Meanwhile in sci-fi</span>
<p class="scifi__film">Edge of Tomorrow (2014)</p>
<p>The 2014 film follows a soldier trapped in the same battle, learning through repeated deaths until he can change the outcome. In this article’s terms, the repeated day maps to an agent attempt, what survives the loop maps to independently checked evidence, and the decision to continue maps to human authorization. Tirelessness creates the option to run the day again; leadership decides whether another day still buys learning or merely repeats expense.</p>
</div>
