import React from 'react';
import { FaUserCheck, FaFileInvoiceDollar, FaCheckCircle } from 'react-icons/fa';

const steps = [
  {
    icon: <FaUserCheck className="text-cyan-500 text-4xl mb-4" />,
    title: "Create an Account",
    description: "Sign up or log in to securely manage all your utility bills in one place.",
  },
  {
    icon: <FaFileInvoiceDollar className="text-green-500 text-4xl mb-4" />,
    title: "Select a Bill",
    description: "Browse your electricity, gas, water, and other bills from trusted providers.",
  },
  {
    icon: <FaCheckCircle className="text-blue-500 text-4xl mb-4" />,
    title: "Pay Securely",
    description: "Complete payment instantly and get confirmation with a success tick.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-blue-900 mb-4">How It Works</h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-12 text-lg">
          Pay your utility bills in 3 simple steps. No hassle, no delays—just quick and secure transactions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-8 text-center transition transform hover:scale-[1.02] hover:shadow-lg"
            >
              <div className="flex justify-center">{step.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800">{step.title}</h3>
              <p className="text-gray-500 mt-2 text-base">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
