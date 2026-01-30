import type { MetadataRoute } from 'next';
import { categories, products } from '@/data/catalog';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://example.com';

  const categoryRoutes = categories.map((category) => ({
    url: `${baseUrl}/category/${category.slug}`,
    lastModified: new Date()
  }));

  const productRoutes = products.map((product) => ({
    url: `${baseUrl}/product/${product.slug}`,
    lastModified: new Date()
  }));

  return [
    { url: baseUrl, lastModified: new Date() },
    ...categoryRoutes,
    ...productRoutes
  ];
}
