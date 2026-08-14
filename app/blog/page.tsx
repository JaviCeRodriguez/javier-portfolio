import { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { getBlogPostSummaries, type BlogPostSummary } from "@/lib/notion";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Blog",
  description: "Notas sobre frontend, equipos y el oficio detrás de los productos digitales.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog | Javier Rodriguez",
    description: "Notas sobre frontend, equipos y el oficio detrás de los productos digitales.",
    url: "/blog",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Blog | Javier Rodriguez",
    description: "Notas sobre frontend, equipos y el oficio detrás de los productos digitales.",
  },
};

export default function BlogPage() {
  return (
    <>
      <Navigation />
      <main id="main-content" className="site-container pb-24 pt-16 md:pb-36 md:pt-24">
        <header className="grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <p className="eyebrow mb-5 text-accent">Notas desde el taller</p>
            <h1 className="text-[clamp(4rem,10vw,9rem)] leading-[0.85]">Blog</h1>
          </div>
          <p className="mb-0 max-w-[34ch] text-lg text-muted-foreground md:col-span-3 md:col-start-10">
            Ideas sobre frontend, equipos y el oficio detrás de los productos digitales.
          </p>
        </header>

        <Suspense fallback={<BlogPostListLoading />}>
          <BlogPostList />
        </Suspense>
      </main>
    </>
  );
}

async function BlogPostList() {
  let posts: BlogPostSummary[] = [];
  let error: string | null = null;

  try {
    posts = await getBlogPostSummaries();
  } catch (caughtError) {
    error = caughtError instanceof Error ? caughtError.message : "No se pudo cargar el blog.";
  }

  return (
    <section aria-label="Artículos publicados" className="mt-16 border-t border-border md:ml-[16.66%] md:mt-24">
          {error && (
            <div role="status" className="grid gap-4 py-10 sm:grid-cols-[1fr_2fr]">
              <h2 className="text-xl">El cuaderno está desconectado.</h2>
              <div>
                <p className="mb-2 text-muted-foreground">La conexión con Notion no está configurada en este entorno.</p>
                <p className="mb-0 font-mono text-xs text-muted-foreground">{error}</p>
              </div>
            </div>
          )}

          {!error && posts.length === 0 && (
            <div className="grid gap-4 py-12 sm:grid-cols-[1fr_2fr]">
              <h2 className="text-xl">Todavía no hay publicaciones.</h2>
              <p className="mb-0 max-w-[46ch] text-muted-foreground">
                La primera nota todavía está tomando forma. Mientras tanto, podés recorrer el resto del portfolio.
              </p>
            </div>
          )}

          <ol>
            {posts.map((post, index) => (
              <li key={post.id}>
                <Link href={`/blog/${post.slug}`} className="group grid gap-5 border-t border-border py-8 no-underline first:border-t-0 sm:grid-cols-[4rem_1fr_auto] sm:items-start md:py-10">
                  <span className="font-mono text-xs text-muted-foreground">{String(index + 1).padStart(2, "0")}</span>
                  <article>
                    <h2 className="max-w-[22ch] text-3xl transition-colors group-hover:text-accent md:text-5xl">{post.title}</h2>
                    {post.excerpt && <p className="mt-4 max-w-[58ch] text-muted-foreground">{post.excerpt}</p>}
                  </article>
                  <time dateTime={post.date} className="font-mono text-xs text-muted-foreground">
                    {new Date(post.date).toLocaleDateString("es-AR", { year: "numeric", month: "short", day: "2-digit" })}
                  </time>
                </Link>
              </li>
            ))}
          </ol>
    </section>
  );
}

function BlogPostListLoading() {
  return (
    <section aria-label="Cargando artículos" className="mt-16 animate-pulse border-t border-border md:ml-[16.66%] md:mt-24">
      {[0, 1, 2].map((item) => (
        <div key={item} className="grid gap-5 border-t border-border py-8 first:border-t-0 sm:grid-cols-[4rem_1fr_auto] md:py-10">
          <div className="h-4 w-6 rounded-sm bg-muted" />
          <div>
            <div className="h-10 w-3/4 rounded-md bg-muted" />
            <div className="mt-4 h-4 w-1/2 rounded-sm bg-muted" />
          </div>
        </div>
      ))}
    </section>
  );
}
