import type { MetadataRoute } from 'next';
import { business } from '@/lib/contact';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: business.siteUrl,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${business.siteUrl}/booking`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ];
}

