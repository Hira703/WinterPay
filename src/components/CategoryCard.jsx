// CategoryCard.jsx
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
      className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow transform hover:scale-105 cursor-pointer"
      onClick={handleClick}
    >
      <figure className="p-6">
        <img
          src={category.image}
          alt={category.category}
          className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
        />
      </figure>
      <div className="card-body text-center">
        <h3 className="text-xl font-semibold text-gray-800">{category.category}</h3>
      </div>
    </div>
  );
};

export default CategoryCard;
