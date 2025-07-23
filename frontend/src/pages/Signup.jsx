import React from "react";
import { Link } from "react-router-dom";

function Signup() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Done");
  };

  return (
    <div className="flex sm:my-3 my-6 sm:h-screen">
      <div className=" sm:w-1/2 flex text-[#FFFFFF] items-center justify-center bg-[#133221]">
        <div className="ml-11 sm:ml-6 sm:block hidden z-10">
          <div className="font-Courgette lg:text-3xl text-4xl sm:text-2xl font-semibold">
            <p className="mb-4">Start your journey to</p>
            <p>reduce waste and feed lives</p>
          </div>
          <p className="font-Nunito lg:text-2xl text-2xl sm:text-xl mt-12">
            Sign Up and Make a Difference!
          </p>
          <p className="font-Nunito lg:text-2xl text-2xl sm:text-xl mt-12">
            Already have an account?{" "}
            <b className=" text-3xl sm:text-2xl">
              <u>
                <Link to="/login">Log in</Link>
              </u>
            </b>
          </p>
        </div>
      </div>

      <div className=" sm:w-1/2 w-full flex items-center justify-center sm:bg-[#FFFFFF] sm:text-[#133221] text-[#FFFFFF]">
        <div className=" sm:w-[65%] mx-1 sm:bg-[#FFFFFF] bg-[#133221] rounded-xl sm:rounded-none p-6 sm:p-0 border-2 border-[#fa453c] sm:border-none">
          <p className="font-Telex text-2xl lg:text-3xl font-medium lg:mb-7 mb-5 sm:mb-4">
            Create Account
          </p>
          <form
            className="flex flex-col font-Telex z-10"
            onSubmit={handleSubmit}
          >
            <label
              htmlFor="fullname"
              className="mb-2 sm:text-base lg:text-lg text-lg"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullname"
              required
              className="border-0 border-b-2 sm:border-[#133221] border-[#FFFFFF] py-1 px-2 rounded-md lg:mb-6 sm:mb-4 mb-6 bg-transparent text-sm"
            />
            <label
              htmlFor="email"
              className="sm:text-base lg:text-lg text-lg mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              required
              className="border-0 border-b-2 sm:border-[#133221] border-[#FFFFFF] py-1 px-2 rounded-md lg:mb-6 sm:mb-4 mb-6 bg-transparent text-sm"
            />

            <label
              htmlFor="password"
              className="sm:text-base lg:text-lg text-lg mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              required
              className="border-0 border-b-2 py-1 px-2 rounded-md mb-2 bg-transparent sm:border-[#133221] border-[#FFFFFF] text-sm"
            />

            <button
              type="submit"
              className=" bg-[#fa453c] text-[#FFFFFF] rounded-lg sm:w-52 lg:w-64 w-60 sm:text-md lg:text-xl text-lg font-medium transition-all duration-500 ease-linear transform hover:scale-110 font-Coustard py-1 mt-9 mx-auto"
            >
              Create Account
            </button>
          </form>
          <p className="sm:hidden block font-Nunito sm:text-2xl text-lg mt-7">
            Already have an account?{" "}
            <b className="text-xl">
              <u>
                <Link to="/login">Log in</Link>
              </u>
            </b>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
