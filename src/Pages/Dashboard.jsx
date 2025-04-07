import React from "react";

const Dashboard = () => {
  return (
    <div className="text-blue-700 min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Dashboard</h2>
        <nav>
          <ul className="space-y-4">
            <li>
              <a href="#" className="block py-2 px-4 rounded-lg bg-blue-600 text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-4 rounded-lg hover:bg-gray-200">
                Profile
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-4 rounded-lg hover:bg-gray-200">
                Settings
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-4 rounded-lg hover:bg-gray-200">
                Logout
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <h1 className="text-3xl font-bold text-gray-900">Welcome to Your Dashboard</h1>
        <p className="text-gray-600 mt-2">
          Here you can manage your profile, view statistics, and adjust settings.
        </p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900">Total Users</h3>
            <p className="text-2xl font-bold mt-2">1,234</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900">Revenue</h3>
            <p className="text-2xl font-bold mt-2">$45,678</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900">Orders</h3>
            <p className="text-2xl font-bold mt-2">567</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
