async function initialize() {
  hyper = Hyper("pk_snd_5c737872e3794b6fa1980da7ea890451"); //default
  var currentUrl = new URL(window.location.href);

  // Get the value of the client_secret parameter
  var clientSecret = currentUrl.searchParams.get("client_secret");
  widgets = hyper.widgets({
    clientSecret,
  });

  unifiedCheckoutOptions = {
    wallets: {
      walletReturnUrl: "https://example.com/complete?wallet=true",
    },
  };

  unifiedCheckout = widgets.create("payment", unifiedCheckoutOptions);
  unifiedCheckout.mount("#unified-checkout");
}
initialize();
