import React from 'react';
import Image from "next/image";

const About: React.FC = () => {
  return(
    <section className="flex flex-col mt-10 lg:flex-row lg:mb-10">
      <div className="flex justify-between items-center px-0 w-full md:px-8 lg:px-0 lg:flex-col lg:mx-14">
        <div className="flex w-32 rounded-full border-2 border-fireOpal overflow-hidden my-4
          sm:w-36 md:w-44 lg:w-56">
          <Image src="/perfil.jpg" alt="Perfil" width={250} height={250} />
        </div>
        <div className="flex flex-col items-center">
          <h3 className="subtitle">Fullstack Dev</h3>
          <h4 className="subtitle-section">
            React + Python
          </h4>
        </div>
      </div>
      <div className="flex flex-col mb-6 sm:mx-10 lg:mb-0 lg:justify-center lg:text-center">
        <h3 className="title-section">
          HOLA! <span className="hand">👋</span>
        </h3>
        <p className="paragraph mx-0">
          De Buenos Aires, Argentina. En el rubro del desarrollo e ingeniería, ganando constantemente experiencia y conocimientos en proyectos interesantes, ya sean propios o grupales. Participo de iniciativas en comunidades IT y comparto buenos momentos con amigos (con matecitos de por medio, claro 🧉) 
        </p>
      </div>
    </section>
  )
}

export default About;