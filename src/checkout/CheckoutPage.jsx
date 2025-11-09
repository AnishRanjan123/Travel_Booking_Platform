import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const CheckoutPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const bookingData = location.state?.bookingData || {
    activity: {
      title: "Kayaking",
      price: 999,
    },
    date: "Oct 22",
    time: "9:00 am",
    quantity: 1,
    subtotal: 999,
    taxes: 59,
    total: 1058,
  };

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [promoCode, setPromoCode] = useState("");
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  // Convert date format from "Oct 22" to "2025-10-22"
  const formatDate = (dateStr) => {
    const monthMap = {
      "Oct": "10",
      "Nov": "11",
      "Dec": "12",
      "Jan": "01",
      "Feb": "02",
      "Mar": "03",
      "Apr": "04",
      "May": "05",
      "Jun": "06",
      "Jul": "07",
      "Aug": "08",
      "Sep": "09",
    };
    const parts = dateStr.split(" ");
    const month = monthMap[parts[0]] || "10";
    const day = parts[1] || "22";
    return `2025-${month}-${day.padStart(2, "0")}`;
  };

  const handleApplyPromo = (e) => {
    e.preventDefault();
    // Promo code logic can be added here
    alert("Promo code applied!");
  };

  const handlePayAndConfirm = () => {
    if (!fullName || !email) {
      alert("Please fill in all required fields");
      return;
    }
    if (!agreedToTerms) {
      alert("Please agree to the terms and safety policy");
      return;
    }
    alert(`Payment confirmed! Booking for ${bookingData.activity.title} is complete.`);
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Back button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-700 hover:text-gray-900 mb-6"
        >
          <span className="text-2xl mr-2">←</span>
          <span className="text-lg font-medium">Checkout</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Section - User Details Form */}
          <div className="lg:col-span-2">
            <div className="bg-gray-100 rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">User Details</h2>

              <form className="space-y-6">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                    Full name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Your name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                </div>

                {/* Promo Code */}
                <div>
                  <label htmlFor="promoCode" className="block text-sm font-medium text-gray-700 mb-2">
                    Promo code
                  </label>
                  <div className="flex gap-3">
                    <input
                      type="text"
                      id="promoCode"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      placeholder="Enter promo code"
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    />
                    <button
                      type="button"
                      onClick={handleApplyPromo}
                      className="px-6 py-2 bg-gray-800 hover:bg-gray-900 text-white font-medium rounded-lg transition-colors"
                    >
                      Apply
                    </button>
                  </div>
                </div>

                {/* Terms and Conditions */}
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="terms"
                    checked={agreedToTerms}
                    onChange={(e) => setAgreedToTerms(e.target.checked)}
                    className="mt-1 mr-3 w-4 h-4 text-amber-500 border-gray-300 rounded focus:ring-amber-500"
                  />
                  <label htmlFor="terms" className="text-sm text-gray-700">
                    I agree to the terms and safety policy
                  </label>
                </div>
              </form>
            </div>
          </div>

          {/* Right Section - Booking Summary */}
          <div className="lg:col-span-1">
            <div className="bg-gray-100 rounded-lg p-6 shadow-sm sticky top-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Booking Summary</h2>

              <div className="space-y-4">
                {/* Experience */}
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Experience</span>
                  <span className="font-semibold text-gray-900">{bookingData.activity.title}</span>
                </div>

                {/* Date */}
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Date</span>
                  <span className="font-semibold text-gray-900">{formatDate(bookingData.date)}</span>
                </div>

                {/* Time */}
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Time</span>
                  <span className="font-semibold text-gray-900">{bookingData.time}</span>
                </div>

                {/* Quantity */}
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Qty</span>
                  <span className="font-semibold text-gray-900">{bookingData.quantity}</span>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-300 pt-4"></div>

                {/* Subtotal */}
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Subtotal</span>
                  <span className="font-semibold text-gray-900">₹{bookingData.subtotal}</span>
                </div>

                {/* Taxes */}
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Taxes</span>
                  <span className="font-semibold text-gray-900">₹{bookingData.taxes}</span>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-300 pt-4"></div>

                {/* Total */}
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-gray-900">Total</span>
                  <span className="text-lg font-bold text-gray-900">₹{bookingData.total}</span>
                </div>
              </div>

              {/* Pay and Confirm Button */}
              <button
                onClick={handlePayAndConfirm}
                className="w-full mt-6 py-3 bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold rounded-lg transition-colors shadow-sm"
              >
                Pay and Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;

