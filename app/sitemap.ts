import { getBlogPosts } from 'app/db/utils';

export default async function sitemap() {
  let blogs = getBlogPosts().map((post) => ({
    url: `https://zira.my.id/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  let routes = ['', '/blog', '/uses', '/work'].map((route) => ({
    url: `https://zira.my.id${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...routes, ...blogs];
}
