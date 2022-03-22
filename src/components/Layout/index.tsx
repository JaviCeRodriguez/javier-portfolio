import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LikesGlobal from "../LikesGlobal";
import { Container } from "@nextui-org/react";

const Layout: React.FC<{}> = ({ children }) => {
  return (
    <Container
      css={{
        padding: "0 12px",
        width: "100vw",
        "@xs": {
          maxWidth: "650px",
          padding: 0,
        },
        "@sm": {
          maxWidth: "950px",
        },
        "@md": {
          maxWidth: "1200px",
        },
      }}
    >
      <Navbar />
      <div style={{ position: "relative" }}>
        {/* <LikesGlobal /> */}
        <div>{children}</div>
      </div>
      <Footer />
    </Container>
  );
};

export default Layout;
