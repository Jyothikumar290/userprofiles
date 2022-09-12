import React from 'react';
import NavbarStyle from '../styles/Navbar.module.css';

const Navbar = () => {
  return (
    <div>
      <ul className={NavbarStyle.ul}>
        <li className={NavbarStyle.li}><a href='/'>Home</a></li>
        <li className={NavbarStyle.li}><a href='./contact'>Contact</a></li>
      </ul>
    </div>
  )
}

export default Navbar
