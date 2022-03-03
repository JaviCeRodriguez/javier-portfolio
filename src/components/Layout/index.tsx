import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Layout: React.FC<{}> = ({ children }) => {
  return (
    <>
      {/* <Navbar /> */}
      <div>
        <div>{children}</div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
