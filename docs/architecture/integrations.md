# Integrations

| System | Purpose | Configuration | Code entry point |
|---|---|---|---|
| Notion REST API | Published blog post metadata and blocks | `NOTION_API_KEY`, `NOTION_DATABASE_ID`, API version `2022-06-28` | `lib/notion.ts` |
| Vercel Analytics | Client-side site analytics | Package integration; no repo-level environment config found | `app/layout.tsx` |

## Notion request flow

`notionFetch` sends an authenticated request to `https://api.notion.com/v1/`, with the
Notion version and JSON content headers. `getBlogPosts` queries the configured database;
`getPostBySlug` selects a normalized post then fetches its page and nested blocks.
(source: `lib/notion.ts`)

## Failure handling

Missing credentials and non-success responses throw errors. The index page catches them
and presents an unavailable-connection state. The article route lets the error propagate
unless no post is found, in which case it invokes `notFound()`.
(sources: `lib/notion.ts`, `app/blog/page.tsx`, `app/blog/[slug]/page.tsx`)
