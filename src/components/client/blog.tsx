"use client";

import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useMeArticles } from "@/hooks/use-articles";
import { BlogArticle } from "@/components/custom/cards/blog-article";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

const queryClient = new QueryClient();

const BlogPageContent = () => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } =
    useMeArticles();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage]);

  if (status === "pending") return <div>Loading...</div>;
  if (status === "error") return <div>Error fetching articles</div>;

  return (
    <div className="space-y-8">
      {data?.pages.map((page, i) => (
        <div key={i} className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {page.articles.map((article) => (
            <BlogArticle key={article.id} article={article} />
          ))}
        </div>
      ))}
      <div ref={ref} className="flex justify-center">
        {isFetchingNextPage ? (
          <Button disabled>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            Loading more articles
          </Button>
        ) : hasNextPage ? (
          <Button onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
            Load More
          </Button>
        ) : null}
      </div>
    </div>
  );
};

export default function BlogPage() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="self-start w-full">
        <h1 className="mb-6 text-3xl font-bold">
          My Dev.to Articles (Spanish 🇦🇷)
        </h1>
        <BlogPageContent />
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
