import React from "react";
import Head from "next/head";
import Skills from "@/components/Skills";
import About from "@/components/About";

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Javier Rodriguez | Inicio</title>
      </Head>
      <h1 className="title mt-4 md:mt-10 md:text-5xl md:text-center lg:text-6xl">
        JAVIER RODRIGUEZ
      </h1>
      <About />
      <Skills />
    </>
  );
};

export default Home;
