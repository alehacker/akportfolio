import React from 'react';
import { Link } from 'react-router-dom';
import '../Navbar.css';

function Navbar() {
  return (
    <nav className='navbar'>
      <div className='navbar-left'>
        <Link className='navbar-link' to='about-section' smooth={true} duration={500}>
          About
        </Link>
        <Link className='navbar-link' to='projects-section' smooth={true} duration={500}>
          Projects
        </Link>
        <Link className='navbar-link' to='contact-section' smooth={true} duration={500}>
          Contact
        </Link>
      </div>
      <div className='navbar-right'>
        <Link className='navbar-logo-link' to='/'>
          <img className='navbar-logo' src='../../public/images/aklogo.png' alt='Logo' />
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;

