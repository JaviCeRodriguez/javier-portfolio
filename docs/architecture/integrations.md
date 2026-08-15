# Integrations

| System | Purpose | Configuration | Code entry point |
|---|---|---|---|
| Zenblog API | Published post metadata and HTML | `ZENBLOG_BLOG_ID` | `lib/zenblog.ts` |
| Mermaid | Browser-side enhancement of Mermaid code blocks | Package integration | `components/mermaid-content.tsx` |
| Vercel Analytics | Client-side site analytics | Package integration; no repo-level environment config found | `app/layout.tsx` |

## Zenblog request flow

`createZenblogClient` reads the server-side blog ID. `getBlogPosts` requests the post
list; `getPostBySlug` requests the selected article and normalizes its response.
(source: `lib/zenblog.ts`)

## Failure handling

Missing configuration and non-success responses throw errors. The index page catches them
and presents an unavailable-connection state. A non-existent article returns `null` and
invokes the app's not-found route. (sources: `lib/zenblog.ts`, `app/blog/page.tsx`,
`app/blog/[slug]/page.tsx`)
