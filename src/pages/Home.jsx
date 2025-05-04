import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';  // If you're using navigation
import 'swiper/css/pagination';  // If you're using pagination
// import { Navigation, Pagination } from 'swiper';
const Home = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-96">
        <Swiper spaceBetween={50} slidesPerView={1} autoplay={{ delay: 3000 }}>
          <SwiperSlide>
            <img src="https://via.placeholder.com/1500x600" alt="Hero 1" className="w-full h-full object-cover" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
              <h2 className="text-4xl font-bold">Your Trusted Bill Payment Partner</h2>
              <p className="mt-4 text-lg">Pay your utility bills quickly and securely</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://via.placeholder.com/1500x600" alt="Hero 2" className="w-full h-full object-cover" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
              <h2 className="text-4xl font-bold">Simple, Fast, Secure</h2>
              <p className="mt-4 text-lg">Seamless bill payments in just a few clicks</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Partner Organizations Section */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">We Partner With</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            <div className="flex justify-center items-center">
              <img src="https://via.placeholder.com/100" alt="DESCO" className="h-12 w-12" />
            </div>
            <div className="flex justify-center items-center">
              <img src="https://via.placeholder.com/100" alt="NESCO" className="h-12 w-12" />
            </div>
            <div className="flex justify-center items-center">
              <img src="https://via.placeholder.com/100" alt="WASA" className="h-12 w-12" />
            </div>
            <div className="flex justify-center items-center">
              <img src="https://via.placeholder.com/100" alt="Titas Gas" className="h-12 w-12" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-10 bg-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">Why Choose Us?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-xl">Secure Payment</h3>
              <p className="mt-4 text-gray-600">All your transactions are protected with the latest encryption.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-xl">Fast Transactions</h3>
              <p className="mt-4 text-gray-600">Pay your bills in seconds without any hassle.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-xl">Government Verified</h3>
              <p className="mt-4 text-gray-600">Our platform is verified by the government for safety and reliability.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">How It Works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-xl">Step 1: Login</h3>
              <p className="mt-4 text-gray-600">Sign in to your account to start paying your bills.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-xl">Step 2: Choose Your Bill</h3>
              <p className="mt-4 text-gray-600">Select the bill you want to pay from a list of available services.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-xl">Step 3: Pay</h3>
              <p className="mt-4 text-gray-600">Confirm and make your payment securely in just a few clicks.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
