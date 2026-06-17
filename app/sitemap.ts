import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/site';
import { posts } from '@/lib/blog';
import { services } from '@/lib/services';
import { regions } from '@/lib/regions';

const SITE_LAUNCH = new Date('2026-01-08');

const STATIC_PAGES: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']; lastModified: Date }[] = [
  { path: '',                   priority: 1.0, changeFrequency: 'weekly',  lastModified: SITE_LAUNCH },
  { path: '/sobre',             priority: 0.7, changeFrequency: 'yearly',  lastModified: SITE_LAUNCH },
  { path: '/portfolio',         priority: 0.8, changeFrequency: 'monthly', lastModified: SITE_LAUNCH },
  { path: '/contato',           priority: 0.8, changeFrequency: 'yearly',  lastModified: SITE_LAUNCH },
  { path: '/blog',              priority: 0.8, changeFrequency: 'weekly',  lastModified: SITE_LAUNCH },
  ...services.map((s) => ({ path: `/${s.slug}`, priority: 0.9, changeFrequency: 'monthly' as const, lastModified: SITE_LAUNCH })),
  ...regions.map((r)  => ({ path: `/${r.slug}`, priority: 0.8, changeFrequency: 'monthly' as const, lastModified: SITE_LAUNCH })),
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = STATIC_PAGES.map(({ path, priority, changeFrequency, lastModified }) => ({
    url: `${SITE.url}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));

  const blogEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${SITE.url}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticEntries, ...blogEntries];
}
