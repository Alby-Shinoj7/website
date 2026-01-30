import './globals.css';
import type { Metadata } from 'next';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';

export const metadata: Metadata = {
  title: 'Merch Catalog CMS',
  description: 'A fast, flexible merch catalog storefront with CMS tools.',
  openGraph: {
    title: 'Merch Catalog CMS',
    description: 'A fast, flexible merch catalog storefront with CMS tools.',
    type: 'website'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <main className="pb-20">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
