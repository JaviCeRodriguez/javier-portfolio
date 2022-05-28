import React from "react";
import Head from "next/head";
import Skills from "@/components/Skills";
import About from "@/components/About";

const Home: React.FC = () => {
  return (
    <main style={{ paddingBottom: "100px", maxWidth: "1230px" }}>
      <Head>
        <title>Javier Rodriguez | Inicio</title>
      </Head>
      {/* <About />
      <Skills /> */}
    </main>
  );
};

export default Home;
