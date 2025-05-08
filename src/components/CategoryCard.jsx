import React from "react";
import { useNavigate } from "react-router-dom";

const CategoryCard = ({ category }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to the bills page, possibly filtered by the category
    navigate(`/bills?category=${category.category}`);
  };

  return (
    <div
      className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-shadow transform hover:scale-105 cursor-pointer"
      onClick={handleClick}
    >
      <figure className="p-6">
        <img
          src={category.image}
          alt={category.category}
          className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
        />
      </figure>
      <div className="card-body text-center p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{category.category}</h3>
        <p className="text-sm text-gray-600">
          {/* Highlight service provider names */}
          {category.service_providers.map((provider, index) => (
            <span
              key={index}
              className="font-semibold text-cyan-600" // Highlight style
            >
              {provider}
              {index < category.service_providers.length - 1 && ", "}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default CategoryCard;
