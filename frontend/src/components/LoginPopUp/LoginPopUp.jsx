import React, { useState, useContext } from "react";
import axios from "axios"; 
import { StoreContext } from "../../context/StoreContext"; 
import "../../components/LoginPopUp/LoginPopUp.css"; // Ensure your CSS file is linked

const LoginPopUp = ({ setShowLogin }) => {
  const { url, setToken } = useContext(StoreContext);
  const [currState, setCurrState] = useState("Sign Up");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onLogin = async (event) => {
    event.preventDefault();
    let newUrl = `${url}/api/user`;
    newUrl += currState === "Sign Up" ? "/register" : "/login";
  
    try {
      const response = await axios.post(newUrl, data);
  
      if (response.data.success && response.data.data?.token) {
        const token = response.data.data.token;
        setToken(token);
        localStorage.setItem("token", token);
        setShowLogin(false);
      } else {
        alert(response.data.message || "Failed to authenticate.");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("An error occurred during the login process.");
    }
  };

  return (
    <div className="login-popup">
      <form onSubmit={onLogin} className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <button onClick={() => setShowLogin(false)}>&times;</button>
        </div>
        <div className="login-popup-inputs">
          {currState === "Sign Up" && (
            <input
              name="name"
              onChange={onChangeHandler}
              value={data.name}
              type="text"
              placeholder="Your name"
              required
            />
          )}
          <input
            name="email"
            onChange={onChangeHandler}
            value={data.email}
            type="email"
            placeholder="Your email"
            required
          />
          <input
            name="password"
            onChange={onChangeHandler}
            value={data.password}
            type="password"
            placeholder="Password"
            required
          />
        </div>
        <button type="submit">
          {currState === "Sign Up" ? "Create Account" : "Sign In"}
        </button>
        <div className="login-popup-condition">
          <input type="checkbox" required id="termsCheckbox" />
          <p>
            By continuing, I agree to the Terms of Service and Privacy Policy.
          </p>
        </div>
        {currState === "Login" ? (
          <p>
            Create a new account?{" "}
            <span onClick={() => setCurrState("Sign Up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span onClick={() => setCurrState("Login")}>Sign In</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopUp;
