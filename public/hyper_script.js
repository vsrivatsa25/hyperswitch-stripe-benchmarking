async function initialize() {
  hyper = Hyper("pk_snd_5c737872e3794b6fa1980da7ea890451");
  var currentUrl = new URL(window.location.href);
  var clientSecret = currentUrl.searchParams.get("client_secret");
  const appearance = {};
  const options = {};
  widgets = hyper.widgets({ clientSecret, appearance });
  unifiedCheckout = widgets.create("payment", options);
  unifiedCheckout.mount("#unified-checkout");
}
initialize();
