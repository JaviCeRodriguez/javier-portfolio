# Repository guide for agents

## Project overview

This is Javier Rodriguez's personal portfolio, built with Next.js 16 and the App Router. The homepage presents his profile, skills, work history, and contact details. The `/blog` routes read published content from Notion.

## Stack

- Next.js 16 with React 19 and TypeScript
- Tailwind CSS v4 through `@tailwindcss/postcss`
- App Router and Server Components by default
- Notion REST API for blog content
- Vercel Analytics
- pnpm is the canonical package manager (`pnpm-lock.yaml` is committed)

## Important paths

- `app/layout.tsx`: root metadata, fonts, global shell
- `app/page.tsx`: homepage composition
- `app/globals.css`: design tokens and global utilities
- `app/blog/`: blog index, article routes, and loading state
- `components/`: portfolio sections and shared navigation
- `components/notion-renderer.tsx`: supported Notion block rendering
- `lib/notion.ts`: Notion fetching and content normalization
- `public/`: static imagery and icons

## Working conventions

- Preserve existing public routes, navigation labels, and homepage anchor IDs unless the task explicitly changes information architecture.
- Prefer Server Components. Add `"use client"` only for hooks, browser APIs, or event handlers, and keep the client boundary as small as possible.
- Keep the visual system centralized in `app/globals.css`. Use the existing warm neutral palette, one orange accent, Manrope, and IBM Plex Mono.
- Maintain the current radius rule: medium rounded interactive controls and soft media containers. Do not introduce pill buttons or unrelated color accents.
- Use semantic HTML, visible keyboard focus, descriptive alt text, and reduced-motion fallbacks.
- Use `next/image` for local images. Notion-hosted images may use `img` because their signed hosts and URLs are short-lived; keep the lint exception local and documented.
- Do not add a dependency until confirming the capability is not already available in `package.json`.
- Do not log credentials, environment values, or Notion payloads.
- Keep user-facing portfolio copy in Argentine Spanish (`es-AR`) unless a task explicitly requests another locale.
- Avoid placeholder copy and invented employers, projects, outcomes, or metrics.

## Blog and environment

The blog requires:

- `NOTION_API_KEY`
- `NOTION_DATABASE_ID`

The Notion database is expected to expose `Title` or `Name`, `Slug`, `Date` or `Created`, `Excerpt` or `Description`, `Status`, and an optional cover. The blog index must retain a composed error or empty state when Notion is unavailable.

## Commands

```bash
pnpm install
pnpm dev
pnpm lint
pnpm build
```

Run `pnpm lint` and `pnpm build` after implementation work. For visual changes, also inspect the homepage, blog index, and mobile navigation at desktop and mobile widths.

## Definition of done

- Requested behavior is implemented without unrelated route or content changes.
- Desktop and mobile layouts are usable with no horizontal overflow.
- Keyboard focus and menu interaction work.
- Loading, empty, and error states remain intentional.
- Lint and production build pass, or any environment-only limitation is clearly reported.
