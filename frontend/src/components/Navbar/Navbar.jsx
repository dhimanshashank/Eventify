import React, { useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom"; // Import useLocation
import "./Navbar.css";
import { StoreContext } from "../../context/StoreContext";

const Navbar = ({ setShowLogin }) => {
  const { token, logout } = useContext(StoreContext); // Assuming StoreContext manages token
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); // Get the current location

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleAuthClick = () => {
    setShowLogin(true);
    setMenuOpen(false);
  };

  // Helper function to add "active" class based on the current path
  const isActive = (path) => location.pathname === path ? "active" : "";

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1>
          <Link to="/">EVENTIFY</Link>
        </h1>
        <p>Events and Design</p>
      </div>

      <div className={`navbar-center ${menuOpen ? "open" : ""}`}>
        <ul className="nav-links">
          <li className={isActive("/events")}>
            <Link to="/events" onClick={() => setMenuOpen(false)}>
              Events
            </Link>
          </li>
          <li className={isActive("/services")}>
            <Link to="/services" onClick={() => setMenuOpen(false)}>
              Services
            </Link>
          </li>
          <li className={isActive("/about")}>
            <Link to="/about" onClick={() => setMenuOpen(false)}>
              About
            </Link>
          </li>
          <li className={isActive("/contact")}>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
          </li>
          {!token && (
            <li className="login-mobile">
              <button
                onClick={handleAuthClick}
                className="login-signup-btn Cinzel"
              >
                Login
              </button>
            </li>
          )}
        </ul>
      </div>

      <div className="navbar-right">
        {token ? (
          <button
            onClick={logout}
            className="login-signup-btn desktop-login Cinzel"
          >
            Logout
          </button>
        ) : (
          <button
            onClick={handleAuthClick}
            className="login-signup-btn desktop-login Cinzel"
          >
            Login
          </button>
        )}

        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={handleMenuToggle}
        >
          <span>Events</span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
