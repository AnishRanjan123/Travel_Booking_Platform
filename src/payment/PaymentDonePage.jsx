import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PaymentDonePage = () => {
  const navigate = useNavigate();
  const [referenceId, setReferenceId] = useState("");

  // Generate a random reference ID on component mount
  useEffect(() => {
    const generateReferenceId = () => {
      const prefix = "BK";
      const randomNum = Math.floor(100000 + Math.random() * 900000);
      return `${prefix}${randomNum}`;
    };
    setReferenceId(generateReferenceId());
  }, []);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        {/* Green Tick Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center">
            <svg
              className="w-12 h-12 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>

        {/* Success Message */}
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Payment Successful!
        </h1>
        <p className="text-gray-600 mb-8">
          Your booking has been confirmed. We've sent a confirmation email to your registered email address.
        </p>

        {/* Reference ID */}
        <div className="bg-gray-100 rounded-lg p-6 mb-8">
          <p className="text-sm text-gray-600 mb-2">Reference ID</p>
          <p className="text-2xl font-bold text-gray-900">{referenceId}</p>
        </div>

        {/* Back to Home Button */}
        <button
          onClick={() => navigate("/")}
          className="w-full py-3 bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold rounded-lg transition-colors shadow-sm"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default PaymentDonePage;

