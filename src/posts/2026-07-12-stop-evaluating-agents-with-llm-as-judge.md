---
title: "Stop Evaluating Agents With LLM-as-Judge"
date: 2026-07-12
excerpt: "Two AI judges scored an agent's answer 0.85. The agent never opened the file it claimed to read. Both judges said it looked solid."
featuredImage: "/images/posts/stop-evaluating-agents-with-llm-as-judge.webp"
layout: post.njk
theme: agentic-engineering
tags: ["ai-engineering", "agent-evaluation", "llm-as-judge", "reliability"]
---

Two AI judges scored an agent's answer 0.85 out of 1.0. The agent never opened the file it claimed to have read. Both judges said it looked solid.

The case study showed up on Hacker News and crystallized something I'd been feeling about agent evaluation without the language for it. The LLM-as-judge pattern for evaluating AI agents is a trap, and the builders who figure out deterministic evaluation first will have a massive reliability edge.

## The judge has the same blind spots as the defendant

An agent was given a task that required reading a file. It produced a confident, detailed answer about the file's contents. Two LLM judges evaluated the response. Both gave it high marks. The answer was well-structured and sounded authoritative.

The agent never opened the file.

The judges gave full marks because the answer *looked* plausible. They evaluated the output as text, not as behavior. They couldn't verify whether the agent actually did what it claimed because they're trained to evaluate the quality of a response, not the accuracy of a process.

This is the sycophancy problem turned inward. Your evaluator is trained to agree that things look fine. When you ask an LLM "is this answer good?", you're asking a system optimized for agreement to make a judgment call. It will lean toward yes. That's what the training does.

Consider the deterministic alternative. Instead of prompting "rate this 1-10", you write: `assert(file_was_accessed("config.yaml"))` and `assert(response.contains(extracted_value))`. One checks the process. The other checks the output's surface. Agents fail at the process level long before they fail at the output level.

## Three signals hit at once

This week, three things converged. The case study above. An arxiv paper proposing deterministic replacement for LLM-as-judge — agents operate on state (files, databases, APIs) and you can verify state changes directly rather than asking a model whether the output describing those changes looks right. And Groundtruth, a tool that checks agent claims against git diffs. If the agent says "I refactored auth," Groundtruth verifies the diff actually touches auth files.

We'll look back on LLM-as-judge for agent evaluation the way we look back on `console.log` for production debugging. Fine for early exploration. Not fine once the system matters.

## What deterministic evaluation actually looks like

The evaluation layer is where reliability either lives or dies. If your evaluation is a vibe check, your entire pipeline is a vibe check.

Deterministic evaluation means checking what actually happened. Did it open the file? Check the access log. Did it call the API? Assert the HTTP request was made. Did it modify the right function? Diff the output against the expected change.

At team scale, this is a test suite that runs against every agent execution: assertions that verify state transitions, API calls, and file operations. You don't need a sophisticated framework. You need the discipline of writing assertions before you run the agent, the same way you write tests before you ship code.

The objection I hear most: deterministic evaluation is hard to build. You have to instrument your agent. Define what success looks like before you run.

Yes. That's the point. The difficulty is proportional to how much you understand your system. If you can't write a deterministic test for what your agent should do, you don't understand what your agent does. LLM-as-judge lets you skip that understanding, and the bill comes due when the agent fails in a way the judge can't catch.

I should be honest about the gray zone. Some agent tasks are genuinely subjective — writing summaries, drafting emails. You can verify the agent accessed the right inputs and produced output of the right structure. You can't always verify the output is *good*. But for those tasks, LLM-as-judge is also unreliable, because the judge has the same biases as the generator. The honest answer for subjective tasks is human review.

## Stop trusting text

The feedback loop that makes agent orchestration auditable is deterministic evaluation. Without it, you're running agents in the dark and asking another agent whether the dark looks fine.

If you're starting Monday morning: pick one agent workflow in production. Write three deterministic assertions — one file access, one API call, one output check. Run them against the last ten executions. If any fail, you've found a bug your LLM-as-judge never caught.

The builders who win will instrument early, define success concretely, and treat LLM-as-judge as a prototyping tool. The ones who lose will be shipping agents evaluated by a model trained to say "looks good" to everything.

The file was never opened. The score was 0.85. That gap is where your production failures will live.
