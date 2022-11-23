import "@/root/globals.scss";
import Head from "next/head";
import { Fragment } from "react";

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || (page => page);

  return getLayout(
    <Fragment>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
