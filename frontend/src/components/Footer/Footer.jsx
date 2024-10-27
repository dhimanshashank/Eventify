import React, { useState } from "react";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventDescription: ""
  });

  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch("http://localhost:4000/api/feedback", {  // Use the full backend URL
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
  
      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          eventDescription: ""
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    }
  };
  

  return (
    <footer className="bg-white pt-5 pb-0" id="contact">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col lg:flex-row justify-between py-14">
        
        {/* Contact Form Section */}
        <div className="lg:w-2/5 mb-12 lg:mb-0 contact-form">
          <h2 className="text-4xl font-semibold text-gray-900 ExpletusSans">CONTACT US</h2>
          <p className="text-gray-700 mt-2 mb-6 Urbanist">
            Fill out the form below and we will be in contact shortly.
          </p>
          <form onSubmit={handleSubmit}>
            <input
              className="w-full p-4 mb-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-500"
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              className="w-full p-4 mb-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-500"
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              className="w-full p-4 mb-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-500"
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <textarea
              className="w-full p-4 mb-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-500"
              name="eventDescription"
              placeholder="Describe Your Event"
              rows="4"
              value={formData.eventDescription}
              onChange={handleChange}
              required
            ></textarea>

            <button
              type="submit"
              className="w-full p-3 bg-black text-white rounded-md hover:bg-gray-800 transition-colors duration-300 ExpletusSans"
            >
              SEND
            </button>
          </form>
          {submitStatus === "success" && <p className="mt-4 text-green-600">Form submitted successfully!</p>}
          {submitStatus === "error" && <p className="mt-4 text-red-600">There was an error submitting the form.</p>}
        </div>

        {/* Logo and Social Links Section */}
        <div className="lg:w-2/5 flex flex-col items-center lg:items-start">
          {/* Logo */}
          <img
            src="/assets/favicon.jpg"
            alt="Eventify Logo"
            className="w-24 h-24 rounded-full mb-6 mt-8 lg:mt-0 md:w-32 md:h-32 lg:w-48 lg:h-48"
          />
          
          {/* Address and Social Links */}
          <address className="text-gray-700 not-italic mb-6 text-center lg:text-left">
            <p className="Urbanist mb-2">123 Event Street, Ludhiana, Punjab</p>
            <p className="Urbanist mb-2">Phone: +91 88476 80989</p>
            <p className="Urbanist">Email: youreventify@google.com</p>
          </address>
          
          {/* Social Icons */}
          <div className="social-icons flex space-x-4 mt-6">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <i className="fab fa-facebook-f text-gray-900 text-3xl hover:transform hover:scale-105 transition duration-300 hover:text-blue-500"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <i className="fab fa-instagram text-gray-900 text-3xl hover:transform hover:scale-105 transition duration-300 hover:text-pink-500"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <i className="fab fa-twitter text-gray-900 text-3xl hover:transform hover:scale-105 transition duration-300 hover:text-blue-400"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <p className="text-white mt-12 text-center bg-black py-4 Urbanist">
        © 2024 Eventify. All rights reserved. | Terms of Service
      </p>
    </footer>
  );
};

export default Footer;
