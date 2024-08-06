import { getBlogPosts } from 'app/blog/utils';

export default async function sitemap() {
  let blogs = getBlogPosts().map((post) => ({
    url: `https://fauziralpiandi.vercel.app/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  let routes = ['', '/blog', '/startki', '/work'].map((route) => ({
    url: `https://fauziralpiandi.vercel.app${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...routes, ...blogs];
}
