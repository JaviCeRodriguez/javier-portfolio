# Functional domain

## Concepts

| Concept | Meaning in the application | Evidence |
|---|---|---|
| Portfolio | The public professional site, organized as home sections | `app/page.tsx`, `components/` |
| Navigation item | Link to a home anchor or the blog route | `components/navigation.tsx` |
| Blog post | A published Zenblog post normalized for the site | `lib/zenblog.ts` |
| Article content | Sanitized Zenblog HTML enhanced with Mermaid diagrams | `components/zenblog-article.tsx`, `components/mermaid-content.tsx` |

## Rules

- Zenblog publishes the post list returned to the blog index.
- A post URL uses the Zenblog `slug`.
- A non-existent slug leads to the app's not-found experience.
- The portfolio language is Spanish as declared by the root HTML element.

(sources: `lib/zenblog.ts`, `app/blog/[slug]/page.tsx`, `app/layout.tsx`)
