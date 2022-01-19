import React from 'react';

const Footer: React.FC = () => {
  return(
    <footer className='w-full flex flex-col items-center'>
      <p className='flex mt-8 mb-2'>
        <a href="https://www.linkedin.com/in/rodriguezjavierc/" target="_blank">
          <img className='w-8 mx-3 grayscale hover:grayscale-0 duration-500 bg-stone-300 p-1 rounded-md shadow-md shadow-stone-300' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" />
        </a>
        <a href="mailto:javicerodriguez@gmail.com" target="_blank">
          <img className='w-8 mx-3 grayscale hover:grayscale-0 duration-500 bg-stone-300 p-1 rounded-md shadow-md shadow-stone-300' src="https://cdn-icons-png.flaticon.com/512/5968/5968534.png" />
        </a>
        <a href="https://github.com/JaviCeRodriguez/" target="_blank">
          <img className='w-8 mx-3 grayscale hover:grayscale-0 duration-500 bg-stone-300 p-1 rounded-md shadow-md shadow-stone-300' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
        </a>
        <a href="https://twitter.com/javicerodriguez" target="_blank">
          <img className='w-8 mx-3 grayscale hover:grayscale-0 duration-500 bg-stone-300 p-1 rounded-md shadow-md shadow-stone-300' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg" />
        </a>
      </p>
      <p className='my-4 text-white text-sm'>
        Portfolio hecho con muchos matecitos y algunos tereré 🧉
      </p>
    </footer>
  )
}

export default Footer;