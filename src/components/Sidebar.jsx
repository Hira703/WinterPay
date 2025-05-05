import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom"; // For navigation links

const Sidebar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch("/categories.json");
      const data = await response.json();
      setCategories(data);
    };

    fetchCategories();
  }, []);

  return (
    <div className="sticky top-0 w-64 bg-gray-200 h-screen p-5 shadow-lg">
   
    </div>
  );
};

export default Sidebar;
