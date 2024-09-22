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
            <form method="POST" action="/login">
              <input type="email" placeholder="Email" required />
              <input type="password" placeholder="Password" required />
              <button type="submit" className='login-btn'>Login</button>
              <button>Login with Google <span><img src="https://cdn-icons-png.flaticon.com/128/300/300221.png" alt="" /></span></button>
            </form>
            <p>Don't have an account? <span onClick={handleToggleView}>Sign up</span></p>
          </div>
        ) : (
          <div className="signup-form">
            <h2>Sign Up</h2>
            <form method="POST" action="/register">
              <input type="text" placeholder="Username" required />
              <input type="email" placeholder="Email" required />
              <input type="tel" placeholder="Phone" />
              <input type="password" placeholder="Password" required />
              <input type="password" placeholder="Confirm Password" required />
              <button type="submit" className='login-btn'>Sign Up</button>
            </form>
            <p>Already have an account? <span onClick={handleToggleView}>Login</span></p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginSignupPopup;