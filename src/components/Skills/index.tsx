import React from "react";
import {
  Box,
  Heading,
  HStack,
  Tooltip,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import { dark, light } from "@/theme/colors";
import skills from "./skills.json";

interface SkillProps {
  skill: string;
  src: string;
}

const Skill: React.FC<SkillProps> = ({ skill, src }) => {
  return (
    <Tooltip label={skill} placement="top" hasArrow>
      <Image src={src} boxSize="50px" my="2" />
    </Tooltip>
  );
};

const CardSkills: React.FC = ({ children }) => {
  return (
    <Box
      userSelect="none"
      border="1px"
      borderRadius="md"
      borderColor={useColorModeValue(dark.background, light.background)}
      w="max-content"
      p={4}
      sx={{ margin: "10px !important" }}
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
    <HStack mt="4" justifyContent="space-around" wrap="wrap">
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
      >
        {skills.map((item) => {
          return (
            <CardSkills key={item.name}>
              <Heading as="h4" fontSize="lg">
                {item.name}
              </Heading>
              <WrapperSkills>
                {item.skills.map((skill) => {
                  return (
                    <Skill
                      key={skill.name}
                      skill={skill.name}
                      src={skill.image}
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
