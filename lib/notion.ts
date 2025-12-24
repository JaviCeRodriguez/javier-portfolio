export interface BlogPost {
  id: string
  title: string
  slug: string
  date: string
  excerpt: string
  coverImage?: string
}

const NOTION_API_VERSION = "2022-06-28"

async function notionFetch(endpoint: string, options: RequestInit = {}) {
  const apiKey = process.env.NOTION_API_KEY

  if (!apiKey) {
    throw new Error("NOTION_API_KEY is not defined in environment variables")
  }

  const url = `https://api.notion.com/v1/${endpoint}`

  const response = await fetch(url, {
    ...options,
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Notion-Version": NOTION_API_VERSION,
      "Content-Type": "application/json",
      ...options.headers,
    },
  })

  if (!response.ok) {
    const error = await response.text()
    throw new Error(`Notion API error: ${response.status} ${response.statusText} - ${error}`)
  }

  return response.json()
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  const databaseId = process.env.NOTION_DATABASE_ID

  console.log("[v0] Getting blog posts...")
  console.log("[v0] NOTION_API_KEY exists:", !!process.env.NOTION_API_KEY)
  console.log("[v0] NOTION_DATABASE_ID:", databaseId)

  if (!databaseId) {
    throw new Error("NOTION_DATABASE_ID is not defined")
  }

  try {
    const data = await notionFetch(`databases/${databaseId}/query`, {
      method: "POST",
      body: JSON.stringify({
        filter: {
          property: "Status",
          status: {
            equals: "Published",
          },
        },
      }),
    })

    console.log("[v0] Query successful, results:", data.results?.length || 0)

    return data.results.map((page: any) => {
      console.log("[v0] Page properties:", Object.keys(page.properties || {}))

      const title =
        page.properties.Title?.title?.[0]?.plain_text || page.properties.Name?.title?.[0]?.plain_text || "Untitled"
      const slug = page.properties.Slug?.rich_text?.[0]?.plain_text || page.id
      const date =
        page.properties.Date?.date?.start ||
        page.properties.Created?.date?.start ||
        page.created_time ||
        new Date().toISOString()
      const excerpt =
        page.properties.Excerpt?.rich_text?.[0]?.plain_text ||
        page.properties.Description?.rich_text?.[0]?.plain_text ||
        ""
      const coverImage = page.cover?.external?.url || page.cover?.file?.url

      return {
        id: page.id,
        title,
        slug,
        date,
        excerpt,
        coverImage,
      }
    })
  } catch (error: any) {
    console.error("[v0] Error querying database:", error.message)
    throw error
  }
}

export async function getBlogPost(pageId: string) {
  const page = await notionFetch(`pages/${pageId}`)
  const blocks = await getBlocks(pageId)

  return {
    page,
    blocks,
  }
}

async function getBlocks(blockId: string): Promise<any[]> {
  const blocks: any[] = []
  let cursor: string | undefined = undefined

  while (true) {
    const params = new URLSearchParams()
    if (cursor) {
      params.append("start_cursor", cursor)
    }

    const data: any = await notionFetch(`blocks/${blockId}/children${params.toString() ? `?${params.toString()}` : ""}`)

    blocks.push(...data.results)

    if (!data.has_more) {
      break
    }

    cursor = data.next_cursor
  }

  // Fetch children for nested blocks
  for (const block of blocks) {
    if (block.has_children) {
      block.children = await getBlocks(block.id)
    }
  }

  return blocks
}

export async function getPostBySlug(slug: string) {
  const posts = await getBlogPosts()
  const post = posts.find((p) => p.slug === slug)

  if (!post) {
    return null
  }

  const content = await getBlogPost(post.id)

  return {
    ...post,
    ...content,
  }
}
