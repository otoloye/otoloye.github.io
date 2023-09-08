import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export const Layout = ({ children }: { children: JSX.Element }) => {
  return (
    <>
      <Header />
      <div className="mt-20 ">{children}</div>
      <Footer />
    </>
  );
};
