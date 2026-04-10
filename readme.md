# Engineering Fire

A technical blog exploring software engineering, system design, and building robust, scalable systems.

## Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Content**: MDX for blog posts
- **Deployment**: Vercel (or Netlify)
- **Analytics**: Plausible/Umami
- **Comments**: Giscus (GitHub Discussions)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
engineer-on-fire/
├── app/                    # Next.js app router
│   ├── (blog)/            # Blog routes
│   ├── (pages)/           # Static pages
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # React components
├── content/              # MDX blog posts
├── lib/                  # Utilities
├── public/               # Static assets
└── styles/               # Global styles
```

## Writing Posts

Create `.mdx` files in `content/posts/` with frontmatter:

```mdx
---
title: "My First Post"
date: "2024-01-01"
description: "A brief description"
tags: ["engineering", "software"]
---
```

## License

MIT