import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import { useAuth } from '../context/AuthContext';
import { toast } from 'react-toastify';
import { FaExclamationTriangle } from 'react-icons/fa';

const BillDetails = () => {
  const { id } = useParams();
  const [bill, setBill] = useState(null);
  const [paid, setPaid] = useState(false);
  const { balance, setBalance, user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) return;

    fetch('/bills.json')
      .then(res => res.json())
      .then(data => {
        const foundBill = data.find(b => b.id === parseInt(id));
        if (foundBill) {
          setBill(foundBill);
          const paidBills = JSON.parse(localStorage.getItem('paidBills')) || [];
          setPaid(paidBills.includes(foundBill.id));
        } else {
          setBill(false);
        }
      })
      .catch(() => {
        setBill(false);
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

    setTimeout(() => {
      navigate('/bills');
    }, 1000);
  };

  if (bill === null) {
    return (
      <div className="flex justify-center items-center h-[50vh]">
        <span className="loading loading-spinner text-primary w-12"></span>
      </div>
    );
  }

  if (bill === false) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-white">
        <div className="bg-yellow-100 border border-yellow-400 text-yellow-600 px-6 py-4 rounded-lg shadow-lg flex items-center gap-4">
          <FaExclamationTriangle className="text-3xl" />
          <div>
            <h3 className="font-semibold text-lg">Bill Not Found</h3>
            <p className="text-sm">
              We couldn’t find a bill with ID <code>{id}</code>. Please check the URL or try again later.
            </p>
            <Link to="/bills" className="btn btn-sm mt-2 btn-primary">Back to Bills</Link>
          </div>
        </div>
      </div>
    );
  }

  const { bill_type, icon, bill_type_icon, organization, amount, ['due-date']: dueDate } = bill;

  return (
    <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-xl p-6 md:p-10 mt-10 border min-h-[400px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 items-center">
        {/* Left Column: Organization Icon */}
        <div className="relative flex justify-center items-center h-full">
          <img
            src={icon}
            alt={`${organization} logo`}
            className="w-56 md:w-64 h-auto object-contain"
          />
          {bill_type_icon && (
            <div className="absolute bottom-4 right-6 bg-white p-2 rounded-full shadow-lg">
              <img
                src={bill_type_icon}
                alt={`${bill_type} icon`}
                className="w-10 h-10 object-contain"
              />
            </div>
          )}
        </div>

        {/* Right Column: Bill Details */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-gray-800">{organization}</h2>
          <p className="text-lg italic text-gray-500">{bill_type} Bill</p>
          <p className="text-xl font-semibold text-gray-800">
            Amount: <span className="text-black">{amount} BDT</span>
          </p>
          <p className="text-gray-700 text-base">
            Due Date: {format(new Date(dueDate), 'dd MMMM, yyyy')}
          </p>
          <button
            onClick={handlePayment}
            className={`mt-6 w-full md:w-1/2 btn transition-all duration-300 ${
              paid
                ? 'btn-disabled bg-gray-400 text-white cursor-not-allowed'
                : 'bg-green-600 hover:bg-green-700 text-white'
            }`}
          >
            {paid ? 'Already Paid ✅' : 'Pay Bill'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BillDetails;
