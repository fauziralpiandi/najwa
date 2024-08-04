import React from 'react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

import { allBlogs } from ".contentlayer/generated";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
import { allProjects } from ".contentlayer/generated";

import Link from "@/app/components/Link";
import PostList from "@/app/blog/components/PostList";
import ProjectList from "@/app/projects/components/ProjectList";

import { author } from "app/libs/Author";
import Image from "next/image";
import avatar from "public/avatar.png";

export default function Home() {
  const blogs = allBlogs
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .filter((_, i) => i < 1);

  const projects = allProjects.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  return (
    <div className="flex flex-col gap-5 md:gap-10">
      <div className="flex flex-start items-center gap-6">
        <Zoom>
        <Image
          src={avatar}
          width={50}
          height={50}
          alt="avatar"
          className="animate-in rounded-lg bg-secondary"
          style={{ "--index": 1 } as React.CSSProperties}
        />
        </Zoom>
        <h1
          className="animate-in text-3xl font-semibold tracking-tight text-primary"
          style={{ "--index": 2 } as React.CSSProperties}
        >
          hey, {author.name} here!
        </h1>
      </div>
          <p
            className="max-w-lg animate-in text-secondary"
            style={{ "--index": 3 } as React.CSSProperties}
          >
            {author.headLine}
          </p>

      <div
        className="flex animate-in flex-col gap-4 mt-8"
        style={{ "--index": 4 } as React.CSSProperties}
      >
        <p className="text-lg font-semibold tracking-tight text-secondary">Projects</p>
        <ProjectList projects={projects} />
      </div>

      <div
        className="flex animate-in flex-col gap-8 mt-8"
        style={{ "--index": 5 } as React.CSSProperties}
      >
        <div className="space-y-4">
          <Link
            className="group flex items-center gap-2 tracking-tight text-secondary"
            href="/blog"
          >
            Latest blogs
            <ArrowUpRightIcon className="h-5 w-5 text-tertiary transition-all group-hover:text-primary" />
          </Link>
          <p className="max-w-lg text-tertiary">
            I occasionally write about programming, productivity, and more.
            Check me out and subscribe to stay up to date.
          </p>
        </div>
        <PostList posts={blogs} />
      </div>
    </div>
  );
}
