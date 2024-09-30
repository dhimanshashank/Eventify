import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { StoreContext } from "../../context/StoreContext";  // Assuming you manage token and user in StoreContext

const Navbar = ({ setShowLogin, user, setUser }) => {
  const { token, logout } = useContext(StoreContext);  // Assuming StoreContext manages token
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleAuthClick = () => {
    setShowLogin(true);
    setMenuOpen(false);
  };

  const handleLogout = () => {
    logout();
    setUser(null);  // Clear user on logout
    setMenuOpen(false);
  };

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
          <li>
            <Link to="/events" onClick={() => setMenuOpen(false)}>
              Events
            </Link>
          </li>
          <li>
            <Link to="/services" onClick={() => setMenuOpen(false)}>
              Services
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setMenuOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
          </li>
          {!user && (
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
        {user ? (
          <>
            <div className="user-info">
              <span className="username">{user.name}</span>
              <button
                onClick={handleLogout}
                className="login-signup-btn desktop-login Cinzel"
              >
                Logout
              </button>
            </div>
          </>
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
