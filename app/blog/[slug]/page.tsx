import { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navigation } from "@/components/navigation";
import { NotionRenderer } from "@/components/notion-renderer";
import { TableOfContents } from "@/components/table-of-contents";
import { getBlogPost, getBlogPostSummaries, getBlogPostSummaryBySlug } from "@/lib/notion";

export const revalidate = 60;

function getCoverImageUrl(slug: string) {
  return `/blog/${encodeURIComponent(slug)}/cover-image`;
}

export async function generateStaticParams() {
  try {
    const posts = await getBlogPostSummaries();
    return posts.map((post) => ({ slug: post.slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  try {
    const post = await getBlogPostSummaryBySlug(slug);
    if (!post) return {};
    const coverImageUrl = post.hasCover ? getCoverImageUrl(post.slug) : undefined;

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
        images: coverImageUrl ? [{ url: coverImageUrl, alt: `Portada de ${post.title}` }] : undefined,
      },
      twitter: {
        card: coverImageUrl ? "summary_large_image" : "summary",
        title: post.title,
        description: post.excerpt || undefined,
        images: coverImageUrl ? [coverImageUrl] : undefined,
      },
    };
  } catch {
    return {};
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getBlogPostSummaryBySlug(slug);

  if (!post) notFound();

  return (
    <>
      <Navigation />
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

          {post.hasCover && (
            <figure className="mt-12 overflow-hidden rounded-xl bg-muted">
              {/* The stable internal route refreshes Notion's short-lived signed URL on the server. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={getCoverImageUrl(post.slug)} alt={`Portada de ${post.title}`} className="max-h-[42rem] w-full object-cover" />
            </figure>
          )}

          <Suspense fallback={<ArticleContentLoading />}>
            <ArticleContent pageId={post.id} />
          </Suspense>
        </article>
      </main>
    </>
  );
}

async function ArticleContent({ pageId }: { pageId: string }) {
  const content = await getBlogPost(pageId);

  return (
    <>
      <TableOfContents blocks={content.blocks} />
      <div className="article-content mt-14 max-w-3xl border-t border-border pt-10 md:mt-20 md:pt-14">
        <NotionRenderer blocks={content.blocks} />
      </div>
    </>
  );
}

function ArticleContentLoading() {
  return (
    <div aria-label="Cargando el contenido del artículo" className="article-content mt-14 max-w-3xl animate-pulse border-t border-border pt-10 md:mt-20 md:pt-14">
      <div className="h-6 w-full rounded-sm bg-muted" />
      <div className="mt-4 h-6 w-11/12 rounded-sm bg-muted" />
      <div className="mt-12 h-10 w-2/3 rounded-md bg-muted" />
      <div className="mt-5 h-6 w-full rounded-sm bg-muted" />
      <div className="mt-4 h-6 w-4/5 rounded-sm bg-muted" />
    </div>
  );
}
