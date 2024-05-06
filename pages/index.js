import Head from "next/head";
import Script from "next/script";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <Script src="https://example.com/script.js" />
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <p className="description">
          Yes started by editing <code>pages/index.js</code>
        </p>
      </main>
    </div>
  );
}
