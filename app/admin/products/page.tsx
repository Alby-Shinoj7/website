"use client";

import { useMemo, useState } from 'react';
import { products as initialProducts } from '@/data/catalog';

interface ProductItem {
  id: string;
  name: string;
  slug: string;
  description: string;
  categorySlug: string;
  price?: number;
  sizes: string[];
  colors: string[];
  tags: string[];
  status: 'draft' | 'published';
  createdAt: string;
  images: string[];
}

const emptyForm = {
  name: '',
  categorySlug: '',
  price: '',
  slug: '',
  status: 'draft',
  description: ''
};

const slugify = (value: string) =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');

export default function AdminProductsPage() {
  const [items, setItems] = useState<ProductItem[]>(initialProducts as ProductItem[]);
  const [form, setForm] = useState(emptyForm);

  const mappedItems = useMemo(
    () =>
      items.map((item) => ({
        ...item,
        displayPrice: item.price ? `$${item.price}` : 'Contact for price'
      })),
    [items]
  );

  const handleChange = (field: keyof typeof emptyForm, value: string) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
      slug: field === 'name' ? slugify(value) : prev.slug
    }));
  };

  const handleAdd = () => {
    if (!form.name || !form.categorySlug) {
      return;
    }

    const newItem: ProductItem = {
      id: `temp-${Date.now()}`,
      name: form.name,
      slug: form.slug || slugify(form.name),
      description: form.description || 'New product description.',
      categorySlug: form.categorySlug,
      price: form.price ? Number(form.price) : undefined,
      sizes: ['S', 'M', 'L'],
      colors: ['Black', 'Stone'],
      tags: ['new'],
      status: form.status === 'published' ? 'published' : 'draft',
      createdAt: new Date().toISOString().slice(0, 10),
      images: ['/uploads/placeholder.jpg']
    };

    setItems((prev) => [newItem, ...prev]);
    setForm(emptyForm);
  };

  const handleRemove = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

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
          <button
            type="button"
            onClick={handleAdd}
            className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white"
          >
            New product
          </button>
        </div>
        <div className="mt-6 grid gap-3 text-sm text-slate-500">
          <div className="grid gap-3 md:grid-cols-2">
            <input
              className="rounded-xl border border-slate-200 px-4 py-3"
              placeholder="Product name"
              value={form.name}
              onChange={(event) => handleChange('name', event.target.value)}
            />
            <input
              className="rounded-xl border border-slate-200 px-4 py-3"
              placeholder="Category (e.g. hoodies)"
              value={form.categorySlug}
              onChange={(event) => handleChange('categorySlug', event.target.value)}
            />
            <input
              className="rounded-xl border border-slate-200 px-4 py-3"
              placeholder="Price (optional)"
              value={form.price}
              onChange={(event) => handleChange('price', event.target.value)}
            />
            <input
              className="rounded-xl border border-slate-200 px-4 py-3"
              placeholder="Slug (auto)"
              value={form.slug}
              onChange={(event) => handleChange('slug', event.target.value)}
            />
            <select
              className="rounded-xl border border-slate-200 px-4 py-3"
              value={form.status}
              onChange={(event) => handleChange('status', event.target.value)}
            >
              <option value="draft">Draft</option>
              <option value="published">Published</option>
            </select>
          </div>
          <textarea
            className="min-h-[120px] rounded-xl border border-slate-200 px-4 py-3"
            placeholder="Short description"
            value={form.description}
            onChange={(event) => handleChange('description', event.target.value)}
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
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {mappedItems.map((product) => (
              <tr key={product.id} className="border-t border-slate-200">
                <td className="px-6 py-4 font-semibold text-ink">
                  <div>{product.name}</div>
                  <div className="text-xs text-slate-400">{product.displayPrice}</div>
                </td>
                <td className="px-6 py-4 text-slate-500">{product.categorySlug}</td>
                <td className="px-6 py-4 text-slate-500">{product.status}</td>
                <td className="px-6 py-4 text-slate-500">{product.createdAt}</td>
                <td className="px-6 py-4 text-right">
                  <button
                    type="button"
                    onClick={() => handleRemove(product.id)}
                    className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-rose-500"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
