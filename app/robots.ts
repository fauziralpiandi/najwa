import { site } from 'libs/Site';

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
      },
    ],
    sitemap: `${site.baseUrl}/sitemap.xml`,
    host: site.baseUrl,
  };
}
