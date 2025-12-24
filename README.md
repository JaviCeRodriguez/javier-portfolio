# Frontend Engineer Portfolio

A modern, mobile-first portfolio website built with Next.js 16, featuring a blog powered by Notion CMS.

## Features

- 🎨 Clean and modern design with smooth transitions
- 📱 Mobile-first responsive layout
- 📝 Blog powered by Notion CMS
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
- **CMS:** Notion API
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
   - Add your Notion API key and Database ID

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Notion Database Setup

To use the blog feature, you need to set up a Notion database with the following properties:

- **Title** (Title): The blog post title
- **Slug** (Rich Text): URL-friendly slug for the post
- **Date** (Date): Publication date
- **Excerpt** (Rich Text): Short description of the post
- **Cover** (File): Optional cover image

### How to Get Your Notion Credentials:

1. Go to [Notion Integrations](https://www.notion.so/my-integrations)
2. Create a new integration and copy the API key
3. Share your database with the integration
4. Copy the database ID from the database URL

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
│   └── notion-renderer.tsx   # Notion block renderer
└── lib/
    └── notion.ts             # Notion API utilities
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

## Supported Notion Blocks

The blog renderer supports:

- Paragraphs
- Headings (H1, H2, H3)
- Lists (Bulleted & Numbered)
- Code blocks with syntax highlighting
- Quotes
- Images with captions
- Callouts
- Toggle blocks
- Dividers
- Rich text formatting (bold, italic, code, links)

## License

MIT
