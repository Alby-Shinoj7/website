import Link from 'next/link';
import Image from 'next/image';

interface ProductCardProps {
  name: string;
  slug: string;
  price?: number;
  primaryImage: string;
  categorySlug: string;
}

export function ProductCard({ name, slug, price, primaryImage, categorySlug }: ProductCardProps) {
  return (
    <Link
      href={`/product/${slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="relative h-52 rounded-2xl bg-slate-100">
        <Image
          src={primaryImage}
          alt={name}
          fill
          className="object-cover transition duration-300 group-hover:scale-105"
        />
      </div>
      <div className="mt-4 flex flex-1 flex-col">
        <p className="text-xs uppercase tracking-wide text-slate-400">{categorySlug}</p>
        <h3 className="mt-2 text-lg font-semibold text-ink">{name}</h3>
        <div className="mt-auto flex items-center justify-between text-sm text-slate-500">
          <span>{price ? `$${price}` : 'Contact for price'}</span>
          <span className="text-accent">View</span>
        </div>
      </div>
    </Link>
  );
}
