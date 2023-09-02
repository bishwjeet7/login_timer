import React, { useState, useEffect } from "react";
import { useNavigate,Link } from 'react-router-dom';
import './SignIn.css'
import TimerApp from "./TimerApp";


function Home(){
    const navigate = useNavigate()
    const [email, SetEmail] = useState();
    const logout =()=>{
        localStorage.clear()
        // window.location.reload();
        navigate('/');
    }

    useEffect(() => {    
      SetEmail(
          localStorage.getItem('email')
      )      
    }, [])
    


    return (
        <div>
            <nav class="bg-white py-2 md:py-4">
    <div class="container px-4 mx-auto md:flex md:items-center">

      <div class="flex justify-between items-center">
        <a href="/" class="font-bold text-xl text-indigo-600">Bk</a>
        <button class="border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden" id="navbar-toggle">
          <i class="fas fa-bars"></i>
        </button>
      </div>

      <div class="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0" id="navbar-collapse">
        <a href="/" class="p-2 lg:px-4 md:mx-2 text-white rounded bg-indigo-600">Home</a>
        <p class="p-2 lg:px-4 md:mx-2 text-indigo-600 text-center border border-transparent rounded hover:bg-indigo-100 hover:text-indigo-700 transition-colors duration-300">{email}</p>
        <a href="/" class="p-2 lg:px-4 md:mx-2 text-indigo-600 text-center border border-solid border-indigo-600 rounded hover:bg-indigo-600 hover:text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1" onClick={logout}>Logout</a>
      </div>
    </div>
  </nav>
            <TimerApp/>
        </div>
    );
}
export default Home;