import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

function Navbar() {
  return (
   <nav className='fixed top-0 z-10 flex flex-col items-center justify-between w-full p-5 px-8 bg-white h-44 scroll-m-0 md:flex-row font-mavenpro left-2' >
      <div className='flex items-center order-1 p-1' >
         <ScrollLink className='mr-6 text-2xl text-gray-700 hover:text-indigo-600 ' to='home' spy={true} smooth={true} duration={500}>
            Home
         </ScrollLink>
         {/* <ScrollLink className='mr-6 text-lg text-gray-700 hover:text-indigo-600' to='about' smooth={true} duration={500}>
            About
         </ScrollLink> */}
         <ScrollLink className='mr-6 text-2xl text-gray-700 hover:text-indigo-600' to='projects' spy={true} smooth={true} duration={500}>
            Projects
         </ScrollLink>
         <ScrollLink className='text-2xl text-gray-700 hover:text-indigo-600' to='contact' spy={true} smooth={true} duration={500}>
            Contact
         </ScrollLink>
      </div>
      <div className='md:order-1'>
         <ScrollLink className='' to='home' spy={true} smooth={true} duration={500}>
            <img className='w-auto h-40 mb-1 md:w-auto md:h-24' src='/images/aklogo.png' alt='Logo' />
         </ScrollLink>
      </div>
   </nav>


  );
}

export default Navbar;

