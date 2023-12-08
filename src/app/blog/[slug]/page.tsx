import { getPageContent, getPageBySlug, notionClient } from "@/utils/notion";
import { NotionRenderer } from "@notion-render/client";
import { notFound } from "next/navigation";
import hljsPlugin from "@notion-render/hljs-plugin";
import bookmarkPlugin from "@notion-render/bookmark-plugin";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getPageBySlug(params.slug);

  if (!post) {
    return {};
  }

  return {
    title: (post.properties.Title as any).title[0].plain_text,
    description: (post.properties.Description as any).rich_text[0].plain_text,
    openGraph: {
      images: [(post.cover as any).external.url],
    },
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const post = await getPageBySlug(params.slug);

  if (!post) notFound();

  const content = await getPageContent(post.id);

  const notionRenderer = new NotionRenderer({
    client: notionClient,
  });

  notionRenderer.use(hljsPlugin({}));
  notionRenderer.use(bookmarkPlugin(undefined));
  const html = await notionRenderer.render(...content);

  return (
    <main className="flex flex-col mb-20">
      <div
        className="flex justify-center items-center mb-20 h-80"
        style={{
          background: `url(${(post?.cover as any).external.url})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-full text-center py-4 bg-[#ffffff98] dark:bg-[#00000098]">
          <h1 className="text-4xl font-bold mb-2 lg:text-5xl">
            {(post.properties.Title as any).title[0].plain_text}
          </h1>
          <p id="desription">
            {(post.properties.Description as any).rich_text[0].plain_text}
          </p>
        </div>
      </div>
      <div
        className="flex flex-col"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </main>
  );
}
