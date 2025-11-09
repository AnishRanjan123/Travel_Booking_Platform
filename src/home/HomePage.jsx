import React from "react";

const HomePage = ({
  location = "Udupi",
  imageSrc = "https://images.pexels.com/photos/158063/bellingrath-gardens-alabama-landscape-scenic-158063.jpeg",
  title = "",
}) => {
 
  const description =
    "Curated small-group experience. Certified guide. Safety first with gear included.";
  const price = 999;
  const onViewDetails = () => alert(`View details clicked for ${location}`);

  return (
    <div className="p-6 mt-4 inline-block mx-auto w-fit">
      <article className="max-w-sm bg-white rounded-lg shadow-md overflow-hidden font-sans">
        {/* Image */}
        <div className="h-40 overflow-hidden rounded-t-lg">
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-3 space-y-3">
          <div className="flex items-start justify-between">
            <h3 className="text-xl font-medium text-gray-900">{title}</h3>

            {/* Location badge */}
            <span className="ml-3 inline-block bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-md shadow-sm">
              {location}
            </span>
          </div>

          <p className="text-sm text-gray-600">{description}</p>

          <div className="flex items-center justify-between mt-2">
            <div className="text-sm text-gray-500">
              From
              <div className="text-lg font-semibold text-gray-900">₹{price}</div>
            </div>

            <button
              onClick={onViewDetails}
              className="px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-sm rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-300"
            >
              View Details
            </button>
          </div>
        </div>
      </article>
    </div>
  );
};

export default HomePage;
