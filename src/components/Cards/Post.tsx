import Image from "next/image";
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
  return (
    <Link
      my={6}
      rounded="md"
      href={post.canonical_url}
      isExternal
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
          <Box h="150px" bg={"gray.100"} mt={-6} mx={-6} mb={2} pos="relative">
            <Image src={post.cover_image} layout="fill" objectFit="cover" />
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
              <Avatar boxSize="8" src={post.user.profile_image} />
              <Stack direction={"column"} spacing={0} fontSize={"sm"}>
                <Text fontWeight={600}>{post.user.name}</Text>
                <Text>
                  Fecha:&nbsp;
                  {post.published_at.split("T")[0]}&nbsp;·&nbsp;
                  {post.reading_time_minutes}&nbsp;
                  {post.reading_time_minutes > 1 ? "mins" : "min"}
                </Text>
              </Stack>
            </Stack>
          </Box>
          {post.tag_list &&
            post.tag_list.map((tag) => (
              <Tag p="1" bg="#ff91009d" m="0.5" size="sm">
                #&nbsp;{tag}
              </Tag>
            ))}
          <Stack mt="1">
            <Heading
              color={useColorModeValue("gray.800", "gray.100")}
              fontSize="xl"
              fontFamily="body"
            >
              {post.title}
            </Heading>
            <Text color={useColorModeValue("gray.700", "gray.200")}>
              {post.description.replace(/\s\s+/g, ". ")}
            </Text>
          </Stack>
        </Box>
      </Center>
    </Link>
  );
};

export default PostCard;
