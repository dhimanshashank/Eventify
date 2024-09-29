import React, { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";

const LoginSignupPopup = ({ setShowLogin, isLogin, setIsLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState(""); // Added for signup
  const [error, setError] = useState(""); // Error state for validation
  const [isSignUp, setIsSignUp] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState(""); // Add this line

  const handleToggleView = () => {
    setIsLogin(!isLogin);
  };

  const handleClose = () => {
    setShowLogin(false);
  };

  const handleLoginBtn = async (e) => {
    e.preventDefault(); // Prevent default form submission
    setError("");

    const backendUrl = import.meta.env.VITE_REACT_APP_BACKEND_URL;
    try {
      const response = await fetch(`http://localhost:4000/api/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Login successful!");
        setShowLogin(false); // Close popup on success
      } else {
        setError(data.message || "Login failed");
      }
    } catch (error) {
      console.log("Login error:", error);
      setError("Login failed!");
    }
  };

  const handleGoogleLoginSuccess = async (response) => {
    const { credential } = response;

    try {
      const res = await fetch("/api/auth/google-login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token: credential,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        alert("Google login successful!");
        setShowLogin(false);
      } else {
        setError(data.message || "Google login failed");
      }
    } catch (error) {
      console.log("Google login error:", error);
      setError("Google login failed!");
    }
  };

  const handleGoogleLoginFailure = (error) => {
    console.log("Google login failure:", error);
    setError("Google login failed!");
  };

  const handleSignupBtn = async (e) => {
    e.preventDefault(); // Prevent default form submission
    setError('');

    if (!username || !email || !password || !phoneNumber) { // Update this line
      setError('Please fill in all fields');
      return;
    }

    if (!isValidEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    if (password.length < 8) {
      setError('Password must be at least 8 characters long');
      return;
    }

    if (!isValidPhoneNumber(phoneNumber)) { // Add this block
      setError('Please enter a valid phone number');
      return;
    }

    const backendUrl = import.meta.env.VITE_REACT_APP_BACKEND_URL;
    try {
      const response = await fetch(`http://localhost:4000/api/users/register`, { // Update this line
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: username,
          email,
          password,
          phone:phoneNumber, // Add this line
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Signup successful!");
        setShowLogin(false); // Close popup on success
      } else {
        setError(data.message || "Signup failed");
      }
    } catch (error) {
      console.log("Signup error:", error);
      setError("An error occurred during signup");
    }
  };

  // Helper function to validate email
  const isValidEmail = (email) => {
    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Add this helper function
  const isValidPhoneNumber = (phoneNumber) => {
    // Basic phone number validation regex (adjust as needed)
    const phoneRegex = /^\+?[1-9]\d{1,14}$/;
    return phoneRegex.test(phoneNumber);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="popup-content relative bg-white rounded-xl shadow-lg p-8 w-96 mt-10">
        <button
          className="close-btn absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition duration-300 pr-2"
          onClick={handleClose}
        >
          X
        </button>

        {isLogin ? (
          <div className="login-form">
            <h2 className="font-bold text-3xl text-center mb-6 Cinzel">Login</h2>
            <form className="space-y-4" onSubmit={handleLoginBtn}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black Urbanist"
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black Urbanist"
              />
              {error && <p className="text-red-500">{error}</p>}
              <button
                type="submit"
                className="w-full p-2 bg-black text-white rounded-lg hover:bg-gray-800 transition duration-200 font-bold text-xl Cinzel"
              >
                Login
              </button>
            </form>

            {/* <div className="mt-4 Urbanist">
              <GoogleLogin
                onSuccess={handleGoogleLoginSuccess}
                onError={handleGoogleLoginFailure}
                buttonText="Login with Google"
                theme="outline"
                size="large"
              />
            </div> */}

            <p className="text-center mt-6 text-gray-500 Urbanist">
              Don't have an account?{" "}
              <span
                onClick={handleToggleView}
                className="text-blue-500 cursor-pointer underline hover:text-blue-700 Urbanist"
              >
                Sign up
              </span>
            </p>
          </div>
        ) : (
          <div className="signup-form">
            <h2 className="font-bold text-3xl text-center mb-6 Cinzel">Sign Up</h2>
            <form className="space-y-4" onSubmit={handleSignupBtn}>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                required
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black Urbanist"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black Urbanist"
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black Urbanist"
              />
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Phone Number"
                required
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black Urbanist"
              />
              {error && <p className="text-red-500">{error}</p>}
              <button
                type="submit"
                className="w-full p-2 bg-black text-white rounded-lg hover:bg-gray-800 transition duration-200 font-bold text-xl Cinzel"
              >
                Sign Up
              </button>
            </form>

            <p className="text-center mt-6 text-gray-500 Urbanist">
              Already have an account?{" "}
              <span
                onClick={handleToggleView}
                className="text-blue-500 cursor-pointer underline hover:text-blue-700 Urbanist"
              >
                Login
              </span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginSignupPopup;
