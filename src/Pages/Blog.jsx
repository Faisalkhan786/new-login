import React from "react";

const Blog = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Our Blog</h1>
        <div className="space-y-6">
          <div className="bg-gray-50 p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-gray-800">Understanding React Hooks</h2>
            <p className="text-gray-600 mt-2">React Hooks revolutionized how we write components. Learn how useState and useEffect work...</p>
            <a href="#" className="text-blue-600 font-medium mt-2 inline-block">Read More</a>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-gray-800">Tailwind CSS for Beginners</h2>
            <p className="text-gray-600 mt-2">Discover how Tailwind CSS can help you build beautiful UI faster...</p>
            <a href="#" className="text-blue-600 font-medium mt-2 inline-block">Read More</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
