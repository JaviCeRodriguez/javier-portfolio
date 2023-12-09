import { Metadata } from "next";
import { getPages } from "@/utils/notion";
import BlogCardsGrid from "@/components/custom/cards/ blog";

export async function generateMetadata(): Promise<Metadata> {
  const pages = await getPages();

  return {
    title: "Blog",
    description: pages
      .map(
        (page) => (page.properties.Description as any).rich_text[0].plain_text
      )
      .join(" / "),
  };
}

export default async function Page() {
  const pages = await getPages();

  return <BlogCardsGrid pages={pages} />;
}
