import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const TestimonialForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [headline, setHeadline] = useState("");
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newTestimonial = {
      name: `${firstName} ${lastName}`,
      role: headline,
      feedback,
      rating,
    };

    try {
      await axios.post(
        "https://eventify-7b8y.onrender.com/api/testimonials",
        newTestimonial
      );
      toast.success("Thank you! Your review has been submitted.");
      // Reset form fields
      setFirstName("");
      setLastName("");
      setHeadline("");
      setFeedback("");
      setRating(0);
    } catch (error) {
      toast.error("Error submitting your review. Please try again.");
      console.error("Error:", error);
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md mt-8">
      <h2 className="text-3xl font-semibold text-gray-900 ExpletusSans">
        Write a Review
      </h2>
      <p className="text-gray-600 mb-4 leading-relaxed mt-2 Urbanist">
        Click on star to review
      </p>
      <div className="flex mb-4">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            className={`text-2xl ${
              star <= rating
                ? "text-yellow-500 hover:text-yellow-600"
                : "text-gray-300 hover:text-gray-400"
            }`}
            onClick={() => setRating(star)}
          >
            ★
          </button>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex space-x-4 mb-4">
          <input
            type="text"
            placeholder="First Name"
            className="w-1/2 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-gray-500"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            className="w-1/2 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-gray-500"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Type review headline"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-gray-500"
            value={headline}
            onChange={(e) => setHeadline(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <textarea
            placeholder="Write your Review"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-gray-500"
            rows="4"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition duration-200"
        >
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default TestimonialForm;
