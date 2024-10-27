import React from "react";
import { getBlogPosts, formatDate } from "@/app/blog/utils";
import Link from "next/link";

const LatestPost = () => {
  const latestPosts = getBlogPosts();
  return (
    <>
      <h2 className="font-heading text-4xl tracking-tight lg:text-5xl">Recently Published</h2>
      {latestPosts
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <article key={post.slug} className="text-wrap max-w-md my-10">
            <Link href={`/blog/${post.metadata.category}/${post.slug}`}>
              <h3 className="font-bold text-lg hover:text-blue-400 dark:hover:text-gray-800 leading-5 py-3">{post.metadata.title}</h3>
            </Link>
                <p className="leading-8 my-5">{post.metadata.summary}</p>
                <p className="text-sm text-gray-400">{ formatDate(post.metadata.publishedAt)}</p>
          </article>
        ))}
    </>
  );
};

export default LatestPost;
