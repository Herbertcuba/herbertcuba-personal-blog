---
title: "Tireless intelligence needs a stopping rule"
description: "A reported mathematical result from Claude, an AI system developed by Anthropic, shows how repeated search becomes fundable and why leaders need evidence gates."
tldr: "The AI company Anthropic's reported research with its Claude system does not show that persistence alone produces breakthroughs. It shows that organizations can now fund repeated search at scale, which makes question selection, independent verification, renewal authority, and stopping rules central leadership work."
permalink: /drafts/b90f4cfe/
layout: post.njk
date: 2026-08-17
---

An organization can now allocate budget to another serious attempt at a hard problem. That does not make the answer predictable, but it changes who or what can persist through failure. The scarce leadership decision moves from whether a person can endure another dead end to whether the institution should fund one.

On 10 August 2026, [Anthropic, the AI company behind Claude, reported](https://www.anthropic.com/research/riemann-zeta) that an unreleased research version of its AI system generated and tried 650 candidate ideas that did not work. Anthropic has not published a complete trace or a method for counting an “idea,” so 650 is a company-reported process number rather than an audited sequence.

After those failures, Anthropic staff member Jarred Sumner, whom the company describes as a non-mathematician, prompted the system to continue. The eventual effort ran across two sessions in Claude Code, Anthropic’s tool-using coding environment, and used 31 million output tokens plus about 60 subagents during an intensive period of roughly a day and a half. An output token is a metered unit of model-generated text; a subagent is a delegated AI run assigned part of the research or checking work.

There is no published invoice and no controlled comparison showing that this number of tokens, agents, or failed ideas caused the result. The defensible lesson is narrower: repeated search has become something an organization can provision and meter. Leadership must now decide which questions deserve that capacity, what evidence can justify another batch, and who has the authority to stop.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Anthropic’s reported process makes persistence fundable, not automatically valuable. The leadership problem is deciding whether another bounded search deserves resources and what evidence can end it.</p></div>

## A proof supplies a clear acceptance test

The Riemann zeta function is a mathematical object connected to the distribution of prime numbers. In 1859, the German mathematician Bernhard Riemann proposed that all its nontrivial zeros, special points where the function equals zero, lie on a line with real coordinate one-half. That “critical line” is the central claim of the still-unproved Riemann hypothesis.

Claude did not prove that hypothesis. [The lab-released preprint](https://www-cdn.anthropic.com/564f962e60643842f5fcb4a17c9dbc8f608f1c37.pdf) instead gives an unconditional lower bound: a proven minimum share of those zeros on the critical line without assuming the hypothesis is true. It raises the prior bound from 5/12, a record set in 2020, to at least 2/3, with an optimized stated constant of 0.6725. The remaining share is unknown; the theorem does not place it off the line.

The popular “37-year record” description needs care. Number theorist J. B. Conrey proved in a [1989 peer-reviewed paper](https://doi.org/10.1515/crll.1989.399.1) that more than two fifths of the zeros lie on the critical line. Human mathematicians improved that result later, reaching 5/12 in 2020, so 37 years marks the span from Conrey’s paper to the 2026 result rather than 37 years without progress.

The system also began from existing research. The preprint credits a 2023 paper by the number theorists Baluyot, Goldston, Suriajaya, and Turnage-Butterbaugh, [published in the specialist journal *Acta Arithmetica* in 2024](https://arxiv.org/abs/2306.04799), and describes its own new ingredient as a way to read that earlier work through linear algebra. Persistence helped explore a problem that people had already defined precisely.

The checking process matters just as much as the search. Anthropic reports numerical tests, searches for counterexamples, hundreds of Python scripts, and a review of 54 papers on arXiv, an online repository for research preprints, to look for prior work. It also released a [Lean 4 formalization](https://github.com/anthropics/zeta-23-lean). Lean 4 is a proof-assistant language; formal verification means the software checks a precisely encoded theorem and proof under declared assumptions. Anthropic’s mathematicians and two outside specialists examined the paper, but that is not the same as journal peer review or independent replication.

This is why the case is useful and difficult to generalize. A theorem can be stated precisely, attacked with counterexamples, and checked line by line. A strategy proposal can survive hundreds of retries simply by becoming more persuasive.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>The reported result emerged in a domain with a precise claim, decades of prior human work, and unusually strong checking tools. Its lesson is harder to transfer when an organization cannot first define what would make an answer true or false.</p></div>

## Persistence is entering the capital budget

My Three Crucibles framework treats productivity as something increasingly supplied by capital: models, computing capacity, tools, and orchestration can be purchased before another person is hired. The Claude case gives that idea a sharper form. Persistence itself becomes a budgeted input, although the undisclosed campaign cost means we cannot call it cheap.

People carry fatigue, embarrassment, opportunity cost, and career exposure when they keep pursuing an idea that fails. An AI system does not face those pressures in the human sense; its continued work is constrained instead by tokens, tool access, elapsed time, and human review. That is an interpretation of the operating change, not a psychological or economic finding reported by Anthropic.

More capacity still does not guarantee more value. A [2023 National Bureau of Economic Research working paper](https://www.nber.org/papers/w31161) found that an AI assistant increased issues resolved per hour by 14% on average among 5,179 customer-support agents. In a different setting, a [2025 randomized study by the independent research organization METR](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/) found that 16 experienced open-source developers took 19% longer on 246 real software issues when using the AI tools available at the time. The studies concern different jobs and periods, so they are not scores to average. They show why output, confidence, and activity cannot stand in for measured results.

As retries become easier to fund, question quality and reviewer attention become more valuable. A tireless system can test a strong hypothesis, but it can also generate an expensive trail of material around a weak one. The economic unit that matters is therefore the independently accepted result, including the cost of all rejected work required to reach it.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>AI converts some human limits on persistence into metered capacity, but that capacity is only productive when accepted outcomes justify the full search and review cost. More attempts are an input, not a return.</p></div>

## Meanwhile in sci-fi

<div class="scifi">
<span class="scifi__label">Meanwhile in sci-fi</span>
<p class="scifi__film">Edge of Tomorrow (2014)</p>
<p>Doug Liman’s 2014 science-fiction film follows Major William Cage, a soldier forced to relive the same battle while retaining what each failed attempt teaches him.</p>
<p>The mapping is specific: repetition creates value only when failure changes the next move. An agent campaign that neither preserves rejected paths nor tests a new hypothesis is consuming another budget batch without learning from the last one.</p>
</div>

## Make continuation a separate investment decision

Approval to start a persistent search should never include unlimited authority to continue it. Before the first agent run, leaders need a Tireless Intelligence Charter: a short decision record that fixes the question, evidence, capacity, owners, and stop condition without creating a new committee.

| Charter field | What is fixed before launch | Accountable owner |
|---|---|---|
| Question and acceptance test | The decision or claim, the observable success test, and evidence that would show it is wrong | Business sponsor and domain evaluator |
| Independent evidence | Novelty, replication, or external data required for acceptance | An evaluator appointed and replaceable by the existing portfolio or risk forum, not the delivery lead |
| Bounded capacity | Time window, model and tool quota, reviewer hours, permissions, and maximum work already in flight | Delivery owner with finance and control owners |
| Economic measure | One task class and time window; model, tool, delivery, review, rejected-work, and replication costs per result the evaluator accepts | Portfolio analyst and evaluator |
| Organizational preconditions | Procurement and security decisions, plus employee representation where work design is affected | Existing procurement, security, HR, and employee-relations owners |
| Renewal or stop | Review date, evidence threshold, competing use of the budget, and authority to close the campaign | Portfolio or risk forum outside the delivery team |

A written stop condition is useless if the software coordinating the subagents does not enforce it. The system should reserve quota before sending out work, check the campaign’s current status and version at that moment, cap how much already-started work may finish, and revoke launch permission when the campaign is paused or closed. A late result may be reviewed, but it must not reopen the campaign automatically.

Renewal should then be a fresh investment decision. The delivery team can present evidence, but it cannot renew itself; the independent evaluator applies the frozen test, and the portfolio owner compares another batch with the named alternative. Failed hypotheses, tests, and proof paths should remain in an auditable archive so stopping preserves knowledge rather than paying to rediscover the same dead ends later.

This approach is consistent with the [U.S. National Institute of Standards and Technology’s AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework), voluntary guidance released in 2023 that organizes AI risk work around governing, mapping, measuring, and managing. The framework does not prove that governed persistence will pay. It does reinforce that delegated AI work needs continuing authority and measurement, not a one-time approval.

I think this is where leadership becomes more consequential. Before a campaign begins, someone must name the question worthy of repeated search, the result that would change a decision, and the person empowered to refuse another batch. Tireless intelligence expands what an organization can pursue; its judgment will show in what it chooses to leave unfinished.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Treat every continuation as a new investment: freeze the evidence test, count the full cost of accepted and rejected work, keep renewal outside the delivery team, and enforce the stop in software before more agents can launch.</p></div>
