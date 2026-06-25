# Lulekani Church of Christ (2026)

Modern Next.js 16 + TypeScript + Tailwind v4 church platform with:

- App Router pages (Home, About, Services, Events, Donate, Contact, Blog, Prayer, Member, Admin)
- Dark/light theme toggle
- Event filtering and registration
- Service streaming, donation and contact flows
- Prayer request and newsletter APIs
- Basic CMS integration hook (Contentful)
- SEO metadata, sitemap, robots.txt, and web manifest
- Security middleware headers + lightweight API rate limiting
- GitHub Actions CI workflow

## Setup

```bash
npm install
# Create .env.local (see "Environment" section below)
npm run dev
```

## Environment

Set the values in `.env.local`:

- `NEXT_PUBLIC_SITE_URL`
- `CONTENTFUL_SPACE_ID`
- `CONTENTFUL_ACCESS_TOKEN`

## Scripts

- `npm run dev`
- `npm run lint`
- `npm run build`
- `npm run start`
