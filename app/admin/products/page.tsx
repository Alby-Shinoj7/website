import { products } from '@/data/catalog';

export default function AdminProductsPage() {
  return (
    <div className="container py-12">
      <div className="flex flex-col gap-2">
        <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Admin</p>
        <h1 className="text-3xl font-semibold text-ink">Manage products</h1>
        <p className="text-sm text-slate-500">Minimal inputs with autoslug and draft/publish status.</p>
      </div>

      <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-lg font-semibold text-ink">Add product</h2>
            <p className="text-sm text-slate-500">Name, category, and optional price are enough to get started.</p>
          </div>
          <button className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white">
            New product
          </button>
        </div>
        <div className="mt-6 grid gap-3 text-sm text-slate-500">
          <div className="grid gap-3 md:grid-cols-2">
            <input className="rounded-xl border border-slate-200 px-4 py-3" placeholder="Product name" />
            <input className="rounded-xl border border-slate-200 px-4 py-3" placeholder="Category" />
            <input className="rounded-xl border border-slate-200 px-4 py-3" placeholder="Price (optional)" />
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
              <th className="px-6 py-4">Product</th>
              <th className="px-6 py-4">Category</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Updated</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="border-t border-slate-200">
                <td className="px-6 py-4 font-semibold text-ink">{product.name}</td>
                <td className="px-6 py-4 text-slate-500">{product.categorySlug}</td>
                <td className="px-6 py-4 text-slate-500">{product.status}</td>
                <td className="px-6 py-4 text-slate-500">{product.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
