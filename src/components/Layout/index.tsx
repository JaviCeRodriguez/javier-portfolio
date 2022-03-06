import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LikesGlobal from "../LikesGlobal";

const Layout: React.FC<{}> = ({ children }) => {
  return (
    <>
      {/* <Navbar /> */}
      <div style={{ position: "relative" }}>
        <LikesGlobal />
        <div>{children}</div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
