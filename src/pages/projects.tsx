import React from "react";
import Head from "next/head";
import { Box, Heading, VStack } from "@chakra-ui/react";

const Projects: React.FC = () => {
  return (
    <Box as="main" pb="100px" maxW="1230px">
      <Head>
        <title>Javier Rodriguez | Proyectos</title>
      </Head>
      <VStack>
        <Heading as="h1" fontSize="3xl" mt={6}>
          Proyectos... hay proyectos?
        </Heading>
        <Heading as="h2" fontSize="xl" mt={6}>
          ( 🚧 WIP 👷‍♂️ )
        </Heading>
      </VStack>
    </Box>
  );
};

export default Projects;
