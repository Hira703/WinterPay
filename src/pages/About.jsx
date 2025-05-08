import React from 'react';
import { Helmet } from 'react-helmet';
import desco from '../assets/logos/desco.png';
import wasa from '../assets/logos/wasa.jpeg';
import metlife from '../assets/logos/MetLife.png';

const About = () => {
  return (
    <div className="text-gray-800">
      {/* Add React Helmet for SEO */}
      <Helmet>
        <title>About Us - Bill Payment Platform</title>
        <meta
          name="description"
          content="We provide secure, fast, and convenient bill payment services trusted by thousands across Bangladesh. Learn more about our mission and features."
        />
        <meta
          name="keywords"
          content="Bill Payment, Bangladesh, Secure Payments, Utility Bills, Fast Processing, Online Payments"
        />
        <meta name="author" content="Your Company Name" />
        <meta property="og:title" content="About Us - Bill Payment Platform" />
        <meta
          property="og:description"
          content="Learn more about our secure and convenient bill payment services trusted by thousands across Bangladesh."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com/about" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-100 to-blue-50 py-16 text-center px-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-800 leading-tight">
          Simplifying Bill Payments for Everyone
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
          We provide secure, fast, and convenient bill payment services trusted by thousands across Bangladesh.
        </p>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-6 bg-gray-50 text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold text-blue-600 mb-6">Our Mission</h2>
        <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto">
          Our mission is to make bill payments seamless and accessible for every user, eliminating long queues and manual processing. We believe in empowering people with digital solutions.
        </p>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 text-center">
          {[{ icon: "🔒", title: "Secure Payments" }, { icon: "⚡", title: "Instant Processing" }, { icon: "💳", title: "Multiple Payment Options" }, { icon: "🧾", title: "Digital Receipts" }].map((feature, index) => (
            <div key={index} className="p-8 shadow-lg rounded-xl bg-gray-50 hover:shadow-xl transition-all transform hover:scale-105 cursor-pointer">
              <div className="text-4xl mb-6">{feature.icon}</div>
              <h3 className="font-semibold text-lg text-blue-700">{feature.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-blue-600 mb-8">Why Choose Us?</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg sm:text-xl text-gray-700 text-left list-disc px-6">
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
      <section className="py-16 bg-white text-center">
        <h3 className="text-2xl sm:text-3xl font-semibold text-blue-600 mb-8">Our Trusted Partners</h3>
        <div className="flex justify-center gap-12 flex-wrap items-center">
          <img src={desco} className="h-16 sm:h-20 transition-transform transform hover:scale-105" alt="Desco" />
          <img src={wasa} className="h-16 sm:h-20 transition-transform transform hover:scale-105" alt="WASA" />
          <img src={metlife} className="h-16 sm:h-20 transition-transform transform hover:scale-105" alt="MetLife" />
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 text-center bg-blue-100 mt-10 rounded-xl shadow-lg">
        <h3 className="text-3xl sm:text-4xl font-extrabold text-blue-700 mb-4">Ready to Get Started?</h3>
        <p className="text-lg sm:text-xl text-gray-600 mb-6">Join thousands of users simplifying their bill payments today.</p>
        <a href="/register" className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition duration-300">
          Create an Account
        </a>
      </section>

    </div>
  );
};

export default About;
