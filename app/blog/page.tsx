import Link from "next/link"
import { getBlogPosts } from "@/lib/notion"
import { Card } from "@/components/ui/card"
import { Calendar, AlertCircle } from "lucide-react"
import { Navigation } from "@/components/navigation"

export const revalidate = 60 // Revalidate every 60 seconds

export default async function BlogPage() {
  let posts = []
  let error = null

  try {
    posts = await getBlogPosts()
  } catch (e: any) {
    error = e.message
    console.error("[v0] Error fetching blog posts:", e)
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-24 max-w-4xl">
        <div className="mb-12 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Blog</h1>
          <p className="text-lg text-muted-foreground">Thoughts, tutorials, and insights about frontend development</p>
        </div>

        {error && (
          <Card className="p-6 border-destructive bg-destructive/10 mb-8">
            <div className="flex gap-3">
              <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-destructive mb-2">Notion Configuration Required</h3>
                <p className="text-sm text-muted-foreground mb-3">{error}</p>
                <div className="text-sm text-muted-foreground space-y-1">
                  <p>To display blog posts, please configure your Notion integration:</p>
                  <ol className="list-decimal list-inside space-y-1 ml-2 mt-2">
                    <li>
                      Add your <code className="bg-muted px-1 py-0.5 rounded text-xs">NOTION_API_KEY</code> environment
                      variable
                    </li>
                    <li>
                      Add your <code className="bg-muted px-1 py-0.5 rounded text-xs">NOTION_DATABASE_ID</code>{" "}
                      environment variable
                    </li>
                  </ol>
                  <p className="mt-3">You can find these values in the Vars section of the sidebar.</p>
                </div>
              </div>
            </div>
          </Card>
        )}

        <div className="space-y-8">
          {posts.map((post, index) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="block animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: "backwards" }}
            >
              <Card className="overflow-hidden transition-all duration-200 hover:shadow-lg hover:scale-[1.02]">
                {post.coverImage && (
                  <div className="w-full overflow-hidden">
                    <img
                      src={post.coverImage || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full max-h-[230px] object-cover object-center"
                    />
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Calendar className="w-4 h-4" />
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                  </div>
                  <h2 className="text-2xl font-bold text-foreground mb-2 hover:text-accent transition-colors">
                    {post.title}
                  </h2>
                  {post.excerpt && <p className="text-muted-foreground line-clamp-2">{post.excerpt}</p>}
                </div>
              </Card>
            </Link>
          ))}

          {!error && posts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No blog posts yet. Check back soon!</p>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
