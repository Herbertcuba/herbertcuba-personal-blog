---
title: "Tireless intelligence needs a stopping rule"
description: "Claude advanced a lower bound connected to the Riemann hypothesis after hundreds of failed ideas. The strategic lesson is how to fund persistent AI search without funding it forever."
tldr: "Anthropic reports that an unreleased Claude system tried 650 unsuccessful ideas before a larger, tool-using search advanced a lower bound related to the Riemann hypothesis. The case does not show that retries alone caused the result, but it makes persistent search a budgetable choice. Leaders must choose questions with observable tests, require independent evidence, compare each new stage with the best alternative use of resources, and give someone outside the delivery loop authority to stop or reopen the campaign."
featuredImage: "/images/posts/tireless-intelligence-needs-a-stopping-rule.webp"
permalink: /drafts/b90f4cfe/
layout: post.njk
date: 2026-08-15
---

On August 10, 2026, [Anthropic, the AI company behind Claude](https://www.anthropic.com/research/riemann-zeta), reported an unusual mathematical result. An unreleased Claude research system worked across two sessions in Claude Code, Anthropic's environment for AI agents that can use files and software tools, and produced 31 million output tokens. An output token is a metered unit of model-generated text.

Anthropic says Claude first tried 650 ideas and none worked. It then spent a day and a half coordinating about 60 subagents, delegated AI runs that explored parts of the problem, used tools, and checked one another's work. The popular interpretation is that Claude outlasted mathematicians. I think that catches the strategic surprise, but it leaves out too much of the process.

There is no controlled comparison showing that the number of retries, subagents, or tokens produced the result. The proof also depends on decades of human mathematics, a new conceptual step, software checks, and specialist examination. Anthropic did not measure fatigue, shame, or career risk; those are names for human frictions that can make one more failed idea difficult to pursue or defend, not findings from this project.

Even with that boundary, the economic possibility has changed. An organization can provision persistence, meter it, and decide whether to fund another bounded stage without asking one person's nervous system to absorb every dead end. My take is that leadership becomes more consequential at precisely that point: someone must choose which question deserves repeated search, what will count as progress, and who has the authority to refuse the next attempt.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>Claude's result does not establish that persistence caused a breakthrough. It shows that repeated search can become a funded input, making the decision to renew or stop a campaign part of leadership rather than an afterthought.</p>
</div>

## What Claude actually moved

The Riemann zeta function is a mathematical function whose zeros, the input points where its value equals zero, help describe patterns in the distribution of prime numbers. Its nontrivial zeros exclude the easily classified zeros at negative even numbers. They sit in the critical strip, a region of the complex-number plane whose horizontal coordinate lies between zero and one.

The Riemann hypothesis, proposed by German mathematician Bernhard Riemann in 1859, says every nontrivial zero lies on the vertical line halfway through that strip, called the critical line. Nobody has proved the hypothesis, and Claude did not prove it.

The [current Claude preprint, dated August 11, 2026](https://www-cdn.anthropic.com/95c246936988e43127bc6b2ceb7077c1dad2d68e.pdf), is a research paper released before conventional journal peer review. Its basic theorem establishes a lower bound, meaning a proven minimum: at least two thirds of the nontrivial zeros are simple and lie on the critical line. A simple zero occurs once; when the total is calculated, a repeated zero is counted once for each repetition. The result concerns the share as the number of zeros grows without limit, and it does not classify the remaining third.

The previous record was 5/12, about 41.7%, reached in 2020. The new two-thirds floor is about 66.7%, an increase of 25 percentage points. The popular “37-year record” line reaches back to number theorist J. B. Conrey's [1989 peer-reviewed result](https://doi.org/10.1515/crll.1989.399.1) that more than two fifths of the zeros lie on the line. Human mathematicians continued improving the bound between 1989 and 2020, so the number was not frozen for 37 years.

The process was also more than blind repetition. The new paper builds on a [2024 peer-reviewed precursor](https://arxiv.org/abs/2306.04799) by number theorists Baluyot, Goldston, Suriajaya, and Turnage-Butterbaugh. That earlier work supplied a calculation about how the zeros' positions relate to one another; the Claude paper's new step reads the calculation as a linear-algebra problem that can certify more simple zeros on the critical line. Anthropic also reports 2,400 shell commands, hundreds of Python scripts, numerical checks, searches for counterexamples, and a review of 54 papers for prior work.

The evidence has several layers, and they should not be collapsed into one stamp of truth. Anthropic published the process account and the fresh preprint, said two internal mathematicians validated the paper, and said Conrey, whose 1989 result anchors the earlier history, and fellow number theorist Daniel Goldston examined it on short notice. Claude also produced a [Lean 4 formalization](https://github.com/anthropics/zeta-23-lean). Lean 4 is a language for writing machine-checkable proofs; formal verification means the software checked a precisely encoded theorem and proof against declared logical rules. It does not reproduce the discovery process or replace broader examination by the mathematical community. I think the achievement becomes easier to trust when its limits remain visible.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>Claude advanced a specific lower bound rather than proving the Riemann hypothesis. The result combines a live human research lineage, a new mathematical reading, persistent tool-using search, and several checks, while remaining a fresh company-released preprint that has not completed conventional peer review.</p>
</div>

## The economics live in attempt 651

Thirty-one million output tokens record activity, not a public price. Anthropic did not publish the total input tokens, model price, infrastructure or energy costs, reviewer costs, or results from comparable failed campaigns. I don't know whether this scale was necessary, and the available evidence cannot answer that question.

“Attempt 651” is my shorthand for the renewal decision, not an attempt Anthropic numbered. After any bounded stage, a leader can ask whether the work produced a stronger testable hypothesis, cleared an evidence gate, or merely generated more material. The relevant economic unit is the option to buy another bounded stage.

My Three Crucibles framework treats productivity as something that can increasingly behave like capital: an owned capacity expected to produce value over time. Persistent search becomes capital-like only when it leaves reusable assets, such as verified methods, stable tests, and a searchable record of failed hypotheses. More retries without those assets remain an expense, and even useful assets lose value as models, data, and the problem change.

Evidence from ordinary work shows why output cannot stand in for value. A [2023 working paper from the U.S. National Bureau of Economic Research](https://www.nber.org/papers/w31161) studied 5,179 customer-support workers and found a 14% average increase in issues resolved per hour with an AI assistant. In a different setting, a [2025 randomized study by the independent research group METR](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/) found that 16 experienced open-source developers took 19% longer with the early-2025 AI tools tested; METR now labels that result historical rather than representative of newer systems. Neither study concerns mathematical research. Together they show why every productivity claim needs its own task, cost, and acceptance measure.

I think the stronger capital thesis should face a portfolio test. Across comparable campaigns, staged AI search must create more independently accepted value after model, tool, review, and delay costs than open-ended search and the strongest project that lost the same resources. If it cannot, persistence may still be manageable, but it has not become productive capital.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>Attempt 651 is an investment decision. Persistent AI search becomes capital-like only when it leaves reusable, verified assets and produces more accepted value after full costs than both an open-ended campaign and the best alternative use of the resources.</p>
</div>

## A stopping rule also needs an appeal

I think a persistent AI campaign should begin with a Tireless Intelligence Charter: a one-page, signed agreement that fixes the question, evidence, resource limits, and decision rights before the system starts producing persuasive output. This is a proposal to test, not a practice established by the Claude project.

An ordinary stage gate asks a team to justify its next tranche of funding. The charter adds a harder assumption: a tireless delivery system can produce far more plausible justifications than a review group can inspect. Its distinctive mechanism is therefore precommitment. Acceptance tests are fixed before launch, the team and software accounts that run the search cannot approve renewal, and rejected routes remain available to the verifier rather than disappearing behind a polished recommendation.

The document should name the accountable sponsor, delivery lead, independent verifier, renewal authority, and archive owner. It should also record the observable question; tests for success, disconfirmation, novelty, and independent acceptance; the model, tool, data, contract, licensing, storage, and supplier-exit boundaries; the stage budget in time, spend, and reviewer hours; a prebooked review date; and the strongest portfolio alternative. Where a campaign affects sensitive data or working conditions, the relevant data owner, human-oversight duty, and employee-consultation path belong in the same agreement.

A signature creates policy, but policy is not enforcement. The delivery team's account should lack permission to change a campaign from paused to renewed. The verifier signs the evidence package, a separate portfolio authority approves the transition, and a separately controlled audit record preserves the request, evidence version, decision, and approver. If tampering is a material risk, the records also need signatures or storage controls that make later changes visible. An audit log alone does not provide that guarantee.

Consider a clearly hypothetical review. A campaign receives one week, a capped model-and-tool budget, and 20 reviewer hours. At the review date, it has no independently accepted outcome but offers one new testable hypothesis. If the delivery team submits its own renewal, the request fails because the required verifier and portfolio approvals are absent. The verifier may then assess whether the hypothesis clears the predeclared novelty test, while the portfolio authority compares one more stage with the strongest unfunded candidate and includes review time and delay in the cost. Renewal is possible, but never automatic.

The stopping authority can still be wrong, especially in frontier work where useful questions may be difficult to measure. A named challenger should be allowed to request one bounded appeal by presenting new external evidence, a newly testable hypothesis, or a flaw in the original acceptance rule. An independent verifier decides whether the challenge is real, and the outside authority decides whether to reopen the evidence contract. The archive should record a false stop when a terminated path later clears the original test under materially comparable conditions, so leaders can measure premature termination as well as runaway spending.

That makes the charter falsifiable. Pilot it on comparable campaigns with frozen acceptance rules, count both accepted and zero-result stages, and include reviewer effort, reusable artifacts, elapsed time, and the project displaced. If the charter does not reduce unsupported renewals and false-positive acceptance without producing an unacceptable rise in false stops, it has not improved the decision. Governance should have to earn its budget too.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>A Tireless Intelligence Charter differs from a normal stage gate by fixing evidence before launch, separating the right to search from the right to renew, preserving rejected routes, and allowing a bounded appeal. Its value should be tested against unsupported renewals, accepted errors, full cost, and premature stops.</p>
</div>

## Meanwhile in sci-fi

<div class="scifi">
<span class="scifi__label">Meanwhile in sci-fi</span>
<p class="scifi__film">Edge of Tomorrow (2014)</p>
<p>Doug Liman's science-fiction film follows Major William Cage, a soldier who dies in battle and returns to the same day with knowledge from earlier repetitions. He improves because information survives each reset and changes what he tries next.</p>
<p>The mapping to persistent AI search is precise enough to matter: repetition creates value only when evidence carries forward, failed routes remain visible, and someone has defined both the exit condition and the right to challenge it. The system may own the repetition. Humans must own whether another day is worth buying.</p>
</div>
