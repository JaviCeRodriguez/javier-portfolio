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
    <main className="min-h-screen bg-background">
      <Navigation />

      <TableOfContents blocks={post.blocks} />

      <article className="container mx-auto px-4 py-24 max-w-3xl">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to blog
        </Link>

        <header className="mb-12 animate-fade-in-up">
          {post.coverImage && (
            <div className="aspect-video w-full overflow-hidden rounded-lg mb-8">
              <img
                src={post.coverImage || "/placeholder.svg"}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Calendar className="w-4 h-4" />
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            {post.title}
          </h1>

          {post.excerpt && (
            <p className="text-xl text-muted-foreground text-pretty">
              {post.excerpt}
            </p>
          )}
        </header>

        <div
          className="animate-fade-in-up"
          style={{ animationDelay: "0.2s", animationFillMode: "backwards" }}
        >
          <NotionRenderer blocks={post.blocks} />
        </div>
      </article>
    </main>
  );
}
