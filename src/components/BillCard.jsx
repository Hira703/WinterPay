import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';

const BillCard = ({ bill }) => {
  const { id, bill_type, icon, organization, amount, ['due-date']: dueDate } = bill;

  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition duration-300 border border-gray-200">
      <div className="card-body flex flex-col justify-between">
        {/* Icon + Bill Type */}
        <div className="flex items-center gap-4">
          <img src={icon} alt={`${bill_type} icon`} className="w-12 h-12 rounded-full object-cover" />
          <div>
            <h2 className="card-title capitalize text-lg">{bill_type} Bill</h2>
            <p className="text-sm text-gray-500">{organization}</p>
          </div>
        </div>

        {/* Amount & Due Date */}
        <div className="mt-4 space-y-1">
          <p className="text-gray-600">
            <span className="font-semibold">Amount:</span> ৳{amount}
          </p>
          <p className="text-gray-600">
            <span className="font-semibold">Due:</span> {format(new Date(dueDate), 'dd MMM yyyy')}
          </p>
        </div>

        {/* Action */}
        <div className="card-actions justify-end mt-4">
          <Link to={`/bills/${id}`}>
            <button className="btn btn-sm btn-primary">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BillCard;
