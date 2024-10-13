import { GoogleOAuthProvider } from '@react-oauth/google';
import '@fortawesome/fontawesome-free/css/all.min.css';
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
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [user, setUser] = useState(null);  // New state to track logged-in user
  const location = useLocation();

  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_REACT_APP_GOOGLE_CLIENT_ID}>
      <div className="app relative">
        {/* Navbar */}
        <Navbar setShowLogin={setShowLogin} user={user} setUser={setUser} />  {/* Passing user and setUser */}

        {/* Login/Signup Popup */}
        {showLogin && (
          <LoginSignupPopup
            setShowLogin={setShowLogin}
            isLogin={isLogin}
            setIsLogin={setIsLogin}
            setUser={setUser}  // Pass setUser to LoginSignupPopup
          />
        )}

        {/* Main Routes */}
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/login" element={<Home />} /> */}
        </Routes>

        {/* Footer */}
        <Footer />

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/+918847680989"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-10 right-12 bg-green-500 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
        >
          <i className="fab fa-whatsapp text-5xl"></i>
        </a>

        {/* ToastContainer for notifications */}
        <ToastContainer position="top-right" autoClose={3500} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
      </div>
    </GoogleOAuthProvider>
  );
};

export default App;
