import React from 'react';

// Sample testimonial data (you can replace this with real data)
const testimonials = [
  {
    id: 1,
    name: "John Doe",
    role: "Customer",
    feedback: "Winterpay makes it so easy to pay all my utility bills at once. The experience has been seamless, and I trust it for all my payments.",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Customer",
    feedback: "I love the convenience of paying my bills through this platform. The interface is user-friendly, and the process is fast and secure.",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    id: 3,
    name: "Mark Johnson",
    role: "Customer",
    feedback: "The service is exceptional. I never have to worry about late fees anymore. It keeps track of everything perfectly.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  }
];

const TestimonialsSection = () => {
  return (
    <div className="bg-gradient-to-r from-cyan-600 to-sky-900 py-16">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-4xl font-bold text-white mb-8">What Our Satisfied Customers Say</h2>
        
        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transform transition duration-300 hover:scale-105">
              <div className="flex justify-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full border-4 border-cyan-500 shadow-lg"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{testimonial.name}</h3>
              <p className="text-sm text-gray-500 mb-4">{testimonial.role}</p>
              <p className="text-gray-600 italic">"{testimonial.feedback}"</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
