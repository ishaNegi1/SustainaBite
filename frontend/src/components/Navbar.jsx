import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import Button from "./Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'
import { faSun } from '@fortawesome/free-solid-svg-icons'

function Navbar() {

  const [theme, setTheme] = useState(()=>{
      return localStorage.getItem("theme") || "light";
  });

  useEffect(()=>{
    const root = window.document.documentElement;
    if(theme === "dark"){
      root.classList.add("dark");
    }else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
    }, [theme]);
    
    const toggleTheme = () => {
         setTheme( prev => prev === 'dark' ? 'light' : 'dark')
    }

  return (
    <>
    <div className=" bg-[#133221] h-20 flex justify-between">
    <div className=" flex items-center ml-7 sm:ml-11">
    <div className=" bg-red-500">
      logo
    </div>
    <button onClick={toggleTheme} className=" ml-9 sm:ml-16 lg:ml-24 h-6 w-6 sm:h-7 sm:w-7 transition-transform duration-500 ease-in-out transform">
  <FontAwesomeIcon
    icon={theme === 'light' ? faMoon : faSun}
    className={` h-6 w-6 sm:h-7 sm:w-7 text-white transform transition-transform duration-500 ${
      theme === 'light' ? 'rotate-0' : 'rotate-180'
    }`}
  />
</button>

    </div>
    <div className=" flex items-center">
      <div className=" lg:mr-8 mr-10 sm:mr-5 sm:block hidden">
        <Link
          to="/"
          className=" text-[#FFFFFF] font-Coustard text-[1.1rem] font-medium lg:mx-3 mx-4 sm:mx-2 transition-all duration-500 ease-linear transform hover:scale-110 inline-block p-2"
        >
          Home
        </Link>
        <Link
          to="/about"
         className=" text-[#FFFFFF] font-Coustard text-[1.1rem] font-medium lg:mx-3 mx-4 sm:mx-1 transition-all duration-500 ease-linear transform hover:scale-110 inline-block p-2"
        >
          About
        </Link>
        <Link
          to="/contact"
       className=" text-[#FFFFFF] font-Coustard text-[1.1rem] font-medium lg:mx-3 mx-4 sm:mx-1 transition-all duration-500 ease-linear transform hover:scale-110 inline-block p-2"
        >
          Contact
        </Link>
      </div>
      <div className="sm:block hidden">
        <Link to="/login">
          <Button btnText="Login" rest=" border border-black"/>
        </Link>
        <Link to="/signup">
        <Button btnText="Signup"/>
        </Link>
        </div>
      </div>
    </div>
    </>
  );
}

export default Navbar;