import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";
import LoginModal from "../components/LoginModal";

const Header = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <header className="flex border-b py-3 px-4 sm:px-10 bg-white font-[sans-serif] min-h-[65px] tracking-wide relative z-50">
      <div className="flex flex-wrap items-center gap-4 max-w-screen-xl mx-auto w-full">
        {/* Logo */}
        {/* <Link to="/" className="max-sm:hidden">
          <img src="https://readymadeui.com/readymadeui.svg" alt="logo" className="w-32" />
        </Link> */}
        <Link to="/" className=" max-sm:block">
          <img src="https://readymadeui.com/readymadeui-short.svg" alt="logo" className="w-8" />
        </Link>

        {/* Navigation Links */}
        <div className="max-lg:hidden lg:!block">
          <ul className="lg:flex lg:ml-14 lg:gap-x-5">
            <li className="max-lg:border-b max-lg:py-3 px-3">
              <Link to="/" className="lg:hover:text-[#007bff] text-[#007bff] block text-[15px]">
                Home
              </Link>
            </li>
            {token && (
              <>
                <li className="max-lg:border-b max-lg:py-3 px-3">
                  <Link to="/dashboard" className="lg:hover:text-[#007bff] text-gray-800 block text-[15px]">
                    Dashboard
                  </Link>
                </li>
                <li className="max-lg:border-b max-lg:py-3 px-3">
                  <Link to="/profile" className="lg:hover:text-[#007bff] text-gray-800 block text-[15px]">
                    Profile
                  </Link>
                </li>
              </>
            )}
            <li className="max-lg:border-b max-lg:py-3 px-3">
              <Link to="/blog" className="lg:hover:text-[#007bff] text-gray-800 block text-[15px]">
                Blog
              </Link>
            </li>
            <li className="max-lg:border-b max-lg:py-3 px-3">
              <Link to="/about" className="lg:hover:text-[#007bff] text-gray-800 block text-[15px]">
                About
              </Link>
            </li>
          </ul>
        </div>

        {/* Search and Authentication Buttons */}
        <div className="flex gap-4 ml-auto">
          <div className="flex max-w-xs w-full bg-gray-100 px-4 py-2 rounded">
            <input
              type="text"
              placeholder="Search something..."
              className="w-full text-sm bg-transparent rounded outline-none pr-2"
            />
          </div>

          {/* Show Logout if Authenticated */}
          {token ? (
            <button onClick={() => dispatch(logout())} className="text-red-500 text-sm">
              Logout
            </button>
          ) : (
            <div className="flex gap-2">
              <Link to="/login"
                className="bg-blue-600 text-white text-sm px-3 py-1.5 rounded-md hover:bg-blue-700 transition"
                onClick={() => set}
              >
                Login
              </Link>
              {/* <button
                onClick={() => setIsModalOpen(true)}
                className="bg-blue-600 text-white text-sm px-3 py-1.5 rounded-md hover:bg-blue-700 transition">
                Login
              </button> */}
              <Link
                to="/register"
                className="bg-blue-600 text-white text-sm px-3 py-1.5 rounded-md hover:bg-blue-700 transition"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
      {/* Login Modal */}
      {/* {isModalOpen && <LoginModal closeModal={() => setIsModalOpen(false)} />} */}
    </header>
  );
};

export default Header;
