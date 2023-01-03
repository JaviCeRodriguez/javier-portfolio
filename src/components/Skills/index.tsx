import React from "react";
import {
  Box,
  Heading,
  HStack,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import { dark, light } from "@/theme/colors";
import skills from "./skills.json";

const CardSkills: React.FC = ({ children }) => {
  return (
    <Box
      userSelect="none"
      border="1px"
      borderRadius="md"
      borderColor={useColorModeValue(dark.background, light.background)}
      w={{ base: "max-content", md: "45%", lg: "80%", xl: "60%" }}
      p={4}
      transition="all 0.2s ease-in-out"
      transitionDuration="0.2s"
      _hover={{
        shadow: `0px 0px 10px ${useColorModeValue(
          dark.background,
          light.background
        )}`,
        transform: "scale(1.0223)",
      }}
    >
      {children}
    </Box>
  );
};

const WrapperSkills: React.FC = ({ children }) => {
  return (
    <HStack justifyContent="space-around" wrap="wrap" gap={2}>
      {children}
    </HStack>
  );
};

const Skills: React.FC = () => {
  return (
    <Box mt="14" mb="2">
      <Heading as="h2" fontSize="2xl" my={6}>
        Tengo conocimientos en:
      </Heading>

      <HStack
        justifyContent="space-around"
        alignContent="space-around"
        wrap="wrap"
        gap={4}
      >
        {skills.map((item) => {
          return (
            <CardSkills key={item.name}>
              <Heading as="h4" fontSize="lg" mb={4}>
                {item.name}
              </Heading>
              <WrapperSkills>
                {item.skills.map((skill) => {
                  return (
                    <Image
                      key={skill.name}
                      src={skill.image}
                      alt={skill.name}
                    />
                  );
                })}
              </WrapperSkills>
            </CardSkills>
          );
        })}
      </HStack>
    </Box>
  );
};

export default Skills;
