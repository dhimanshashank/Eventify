import React from "react";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

const Login = () => {
  return (
    <header className="login-header">
      {/* Content for Signed In Users */}
      <SignedIn>
        <div className="user-info">
          <h2>Welcome Back!</h2>
          {/* User's Avatar and Options */}
          <UserButton />
        </div>
      </SignedIn>

      {/* Content for Signed Out Users */}
      <SignedOut>
        <div className="login-prompt">
          <h2>Please Sign In</h2>
          <SignInButton>
            <button className="sign-in-btn">Sign In</button>
          </SignInButton>
        </div>
      </SignedOut>
    </header>
  );
};

export default Login;
