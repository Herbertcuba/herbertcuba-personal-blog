---
title: "Google Just Published the Blueprint for Breaking Bitcoin. The Bolt Cutters Are Smaller Than We Thought."
date: 2026-03-31
excerpt: "Google, UC Berkeley, and the Ethereum Foundation just proved you need far fewer qubits to crack Bitcoin's cryptography than anyone assumed. Up to 6.9 million BTC sit exposed across vulnerable address types. The lock still holds — but the bolt cutters are shrinking fast."
featuredImage: "/images/posts/quantum-crypto-threat.webp"
layout: post.njk
tags: ["quantum", "crypto", "security", "infrastructure", "bitcoin"]
---

Today, Google Quantum AI published a [research paper](https://quantumai.google/static/site-assets/downloads/cryptocurrency-whitepaper.pdf) together with UC Berkeley and the Ethereum Foundation, accompanied by a [blog post](https://research.google/blog/safeguarding-cryptocurrency-by-disclosing-quantum-vulnerabilities-responsibly). The title is dry and academic: *"Securing Elliptic Curve Cryptocurrencies against Quantum Vulnerabilities."* The content is anything but.

They demonstrated that cracking the cryptography behind Bitcoin and Ethereum requires dramatically less quantum computing power than the entire security community assumed. Not a little less. Orders of magnitude less. The number everyone had in their heads — ten million qubits, decades away — just got replaced by roughly 1,200 logical qubits and nine minutes of compute time.

I'm not a crypto investor. I don't hold Bitcoin, and I have no financial skin in this game. But I've spent twenty years working with digital infrastructure, and I know what it looks like when a foundational assumption about security turns out to be wrong. It looks exactly like this.

Google published the blueprint for the bolt cutters. And they're much smaller than we thought.

## The Math Changed

Here's the context you need. Bitcoin, Ethereum, and most cryptocurrencies use something called Elliptic Curve Cryptography (ECC) to secure wallets. Your private key is a secret number. Your public key is derived from it using a mathematical function that's easy to compute in one direction but practically impossible to reverse. "Practically impossible" means it would take a classical computer longer than the age of the universe to derive the private key from the public key.

Quantum computers change this equation because of something called Shor's algorithm. It was designed specifically to solve the type of math problem that ECC relies on. The question has never been *if* a quantum computer could break ECC. The question has always been *when* — how many qubits would you actually need?

The consensus, until this paper, was that you'd need somewhere north of ten million qubits. Given that the best quantum computers today have around a thousand, that felt safely distant. Decades. Maybe a lifetime.

This new research says 1,200 to 1,450 logical qubits. That's the number required to derive a private key from a public key for Bitcoin's 256-bit elliptic curve. Nine minutes of processing time.

I want to be precise here, because the distinction matters: these are *logical* qubits, not physical qubits. Logical qubits are error-corrected, meaning each one requires hundreds of noisy physical qubits working together. But the shift from "ten million" to "twelve hundred" is so large that even accounting for the error-correction overhead, the timeline just compressed dramatically.

## The 9-Minute Attack

The practical attack scenario the paper describes is specific and worth understanding step by step.

When you send Bitcoin to someone, your transaction enters what's called the mempool. Think of it as a waiting room. Transactions sit there for roughly ten minutes before miners pick them up and confirm them into a block. During those ten minutes, your public key is exposed and visible to everyone on the network.

Normally this doesn't matter. Nobody can do anything useful with your public key. Reversing it to find your private key would take a classical computer an absurd amount of time.

But a sufficiently powerful quantum computer could take that exposed public key, run Shor's algorithm, and derive your private key in nine minutes. Less than the average confirmation time. With your private key in hand, an attacker could create a competing transaction, redirect your funds to their own wallet, and broadcast it with a higher fee so miners confirm it first.

The researchers call this an "on-spend" attack. You initiate a transaction, and in the brief window before it confirms, a quantum attacker intercepts it, cracks your key, and steals the funds. You'd see your transaction replaced. Your Bitcoin gone. No recourse.

Google didn't publish the implementation code. Instead, they used a zero-knowledge proof (ZK proof using SP1 zkVM and Groth16 SNARK) to verify the circuits solve the problem correctly on over 9,000 test cases — without revealing the actual implementation. Responsible disclosure: proving the threat is real while keeping the weapon locked. That distinction tells you something about how seriously they take the findings.

## The Scale

The on-spend attack is one threat vector. There's another one that requires no timing at all.

The paper identifies multiple categories of vulnerable Bitcoin addresses, and the total exposure is larger than initial reporting suggested. Roughly 1.7 million BTC sit in old pay-to-public-key (p2pk) addresses from Bitcoin's early days, where the public key is stored directly on the blockchain. Permanently visible. Always exposed. These are Satoshi-era coins, early adopter wallets, lost keys, abandoned holdings.

But that's not the full picture. The paper also flags reused P2PKH and P2WPKH addresses (common among exchanges and merchants) and Taproot (P2TR) addresses that expose tweaked public keys. When you add those up, the total vulnerable exposure reaches an estimated 6.7 to 6.9 million BTC. At current prices, we're talking about trillions of dollars in assets that a sufficiently powerful quantum computer could access.

Of those, roughly 2.3 million BTC are in dormant wallets — coins that haven't moved in years, sitting with exposed public keys, waiting for someone to build a computer powerful enough to cash in. A quantum computer wouldn't need to wait for a transaction. The keys are already out there.

## Reality Check

I want to be honest about where we actually stand, because panic helps nobody.

Logical qubits are not physical qubits. Each logical qubit requires extensive error correction, meaning you need hundreds of physical qubits per logical qubit. Current estimates suggest that cracking Bitcoin's ECC with this method would require roughly 500,000 physical qubits with today's error-correction techniques.

The most powerful quantum computers right now — IBM's and Google's own machines — have between 400 and 1,100 physical qubits. That's a gap of roughly 500x between where we are and where an attacker would need to be.

That sounds comfortable. Maybe it is, for now.

But consider the trajectory. Five years ago, the best machines had under 100 physical qubits. The number has grown by 10x in half a decade. Error-correction techniques are improving too, which means the ratio of physical-to-logical qubits could shrink. Google's own Willow chip showed error rates dropping as you add more qubits, which was considered a major breakthrough when they announced it.

The gap is real. But it's closing faster than the "ten million qubits" consensus suggested. This paper represents a 20x reduction in physical qubit requirements compared to estimates from just three years ago. The goalpost just moved dramatically closer.

## What This Actually Means

I spend a lot of my professional time thinking about infrastructure migration. When a CMS is end-of-life, you don't wait for it to crash in production. You start planning the migration while the old system still works. You build the new thing, you test it, you move over, and you decommission the old system. The worst possible approach is to wait until something breaks and then scramble.

Crypto is facing the same kind of migration moment. The underlying cryptography needs to move to post-quantum algorithms — digital signature schemes that are resistant to Shor's algorithm. NIST has already standardized several of these. The technology exists. The question is whether the ecosystem will adopt it before it becomes an emergency.

The paper also raises the concept of "digital salvage" — establishing frameworks for recovering or locking dormant assets before "Quantum Eve," the hypothetical point when a quantum computer is powerful enough to break current cryptography. Those 6.9 million BTC across vulnerable address types need a governance conversation that the crypto community has been avoiding. Google cites its own 2029 timeline for migrating its internal systems to PQC — and urges the crypto community to act before CRQCs (Cryptographically Relevant Quantum Computers) arrive.

In my experience, every infrastructure migration follows the same pattern. First you get a warning signal. Then you get a timeline. Then you run out of timeline. The migration itself is always possible. The question is whether you start while you have breathing room or after the building is on fire.

This paper is the warning signal. The timeline is still uncertain, but it just got shorter.

## Start Changing the Locks

Google published the blueprint for the bolt cutters. They're smaller than we thought. The lock still holds today — there's real distance between 1,100 physical qubits and 500,000. But that distance is shrinking, and the researchers who understand it best are the ones telling us to start moving.

The right response is migration. If you hold crypto, understand your exposure. If you build crypto infrastructure, start integrating post-quantum signatures now. If you're watching from the sidelines like I am, understand that this is a preview of what happens when foundational security assumptions change.

We have time. But not unlimited time. Start changing the locks.

*Sources:*
- *[Google Research Blog — Safeguarding Cryptocurrency by Disclosing Quantum Vulnerabilities Responsibly](https://research.google/blog/safeguarding-cryptocurrency-by-disclosing-quantum-vulnerabilities-responsibly)*
- *[Whitepaper (PDF)](https://quantumai.google/static/site-assets/downloads/cryptocurrency-whitepaper.pdf)*
- *[CCN — Google Quantum Computers Break Bitcoin/Ethereum](https://www.ccn.com/education/crypto/google-quantum-computers-break-bitcoin-ethereum-9-minutes-1-7m-btc-risk/)*
