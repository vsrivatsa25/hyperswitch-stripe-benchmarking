import Head from "next/head";
import Script from "next/script";
export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Hyperswitch Prod!</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="https://checkout.hyperswitch.io/v0/HyperLoader.js" />
      </Head>
      <form id="payment-form">
        <div id="unified-checkout"></div>
      </form>
      <Script src="/hyper_prod.js" defer={true} />
    </div>
  );
}
