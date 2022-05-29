import React from "react";
import { Image, Box, HStack, Link, Text, VStack } from "@chakra-ui/react";

const Footer: React.FC = () => {
  return (
    <VStack as="footer" pb="4" alignItems="center">
      <HStack w="200px" justifyContent="space-between" mb="4">
        <Link
          href="https://www.linkedin.com/in/rodriguezjavierc/"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            boxSize="30px"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
          />
        </Link>
        <Link
          href="mailto:javicerodriguez@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            boxSize="30px"
            src="https://cdn-icons-png.flaticon.com/512/5968/5968534.png"
          />
        </Link>
        <Link
          href="https://github.com/JaviCeRodriguez/"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            boxSize="30px"
            bg="white"
            rounded="full"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
          />
        </Link>
        <Link
          href="https://twitter.com/javicerodriguez"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            boxSize="30px"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg"
          />
        </Link>
      </HStack>
      <Text size="16px">
        Portfolio hecho con muchos matecitos 🧉 &copy;&nbsp;
        {new Date().getFullYear()}
      </Text>
    </VStack>
  );
};

export default Footer;
