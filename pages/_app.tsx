import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import QueryProvider from "../provider/query";
import MainLayout from "../components/layout/MainLayout";
import ReduxProvider from "../provider/auth";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ReduxProvider>
      <QueryProvider>
        <MainLayout>
          <Head>
            <meta name="description" content="NextJS practice" />
            <meta
              name="viewport"
              content="initial-scale=1.0, width=device-width"
            />
          </Head>
          <Component {...pageProps} />
        </MainLayout>
      </QueryProvider>
    </ReduxProvider>
  );
}
