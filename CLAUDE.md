# CLAUDE.md

Instructions for Claude Code when working in this repository.

## About the project

Personal portfolio for Javier Rodriguez. It presents his frontend-engineering profile,
skills, professional experience and contact channels, and includes a blog whose published
posts are sourced from Zenblog. Read `PRD.md`, `AGENTS.md`, and the documentation under
`docs/` before making changes.

## Stack

- **Language:** strict TypeScript.
- **Framework:** Next.js 16 with React 19 and the App Router.
- **Styling:** Tailwind CSS v4, with the visual system centralized in `app/globals.css`.
- **Content:** Zenblog API for the blog; Vercel Analytics.
- **Testing:** no automated test runner is configured.
- **Package manager:** pnpm.

Do not add dependencies without explicit justification. Prefer Server Components and
keep client boundaries minimal.

## Folder structure

```text
/app                 # App Router pages, root layout, metadata and global styles
/app/blog             # Blog index, article route and loading state
/components           # Portfolio sections, navigation and shared UI
/components/ui        # Reusable shadcn-style UI primitives
/lib                  # Zenblog client and shared utilities
/public               # Static images and icons
/blogs                # Local blog-related resources
/research             # Product and design research material
/docs
  /architecture       # Architecture and diagrams
  /functional         # User-facing functional documentation
  /prds               # Feature PRDs
  /bugs               # Bug reports and analysis
  /security           # Security remediation records
```

Never delete docs under `/docs`.

## Code conventions

- Use camelCase for values and functions, and PascalCase for React components.
- Use the `@/*` import alias; avoid deep relative imports.
- Keep TypeScript strict; do not use `any` without a documented reason.
- Use semantic HTML, visible keyboard focus, descriptive alternative text and reduced-motion fallbacks.
- Keep portfolio copy in Argentine Spanish (`es-AR`) unless the task says otherwise.
- Do not invent employers, projects, outcomes or metrics.

## Useful commands

```bash
# Development
pnpm dev

# Build
pnpm build

# Lint
pnpm lint
```

## Environment variables

The blog uses `ZENBLOG_BLOG_ID` on the server. Never commit `.env.local`, expose secrets in client code, or log Zenblog payloads.

## Security (MANDATORY)

When vulnerabilities are detected (SAST, SCA, or any other source), **always** invoke the `snyk-remediation` skill before applying any fix. The skill manages the complete process: scan → triage → isolated branch → fix → re-scan → PR.

**Do not apply security fixes directly without going through the skill.**

## Work isolation first (UNIVERSAL RULE)

**All work — features, bugs, security fixes, any change — starts by choosing an isolation approach with the user before touching a single file.**

Always ask:

> Do you want me to work on a new branch in the current checkout, or to create a separate git worktree?

Use exactly the option the user picks.
Stop after asking; do not create a branch or worktree until the user chooses one.

If the current checkout has uncommitted changes, stop and ask before switching branch or creating a worktree.

### Option A — Branch in the current checkout

```bash
# From the repo root
git switch develop
git pull --ff-only
git switch -c {type}/{slug}
```

All work happens on that branch. Never create files in `develop` or `main` with the intention of moving them later.

### Option B — Separate worktree

Create worktrees only under `.worktrees/`. Do not ask the user for a path.

```bash
# From the repo root
git fetch origin develop
mkdir -p .worktrees
git worktree add .worktrees/{slug} -b {type}/{slug} origin/develop
```

All work happens inside that worktree. Never create files in `develop` or `main` with the intention of moving them later. This applies to docs, code, configuration — everything.

## Committing and PRs (UNIVERSAL RULE)

**No skill or flow commits, pushes, or opens a PR on its own.** `incu-way-prepare-pr` is the only skill that runs `git add`, `git commit`, `git push`, or `gh pr create`, and it only runs when the user explicitly asks for it (by name, or "commit this", "push this", "prepare the PR"). Every other flow just writes files and, at natural checkpoints, tells the user it's ready and suggests invoking `incu-way-prepare-pr` — it never runs those git commands itself.

## Development workflow (MANDATORY for any new feature)

For any new functionality or significant change, **always** invoke the `incu-way-development` skill before writing a single line of code. The skill defines a process with explicit approval gates:

1. **Phase 0** — Orientation: read PRD.md and docs/
2. **Isolation** — Ask whether to use a branch in the current checkout or a separate worktree **before writing anything**
3. **Phase 1** — Write the PRD in `docs/prds/{slug}/PRD.md` (in the chosen work location) → **wait for approval**
4. **Phase 2** — Implementation plan in `docs/prds/{slug}/PLAN.md` (in the chosen work location) → **wait for approval**
5. **Phase 3** — Implementation (in the chosen work location)
6. **Phase 4** — Validation + testing guide → **wait for feedback**
7. **Phase 5** — PRs: `feat/{slug}` → `develop` → `main`, opened only when the user invokes `incu-way-prepare-pr`

**Never write code before the user approves the PRD (Gate 1).**

## Bug-fixing workflow (MANDATORY for any bug)

For any reported or discovered bug, **always** invoke the `incu-way-bugs` skill before writing a single line of fix code. The skill defines a process with one explicit approval gate:

1. **Isolation** — Ask whether to use a branch in the current checkout or a separate worktree **before writing anything**
2. **Phase 1** — Document in `docs/bugs/{id}-{slug}/BUG.md`
3. **Phase 2** — Analysis in `docs/bugs/{id}-{slug}/ANALYSIS.md`
4. **Phase 3** — Reproduction test that fails before the fix
5. **Phase 4** — Plan in `docs/bugs/{id}-{slug}/FIX_PLAN.md` → **wait for approval**
6. **Phase 5** — Implement (only what the plan says)
7. **Phase 6** — Validation + security scans
8. **Phase 7** — PR `fix/{slug}` → `develop`, opened only when the user invokes `incu-way-prepare-pr`

**Never write fix code before the user approves the FIX_PLAN.**

## Mandatory tests

Run `pnpm lint` and `pnpm build` after implementation work. For visual changes,
inspect the homepage, blog index and mobile navigation at desktop and mobile widths.

## Sensitive data

Never log personal contact details, Zenblog content payloads or credentials in production.

## Don't

- Do not change public routes, navigation labels or homepage anchors unless requested.
- Do not introduce pill buttons, unrelated colors or a second visual system.
- Do not use remote Zenblog images with `next/image` without configuring their host.
- Do not commit, push or open a PR unless explicitly asked.

## When in doubt

If a decision is not covered by `PRD.md`, `AGENTS.md` or `docs/`, ask instead of improvising.
