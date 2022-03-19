import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Post } from "@/utils/types";

const Blog: React.FC<{ data: Post[]; page: number }> = ({ data, page }) => {
  const router = useRouter();

  return (
    <main style={{ paddingBottom: "100px", maxWidth: "1230px" }}>
      <Head>
        <title>Javier Rodriguez | Blog</title>
      </Head>
      <div>
        {data &&
          data.map((post: Post) => (
            <div key={post.id}>
              <h3>{post.title}</h3>
              <img
                src={post.cover_image}
                alt={post.title}
                style={{ width: "350px", height: "auto" }}
              />
            </div>
          ))}
        <button
          onClick={() => router.push(`/blog?page=${page - 1}`)}
          disabled={page === 1}
        >
          Prev
        </button>
        <button
          onClick={() => router.push(`/blog?page=${page + 1}`)}
          disabled={data.length === 0 || data.length < 6}
        >
          Next
        </button>
      </div>
    </main>
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
