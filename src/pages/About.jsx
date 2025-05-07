import React from 'react';
import desco from '../assets/logos/desco.png';
import wasa from '../assets/logos/wasa.jpeg';
import metlife from '../assets/logos/MetLife.png';

const About = () => {
  return (
    <div className="text-gray-800">

      {/* Hero Section */}
      <section className="bg-blue-50 py-16 text-center px-4">
        <h1 className="text-4xl font-bold text-blue-600">Simplifying Bill Payments for Everyone</h1>
        <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
          We provide secure, fast, and convenient bill payment services trusted by thousands across Bangladesh.
        </p>
      </section>

      {/* Mission Section */}
      <section className="py-12 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-2xl font-semibold text-blue-500 mb-4">Our Mission</h2>
        <p className="text-gray-700 text-lg">
          Our mission is to make bill payments seamless and accessible for every user, eliminating long queues and manual processing. We believe in empowering people with digital solutions.
        </p>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { icon: "🔒", title: "Secure Payments" },
            { icon: "⚡", title: "Instant Processing" },
            { icon: "💳", title: "Multiple Payment Options" },
            { icon: "🧾", title: "Digital Receipts" }
          ].map((feature, index) => (
            <div key={index} className="p-6 shadow-md rounded-md bg-gray-50 hover:shadow-lg transition">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="font-semibold text-lg">{feature.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-blue-600 mb-6">Why Choose Us?</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700 text-left list-disc px-6">
            <li>Trusted by major utility providers</li>
            <li>Bank-level data encryption and privacy</li>
            <li>24/7 customer support</li>
            <li>Mobile-first responsive design</li>
            <li>Track payment history digitally</li>
            <li>No hidden fees or service charges</li>
          </ul>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-10 bg-white text-center">
        <h3 className="text-xl font-semibold text-blue-500 mb-6">Our Trusted Partners</h3>
        <div className="flex justify-center gap-8 flex-wrap items-center">
          <img src={desco} className="h-12" alt="Desco" />
          <img src={wasa} className="h-12" alt="WASA" />
          <img src={metlife} className="h-12" alt="MetLife" />
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 text-center bg-blue-100 mt-10">
        <h3 className="text-2xl font-bold text-blue-700 mb-2">Ready to Get Started?</h3>
        <p className="text-gray-600 mb-4">Join thousands of users simplifying their bill payments today.</p>
        <a href="/register" className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">
          Create an Account
        </a>
      </section>

    </div>
  );
};

export default About;
