import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';

const BillCard = ({ bill }) => {
  const { id, bill_type, icon, organization, amount, ['due-date']: dueDate, type } = bill;
console.log(bill_type)
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
        <div>
          <h2 className="text-xl font-semibold text-gray-800 capitalize">
            {bill_type} Bill
          </h2>
          <p className="text-sm text-gray-500">{organization}</p>
        </div>
      </div>

      {/* Bill Details */}
      <div className="mt-4">
        <p className="text-gray-700">
          <span className="font-medium">Type:</span> {bill_type}
        </p>
        <p className="text-gray-700">
          <span className="font-medium">Amount:</span> ৳{amount}
        </p>
        <p className="text-gray-700">
          <span className="font-medium">Due Date:</span>{' '}
          {format(new Date(dueDate), 'dd MMM yyyy')}
        </p>
      </div>

      {/* Action Button */}
      <div className="mt-6 text-right">
        <Link to={`/bills/${id}`}>
          <button className="btn btn-sm bg-blue-600 text-white hover:bg-blue-700 transition">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BillCard;
