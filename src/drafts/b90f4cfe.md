---
title: "After 650 Failed Ideas, Persistence Becomes a Leadership Decision"
description: "Claude's work on a Riemann zeta bound shows that repeated search can be funded at machine scale, which makes evidence, review capacity, and expiry dates part of leadership."
tldr: "Anthropic reports that an unreleased version of Claude tried 650 unsuccessful ideas during a research effort that used 31 million output tokens and roughly 60 subagents before producing a new mathematical bound. The case does not prove that retries alone cause discovery or reveal what the work cost. It does show why leaders need to treat machine persistence as a bounded investment: choose the question, reserve independent review, define evidence, and make permission to continue expire."
permalink: /drafts/b90f4cfe/
layout: post.njk
date: 2026-08-17
---

Imagine receiving the renewal request after 650 ideas have failed. The system is still producing plausible paths, the people running it still believe the next batch could work, and nobody can show whether another million tokens will create knowledge or merely more material to inspect. Do you keep funding the search?

That decision sits inside [Anthropic's account](https://www.anthropic.com/research/riemann-zeta) of a striking mathematical result from August 2026. Anthropic, the AI company that develops Claude, says an unreleased research version of the system initially tried 650 ideas that did not work. Across two sessions in Claude Code, Anthropic's tool-using environment for coding tasks, the effort generated 31 million output tokens, meaning units of text produced by the model, and later coordinated roughly 60 subagents. These were delegated AI runs working on parts of the problem, not 60 digital employees.

The tempting conclusion is that enough persistence can now be bought. I think the narrower conclusion is more useful: repeated search is becoming an input that an organization can provision, even when it cannot predict the result. That moves a larger share of human judgment to the boundaries of the search: which question merits the budget, what evidence can justify renewal, and who has the authority to stop it.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>Claude's reported scale makes continued search easier to fund, but it does not make continuation wise. The leadership problem begins where the machine's willingness to keep going no longer supplies a reason to do so.</p>
</div>

## This problem came with an unusually clear answer test

The Riemann zeta function is a function in complex number theory whose zeros reveal patterns in the distribution of prime numbers. Some of its zeros occur at the negative even integers; mathematicians call the remaining ones nontrivial zeros. In 1859, the German mathematician Bernhard Riemann proposed that all of those nontrivial zeros lie on the critical line, where the input's real part is one-half. That unproved claim is the Riemann hypothesis.

Claude did not prove it. The [August 13, 2026 arXiv preprint](https://arxiv.org/abs/2608.13637v1), posted to an open repository for scholarly papers, is titled *More than two thirds of the zeta zeros are simple and on the critical line*. It states an asymptotic lower bound: as mathematicians examine zeros at greater and greater heights, at least two thirds, apart from an error that shrinks toward zero, of all nontrivial zeros counted with multiplicity are simple and lie on the critical line. Here, simple means that a zero occurs once. An optimized version of the argument gives 0.6725. This is a statement about the limiting share, not a finite census of individually classified zeros.

The previous lower-bound record was 5/12 and had stood since 2020. Number theorist J. B. Conrey had crossed two fifths in a peer-reviewed 1989 paper, with other mathematicians improving the result in the decades that followed. So the popular 37-year framing describes a research lineage from Conrey's paper to 2026, not 37 years without progress.

The result also has several distinct validation layers, and they should not be collapsed into the word “proved.” The arXiv version lists Levent Alpöge and Ralph Furman, mathematicians at Anthropic; its author comment says Claude discovered the proof and the listed authors verified and communicated it. Anthropic says specialist number theorists Brian Conrey and Dan Goldston examined the work on short notice. A public [Lean 4 companion repository](https://github.com/anthropics/zeta-23-lean) lets a proof assistant, software that checks a precisely encoded mathematical argument against declared rules, verify the formal version. These are meaningful checks, but the task-local source record does not establish conventional journal peer review or independent replication.

This unusually hard answer test matters to the economic lesson. The agents were not rewarded because their output sounded intelligent; a claimed proof could be tested numerically, read by specialists, compared with prior research, and translated into a formal language. Most enterprise questions arrive without that machinery.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>The advance is a precise asymptotic lower bound, not a proof of the Riemann hypothesis. Its layered checks make this case unusually suitable for large-scale search and much easier to evaluate than an open-ended strategy or product question.</p>
</div>

## Retrying is becoming an allocatable resource

Anthropic reports more than repeated prompting. The system issued 2,400 shell commands, wrote hundreds of Python scripts, ran numerical checks, looked for counterexamples, and downloaded 54 arXiv papers while checking whether the result was already known. The successful argument also built on decades of human mathematics, including a 2024 peer-reviewed result about the spacing of zeta zeros, and added a new way to use linear algebra to interpret that earlier work. Persistence created room for a conceptual move; it did not replace the knowledge that made the move possible.

Nor do the published figures establish that 650 failures caused the discovery. An “idea” is not a standard unit of research, and Anthropic did not publish a controlled comparison with fewer agents or retries. The public account gives output tokens rather than a complete bill, leaving out a full input-token count, model settings, tool and hardware costs, human labor, and the opportunity cost of reviewing the work. There is also no denominator showing how many comparable campaigns ended with nothing useful.

What changed, then, is allocatability. A human researcher pays for another attempt in limited time and attention, and may also bear fatigue, embarrassment, or professional risk. Those human effects were not measured in this case. A machine does not experience them, so an organization can shift more of the burden of persistence into computing, tools, and supervision that can be budgeted in advance.

This is one practical meaning of productivity becoming capital: productive capacity can be provisioned before anyone knows whether it will produce an asset. Capital still has an opportunity cost. Once agents can create candidate answers faster than qualified people can reject them, expert review becomes the scarce capacity, and an unchecked search can spend heavily while manufacturing confidence instead of knowledge.

Evidence from ordinary work reinforces the need to measure the specific workflow. A 2023 working paper from the U.S. National Bureau of Economic Research studied 5,179 customer-support agents and found a 14% average increase in issues resolved per hour with an AI assistant. A 2025 randomized study by METR, an independent AI-evaluation organization, found that 16 experienced open-source developers took 19% longer on 246 real tasks when allowed to use early-2025 AI tools; METR now treats that finding as a historical snapshot rather than a forecast for newer systems. The settings differ, so the numbers should not be averaged. Together they show why model activity is a poor substitute for a task-level result.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>The Claude case shows that organizations can meter and expand search capacity, not that more retries reliably create value. Prior knowledge, conceptual insight, full campaign cost, and the supply of independent reviewers remain part of the economics.</p>
</div>

## Permission to continue should expire

A tireless system needs more than a budget ceiling. If leaders wait until the money is nearly gone to decide what success means, every fresh hypothesis can become an argument for one more batch. The evidence standard and the right to renew must exist before the first agent starts.

I would capture them in a one-page Tireless Intelligence Charter:

- **Question and baseline:** Name the exact theorem, decision, design, or experiment, along with the current process it must beat.
- **Evidence:** Define acceptance, disconfirmation, and novelty. Name an independent verifier with a different failure mode from the producing system.
- **Limits:** Cap total cost, trajectories or tokens, elapsed time, tool permissions, and reviewer hours. Reaching any cap triggers a decision rather than an automatic extension.
- **State:** Mark the campaign **ACTIVE** only until its expiry. Move it to **PAUSED** when review capacity, risk, or evidence quality crosses a preset boundary, and to **CLOSED** when the claim is accepted, rejected, or expires without renewal.
- **Authority:** Separate delivery, verification, and renewal. The team or agent running the search cannot extend its own mandate, and each new batch must read one current authoritative record so that a stale approval cannot restart closed work.
- **Closure:** Revoke credentials, stop scheduled jobs, record the decision, and preserve failed hypotheses and tests so a later campaign does not pay to rediscover the same dead ends.

For a first enterprise pilot, choose one recurring search with an observable acceptance test and compare a four-week agent campaign with the current process. Fill in the thresholds before launch: the maximum fully loaded cost, the number of reviewer hours available, the required improvement in independently accepted outcomes, the longest acceptable review delay, and the decision date. Count renewals granted without new evidence as control failures. At the end, inspect closed campaigns for promising paths that were stopped too early, because a stopping system should also make its false stops visible.

This does not reduce people to budget holders. Domain experts still contribute ideas, interpretation, context, and accountability. But when another thousand attempts can be ordered more easily than another month of expert attention, leadership has to protect the quality of continuation. The decisive act is no longer encouraging persistence in the abstract. It is granting a limited right to persist for a stated reason.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>An agent search should launch under an expiring mandate that fixes its evidence, limits, review capacity, decision rights, and shutdown duty. Renewal requires new evidence from outside the delivery loop, not the system's continued ability to propose another path.</p>
</div>

## Meanwhile in sci-fi

<div class="scifi">
<span class="scifi__label">Meanwhile in sci-fi</span>
<p class="scifi__film">Edge of Tomorrow (2014)</p>
<p>Doug Liman's science-fiction film follows a soldier who relives the same battle while retaining what each failure teaches him. The useful mapping is narrow: persistent AI can supply repeated attempts, but repetition becomes learning only when evidence changes the next move and an exit condition exists. Leaders remain responsible for deciding whether the next loop is an experiment with a reason or simply another funded return to the same day.</p>
</div>
