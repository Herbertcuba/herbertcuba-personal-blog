---
title: "Tireless intelligence needs a stopping rule"
tldr: "Anthropic’s reported zeta result does not show that retries alone create breakthroughs. It shows that organizations can fund large, metered searches while proof, review, and opportunity cost remain scarce. The next batch should require a named owner, independent evidence, and an enforced expiry."
permalink: /drafts/b90f4cfe/
layout: post.njk
date: 2026-08-18
---

Anthropic, the AI company behind Claude, says an unreleased research version of its system generated 650 unsuccessful ideas before reaching a new mathematical result. That is easy to read as a story about machine stamina. I think the more useful reading is economic: an organization can now fund a volume of search that would collide with a person’s time, fatigue, and reputation long before the 650th failure.

On August 10, 2026, [Anthropic reported](https://www.anthropic.com/research/riemann-zeta) that the work ran in two sessions inside Claude Code, its coding-agent environment, and produced 31 million output tokens. An output token is a unit of model-generated text used to meter model output. During the second session, roughly 60 subagents, meaning delegated AI processes working on separate tasks with tools, ran for about a day and a half.

Those numbers do not tell us what the result cost in dollars, or whether 650 failures caused the eventual advance. They show something narrower. Leaders can buy another batch of candidate generation, but they still have to pay three different prices: producing it, judging it, and bearing the opportunity cost of leaving another question unfunded.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Claude’s reported run makes repeated search fundable and measurable. It does not make correct answers, expert review, or opportunity cost cheap.</p></div>

## The result came with a judge

The Riemann zeta function is a mathematical object whose zeros help describe how prime numbers are distributed. A zero is an input at which the function’s value becomes zero. Its known zeros at negative even numbers are called trivial; the Riemann hypothesis concerns the remaining, nontrivial zeros in a two-dimensional number space. The critical line is a fixed vertical line at the real coordinate one half. Bernhard Riemann, a German mathematician, proposed in 1859 that every nontrivial zero lies on that line. The hypothesis remains unproved.

Claude did not prove it. The [lab-released preprint](https://www-cdn.anthropic.com/564f962e60643842f5fcb4a17c9dbc8f608f1c37.pdf) raises an unconditional lower bound, a guaranteed minimum that does not assume the hypothesis is true, from 5/12 of the nontrivial zeros to at least 2/3. That is a 25-percentage-point increase; an optimized version reaches 0.6725. The previous 5/12 bound had stood since 2020.

The popular “37-year record” label begins with number theorist J. B. Conrey’s [1989 result](https://doi.org/10.1515/crll.1989.399.1) that more than two fifths lie on the line, but human mathematics kept advancing after that. The new proof also builds on a [2024 paper](https://arxiv.org/abs/2306.04799) by four number theorists, Baluyot, Goldston, Suriajaya, and Turnage-Butterbaugh. It adds a new reading based on linear algebra, the mathematics of vectors and matrices, to part of their work. Search capacity was one input, not a substitute for the research frontier it searched.

The case is unusually useful because mathematics supplied a hard way to reject plausible nonsense. Anthropic says internal mathematicians studied the paper and outside number theorists Brian Conrey and Dan Goldston examined it on short notice. A [public Lean 4 artifact](https://github.com/anthropics/zeta-23-lean) encodes the theorems and logical steps in a proof-assistant language so software can check them against stated rules. This process is called formal verification. These are meaningful layers of scrutiny, but they are not completed journal peer review or independent replication.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>The advance is a specific lower-bound theorem, not a solution to the Riemann hypothesis. Its value comes from inherited mathematics, a new conceptual step, extensive search, and several checkable forms of review.</p></div>

## Another try has three prices

The first price is production. Thirty-one million output tokens, tool calls, scripts, and parallel subagents make effort visible enough to meter, yet the public record includes no complete invoice, model pricing, hardware spend, or controlled comparison. We cannot infer that this route was cheap, much less that adding tokens would reproduce the result.

Still, the direction matters. In my Three Crucibles framing, productivity increasingly behaves like capital: productive capacity can be funded and directed at a chosen problem instead of coming only from additional human hours. Persistent agents make that idea concrete. The source did not measure fatigue, shame, or career risk, but Claude does not experience those personal consequences of a rejected proof path. Part of the cost of persistence has moved from human endurance into compute, tools, and orchestration.

The second price is validation. More candidates create more claims to test, failed branches to record, and evidence to reproduce. In the zeta case, numerical checks, literature searches, formal proof work, and scarce specialist attention made the output credible enough to examine. For an enterprise campaign, the useful denominator is an accepted result defined before the run, within a fixed task set and evaluation window. Full cost includes reviewer hours, replication, rejected outputs, delay, and supplier charges, not only tokens.

The third price is displacement. A 2023 [National Bureau of Economic Research study](https://www.nber.org/papers/w31161) from the U.S. economics research organization followed 5,179 customer-support workers and found 14% more issues resolved per hour with an AI assistant. In a different setting, a [2025 randomized study by the independent AI evaluation group METR](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/) found that experienced open-source developers took 19% longer with early-2025 AI tools; METR now labels that snapshot outdated. Neither study settles the economics of mathematical research. Together they warn against treating machine activity as value without asking which task, which acceptance test, and which alternative use of the same resources.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>The real ledger includes production, independent validation, and the strongest project left unfunded. Token volume is an input metric; value begins with a predeclared accepted outcome.</p></div>

## Every batch should expire

The [U.S. National Institute of Standards and Technology](https://www.nist.gov/itl/ai-risk-management-framework), the federal measurement agency, released its voluntary AI Risk Management Framework in 2023 and a generative-AI profile in 2024. It asks organizations to govern, map, measure, and manage AI risk across the system’s life. Persistent research needs one additional operating decision made explicit: who may authorize another batch after the original mandate runs out?

I would put the answer in the approval record before the first agent starts:

> **The attempt-651 rule:** A named decision owner may release the next batch only after an independent reviewer accepts new evidence and the owner records why this question now outranks the strongest unfunded alternative.

Before launch, the record should define the question, the accepted result, and the evidence that would disconfirm it. Together these fields form an evidence contract, which should carry a version number so every run points to the rules it faced. The mandate should also cap output tokens, elapsed time, tool rights, data access, and reviewer hours. Higher-risk work, such as a campaign touching personal data, employment decisions, regulated outcomes, or external systems, needs a higher review tier and narrower permissions than research over public mathematical papers.

Expiry must be enforced by the machinery that launches the work. A scheduler, the software service that starts agent jobs and applies quotas, should pause the campaign when any cap is reached and remove its tool access. Reactivation then requires both the reviewer’s evidence decision and a new resource grant from the named owner. A closed campaign cannot be reopened by its delivery team; security or the data owner retains authority to revoke access, while procurement must preserve a practical supplier exit and export of the evidence archive.

This decision can live in an existing AI steering or portfolio forum. The budget owner judges comparative value, a domain expert judges the evidence, and privacy, security, legal, or worker representatives hold veto authority within their remit. Failed hypotheses, tests, and source records should survive closure so a later campaign does not purchase the same dead ends again.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>A persistent-agent mandate should expire by default. Renewal requires independent evidence, a named owner, a fresh resource cap, proportionate risk review, and a written comparison with the best unfunded alternative.</p></div>

## Meanwhile in sci-fi

<div class="scifi">
<span class="scifi__label">Meanwhile in sci-fi</span>
<p class="scifi__film">Edge of Tomorrow (2014)</p>
<p>The science-fiction film follows a soldier forced to repeat the same deadly day. Repetition becomes useful only because he retains information, changes the next attempt, and knows there is an outcome that ends the cycle.</p>
</div>

The mapping is precise: an agent campaign gains value when failed attempts preserve evidence and alter the next search, while leaders define the exit condition. Endless repetition without retained learning or a finish line is merely expensive recurrence.

## What remains human is the allocation

People still contribute technical ideas, domain knowledge, interpretation, relationships, and moral responsibility. The zeta case does not reduce us to budget approvers. It does, however, expose a leadership task that becomes more important as machine persistence grows: deciding which questions merit unusual endurance and accepting responsibility for the questions that must wait.

A tireless system can keep producing reasons to continue. That makes stopping part of thinking rather than an admission that thinking failed. A system can supply another attempt, but it cannot own the opportunity cost. That remains with the person who approves the next batch, including when the responsible answer is no.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>As repeated search becomes purchasable, human value does not disappear; it concentrates around question choice, evidence, accountability, and the authority to stop.</p></div>
