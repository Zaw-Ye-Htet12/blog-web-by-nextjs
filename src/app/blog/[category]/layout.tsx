import Container from "@/components/Container";
import { MainNav } from "@/components/main-nav";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-800 pb-4">
        <Container>
          <MainNav />
        </Container>
      </div>
      {children}
    </>
  );
};

export default Layout;
