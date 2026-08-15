# Components

## Route composition

| Route | Composition | Evidence |
|---|---|---|
| `/` | Navigation, Hero, Skills, Experience, Contact | `app/page.tsx` |
| `/blog` | Navigation and a server-fetched published-post list | `app/blog/page.tsx` |
| `/blog/[slug]` | Navigation, table of contents and Zenblog article renderer | `app/blog/[slug]/page.tsx` |
| `/script-spam-calls` | Permanent redirect to an external URL | `app/script-spam-calls/page.tsx` |
| unmatched path | Navigation plus a Spanish 404 state | `app/not-found.tsx` |

## Portfolio sections

`Hero`, `Skills`, `Experience` and `Contact` are presentational server components with
their content defined in the component modules. `Hero` uses `next/image` for the local
`/mate-mac.jpg` asset. (sources: `components/hero.tsx`, `components/skills.tsx`,
`components/experience.tsx`, `components/contact.tsx`)

## Client boundary

`Navigation` is a client component because it uses pathname state and local menu state.
It controls the mobile menu with `aria-expanded`, and closes it when a link is selected.
(source: `components/navigation.tsx`)

## Article rendering

`ZenblogArticle` sanitizes the HTML returned by Zenblog. `MermaidContent` is the isolated
client boundary that enhances Mermaid code blocks and keeps source code when rendering
fails. (sources: `components/zenblog-article.tsx`, `components/mermaid-content.tsx`)

Zenblog images are rendered with native `img` because their remote host is CMS-controlled.
(source: `app/blog/[slug]/page.tsx`)
