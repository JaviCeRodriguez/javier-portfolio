import { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import Layout from "@/components/Layout";
import { Dict } from "@chakra-ui/utils";
import { dark, light } from "@/theme/colors";

const styles = {
  global: (props: Dict<any>) => ({
    body: {
      bg: mode(light.background, dark.background)(props),
    },
  }),
};

export const theme = extendTheme({
  styles,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
