import BlogCardsGrid from "@/components/custom/cards/ blog";
import { getMediumArticles } from "@/utils/mediumArticles";

export default async function Page() {
  const articles = await getMediumArticles();

  return (
    <div className="container px-4 py-8 mx-auto">
      <h2 className="mb-8 text-4xl font-bold">Latest articles</h2>
      <BlogCardsGrid articles={articles.data} />
    </div>
  );
}
