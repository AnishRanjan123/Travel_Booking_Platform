import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header.jsx";
import Home from "./home/Home";
import DetailsPage from "./details/DetailsPage";
import CheckoutPage from "./checkout/CheckoutPage";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  // Data array with all travel destinations
  const travelData = [
    {
      id: 1,
      title: "River Spot",
      location: "Leh",
      imageSrc: "https://images.pexels.com/photos/158063/bellingrath-gardens-alabama-landscape-scenic-158063.jpeg",
      price: 999,
    },
    {
      id: 2,
      title: "Kayaking",
      location: "Coorg",
      imageSrc: "https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg",
      price: 999,
    },
    {
      id: 3,
      title: "Wildlife Tour",
      location: "Sundarban",
      imageSrc: "https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg",
      price: 999,
    },
    {
      id: 4,
      title: "Mountain Trek",
      location: "Manali",
      imageSrc: "https://images.pexels.com/photos/1694621/pexels-photo-1694621.jpeg",
      price: 999,
    },
    {
      id: 5,
      title: "City Lights",
      location: "Bangalore",
      imageSrc: "https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg",
      price: 999,
    },
    {
      id: 6,
      title: "Kayaking",
      location: "Coorg",
      imageSrc: "https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg",
      price: 999,
    },
  ];

  // Filter logic — filters cards by name (title) and place (location)
  const filteredData = travelData.filter((item) => {
    const searchLower = searchTerm.toLowerCase();
    const titleMatch = item.title?.toLowerCase().includes(searchLower);
    const locationMatch = item.location?.toLowerCase().includes(searchLower);
    return titleMatch || locationMatch;
  });

  return (
    <Router>
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} filteredData={filteredData} />
      <Routes>
        <Route path="/" element={<Home searchTerm={searchTerm} filteredData={filteredData} />} />
        <Route path="/details" element={<DetailsPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
