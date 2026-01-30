import Image from 'next/image';
import Link from 'next/link';
import { products } from '@/data/catalog';

interface ProductPageProps {
  params: { slug: string };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find((item) => item.slug === params.slug);

  if (!product) {
    return (
      <div className="container py-16">
        <h1 className="text-2xl font-semibold text-ink">Product not found</h1>
        <Link href="/" className="mt-4 inline-block text-sm font-semibold text-accent">
          Return to homepage
        </Link>
      </div>
    );
  }

  return (
    <div className="container py-12">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-slate-100">
            <Image src={product.images[0]} alt={product.name} fill className="object-cover" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            {product.images.slice(1).map((image) => (
              <div key={image} className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-slate-100">
                <Image src={image} alt={product.name} fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{product.categorySlug}</p>
          <h1 className="mt-2 text-3xl font-semibold text-ink">{product.name}</h1>
          <p className="mt-3 text-sm text-slate-500">{product.description}</p>

          <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5">
            <div className="flex items-center justify-between">
              <p className="text-lg font-semibold text-ink">{product.price ? `$${product.price}` : 'Custom quote'}</p>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-500">Display-only</span>
            </div>
            <div className="mt-4">
              <p className="text-xs uppercase tracking-wide text-slate-400">Available sizes</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <span key={size} className="rounded-full border border-slate-200 px-3 py-1 text-sm">
                    {size}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-4">
              <p className="text-xs uppercase tracking-wide text-slate-400">Colors</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {product.colors.map((color) => (
                  <span key={color} className="rounded-full border border-slate-200 px-3 py-1 text-sm">
                    {color}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-6 grid gap-3">
              <button className="w-full rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white">
                Request wholesale info
              </button>
              <button className="w-full rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-ink">
                Save to wishlist
              </button>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 text-sm text-slate-500">
            <h2 className="text-base font-semibold text-ink">Product details</h2>
            <ul className="mt-3 space-y-2">
              <li>• Ready for import with structured sizes and colors.</li>
              <li>• Gallery images are lazy-loaded and SEO-friendly.</li>
              <li>• Use draft/publish to control visibility.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
