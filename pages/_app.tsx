import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import QueryProvider from "../provider/query";
import { NotificationContextProvider } from "../provider/context";
import MainLayout from "../components/layout/MainLayout";
import AuthProvider from "../provider/auth";

export default function App({ Component, pageProps }: AppProps) {
  return (
    //프로바이더 합치기, context랑 -> redux로 변경해서
    <AuthProvider>
      <NotificationContextProvider>
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
      </NotificationContextProvider>
    </AuthProvider>
  );
}
