async function initialize() {
  hyper = Hyper("pk_prd_383a386d73e549e69a958626ffb5f839");
  var currentUrl = new URL(window.location.href);
  var clientSecret = currentUrl.searchParams.get("client_secret");
  const appearance = {};
  const options = {};
  widgets = hyper.widgets({ clientSecret, appearance });
  unifiedCheckout = widgets.create("payment", options);
  unifiedCheckout.mount("#unified-checkout");
}
initialize();
