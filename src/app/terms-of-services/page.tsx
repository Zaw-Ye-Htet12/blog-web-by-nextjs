import React from "react";
import { getTermsOfServices } from "../blog/utils";
import Container from "@/components/Container";
import Header from "@/components/header";
import { MainNav } from "@/components/main-nav";
import CustomerMDX from "@/components/mdx";

const Page = () => {
  const post = getTermsOfServices().find(
    (post) => post.slug === "terms-of-services"
  );

  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-800">
        <Container>
          <MainNav />
          <Header>
            <h1 className="title font-semibold text-2xl tracking-tighter mt-4 capitalize">
              Terms of Services
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
