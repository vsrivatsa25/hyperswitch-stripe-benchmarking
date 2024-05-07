async function initialize() {
  const stripe = Stripe(
    "pk_test_51Gw6ujEFI6N5xFEBRAJXaTYE8Lflr8YVZsh7heVZZsu9rLDhr1K0Eae9ta2hmBxzRCSwJnbktkLbQrkMEMoQzSOB00U5GmpVs2"
  );
  var currentUrl = new URL(window.location.href);

  // Get the value of the client_secret parameter
  var clientSecret = currentUrl.searchParams.get("client_secret");
  const appearance = {};
  const options = {};
  const elements = stripe.elements({ clientSecret, appearance });
  const paymentElement = elements.create("payment", options);
  paymentElement.mount("#payment-element");
}
initialize();
