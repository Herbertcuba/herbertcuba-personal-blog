(function () {
  var forms = document.querySelectorAll(".js-aion-checkout");
  forms.forEach(function (form) {
    form.addEventListener("submit", async function (event) {
      event.preventDefault();
      var button = form.querySelector('button[type="submit"]');
      var consent = form.querySelector('input[name="digitalContentConsent"]');
      var error = form.querySelector(".aion-checkout__error");

      error.hidden = true;
      button.disabled = true;
      button.textContent = "Opening secure checkout…";

      try {
        var response = await fetch("/api/create-aion-checkout", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ digitalContentConsent: Boolean(consent && consent.checked) }),
        });
        var result = await response.json();
        if (!response.ok || !result.url) throw new Error(result.error || "Checkout failed.");
        window.location.assign(result.url);
      } catch (checkoutError) {
        error.textContent =
          checkoutError.message || "Checkout could not be started. Please try again.";
        error.hidden = false;
        button.disabled = false;
        button.textContent = "Buy AION — 99 SEK →";
      }
    });
  });
})();
