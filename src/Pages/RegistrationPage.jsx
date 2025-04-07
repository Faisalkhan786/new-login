import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../redux/registerSlice";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const RegistrationPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, user } = useSelector((state) => state.register);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    avatar: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const resultAction = await dispatch(registerUser(formData));

    if (registerUser.fulfilled.match(resultAction)) {
      toast.success("Registration Successful! Redirecting...");
      setTimeout(() => navigate("/login"), 1000);
    } else {
      toast.error(resultAction.payload || "Registration failed");
    }

    console.log("Send to Redux", formData);
  };

  // useEffect(() => {
  //   if (user) {
  //     toast.success("Registration successful! Redirecting to login...");
  //     setTimeout(() => navigate("/login"), 3000);
  //   }
  //   if (error) {
  //     toast.error(error);
  //   }
  // }, [user, error, navigate]);


  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 p-6">
      {/* Container with two columns */}
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-5xl flex flex-row items-center p-8">
        {/* Right Side - Registration Form with Two Columns */}
        <div className="w-full p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-left">Register</h2>
          <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
            {/* Left Column */}
            <div>
              <label className="block text-gray-700 font-medium text-left">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-xl mt-1 focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium text-left">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-xl mt-1 focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>

            {/* Right Column */}
            <div>
              <label className="block text-gray-700 font-medium text-left">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full text-black p-3 border rounded-xl mt-1 focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium text-left">Avatar</label>
              <input
                type="text"
                name="avatar"
                value={formData.avatar}
                onChange={handleChange}
                className="w-full p-3 border rounded-xl mt-1 focus:ring-2 focus:ring-blue-500"
                placeholder="Avatar URL (optional)"
              />
            </div>

            {/* Submit Button (Full Width) */}
            <div className=" flex justify-end col-span-2">
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition"
                disabled={loading}
              >
                {loading ? "Registering..." : "Register"}
              </button>
            </div>
          </form>

          {/* Error Message */}
          {error && <p className="text-red-500 text-center mt-4">{error}</p>}

          {/* Login Link */}
          <p className="text-center text-gray-600 mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 font-semibold hover:underline">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
