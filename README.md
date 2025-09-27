# MSI Portfolio (Vite + React + TS + Tailwind + MDX)

Production-ready personal site for Muhammad Shahid Imtiaz. 100% static and portable to any modern hosting provider.

## Tech

- Vite + React + TypeScript
- Tailwind CSS (+ Typography)
- Framer Motion, Headless UI, lucide-react
- MDX for blog
- react-helmet-async for SEO

## Quick start

1. Install deps
2. Start dev server (local vs Replit)

Local (Windows/macOS/Linux):

```
npm install
npm run dev:local
```

Replit (uses $PORT automatically):

```
npm run dev
```

## File tree (important parts)

```
src/
  components/           # UI building blocks
  content/              # Editable content
    posts/              # MDX posts
  layout/               # Root layout
  pages/                # Routes
public/                 # Static assets (icons, og, robots, sitemap, rss)
```

## Edit content

- Profile and site data: `src/content/site.ts`
- Projects: `src/content/projects.ts`
- Experience: `src/content/site.ts` (experience array)

### Add a blog post (MDX)

1. Create a file in `src/content/posts/` like `YYYY-MM-DD-my-post.mdx`
2. Add frontmatter:

```
---
title: "Post title"
date: "2025-09-27"
summary: "One-line summary"
tags: ["react","tips"]
---

Your MDX content here.
```

The list auto-imports and sorts by date. Create a link to `/blog/my-post`.

## Theming and Customization

- Brand system: Tailwind is configured with a government-appropriate palette (primary, accent, secondary, light, dark, base). Update these in `tailwind.config.js`.
- Fonts: `Poppins` (headings) and `Inter` (body) are loaded in `src/index.css`. Adjust `fontFamily` in `tailwind.config.js` if you change them.
- Logo/Favicon: replace `public/favicon.svg`
- OG Image: replace `public/og.png`
- Icons: replace files in `public/icons/`

## SEO

- Edit per-page titles/descriptions in each page via `<Helmet>`.
- Update `public/robots.txt`, `public/sitemap.xml`, and `public/rss.xml` with your domain.

## Contact form

- Using Formspree by default. Replace the endpoint in `src/pages/Contact.tsx`.
- Alternatively set `contactForm` to `mailto` in `src/content/site.ts`.

## Deploy

- Run `npm run build` to generate the production bundle in `dist`.
- Preview locally with `npm run preview`.
- Deploy the static output to your preferred host (Netlify, Vercel, Cloudflare Pages, GitHub Pages, etc.).

## Health checks

- Visit `/health` to see simple runtime checks.

---

### Customization Guide (1-page)

1. Colors

- Edit `tailwind.config.js` brand colors. Example: `brand: { DEFAULT: '#0ea5e9', dark: '#0284c7' }`.

2. Fonts

- Add `<link>` to Google Fonts in `index.html` and update `fontFamily.sans` in `tailwind.config.js`.

3. Logo & Favicon

- Replace `public/favicon.svg`. Keep a square viewBox and a unique gradient.

4. Open Graph Image

- Replace `public/og.png` (1200x630 recommended). Update per-page `<Helmet>` if needed.

5. Images

- Put project images under `public/images/projects/`. Reference as `/images/projects/xxx.jpg`.

6. Analytics (optional)

- If using Umami, paste the script snippet in `index.html` or `Root` based on your cloud instance.
