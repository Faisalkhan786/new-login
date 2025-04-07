import { useState } from 'react'
import './App.css'
import LoginPage from './Pages/LoginPage'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import Home from './Pages/Home'
import Dashboard from './Pages/Dashboard'
import Profile from './Pages/Profile'
import { useSelector } from 'react-redux'
import Blog from './Pages/Blog'
import About from './Pages/About'
import RegistrationPage from './Pages/RegistrationPage';
import { ToastContainer } from "react-toastify";

const PrivateRoute = ({ children }) => {
  const token = useSelector((state) => state.auth.token);
  return token ? children : <Navigate to="/login" />;
};

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* Toast Notifications - Should be at the root level */}
      <ToastContainer position="top-right" autoClose={3000} />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path='login' element={<LoginPage />} />
            {/* <Route path='login' element={<LoginPage />} /> */}
            <Route path='register' element={<RegistrationPage />} />
            <Route path='blog' element={<Blog />} />
            <Route path='about' element={<About />} />
            <Route path='dashboard' element={<PrivateRoute><Dashboard /></PrivateRoute>} />
            <Route path='profile' element={<PrivateRoute><Profile /></PrivateRoute>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
