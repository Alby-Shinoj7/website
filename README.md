# Merch Catalog CMS Framework

A fast, responsive storefront + admin CMS for managing merch catalogs (display-only, no payments).

## Assumptions
- Using Next.js App Router + TailwindCSS + Prisma + Postgres per request.
- Auth uses simple credentials via NextAuth for the MVP (can swap for OAuth or magic links).
- Image uploads target S3-compatible storage in production; local folder structure mirrors `/uploads/<category>/<product-slug>/`.

## A) Architecture + Folder Structure
```
app/
  admin/                 # CMS UI routes
  api/                   # API routes (products, categories, upload, auth)
  category/[slug]/       # Category storefront page
  product/[slug]/        # Product storefront page
components/              # UI components (cards, header/footer)
data/                    # Demo catalog data for mock UI
lib/                     # Prisma + auth helpers
prisma/                  # Prisma schema + seed script
public/
  data/                  # CSV import template
  uploads/               # Local dev image structure
```

## B) Database Schema (Prisma)
See `prisma/schema.prisma` for the complete schema covering:
- Category
- Product
- ProductImage
- User (role-based)

## C) API Routes / Server Actions List
- `GET /api/categories` → list categories
- `GET /api/products` → list products
- `POST /api/upload` → placeholder for upload integration
- `GET|POST /api/auth/[...nextauth]` → NextAuth entry

## D) Admin UI Pages List
- `/admin` → dashboard
- `/admin/products` → manage products
- `/admin/categories` → manage categories
- `/admin/import` → bulk import

## E) Storefront UI Pages List
- `/` → homepage with featured categories + new arrivals
- `/category/[slug]` → category listing with filters
- `/product/[slug]` → product detail page

## F) Step-by-step Build Plan (Milestones)
1. **Foundation**: Next.js + TailwindCSS + Prisma + ESLint setup.
2. **Schema & Seed**: Define Prisma models and seed data.
3. **Storefront**: Home, category, and product pages with responsive UI.
4. **Admin CMS**: Dashboard, manage products/categories, import UI.
5. **Uploads**: Connect S3/local storage and validate file uploads.
6. **Search/Filters**: Server-side filtering + sorting + pagination.
7. **SEO & Performance**: Metadata, sitemap, robots.txt, image optimization.
8. **Deployment**: Vercel + managed Postgres or Docker Compose.

## G) Repo Outline & Key Files
- `app/page.tsx`: homepage UI
- `app/category/[slug]/page.tsx`: category page
- `app/product/[slug]/page.tsx`: product page
- `app/admin/*`: admin pages
- `prisma/schema.prisma`: database schema
- `prisma/seed.ts`: seed script
- `.env.example`: environment variables

## H) Seed Data + CSV Template
- `prisma/seed.ts` seeds categories and products.
- `public/data/sample-import.csv` provides a CSV template for imports.

## I) Deployment Instructions
### Vercel + Postgres
1. Create a Postgres database (Neon/Supabase/Railway).
2. Set `DATABASE_URL`, `NEXTAUTH_SECRET`, and `NEXTAUTH_URL` in Vercel.
3. Run `prisma migrate deploy` in your CI build step.
4. Deploy with `next build`.

### Docker Compose (Self-host)
1. Add a `docker-compose.yml` with Next.js + Postgres.
2. Set `.env` values to point to the container DB.
3. Run `docker compose up --build`.

## Quick Start
```bash
npm install
cp .env.example .env
npm run prisma:generate
npm run prisma:migrate
npm run seed
npm run dev
```

## Notes
- This repo ships with mock catalog data in `data/catalog.ts` for UI wiring.
- Replace mock data with Prisma queries once the database is connected.
- Import feature should only accept data you own or have explicit permission to use.
