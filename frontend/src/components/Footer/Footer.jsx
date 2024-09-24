import React from "react";
// import "./Footer.css";

const Footer = () => {
  return (
    <footer className="bg-white" id="contact">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col lg:flex-row justify-between py-14">
        {/* Contact Form Section */}
        <div className="lg:w-2/5 mb-12 lg:mb-0 contact-form">
          <h2 className="text-4xl font-semibold text-gray-900 ExpletusSans">CONTACT US</h2>
          <p className="text-gray-700 mt-2 mb-6 Urbanist">
            Fill out the form below and we will be in contact shortly.
          </p>
          <form id="contactForm" action="/submit-form" method="POST">
            <input
              className="w-full p-4 mb-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-500"
              type="text"
              name="name"
              placeholder="Name"
              required
            />
            <input
              className="w-full p-4 mb-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-500"
              type="email"
              name="email"
              placeholder="Email"
              required
            />
            <input
              className="w-full p-4 mb-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-500"
              type="tel"
              name="phone"
              placeholder="Phone"
              required
            />
            <textarea
              className="w-full p-4 mb-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-500"
              name="eventDescription"
              placeholder="Describe Your Event"
              rows="4"
              required
            ></textarea>

            <button
              type="submit"
              className="w-full p-3 bg-gray-900 text-white rounded-md hover:bg-gray-700 transition-colors duration-300 ExpletusSans"
            >
              SEND
            </button>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <p className="text-white mt-12 text-center bg-black py-4 Urbanist">
        © 2024 Eventify. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
