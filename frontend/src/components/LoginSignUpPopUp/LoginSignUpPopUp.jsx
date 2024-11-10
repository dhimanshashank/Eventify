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

  const handleLogout = () => {
    setShowLogoutConfirmation(true); // Show confirmation dialog
  };

  const confirmLogout = () => {
    // Clear user data and logout
    localStorage.removeItem("token");
    setLoggedIn(false);
    setShowLogin(true); // Optionally show the login popup after logout
    setShowLogoutConfirmation(false); // Close confirmation dialog
    setShowProfileMenu(false); // Hide profile menu after logout
  };

  const cancelLogout = () => {
    setShowLogoutConfirmation(false); // Close confirmation dialog
  };

  const toggleProfileMenu = () => {
    setShowProfileMenu(!showProfileMenu);
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg w-full max-w-lg relative">
        <button className="absolute top-2 right-2 text-xl" onClick={handleClose}>
          &times;
        </button>
        <h2 className="text-center text-2xl font-semibold mb-4">{isLogin ? "Login" : "Sign Up"}</h2>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        {isLogin ? (
          <form onSubmit={handleLoginBtn}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full p-3 mb-4 border border-gray-300 rounded"
              required
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full p-3 mb-4 border border-gray-300 rounded"
              required
            />
            <button type="submit" className="w-full py-3 bg-blue-500 text-white rounded hover:bg-blue-600">
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
              className="w-full p-3 mb-4 border border-gray-300 rounded"
              required
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full p-3 mb-4 border border-gray-300 rounded"
              required
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full p-3 mb-4 border border-gray-300 rounded"
              required
            />
            <input
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Phone Number"
              className="w-full p-3 mb-4 border border-gray-300 rounded"
              required
            />
            <button type="submit" className="w-full py-3 bg-green-500 text-white rounded hover:bg-green-600">
              Sign Up
            </button>
          </form>
        )}

        <button onClick={handleToggleView} className="w-full mt-4 text-center text-sm text-blue-500">
          {isLogin ? "Don't have an account? Sign up" : "Already have an account? Log in"}
        </button>
      </div>

      {/* Sidebar for profile and logout */}
      {user && !isLogin && (
        <div className="fixed top-0 right-0 bg-gray-100 p-4 shadow-lg w-64 h-full overflow-y-auto">
          <h3 className="text-lg font-semibold mb-4">Welcome, {user.username}</h3>

          {/* Profile Button */}
          <div onClick={toggleProfileMenu} className="cursor-pointer py-2 px-4 bg-blue-500 text-white rounded-full flex items-center justify-center hover:bg-blue-600">
            <img src="https://via.placeholder.com/40" alt="Profile" className="rounded-full" />
          </div>

          {/* Profile Menu */}
          {showProfileMenu && (
            <div className="bg-white shadow-lg p-4 mt-2 rounded w-full">
              <button
                onClick={() => {}}
                className="w-full text-left py-2 text-blue-600"
              >
                My Profile
              </button>
              <button
                onClick={handleLogout}
                className="w-full text-left py-2 text-red-600"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      )}

      {/* Logout Confirmation Dialog */}
      {showLogoutConfirmation && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
          <div className="bg-white p-6 rounded-lg max-w-sm text-center">
            <p className="text-lg mb-4 Urbanist">Are you sure you want to logout?</p>
            <button
              onClick={confirmLogout}
              className="w-full py-2 bg-green-500 text-white rounded hover:bg-green-600 mb-2"
            >
              Yes, Logout
            </button>
            <button
              onClick={cancelLogout}
              className="w-full py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginSignupPopup;
