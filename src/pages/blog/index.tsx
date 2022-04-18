import React from "react";
import { GetServerSideProps } from 'next'
import Head from "next/head";
import { useRouter } from "next/router";
import Image from "next/image";
import PostCard from "@/components/Cards";
import { Post } from "@/utils/types";
import { Container, Pagination, Row, Text } from "@nextui-org/react";

const Blog: React.FC<{ data: Post[]; page: number; totalPages: number }> = ({ data, page, totalPages }) => {
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
        <Row justify="center" style={{ margin: '20px 0 60px 0' }}>
          <Pagination color="success" total={totalPages} initialPage={page} onChange={(page: number) => router.push(`/blog?page=${page}`)} />
        </Row>
      </>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query: { page = 1 }, req }) => {
  const protocol = req.headers['x-forwarded-proto'] || 'http'
  const baseUrl = req ? `${protocol}://${req.headers.host}` : ''

  const postsPages = await fetch(`${baseUrl}/api/postsPages`);
  const { totalPages } = await postsPages.json();

  const posts = await fetch(`${baseUrl}/api/posts?page=${page}`);
  const { data } = await posts.json();

  return {
    props: {
      data,
      page: Number(page),
      totalPages,
    },
  };
}

export default Blog;
