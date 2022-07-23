import fs from "fs";
import matter from "gray-matter";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import {
  chakra,
  Code,
  Heading,
  Text,
  Image,
  Box,
  Checkbox,
  ListItem,
  ListIcon,
  Link,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import ReactMarkdown from "react-markdown";
import { Frontmatter } from "@/utils/types";
import Head from "next/head";

type GetCoreProps = {
  children?: React.ReactNode;
  "data-sourcepos"?: any;
};

function getCoreProps(props: GetCoreProps): any {
  return props["data-sourcepos"]
    ? { "data-sourcepos": props["data-sourcepos"] }
    : {};
}

export async function getStaticPaths() {
  const files = fs.readdirSync("posts");
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(".md", ""),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }: any) {
  const fileName = fs.readFileSync(`posts/${slug}.md`, "utf-8");
  const { data: frontmatter, content } = matter(fileName);
  return {
    props: {
      slug,
      frontmatter,
      content,
    },
  };
}

const PostPage: React.FC<{
  slug: string;
  frontmatter: Frontmatter;
  content: string;
}> = ({ slug, frontmatter, content }) => {
  const newTheme = {
    p: (props: any) => {
      const { children } = props;
      return (
        <Text mb={2} fontSize="16px">
          {children}
        </Text>
      );
    },
    code: (props: any) => {
      const { inline, children, className } = props;

      if (inline) {
        return <Code rounded="base" color="gold" children={children} />;
      }

      return (
        <Code
          className={className}
          // whiteSpace="break-spaces"
          display="block"
          w="90%"
          p={2}
          rounded="lg"
          overflowX="scroll"
          children={children}
        />
      );
    },
    pre: (props: any) => {
      const { children } = props;
      return (
        <chakra.pre
          {...getCoreProps(props)}
          display="flex"
          justifyContent="center"
          my={8}
        >
          {children}
        </chakra.pre>
      );
    },
    img: (props: any) => {
      return (
        <Box display="flex" justifyContent="center" w="full">
          <Image
            {...props}
            border="1px solid"
            borderColor="gold"
            m={8}
            rounded="lg"
          />
        </Box>
      );
    },
    li: (props: any) => {
      const { children, checked } = props;
      let checkbox = null;
      if (checked !== null && checked !== undefined) {
        checkbox = (
          <Checkbox isChecked={checked} isReadOnly>
            {children}
          </Checkbox>
        );
      }
      return (
        <ListItem {...getCoreProps(props)} listStyleType="none" m>
          <ListIcon as={ArrowForwardIcon} color="green.500" />
          {checkbox || children}
        </ListItem>
      );
    },
  };

  return (
    <>
      <Head>
        <title>{frontmatter.title}</title>
        <meta name="title" content={frontmatter.metaTitle} />
        <meta name="description" content={frontmatter.metaDesc} />
        <meta name="keywords" content={frontmatter.tags.join(", ")} />
        <meta property="og:title" content={frontmatter.metaTitle} />
        <meta property="og:description" content={frontmatter.metaDesc} />
        <meta property="og:image" content={frontmatter.socialImage} />
      </Head>
      <Box
        w="full"
        display="flex"
        flexDirection="column"
        alignItems="center"
        mb="6"
      >
        <Link
          href={`https://dev.to/javicerodriguez/${slug}`}
          isExternal
          p="4px 20px"
          my="4"
          rounded="md"
          bgColor="blue.500"
          fontWeight="semibold"
        >
          ¡Ver la publicación original!
        </Link>
        <Text textAlign="center" fontSize="sm">
          (Hasta implementar mejoras, lo recomendable es visualizarlo desde el
          origen de la publicación)
        </Text>
      </Box>
      <Heading as="h1">{frontmatter.title}</Heading>
      <ReactMarkdown
        // @ts-ignore
        components={ChakraUIRenderer(newTheme)}
        children={content}
        skipHtml
      />
    </>
  );
};

export default PostPage;
