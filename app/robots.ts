import type { MetadataRoute } from 'next';
import { IS_PREVIEW, SITE_ORIGIN } from '@/lib/site';
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      ...(IS_PREVIEW ? { disallow: '/' } : { allow: '/' }),
    },
    ...(!IS_PREVIEW && { sitemap: `${SITE_ORIGIN}/sitemap.xml` }),
  };
}
