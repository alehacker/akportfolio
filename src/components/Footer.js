import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-between p-8 md:flex-row h-1/5 font-mavenpro">
    <div className='flex flex-row items-center justify-center gap-1 p-1 m-1 md:p-2 ' >
               <img className= 'w-10 h-10 md:w-5 md:h-5'src='/images/emailicon.png' alt='email'/>
               <p className='p-1 text-xl'>AleKennedy21@gmail.com</p>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex space-x-4">
            <a href="https://github.com/alehacker" className="object-contain object-center w-10 h-10 mb-2 md:mb-0 md:mr-2" target="_blank" rel="noopener noreferrer">
               <img src='/images/githublogo.png' alt='github'/>
            </a>
            <a href="https://twitter.com/AleInTech" className="object-contain object-center w-10 h-10 mb-2 md:mb-0 md:mr-2" target="_blank" rel="noopener noreferrer">
               <img src='/images/twitterlogo.png' alt='twitter'/>
            </a>
            <a href="https://www.linkedin.com/in/alejandra-kennedy/" className="object-contain object-center w-10 h-10 md:mb-0" target="_blank" rel="noopener noreferrer">
               <img src='/images/linkediicon.png' alt='linkedin'/>
            </a>
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;
