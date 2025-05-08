import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import { useAuth } from '../context/AuthContext';
import { toast } from 'react-toastify';
import { FaExclamationTriangle } from 'react-icons/fa';
import { Helmet } from 'react-helmet';

const BillDetails = () => {
  const { id } = useParams();
  const [bill, setBill] = useState(null);
  const [paid, setPaid] = useState(false);
  const [selectedCard, setSelectedCard] = useState('');
  const [showCardSelector, setShowCardSelector] = useState(false);

  const { balance, setBalance, user, cards } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) return;

    const billId = parseInt(id);
    const userPaidBills = JSON.parse(localStorage.getItem(user.uid)) || [];
    setPaid(userPaidBills.includes(billId));

    fetch('/bills.json')
      .then(res => {
        if (!res.ok) {
          throw new Error('Failed to fetch');
        }
        return res.json();
      })
      .then(data => {
        if (!Array.isArray(data)) {
          throw new Error('Invalid format');
        }
        const foundBill = data.find(b => parseInt(b.id) === billId);
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

  const handlePayClick = () => {
    if (paid) {
      toast.error("You have already paid this bill!");
      return;
    }
    setShowCardSelector(true);
  };

  const confirmPayment = () => {
    if (!selectedCard) {
      toast.error("Please select a card!");
      return;
    }

    if (balance < bill.amount) {
      toast.error("Insufficient balance!");
      return;
    }

    setBalance(prev => prev - bill.amount);
    setPaid(true);
    toast.success(`Payment Successful using ${selectedCard}`);

    const userPaidBills = JSON.parse(localStorage.getItem(user.uid)) || [];
    if (!userPaidBills.includes(bill.id)) {
      userPaidBills.push(bill.id);
      localStorage.setItem(user.uid, JSON.stringify(userPaidBills));
    }

    setShowCardSelector(false);
    setTimeout(() => navigate('/bills'), 1000);
  };

  if (bill === null) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-dots loading-lg text-primary"></span>
      </div>
    );
  }

  if (bill === false) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white px-4">
        <div className="bg-yellow-100 border border-yellow-400 text-yellow-600 px-6 py-6 rounded-lg shadow-lg text-center max-w-md w-full">
          <div className="flex justify-center mb-4">
            <FaExclamationTriangle className="text-4xl" />
          </div>
          <h3 className="font-bold text-xl mb-2">Bill Not Found</h3>
          <p className="text-sm">
            We couldn’t find a bill with ID <code>{id}</code>. Please check the URL or try again later.
          </p>
          <Link to="/bills" className="btn btn-sm mt-4 btn-primary">Back to Bills</Link>
        </div>
      </div>
    );
  }

  const { bill_type, icon, bill_type_icon, organization, amount, ['due-date']: dueDate } = bill;

  return (
    <>
      <Helmet>
        <title>{organization} - Bill Details</title>
      </Helmet>

      <div className="max-w-4xl mx-auto bg-white p-6 pb-16 rounded-lg shadow-lg mt-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Logo */}
          <div className="flex justify-center items-center border p-4">
            <img src={bill_type_icon} alt={`${organization} logo`} className="w-64 object-contain" />
          </div>

          {/* Info */}
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
              onClick={handlePayClick}
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

        {/* Overlapping Icon */}
        {bill_type_icon && (
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 bottom-4 bg-white shadow-md rounded-full p-2 border">
            <img src={icon} alt="Bill Type Icon" className="w-14 h-14 object-contain" />
          </div>
        )}
      </div>

      {/* Card Selector Modal */}
      {showCardSelector && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Select a Card</h3>
            <select
              value={selectedCard}
              onChange={(e) => setSelectedCard(e.target.value)}
              className="select select-bordered w-full mb-4"
            >
              <option value="">-- Choose a card --</option>
              {cards.map((card, idx) => (
                <option key={idx} value={card}>{card}</option>
              ))}
            </select>

            <div className="flex justify-end gap-3">
              <button
                className="btn btn-sm bg-gray-200 hover:bg-gray-300"
                onClick={() => setShowCardSelector(false)}
              >
                Cancel
              </button>
              <button
                className="btn btn-sm btn-primary"
                onClick={confirmPayment}
              >
                Confirm Pay
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BillDetails;
