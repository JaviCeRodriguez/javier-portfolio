// eslint-disable-next-line @next/next/no-document-import-in-page
import Document, { Html, Head, Main, NextScript } from "next/document";
import { ColorModeScript } from "@chakra-ui/react";

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: <>{initialProps.styles}</>,
    };
  }

  render() {
    return (
      <Html lang="es">
        <Head>
          <meta charSet="utf-8" />
          <meta name="author" content="Javier Rodriguez" />
          <meta name="description" content="Portfolio"></meta>
          <meta
            property="og:image"
            content="https://developer.mozilla.org/static/img/opengraph-logo.png"
          />
          <meta property="og:description" content="Portfolio" />
          <meta property="og:title" content="Javier Rodriguez"></meta>
          <link
            rel="icon"
            href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🧉</text></svg>"
          />
        </Head>
        <body>
          <ColorModeScript />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
