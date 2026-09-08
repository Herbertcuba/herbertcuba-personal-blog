(function () {
  var forms = document.querySelectorAll(".js-book-checkout");
  forms.forEach(function (form) {
    form.addEventListener("submit", async function (event) {
      event.preventDefault();
      var button = form.querySelector('button[type="submit"]');
      var consent = form.querySelector('input[name="digitalContentConsent"]');
      var error = form.querySelector(".book-checkout__error");
      var bookSlug = form.getAttribute("data-book-slug");
      var buttonLabel = form.getAttribute("data-button-label") || "Buy the e-book →";

      error.hidden = true;
      button.disabled = true;
      button.textContent = "Opening secure checkout…";

      try {
        var response = await fetch("/api/create-aion-checkout", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            bookSlug: bookSlug,
            digitalContentConsent: Boolean(consent && consent.checked),
          }),
        });
        var result = await response.json();
        if (!response.ok || !result.url) throw new Error(result.error || "Checkout failed.");
        window.location.assign(result.url);
      } catch (checkoutError) {
        error.textContent =
          checkoutError.message || "Checkout could not be started. Please try again.";
        error.hidden = false;
        button.disabled = false;
        button.textContent = buttonLabel;
      }
    });
  });
})();
