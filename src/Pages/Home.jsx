import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-4xl font-bold text-gray-900 text-center mb-6">
          Welcome to Our Website
        </h1>
        <p className="text-gray-600 text-lg text-center mb-6">
          Explore amazing products, services, and features tailored just for you.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-xl text-lg font-semibold hover:bg-blue-700 transition">
            Get Started
          </button>
          <button className="px-6 py-3 bg-gray-200 text-gray-900 rounded-xl text-lg font-semibold hover:bg-gray-300 transition">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
