import React from "react";
import { Link } from "react-router";

function Navbar() {
  return (
    <div className=" bg-[#133221] h-20 flex justify-end items-center">
      <div className=" lg:mr-10 mr-10 sm:mr-5 sm:block hidden">
        <Link
          to="/"
          className=" text-[#FFFFFF] font-Coustard text-[1.1rem] font-medium lg:mx-4 mx-4 sm:mx-2 transition-all duration-500 ease-linear transform hover:scale-110 inline-block py-2 px-2"
        >
          Home
        </Link>
        <Link
          to="/about"
         className=" text-[#FFFFFF] font-Coustard text-[1.1rem] font-medium lg:mx-4 mx-4 sm:mx-1 transition-all duration-500 ease-linear transform hover:scale-110 inline-block py-2 px-2"
        >
          About
        </Link>
        <Link
          to="/contact"
       className=" text-[#FFFFFF] font-Coustard text-[1.1rem] font-medium lg:mx-4 mx-4 sm:mx-1 transition-all duration-500 ease-linear transform hover:scale-110 inline-block py-2 px-2"
        >
          Contact
        </Link>
      </div>
      <div className="sm:block hidden">
        <Link to="/login">
          <button className=" font-Coustard bg-[#FFFFFF] text-black w-24 h-9 rounded-md text-[1.1rem] font-medium lg:mr-11 mr-11 sm:mr-5 transition-all duration-500 ease-linear transform hover:scale-110">
            Login
          </button>
        </Link>
        <Link to="/signup">
          <button className=" font-Coustard bg-[#FFFFFF] text-black w-24 h-9 rounded-md text-[1.1rem] font-medium lg:mr-24 mr-24 sm:mr-5 transition-all duration-500 ease-linear transform hover:scale-110">
            Signup
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
