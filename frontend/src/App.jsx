import { GoogleOAuthProvider } from "@react-oauth/google";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css";
import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import LoginSignupPopup from "./components/LoginSignUpPopUp/LoginSignupPopup";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";
import Events from "./pages/Events";
import Services from "./pages/Services";
import About from "./pages/AboutUs";
import Profile from "./pages/Profile";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false); // New state to track login status
  const location = useLocation();

  const handleUserLogin = (userData) => {
    setUser(userData); // Set the logged-in user data
    setLoggedIn(true); // Update loggedIn state to true
    setShowLogin(false); // Close the login/signup popup

    // Store token in localStorage
    localStorage.setItem("token", userData.token);
  };

  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_REACT_APP_GOOGLE_CLIENT_ID}>
      <div className="app relative">
        {/* Navbar */}
        <Navbar setShowLogin={setShowLogin} loggedIn={loggedIn} setLoggedIn={setLoggedIn} user={user} />

        {/* Login/Signup Popup */}
        {showLogin && (
          <LoginSignupPopup
            setShowLogin={setShowLogin}
            isLogin={isLogin}
            setIsLogin={setIsLogin}
            onLogin={handleUserLogin} // Pass handleUserLogin function to update user and loggedIn state
          />
        )}

        {/* Main Routes */}
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events setShowLogin={setShowLogin} loggedIn={loggedIn}/>} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>

        {/* Footer */}
        <Footer />

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/+918847680989"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-10 right-12 bg-green-500 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out shadow-green-300/30 z-50 animate-pulse"
        >
          <i className="fab fa-whatsapp text-5xl"></i>
        </a>

        {/* ToastContainer for notifications */}
        <ToastContainer
          position="top-right"
          autoClose={3500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </GoogleOAuthProvider>
  );
};

export default App;
