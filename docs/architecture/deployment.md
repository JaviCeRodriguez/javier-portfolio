# Build and deployment

## Local commands

| Task | Command | Evidence |
|---|---|---|
| Development server | `pnpm dev` | `package.json` |
| Production build | `pnpm build` | `package.json` |
| Run production server | `pnpm start` | `package.json` |
| Lint | `pnpm lint` | `package.json` |

## Runtime topology

The codebase is a single Next.js runtime. The environment must provide `ZENBLOG_BLOG_ID`
for blog data to load. Page-level revalidation is set to 60 seconds for both blog routes.
(sources: `lib/zenblog.ts`, `app/blog/page.tsx`, `app/blog/[slug]/page.tsx`)

## Deployment evidence

`@vercel/analytics` is installed and rendered in the root layout, which indicates a
Vercel integration. No `vercel.json`, Dockerfile, CI workflow, infrastructure-as-code
or documented hosting configuration was found in the repository.
(sources: `package.json`, `app/layout.tsx`)

## Open questions / to verify

- Confirm the production Vercel project, domains, preview policy and environment-variable
  scopes in the deployment provider.
- Confirm whether lint and build run in continuous integration; no workflow file was found.
