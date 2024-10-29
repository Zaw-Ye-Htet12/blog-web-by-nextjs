import React from "react";
import { getPrivacyPolicy } from "../blog/utils";
import Container from "@/components/Container";
import Header from "@/components/header";
import { MainNav } from "@/components/main-nav";
import CustomerMDX from "@/components/mdx";

const Page = () => {
  const post = getPrivacyPolicy().find(
    (post) => post.slug === "privacy-policy"
  );

  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-800">
        <Container>
          <MainNav />
          <Header>
            <h1 className="title font-semibold text-2xl tracking-tighter mt-4 capitalize">
              Privacy Policy
            </h1>
          </Header>
        </Container>
      </div>
      <Container>
        <article className="my-5 prose">
          <CustomerMDX source={post?.content} />
        </article>
      </Container>
    </>
  );
};

export default Page;
