---
title: "Who Gets to Fund Attempt 651?"
excerpt: "Anthropic’s 650 failed ideas are more than an AI anecdote. They show that repeated intellectual effort can be bought, which makes the right to stop it a central leadership responsibility."
tldr: "Anthropic’s zeta result does not prove that retries alone create discovery. It shows that organizations can buy a large, instrumented search while validation and accountability remain scarce, so leaders must predefine the question, the evidence, the expiry, and the person authorized to refuse another batch."
permalink: /drafts/b90f4cfe/
layout: post.njk
date: 2026-08-18
---

The fraction in Anthropic’s new mathematics theorem may be the headline, but the deeper change sits in the 650 failed ideas. Failure became something an organization could provision.

[Anthropic, the AI company behind Claude, reported in August 2026](https://www.anthropic.com/research/riemann-zeta) that an unreleased research version of the model generated and tested 650 ideas that failed. The broader effort eventually produced a new result in number theory across two sessions in Claude Code, Anthropic’s tool-using coding environment, using 31 million output tokens, meaning units of model-generated text used for metering. During the second session, about 60 subagents worked for roughly a day and a half. These were delegated AI processes pursuing separate paths, not 60 autonomous employees.

Anthropic’s own sentence is worth keeping intact:

> “Initially, Claude generated and tried 650 ideas, none of which worked.”

Those numbers do not prove that persistence caused the discovery. Anthropic published no controlled comparison, no complete cost record, and no experiment separating model capability from the search process. Yet the run makes a new economic object visible: an organization can now allocate compute, tools, and review time to repeated intellectual attempts at a scale that would be difficult to sustain through one human career.

For people, another serious attempt carries more than a time cost. Fatigue, embarrassment, and professional risk can accumulate, although this case did not measure any of them. AI moves part of that burden into a budget. Leadership then has to answer the question the machine cannot settle: which problem deserves another attempt, and who has the authority to say that it does not?

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>The 650 failures do not establish a formula for discovery. They show that repeated search can be purchased, shifting the scarce decision from whether work can continue to whether it should.</p>
</div>

## The result needed an audit trail

This economic argument depends on distinguishing a validated result from a large volume of plausible output. The mathematics offers an unusually clear way to do that.

The Riemann zeta function is a mathematical function whose properties reveal deep patterns in the distribution of prime numbers. In an 1859 paper, German mathematician Bernhard Riemann proposed what became the Riemann hypothesis: all the function’s nontrivial zeros, the less obvious inputs where its value becomes zero, lie on a vertical line called the critical line. The conjecture remains unproved.

[Claude’s lab-released preprint](https://www-cdn.anthropic.com/564f962e60643842f5fcb4a17c9dbc8f608f1c37.pdf) makes a narrower claim. It raises the proven minimum proportion of nontrivial zeros on the critical line from 5/12, or about 41.67%, to at least 2/3, or about 66.67%. “Unconditional” means the proof does not assume that the Riemann hypothesis is true. The 25-percentage-point increase matters, but it does not show that every nontrivial zero lies on the line.

The popular 37-year framing also needs care. Number theorist J. B. Conrey proved in a peer-reviewed 1989 paper that more than two fifths of the nontrivial zeros lie on the critical line; later human work moved the bound to 5/12, where it had stood since 2020. The new paper also credits [2024 work by number theorists Siegfred Baluyot, Daniel Goldston, Ade Irma Suriajaya, and Caroline Turnage-Butterbaugh](https://arxiv.org/abs/2306.04799), then adds a linear-algebraic way of reading their work on how the zeros are spaced. This was a search across a research frontier built by people, not an isolated act of machine stamina.

The checking process is equally important. Anthropic reports numerical tests, searches for counterexamples, and a review of 54 papers for possible prior work. A [public 2026 companion artifact in Lean 4](https://github.com/anthropics/zeta-23-lean), a language for computer-checked proofs, encodes the theorem and its logical steps so software can verify them against stated rules. This process is called formal verification. Anthropic also says internal mathematicians studied the paper and two outside specialists examined it on short notice. These are meaningful checks, but they are not independent replication or completed journal peer review.

That distinction is the economic hinge. Without acceptance tests and outside scrutiny, 31 million output tokens measure production, not knowledge.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>The result matters because a specific theorem survived several forms of checking and rests on prior human mathematics. Search volume became valuable only when evidence separated a discovery from another persuasive candidate.</p>
</div>

## Persistence has changed category

Human persistence has usually been bundled with a person. The same mind carries the dead ends, learns from them, and decides whether another year is worth the cost. Persistent AI search loosens that bundle because candidate paths can be delegated, run in parallel, recorded, and resumed by another process.

I think this is one place where productivity starts to behave like capital. An organization can buy and concentrate more attempts without finding more people willing to absorb repeated failure. The cheaper resource is candidate production across many branches; truth still depends on good tests, scarce domain experts, and someone accountable for accepting the result.

Evidence from ordinary work warns against treating more AI activity as more value. A [2023 study published by the National Bureau of Economic Research](https://www.nber.org/papers/w31161), a U.S. economics research organization, found a 14% average increase in issues resolved per hour among 5,179 customer-support agents after access to an AI assistant. In a very different setting, [a 2025 randomized study by the independent AI evaluation organization METR](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/) found that 16 experienced open-source developers took 19% longer on 246 real software issues when allowed to use then-current AI tools. Neither study tells us the return on mathematical research agents. Together, they show why each task needs its own observable measure of value.

As candidate output grows, verification can become the real constraint. So can opportunity cost: reviewer time spent on one campaign cannot test the next one. A tireless system can keep any hunch alive with another polished hypothesis, which makes continued motion increasingly easy to confuse with progress.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>AI turns repeated attempts into an allocatable resource, but accepted knowledge still consumes expert attention and independent checks. The useful economic unit is therefore a validated outcome, including the cost of rejected paths and review.</p>
</div>

## Meanwhile in sci-fi

<div class="scifi">
<span class="scifi__label">Meanwhile in sci-fi</span>
<p class="scifi__film">Edge of Tomorrow (2014)</p>
<p>Directed by filmmaker Doug Liman, the science-fiction film follows a soldier who returns to the same day after each death and gradually changes what he does because he retains information from earlier loops.</p>
</div>

The mapping is precise and limited: repetition creates value only when failed paths become usable evidence and the run has an escape condition. An AI campaign that repeats without preserving what failed, narrowing the hypothesis, or defining what ends the work is consuming cycles rather than learning from them.

## The 651st-attempt test

I use attempt 651 here as a leadership test, not as a claim about the exact sequence that produced Claude’s theorem. After a long run of failure, what must be true before the organization pays for another batch?

The [U.S. National Institute of Standards and Technology’s AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework), voluntary guidance released in 2023 for governing and evaluating AI systems, states its purpose this way:

> “The AI RMF is intended for voluntary use and to improve the ability to incorporate trustworthiness considerations into the design, development, use, and evaluation of AI products, services, and systems.”

That is useful scaffolding, but a framework cannot own a decision. Before a persistent AI campaign starts, its sponsor should put four answers on one page.

**What makes the question worth repeating?** Name the decision, theorem, or experiment, its possible value, and the strongest alternative use of the same resources. A vague instruction to find something useful gives every new output a reason to continue and no result a fair way to fail.

**What evidence changes the campaign’s status?** Define success, disconfirmation, novelty, and the evaluation period before the first run. Mathematics can use a formal statement and proof checker. A product or strategy problem may need a baseline, external data, and an independent reviewer with a different way of being wrong.

**Who may authorize another batch?** A named decision owner should compare the new evidence with the original case for investment. The team producing the candidates should not renew its own campaign. For work touching sensitive data, employees, or regulated decisions, the independent authority should also be able to expire tool and data access through the system’s quota or scheduling controls, not merely request a pause in a meeting.

**What remains if the answer is no?** Preserve rejected hypotheses, test results, source trails, and the reason for closure. Set the initial expiry in compute, elapsed time, and reviewer capacity; reopening the work should require fresh evidence, a new limit, and explicit approval. A stopped search can still reduce the cost of future inquiry if its failures remain inspectable.

This is what remains human when persistence becomes easier to buy. People still contribute ideas and expertise, but leadership carries a responsibility the run itself cannot absorb: deciding what deserves institutional attention and accepting the opportunity cost of continuing. The ability to refuse attempt 651 is part of the intelligence of the organization.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>Before persistent AI work begins, define why the question deserves repetition, what evidence can change the decision, when access expires, and who can refuse renewal. Tirelessness becomes useful only when continuation remains accountable.</p>
</div>
