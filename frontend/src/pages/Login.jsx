import React from "react";
import { Link } from "react-router";

function Login() {

  const handleSubmit = async (e) => {
    console.log("Done");
  };

  return (
    <>
      <div className=" flex text-[#FFFFFF] w-1/2 h-screen items-center justify-center bg-[#133221]">
        <div className=" ml-11 sm:ml-6 sm:block hidden z-10">
          <div className="font-Courgette lg:text-4xl text-4xl sm:text-2xl font-semibold">
            <p className=" mb-4">Continue your journey to</p>
            <p>reduce waste and feed lives</p>
          </div>
          <p className="font-Nunito lg:text-2xl text-2xl sm:text-xl mt-12">Log in and get started!</p>
          <p className="font-Nunito lg:text-2xl text-2xl sm:text-xl mt-12">
            Don't have an account yet?{" "}
            <b className="lg:text-3xl text-3xl sm:text-2xl">
              <u>
                <Link to="Signup">Sign up</Link>
              </u>
            </b>
          </p>
        </div>
      </div>

      <div className=" w-full sm:w-1/2 h-full fixed right-0 top-0 sm:rounded-s-3xl rounded-none sm:bg-[#FFFFFF] sm:text-black text-[#133221] flex items-center justify-center bg-cover bg-center bg-no-repeat sm:bg-none bg-[#133221]">
        <div className=" sm:w-[70%] mx-1 bg-white rounded-lg sm:rounded-none p-6 sm:p-0">
          <p className=" font-Telex sm:text-2xl lg:text-4xl text-2xl font-medium lg:mb-7 mb-5 sm:mb-4">
            Welcome Back
          </p>
          <form className="flex flex-col font-Telex z-10" onSubmit={handleSubmit}>
            <label htmlFor="email" className="mb-2 sm:text-md lg:text-xl text-lg">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
              required
              className="border-0 border-b-2 py-1 px-2 rounded-md lg:mb-6 sm:mb-4 mb-6 bg-transparent border-[#133221] text-sm"
            />

            <label htmlFor="password" className="sm:text-md text-lg lg:text-xl mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              // value={password}
              // onChange={(e) => setPassword(e.target.value)}
              required
              className="border-0 border-b-2 py-1 px-2 rounded-md mb-2 bg-transparent border-[#133221] text-sm"
            />
            {/* <p className=" text-red text-lg">{error}</p> */}
            <button
              type="submit"
              className=" bg-main sm:text-white sm:bg-[#133221] text-[#FFFFFF] bg-[#fa453c] rounded-lg sm:w-52 lg:w-64 w-60 sm:text-md lg:text-xl text-lg font-medium transition-all duration-500 ease-linear transform hover:scale-110 font-Coustard py-1 mt-6 mx-auto"
            >
              Login
            </button>
          </form>
          <p className=" sm:hidden block font-Nunito sm:text-2xl text-lg mt-7">
            Don't have an account?{" "}
            <b className=" text-xl">
              <u>
                <Link to="Signup">Sign up</Link>
              </u>
            </b>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
