import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import { toast } from "react-toastify";

const Navbar = ({ setShowLogin, loggedIn, setLoggedIn, user }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showLogoutConfirmation, setShowLogoutConfirmation] = useState(false);
  const location = useLocation();
  const profileMenuRef = useRef(null);

  const handleMenuToggle = () => setMenuOpen(!menuOpen);

  const handleAuthClick = () => {
    setShowLogin(true);
    setMenuOpen(false);
  };

  const handleLogout = () => {
    setShowLogoutConfirmation(true);
    setShowProfileMenu(false);
  };

  const confirmLogout = () => {
    localStorage.removeItem("token");
    toast.success("Logout successful");
    setLoggedIn(false);
    setShowLogoutConfirmation(false);
  };

  const cancelLogout = () => setShowLogoutConfirmation(false);

  const isActive = (path) => (location.pathname === path ? "active" : "");

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        profileMenuRef.current &&
        !profileMenuRef.current.contains(event.target)
      ) {
        setShowProfileMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="navbar flex py-4 text-white">
      <div className="navbar-left flex flex-col items-center">
        <h1 className="text-2xl font-bold md:text-3xl md:mr-4 Cinzel">
          <Link to="/">EVENTIFY</Link>
        </h1>
        <p className="text-xl font-bold text-gray-800 md:text-lg Urbanist md:mr-4">
          Events and Design
        </p>
      </div>

      <div className={`navbar-center ${menuOpen ? "open" : ""}`}>
        <ul className="nav-links flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 text-center">
          <li className={isActive("/events")}>
            <Link
              to="/events"
              onClick={() => setMenuOpen(false)}
              className="hover:text-gray-400 Urbanist"
            >
              Events
            </Link>
          </li>
          <li className={isActive("/about")}>
            <Link
              to="/about"
              onClick={() => setMenuOpen(false)}
              className="hover:text-gray-400 Urbanist"
            >
              About
            </Link>
          </li>
          <li className={isActive("/contact")}>
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="hover:text-gray-400 Urbanist"
            >
              Contact
            </Link>
          </li>
          {/* Mobile-only login button */}
          {!loggedIn && (
            <li className="login-mobile">
              <button onClick={handleAuthClick} className="login-button bg-gray-800 hover:bg-gray-700 text-white py-2 px-6 rounded text-lg font-semibold Cinzel">
                Login
              </button>
            </li>
          )}
        </ul>
      </div>

      <div className="navbar-right flex items-center space-x-4">
        {loggedIn ? (
          <div
            className="relative"
            ref={profileMenuRef}
            onMouseLeave={() => setShowProfileMenu(false)}
          >
            <img
              src={user?.profileImage || "/assets/img/profileImage.png"}
              alt="Profile"
              className="profile-image rounded-full w-12 h-12 object-cover cursor-pointer md:w-14 md:h-14 md:mr-4 md:ml-4"
              onClick={() => setShowProfileMenu(!showProfileMenu)}
            />
            {showProfileMenu && (
              <div className="absolute top-18 right-0 bg-white shadow-lg rounded-xl z-10 border w-40">
                <Link
                  to="/profile"
                  onClick={() => setShowProfileMenu(false)}
                  className="block px-4 py-2 text-gray-900 hover:bg-gray-100 rounded transition duration-300 ease-in-out Cinzel text-lg font-bold text-center hover:text-black"
                >
                  My Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className="w-full text-center bg-red-100 px-4 py-2 text-red-600 hover:bg-red-200 rounded transition duration-300 ease-in-out Cinzel text-lg"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          // Desktop-only login button
          <button
            onClick={handleAuthClick}
            className="login-signup-btn hidden md:block login-button bg-gray-800 hover:bg-gray-700 text-white py-2 px-6 rounded text-xl font-semibold Cinzel"
          >
            Login
          </button>
        )}

        <div
          className="hamburger md:hidden cursor-pointer"
          onClick={handleMenuToggle}
        >
          <span
            className={`block w-8 h-1 bg-black mb-2 transition-all ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block w-8 h-1 bg-black mb-2 transition-all ${
              menuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-8 h-1 bg-black mb-2 transition-all ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </div>
      </div>

      {showLogoutConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-7 rounded-lg max-w-sm w-full text-center">
            <p className="text-xl mb-4 text-gray-800 Urbanist">
              Are you sure you want to log out?
            </p>
            <button
              onClick={confirmLogout}
              className="w-full py-2 bg-gray-900 text-white rounded hover:bg-gray-800 transition duration-300 mb-3 Cinzel text-lg"
            >
              Yes, Logout
            </button>
            <button
              onClick={cancelLogout}
              className="w-full py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition duration-300 Cinzel text-lg"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
