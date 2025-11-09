import React from "react";
import SearchFilter from "./SearchFilter";

const Home = ({ searchTerm, filteredData }) => {
  return <SearchFilter filteredData={filteredData} />;
};

export default Home;

