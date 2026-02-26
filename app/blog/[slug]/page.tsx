import { notFound } from "next/navigation";
import { getPostBySlug, getBlogPosts } from "@/lib/notion";
import { NotionRenderer } from "@/components/notion-renderer";
import { Navigation } from "@/components/navigation";
import { Calendar, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { TableOfContents } from "@/components/table-of-contents";

export const revalidate = 60;

export async function generateStaticParams() {
  const posts = await getBlogPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Navigation />
      <TableOfContents blocks={post.blocks} />
      <main className="md:ml-36 pt-12 md:pt-12 px-5 sm:px-8 max-w-2xl pb-20 mt-11 md:mt-0">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6 no-underline hover:underline"
        >
          <ArrowLeft className="w-3 h-3" />
          Back to blog
        </Link>

        <article>
          <header className="mb-6">
            {post.coverImage && (
              <div className="w-full overflow-hidden mb-6">
                <img
                  src={post.coverImage || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full max-h-64 object-cover"
                />
              </div>
            )}
            <p className="text-xs font-mono text-muted-foreground mb-2">
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </p>
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-3 text-balance">
              {post.title}
            </h1>
            {post.excerpt && (
              <p className="text-base text-muted-foreground italic text-pretty">
                {post.excerpt}
              </p>
            )}
          </header>
          <hr className="mb-6" />
          <div className="prose-document">
            <NotionRenderer blocks={post.blocks} />
          </div>
        </article>
      </main>
    </>
  );
}
