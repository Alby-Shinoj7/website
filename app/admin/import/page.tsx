import Link from 'next/link';

export default function AdminImportPage() {
  return (
    <div className="container py-12">
      <div className="flex flex-col gap-2">
        <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Admin</p>
        <h1 className="text-3xl font-semibold text-ink">Bulk import</h1>
        <p className="text-sm text-slate-500">
          Import products with your own CSV/JSON. Only use data you own or have permission to use.
        </p>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[2fr_1fr]">
        <div className="rounded-3xl border border-slate-200 bg-white p-6">
          <h2 className="text-lg font-semibold text-ink">Upload file</h2>
          <p className="mt-2 text-sm text-slate-500">
            Drag and drop your CSV/JSON file. We will validate and preview before importing.
          </p>
          <div className="mt-6 flex min-h-[160px] items-center justify-center rounded-2xl border border-dashed border-slate-200 bg-slate-50 text-sm text-slate-500">
            Drop file here or click to browse
          </div>
          <div className="mt-4 flex flex-wrap gap-3">
            <button className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white">
              Validate file
            </button>
            <button className="rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-ink">
              Import now
            </button>
          </div>
        </div>
        <div className="space-y-4">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 text-sm text-slate-500">
            <h2 className="text-base font-semibold text-ink">Import template</h2>
            <p className="mt-2">Use the provided CSV template to ensure correct field mapping.</p>
            <Link href="/data/sample-import.csv" className="mt-4 inline-flex text-sm font-semibold text-accent">
              Download CSV template
            </Link>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 text-sm text-slate-500">
            <h2 className="text-base font-semibold text-ink">Image guidelines</h2>
            <ul className="mt-3 space-y-2">
              <li>• Upload images in bulk via drag-and-drop.</li>
              <li>• Files are stored under /uploads/&lt;category&gt;/&lt;product-slug&gt;/</li>
              <li>• Recommended: 2000px wide, WebP/AVIF enabled.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
