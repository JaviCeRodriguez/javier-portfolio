import { useInfiniteQuery } from "@tanstack/react-query";

export interface Article {
  id: number;
  title: string;
  description: string;
  cover_image: string;
  published_at: string;
  edited_at: string | null;
  tag_list: string[];
  slug: string;
  path: string;
  url: string;
  canonical_url: string;
  comments_count: number;
  public_reactions_count: number;
  positive_reactions_count: number;
  page_views_count: number | null;
  reading_time_minutes: number;
  body_markdown: string;
  user: {
    name: string;
    username: string;
    twitter_username: string | null;
    github_username: string | null;
    website_url: string | null;
    profile_image: string;
    profile_image_90: string;
  };
  organization?: {
    name: string;
    username: string;
    slug: string;
    profile_image: string;
    profile_image_90: string;
  };
  flare_tag?: {
    name: string;
    bg_color_hex: string;
    text_color_hex: string;
  };
}

const fetchMeArticles = async ({
  pageParam = 1,
}): Promise<{ articles: Article[]; nextPage: number | null }> => {
  const perPage = 6;
  const response = await fetch(
    `https://dev.to/api/articles?username=javicerodriguez&page=${pageParam}&per_page=${perPage}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch articles");
  }

  const articles: Article[] = await response.json();
  const nextPage = articles.length === perPage ? pageParam + 1 : null;

  return { articles, nextPage };
};

export function useMeArticles() {
  return useInfiniteQuery({
    queryKey: ["articles"],
    initialPageParam: 1,
    queryFn: ({ pageParam }) => fetchMeArticles({ pageParam }),
    getNextPageParam: (lastPage) => lastPage.nextPage,
    getPreviousPageParam: (firstPage) => firstPage.nextPage,
  });
}
