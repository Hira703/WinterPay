import React, { useState, useEffect } from "react";
import CategoryCard from "../components/CategoryCard";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch categories data from the public folder
    fetch("/categories.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch categories.");
        }
        return response.json();
      })
      .then((data) => {
        setCategories(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-center text-gray-600">Loading categories...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  return (
    <div className="container mx-auto px-4 py-10">
      {/* Section Title */}
      <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-8 text-blue-900">
        Choose Your Utility Category
      </h2>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
