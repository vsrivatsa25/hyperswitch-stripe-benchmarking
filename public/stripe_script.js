async function initialize() {
  const stripe = Stripe(
    "pk_test_51BTUDGJAJfZb9HEBwDg86TN1KNprHjkfipXmEDMb0gSCassK5T3ZfxsAbcgKVmAIXF7oZ6ItlZZbXO6idTHE67IM007EwQ4uN3"
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
