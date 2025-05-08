import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.png'; // adjust the path if needed

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo-image" />
        </Link>
      </div>
      <div className="nav-links">
        <Link to="/Dialogue">Dialogue</Link>
        <Link to="/form">Form</Link>
        <Link to="/results">Results</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
};

export default Navbar;
