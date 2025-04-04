import React from "react";
import { Link } from "react-router";
import { img } from "../assets/pictures";

const Home = () => {
  return (
    <div className=" bg-[#FFFFFF] h-screen">
      <div className=" text-[#FFFFFF] md:h-[30%] lg:h-[57%] h-auto flex relative overflow-hidden">
        <div
          className=" absolute inset-0 bg-cover bg-center bg-no-repeat md:hidden block"
          style={{
            backgroundImage: `url(${img})`,
          }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-70"></div>

        <div className="relative z-10 md:flex md:flex-col md:w-[65%] lg:w-[60%] lg:mt-5 mt-3 md:-mr-[15] p-4 lg:ml-5">
          <div className="md:w-[106%] text-center font-Pacifico md:text-lg lg:text-[1.5rem] px-2 md:px-0">
            <p>
              "Every meal saved is a life nourished and a planet preserved.
              Let's waste less and care more!"
            </p>
          </div>
          <div className=" md:w-[106%] w-[100%] text-center font-Nunito md:text-md lg:text-xl text-[1rem] mt-5 px-2">
            <p>
              Food waste harms both people and the environment. Our platform
              helps reduce waste through food donations, compost collection,
              leftover recipes, and sustainability blogs. Join us in creating a
              waste-free, hunger-free future!
            </p>
          </div>
          <div className="md:w-[100%] text-center">
            <Link to="/signup">
              <button className="bg-[#fa453c] text-[#FFFFFF] py-1 rounded-lg lg:w-40 w-40 md:w-36 md:mx-auto lg:text-xl text-xl md:text-lg font-medium transition-all duration-500 ease-linear transform hover:scale-110 font-Coustard mt-4 mb-5">
                JOIN US
              </button>
            </Link>
          </div>
        </div>
        <div
          style={{ backgroundImage: `url(${img})` }}
          className=" w-[60%] bg-no-repeat bg-contain md:block hidden md:mt-16 lg:mt-0"
        ></div>
      </div>
      <div className="bg-[#85CA81] h-16 flex items-center overflow-hidden whitespace-nowrap mt-1">
        <div className="flex space-x-16 text-white text-2xl font-semibold animate-marquee">
          <p>Donate Food</p>
          <p>Compost Collection</p>
          <p>Leftover Recipes</p>
          <p>Awareness Blogs</p>
          <p>Organic Fertilizer</p>
        </div>
        <div className="flex space-x-16 text-white text-2xl font-semibold animate-marquee ml-12">
          <p>Donate Food</p>
          <p>Compost Collection</p>
          <p>Leftover Recipes</p>
          <p>Awareness Blogs</p>
          <p>Organic Fertilizer</p>
        </div>
      </div>
      <div>
        <h1 className=" text-[#133221] font-Nunito font-bold text-2xl text-center mt-3">OUR SERVICES</h1>
      </div>
    </div>
  );
};

export default Home;
