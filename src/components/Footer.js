import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row items-center justify-between h-1/5 font-mavenpro p-8">
    <div className='flex flex-row  gap-1 p-1 m-1 justify-center items-center md:p-2 ' >
               <img className= 'w-10 h-10 md:w-5 md:h-5'src='/images/emailicon.png' alt='email'/>
               <p className='text-xl p-1'>AleKennedy21@gmail.com</p>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex space-x-4">
            <a href="https://github.com/alehacker" className="w-10 h-10 object-contain object-center mb-2 md:mb-0 md:mr-2">
               <img src='/images/githublogo.png' alt='github'/>
            </a>
            <a href="https://twitter.com/AleInTech" className="w-10 h-10 object-contain object-center mb-2 md:mb-0 md:mr-2">
               <img src='/images/twitterlogo.png' alt='twitter'/>
            </a>
            <a href="https://www.linkedin.com/in/alejandra-kennedy/" className="w-10 h-10 object-contain object-center md:mb-0">
               <img src='/images/linkediicon.png' alt='linkedin'/>
            </a>
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;
