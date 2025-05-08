import React from 'react';
import CountUp from 'react-countup';
import { FaFileInvoiceDollar, FaUsers, FaHandshake, FaMoneyCheckAlt } from 'react-icons/fa';

const Counter = () => {
  return (
    <section className="bg-gradient-to-r from-sky-50 to-blue-100 py-20 border-t border-blue-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-blue-900 mb-4">
            Platform Activity Overview
          </h2>
          <p className="mt-4 text-lg font-semibold text-gray-700">
            Trusted by thousands across Bangladesh to simplify bill payments.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <StatCard
            icon={<FaFileInvoiceDollar size={40} />}
            label="Bills Processed"
            end={1250000}
            suffix="+"
            iconBg="bg-blue-100"
            iconColor="text-blue-600"
          />
          <StatCard
            icon={<FaUsers size={40} />}
            label="Active Users"
            end={450000}
            suffix="+"
            iconBg="bg-green-100"
            iconColor="text-green-600"
          />
          <StatCard
            icon={<FaHandshake size={40} />}
            label="Service Providers"
            end={30}
            suffix="+"
            iconBg="bg-indigo-100"
            iconColor="text-indigo-600"
          />
          <StatCard
            icon={<FaMoneyCheckAlt size={40} />}
            label="Daily Transactions"
            end={28000}
            suffix="+"
            iconBg="bg-rose-100"
            iconColor="text-rose-600"
          />
        </div>
      </div>
    </section>
  );
};

const StatCard = ({ icon, label, end, suffix, iconBg, iconColor }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-8 text-center hover:shadow-lg transition duration-300">
      <div className={`w-16 h-16 mx-auto flex items-center justify-center rounded-full ${iconBg} ${iconColor}`}>
        {icon}
      </div>
      <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-4">
        <CountUp end={end} duration={2} separator="," suffix={suffix} />
      </h3>
      <p className="text-md text-gray-600 mt-2">{label}</p>
    </div>
  );
};

export default Counter;
