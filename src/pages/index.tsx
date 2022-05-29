import React from "react";
import Head from "next/head";
import Skills from "@/components/Skills";
import About from "@/components/About";
import { Box } from "@chakra-ui/react";

const Home: React.FC = () => {
  return (
    <Box as="main" pb="100px" maxW="1230px">
      <Head>
        <title>Javier Rodriguez | Inicio</title>
      </Head>
      <About />
      <Skills />
    </Box>
  );
};

export default Home;
