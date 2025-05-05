import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom"; // For navigation links

const Sidebar = ({ categories, activeCategory, onCategoryClick }) => {
  

  return (
    <div className="bg-base-100 shadow-md rounded-box p-4">
    <h2 className="text-lg font-semibold mb-4">Categories</h2>
    <ul className="menu bg-base-100 rounded-box">
      <li>
        <button
          className={`capitalize ${activeCategory === "All" ? "active font-bold" : ""}`}
          onClick={() => onCategoryClick("All")}
        >
          All
        </button>
      </li>
      {categories.map((category) => (
        <li key={category}>
          <button
            className={`capitalize ${activeCategory === category ? "active font-bold" : ""}`}
            onClick={() => onCategoryClick(category)}
          >
            {category}
          </button>
        </li>
      ))}
    </ul>
  </div>

  );
};

export default Sidebar;
