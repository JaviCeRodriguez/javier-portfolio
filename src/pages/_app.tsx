import { NextUIProvider } from "@nextui-org/react";
import { AppProps } from "next/app";
import Layout from "@/components/Layout";
import "@/styles/index.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </NextUIProvider>
  );
}

export default MyApp;
