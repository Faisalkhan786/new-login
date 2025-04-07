import React from "react";

const Profile = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-lg w-full text-center">
        <div className="flex flex-col items-center">
          <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-blue-500"
          />
          <h2 className="text-3xl font-bold text-gray-900 mt-4">John Doe</h2>
          <p className="text-gray-600 text-lg">Software Engineer</p>
        </div>

        <div className="mt-6 text-left space-y-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-gray-700 font-medium">Email</p>
            <p className="text-gray-600">john.doe@example.com</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-gray-700 font-medium">Location</p>
            <p className="text-gray-600">New York, USA</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-gray-700 font-medium">Phone</p>
            <p className="text-gray-600">+1 (123) 456-7890</p>
          </div>
        </div>

        <button className="mt-6 w-full py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition">
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default Profile;
