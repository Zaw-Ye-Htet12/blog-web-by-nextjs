import React from "react";
import { Icons } from "./icon";
import { POSTS } from "@/lib/constant";
import Link from "next/link";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8 mt-10 dark:bg-gray-800 ">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-5">
            <div className="flex items-center space-x-2">
              <Icons.logo className="w-6 h-6" />
              <span className="text-xl font-bold ">Coding with simon</span>
            </div>
            <p className="text-gray-700 dark:text-white">
              Stay Up to Date with the latest news and insights from our
              newletters.
            </p>
            <div className="flex flex-row gap-2">
              <Icons.twitter className="hover:text-gray-500 cursor-pointer h-5 w-5" />
              <Icons.gitHub className="hover:text-gray-500 cursor-pointer h-5 w-5" />
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="font-bold text-xl ">Blogs</h3>
            {POSTS.map((post) => (
              <li key={post.title} className="list-none">
                <Link
                  href={post.href}
                  className="text-gray-500 dark:text-gray-100 hover:text-black dark:hover:text-gray-500 "
                >
                  {post.title}
                </Link>
              </li>
            ))}
          </div>
          <div className="space-y-4">
            <h3 className="font-bold text-xl">Links</h3>
            <ul className="space-y-4 text-md">
              <li className="">
                <Link
                  href="mailto:scottsimon4969@gmail.com"
                  className="text-gray-500 dark:text-gray-100 hover:text-black dark:hover:text-gray-500 "
                >
                  Contacts
                </Link>
              </li>
              <li className="">
                <Link
                  href="/terms-of-services"
                  className="text-gray-500 dark:text-gray-100 hover:text-black dark:hover:text-gray-500 "
                >
                  Contacts
                </Link>
              </li>
              <li className="">
                <Link
                  href="/privacy-policy"
                  className="text-gray-500 dark:text-gray-100 hover:text-black dark:hover:text-gray-500 "
                >
                  Contacts
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-bold text-xl">Newsletter</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Subscribe to our newsletter to stay up-to-date with the latest
              news and updates.
            </p>
            <div className="flex flex-col space-y-2 lg:space-x-2 lg:flex-row">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1"
              />
              <Button className="">Subscribe</Button>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-4 text-center text-xs text-gray-500 dark:border-gray-700 dark:text-gray-400">
          &copy; 2024 Coding Jitsu. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
