import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import './SignIn.css'
import TimerApp from "./TimerApp";

function Home() {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const logout = () => {
    localStorage.clear();
    navigate('/');
  }

  useEffect(() => {
    setEmail(localStorage.getItem('email'));
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  return (
    <div>
      <nav className="bg-white py-2 md:py-4">
        <div className="container px-4 mx-auto md:flex md:items-center">

          <div className="flex justify-between items-center">
            <a href="/" className="font-bold text-xl text-indigo-600">Bk</a>
            <button className="border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden" id="navbar-toggle" onClick={toggleMobileMenu}>
              <i className="fas fa-bars"></i>
            </button>
          </div>

          <div className={`md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0 ${isMobileMenuOpen ? 'block' : 'hidden'}`} id="navbar-collapse">
            <a href="/" className="p-2 lg:px-4 md:mx-2 text-white rounded bg-indigo-600">Home</a>
            <p className="p-2 lg:px-4 md:mx-2 text-indigo-600 text-center border border-transparent rounded hover:bg-indigo-100 hover:text-indigo-700 transition-colors duration-300">{email}</p>
            <a href="/" className="p-2 lg:px-4 md:mx-2 text-indigo-600 text-center border border-solid border-indigo-600 rounded hover:bg-indigo-600 hover:text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1" onClick={logout}>Logout</a>
          </div>
        </div>
      </nav>
      <TimerApp />
    </div>
  );
}

export default Home;
