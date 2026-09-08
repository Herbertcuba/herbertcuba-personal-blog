---
layout: base-redesign.njk
title: Your book download
permalink: /books/download/
activeNav: books
description: "Secure download for your purchased e-book."
---
<section class="aion-thanks">
  <div class="aion-thanks__inner">
    <div class="apex-kicker mono"><span class="slash">//</span>PAYMENT CONFIRMED</div>
    <h1 class="apex-title">Your book is ready<span class="cursor">_</span></h1>
    <p class="apex-lede">Thank you. Your payment has been verified and your private PDF is ready to download.</p>
    <a class="btn btn--primary aion-thanks__download" id="bookDownload" href="#" hidden>
      Download the PDF ↓
    </a>
    <p class="aion-thanks__note mono">The private download link is available for 72 hours. Your Stripe receipt is sent separately.</p>
    <p class="aion-thanks__support" id="bookDownloadStatus">Verifying your payment…</p>
  </div>
</section>

<script>
(function () {
  var params = new URLSearchParams(window.location.search);
  var sessionId = params.get('session_id');
  var link = document.getElementById('bookDownload');
  var status = document.getElementById('bookDownloadStatus');
  if (!sessionId) {
    status.textContent = 'The payment session is missing. Please use the link from Stripe.';
    return;
  }
  var downloadUrl = '/api/aion-download?session_id=' + encodeURIComponent(sessionId);
  fetch(downloadUrl, { method: 'HEAD', cache: 'no-store' })
    .then(function (response) {
      if (!response.ok) throw new Error('unavailable');
      link.href = downloadUrl;
      link.hidden = false;
      status.textContent = 'Payment verified.';
    })
    .catch(function () {
      status.textContent = 'The download is unavailable or has expired. Contact Herbert if you completed the payment.';
    });
})();
</script>
