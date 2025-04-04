import React from "react";
import { Link } from "react-router";
import { bg } from "../assets/pictures";

function Signup() {
  const handleSubmit = async (e) => {
    console.log("Done");
  };

  return (
    <>
      <div className=" flex items-center text-[#FFFFFF] bg-[#133221] h-screen">
                <div
                  className=" absolute inset-0 bg-cover bg-no-repeat w-1/2 h-screen"
                  style={{
                    backgroundImage: `url(${bg})`,
                  }}
                ></div>
                <div className="absolute w-1/2 inset-0 bg-[#133221] sm:opacity-30 opacity-30 lg:opacity-70"></div>
        <div className=" lg:ml-11 ml-11 sm:ml-6 sm:block hidden z-10">
          <div className="font-Courgette lg:text-4xl text-4xl sm:text-2xl font-semibold">
            <p className=" mb-4">Start your journey to</p>
            <p>reduce waste and feed lives</p>
          </div>
          <p className="font-Nunito lg:text-2xl text-2xl sm:text-xl mt-12">
            Sign Up and Make a Difference!
          </p>
          <p className="font-Nunito lg:text-2xl text-2xl sm:text-xl mt-12">
            Already have an account?{" "}
            <b className="lg:text-3xl text-3xl sm:text-2xl">
              <u>
                <Link to="login">Log in</Link>
              </u>
            </b>
          </p>
        </div>
      </div>

      <div className=" w-full sm:w-1/2 h-full fixed right-0 top-0 sm:rounded-s-3xl rounded-none sm:bg-[#FFFFFF] sm:text-black bg-[#133221] text-[#FFFFFF] flex items-center justify-center">
      <div className=" sm:w-[70%] mx-1">
        <p className=" font-Telex sm:text-2xl lg:text-4xl text-4xl font-medium lg:mb-7 mb-7 sm:mb-4">
          Create Account
        </p>
        <form
          className="flex flex-col font-Telex"
          onSubmit={handleSubmit}
        >
          <label htmlFor="fullname" className="mb-2 sm:text-md lg:text-xl text-xl">
            Full Name
          </label>
          <input
            type="text"
            id="fullname"
            // value={fullname}
            // onChange={(e) => setFullname(e.target.value)}
            required
            className="border-0 border-b-2 border-[#FFFFFF] py-1 px-2 rounded-md lg:mb-6 sm:mb-4 mb-6 bg-transparent h-7 sm:border-[#133221]"
          />
          <label htmlFor="email" className=" sm:text-md lg:text-xl text-xl mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
            required
            className="border-0 border-b-2 border-[#FFFFFF] py-1 px-2 rounded-md lg:mb-6 sm:mb-4 mb-6 bg-transparent h-7 sm:border-[#133221]"
          />

          <label htmlFor="password" className=" sm:text-md lg:text-xl text-xl mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
            required
            className="border-0 border-b-2 border-[#FFFFFF] py-1 px-2 rounded-md mb-2 bg-transparent h-7 sm:border-[#133221]"
          />
          {/* <p className=" text-red text-lg">{error}</p> */}
          <button
            type="submit"
            className=" bg-main sm:text-white sm:bg-[#133221] text-[#FFFFFF] bg-[#fa453c] rounded-lg sm:w-52 lg:w-64 w-64 sm:text-md lg:text-xl text-xl font-medium transition-all duration-500 ease-linear transform hover:scale-110 font-Coustard py-1 mt-6 mx-auto"
          >
            Create Account
          </button>
        </form>
        <p className=" sm:hidden block font-Nunito sm:text-xl text-lg mt-7">
          Already have an account?{" "}
          <b className="sm:text-2xl text-xl">
            <u>
              <Link to="login">Log in</Link>
            </u>
          </b>
        </p>
      </div>
      </div>
    </>
  );
}

export default Signup;
