// Navbar.js
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className="nav">
      <Link to='/' className="nav__brand">
        LumosLore
      </Link>
      <ul className={`nav__menu ${isActive ? 'active' : ''}`}>
        <li className="nav__item">
          <Link to='/' className="nav__link">Home</Link>
        </li>
        <li className="nav__item">
          <Link to='/' className="nav__link">About Us</Link>
        </li>
        <li className="nav__item">
          <Link to='/login' className="nav__link">Login</Link>
        </li>
        <li className="nav__item">
          <Link to='/signup' className="nav__link">Register</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
