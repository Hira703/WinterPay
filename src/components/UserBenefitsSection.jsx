import React from 'react';
import { FaCheckCircle, FaShieldAlt, FaCog, FaUserFriends } from 'react-icons/fa';

const UserBenefitsSection = () => {
  return (
    <div className="bg-gray-50 py-20">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-12">
          Why Choose Our Services?
        </h2>

        {/* Benefits Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {/* Benefit 1 */}
          <div className="bg-white p-8 rounded-xl shadow-lg transition-all transform hover:scale-105 hover:shadow-2xl">
            <div className="flex justify-center items-center mb-6">
              <FaCheckCircle className="text-5xl text-indigo-600" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Seamless Integration</h3>
            <p className="text-lg text-gray-600">
              Our platform integrates effortlessly with your existing systems for a smooth experience.
            </p>
          </div>

          {/* Benefit 2 */}
          <div className="bg-white p-8 rounded-xl shadow-lg transition-all transform hover:scale-105 hover:shadow-2xl">
            <div className="flex justify-center items-center mb-6">
              <FaShieldAlt className="text-5xl text-green-600" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Top-Tier Security</h3>
            <p className="text-lg text-gray-600">
              We prioritize security with end-to-end encryption and the highest standards of data protection.
            </p>
          </div>

          {/* Benefit 3 */}
          <div className="bg-white p-8 rounded-xl shadow-lg transition-all transform hover:scale-105 hover:shadow-2xl">
            <div className="flex justify-center items-center mb-6">
              <FaCog className="text-5xl text-gray-700" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Customizable Features</h3>
            <p className="text-lg text-gray-600">
              Tailor the solution to meet your unique needs with our flexible customization options.
            </p>
          </div>

          {/* Benefit 4 */}
          <div className="bg-white p-8 rounded-xl shadow-lg transition-all transform hover:scale-105 hover:shadow-2xl">
            <div className="flex justify-center items-center mb-6">
              <FaUserFriends className="text-5xl text-yellow-500" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">24/7 Support</h3>
            <p className="text-lg text-gray-600">
              Our expert team is available around the clock to assist with any issues or concerns.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserBenefitsSection;