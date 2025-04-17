import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./allComponents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoon,
  faSun,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { logo } from "../assets/pictures";

function Navbar() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });
  const [sideNav, setSideNav] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const handleSideNav = () => {
    setSideNav((prev) => !prev);
  };

  return (
    <>
      <div
        className={` flex justify-center fixed top-0 left-0 h-screen w-[63%] z-30 bg-white dark:bg-[#133221] transition-transform duration-700 ease-in-out sm:hidden ${
          sideNav ? "translate-x-0" : "-translate-x-full"
        } dark:border-white dark:border-r-2 border-r-2 border-[#133221]`}
      >
        <div className="flex flex-col mt-36">
          <Link
            to="/"
            className="text-[#133221] dark:text-white font-Coustard text-xl font-medium transition-all duration-300 transform hover:scale-110 inline-block my-5 ml-1"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-[#133221] dark:text-white font-Coustard text-xl font-medium transition-all duration-300 transform hover:scale-110 inline-block my-5 ml-1"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-[#133221] dark:text-white font-Coustard text-xl font-medium transition-all duration-300 transform hover:scale-110 inline-block my-5 ml-1"
          >
            Contact
          </Link>
          <Link to="/login">
            <button className=" font-Coustard bg-[#133221] dark:bg-white text-white dark:text-[#133221] w-[5.4rem] h-10 rounded-md text-xl font-medium transition-all duration-500 ease-linear transform hover:scale-110 my-5 ">
              Login
            </button>
          </Link>
          <Link to="/signup">
            <button className=" font-Coustard bg-[#133221] dark:bg-white text-white dark:text-[#133221]  w-[5.4rem] h-10 rounded-md text-xl font-medium transition-all duration-500 ease-linear transform hover:scale-110 my-5">
              Signup
            </button>
          </Link>
        </div>
      </div>

      <div className=" bg-[#133221] h-20 sticky sm:static top-0 left-0 flex justify-between z-30">
        <div className=" flex items-center ml-7 sm:ml-11">
          <div>
            <img src={logo} alt="logo" className=" w-14 h-14" />
          </div>
        </div>

        <div className=" flex items-center mr-4 sm:mr-0">
          <button
            onClick={toggleTheme}
            title={
              theme === "light" ? "Switch to dark mode" : "Switch to light mode"
            }
            className=" mr-6 h-6 w-6 sm:h-7 sm:w-7 transition-transform duration-500 ease-in-out transform"
          >
            <FontAwesomeIcon
              icon={theme === "light" ? faMoon : faSun}
              className={` h-6 w-6 sm:h-7 sm:w-7 text-white transform transition-transform duration-500 ${
                theme === "light" ? "rotate-0" : "rotate-180"
              }`}
            />
          </button>
          <button className="sm:hidden block h-7 w-7" onClick={handleSideNav}>
            <FontAwesomeIcon
              icon={sideNav ? faXmark : faBars}
              className={`text-white h-7 w-7 transform transition-transform duration-300 ease-in-out ${
                sideNav ? "rotate-180" : "rotate-0"
              }`}
            />
          </button>

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
              <Button btnText="Login" />
            </Link>
            <Link to="/signup">
              <Button btnText="Signup" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
