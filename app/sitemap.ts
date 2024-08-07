import { getBlogPosts } from 'app/blog/utils';
import { site } from 'libs/Site';

export default async function sitemap() {
  let blogs = getBlogPosts().map((post) => ({
    url: `${site.baseUrl}/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  let routes = ['', '/blog', '/exp', '/startkit'].map((route) => ({
    url: `${site.baseUrl} ${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...routes, ...blogs];
}
