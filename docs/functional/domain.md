# Functional domain

## Concepts

| Concept | Meaning in the application | Evidence |
|---|---|---|
| Portfolio | The public professional site, organized as home sections | `app/page.tsx`, `components/` |
| Navigation item | Link to a home anchor or the blog route | `components/navigation.tsx` |
| Blog post | A published Notion page normalized for the site | `lib/notion.ts` |
| Article block | A Notion content block rendered by `NotionRenderer` | `components/notion-renderer.tsx` |

## Rules

- Only Notion pages with `Status = Published` appear in the blog list.
- A post URL uses `Slug`; absent slug values fall back to the Notion page ID.
- A non-existent slug leads to the app's not-found experience.
- The portfolio language is Spanish as declared by the root HTML element.

(sources: `lib/notion.ts`, `app/blog/[slug]/page.tsx`, `app/layout.tsx`)
