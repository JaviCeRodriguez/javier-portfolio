import React from "react";
import Head from "next/head";
import Card from "@/components/Card";

interface dataProjets {
  _id: string,
  project: string,
  description: string,
  mainImage: string,
  demo: string,
  repository: string,
}

interface projectsProps {
  data: dataProjets[],
}

const Portfolio: React.FC<projectsProps> = () => {  
  return (
    <>
      <Head>
        <title>Javier Rodriguez | Portfolio</title>
      </Head>
      <h1 className="title">
        Projectos
      </h1>
      <section className="w-full flex flex-wrap justify-evenly">
        {/* {
          projects.map((project) => (
            <Card
              key={project._id}
              title={project.project}
              description={project.description}
              image={project.mainImage}
              demo={project.demo}
              repository={project.repository}
            />
          ))
        } */}
      </section>
    </>
  );
};

export default Portfolio;
