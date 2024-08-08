import { Metadata } from 'next';
import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import { CustomMDX } from 'app/components/mdx';
import formatDate, { getBlogPosts } from 'app/blog/utils';
import { site } from 'libs/Site';

export async function generateMetadata({
  params,
}): Promise<Metadata | undefined> {
  let post = getBlogPosts().find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;
  let ogImage = image
    ? `${site.baseUrl}${image}`
    : `${site.baseUrl}/og?title=${title}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `${site.baseUrl}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
}

export async function generateStaticParams() {
  const posts = getBlogPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function Blog({ params }) {
  let post = getBlogPosts().find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${site.baseUrl}${post.metadata.image}`
              : `${site.baseUrl}/og?title=${post.metadata.title}`,
            url: `${site.baseUrl}/blog/${post.slug}`,
            author: {
              '@type': 'Person',
              name: site.title,
            },
          }),
        }}
      />
      <h1 className="title font-semibold text-3xl tracking-tighter max-w-[650px]">
        {post.metadata.title}
      </h1>
      <div className="flex justify-between items-center mt-2 mb-8 text-sm max-w-[650px]">
        <Suspense fallback={<p className="h-5" />}>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {formatDate(post.metadata.publishedAt, 'relative')}
          </p>
        </Suspense>
      </div>
      <article className="text-base prose prose-quoteless prose-neutral dark:prose-invert">
        <CustomMDX source={post.content} />
      </article>
    </section>
  );
}