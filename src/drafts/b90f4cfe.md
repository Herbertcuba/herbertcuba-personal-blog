---
title: "Tireless intelligence needs a stopping rule"
description: "Claude rejected 650 ideas before advancing a mathematical lower bound about where Riemann-zeta zeros occur. Persistent search can now be funded in stages, making evidence and stopping authority leadership responsibilities."
tldr: "Anthropic says an unreleased Claude research system used 31 million output tokens and rejected 650 ideas before producing a preprint that improves a proven lower bound concerning the Riemann zeta function. The case does not show that persistence alone caused the result or that machine reasoning is cheap. It shows why leaders must choose worthy questions, set the evidence test, count the full cost of another stage, and give someone outside the delivery team authority to stop."
featuredImage: "/images/posts/tireless-intelligence-needs-a-stopping-rule.webp"
permalink: /drafts/b90f4cfe/
layout: post.njk
date: 2026-08-14
---

After 650 proposed ideas failed, continuing became a resource decision.

On August 10, 2026, [Anthropic, the AI company behind Claude](https://www.anthropic.com/research/riemann-zeta), reported that an unreleased research version of its system had advanced a difficult mathematical bound. Across two sessions in Claude Code, Anthropic's environment for tool-using coding work, the project used 31 million output tokens, units of model-generated text used for metering. Anthropic says Claude first tried 650 ideas that did not work. After another prompt to continue, it spent a day and a half coordinating about 60 subagents, separate model instances delegated to investigate and check parts of the problem.

The easy explanation is that Claude outlasted mathematicians. I think that story is too clean. The public record contains no controlled comparison showing that 650 ideas, 60 subagents, or 31 million output tokens caused the result. The successful path also relied on decades of human mathematics, a new conceptual move, software tests, adversarial review, and specialist examination.

Fatigue, shame, and career risk are a metaphor here, not findings from the project. Anthropic measured none of them. I think the real shift is narrower and more useful: an organization can now buy and coordinate more attempts without asking one person to absorb every dead end. Once persistence becomes a budgeted input, leadership must decide which question deserves it, what evidence can reject the answer, and who has the authority to end the search.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Claude's 650 rejected ideas make retry capacity visible as a fundable resource. The leadership problem is deciding which questions deserve that capacity, what will count as evidence, and who may refuse the next stage.</p></div>

## The theorem made failure unusually clear

The Riemann zeta function is a mathematical function whose zeros help mathematicians study the distribution of prime numbers. A zero is an input where the function equals zero. The negative even-number zeros are called trivial; the other, nontrivial zeros lie in a vertical region called the critical strip.

In 1859, German mathematician Bernhard Riemann proposed that every nontrivial zero lies on the center of that strip, a location called the critical line. The claim became the Riemann hypothesis, one of mathematics' best-known unsolved problems. Claude did not prove it.

The [current version of Claude's preprint, dated August 11, 2026](https://www-cdn.anthropic.com/95c246936988e43127bc6b2ceb7077c1dad2d68e.pdf), proves a narrower lower bound, meaning a guaranteed minimum share. It raises the prior record from 5/12, about 41.67 percent, to at least 2/3, about 66.67 percent, for zeros that are simple and on the critical line. An optimized version reports 0.6725, or 67.25 percent.

The statement is asymptotic: it concerns the long-run share as zeros are counted higher and higher, rather than a census at one fixed height. Its total counts zeros with multiplicity, so a repeated zero counts more than once. The theorem does not classify the remaining third. A lower bound establishes a floor, not the full hypothesis.

The popular 37-year framing also hides an important sequence. Number theorist J. B. Conrey proved that more than two fifths of the relevant zeros lie on the critical line in a [peer-reviewed 1989 paper](https://doi.org/10.1515/crll.1989.399.1). Human researchers improved the bound after that, reaching 5/12 in 2020. Claude's paper then used a [2024 peer-reviewed precursor](https://arxiv.org/abs/2306.04799) and added a linear-algebraic reading, a new use of the mathematics of vectors and matrices. The advance came from an active human research frontier, not 37 years of silence.

Anthropic's [detailed process transcripts](https://www-cdn.anthropic.com/8a0d1add3c637b858a9a181e98c40e9548c3f44f.pdf) make two decisive subagent runs more inspectable. They describe candidate routes that reduced to known results, hit explicit dead ends, or required claims at least as strong as the hypothesis they were meant to prove. In the pivotal run, an agent found that its assigned route for counting zeros away from the line was empty, then reversed the use of the same mathematical object and counted positive directions instead. A follow-up strengthened the resulting one-half claim to two thirds.

That history matters, although it is not a reproducible experiment. The model was unreleased, private reasoning is absent from the transcript export, and the public record does not provide a complete run configuration or cost ledger. Anthropic says two of its own mathematicians studied the paper, while specialist number theorists Brian Conrey and Dan Goldston examined it on short notice. Anthropic also released a [Lean 4 formalization](https://github.com/anthropics/zeta-23-lean), meaning a theorem-proving program checked precisely encoded statements and proofs against declared logical assumptions. These are meaningful checks, but they do not amount to conventional journal peer review or broad independent replication.

I think this is why mathematics is such a favorable case for persistent AI search. A theorem gives the campaign a hard target and unusually explicit ways to reject a false claim. Most strategy, product, and operating-model questions arrive without those safeguards, so leaders must build them before they purchase more attempts.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>The advance is a specific, asymptotic lower-bound theorem built on prior human research, not a proof of the Riemann hypothesis. Its unusually strong rejection tests made persistent search useful, while the unreleased model, incomplete run record, and fresh vendor-led validation limit what the case can establish.</p></div>

## Attempt 651 is an investment decision

“Attempt 651” is useful shorthand, but it is not the literal chronology. Anthropic reports 650 initial ideas before a later multiagent stage, not one numbered final attempt. I use the phrase for the next funded stage: the moment when an organization chooses whether new evidence justifies another batch of search.

The 31 million output tokens show substantial activity, not a public price. Anthropic disclosed no input-token total, model price, infrastructure or energy cost, reviewer cost, delayed alternative, or return across comparable campaigns. I don't know whether the scale was necessary, and one successful case cannot answer that question.

The economic mechanism is more precise than “thinking became capital.” Persistent search becomes an investment input when leaders can allocate it across a portfolio, cap the first stage, learn from the result, and retain the choice rather than the obligation to fund another. Each stage buys information and a renewal option. I think the capital analogy earns its name only if those staged campaigns produce more independently validated value per full cost than comparable open-ended campaigns.

Evidence from ordinary work already warns against treating activity as value. A [2023 working paper from the U.S. National Bureau of Economic Research](https://www.nber.org/papers/w31161), a research report released before conventional journal review, found a 14 percent average productivity gain when 5,179 customer-support agents received an AI assistant. A [2025 randomized study by AI-evaluation organization METR](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/), which METR later labelled out of date for current tools, found that 16 experienced open-source developers took 19 percent longer when allowed to use the AI tools tested. The settings differ, so the numbers should not be averaged. Together they show why output volume and user confidence cannot replace measurement inside the actual task.

My take is that the useful unit is full cost per independently validated outcome, compared with the next best use of the same resources. Full cost includes model and tool spend, expert review, replication, elapsed time, and the value of the project delayed to keep this one alive. The prediction is testable: if stage-gated campaigns with frozen evidence rules do not beat open-ended campaigns on that measure across a portfolio, governed persistence has not earned its economic case.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Attempt 651 means the next funded stage, not a literal final try after the first 650 ideas. Persistent search becomes an investment input only when another stage is optional, full cost is counted, and portfolio evidence shows more independently validated value than open-ended continuation.</p></div>

## Write the stopping rule before the search

A tireless system can always produce another reason to continue. The answer is a Tireless Intelligence Charter: a short, signed record that freezes the question, evidence, limits, and decision rights before the first run. This is a proposed governance control, not an Anthropic practice or a finished software workflow. It should sit inside the organization's existing portfolio, finance, architecture, and AI-governance forums rather than create a parallel committee.

Here is a deliberately fictional completed example for a 5,000-person Swedish manufacturer. It shows what the charter would look like when a campaign stops without being treated as a failure of ambition.

| Frozen field | Charter v1 record |
|---|---|
| **Campaign** | `SE-OPS-017`: test whether an AI-agent search can discover previously unknown causes of recurring equipment stoppages. |
| **Question and value owner** | The vice president of operations sponsors the value case; the maintenance-analytics product owner leads delivery. |
| **Evidence contract v1** | Success requires two new failure patterns reproduced on maintenance data withheld from the search and confirmed by an independent reliability team. A failed reproduction counts against renewal. |
| **Stage limit** | Fourteen days, a €25,000 model-and-tool ceiling, 120 reviewer hours, read-only data access, and a decision at the existing monthly digital portfolio forum. |
| **Decision rights** | The enterprise architect owns access, the finance partner records full cost, the AI-governance lead records risk, the reliability lead accepts or rejects evidence, and the portfolio chair alone can renew or stop. |
| **Audit outcome** | After €22,400 of model and tool use, 93 reviewer hours, and one candidate that failed independent reproduction, the campaign pauses automatically. A delivery-team request to continue is rejected and recorded because the evidence gate did not clear. |

The general state changes are simple. A campaign is active only while it remains inside the approved limits. It pauses automatically at a cap or review date, renews only after the independent evaluator accepts new evidence and the named forum authorizes another stage, and stops when the evidence test fails or another project has the stronger case. The delivery team may propose a version 2 with a genuinely new hypothesis, but it cannot renew itself or rewrite version 1 after seeing the output.

Software still has to enforce what the charter promises. The campaign record needs an identifier, a frozen evidence-contract version, budget caps, current state, evaluator decision, renewal authority, and a dated audit event. Tooling should block spend or permissions beyond the approved limit and preserve prompts, tool calls, intermediate outputs, rejected hypotheses, costs, objections, and renewal decisions. Otherwise the organization has policy prose where it needs a working brake.

I think this is the human role that grows as retry capacity becomes easier to buy. People still supply technical ideas, domain knowledge, relationships, interpretation, and accountability. Leadership carries an additional obligation: choose the question worth industrial persistence, then make stopping a legitimate and pre-authorized outcome.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Freeze a versioned charter before the campaign starts, enforce its limits in tooling, and require independent evidence plus existing portfolio authority for renewal. A delivery team can propose a new hypothesis, but it cannot fund itself or change the success test after seeing the result.</p></div>

## Meanwhile in sci-fi

<div class="scifi">
<span class="scifi__label">Meanwhile in sci-fi</span>
<p class="scifi__film">Edge of Tomorrow (2014)</p>
<p>Director Doug Liman's 2014 science-fiction film follows Major William Cage, a soldier who returns to the start of the same battle whenever he dies. Repetition becomes useful because he carries information from each failed loop into the next one.</p>
</div>

The mapping is precise but limited: an AI system can start another attempt without human fatigue, while its organization still accumulates compute cost, review work, delay, and lost alternatives. Unlike Cage, the institution does not recover its budget when the day restarts. Tireless intelligence can repeat the battle; leadership remains responsible for deciding whether another loop is learning or merely continuing.
