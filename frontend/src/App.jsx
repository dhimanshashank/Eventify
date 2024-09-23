import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import LoginSignupPopup from "./components/LoginSignUpPopUp/LoginSignUpPopUp";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";

const App = () => {
  const [showLogin, setShowLogin] = useState(false); // Manages showing the login/signup popup
  const [isLogin, setIsLogin] = useState(true); // Manages whether we are showing Login or Sign Up

  return (
    <div className="app">
      {/* Pass state and setter for login/signup toggle to Navbar */}
      <Navbar setShowLogin={setShowLogin} />

      {/* Conditionally render Login/Signup popup with state */}
      {showLogin && (
        <LoginSignupPopup
          setShowLogin={setShowLogin}
          isLogin={isLogin}
          setIsLogin={setIsLogin}
        />
      )}

      {/* Other components */}
      <Home />
      <Footer />
    </div>
  );
};

export default App;
