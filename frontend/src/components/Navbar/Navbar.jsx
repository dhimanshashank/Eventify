import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";  // You can keep this file for any additional styles if needed
import { toast } from "react-toastify";

const Navbar = ({ setShowLogin, loggedIn, setLoggedIn, user }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showLogoutConfirmation, setShowLogoutConfirmation] = useState(false);
  const location = useLocation();

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleAuthClick = () => {
    console.log("Login button clicked, setting showLogin to true");
    setShowLogin(true); // This triggers the Login/Signup modal
    setMenuOpen(false);
  };

  const handleLogout = () => {
    setShowLogoutConfirmation(true); // Show confirmation dialog
    setShowProfileMenu(false); // Close profile menu if open
  };

  const confirmLogout = () => {
    localStorage.removeItem('token'); // Remove token from localStorage
    toast.success("Logout successful");
    setLoggedIn(false); // Update loggedIn state to false
    setShowLogoutConfirmation(false); // Close confirmation dialog
  };

  const cancelLogout = () => {
    setShowLogoutConfirmation(false); // Close confirmation dialog
  };

  // Helper function to add "active" class based on the current path
  const isActive = (path) => (location.pathname === path ? "active" : "");

  return (
    <nav className="navbar flex p-4 bg-gray-800 text-white">
      <div className="navbar-left flex flex-col justify-center items-center md:flex-row">
        <h1 className="text-2xl font-bold md:text-3xl md:mr-4 Cinzel">
          <Link to="/">EVENTIFY</Link>
        </h1>
        <p className="text-sm font-semibold text-gray-400 md:text-lg">Events and Design</p>
      </div>

      <div className={`navbar-center ${menuOpen ? "block" : "hidden"} md:block`}>
        <ul className="nav-links flex space-x-4">
          <li className={isActive("/events")}>
            <Link to="/events" onClick={() => setMenuOpen(false)} className="hover:text-gray-400">
              Events
            </Link>
          </li>
          <li className={isActive("/about")}>
            <Link to="/about" onClick={() => setMenuOpen(false)} className="hover:text-gray-400">
              About
            </Link>
          </li>
          <li className={isActive("/contact")}>
            <Link to="/contact" onClick={() => setMenuOpen(false)} className="hover:text-gray-400">
              Contact
            </Link>
          </li>
        </ul>
      </div>

      <div className="navbar-right flex items-center space-x-4">
        {loggedIn ? (
          <>
            <div className="relative">
              <img
                src={user?.profileImage || "/assets/img/profileImage.png"}
                alt="Profile"
                className="profile-image rounded-full w-12 h-12 object-cover cursor-pointer md:w-14 md:h-14 md:mr-4 md:ml-4"
                onClick={() => setShowProfileMenu(!showProfileMenu)} // Toggle profile menu
              />
              {/* Profile Menu */}
              {showProfileMenu && (
                <div className="absolute top-18 right-0 bg-white shadow-lg rounded-xl z-10 border w-40">
                  <Link
                    to="/profile"
                    onClick={() => setShowProfileMenu(false)} // Close profile menu after navigation
                    className="block px-4 py-2 text-gray-900 hover:bg-gray-100 hover:bg-gray-200 rounded transition duration-300 ease-in-out Cinzel text-lg font-bold text-center hover:text-black"
                  >
                    Profile
                  </Link>
                  <button onClick={handleLogout} className="w-full text-center bg-red-100 px-4 py-2 text-red-600 hover:bg-red-200 rounded transition duration-300 ease-in-out Cinzel hover:text-red-600 text-lg">
                    Logout
                  </button>
                </div>
              )}
            </div>
          </>
        ) : (
          <button onClick={handleAuthClick} className="login-signup-btn hidden md:block py-2 px-4 bg-black-500 text-white rounded hover:bg-gray-900 transition duration-300 ease-in-out Cinzel">
            Login
          </button>
        )}

        <div className={`hamburger ${menuOpen ? "open" : ""} md:hidden`} onClick={handleMenuToggle}>
          <span className="block w-6 h-1 bg-white mb-1"></span>
          <span className="block w-6 h-1 bg-white mb-1"></span>
          <span className="block w-6 h-1 bg-white"></span>
        </div>
      </div>

      {/* Logout Confirmation Dialog */}
      {showLogoutConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-7 rounded-lg max-w-sm w-full text-center">
            <p className="text-xl mb-4 text-gray-800 Urbanist">Are you sure you want to log out?</p>
            <button onClick={confirmLogout} className="w-full py-2 bg-gray-900 text-white rounded hover:bg-gray-800 transition duration-300 mb-3 Cinzel text-lg">
              Yes, Logout
            </button>
            <button onClick={cancelLogout} className="w-full py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition duration-300 Cinzel text-lg">
              Cancel
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
