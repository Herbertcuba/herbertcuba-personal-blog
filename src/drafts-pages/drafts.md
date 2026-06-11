---
title: Drafts
description: "Working drafts in progress. Not published yet — these exist so I can share a stable preview URL for review."
layout: base.njk
tags:
  - page
permalink: /drafts/
---

<section class="book-page">
  <div class="container">
    <div class="book-page__body" style="max-width:100%;">
      <span class="book-teaser__eyebrow">In progress</span>
      <h1 class="book-page__title" style="margin-bottom:1rem;">Drafts</h1>
      <p class="book-page__subtitle" style="margin-bottom:3rem;">{{ collections.draftList.length }} working drafts. Each link is a stable preview URL — share for review before publish.</p>

      <div class="drafts-list">
        {%- for draft in collections.draftList -%}
        <a href="{{ draft.url }}" class="drafts-list__item">
          <div class="drafts-list__meta">
            <time class="drafts-list__date" datetime="{{ draft.date }}">{{ draft.date }}</time>
          </div>
          <div class="drafts-list__content">
            <h2 class="drafts-list__title">{{ draft.title }}</h2>
            {%- if draft.excerpt %}
            <p class="drafts-list__excerpt">{{ draft.excerpt }}</p>
            {%- endif %}
          </div>
          <div class="drafts-list__arrow" aria-hidden="true">→</div>
        </a>
        {%- endfor -%}
      </div>
    </div>
  </div>
</section>
