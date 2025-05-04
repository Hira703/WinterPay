import React, { useState, useEffect } from 'react';
import BillCard from '../components/BillCard';

const Bills = () => {
  const [bills, setBills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch JSON data
  useEffect(() => {
    fetch('/bills.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch bills.');
        }
        return response.json();
      })
      .then((data) => {
        setBills(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching bills:', err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center py-10 text-blue-600 font-semibold">Loading...</div>;
  if (error) return <div className="text-center py-10 text-red-600 font-semibold">{error}</div>;
  if (bills.length === 0) return <div className="text-center py-10 text-gray-600">No bills found.</div>;

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {bills.map((bill) => (
        <BillCard key={bill.id} bill={bill} />
      ))}
    </div>
  );
};

export default Bills;
