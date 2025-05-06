import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import { useAuth } from '../context/AuthContext';
import { toast } from 'react-toastify';
import { FaExclamationTriangle } from 'react-icons/fa';

const BillDetails = () => {
  const { id } = useParams();
  const [bill, setBill] = useState(null); // null: loading, false: not found, or bill data
  const [paid, setPaid] = useState(false);
  const { balance, setBalance, user } = useAuth();
  const navigate = useNavigate();  // To navigate back to the Bills page

  useEffect(() => {
    if (!user) return;

    fetch('/bills.json')
      .then(res => res.json())
      .then(data => {
        const foundBill = data.find(b => b.id === parseInt(id)); // check if ID matches
        if (foundBill) {
          setBill(foundBill);
          const paidBills = JSON.parse(localStorage.getItem('paidBills')) || [];
          setPaid(paidBills.includes(foundBill.id));
        } else {
          setBill(false); // Bill not found
        }
      })
      .catch(() => {
        setBill(false); // Error fetching data
      });
  }, [id, user]);

  const handlePayment = () => {
    if (paid) {
      toast.error("You have already paid this bill!");
      return;
    }

    if (balance < bill.amount) {
      toast.error("Insufficient balance!");
      return;
    }

    setBalance(prev => prev - bill.amount);
    setPaid(true);
    toast.success("Payment Successful!");

    const paidBills = JSON.parse(localStorage.getItem('paidBills')) || [];
    if (!paidBills.includes(bill.id)) {
      paidBills.push(bill.id);
      localStorage.setItem('paidBills', JSON.stringify(paidBills));
    }

    // Redirect to the Bills page after successful payment
    setTimeout(() => {
      navigate('/bills');
    }, 1000); // Delay of 1 second before navigating
  };

  // Loading spinner
  if (bill === null) {
    return (
      <div className="flex justify-center items-center h-[50vh]">
        <span className="loading loading-spinner text-primary w-12"></span>
      </div>
    );
  }

  // Bill not found UI
  if (bill === false) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-white">
        <div className="bg-yellow-100 border border-yellow-400 text-yellow-600 px-6 py-4 rounded-lg shadow-lg flex items-center gap-4">
          <FaExclamationTriangle className="text-3xl" />
          <div>
            <h3 className="font-semibold text-lg">Bill Not Found</h3>
            <p className="text-sm">We couldn’t find a bill with ID <code>{id}</code>. Please check the URL or try again later.</p>
            <Link to="/bills" className="btn btn-sm mt-2 btn-primary">Back to Bills</Link>
          </div>
        </div>
      </div>
    );
  }

  const { bill_type, icon, organization, amount, ['due-date']: dueDate } = bill;

  return (
    <div className="max-w-2xl mx-auto bg-base-100 shadow-lg rounded-xl p-6 mt-10 border border-gray-200">
      <div className="flex flex-col items-center space-y-4">
        <img src={icon} alt={`${bill_type} icon`} className="w-20 h-20 rounded-full object-cover" />
        <h1 className="text-2xl font-bold capitalize">{bill_type} Bill</h1>
        <p className="text-sm text-gray-500">{organization}</p>
        <div className="divider"></div>

        <div className="w-full space-y-2 text-center">
          <p className="text-lg"><span className="font-semibold">Amount:</span> ৳{amount}</p>
          <p className="text-md text-gray-600">
            <span className="font-semibold">Due Date:</span> {format(new Date(dueDate), 'dd MMM yyyy')}
          </p>
        </div>

        <button
          onClick={handlePayment}
          className={`btn mt-6 w-full ${paid ? 'btn-disabled' : 'btn-primary'}`}
        >
          {paid ? 'Already Paid ✅' : 'Pay Now'}
        </button>
      </div>
    </div>
  );
};

export default BillDetails;
