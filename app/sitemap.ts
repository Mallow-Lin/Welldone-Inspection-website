import type { MetadataRoute } from 'next';
import { SITE_ORIGIN } from '@/lib/site';
import { services } from '@/lib/services';
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    '',
    '/services',
    ...services.map((s) => `/${s.slug}`),
    '/about',
    '/projects',
    '/contact',
  ].map((path) => ({
    url: `${SITE_ORIGIN}${path}`,
    priority: path === '' ? 1 : 0.8,
  }));
}
