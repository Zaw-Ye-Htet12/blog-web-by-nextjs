import React from "react";
import { formatDate, getBlogPosts } from "../../utils";
import Header from "@/components/header";
import { BreadcrumbWithCustomSeparator } from "@/components/BreadCrumb";
import Container from "@/components/Container";
import { notFound } from "next/navigation";
import CustomerMDX from "@/components/mdx";

export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

const Page = ({ params }: { params: { category: string; slug: string } }) => {
  const post = getBlogPosts().find((blog) => blog.slug === params.slug);
  if (!post) {
    notFound();
  }

  return (
    <>
      <Header>
        <Container>
          <BreadcrumbWithCustomSeparator
            category={post.metadata.category}
            slug={post.slug}
          />
          <h1 className="text-2xl font-bold py-5">{post.metadata.title}</h1>
          <p className="text-gray-500 dark:text-gray-200">
            {formatDate(post.metadata.publishedAt)}
          </p>
        </Container>
      </Header>
      <Container>
        <article className="prose">
          <CustomerMDX source={post.content} />
        </article>
      </Container>
    </>
  );
};

export default Page;
