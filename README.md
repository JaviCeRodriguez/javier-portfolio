# Frontend Engineer Portfolio

A modern, mobile-first portfolio website built with Next.js 16, featuring a blog powered by Zenblog.

## Features

- 🎨 Clean and modern design with smooth transitions
- 📱 Mobile-first responsive layout
- 📝 Blog powered by Zenblog
- 💼 Work experience timeline
- 🛠️ Skills showcase
- 📧 Contact section with social links
- 🎯 Accessibility focused
- ⚡ Performance optimized

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4
- **UI Components:** shadcn/ui
- **Animations:** Framer Motion
- **CMS:** Zenblog
- **Code Highlighting:** React Syntax Highlighter
- **Deployment:** Vercel

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Copy `.env.example` to `.env.local`
   - Add `ZENBLOG_BLOG_ID=your-blog-id`

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Zenblog setup

Create a blog in [Zenblog](https://www.zenblog.com/) and copy its blog ID from the dashboard settings into `.env.local` as `ZENBLOG_BLOG_ID`.

### Mermaid diagrams

Posts can declare a renderer in the first line of a code block, for example `@render mermaid` or `@render table`. Mermaid diagrams become SVGs and Markdown tables become responsive HTML tables; invalid source remains readable code.

## Project Structure

```
├── app/
│   ├── blog/
│   │   ├── page.tsx          # Blog list page
│   │   └── [slug]/
│   │       └── page.tsx      # Blog post page
│   ├── layout.tsx            # Root layout
│   ├── page.tsx              # Home page
│   └── globals.css           # Global styles
├── components/
│   ├── hero.tsx              # Hero section
│   ├── skills.tsx            # Skills cloud
│   ├── experience.tsx        # Work experience timeline
│   ├── contact.tsx           # Contact section
│   ├── navigation.tsx        # Navigation bar
│   └── zenblog-article.tsx   # Sanitized Zenblog HTML renderer
└── lib/
    └── zenblog.ts            # Zenblog API utilities
```

## Customization

### Personal Information

Edit the following files to customize your portfolio:

- `components/hero.tsx` - Update your name and bio
- `components/skills.tsx` - Add/remove your skills
- `components/experience.tsx` - Update your work experience
- `components/contact.tsx` - Update your contact information and social links

### Styling

The design system is configured in `app/globals.css`. You can customize:

- Colors (CSS variables in `:root` and `.dark`)
- Fonts (Tailwind theme configuration)
- Border radius (`--radius`)

## Supported article content

Zenblog HTML is sanitized before rendering. Standard editorial HTML (headings, lists, links, quotes, images, tables and code) is supported, plus Mermaid code blocks.

## License

MIT
