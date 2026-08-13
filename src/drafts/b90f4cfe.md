---
title: "The 651st Attempt Needs an Owner"
tldr: "Claude’s mathematical result shows that large-scale persistence can now be bought as a metered search capacity. The leadership challenge is to fund only questions with clear evidence tests, independent verification and stopping rules written before the next attempt begins."
permalink: /drafts/b90f4cfe/
layout: post.njk
date: 2026-08-13
---

A request for attempt 651 is a capital-allocation decision. Six hundred and fifty ideas have already failed, so another run could be disciplined exploration or an expensive refusal to let go. The leader’s job is to know which one before the meter starts again.

On August 10, 2026, [Anthropic, the AI company behind Claude](https://www.anthropic.com/research/riemann-zeta), reported that an unreleased research version of its system had produced 650 unsuccessful ideas on a hard mathematics problem. Across two sessions in Claude Code, Anthropic’s environment for agents that can work with files and software tools, the project consumed 31 million output tokens. An output token is a unit of model-generated text used to meter usage. The work also involved roughly 60 subagents, delegated AI processes handling narrower parts of the search.

The result matters, but so does the discomfort around it. Human researchers can become tired, worry about status and decide that another public failure carries too much career risk. Anthropic did not measure fatigue, shame or career risk, so converting those pressures into compute is a metaphor rather than a project finding. I think the narrower economic claim is strong enough: an organization can now buy retry capacity without requiring one person to absorb every failed attempt.

That does not prove persistence caused the discovery. The successful proof depended on decades of human mathematics, a possible conceptual insight and several layers of checking. I don’t know whether 60 subagents were necessary, because Anthropic published no controlled comparison. Yet the managerial bottleneck has still moved. When attempts can multiply on demand, leadership becomes responsible for deciding which question deserves them and what result would justify continuing.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Claude’s case turns persistence into an allocatable search capacity, but it leaves humans accountable for the question, the evidence and the decision to fund another attempt.</p></div>

## What the search actually produced

Claude did not prove the Riemann hypothesis. In 1859, German mathematician Bernhard Riemann proposed that the nontrivial zeros of the Riemann zeta function all sit on the “critical line.” The zeta function is a mathematical function whose zero values reveal patterns connected to prime numbers; nontrivial zeros exclude a set of well-understood cases, and the critical line is a specific line where each input’s real component equals one-half.

The [Claude technical paper](https://www-cdn.anthropic.com/564f962e60643842f5fcb4a17c9dbc8f608f1c37.pdf) establishes something narrower. It raises the unconditional lower bound, meaning the guaranteed minimum share of those zeros proved to lie on the critical line without assuming the hypothesis is true, from 5/12 to at least 2/3. An optimized version reaches 0.6725. The larger claim about every nontrivial zero remains open.

The “37-year record” label also needs care. It measures the span from number theorist J. B. Conrey’s [1989 peer-reviewed proof that more than two-fifths of the zeros lie on the line](https://doi.org/10.1515/crll.1989.399.1) to the 2026 result. Human mathematicians improved the bound during those years, and the previous 5/12 record had stood since 2020. The field was difficult, not frozen.

The path to the result makes the economics more interesting. The paper credits a [2024 peer-reviewed result by four number theorists](https://arxiv.org/abs/2306.04799) and describes its own new ingredient as a linear-algebraic reading of earlier machinery for comparing the spacing of zeros. Anthropic also reports 2,400 shell commands, hundreds of Python programs, numerical checks against known zeros, searches for counterexamples and downloads of 54 papers from arXiv, an open repository for scholarly preprints.

The proof was then encoded in Lean 4, a programming language that lets a proof assistant check every logical step of a precisely stated theorem under declared assumptions. That formal verification makes the claim more auditable, while internal mathematicians and two outside specialists also examined the work. It is still a lab-released preprint, not completed journal peer review.

I think this distinction is the heart of the case. What became purchasable was an instrumented search across many failed paths, joined to tests that could resist a persuasive but wrong answer. Persistence had value because the problem supplied a hard evidence boundary.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>The advance was a specific, checkable lower bound built on human mathematics and a heavily tested search process. Its lesson comes from the combination of retries and verification, not from stamina alone.</p></div>

## Cheap persistence can preserve a bad question

Mathematics gave this campaign something most executive work lacks: a claim that independent specialists and software could test. Consider a proposed acquisition instead. If leaders ask agents whether the deal “makes strategic sense” without defining the evidence, the system can keep finding favorable comparisons, drafting answers to objections and turning each contradiction into a request for more research. The campaign may become more convincing while the decision remains no better grounded.

Measured workplace results already warn against treating AI activity as economic value. A [2023 National Bureau of Economic Research paper](https://www.nber.org/papers/w31161), based on a rollout to 5,179 customer-support agents, found that access to a conversational assistant increased issues resolved per hour by 14 percent on average. In a different setting, [METR, an independent AI-evaluation research organization](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/), ran a randomized 2025 study in which 16 experienced open-source developers completed 246 real software tasks 19 percent more slowly when allowed to use early-2025 AI tools. METR now treats that result as historical rather than a forecast for newer systems, but the contrast remains useful: task design and measurement decide whether more output becomes value.

My take is that retry costs may fall faster than verification costs. A model can generate another argument in seconds, while a domain expert still has to inspect assumptions, reproduce the result and decide whether it changes anything important. If leaders define success after seeing each batch, a weak hunch can acquire an unlimited research program simply because stopping feels less defensible than spending a little more.

The danger is therefore ordinary and managerial. Cheap continuation can hide the fact that nobody agreed on what would settle the question.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Persistent agents are most dangerous where success is vague: they can lower the cost of continuing while raising the human cost of checking whether the work deserves to continue.</p></div>

## Meanwhile in sci-fi

<div class="scifi">
<span class="scifi__label">Meanwhile in sci-fi</span>
<p class="scifi__film">Edge of Tomorrow (2014)</p>
<p>In Doug Liman’s film, Major William Cage relives the same battle and uses each death to change the next attempt. The mapping to Claude is repetition with feedback, not magical resurrection: a failed path has value only when the system records why it failed and changes the next search, while leadership must decide when another repetition no longer earns its cost.</p>
</div>

## Write the ending into the budget

A persistent agent campaign should begin with a one-page Tireless Intelligence Charter, meaning a binding agreement about the search before anyone becomes attached to its output. I think four clauses are enough to make the campaign governable:

1. **Name the decision and its owner.** State the question in observable terms, identify the executive who owns its upside and explain why this problem deserves scarce review time.
2. **Fix the evidence test.** Define success, failure and novelty before launch. Assign an independent verifier with a different failure mode, such as a domain expert, controlled experiment, external dataset or formal proof system.
3. **Release capacity in stages.** Cap each tranche by output tokens, elapsed time, tool permissions and human review hours. Another tranche requires a predeclared improvement, not a more polished memo.
4. **Specify the exit and preserve the failures.** Stop when the same failure recurs without a new hypothesis, independent review cannot reproduce the claim or the expected value of another batch falls below the next portfolio candidate. Archive rejected paths so later agents do not buy the same mistakes again.

Anthropic disclosed no model price, hardware bill, energy use or complete staff ledger, so turning its 31 million output tokens into a dollar figure would be guesswork. An enterprise does not need that missing number to price its own campaign. It can use actual contract rates, tool charges and reviewer time, then measure cost per independently validated improvement rather than agents launched or tokens produced.

Ownership should follow the same separation. The business sponsor owns the question, the verifier owns the evidence judgment, and an existing portfolio or architecture review approves the next tranche. The [U.S. National Institute of Standards and Technology’s voluntary AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework), released in 2023, offers a useful rhythm through its Govern, Map, Measure and Manage functions. It is guidance rather than proof of a return, but it reinforces the principle that delegated AI work needs continuing oversight.

I think this belongs in the normal quarterly budget cycle, not in a distant AI ethics appendix. A tireless system can always produce a reason for one more batch, but it cannot carry accountability for choosing a weak question or moving the evidence line. The 651st attempt should never arrive by default.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>A Tireless Intelligence Charter binds each campaign to an owner, independent evidence, a staged budget and a prewritten exit. Without that commitment, cheap retries turn leadership indecision into a metered expense.</p></div>
