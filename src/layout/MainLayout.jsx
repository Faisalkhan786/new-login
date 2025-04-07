import { Outlet, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/authSlice";

import React from 'react'
import Header from "./Header";
import Footer from "./Footer";

const MainLayout = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token)
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default MainLayout