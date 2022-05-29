import React from "react";
import { Box, Heading, Text, Image, Divider } from "@chakra-ui/react";

const About: React.FC = () => {
  return (
    <Box>
      <Box
        marginTop={{ base: "1", md: "5" }}
        display="flex"
        flexDirection={{ base: "column", md: "row" }}
        justifyContent="space-evenly"
        alignItems="center"
      >
        <Box
          display="flex"
          flex="1"
          marginRight="3"
          marginBottom={{ base: "4", md: "0" }}
          position="relative"
          alignItems="center"
          justifyContent="center"
          width={{ base: "100%", sm: "auto" }}
          maxWidth="450px"
        >
          <Box
            width={{ base: "80%", sm: "85%" }}
            zIndex="2"
            marginTop={{ base: "10", md: "14" }}
            marginLeft={{ base: "10", md: "10" }}
          >
            <Image
              borderRadius="lg"
              src="/perfil.jpg"
              alt="Foto de Javier Rodriguez"
              objectFit="contain"
              draggable="false"
              boxShadow="lg"
            />
          </Box>
          <Box zIndex="1" width="85%" position="absolute" height="90%">
            <Box
              bgGradient="radial(orange.500 1px, transparent 1px)"
              backgroundSize="20px 20px"
              opacity="0.8"
              height="100%"
            />
          </Box>
        </Box>
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: "3", sm: "0" }}
          maxWidth="600px"
        >
          <Heading as="h1" color="orange.500">
            JAVIER RODRIGUEZ
          </Heading>
          <Heading as="h2" fontSize="3xl" color="gray.600">
            Fullstack Dev
          </Heading>
          <Heading as="h3" fontSize="2xl" color="gray.500">
            React + Python
          </Heading>
          <Divider marginY="4" color="gray.500" border="2px" />
          <Text>
            De Buenos Aires, Argentina. En el rubro del desarrollo e ingeniería,
            ganando constantemente experiencia y conocimientos en proyectos
            interesantes, ya sean propios o grupales. Participo de iniciativas
            en comunidades IT y comparto buenos momentos con amigos (con
            matecitos de por medio, claro 🧉)
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
