import React from "react";
import { popularPosts } from "@/lib/placeholder-data";
import Link from "next/link";
import { Icons } from "../icon";

const PopularPosts = () => {
  return (
    <div>
      {popularPosts.map((post) => (
        <Link href={`/blog`} key={post.title}>
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
