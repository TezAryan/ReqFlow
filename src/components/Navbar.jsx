import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assests/logo.png'; // Ensure correct path
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" className="logo" />
        <span className="navbar-title">REQFLOW</span>
      </div>

      <ul className="navbar-links">
        <li>
          <Link to="/login" className="auth-button login-btn">Log In</Link>
        </li>
        <li>
          <Link to="/signup" className="auth-button signup-btn">Sign Up</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
