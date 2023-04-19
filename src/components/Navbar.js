import React from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

function Navbar() {
  return (
//    <nav className='flex flex-col items-center justify-between md:flex-row h-1/5 font-mavenpro'>
//    <div className='flex items-center order-1 p-5'>
//      <Link className='mr-6 text-lg text-gray-700 hover:text-indigo-600' to='/' smooth={true} duration={500}>
//        Home
//      </Link>
//      <Link className='mr-6 text-lg text-gray-700 hover:text-indigo-600' to='home' smooth={true} duration={500}>
//        About
//      </Link>
//      <Link className='mr-6 text-lg text-gray-700 hover:text-indigo-600' to='projects-section' smooth={true} duration={500}>
//        Projects
//      </Link>
//      <Link className='text-lg text-gray-700 hover:text-indigo-600' to='contact-section' smooth={true} duration={500}>
//        Contact
//      </Link>
//    </div>
//    <div className='md:order-1'>
//      <Link className='' to='/'>
//        <img className='h-32 mb-5' src='/images/aklogo.png' alt='Logo' />
//      </Link>
//    </div>
//  </nav>


<nav className='fixed z-10 flex flex-col items-center justify-between w-full p-2 bg-white md:flex-row h-1/50 font-mavenpro top-2 left-2' >
  <div className='flex items-center order-1 p-1' >
    <ScrollLink className='mr-6 text-lg text-gray-700 hover:text-indigo-600' to='home' smooth={true} duration={500}>
      Home
    </ScrollLink>
    {/* <ScrollLink className='mr-6 text-lg text-gray-700 hover:text-indigo-600' to='about' smooth={true} duration={500}>
      About
    </ScrollLink> */}
    <ScrollLink className='mr-6 text-lg text-gray-700 hover:text-indigo-600' to='projects' smooth={true} duration={500}>
      Projects
    </ScrollLink>
    <ScrollLink className='text-lg text-gray-700 hover:text-indigo-600' to='contact-section' smooth={true} duration={500}>
      Contact
    </ScrollLink>
  </div>
  <div className='md:order-1'>
    <ScrollLink className='' to='home' smooth={true} duration={500}>
      <img className='w-auto mb-1 h-28' src='/images/aklogo.png' alt='Logo' />
    </ScrollLink>
  </div>
</nav>


  );
}

export default Navbar;


