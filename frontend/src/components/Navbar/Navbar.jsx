import React, { useState, useContext } from 'react';
import './Navbar.css';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({ setShowLogin }) => {
  const { token, logout } = useContext(StoreContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleAuthClick = () => {
    setShowLogin(true);
    setMenuOpen(false); // Close the menu once login is clicked
  };

  return (
    <nav className="navbar">
      {/* Centered Brand Name */}
      <div className="navbar-left">
        <h1><a href="#home">EVENTIFY</a></h1>
        <p>Events and Design</p>
      </div>

      {/* Centered Menu Links (hidden on smaller devices) */}
      <div className={`navbar-center ${menuOpen ? 'open' : ''}`}>
        <ul className="nav-links">
          <li><a href="#events">Events</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
          {!token && (
            <li className="login-mobile">
              <button onClick={handleAuthClick} className="login-signup-btn">
                Login
              </button>
            </li>
          )}
        </ul>
      </div>

      {/* Right Side (Login/Logout button + Hamburger for medium and small screens) */}
      <div className="navbar-right">
        {token ? (
          <button onClick={logout} className="login-signup-btn desktop-login">
            Logout
          </button>
        ) : (
          <button onClick={handleAuthClick} className="login-signup-btn desktop-login">
            Login
          </button>
        )}

        {/* Hamburger menu toggle */}
        <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={handleMenuToggle}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
