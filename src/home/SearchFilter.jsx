import React from "react";
import HomePage from "./HomePage";

const SearchFilter = ({ filteredData }) => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      {/* Cards grid section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
        {filteredData.length > 0 ? (
          filteredData.map((item) => (
            <HomePage
              key={item.id}
              title={item.title}
              location={item.location}
              imageSrc={item.imageSrc}
            />
          ))
        ) : (
          <p className="text-gray-500 text-center col-span-3 mt-8">
            No results found.
          </p>
        )}
      </div>
    </div>
  );
};

export default SearchFilter;
