import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import QueryProvider from "../provider/query";
import { NotificationContextProvider } from "../provider/context";
import Layout from "../components/layout/Layout";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <NotificationContextProvider>
      <QueryProvider>
        <Layout>
          <Head>
            <meta name="description" content="NextJS practice" />
            <meta
              name="viewport"
              content="initial-scale=1.0, width=device-width"
            />
          </Head>
          <Component {...pageProps} />
        </Layout>
      </QueryProvider>
    </NotificationContextProvider>
  );
}
