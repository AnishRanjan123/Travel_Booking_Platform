import React, { useState } from "react";
import Header from "./components/header.jsx";
import SearchFilter from "./home/SearchFilter";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  // Data array with all travel destinations
  const travelData = [
    {
      id: 1,
      title: "River Spot",
      location: "Leh",
      imageSrc: "https://images.pexels.com/photos/158063/bellingrath-gardens-alabama-landscape-scenic-158063.jpeg",
    },
    {
      id: 2,
      title: "Kayaking",
      location: "Coorg",
      imageSrc: "https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg",
    },
    {
      id: 3,
      title: "Wildlife Tour",
      location: "Sundarban",
      imageSrc: "https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg",
    },
    {
      id: 4,
      title: "Mountain Trek",
      location: "Manali",
      imageSrc: "https://images.pexels.com/photos/1694621/pexels-photo-1694621.jpeg",
    },
    {
      id: 5,
      title: "City Lights",
      location: "Bangalore",
      imageSrc: "https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg",
    },
    {
      id: 6,
      title: "Kayaking",
      location: "Coorg",
      imageSrc: "https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg",
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
    <>
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <SearchFilter filteredData={filteredData} />
    </>
  );
}

export default App;
