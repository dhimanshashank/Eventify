// src/components/Profile.jsx

import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Profile = () => {
  const [userData, setUserData] = useState({ username: "", email: "", phoneNumber: "" });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch user data
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get("https://eventify-7b8y.onrender.com/api/profile", {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
        });
        setUserData(response.data);
      } catch (error) {
        toast.error("Failed to load profile data");
      } finally {
        setIsLoading(false);
      }
    };
    fetchUserProfile();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        "https://eventify-7b8y.onrender.com/api/profile",
        { ...userData },
        { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
      );
      toast.success("Profile updated successfully");
    } catch (error) {
      toast.error("Failed to update profile");
    }
  };

  if (isLoading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md border">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Profile</h2>
      <form onSubmit={handleUpdateProfile}>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Username</label>
          <input
            type="text"
            name="username"
            value={userData.username}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Phone Number</label>
          <input
            type="tel"
            name="phoneNumber"
            value={userData.phoneNumber}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-lg"
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default Profile;
