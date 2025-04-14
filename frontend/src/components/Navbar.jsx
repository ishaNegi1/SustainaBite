import React from "react";
import { Link } from "react-router";
import Button from "./Button";

function Navbar() {
  return (
    <div className=" bg-[#133221] h-20 flex justify-end items-center">
      <div className=" lg:mr-10 mr-10 sm:mr-5 sm:block hidden">
        <Link
          to="/"
          className=" text-[#FFFFFF] font-Coustard text-[1.1rem] font-medium lg:mx-4 mx-4 sm:mx-2 transition-all duration-500 ease-linear transform hover:scale-110 inline-block p-2"
        >
          Home
        </Link>
        <Link
          to="/about"
         className=" text-[#FFFFFF] font-Coustard text-[1.1rem] font-medium lg:mx-4 mx-4 sm:mx-1 transition-all duration-500 ease-linear transform hover:scale-110 inline-block p-2"
        >
          About
        </Link>
        <Link
          to="/contact"
       className=" text-[#FFFFFF] font-Coustard text-[1.1rem] font-medium lg:mx-4 mx-4 sm:mx-1 transition-all duration-500 ease-linear transform hover:scale-110 inline-block p-2"
        >
          Contact
        </Link>
      </div>
      <div className="sm:block hidden">
        <Link to="/login">
          <Button btnText="Login"/>
        </Link>
        <Link to="/signup">
        <Button btnText="Signup"/>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
