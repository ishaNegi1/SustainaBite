import React from "react";
import { Link } from "react-router";
import { bg } from "../assets/pictures";

function Login() {
  const handleSubmit = async (e) => {
    console.log("Done");
  };

  return (
    <>
      <div className=" flex text-[#FFFFFF] bg-[#133221] h-screen items-center">
        <div
          className=" absolute inset-0 bg-contain bg-no-repeat ml-9"
          style={{
            backgroundImage: `url(${bg})`
          }}
        ></div>
        <div className="absolute inset-0 bg-[#133221] opacity-80"></div>

        <div className=" ml-11 sm:block hidden z-10">
          <div className="font-Courgette text-4xl font-semibold">
            <p className=" mb-4">Continue your journey to</p>
            <p>reduce waste and feed lives</p>
          </div>
          <p className="font-Nunito text-2xl mt-16">Log in and get started!</p>
          <p className="font-Nunito text-2xl mt-16">
            Don't have an account yet?{" "}
            <b className="text-3xl">
              <u>
                <Link to="Signup">Sign up</Link>
              </u>
            </b>
          </p>
        </div>
      </div>

      <div className=" w-full sm:w-1/2 h-screen fixed right-0 top-0 sm:rounded-s-3xl rounded-none sm:bg-[#FFFFFF] sm:text-black bg-[#133221] text-[#FFFFFF] flex items-center justify-center">
       <div className=" sm:w-[70%] mx-1">
        <p className=" font-Telex text-4xl font-medium mb-11">
          Welcome Back
        </p>
        <form
          className="flex flex-col font-Telex"
          onSubmit={handleSubmit}
        >
          <label htmlFor="email" className="mb-2 text-xl">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
            required
            className="border-0 border-b-2 border-[#133221] py-1 px-2 rounded-md mb-8"
          />

          <label htmlFor="password" className="mb-2 text-xl">
            Password
          </label>
          <input
            type="password"
            id="password"
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
            required
            className="border-0 border-b-2 border-[#133221] py-1 px-2 rounded-md"
          />
          {/* <p className=" text-red text-lg">{error}</p> */}
          <button
            type="submit"
            className=" bg-main sm:text-white sm:bg-[#133221] text-[#FFFFFF] bg-[#fa453c] rounded-lg w-64 text-xl font-medium transition-all duration-500 ease-linear transform hover:scale-110 font-Coustard py-1 mt-10 mx-auto"
          >
            Login
          </button>
        </form>
        <p className=" sm:hidden block font-Nunito text-xl mt-7">
          Don't have an account yet?{" "}
          <b className="text-2xl">
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
