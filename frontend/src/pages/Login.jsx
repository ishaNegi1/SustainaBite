import React from "react";
import { Link } from "react-router";
import { bg } from "../assets/pictures";

function Login() {
  const handleSubmit = async (e) => {
    console.log("Done");
  };

  return (
    <>
      <div className="sm:block hidden text-[#FFFFFF] bg-[#133221] h-screen">
        {/* <div
          className="absolute inset-0 bg-no-repeat"
          style={{
            backgroundImage: `url(${bg})`,
            mixBlendMode: "multiply",
          }}
        ></div> */}

        <div className="absolute top-28 left-16 z-10">
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

      <div className="w-full sm:w-1/2 h-screen fixed right-0 top-0 sm:rounded-s-3xl rounded-none sm:border-l-2 border-l-0 border-main sm:bg-[#FFFFFF] sm:text-black bg-[#133221] text-[#FFFFFF]">
        <p className="font-Telex text-3xl font-medium mt-24 ml-10">
          Welcome Back
        </p>
        <form
          className="flex flex-col font-Telex mt-6 ml-10"
          onSubmit={handleSubmit}
        >
          <label htmlFor="email" className="mb-2 sm:mt-3 text-xl">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
            required
            className="border-0 border-b-2 border-[#133221] mb-10 py-1 px-2 w-11/12 rounded-md"
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
            className="border-0 border-b-2 border-[#133221] mb-4 py-1 px-2 w-11/12 rounded-md"
          />
          {/* <p className=" text-red text-lg">{error}</p> */}
          <button
            type="submit"
            className=" sm:mt-9 mt-12 bg-main sm:text-white sm:bg-[#133221] text-[#FFFFFF] bg-[#fa453c] py-2 rounded-lg sm:w-64 w-64 sm:mx-auto text-xl font-medium transition-all duration-500 ease-linear transform hover:scale-110 font-Coustard ml-2"
          >
            Login
          </button>
        </form>
        <p className="sm:hidden block font-Nunito text-xl my-9 text-center">
          Don't have an account yet?{" "}
          <b className="text-2xl">
            <u>
              <Link to="Signup">Sign up</Link>
            </u>
          </b>
        </p>
      </div>
    </>
  );
}

export default Login;
