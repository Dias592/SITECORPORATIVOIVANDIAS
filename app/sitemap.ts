import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/site';
import { getBlogSlugs } from '@/lib/blog';
import { services } from '@/lib/services';
import { regions } from '@/lib/regions';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPaths = [
    '',
    '/sobre',
    '/portfolio',
    '/contato',
    '/blog',
    ...services.map((service) => `/${service.slug}`),
    ...regions.map((region) => `/${region.slug}`),
  ];

  const blogPaths = getBlogSlugs().map((slug) => `/blog/${slug}`);

  return [...staticPaths, ...blogPaths].map((path) => ({
    url: `${SITE.url}${path}`,
    lastModified: now,
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : path.startsWith('/blog/') ? 0.6 : 0.8,
  }));
}
