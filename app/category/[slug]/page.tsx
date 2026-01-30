import Link from 'next/link';
import { categories, products } from '@/data/catalog';
import { ProductCard } from '@/components/product-card';

interface CategoryPageProps {
  params: { slug: string };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = categories.find((item) => item.slug === params.slug);
  const categoryProducts = products.filter((product) => product.categorySlug === params.slug);

  if (!category) {
    return (
      <div className="container py-16">
        <h1 className="text-2xl font-semibold text-ink">Category not found</h1>
        <Link href="/" className="mt-4 inline-block text-sm font-semibold text-accent">
          Return to homepage
        </Link>
      </div>
    );
  }

  return (
    <div className="container py-12">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Category</p>
          <h1 className="mt-2 text-3xl font-semibold text-ink">{category.name}</h1>
          <p className="mt-2 max-w-xl text-sm text-slate-500">{category.description}</p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-xs text-slate-500">
          {categoryProducts.length} products
        </div>
      </div>

      <div className="mt-10 grid gap-4 rounded-3xl border border-slate-200 bg-white p-5 md:grid-cols-[2fr_3fr]">
        <div className="space-y-4 text-sm text-slate-500">
          <h2 className="text-base font-semibold text-ink">Filters</h2>
          <div>
            <p className="text-xs uppercase tracking-wide text-slate-400">Price range</p>
            <div className="mt-2 flex gap-2">
              <input className="w-full rounded-lg border border-slate-200 px-3 py-2" placeholder="$20" />
              <input className="w-full rounded-lg border border-slate-200 px-3 py-2" placeholder="$120" />
            </div>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wide text-slate-400">Size</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                <span key={size} className="rounded-full border border-slate-200 px-3 py-1">
                  {size}
                </span>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wide text-slate-400">Color</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {['Ivory', 'Sand', 'Charcoal'].map((color) => (
                <span key={color} className="rounded-full border border-slate-200 px-3 py-1">
                  {color}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              <input
                className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
                placeholder="Search products..."
              />
              <select className="rounded-lg border border-slate-200 px-3 py-2 text-sm">
                <option>Newest</option>
                <option>Price: low to high</option>
                <option>Price: high to low</option>
              </select>
            </div>
            <Link href="/admin/products" className="text-sm font-semibold text-accent">
              Manage products
            </Link>
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {categoryProducts.map((product) => (
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
      </div>
    </div>
  );
}
