import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Layout: React.FC<{}> = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="bg-raisinBlack flex justify-center">
        <div className="flex flex-col items-center mx-4 min-h-screen w-full
          sm:max-w-md md:max-w-lg lg:max-w-4xl lg:mx-32">
          {children}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
