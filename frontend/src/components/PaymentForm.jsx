// src/components/PaymentForm.jsx

import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useLocation } from "react-router-dom";
import axios from "axios";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const location = useLocation();
  const [amount] = useState(location.state?.amount || 0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setIsProcessing(true);
    setPaymentError(null);
    setPaymentSuccess(false);

    try {
      const { data } = await axios.post("https://eventify-7b8y.onrender.com/api/payment", { amount });

      const result = await stripe.confirmCardPayment(data.clientSecret, {
        payment_method: { card: elements.getElement(CardElement) },
      });

      if (result.error) {
        setPaymentError(result.error.message);
      } else if (result.paymentIntent.status === "succeeded") {
        setPaymentSuccess(true);
      }
    } catch (error) {
      setPaymentError("Payment failed. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="max-w-lg w-full bg-white rounded-lg shadow-lg p-8 space-y-6"
      >
        <h2 className="text-3xl font-bold text-center text-gray-800">Secure Payment</h2>
        <p className="text-center text-xl text-gray-600 mb-4">Amount: ₹{amount}</p>

        <div className="p-4 border border-gray-300 rounded-lg">
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "18px",
                  color: "#424770",
                  "::placeholder": { color: "#a0aec0" },
                },
                invalid: { color: "#e53e3e" },
              },
            }}
            className="p-2"
          />
        </div>

        {paymentError && (
          <div className="text-red-500 text-center mt-2">{paymentError}</div>
        )}
        {paymentSuccess && (
          <div className="text-green-500 text-center mt-2">Payment successful!</div>
        )}

        <button
          type="submit"
          disabled={!stripe || isProcessing}
          className={`w-full py-3 rounded-lg font-semibold text-white transition-colors duration-300 ${
            isProcessing ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {isProcessing ? "Processing..." : "Pay Now"}
        </button>
      </form>
    </div>
  );
};

const PaymentFormWrapper = () => (
  <Elements stripe={stripePromise}>
    <PaymentForm />
  </Elements>
);

export default PaymentFormWrapper;
