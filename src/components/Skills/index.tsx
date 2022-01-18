import React from 'react';

const Skills: React.FC = () => {
  return(
    <section className="flex flex-wrap justify-around mb-6 w-full">
      <h3 className="title-section w-full">
        Tengo conocimientos en:
      </h3>

      <div className="flex flex-col border-2 sm:border-4 border-fireOpal rounded-lg my-4 sm:px-2 md:px-4 hover:skew-x-[-3deg] ease-linear duration-75 drop-shadow-lg">
        <h4 className="subtitle-section text-center mt-2">Lenguajes</h4>
        <div className="flex flex-wrap my-4">
          <div className="icon-container">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
          </div>
          <div className="icon-container">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
          </div>
        </div>
      </div>

      <div className="flex flex-col border-2 sm:border-4 border-fireOpal rounded-lg my-4 sm:px-2 md:px-4 hover:skew-x-[-3deg] ease-linear duration-75 drop-shadow-lg">
        <h4 className="subtitle-section text-center mt-2">Bases de datos</h4>
        <div className="flex flex-wrap my-4">
          <div className="icon-container">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" />
          </div>
          <div className="icon-container">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" />
          </div>
          <div className="icon-container">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" />
          </div>
        </div>
      </div>

      <div className="flex flex-col border-2 sm:border-4 border-fireOpal rounded-lg my-4 sm:px-2 md:px-4 hover:skew-x-[-3deg] ease-linear duration-75 drop-shadow-lg">
        <h4 className="subtitle-section text-center mt-2">Frontend</h4>
        <div className="flex flex-wrap my-4">
          <div className="icon-container">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />
          </div>
          <div className="icon-container">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" />
          </div>
          <div className="icon-container">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gatsby/gatsby-plain.svg" />
          </div>
          <div className="icon-container">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" />
          </div>
          <div className="icon-container">💅</div>
        </div>
      </div>

      <div className="flex flex-col border-2 sm:border-4 border-fireOpal rounded-lg my-4 sm:px-2 md:px-4 hover:skew-x-[-3deg] ease-linear duration-75 drop-shadow-lg">
        <h4 className="subtitle-section text-center mt-2">Backend</h4>
        <div className="flex flex-wrap my-4">
          <div className="icon-container">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-original.svg" />
          </div>
          <div className="icon-container">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
          </div>
        </div>
      </div>


      <div className="flex flex-col border-2 sm:border-4 border-fireOpal rounded-lg my-4 sm:px-2 md:px-4 hover:skew-x-[-3deg] ease-linear duration-75 drop-shadow-lg">
        <h4 className="subtitle-section text-center mt-2">Utilidades</h4>
        <div className="flex flex-wrap my-4">
          <div className="icon-container">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/storybook/storybook-original.svg" />
          </div>
          <div className="icon-container">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg" />
          </div>
          <div className="icon-container">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills;