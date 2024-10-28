'use client'
import React from "react";
// import { popularPosts } from "@/lib/placeholder-data";
import useSWR from "swr";
import { fetcher, fetchUrl } from "@/lib/utils";
import Link from "next/link";
import { Icons } from "../icon";
import { SkeletonCard } from "../CardSkeleton";

const PopularPosts = () => {
  const { data, error, isLoading } = useSWR(fetchUrl, fetcher)

  if (error) return <div>Failed to load ...</div>
  if (isLoading) return <SkeletonCard/>

  return (
    <div>
      {data?.map((post: {category: string, title: string, slug: string}) => (
        <Link href={`/blog/${post.category}/${post.slug}`} key={post.title}>
          <li className="flex items-center gap-2 cursor-pointer py-2">
            <Icons.arrowRight className="h-6 w-6 group-hover:translate-x-1 transition-all" />
            <p>{post.title}</p>
          </li>
        </Link>
      ))}
    </div>
  );
};

export default PopularPosts;
