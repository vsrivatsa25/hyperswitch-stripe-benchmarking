import Head from "next/head";
import Script from "next/script";
export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Stripe!</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="https://js.stripe.com/v3/"></script>
      </Head>
      <form id="payment-form">
        <div id="payment-element"></div>
      </form>
      <Script src="/stripe_script.js" defer={true} />
    </div>
  );
}
