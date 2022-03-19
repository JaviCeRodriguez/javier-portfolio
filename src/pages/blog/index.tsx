import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Image from "next/image";
import PostCard from "@/components/Cards";
import { Post } from "@/utils/types";
import { Button, Container, Row, Text } from "@nextui-org/react";

const Blog: React.FC<{ data: Post[]; page: number }> = ({ data, page }) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Javier Rodriguez | Blog</title>
      </Head>
      <>
        <Container
          css={{
            padding: "0",
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {data &&
            data.map((post: Post) => <PostCard post={post} key={post.id} />)}
        </Container>
        {data.length === 0 && (
          <Container
            css={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Text
              h2
              css={{
                color: "$accents2",
                fontWeight: "700",
              }}
            >
              Llegaste al final de página sin posts!
            </Text>
            <Text
              h4
              css={{
                color: "$accents2",
                fontWeight: "700",
                marginBottom: "2rem",
              }}
            >
              Vuelve al inicio o vaya a la página anterior para ver más posts.
            </Text>
            <Image src="/mate.png" width="400px" height="400px" />
          </Container>
        )}
        <Row justify="space-between">
          <Button
            auto
            icon="👈"
            color="success"
            onClick={() => router.push(`/blog?page=${page - 1}`)}
            disabled={page === 1}
          >
            Pág. {page - 1}
          </Button>
          <Button
            auto
            icon="👉"
            color="success"
            onClick={() => router.push(`/blog?page=${page + 1}`)}
            disabled={data.length === 0 || data.length < 6}
          >
            Pág. {page + 1}
          </Button>
        </Row>
      </>
    </>
  );
};

export async function getServerSideProps({ query: { page = 1 } }) {
  const headers = new Headers();
  headers.append("api-key", `${process.env.NEXT_PUBLIC_DEV_TO_API_KEY}`);
  const res = await fetch(
    `https://dev.to/api/articles/me?per_page=6&page=${page}`,
    { headers }
  );
  const json = await res.json();

  return {
    props: {
      data: json,
      page: Number(page),
    },
  };
}

export default Blog;
