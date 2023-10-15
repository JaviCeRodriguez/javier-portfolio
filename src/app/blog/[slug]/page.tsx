import { getPageContent, getPageBySlug, notionClient } from "@/utils/notion";
import { NotionRenderer } from "@notion-render/client";
import { notFound } from "next/navigation";

//Plugins
import hljsPlugin from "@notion-render/hljs-plugin";
import bookmarkPlugin from "@notion-render/bookmark-plugin";
// import { Post } from "@/components/post";

export default async function Page({ params }: { params: { slug: string } }) {
  const post = await getPageBySlug(params.slug);

  //Redirect to not found page!
  if (!post) notFound();

  const content = await getPageContent(post.id);

  const notionRenderer = new NotionRenderer({
    client: notionClient,
  });

  notionRenderer.use(hljsPlugin({}));
  notionRenderer.use(bookmarkPlugin(undefined));
  const html = await notionRenderer.render(...content);

  return (
    // <Post
    //   title={(post.properties.Title as any).title[0].plain_text}
    //   bannerImage={(post.properties.BannerImage as any).url}
    //   bannerImageWidth={(post.properties.BannerImageWidth as any).number}
    //   bannerImageHeight={(post.properties.BannerImageHeight as any).number}
    //   content={html}
    // />
    <div className="flex flex-col" dangerouslySetInnerHTML={{ __html: html }} />
  );
}
