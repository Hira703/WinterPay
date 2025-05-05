import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import { useAuth } from '../context/AuthContext';
import { toast } from 'react-toastify';

const BillDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [bill, setBill] = useState(null);
  const [paid, setPaid] = useState(false);
  const { balance, setBalance } = useAuth();

  useEffect(() => {
    fetch('/bills.json')
      .then(res => res.json())
      .then(data => {
        const selectedBill = data.find(item => item.id === parseInt(id));
        if (selectedBill) {
          setBill(selectedBill);
          // Check localStorage for payment status
          const paidBills = JSON.parse(localStorage.getItem('paidBills')) || [];
          if (paidBills.includes(selectedBill.id)) {
            setPaid(true);
          }
        } else {
          navigate('/bills');
        }
      })
      .catch(error => {
        console.error('Error loading bill details:', error);
        navigate('/bills');
      });
  }, [id, navigate]);

  const handlePayment = () => {
    if (paid) {
      toast.error("You have already paid this bill!");
      return;
    }

    if (balance < bill.amount) {
      toast.error('Insufficient balance!');
      return;
    }

    // Update balance and mark as paid
    setBalance(prev => prev - bill.amount);
    setPaid(true);
    toast.success('Payment Successful!');

    // Save payment status in localStorage
    const paidBills = JSON.parse(localStorage.getItem('paidBills')) || [];
    if (!paidBills.includes(bill.id)) {
      paidBills.push(bill.id);
      localStorage.setItem('paidBills', JSON.stringify(paidBills));
    }

    navigate('/bills');
  };

  if (!bill) {
    return <div className="text-center text-lg py-10">Loading bill details...</div>;
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
          {paid ? 'Already Paid' : 'Pay Now'}
        </button>
      </div>
    </div>
  );
};

export default BillDetails;
