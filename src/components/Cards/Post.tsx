import Image from "next/image";
import NextLink from "next/link";
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  Tag,
  Link,
} from "@chakra-ui/react";
import { dark, light } from "@/theme/colors";
import { Post } from "@/utils/types";

const PostCard: React.FC<{ post: Post }> = ({ post }) => {
  const { date, metaDesc, socialImage, tags, title } = post.frontmatter;
  return (
    <NextLink href={`/blog/${post.slug}`} passHref>
      <Link
        my={6}
        rounded="md"
        transition="all 0.3s ease-in-out"
        _hover={{
          textDecoration: "none",
          boxShadow: `0px 0px 10px ${useColorModeValue(
            dark.background,
            light.background
          )}`,
        }}
      >
        <Center>
          <Box
            maxW={"345px"}
            w={"full"}
            bg={useColorModeValue("gray.200", "gray.700")}
            rounded={"md"}
            p={6}
            overflow={"hidden"}
          >
            <Box
              h="150px"
              bg={"gray.100"}
              mt={-6}
              mx={-6}
              mb={2}
              pos="relative"
            >
              <Image src={socialImage} layout="fill" objectFit="cover" />
              <Stack
                direction={"row"}
                spacing={2}
                align="center"
                pos="absolute"
                bottom={2}
                left={2}
                bg={useColorModeValue("gray.200", "gray.700")}
                py={1}
                px={3}
                rounded="3xl"
              >
                <Text fontSize="xs">Fecha: {date}</Text>
              </Stack>
            </Box>
            {tags.length > 0 &&
              tags.map((tag) => (
                <Tag p="1" bg="#ff91009d" m="0.5" size="sm" key={tag}>
                  #&nbsp;{tag}
                </Tag>
              ))}
            <Stack mt="1">
              <Heading
                color={useColorModeValue("gray.800", "gray.100")}
                fontSize="xl"
                fontFamily="body"
              >
                {title}
              </Heading>
              <Text color={useColorModeValue("gray.700", "gray.200")}>
                {metaDesc.substring(0, 110)}...
              </Text>
            </Stack>
          </Box>
        </Center>
      </Link>
    </NextLink>
  );
};

export default PostCard;
