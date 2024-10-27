import Container from "@/components/Container";
import LatestPost from "@/components/home/latest-post";
import PopularPosts from "@/components/home/popular-post";
import TopCategories from "@/components/home/top-category";
import { MainNav } from "@/components/main-nav";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <MainNav />
      <main className="flex flex-col items-start justify-evenly md:flex-row mt-16">
        <div>
          <LatestPost />
        </div>
        <div className="h-screen">
          <div>
            <h1 className="font-bold mb-4" >TOP CATEGORIES</h1>
            <TopCategories/>
          </div>
          <div className="mt-10 sticky top-0">
            <h1 className="font-bold mb-4">POPULAR POSTS</h1>
            <PopularPosts />
          </div>
        </div>
      </main>
    </Container>
  );
}
