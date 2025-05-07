import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import BillCard from '../components/BillCard';
import Sidebar from '../components/Sidebar'; // Optional if you still want to keep the sidebar

const Bills = () => {
  const [bills, setBills] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filteredBills, setFilteredBills] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const billsRes = await fetch('/bills.json');
        const billsData = await billsRes.json();

        const categoriesRes = await fetch('/categories.json');
        const categoriesData = await categoriesRes.json();

        setBills(billsData);
        setCategories(["All", ...categoriesData.map(cat => cat.category)]);
        setFilteredBills(billsData);
        setLoading(false);
      } catch (err) {
        console.error("Error loading data", err);
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setActiveCategory(category);
    if (category === "All") {
      setFilteredBills(bills);
    } else {
      const filtered = bills.filter(
        (bill) => bill.bill_type.toLowerCase() === category.toLowerCase()
      );
      setFilteredBills(filtered);
    }
  };

  if (loading) return <div className="text-center py-10">Loading...</div>;

  return (
    <div className="p-4 space-y-6">
      <Helmet>
        <title>{activeCategory === "All" ? "All Bills" : `${activeCategory} Bills`} | BillPay</title>
        <meta
          name="description"
          content={`View and manage your ${
            activeCategory === "All" ? "bills" : `${activeCategory.toLowerCase()} bills`
          } on BillPay.`}
        />
      </Helmet>

      {/* Dropdown Filter */}
      <div className="max-w-xs">
        <label className="block mb-2 text-sm font-medium text-gray-700">Filter by Bill Type:</label>
        <select
          value={activeCategory}
          onChange={handleCategoryChange}
          className="select select-bordered w-full"
        >
          {categories.map((cat, index) => (
            <option key={index} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      {/* Bill Grid */}
      <div>
        <h2 className="text-2xl font-bold mb-4">
          {activeCategory === "All" ? "All Bills" : `${activeCategory} Bills`}
        </h2>
        {filteredBills.length === 0 ? (
          <p className="text-gray-500">No bills found.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredBills.map((bill) => (
              <BillCard key={bill.id} bill={bill} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Bills;
