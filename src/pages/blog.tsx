import React, { useEffect, useState } from "react";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import Image from "next/image";
import { Box, Heading, HStack, Spinner, Text, VStack } from "@chakra-ui/react";
import {
  PaginationContainer,
  PaginationNext,
  PaginationPageGroup,
  Pagination,
  PaginationPrevious,
  usePagination,
  PaginationPage,
} from "@ajna/pagination";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import PostCard from "@/components/Cards/Post";
import { Post } from "@/utils/types";

const Blog: React.FC<{ data: Post[]; page: number; totalPages: number }> = ({
  data,
  page,
  totalPages,
}) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { currentPage, setCurrentPage, pagesCount, pages } = usePagination({
    pagesCount: totalPages,
    initialState: { currentPage: 1 },
  });

  const handlePageChange = (nextPage: number): void => {
    setCurrentPage(nextPage);
    router.push(`/blog?page=${nextPage}`);
    setLoading(true);
  };

  useEffect(() => {
    if (data && data.length >= 0) {
      setLoading(false);
    }
  }, [data]);

  return (
    <Box as="main" pb="100px" maxW="1230px">
      <Head>
        <title>Javier Rodriguez | Blog</title>
      </Head>
      {!loading ? (
        <Box>
          {page > 0 && page <= totalPages && data && (
            <>
              <Heading as="h2" fontSize="2xl" mt={6}>
                Mis publicaciones en DEV.to &gt;&gt; Página {currentPage}
              </Heading>
              <Box display="flex" flexWrap="wrap" justifyContent="space-around">
                {data.map((post: Post) => (
                  <PostCard post={post} key={post.id} />
                ))}
              </Box>
            </>
          )}

          {(page <= 0 || page > totalPages) && (
            <VStack w="full" my="10">
              <Heading as="h2">
                Llegaste a una página sin publicaciones!
              </Heading>
              <Text as="h4">
                Vuelve al inicio o vaya a alguna página para ver más posts
              </Text>
              <Image
                src="/mate.png"
                width="400px"
                height="400px"
                draggable="false"
              />
            </VStack>
          )}

          <HStack justify="center" style={{ margin: "20px 0 60px 0" }}>
            <Pagination
              pagesCount={pagesCount}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            >
              <PaginationContainer
                align="center"
                justify="space-between"
                w="full"
                p={4}
              >
                <PaginationPrevious>
                  <ArrowLeftIcon />
                </PaginationPrevious>
                <PaginationPageGroup>
                  {pages.map((page: number) => (
                    <PaginationPage
                      page={page}
                      p={4}
                      key={`pagination_page_${page}`}
                      _current={{ bg: "orange.500" }}
                    />
                  ))}
                </PaginationPageGroup>
                <PaginationNext>
                  <ArrowRightIcon />
                </PaginationNext>
              </PaginationContainer>
            </Pagination>
          </HStack>
        </Box>
      ) : (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minH="xs"
        >
          <Spinner size="xl" color="orange.500" />
        </Box>
      )}
    </Box>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  query: { page = 1 },
  req,
}) => {
  const protocol = req.headers["x-forwarded-proto"] || "http";
  const baseUrl = req ? `${protocol}://${req.headers.host}` : "";

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
};

export default Blog;
