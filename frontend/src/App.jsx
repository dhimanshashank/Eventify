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

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const location = useLocation();

  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_REACT_APP_GOOGLE_CLIENT_ID}>
      <div className="app relative">
        <Navbar setShowLogin={setShowLogin} />

        {showLogin && (
          <LoginSignupPopup
            setShowLogin={setShowLogin}
            isLogin={isLogin}
            setIsLogin={setIsLogin}
          />
        )}

        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
        </Routes>

        <Footer />

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/8847680989"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-10 right-12 bg-green-500 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
        >
          <i className="fab fa-whatsapp text-5xl"></i>
        </a>
      </div>
    </GoogleOAuthProvider>
  );
};

export default App;
