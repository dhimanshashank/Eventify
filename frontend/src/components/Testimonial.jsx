import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import TestimonialForm from "./TestimonialForm";

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);
  const formRef = useRef(null); // Reference for TestimonialForm component

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await axios.get(
          "https://eventify-7b8y.onrender.com/api/testimonials"
        );
        setTestimonials(response.data);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };
    fetchTestimonials();
  }, []);

  // Function to format date
  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  // SVG Icon Component
  const ProfileIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="w-4 h-4 text-gray-500 mr-3 ml-2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 14c3.31 0 6-2.69 6-6S15.31 2 12 2 6 4.69 6 8s2.69 6 6 6zm0 2c-3.33 0-10 1.67-10 5v1h20v-1c0-3.33-6.67-5-10-5z"
      />
    </svg>
  );

  // Scroll to form and focus on the first name field
  const handleFeedbackClick = () => {
    formRef.current.scrollIntoView({ behavior: "smooth" });
    // Wait until the scroll is completed, then focus the first name field
    setTimeout(() => {
      const firstNameInput = document.getElementById("firstName");
      if (firstNameInput) {
        firstNameInput.focus();
      }
    }, 500);
  };

  return (
    <section className="py-10 bg-[#FDFDFC] md:py-20 lg:py-24 md:mb-12">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 pb-4 text-gray-800 ExpletusSans text-center w-full">
        What Our Clients Say
      </h2>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto md:gap-8">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial._id}
            className="bg-[#FDFDFC] rounded-lg shadow-md p-6 hover:shadow-xl hover:scale-104 hover:z-10 hover:cursor-pointer transition-shadow duration-400 ease-in-out"
          >
            <div className="flex items-center mb-4">
              <div className="flex items-center mr-2">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`text-lg Cinzel ${
                      i < testimonial.rating
                        ? "text-yellow-500"
                        : "text-gray-300"
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>
              <span className="text-gray-600 ml-2 Urbanist">
                Rating: <b>{testimonial.rating}</b>
              </span>
              <span className="ml-auto text-gray-500 text-sm Urbanist">
                {formatDate(testimonial.date)}
              </span>
            </div>
            <hr className="mb-4" />
            <h4 className="text-xl font-bolder text-gray-800 mb-2 ExpletusSans">
              {testimonial.role}
            </h4>
            <p className="text-gray-600 mb-4 Urbanist text-justify md:font-normal">
              {testimonial.feedback}
            </p>
            <hr className="mb-4" />
            <div className="flex items-center text-gray-700 font-semibold Urbanist">
              <ProfileIcon /> {/* Profile icon */}
              {testimonial.name}
            </div>
          </div>
        ))}
      </div>

      {/* New content between testimonials and form */}
      <div className="my-8 p-4 pb-0 rounded-lg max-w-4xl mx-auto text-center">
        <h3 className="text-3xl font-semibold text-gray-900 ExpletusSans mb-4">
          Want to Share Your Experience?
        </h3>
        <p className="text-gray-600 mb-4 Urbanist text-center">
          We value your feedback and would love to hear about your experience
          with our services. Please click the button below to submit your
          testimonial!
        </p>
      </div>

      {/* Testimonial form with ref */}
      <div ref={formRef}>
        <TestimonialForm />
      </div>

      <div className="w-full pt-8">
        <img src="/assets/img/eventplanning/eventplanningbg.jpg" alt="" className="w-full h-100 object-cover md:object-center"/>
      </div>
    </section>
  );
};

export default Testimonial;
