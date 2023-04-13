import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
   <nav className='flex flex-col md:flex-row items-center justify-between h-1/5 font-mavenpro'>
   <div className='flex items-center order-1 p-5'>
     <Link className='mr-6 text-lg text-gray-700 hover:text-indigo-600' to='/' smooth={true} duration={500}>
       Home
     </Link>
     <Link className='mr-6 text-lg text-gray-700 hover:text-indigo-600' to='about-section' smooth={true} duration={500}>
       About
     </Link>
     <Link className='mr-6 text-lg text-gray-700 hover:text-indigo-600' to='projects-section' smooth={true} duration={500}>
       Projects
     </Link>
     <Link className='text-lg text-gray-700 hover:text-indigo-600' to='contact-section' smooth={true} duration={500}>
       Contact
     </Link>
   </div>
   <div className='md:order-1'>
     <Link className='' to='/'>
       <img className='h-32 mb-5' src='/images/aklogo.png' alt='Logo' />
     </Link>
   </div>
 </nav>
 
  );
}

export default Navbar;


