import React from "react";
import { Container } from "@chakra-ui/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Layout: React.FC<{}> = ({ children }) => {
  return (
    <Container maxW="container.xl" w="100vw">
      <Navbar />
      <div style={{ position: "relative" }}>
        <div>{children}</div>
      </div>
      <Footer />
    </Container>
  );
};

export default Layout;
