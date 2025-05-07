import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { FaCheckCircle } from 'react-icons/fa';
import { useAuth } from '../context/AuthContext'; // make sure this is imported

const BillCard = ({ bill }) => {
  const { id, bill_type, icon, organization, amount, ['due-date']: dueDate } = bill;
  const { user } = useAuth();

  // Check if the bill is paid for this user
  const paidBills = user ? JSON.parse(localStorage.getItem(user.uid)) || [] : [];
  const isPaid = paidBills.includes(id);

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition duration-300 p-6 flex flex-col justify-between">
      {/* Header: Icon + Bill Info */}
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-50">
          <img
            src={icon}
            alt={`${bill_type} icon`}
            className="w-10 h-10 object-contain"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-xl font-semibold text-gray-800 capitalize flex items-center gap-2">
            {bill_type} Bill
            {isPaid && <FaCheckCircle className="text-green-500 text-lg" title="Paid" />}
          </h2>
          <p className="text-sm text-gray-500">{organization}</p>
        </div>
      </div>

      {/* Bill Details */}
      <div className="mt-4 text-gray-700 space-y-1">
        <p>
          <span className="font-medium">Amount:</span> ৳{amount}
        </p>
        <p>
          <span className="font-medium">Due Date:</span>{' '}
          {format(new Date(dueDate), 'dd MMM yyyy')}
        </p>
      </div>

      {/* Action Button */}
      <div className="mt-6 text-right">
        <Link to={`/bills/${id}`}>
          <button className="btn btn-sm bg-blue-600 text-white hover:bg-blue-700 transition">
            Pay Bill
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BillCard;
