export const categories = [
  {
    id: 'cat-hoodies',
    name: 'Hoodies',
    slug: 'hoodies',
    description: 'Cozy layers for cooler days.',
    coverImage: '/uploads/hoodies/cover.jpg',
    featured: true
  },
  {
    id: 'cat-pants',
    name: 'Pants',
    slug: 'pants',
    description: 'Tailored fits and relaxed silhouettes.',
    coverImage: '/uploads/pants/cover.jpg',
    featured: true
  },
  {
    id: 'cat-tees',
    name: 'Tees',
    slug: 'tees',
    description: 'Staple tees in versatile colors.',
    coverImage: '/uploads/tees/cover.jpg',
    featured: false
  }
];

export const products = [
  {
    id: 'prod-cloudline',
    name: 'Cloudline Zip Hoodie',
    slug: 'cloudline-zip-hoodie',
    description: 'Soft-touch fleece hoodie with a clean silhouette.',
    categorySlug: 'hoodies',
    price: 84,
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Charcoal', 'Dusty Blue'],
    tags: ['featured', 'new'],
    status: 'published',
    createdAt: '2024-05-14',
    images: [
      '/uploads/hoodies/cloudline-zip-hoodie/primary.jpg',
      '/uploads/hoodies/cloudline-zip-hoodie/alt-1.jpg'
    ]
  },
  {
    id: 'prod-daybreak',
    name: 'Daybreak Track Pants',
    slug: 'daybreak-track-pants',
    description: 'Relaxed fit pants with a tapered ankle and matte finish.',
    categorySlug: 'pants',
    price: 72,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Graphite', 'Sand'],
    tags: ['new'],
    status: 'published',
    createdAt: '2024-05-20',
    images: [
      '/uploads/pants/daybreak-track-pants/primary.jpg',
      '/uploads/pants/daybreak-track-pants/alt-1.jpg'
    ]
  },
  {
    id: 'prod-studio-tee',
    name: 'Studio Core Tee',
    slug: 'studio-core-tee',
    description: 'Breathable cotton tee for daily wear.',
    categorySlug: 'tees',
    price: 38,
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Ivory', 'Stone'],
    tags: ['featured'],
    status: 'published',
    createdAt: '2024-04-28',
    images: [
      '/uploads/tees/studio-core-tee/primary.jpg'
    ]
  }
];
