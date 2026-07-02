---
layout: base-redesign.njk
title: Books
permalink: /books/
activeNav: books
description: "Two books about what comes next — The 3 Crucibles and The Digital Singularity Shift, by Herbert Cuba Garcia."
---
{# ═══════════════════ HEADER ═══════════════════ #}
<header class="bk-header">
  <div class="bk-kicker mono"><span class="slash">//</span>ls ./books</div>
  <h1 class="bk-title">Two books about what comes next<span class="cursor">_</span></h1>
  <p class="bk-lede">The long-form versions of the ideas on this site — where the essays end and the arguments get room to breathe.</p>
</header>

{# ═══════════════════ BOOK 01 (cover left) ═══════════════════ #}
{%- set b1 = site.books[0] -%}
<div class="bk-panel bk-panel--1">
  <div class="bk-panel__cover">
    <img src="{{ b1.cover }}" alt="{{ b1.title }} cover">
  </div>
  <div class="bk-panel__text">
    <div class="bk-panel__meta mono">
      <span class="bk-badge">// BOOK {{ b1.num }}</span>
      <span class="bk-panel__tags">{%- for t in b1.tags %}<span class="art-tag art-tag--dark">{{ t }}</span>{% endfor -%}</span>
    </div>
    <h2 class="bk-panel__title">{{ b1.title }}</h2>
    <div class="bk-panel__subtitle mono">{{ b1.subtitle }}</div>
    <p class="bk-panel__desc">{{ b1.description }}</p>
    <div class="bk-panel__btns">
      <a class="btn btn--primary" href="{{ b1.amazon }}" target="_blank" rel="noopener">Buy on Amazon ↗</a>
      <a class="btn btn--secondary" href="#free">Get a free copy</a>
    </div>
  </div>
</div>

{# ═══════════════════ BOOK 02 (cover right) ═══════════════════ #}
{%- set b2 = site.books[1] -%}
<div class="bk-panel bk-panel--2">
  <div class="bk-panel__text">
    <div class="bk-panel__meta mono">
      <span class="bk-badge">// BOOK {{ b2.num }}</span>
      <span class="bk-panel__tags">{%- for t in b2.tags %}<span class="art-tag art-tag--dark">{{ t }}</span>{% endfor -%}</span>
    </div>
    <h2 class="bk-panel__title">{{ b2.title }}</h2>
    <div class="bk-panel__subtitle mono">{{ b2.subtitle }}</div>
    <p class="bk-panel__desc">{{ b2.description }}</p>
    <div class="bk-panel__btns">
      <a class="btn btn--primary" href="{{ b2.amazon }}" target="_blank" rel="noopener">Buy on Amazon ↗</a>
      <a class="btn btn--secondary" href="#free">Get a free copy</a>
    </div>
  </div>
  <div class="bk-panel__cover">
    <img src="{{ b2.cover }}" alt="{{ b2.title }} cover">
  </div>
</div>

{# ═══════════════════ FREE COPY FORM ═══════════════════ #}
<div id="free" class="bk-free">
  <div class="bk-free__grid">
    <div class="bk-free__intro">
      <h2 class="apex-h2 apex-h2--light"><span class="apex-h2__slash apex-h2__slash--light mono">//</span>Get your free copies</h2>
      <p class="bk-free__dek">Both books, free in your inbox as e-books. No newsletter strings attached — just the ideas.</p>
    </div>
    <div class="bk-free__formwrap">
      <form class="bk-form" id="freeCopyForm">
        <input type="text" name="website" tabindex="-1" autocomplete="off" class="bk-form__honeypot" aria-hidden="true">
        <div class="bk-form__field">
          <label for="free-name" class="mono bk-form__label">your name</label>
          <input id="free-name" name="name" type="text" placeholder="Jane Doe" class="bk-form__input" required>
        </div>
        <div class="bk-form__field">
          <label for="free-email" class="mono bk-form__label">your email</label>
          <input id="free-email" name="email" type="email" placeholder="name@company.com" class="bk-form__input" required>
        </div>
        <button type="submit" class="bk-form__submit">Send me the books →</button>
      </form>
      <div class="bk-form__success mono" id="freeCopySuccess" hidden>
        ✓ Sent — check your inbox for the download links.
      </div>
    </div>
  </div>
</div>

<script>
  (function(){
    var form = document.getElementById('freeCopyForm');
    var success = document.getElementById('freeCopySuccess');
    if(!form) return;
    form.addEventListener('submit', function(e){
      e.preventDefault();
      var honeypot = form.querySelector('input[name=website]').value;
      if(honeypot){ form.style.display='none'; success.hidden=false; return; }
      var name = form.querySelector('input[name=name]').value;
      var email = form.querySelector('input[name=email]').value;
      var btn = form.querySelector('button[type=submit]');
      btn.textContent = 'Sending...';
      btn.disabled = true;
      fetch('https://script.google.com/macros/s/AKfycbxzOUrR_mkzegywYY379t0sh9sRu-I0KU-aGZLrq-CqAeerJM2E5KRy_uDrxsQfYLm-/exec', {
        method: 'POST', mode: 'no-cors',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({name:name, email:email, book:'Both books (free copies page)'})
      }).then(function(){ form.style.display='none'; success.hidden=false; })
        .catch(function(){ form.style.display='none'; success.hidden=false; });
    });
  })();
</script>
