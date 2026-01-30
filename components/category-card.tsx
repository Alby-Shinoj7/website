import Link from 'next/link';
import Image from 'next/image';

interface CategoryCardProps {
  name: string;
  slug: string;
  description: string;
  coverImage: string;
}

export function CategoryCard({ name, slug, description, coverImage }: CategoryCardProps) {
  return (
    <Link
      href={`/category/${slug}`}
      className="group rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="relative h-44 overflow-hidden rounded-2xl bg-slate-100">
        <Image
          src={coverImage}
          alt={name}
          fill
          className="object-cover transition duration-300 group-hover:scale-105"
        />
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-ink">{name}</h3>
        <p className="mt-1 text-sm text-slate-500">{description}</p>
      </div>
    </Link>
  );
}
