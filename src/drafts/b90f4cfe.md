---
title: "When Failure Gets a Budget"
tldr: "Anthropic's 650 unsuccessful Claude ideas show that organizations can now provision persistence at machine scale. The gain will come from funding answerable questions, demanding evidence that survives an independent check, and refusing renewal when another round no longer reduces uncertainty."
permalink: /drafts/b90f4cfe/
layout: post.njk
date: 2026-08-13
---

Organizations are about to discover the difference between patience and discipline. When a system can always produce another plausible approach, failure no longer closes a project by itself. It can become the argument for another round.

In August 2026, [Anthropic, the company that develops the Claude AI system](https://www.anthropic.com/research/riemann-zeta), reported a mathematics result preceded by 650 unsuccessful ideas. The work unfolded across two sessions in Claude Code, a workspace where Anthropic's agents can read files and operate software tools. It produced 31 million output tokens, meaning metered units of text written by the model, and involved about 60 subagents. Each subagent was an AI process delegated a smaller part of the overall search.

I think this is an economic event before it is an intelligence spectacle. The project still needed difficult mathematics and expert checking, yet an unusually large search could be provisioned as model capacity, tools, and reviewer time. A human career did not have to absorb each dead end. Once persistence becomes an input that leaders can allocate, they also inherit responsibility for the question, the standard of proof, and the refusal to continue.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>Claude's failed ideas show that persistence can now be funded in large, managed blocks. The strategic problem is deciding which searches deserve that capacity and when the next attempt should be denied.</p>
</div>

## Meanwhile in sci-fi

<div class="scifi">
<span class="scifi__label">Meanwhile in sci-fi</span>
<p class="scifi__film">Edge of Tomorrow (2014)</p>
<p>In director Doug Liman's 2014 film, soldier William Cage returns to the beginning of a battle each time he dies, retaining enough knowledge to alter the following run. Claude's campaign shares the useful part of that mechanism: a repeated attempt counts as learning only if the last failure changes the next test. Leadership supplies the condition for escape by deciding what evidence would end the cycle.</p>
</div>

## Mathematics supplied a finish line

The Riemann hypothesis remains unsolved. Its central object, the Riemann zeta function, connects the locations where a certain mathematical expression equals zero with the hidden order of prime numbers. German mathematician Bernhard Riemann argued in 1859 that every nontrivial zero, excluding a familiar group that mathematicians already understand, should sit on the same vertical path. That path became known as the critical line.

The [Claude technical paper](https://www-cdn.anthropic.com/564f962e60643842f5fcb4a17c9dbc8f608f1c37.pdf) establishes something narrower. It raises the unconditional lower bound, the minimum share of those zeros proved to lie on the critical line without assuming Riemann was right, from 5/12 to at least 2/3. An optimized version reaches 0.6725.

Calling this a 37-year record can obscure the work between the endpoints. In a [peer-reviewed paper from 1989](https://doi.org/10.1515/crll.1989.399.1), number theorist J. B. Conrey established a share above 40 percent. Other mathematicians improved that floor, with 5/12 becoming the record in 2020. Claude also depended on a [study first posted in 2023 and published the following year](https://arxiv.org/abs/2306.04799), in which four number theorists made an earlier technique work without presuming that Riemann's conjecture was true. The machine entered a frontier built by people.

Its search was unusually open to challenge. According to Anthropic, the agents issued 2,400 commands through a computer shell and created hundreds of programs in the Python language. They compared calculations with known zeros, tried to break candidate claims, and consulted 54 papers from arXiv, a public site where researchers share manuscripts before or alongside journal publication. Anthropic later released a [formal version of the proof in Lean 4](https://github.com/anthropics/zeta-23-lean), a language that lets software inspect the declared assumptions and logical steps in a theorem. That makes errors easier to expose, but it cannot decide whether the work is original, important, or accepted by the wider mathematical community.

I think the fixed evidence boundary is what makes the 650 failures meaningful. The agents could produce many routes, but they could not make a rejected route correct by describing it more persuasively. Mathematics gave this campaign a finish line that did not move with enthusiasm.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>The advance was narrower than solving the Riemann hypothesis and broader than brute repetition. Decades of human mathematics supplied the frontier, while hard checks kept the search from redefining failure as progress.</p>
</div>

## Attempts and judgment now have separate budgets

Anthropic published an activity ledger, not a complete economic one. We know the output-token count and parts of the search process, but not the model's price, total input usage, hardware and energy costs, complete staff time, or the value of work displaced by this campaign. There was also no controlled run showing what fewer agents or fewer attempts would have achieved. I don't know whether 60 subagents were necessary.

The absence of a public price does not erase the organizational change. A large volume of candidate work can now be assigned without asking one researcher to experience every failure. Fatigue, shame, and career risk were not measured in this project, so converting them into compute would overstate the evidence. As a metaphor for allocatable search capacity, however, the shift is real.

The scarce complement is judgment. Experts still have to inspect assumptions, reproduce results, and decide whether a finding matters. On a theorem, the claim can eventually meet a formal test. On a strategy question with no stated condition for being wrong, the same agent capacity can generate endless reasons to preserve a hunch. Output grows, while uncertainty survives untouched.

My take is that this separation will define the economics of thinking. The production of candidate answers may expand faster than an organization's ability to validate them. Leaders who measure tokens, agent runs, or documents will reward motion. Leaders who measure the cost of a result that survives an independent check will see whether persistence is creating knowledge or merely consuming attention.

Failures can help that calculation when they are retained with their tests and reasons for rejection. A stopped path then reduces the search space for later work instead of disappearing into a transcript. I think this is the difference between purchasing persistence and purchasing repetition.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>More attempts can be provisioned, but expert judgment remains scarce. The useful economic measure is therefore the cost of a result that survives outside scrutiny, with failed paths preserved only when they narrow future search.</p>
</div>

## Give permission an expiry date

Every persistent campaign should begin with a decision it could change. The sponsor must state why that decision matters and describe an observable result, including what would show that the original premise was wrong. “Search until something useful appears” is an invitation to protect the search from failure.

The acceptance test needs a different owner. Depending on the work, that may be an independent domain expert, a controlled experiment, a formal proof system, or performance on data the agents never saw during the search. The people seeking another round can provide evidence, but they should not be able to lower the standard on their own.

Funding can then arrive in limited batches. Each allocation should cap consumption by the models, days on the calendar, access to tools, and the time demanded from reviewers. Renewal belongs in the organization's existing portfolio meeting, where another batch must compete with the next question waiting for capital. Continuation is justified when a failed approach eliminates a real possibility or produces a distinct test. A longer report is not evidence of either.

The original approval should also name the conditions for stopping. Pause when the same kind of failure returns without a new test, when independent review cannot reproduce the claimed improvement, or when the agents need authority beyond the agreed scope. Preserve what was rejected and why, then release the remaining budget. A campaign that cannot be stopped has no meaningful budget; it has an open claim on the institution.

I think the human role becomes clearer here. People still form hypotheses, understand context, recognize significance, and carry responsibility for consequences. Tireless systems add another duty: leaders must decide which uncertainty deserves sustained attack and remain willing to end the search while the machine still has ideas.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>A persistent search needs an answerable question, evidence judged independently, and permission that expires. Tireless intelligence can always supply another attempt; leadership earns its place by deciding when that attempt no longer deserves capital.</p>
</div>
