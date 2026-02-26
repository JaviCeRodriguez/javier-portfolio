import Link from "next/link"
import { getBlogPosts } from "@/lib/notion"
import { AlertCircle } from "lucide-react"
import { Navigation } from "@/components/navigation"

export const revalidate = 60

export default async function BlogPage() {
  let posts: any[] = []
  let error: any = null

  try {
    posts = await getBlogPosts()
  } catch (e: any) {
    error = e.message
    console.error("[v0] Error fetching blog posts:", e)
  }

  return (
    <>
      <Navigation />
      <main className="md:ml-36 pt-12 md:pt-12 px-5 sm:px-8 max-w-2xl pb-20 mt-11 md:mt-0">
        <h1 className="text-2xl font-bold mb-2">Blog</h1>
        <p className="text-sm text-muted-foreground mb-6">
          Thoughts, tutorials, and insights about frontend development.
        </p>
        <hr />

        {error && (
          <div className="mt-4 text-sm border border-border p-4">
            <div className="flex gap-2 mb-2">
              <AlertCircle className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" />
              <strong className="text-destructive">Notion configuration required</strong>
            </div>
            <p className="text-muted-foreground mb-2">{error}</p>
            <p className="text-muted-foreground">
              Add your{" "}
              <code className="font-mono text-xs bg-muted px-1">NOTION_API_KEY</code> and{" "}
              <code className="font-mono text-xs bg-muted px-1">NOTION_DATABASE_ID</code>{" "}
              in the Vars section of the sidebar.
            </p>
          </div>
        )}

        <div className="mt-4 space-y-6">
          {posts.map((post) => (
            <div key={post.id}>
              <Link
                href={`/blog/${post.slug}`}
                className="font-semibold text-base"
              >
                {post.title}
              </Link>
              <p className="text-xs font-mono text-muted-foreground mt-0.5">
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </p>
              {post.excerpt && (
                <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                  {post.excerpt}
                </p>
              )}
            </div>
          ))}

          {!error && posts.length === 0 && (
            <p className="text-sm text-muted-foreground">No posts yet. Check back soon.</p>
          )}
        </div>
      </main>
    </>
  )
}
