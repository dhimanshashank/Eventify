import React, { useState } from "react";
import { toast } from "react-toastify";

const LoginSignupPopup = ({ setShowLogin, isLogin, setIsLogin, onLogin, user, setLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");
  const [showLogoutConfirmation, setShowLogoutConfirmation] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const handleToggleView = () => {
    setIsLogin(!isLogin);
  };

  const confirmPassword = () => {
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      toast.error("Passwords do not match");
      return false;
    }
    return true;
  };

  const handleClose = () => {
    setShowLogin(false);
  };

  const handleLoginBtn = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch(
        `https://eventify-7b8y.onrender.com/api/users/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        toast.success("Login successful!");
        onLogin(data); // Update the global state with user data
        setShowLogin(false);
      } else {
        setError(data.message || "Login failed");
        toast.error(data.message || "Login failed");
      }
    } catch (error) {
      console.log("Login error:", error);
      setError("Login failed!");
      toast.error("Login failed!");
    }
  };

  const handleSignupBtn = async (e) => {
    e.preventDefault();
    setError("");

    if (!username || !email || !password || !phoneNumber) {
      setError("Please fill in all fields");
      toast.error("Please fill in all fields");
      return;
    }

    if (!isValidEmail(email)) {
      setError("Please enter a valid email address");
      toast.error("Please enter a valid email address");
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters long");
      toast.error("Password must be at least 8 characters long");
      return;
    }

    if (!isValidPhoneNumber(phoneNumber)) {
      setError("Please enter a valid phone number");
      toast.error("Please enter a valid phone number");
      return;
    }

    try {
      const response = await fetch(
        `https://eventify-7b8y.onrender.com/api/users/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            email,
            password,
            phoneNumber,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        toast.success("Signup successful!");
        setIsLogin(true); // Switch to login view after successful signup
      } else {
        setError(data.message || "Signup failed");
        toast.error(data.message || "Signup failed");
      }
    } catch (error) {
      console.log("Signup error:", error);
      setError("Signup failed!");
      toast.error("Signup failed!");
    }
  };

  const isValidEmail = (email) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  const isValidPhoneNumber = (phoneNumber) => /^[0-9]{10}$/.test(phoneNumber);

  const confirmLogout = () => {
    // Clear user data and logout
    localStorage.removeItem("token");
    setLoggedIn(false);
    setShowLogin(true); // Optionally show the login popup after logout
    setShowLogoutConfirmation(false); // Close confirmation dialog
    setShowProfileMenu(false); // Hide profile menu after logout
  };

  const toggleProfileMenu = () => {
    setShowProfileMenu(!showProfileMenu);
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-20 flex items-center justify-center z-10 mt-16">
      <div className="bg-white p-8 rounded-xl w-full max-w-lg relative w-full max-w-md mx-auto">
        <button className="absolute top-6 right-8 text-gray-600 text-2xl" onClick={handleClose}>
          &times;
        </button>
        <h2 className="text-center text-3xl font-bold mb-4 Cinzel">{isLogin ? "Login" : "Sign Up"}</h2>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        {isLogin ? (
          <form onSubmit={handleLoginBtn}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-black focus:border-black Urbanist"
              required
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-black focus:border-black Urbanist"
              required
            />
            <button type="submit" className="w-full py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 Cinzel text-2xl font-bold">
              Login
            </button>
          </form>
        ) : (
          <form onSubmit={handleSignupBtn}>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-black focus:border-black Urbanist"
              required
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-black focus:border-black Urbanist"
              required
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-black focus:border-black Urbanist"
              required
            />
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => confirmPassword(e.target.value)}
              placeholder="Confirm Password"
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-black focus:border-black Urbanist"
              required
            />
            <input
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Phone Number"
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-black focus:border-black Urbanist"
              required
            />
            <button type="submit" className="w-full py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 Cinzel text-2xl font-bold">
              Sign Up
            </button>
          </form>
        )}

        <button onClick={handleToggleView} className="w-full mt-4 text-center text-md text-gray-600">
          {isLogin ? "Don't have an account? Sign up" : "Already have an account? Log in"}
        </button>
      </div>

      {/* Sidebar for profile and logout */}
      {user && !isLogin && (
        <div className="fixed top-0 right-0 bg-gray-100 p-4 shadow-lg w-64 h-full overflow-y-auto">
          <h3 className="text-lg font-semibold mb-4">Welcome, {user.username}</h3>

          {/* Profile Button */}
          <div onClick={toggleProfileMenu} className="cursor-pointer py-2 px-4 bg-blue-500 text-white rounded-full flex items-center justify-center hover:bg-blue-600">
            <img src="../../public/img/profileImage.png" alt="Profile" className="rounded-full" />
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginSignupPopup;
