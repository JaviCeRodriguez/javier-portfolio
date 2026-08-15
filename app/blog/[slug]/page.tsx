import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navigation } from "@/components/navigation";
import { ZenblogArticle } from "@/components/zenblog-article";
import { TableOfContents } from "@/components/table-of-contents";
import { getBlogPosts, getPostBySlug } from "@/lib/zenblog";

export const revalidate = 60;

export async function generateStaticParams() {
  try {
    const posts = await getBlogPosts();
    return posts.map((post) => ({ slug: post.slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  try {
    const post = await getPostBySlug(slug);
    if (!post) return {};

    return {
      title: { absolute: `${post.title} | Javier Rodriguez` },
      description: post.excerpt || undefined,
      alternates: {
        canonical: `/blog/${post.slug}`,
      },
      openGraph: {
        title: post.title,
        description: post.excerpt || undefined,
        type: "article",
        locale: "es_AR",
        publishedTime: post.date,
        images: post.coverImage ? [{ url: post.coverImage, alt: `Portada de ${post.title}` }] : undefined,
      },
      twitter: {
        card: post.coverImage ? "summary_large_image" : "summary",
        title: post.title,
        description: post.excerpt || undefined,
        images: post.coverImage ? [post.coverImage] : undefined,
      },
    };
  } catch {
    return {};
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  return (
    <>
      <Navigation />
      <TableOfContents />
      <main id="main-content" className="site-container pb-24 pt-12 md:pb-36 md:pt-20">
        <Link href="/blog" className="text-link text-sm">← Volver al blog</Link>

        <article className="mt-12 xl:pr-80">
          <header className="max-w-5xl">
            <time dateTime={post.date} className="font-mono text-xs text-accent">
              {new Date(post.date).toLocaleDateString("es-AR", { year: "numeric", month: "long", day: "numeric" })}
            </time>
            <h1 className="mt-5 max-w-[18ch] text-[clamp(2.9rem,4.8vw,4.9rem)] leading-[0.94]">{post.title}</h1>
            {post.excerpt && <p className="mt-7 max-w-[56ch] text-xl leading-relaxed text-muted-foreground">{post.excerpt}</p>}
          </header>

          {post.coverImage && (
            <figure className="mt-12 overflow-hidden rounded-xl bg-muted">
              {/* Zenblog hosts media remotely, so a native image avoids host configuration. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={post.coverImage} alt={`Portada de ${post.title}`} className="max-h-[42rem] w-full object-cover" />
            </figure>
          )}

          <div className="article-content mt-14 max-w-3xl border-t border-border pt-10 md:mt-20 md:pt-14">
            <ZenblogArticle html={post.htmlContent} />
          </div>
        </article>
      </main>
    </>
  );
}
