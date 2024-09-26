import React from "react";
import { SignedIn, SignedOut, UserButton, useUser } from "@clerk/clerk-react";

const Dashboard = () => {
  const { user } = useUser(); // Get user information from Clerk

  return (
    <div className="dashboard">
      {/* Show this section only when user is signed in */}
      <SignedIn>
        <header className="dashboard-header">
          <h1>Welcome to Your Dashboard, {user?.firstName}!</h1>
          <UserButton />
        </header>

        {/* User Details Section */}
        <section className="user-details">
          <h2>Your Profile Information:</h2>
          <ul>
            <li><strong>First Name:</strong> {user?.firstName}</li>
            <li><strong>Last Name:</strong> {user?.lastName}</li>
            <li><strong>Email:</strong> {user?.primaryEmailAddress?.emailAddress}</li>
            <li><strong>Username:</strong> {user?.username || "Not set"}</li>
          </ul>
        </section>

        {/* Example Data Section */}
        <section className="dashboard-data">
          <h2>Data Overview</h2>
          <div className="data-cards">
            <div className="card">
              <h3>Total Events Planned</h3>
              <p>15</p>
            </div>
            <div className="card">
              <h3>Upcoming Events</h3>
              <p>3</p>
            </div>
            <div className="card">
              <h3>Messages from Clients</h3>
              <p>25</p>
            </div>
          </div>
        </section>
      </SignedIn>

      {/* Show this section when user is not signed in */}
      <SignedOut>
        <div className="signed-out">
          <h2>You are not signed in. Please log in to access your dashboard.</h2>
        </div>
      </SignedOut>
    </div>
  );
};

export default Dashboard;
