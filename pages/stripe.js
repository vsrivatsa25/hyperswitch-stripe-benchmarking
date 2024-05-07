import Head from "next/head";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <script src="https://beta.hyperswitch.io/v1/HyperLoader.js" />
        <script src="/script.js" />
        <title>Next.js Stripe!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <form id="payment-form">
        <div id="unified-checkout"></div>
      </form>
    </div>
  );
}
