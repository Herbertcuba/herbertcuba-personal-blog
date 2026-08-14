---
title: "Who decides when tireless intelligence stops?"
tldr: "Anthropic reports that an unreleased Claude research system strengthened a long-standing result about the Riemann zeta function, a mathematical object tied to prime numbers, after 650 failed ideas. The campaign used 31 million output tokens, units of model-generated text, and about 60 delegated AI processes. No controlled comparison isolates why it worked, so the run cannot establish a general return on retries. I think the leadership lesson is narrower: organizations can treat large, checkable searches as metered campaigns, while people remain accountable for the question, the evidence, and the decision to stop."
permalink: /drafts/b90f4cfe/
layout: post.njk
date: 2026-08-14
---

Anthropic's reported mathematics result puts an unusual management decision in plain sight: who authorizes another round after 650 failed ideas?

On August 10, 2026, [Anthropic, the AI company behind Claude, reported](https://www.anthropic.com/research/riemann-zeta) that an unreleased research version of its system had tried 650 ideas without success before arriving at the proof described in its preprint. A preprint is a research paper shared before conventional journal review, so the public claim should not be mistaken for a result settled by that process. The work ran across two sessions in Claude Code, Anthropic's tool-using coding environment, and consumed 31 million output tokens, the metered units of text produced by a model. Anthropic also says Claude spent a day and a half coordinating about 60 subagents, delegated AI processes working on parts of the search and its checks.

I think the case makes a new economic possibility visible: a research campaign's persistence can be allocated as metered machine work. Anthropic did not publish a dollar cost, compare the campaign with a human research team, or prove that the 650 failures caused the result. Still, this particular effort was measured in model output and spread across tools and delegated runs. We cannot say what human work it replaced or whether a smaller search would have succeeded.

That is why the language about fatigue, shame, and career risk becoming a compute budget needs care. Anthropic measured none of those psychological or economic effects, so the phrase can function only as a management metaphor. I think it works only with that boundary visible. The reported campaign moved repeated attempts into metered machine work; people still had to choose the problem, inspect the claim, and decide whether to keep going.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>In Anthropic's campaign, persistence became a metered resource without establishing a general return on retries. Leaders still have to decide whether another batch of attempts is worth authorizing.</p></div>

## The theorem gave the search a hard edge

The Riemann zeta function is a mathematical function whose zeros, the inputs where its value becomes zero, encode fine information about how prime numbers are distributed. In 1859, German mathematician Bernhard Riemann proposed what became the Riemann hypothesis: every nontrivial zero, excluding the known zeros at negative even integers, lies on the critical line where the input's real part equals one half. The hypothesis remains unproved.

Claude did not solve it. The [lab-released technical paper](https://www-cdn.anthropic.com/564f962e60643842f5fcb4a17c9dbc8f608f1c37.pdf) claims a new unconditional lower bound, which is a proven minimum share that does not assume the hypothesis is true. It moves that minimum from 5/12 of the zeros to at least 2/3, a rise of 25 percentage points. An optimized version of the argument raises the stated lower bound to 0.6725, or 67.25 percent.

The 37-year headline compresses a history that kept moving. Number theorist J. B. Conrey's [1989 peer-reviewed paper](https://doi.org/10.1515/crll.1989.399.1) proved that more than two fifths of the zeros lie on the critical line, and later work lifted the record to 5/12 in 2020. Claude's paper draws on that research line, including [a 2024 result](https://arxiv.org/abs/2306.04799) by number theorists Baluyot, Goldston, Suriajaya, and Turnage-Butterbaugh, and says its new ingredient is a fresh way of reading the mathematical structure in their work.

I don't know how much of the outcome came from that conceptual move, the scale of the search, or their interaction. Anthropic published no controlled comparison that varies the agent count or token budget. What we do have is a specific claim, numerical checks, review by Anthropic mathematicians, examination on short notice by two outside specialists, and a [public Lean 4 formalization](https://github.com/anthropics/zeta-23-lean). Lean 4 is a theorem-proving programming language; formal verification means its software checks a precisely encoded proof under declared assumptions. This goes beyond persuasive prose, while its scope stops short of conventional journal peer review or independent replication.

The result came with an acceptance test precise enough for other people and software to apply. A strategy or product campaign needs its own observable test before leaders can generalize this method beyond mathematics.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>The paper's mathematical claim is specific and checkable, while its status remains a preprint with formal and specialist checks rather than completed journal review. Its unusually precise test made persistent search easier to govern than a typical strategy or product question.</p></div>

## Meanwhile in sci-fi

<div class="scifi">
<span class="scifi__label">Meanwhile in sci-fi</span>
<p class="scifi__film">Edge of Tomorrow (2014)</p>
<p>Director Doug Liman's film follows Major William Cage through repeated deaths and returns to the same battle. Cage remembers each run even as everyone around him resets.</p>
</div>

The useful mapping is memory, but this is a design proposal rather than a measured result from Anthropic. An organization should preserve each test and reason for rejection, then check whether later attempts actually narrow the search. Cage also faces a fixed battle, while an organizational campaign can quietly rewrite its own objective, so leaders need to fix the success condition before the first run.

## A budget can extend search without validating it

According to Anthropic, the campaign did far more than produce text. The agents ran numerical checks, wrote hundreds of scripts in Python, a common programming language, searched for counterexamples, reviewed one another's work, and downloaded 54 papers from arXiv, an open repository for research preprints, to check whether the finding was already known. Those steps left a clearer trail of how the claims were tested, while the wisdom of continuing remained an external decision.

My take is that this is the useful meaning of productivity becoming capital. The case suggests that an organization can fund another stage of machine search much as it can fund more computing capacity or laboratory time. Yet Anthropic's disclosure gives us no public invoice, energy total, opportunity cost, or count of comparable campaigns that ended with nothing. The organization of persistence is visible here. Its expected return remains unknown.

I think this distinction will become harder to hold as agent activity becomes easier to show. Agent work leaves visible token counts and artifacts such as scripts, documents, or rejected ideas, so it can create the appearance of a serious program. I would count economic value only when an evaluator outside the campaign can reproduce or confirm a result and it changes a real decision or body of knowledge.

If the sponsor also judges the evidence, another round could produce more reasons to protect the hunch that launched the work. The zeta case does not demonstrate that outcome; it is the governance risk leaders should design against before repeated runs feel routine.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Machine activity yields convenient counts; validated value requires an external evaluator to reproduce or confirm the result. Leaders should renew a campaign for better evidence rather than a larger pile of material.</p></div>

## Require every renewal to earn its budget

Anthropic's account does not say it used an enterprise mandate of this kind. For organizational work, I would require the sponsor to define the question, the first stage, and its budget before a persistent agent campaign begins. That budget should include output tokens, elapsed time, tool permissions, and human review, because model metering captures only part of the real effort. The mandate should also identify the person who can end the campaign.

Next comes the evidence test. A proof may require a formal checker and specialist review; a product claim may require a controlled experiment or external customer data. The evaluator should use a method unlikely to repeat the search system's mistakes, and the sponsor should not be the sole judge of success. Otherwise, each polished output can become evidence for the next allocation.

Renewal should follow information gained rather than effort spent. Another stage might be justified when the system produces a genuinely new hypothesis that a test could prove wrong, or when an independent result improves. It should pause when the same failure returns without a new explanation, an outside reviewer cannot reproduce the claim, or the work needs authority beyond its original mandate. Keeping each failed path together with its test and source record would give later reviewers something to inspect; whether future agents use that record well would still need to be tested.

I think this is where the human role grows rather than shrinks. People will still contribute technical ideas and interpret why results matter. Accountability also remains human, while leaders become responsible for machine persistence and decide when sustained search merely protects an old decision from reality.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Persistent AI work should receive a limited first mandate, an evaluator outside the search, and renewal conditions based on new evidence. When leaders fund persistence as metered model work, they should also have the right to deny the next round.</p></div>
