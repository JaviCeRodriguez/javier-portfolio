# Components

## Route composition

| Route | Composition | Evidence |
|---|---|---|
| `/` | Navigation, Hero, Skills, Experience, Contact | `app/page.tsx` |
| `/blog` | Navigation and a server-fetched published-post list | `app/blog/page.tsx` |
| `/blog/[slug]` | Navigation, table of contents and Notion block renderer | `app/blog/[slug]/page.tsx` |
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

`NotionRenderer` switches on Notion block types and handles paragraphs, headings,
lists, code, quotes, dividers, images, callouts and toggles. Rich text supports common
annotations and outbound links. Unsupported block types return `null`.
(source: `components/notion-renderer.tsx`)

Notion image URLs are rendered with native `img`, because signed Notion hosts and URLs
are short-lived. (source: `app/blog/[slug]/page.tsx`)
