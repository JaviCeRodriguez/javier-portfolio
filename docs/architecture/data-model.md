# Data model

## Local persistence

This repository defines no database client, schema, migration directory, cache or queue.
Portfolio information is hard-coded inside its section components; blog content is
normalized from an external Notion database. (sources: `components/`, `lib/notion.ts`)

## Blog post projection

`getBlogPosts` maps each Notion page to the following application shape.
(source: `lib/notion.ts`)

| Field | Source and fallback |
|---|---|
| `id` | Notion page ID |
| `title` | `Title`, then `Name`, then `Untitled` |
| `slug` | `Slug`, then page ID |
| `date` | `Date`, then `Created`, then Notion creation time, then current time |
| `excerpt` | `Excerpt`, then `Description`, then empty text |
| `coverImage` | External or uploaded Notion cover URL, when present |

Only entries with `Status` equal to `Published` are queried. (source: `lib/notion.ts`)

## Block tree

For a selected post, the client fetches the page and recursively fetches its child
blocks where `has_children` is true. The resulting tree is used directly by the article
renderer. (sources: `lib/notion.ts`, `components/notion-renderer.tsx`)

## Open questions / to verify

- The exact Notion property types and validation rules live outside the repository.
- The recursive block fetch is sequential; its expected scale and rate-limit behavior
  are not documented in code.
