import Link from 'next/link';
import formatDate, { getBlogPosts } from 'app/blog/utils';
import { FaBookOpen } from 'react-icons/fa';

export const metadata = {
  title: 'Blog',
  description: 'Read my thoughts on software development, design, and more.',
};

export default function BlogPage() {
  let allBlogs = getBlogPosts();

  return (
    <section>
      <h1 className="animate-in flex flex-row items-center gap-2 font-medium text-2xl mb-8 tracking-tighter" style={{ '--index': 1 } as React.CSSProperties}>
        <FaBookOpen /> get something today!
      </h1>
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="animate-in flex flex-col space-y-1 mb-4"
            style={{ '--index': 2 } as React.CSSProperties}
            href={`/blog/${post.slug}`}
          >
            <div className="w-full flex flex-col">
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                {post.metadata.title}
              </p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {formatDate(post.metadata.publishedAt, 'absolute')}
              </p>
            </div>
          </Link>
        ))}
    </section>
  );
}
