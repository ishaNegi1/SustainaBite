import React from "react";
import { Link } from "react-router";
import { bg } from "../assets/pictures";

function Signup() {
  const handleSubmit = async (e) => {
    console.log("Done");
  };

  return (
    <>
      <div className="sm:block hidden text-[#FFFFFF] bg-[#133221] h-screen">
        <div
          className="absolute inset-0 bg-no-repeat"
          style={{
            backgroundImage: `url(${bg})`,
            mixBlendMode: "multiply",
          }}
        ></div>

        <div className="absolute top-40 left-16 z-10">
          <div className="font-Courgette text-5xl font-semibold">
            <p className=" mb-4">Start your journey to</p>
            <p>reduce waste and feed lives</p>
          </div>
          <p className="font-Nunito text-3xl mt-16">
            Sign Up and Make a Difference!
          </p>
          <p className="font-Nunito text-4xl mt-16">
            Already have an account?{" "}
            <b className="text-4xl">
              <u>
                <Link to="login">Log in</Link>
              </u>
            </b>
          </p>
        </div>
      </div>

      <div className="w-full sm:w-[45%] h-screen fixed right-0 top-0 sm:rounded-s-3xl rounded-none sm:border-l-2 border-l-0 border-main bg-[#FFFFFF]">
        <p className="font-Telex text-3xl sm:text-5xl font-medium sm:mt-16 mt-12 ml-10">
          Create Account
        </p>
        <form
          className="flex flex-col font-Telex mt-11 ml-10"
          onSubmit={handleSubmit}
        >
          <label htmlFor="email" className="mb-2 text-xl">
            Full Name
          </label>
          <input
            type="text"
            id="fullname"
            // value={fullname}
            // onChange={(e) => setFullname(e.target.value)}
            required
            className="border-0 border-b-2 border-[#133221] mb-10 py-1 px-2 w-11/12 rounded-md"
          />
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
            className=" sm:mt-9 mt-12 bg-main text-white bg-[#133221] py-2 rounded-lg sm:w-96 ml-7 w-64 sm:mx-auto text-2xl font-semibold transition-all duration-500 ease-linear transform hover:scale-110 font-Coustard"
          >
            Create Account
          </button>
        </form>
        <p className="sm:hidden block font-Nunito text-xl my-9 text-center">
          Already have an account?{" "}
          <b className="text-2xl">
            <u>
              <Link to="login">Log in</Link>
            </u>
          </b>
        </p>
      </div>
    </>
  );
}

export default Signup;
