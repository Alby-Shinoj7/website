import Link from 'next/link';

const cards = [
  {
    title: 'Products',
    description: 'Add, edit, and publish items with smart defaults.',
    href: '/admin/products'
  },
  {
    title: 'Categories',
    description: 'Organize your storefront with cover images and slugs.',
    href: '/admin/categories'
  },
  {
    title: 'Bulk Import',
    description: 'Upload CSV/JSON with validation and preview.',
    href: '/admin/import'
  }
];

export default function AdminDashboard() {
  return (
    <div className="container py-12">
      <div className="flex flex-col gap-2">
        <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Admin</p>
        <h1 className="text-3xl font-semibold text-ink">Catalog dashboard</h1>
        <p className="text-sm text-slate-500">
          Role-based access, streamlined workflows, and image-aware uploads.
        </p>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((card) => (
          <Link
            key={card.title}
            href={card.href}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <h2 className="text-lg font-semibold text-ink">{card.title}</h2>
            <p className="mt-2 text-sm text-slate-500">{card.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
