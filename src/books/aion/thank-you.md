---
layout: base-redesign.njk
title: Your AION download
permalink: /books/aion/thank-you/
ctaHidden: true
description: "Download AION after a verified Stripe payment."
---
<section class="aion-thanks">
  <div class="aion-thanks__inner">
    <div class="bk-kicker mono"><span class="slash">//</span>payment verified</div>
    <h1 class="bk-title">AION is ready<span class="cursor">_</span></h1>
    <p class="bk-lede" id="aionDownloadStatus">Verifying your payment…</p>
    <a class="btn btn--primary aion-thanks__download" id="aionDownload" href="#" hidden>
      Download AION (PDF) →
    </a>
    <p class="aion-thanks__note mono">The private download link is available for 72 hours. Your Stripe receipt is sent separately.</p>
    <p class="aion-thanks__support">Having trouble? <a href="mailto:herbert@cubagarcia.com">Contact Herbert</a>.</p>
  </div>
</section>

<script>
  (function () {
    var status = document.getElementById('aionDownloadStatus');
    var link = document.getElementById('aionDownload');
    var sessionId = new URLSearchParams(window.location.search).get('session_id');
    if (!sessionId) {
      status.textContent = 'The payment reference is missing. Use the link Stripe returned after checkout.';
      return;
    }

    var downloadUrl = '/api/aion-download?session_id=' + encodeURIComponent(sessionId);
    fetch(downloadUrl, { method: 'HEAD', cache: 'no-store' })
      .then(function (response) {
        if (!response.ok) throw new Error('Payment could not be verified.');
        status.textContent = 'Thank you. Your payment is confirmed and the field manual is ready.';
        link.href = downloadUrl;
        link.hidden = false;
      })
      .catch(function () {
        status.textContent = 'The download is unavailable or has expired. Contact Herbert if you completed the payment.';
      });
  })();
</script>
