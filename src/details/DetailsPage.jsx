import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const DetailsPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const activity = location.state?.activity || {
    id: 1,
    title: "Kayaking",
    location: "Coorg",
    imageSrc: "https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg",
    price: 999,
  };

  const [selectedDate, setSelectedDate] = useState("Oct 22");
  const [selectedTime, setSelectedTime] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const dates = ["Oct 22", "Oct 23", "Oct 24", "Oct 25", "Oct 26"];
  const timeSlots = [
    { time: "07:00 am", available: 4 },
    { time: "9:00 am", available: 2 },
    { time: "11:00 am", available: 5 },
    { time: "1:00 pm", available: 0, soldOut: true },
  ];

  const basePrice = activity.price || 999;
  const subtotal = basePrice * quantity;
  const taxes = Math.round(subtotal * 0.059);
  const total = subtotal + taxes;

  const handleConfirm = () => {
    if (!selectedTime) {
      alert("Please select a time slot");
      return;
    }
    
    const bookingData = {
      activity,
      date: selectedDate,
      time: selectedTime,
      quantity,
      subtotal,
      taxes,
      total,
    };
    
    navigate("/checkout", { state: { bookingData } });
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
          <span className="text-lg font-medium">Details</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Activity Image */}
            <div className="w-full h-96 rounded-lg overflow-hidden">
              <img
                src={activity.imageSrc}
                alt={activity.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Activity Title */}
            <h1 className="text-3xl font-bold text-gray-900">{activity.title}</h1>

            {/* Description */}
            <p className="text-gray-700 leading-relaxed">
              Curated small-group experience. Certified guide. Safety first with gear included. Helmet and Life jackets along with an expert will accompany in kayaking.
            </p>

            {/* Choose Date Section */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Choose date</h2>
              <div className="flex flex-wrap gap-3">
                {dates.map((date) => (
                  <button
                    key={date}
                    onClick={() => setSelectedDate(date)}
                    className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                      selectedDate === date
                        ? "bg-amber-500 text-white"
                        : "bg-white text-gray-700 border border-gray-300 hover:border-gray-400"
                    }`}
                  >
                    {date}
                  </button>
                ))}
              </div>
            </div>

            {/* Choose Time Section */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Choose time</h2>
              <div className="flex flex-wrap gap-3">
                {timeSlots.map((slot, index) => (
                  <button
                    key={index}
                    onClick={() => !slot.soldOut && setSelectedTime(slot.time)}
                    disabled={slot.soldOut}
                    className={`px-6 py-3 rounded-lg font-medium transition-colors flex flex-col items-center ${
                      slot.soldOut
                        ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                        : selectedTime === slot.time
                        ? "bg-amber-500 text-white"
                        : "bg-white text-gray-700 border border-gray-300 hover:border-gray-400"
                    }`}
                  >
                    <span>{slot.time}</span>
                    {slot.soldOut ? (
                      <span className="text-xs mt-1">Sold out</span>
                    ) : (
                      <span className="text-xs mt-1 opacity-75">{slot.available} left</span>
                    )}
                  </button>
                ))}
              </div>
              <p className="text-sm text-gray-500 mt-3">
                All times are in IST (GMT +5:30)
              </p>
            </div>

            {/* About Section */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">About</h2>
              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="text-gray-700">
                  Scenic routes, trained guides, and safety briefing. Minimum age 10.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Booking Summary */}
          <div className="lg:col-span-1">
            <div className="bg-gray-100 rounded-lg p-6 sticky top-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Booking Summary</h2>

              <div className="space-y-4">
                {/* Starts at */}
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Starts at</span>
                  <span className="font-semibold text-gray-900">₹{basePrice}</span>
                </div>

                {/* Quantity */}
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Quantity</span>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-200"
                    >
                      −
                    </button>
                    <span className="font-semibold text-gray-900 w-8 text-center">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-200"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Subtotal */}
                <div className="flex justify-between items-center pt-4 border-t border-gray-300">
                  <span className="text-gray-700">Subtotal</span>
                  <span className="font-semibold text-gray-900">₹{subtotal}</span>
                </div>

                {/* Taxes */}
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Taxes</span>
                  <span className="font-semibold text-gray-900">₹{taxes}</span>
                </div>

                {/* Total */}
                <div className="flex justify-between items-center pt-4 border-t border-gray-300">
                  <span className="text-lg font-semibold text-gray-900">Total</span>
                  <span className="text-lg font-bold text-gray-900">₹{total}</span>
                </div>
              </div>

              {/* Confirm Button */}
              <button
                onClick={handleConfirm}
                className="w-full mt-6 py-3 bg-amber-500 hover:bg-amber-300 text-gray-900 font-semibold rounded-lg transition-colors"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;

