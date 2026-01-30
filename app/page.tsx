import Link from 'next/link';
import { categories, products } from '@/data/catalog';
import { CategoryCard } from '@/components/category-card';
import { ProductCard } from '@/components/product-card';

export default function HomePage() {
  const featuredCategories = categories.filter((category) => category.featured);
  const newArrivals = [...products].sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1)).slice(0, 3);

  return (
    <div>
      <section className="bg-gradient-to-br from-white via-slate-50 to-slate-100 py-16">
        <div className="container grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Merch Catalog CMS</p>
            <h1 className="mt-4 text-4xl font-semibold text-ink md:text-5xl">
              Design-ready storefronts for your next merch drop.
            </h1>
            <p className="mt-4 text-base text-slate-500">
              Manage categories, products, and image galleries with a lightweight CMS. Deliver a fast, modern storefront
              with SEO baked in.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="#new-arrivals"
                className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white"
              >
                Explore new arrivals
              </Link>
              <Link
                href="/admin"
                className="rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-ink"
              >
                Open admin dashboard
              </Link>
            </div>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-ink">Performance highlights</h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-500">
              <li>• Lighthouse-focused layout with responsive grids.</li>
              <li>• Built-in filters, search, and sorting patterns.</li>
              <li>• S3-ready upload pathing with local fallback.</li>
            </ul>
            <div className="mt-6 grid gap-3 rounded-2xl bg-slate-50 p-4 text-xs text-slate-500">
              <div className="flex items-center justify-between">
                <span>Catalog items</span>
                <span className="font-semibold text-ink">32</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Avg. load time</span>
                <span className="font-semibold text-ink">0.9s</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Ready-to-ship categories</span>
                <span className="font-semibold text-ink">8</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="categories" className="py-16">
        <div className="container">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-ink">Featured categories</h2>
              <p className="mt-2 text-sm text-slate-500">Curated highlights for the current drop.</p>
            </div>
            <Link href="/category/hoodies" className="text-sm font-semibold text-accent">
              View all
            </Link>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredCategories.map((category) => (
              <CategoryCard key={category.slug} {...category} />
            ))}
          </div>
        </div>
      </section>

      <section id="new-arrivals" className="bg-white py-16">
        <div className="container">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-ink">New arrivals</h2>
              <p className="mt-2 text-sm text-slate-500">The latest additions to the catalog.</p>
            </div>
            <Link href="/category/hoodies" className="text-sm font-semibold text-accent">
              Browse catalog
            </Link>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {newArrivals.map((product) => (
              <ProductCard
                key={product.slug}
                name={product.name}
                slug={product.slug}
                price={product.price}
                primaryImage={product.images[0]}
                categorySlug={product.categorySlug}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
