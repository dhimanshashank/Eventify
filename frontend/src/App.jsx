import "./App.css";
import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import LoginSignupPopup from "./components/LoginSignUpPopUp/LoginSignUpPopUp";
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
    <div className="app">
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
    </div>
  );
};

export default App;