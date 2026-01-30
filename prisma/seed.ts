import { prisma } from '@/lib/db';

async function main() {
  const hoodies = await prisma.category.upsert({
    where: { slug: 'hoodies' },
    update: {},
    create: {
      name: 'Hoodies',
      slug: 'hoodies',
      description: 'Cozy layers for cooler days.',
      coverImage: '/uploads/hoodies/cover.jpg',
      featured: true
    }
  });

  const pants = await prisma.category.upsert({
    where: { slug: 'pants' },
    update: {},
    create: {
      name: 'Pants',
      slug: 'pants',
      description: 'Tailored fits and relaxed silhouettes.',
      coverImage: '/uploads/pants/cover.jpg',
      featured: true
    }
  });

  const tees = await prisma.category.upsert({
    where: { slug: 'tees' },
    update: {},
    create: {
      name: 'Tees',
      slug: 'tees',
      description: 'Staple tees in versatile colors.',
      coverImage: '/uploads/tees/cover.jpg',
      featured: false
    }
  });

  await prisma.product.upsert({
    where: { slug: 'cloudline-zip-hoodie' },
    update: {},
    create: {
      name: 'Cloudline Zip Hoodie',
      slug: 'cloudline-zip-hoodie',
      description: 'Soft-touch fleece hoodie with a clean silhouette.',
      price: 84,
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: ['Charcoal', 'Dusty Blue'],
      tags: ['featured', 'new'],
      status: 'PUBLISHED',
      categoryId: hoodies.id,
      images: {
        create: [
          {
            url: '/uploads/hoodies/cloudline-zip-hoodie/primary.jpg',
            altText: 'Cloudline Zip Hoodie front',
            position: 0,
            isPrimary: true
          },
          {
            url: '/uploads/hoodies/cloudline-zip-hoodie/alt-1.jpg',
            altText: 'Cloudline Zip Hoodie detail',
            position: 1
          }
        ]
      }
    }
  });

  await prisma.product.upsert({
    where: { slug: 'daybreak-track-pants' },
    update: {},
    create: {
      name: 'Daybreak Track Pants',
      slug: 'daybreak-track-pants',
      description: 'Relaxed fit pants with a tapered ankle and matte finish.',
      price: 72,
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Graphite', 'Sand'],
      tags: ['new'],
      status: 'PUBLISHED',
      categoryId: pants.id,
      images: {
        create: [
          {
            url: '/uploads/pants/daybreak-track-pants/primary.jpg',
            altText: 'Daybreak Track Pants front',
            position: 0,
            isPrimary: true
          },
          {
            url: '/uploads/pants/daybreak-track-pants/alt-1.jpg',
            altText: 'Daybreak Track Pants detail',
            position: 1
          }
        ]
      }
    }
  });

  await prisma.product.upsert({
    where: { slug: 'studio-core-tee' },
    update: {},
    create: {
      name: 'Studio Core Tee',
      slug: 'studio-core-tee',
      description: 'Breathable cotton tee for daily wear.',
      price: 38,
      sizes: ['XS', 'S', 'M', 'L'],
      colors: ['Ivory', 'Stone'],
      tags: ['featured'],
      status: 'PUBLISHED',
      categoryId: tees.id,
      images: {
        create: [
          {
            url: '/uploads/tees/studio-core-tee/primary.jpg',
            altText: 'Studio Core Tee front',
            position: 0,
            isPrimary: true
          }
        ]
      }
    }
  });
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
