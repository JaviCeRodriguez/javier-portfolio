# Data model

## Local persistence

This repository defines no database client, schema, migration directory, cache or queue.
Portfolio information is hard-coded inside its section components; blog content is
normalized from Zenblog. (sources: `components/`, `lib/zenblog.ts`)

## Blog post projection

`getBlogPosts` maps the Zenblog response to the application shape below.
(source: `lib/zenblog.ts`)

| Field | Zenblog source |
|---|---|
| `title` | `title` |
| `slug` | `slug` |
| `date` | `published_at` |
| `excerpt` | `excerpt`, when present |
| `coverImage` | `cover_image`, when present |
| `htmlContent` | `html_content` for an individual post |

## Article rendering

The article HTML is sanitized on the server. A small client component detects
`pre > code.language-mermaid` and transforms valid blocks to SVG; invalid syntax remains
as a readable code block. (sources: `components/zenblog-article.tsx`,
`components/mermaid-content.tsx`)
