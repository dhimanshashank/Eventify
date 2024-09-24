import React from 'react';
import './LoginSignupPopup.css';

const LoginSignupPopup = ({ setShowLogin, isLogin, setIsLogin }) => {
  
  const handleToggleView = () => {
    setIsLogin(!isLogin);  // Toggle between login and signup views
  };

  const handleClose = () => {
    setShowLogin(false);  // Close the popup
  };

  return (
    <div className="login-signup-popup">
      <div className="popup-content">
        <button className="close-btn" onClick={handleClose}>X</button>

        {isLogin ? (
          <div className="login-form">
            <h2>Login</h2>
            <form>
              <input type="email" placeholder="Email" required />
              <input type="password" placeholder="Password" required />
              <button type="submit">Login</button>
            </form>
            <p>Don't have an account? <span onClick={handleToggleView}>Sign up</span></p>
          </div>
        ) : (
          <div className="signup-form">
            <h2>Sign Up</h2>
            <form>
              <input type="text" placeholder="Username" required />
              <input type="email" placeholder="Email" required />
              <input type="password" placeholder="Password" required />
              <button type="submit">Sign Up</button>
            </form>
            <p>Already have an account? <span onClick={handleToggleView}>Login</span></p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginSignupPopup;
