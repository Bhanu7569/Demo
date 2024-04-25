import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { GiHamburgerMenu } from 'react-icons/gi'; // Import GiHamburgerMenu from react-icons/gi
import '../App.css'

const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <nav>
      <div className='logo'>Event Planner</div>
      <div className={show ? "navLinks showmenu" : "navLinks"}>
        <div className='links'>
          <Link to='hero' spy={true} smooth={true} duration={5000}>Home</Link>
          <Link to='services' spy={true} smooth={true} duration={5000}>Services</Link>
          <Link to='contact' spy={true} smooth={true} duration={5000}>Contact</Link>
          <Link to='about' spy={true} smooth={true} duration={5000}>About</Link>
        </div>
      </div>
      <div className='hamburger' onClick={() => setShow(!show)}>
        <GiHamburgerMenu />
      </div>
    </nav>
  );
}

export default Navbar;
