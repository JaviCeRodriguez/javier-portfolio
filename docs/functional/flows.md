# Functional flows

## Browse the portfolio

1. A visitor opens `/`.
2. The root layout provides shared metadata, fonts, skip link and analytics.
3. The page renders navigation, profile, skills, experience and contact sections.
4. Navigation links lead to the matching home anchor or `/blog`.

(sources: `app/layout.tsx`, `app/page.tsx`, `components/navigation.tsx`)

## Read the blog index

1. A visitor opens `/blog`.
2. The server queries Zenblog for published posts.
3. The page renders a numbered list, an intentional empty state, or a composed error
   state when the integration cannot be used.

(sources: `app/blog/page.tsx`, `lib/zenblog.ts`)

## Read an article

1. A visitor opens `/blog/[slug]`.
2. The route fetches the Zenblog post by slug.
3. For a match, the route renders the header, optional cover, table of contents and
   sanitized HTML; Mermaid code blocks are enhanced in the browser.
4. For no match, the route invokes the not-found behavior.

(sources: `app/blog/[slug]/page.tsx`, `lib/zenblog.ts`, `components/zenblog-article.tsx`)
