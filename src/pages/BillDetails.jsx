import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import { useAuth } from '../context/AuthContext';
import { toast } from 'react-toastify';
import { FaExclamationTriangle } from 'react-icons/fa';
import { Helmet } from 'react-helmet'; // Import Helmet

const BillDetails = () => {
  const { id } = useParams();
  const [bill, setBill] = useState(null);
  const [paid, setPaid] = useState(false);
  const { balance, setBalance, user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) return;

    const userPaidBills = JSON.parse(localStorage.getItem(user.uid)) || [];
    setPaid(userPaidBills.includes(parseInt(id)));

    fetch('/bills.json')
      .then(res => res.json())
      .then(data => {
        const foundBill = data.find(b => b.id === parseInt(id));
        if (foundBill) {
          setBill(foundBill);
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

    const userPaidBills = JSON.parse(localStorage.getItem(user.uid)) || [];
    if (!userPaidBills.includes(bill.id)) {
      userPaidBills.push(bill.id);
      localStorage.setItem(user.uid, JSON.stringify(userPaidBills));
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
    <>
      {/* Helmet to set the page title */}
      <Helmet>
        <title>{organization} - Bill Details</title>
      </Helmet>

      <div className="max-w-4xl mx-auto bg-white p-6 pb-16 rounded-lg shadow-lg mt-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left: Logo */}
          <div className="flex justify-center items-center border p-4">
            <img src={bill_type_icon} alt={`${organization} logo`} className="w-64 object-contain" />
          </div>

          {/* Right: Info */}
          <div className="space-y-2 text-center md:text-left">
            <h2 className="text-xl font-bold text-gray-800">{organization}</h2>
            <p className="text-gray-600 italic">{bill_type} Bill</p>
            <p className="text-base text-gray-700">
              Amount: <span className="font-bold">{amount} BDT</span>
            </p>
            <p className="text-base text-gray-700">
              Due Date: {format(new Date(dueDate), 'dd MMMM, yyyy')}
            </p>
            <button
              onClick={handlePayment}
              disabled={paid}
              className={`mt-4 w-full md:w-1/2 py-2 rounded-md font-semibold transition ${
                paid
                  ? 'bg-gray-400 text-white cursor-not-allowed'
                  : 'bg-green-600 hover:bg-green-700 text-white'
              }`}
            >
              {paid ? 'Already Paid ✅' : 'Pay Bill'}
            </button>
          </div>
        </div>

        {/* Overlapping Icon Fixed */}
        {bill_type_icon && (
          <div className="absolute left-1/2 transform -translate-x-1/2 bottom-4 bg-white shadow-md rounded-full p-2 border">
            <img src={icon} alt="Bill Type Icon" className="w-14 h-14 object-contain" />
          </div>
        )}
      </div>
    </>
  );
};

export default BillDetails;
