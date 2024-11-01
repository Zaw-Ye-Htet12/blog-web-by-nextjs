import React from "react";
import { getBlogPosts } from "../utils";
import Container from "@/components/Container";
import { notFound } from "next/navigation";
import Link from "next/link";
import CardCategory from "@/components/CardCategory";
import Header from "@/components/header";

export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({
    category: post.metadata.category,
  }));
}

const Page = ({ params }: { params: { category: string } }) => {
  const posts = getBlogPosts().filter(
    (post) => post.metadata.category === params.category
  );
  if (!posts) {
    notFound();
  }
  return (
    <>
      <Header>
        <Container>
          <div className="uppercase font-semibold text-2xl py-3">
            {posts[0]?.metadata.category}
          </div>
        </Container>
      </Header>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
          {posts
            .sort((a, b) => {
              if (a.metadata.publishedAt > b.metadata.publishedAt) {
                return -1;
              } else {
                return -1;
              }
            })
            .map((post) => (
              <Link href={`/blog/${post.metadata.category}/${post.slug}`} key={post.metadata.title}>
                <CardCategory
                  title={post.metadata.title}
                  summary={post.metadata.summary}
                  date={post.metadata.publishedAt}
                />
              </Link>
            ))}
        </div>
      </Container>
    </>
  );
};

export default Page;
