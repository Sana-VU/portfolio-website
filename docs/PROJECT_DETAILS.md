# Portfolio Website — Project Details

This document captures the full technical details for the portfolio project.

## Overview
- Framework/tooling: Vite 5, React 18, TypeScript 5
- Styling: Tailwind CSS 3 (+ @tailwindcss/typography)
- Content: MDX for blog posts (ESM frontmatter export)
- Routing: React Router v6 with lazy-loaded Post page
- Animations/UI: Framer Motion, Headless UI, lucide-react
- SEO: react-helmet-async (per-route <Helmet>)
- Brand system: Government-appropriate palette, Inter (body), Poppins (headings)
- Hosting targets: Replit, GitHub Pages (subpath)
- 100% static build: dist/ via `npm run build`

## Repository
- GitHub: https://github.com/Sana-VU/portfolio-website
- Branch: main

## Run and Build
- Local dev (Windows-friendly): `npm run dev:local` (127.0.0.1:5173; may auto-shift to a free port)
- Production build: `npm run build`
- Local preview: `npm run preview:local` (127.0.0.1:4173)

If your shell truncates commands (e.g., "pm" instead of "npm"), copy-paste commands or run Vite directly:
- `node node_modules/vite/bin/vite.js --host 127.0.0.1 --port 517x`

## Vite base path
- Configured for GitHub Pages subpath: `base: '/portfolio-website/'` in `vite.config.ts`.
- Router basename uses `import.meta.env.BASE_URL`.
- Navbar/Footer/Home build links relative to `BASE_URL`.

## Structure
- `public/` static assets: icons, favicon, og, robots, sitemap, rss
- `src/` application code:
  - `layout/Root.tsx` — App shell, global Helmet tags
  - `components/` — Navbar, Footer, cards, UI primitives (`components/ui/Button`, `components/ui/Badge`)
  - `pages/` — Home, Projects, Experience, Blog, Post (MDX), About, Contact, CV, Health, NotFound
  - `content/` — `site.ts` (profile/experience/services), `projects.ts`, `posts/*.mdx`
  - `index.css` — Tailwind base/components/utilities, brand styles, focus rings

## Pages
- `/` — Home hero, CTAs to Projects/Contact/CV
- `/projects` — Grid of project cards with tech badges and links
- `/experience` — Timeline with accent markers
- `/blog` — MDX post listing via `import.meta.glob` (ESM frontmatter)
- `/blog/:slug` — Lazy-loaded MDX post renderer
- `/about` — Bio, skills, services
- `/contact` — Formspree/Web3Forms/mailto switch; inline status
- `/cv` — A4 print-styled resume
- `/health` — Simple status checks (runtime smoke)
- 404 — Fallback route

## Content Model
- Author/site: `src/content/site.ts`
- Projects: `src/content/projects.ts` (uses AI image URLs; can switch to local images)
- MDX posts: `src/content/posts/*.mdx`
  - Frontmatter via ESM export: `export const frontmatter = { title, date, summary, tags }`

## Brand System
- Colors (Tailwind theme `extend.colors`):
  - `primary` (navy), `accent` (gold), `secondary` (muted), `light`, `dark`, `success`, `base`, `alt`
- Fonts: `Inter` (body), `Poppins` (headings)
- Components updated for high-contrast focus rings and WCAG AA contrast.

## Accessibility & Performance
- Focus-visible rings global utility
- Reduced motion media query respected
- Images: `loading="lazy"` + `decoding="async"`
- Code-split MDX post page for faster initial load

## SEO
- Global `<Helmet>` in `layout/Root.tsx` with Open Graph + Twitter tags
- Per-page `<Helmet>` titles/descriptions
- `public/robots.txt`, `public/sitemap.xml`, `public/rss.xml` updated to GitHub Pages URL

## Deployment
- GitHub Pages
  - Base path set to `/portfolio-website/`
  - Footer links and router basename use `import.meta.env.BASE_URL`
  - Sitemap/robots/rss contain full `https://sana-vu.github.io/portfolio-website/` URLs
- Replit
  - `npm run dev` can be used with `$PORT` binding (if switched in scripts)

## Known Notes
- In some shells, commands may truncate the first character (e.g., `npm` -> `pm`, `node` -> `ode`). Copy/paste commands to avoid this.
- If port 5173 is busy, Vite auto-selects the next free port.

## Customization
- Tailwind: `tailwind.config.js` — colors, fonts, container sizes
- Global CSS: `src/index.css` — base styles, focus rings
- Content: `src/content/*`
- Images: switch AI URLs in `projects.ts` to local assets under `public/images/projects/` if desired

## Troubleshooting
- No styles at runtime
  - Ensure Tailwind content globs include `src/**/*.{ts,tsx,mdx}`
- Blog frontmatter not parsing
  - Ensure MDX posts export `frontmatter` via ESM
- Links broken on GitHub Pages
  - Confirm `vite.config.ts` base is `/portfolio-website/`
  - Ensure Navbar/Footer/Home links use `import.meta.env.BASE_URL`

---

Generated on 2025-09-27.
