import { Html, Head, Main, NextScript } from "next/document";
import Nav from "../components/nav/Nav";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-black text-white">
        <Nav />
        <Main />
        <NextScript />
        <div id="notification"></div>
      </body>
    </Html>
  );
}
