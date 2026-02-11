---
title: About
date: 2026-02-03
description: The story behind the tech, sci-fi, and AI exploration.
layout: base.njk
tags:
  - page
image: /images/001-refined-neo-brutalism-dark-theme-acid-gr.png
---

<div class="about-container">
  <div class="about-hero">
    <div class="about-profile">
      <img src="/images/profile.jpg" alt="Herbert Cuba Garcia" class="about-portrait" />
    </div>
    <div class="about-intro">
      <h1 class="about-title">About Herbert</h1>
      <p class="about-lead">I've always believed that the best technology doesn't just work—it tells a story.</p>
    </div>
  </div>

  <div class="about-section">
    <h2>Origins</h2>
    <p>I grew up on a diet of science fiction. The 1979 Superman movie shaped something in me at a young age: the idea that power comes with responsibility, that we can be something bigger than ourselves, and that the future is something we build rather than wait for. That mindset stuck with me through moving continents, building companies, and navigating the constantly shifting landscape of technology.</p>
  </div>

  <div class="about-section">
    <h2>Background</h2>
    <p>My background is a mix of engineering and entrepreneurship. I studied computer science with a focus on interaction design, which taught me that the best code in the world means nothing if humans can't use it. I spent over a decade building and eventually selling a development agency, learning what it takes to turn ideas into products that actually ship. That experience gave me a deep appreciation for the gap between vision and execution—it's where most projects die.</p>
  </div>

  <div class="about-section">
    <h2>AI Collaboration</h2>
    <p>Today, I'm exploring what happens when you combine human creativity with artificial intelligence. I'm not interested in AI as a replacement for people. I'm interested in AI as a collaborator. Together with AI, I've been creating books, songs, and software—pushing into territory that would have been impossible for me alone just a few years ago.</p>
  </div>

  <div class="about-section">
    <h2>Influences</h2>
    <p>My influences reflect where my head is at: Peter Diamandis, who writes about abundance and exponential thinking; Nate B. Jones, who cuts through the noise to find what's actually moving the needle; and Dave Shapiro, who combines entrepreneurial hustle with philosophical depth. These thinkers challenge me to think bigger and act bolder.</p>
  </div>

  <div class="about-section about-section--last">
    <h2>This Blog</h2>
    <p>This blog is where I share what I'm learning, building, and thinking about. I write about technology, AI, the future of work, and the intersection of humans and machines. I try to keep things personal and practical—less hype, more substance.</p>
    <p class="about-close">Thanks for being here. Let's build something interesting together.</p>
  </div>
</div>

<style>
  .about-container {
    padding-top: 100px;
    max-width: var(--content-width);
    margin: 0 auto;
  }
  
  .about-hero {
    display: flex;
    align-items: center;
    gap: 2rem;
    margin-bottom: 4rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid #333;
  }
  
  .about-profile {
    flex-shrink: 0;
  }
  
  .about-portrait {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid var(--acid);
    transition: transform 0.3s ease, border-color 0.3s ease;
  }
  
  .about-portrait:hover {
    transform: scale(1.05);
    border-color: var(--bone);
  }
  
  .about-intro {
    flex: 1;
  }
  
  .about-title {
    font-family: var(--font-display);
    font-size: clamp(2.5rem, 6vw, 4rem);
    font-weight: 700;
    letter-spacing: -0.03em;
    color: var(--bone);
    margin: 0 0 0.75rem 0;
    line-height: 1;
  }
  
  .about-lead {
    font-family: var(--font-body);
    font-size: 1.25rem;
    color: var(--acid);
    font-weight: 400;
    line-height: 1.5;
    margin: 0;
  }
  
  .about-section {
    margin-bottom: 3rem;
  }
  
  .about-section--last {
    margin-bottom: 0;
    padding-bottom: 4rem;
  }
  
  .about-section h2 {
    font-family: var(--font-display);
    font-size: clamp(1.25rem, 3vw, 1.75rem);
    font-weight: 700;
    color: var(--bone);
    margin: 0 0 1rem 0;
    letter-spacing: -0.02em;
    position: relative;
    display: inline-block;
  }
  
  .about-section h2::after {
    content: "";
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--acid);
    transition: width 0.4s ease;
  }
  
  .about-section h2:hover::after {
    width: 100%;
  }
  
  .about-section p {
    font-family: var(--font-body);
    font-size: 1.125rem;
    color: var(--ash);
    line-height: 1.75;
    margin: 0 0 1rem 0;
  }
  
  .about-close {
    color: var(--bone) !important;
    font-weight: 500;
    margin-top: 1rem;
  }
  
  @media (max-width: 640px) {
    .about-hero {
      flex-direction: column;
      text-align: center;
      gap: 1.5rem;
    }
    
    .about-lead {
      max-width: none;
    }
  }
</style>
