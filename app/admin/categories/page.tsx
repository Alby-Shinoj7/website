import { categories } from '@/data/catalog';

export default function AdminCategoriesPage() {
  return (
    <div className="container py-12">
      <div className="flex flex-col gap-2">
        <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Admin</p>
        <h1 className="text-3xl font-semibold text-ink">Manage categories</h1>
        <p className="text-sm text-slate-500">Add cover images, descriptions, and featured flags.</p>
      </div>

      <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-lg font-semibold text-ink">Add category</h2>
            <p className="text-sm text-slate-500">Name and slug are required. Upload a cover for the storefront.</p>
          </div>
          <button className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white">
            New category
          </button>
        </div>
        <div className="mt-6 grid gap-3 text-sm text-slate-500">
          <div className="grid gap-3 md:grid-cols-2">
            <input className="rounded-xl border border-slate-200 px-4 py-3" placeholder="Category name" />
            <input className="rounded-xl border border-slate-200 px-4 py-3" placeholder="Slug (auto)" />
          </div>
          <textarea
            className="min-h-[120px] rounded-xl border border-slate-200 px-4 py-3"
            placeholder="Short description"
          />
        </div>
      </div>

      <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-white">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-400">
            <tr>
              <th className="px-6 py-4">Category</th>
              <th className="px-6 py-4">Slug</th>
              <th className="px-6 py-4">Featured</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => (
              <tr key={category.id} className="border-t border-slate-200">
                <td className="px-6 py-4 font-semibold text-ink">{category.name}</td>
                <td className="px-6 py-4 text-slate-500">{category.slug}</td>
                <td className="px-6 py-4 text-slate-500">{category.featured ? 'Yes' : 'No'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
