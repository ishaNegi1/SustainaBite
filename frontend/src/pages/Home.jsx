import React from "react";
import { Link } from "react-router";
import { bg, img1 } from "../assets/pictures";
import { useEffect, useState } from 'react';


const Home = () => {
  const [image, setImage] = useState(img1);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setImage(bg); 
      } else {
        setImage(img1); 
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className=" bg-[#FFFFFF] h-screen">
      <div className=" text-[#FFFFFF] h-auto bg-[#133221] flex items-center justify-center bg-cover bg-center bg-no-repeat relative" style={{ backgroundImage: `url(${image})`}}>
      <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className=" z-10 px-4 lg:w-2/4 md:w-2/3 flex flex-col">
          <div className=" text-center font-Pacifico sm:text-2xl sm:pt-8 pt-4">
            <p>
              "Every meal saved is a life nourished and a planet preserved.
              Let's waste less and care more!"
            </p>
          </div>
          <div className=" text-center font-Nunito sm:text-xl sm:pt-6 pt-3">
            <p>
              Food waste harms both people and the environment. Our platform
              helps reduce waste through food donations, compost collection,
              leftover recipes, and sustainability blogs. Join us in creating a
              waste-free, hunger-free future!
            </p>
          </div>
          <div className=" text-center">
            <Link to="/signup">
              <button className="bg-[#fa453c] text-[#FFFFFF] py-1 rounded-lg sm:w-40 w-36 sm:text-xl text-lg font-medium transition-all duration-500 ease-linear transform hover:scale-110 font-Coustard sm:my-7 my-4">
                JOIN US
              </button>
            </Link>
          </div>
        </div>
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
