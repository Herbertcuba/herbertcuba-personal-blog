---
title: "Tireless intelligence needs a stopping rule"
date: 2026-08-15
excerpt: "Anthropic reports that Claude tried 650 ideas that failed before a large agent search advanced a difficult mathematical bound. The strategic lesson is that persistence can now be funded, which makes stopping it a leadership responsibility."
tldr: "Anthropic’s 31-million-output-token search advanced a Riemann zeta bound after 650 failed ideas, but the case does not show that persistence alone caused success. It shows that bounded, verifiable search can now be funded like an input, making leadership responsible for worthy questions, evidence standards, independent review, and stopping rules."
layout: post.njk
tags:
  - ai-leadership
  - agentic-ai
  - economics-of-thinking
permalink: /drafts/b90f4cfe/
---

On 10 August 2026, [Anthropic, the AI company behind Claude](https://www.anthropic.com/research/riemann-zeta), reported that an unreleased research version of its model had produced a new mathematical result after 650 ideas initially failed. The result emerged over two sessions in Claude Code, Anthropic’s coding-agent environment, and generated 31 million output tokens in total. After those failed ideas, Anthropic says Claude spent roughly a day and a half coordinating about 60 subagents. An output token is a metered unit of model-generated text. A subagent is a delegated, tool-using model run, not another employee.

Those numbers invite a clean story: Claude outlasted mathematicians. I think the more useful story is narrower. Anthropic published no controlled comparison showing that 650 failures caused the result, and it did not disclose a full dollar cost. I don’t know how many of those failed routes were necessary.

Yet I think the run exposes a real change in the economics of thinking. An organization can now buy more attempts at a hard problem without asking one person to absorb every dead end. Fatigue, shame and career risk were not measured in this experiment, so they belong to the interpretation rather than the evidence. The evidence is that continued search could be provisioned through tokens, tools, delegated runs and expert review. Persistence has become a budget decision.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Anthropic’s figures document a large, metered search, not proof that retries alone produced the result or that the search was cheap. Their strategic importance is that an institution can now allocate persistence as a resource, moving the central decision from endurance to judgment.</p></div>

## What the mathematics actually says

The [Riemann zeta function](https://dlmf.nist.gov/25.10) takes complex numbers, which have real and imaginary parts, as inputs. Its zeros are the inputs where its value is zero. Beyond a known series of “trivial” zeros at negative even integers, its nontrivial zeros carry information about how prime numbers are distributed.

In 1859, German mathematician Bernhard Riemann proposed what became the Riemann hypothesis: every nontrivial zero lies on the critical line, where the real part of the input is one-half. That famous hypothesis remains open. A lower bound is more modest: it proves that at least a given share of the zeros has the required property, without claiming that all of them do.

In a [lab-released preprint authored as Claude](https://www-cdn.anthropic.com/564f962e60643842f5fcb4a17c9dbc8f608f1c37.pdf), the new theorem concerns zeros in increasingly high ranges. It proves that at least two thirds of all nontrivial zeros in those ranges, counted with multiplicity, are simple and lie on the critical line. “Simple” means a zero is not repeated. An optimized version gives a lower bound of 0.6725.

The previous record was 5/12. Number theorist J. B. Conrey’s [peer-reviewed 1989 paper](https://doi.org/10.1515/crll.1989.399.1) established more than two fifths, and later human work [raised the bound to 5/12 in a 2020 journal volume](https://doi.org/10.1007/s40687-019-0199-8). So the popular “37-year record” describes the span from Conrey’s paper to 2026, not 37 years without mathematical progress.

I think this history matters because the run combined conceptual work with repeated testing. The preprint credits existing analytic work and says its new contribution is applying linear algebra to a mathematical sum inherited from that work. Anthropic also released a [Lean 4 formalization](https://github.com/anthropics/zeta-23-lean). Lean 4 is a proof-assistant language: formal verification means the software checks a precisely encoded theorem and its dependencies. That is a serious validation layer, but the result is still a preprint rather than a conventionally peer-reviewed journal article.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Claude did not prove the Riemann hypothesis. Among all nontrivial zeros in increasingly high ranges, counted with multiplicity, the lab-released preprint presents a proof that at least two thirds are simple and lie on the critical line; an optimized version gives 0.6725, up from the prior 5/12 bound. The work builds on earlier mathematics and adds a new linear-algebra step. Anthropic released a public Lean formalization, but the result has not completed conventional journal peer review.</p></div>

## When persistence becomes capital

Anthropic says the agents issued 2,400 shell commands, wrote hundreds of Python scripts, ran numerical checks, searched for counterexamples, and downloaded 54 papers from arXiv, the public research-preprint repository, to look for prior work. I think of this as an instrumented search because the work included numerical tests, counterexample searches and comparison with prior research.

The 31 million output tokens make that search visible, but they do not make its economics complete. The public account gives no full ledger covering model and tool charges, infrastructure, expert time or the work displaced by this campaign. Because the price remains unknown, I think the useful economic shift is the ability to provision and withdraw extra search capacity, rather than a claim that “thought became cheap.”

That distinction matters because more AI activity does not reliably mean more value. A 2023 [National Bureau of Economic Research study](https://www.nber.org/papers/w31161) of 5,179 customer-support agents found that access to an AI assistant increased issues resolved per hour by 14 percent on average. In a different setting, a 2025 [randomized study by the independent evaluation group METR](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/) found that 16 experienced open-source developers took 19 percent longer on 246 real software issues when allowed to use early-2025 AI tools. The studies cover different work, people and systems, so their numbers should not be combined into a universal productivity rate. They show why every campaign needs its own measure of validated value.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Persistent AI search turns retries into an allocatable input, but tokens and agent activity are incomplete economic measures. Leaders need the full cost of a campaign and evidence accepted inside the actual workflow, because AI can improve measured performance in one setting and worsen it in another.</p></div>

## Write the stopping rule first

A tireless system magnifies the quality of the brief it receives. Give it a theorem with checkable conditions and it can test many routes. Give it an executive hunch with no disconfirming evidence, and it can spend months producing increasingly polished reasons to continue. A stopping rule, meaning a condition written in advance that pauses or ends the search, protects the organization from that second path.

My take is that every persistent AI campaign should begin with a one-page precommitment written for that specific search:

1. **Name the question and accountable owner.** State the decision, theorem or experiment being pursued, why its upside merits a search budget, and who remains answerable for the campaign.
2. **Freeze the evidence gate.** Define observable success, disconfirming evidence and the required independent check before the system starts generating persuasive material.
3. **Fund stages with separate renewal authority.** Cap model and tool spend, tokens, elapsed time, permissions and reviewer hours. The delivery team should not be able to approve its own next stage.
4. **Stop and preserve the record.** Pause when failures repeat without a new test, independent review cannot reproduce the claim, or another portfolio option has higher expected value. Archive rejected hypotheses, evidence and source trails so a later search does not buy the same failures again.

I think the honest economic measure is full cost per validated outcome. It combines the direct system bill, infrastructure, expert-review effort and the value of the best alternative left unfunded, then compares that total with results accepted by someone outside the delivery loop. When a campaign produces no accepted result, report the spend and zero validated outcomes rather than inventing a favorable ratio; the failure archive can still be useful.

Leadership remains active in this model. People still contribute ideas, domain knowledge, interpretation and accountability. What changes is where scarce judgment sits: choosing the question, setting the proof standard and refusing another round when persistence has stopped producing information.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Persistent agents should operate under a prewritten contract that names the owner, freezes evidence standards, caps each stage and gives renewal power to someone outside the delivery loop. The core metric is full cost per independently validated outcome, with stopped searches preserved as auditable evidence rather than quietly reframed as progress.</p></div>

## Meanwhile in sci-fi

<div class="scifi">
<span class="scifi__label">Meanwhile in sci-fi</span>
<p class="scifi__film">Edge of Tomorrow (2014)</p>
<p><a href="https://www.warnerbros.com/movies/edge-tomorrow">Doug Liman’s film</a> follows Major William Cage, a soldier forced to relive the same battle after each death. The mapping to persistent AI search is precise: repetition creates value only when each failure changes the next attempt. Machines can repeat the day; leadership decides whether the next repetition is still learning.</p>
</div>
