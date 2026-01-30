import Link from 'next/link';

const navLinks = [
  { label: 'New Arrivals', href: '/#new-arrivals' },
  { label: 'Categories', href: '/#categories' },
  { label: 'Admin', href: '/admin' }
];

export function SiteHeader() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="container flex items-center justify-between py-6">
        <Link href="/" className="text-xl font-semibold">
          Merch Catalog CMS
        </Link>
        <nav className="flex gap-4 text-sm text-slate-600">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
