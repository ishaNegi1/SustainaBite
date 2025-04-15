import React from "react";
import { Link } from "react-router";
import {
  bg,
  blog2,
  donate1,
  fertilizer1,
  img1,
  leftover1,
  rotten,
} from "../assets/pictures";
import { useEffect, useState } from "react";
import { Card, ImpactCounter } from "../components/allComponents";

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
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div
        className=" text-[#FFFFFF] h-auto bg-[#133221] flex items-center justify-center bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className=" z-10 px-4 lg:w-2/4 md:w-2/3 flex flex-col">
          <div className=" text-center font-Pacifico sm:text-2xl text-xl sm:pt-8 pt-6">
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
              waste-free and hunger-free future!
            </p>
          </div>
          <div className=" text-center">
            <Link to="/signup">
              <button className="bg-[#fa453c] text-[#FFFFFF] py-1 rounded-lg sm:w-40 w-36 sm:text-xl text-lg font-medium transition-all duration-500 ease-linear transform hover:scale-110 font-Coustard sm:my-7 my-6">
                JOIN US
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-[#85CA81] text-white dark:text-[#133221] h-16 flex items-center overflow-hidden whitespace-nowrap mt-6">
        <div className="flex space-x-16 text-2xl font-semibold animate-marquee">
          <p>Donate Food</p>
          <p>Compost Collection</p>
          <p>Leftover Recipes</p>
          <p>Awareness Blogs</p>
          <p>Organic Fertilizer</p>
        </div>
        <div className="flex space-x-16 text-2xl font-semibold animate-marquee ml-12">
          <p>Donate Food</p>
          <p>Compost Collection</p>
          <p>Leftover Recipes</p>
          <p>Awareness Blogs</p>
          <p>Organic Fertilizer</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto sm:px-4 px-8 mt-16 mb-24 sm:mb-28">
        <h1 className="text-[#133221] dark:text-white font-Nunito font-bold text-2xl text-center">
          Our Services
        </h1>
        <div className="flex flex-wrap justify-center gap-14 mt-10 sm:mt-12 sm:mb-20 mb-14">
          <Card
            src={donate1}
            alt="Food Donation"
            title="Food Donation"
            desc="Help those in need by donating surplus food from homes, restaurants, or cafés directly to verified NGOs."
            backContent="Every meal counts. Reduce hunger and food waste by donating excess food through verified channels."
            btnText="Donate Now"
          />
          <Card
            src={blog2}
            alt="Compost Collection"
            title="Compost Collection"
            desc="Turn your kitchen waste into value! Schedule compost pickups and earn SustainaBite Coins in return."
            backContent="Composting is a simple way to give back to the earth. Schedule pickups and turn waste into value."
            btnText="Schedule Pickup"
          />
          <Card
            src={fertilizer1}
            alt="Fertilizer Purchase"
            title="Fertilizer Purchase"
            desc="Buy nutrient-rich organic fertilizer made from collected compost. Use your coins to get exclusive discounts."
            backContent="Our organic fertilizers are perfect for gardens, farms, and eco-friendly agriculture."
            btnText="Buy Fertilizer"
          />
        </div>

        <div className="flex flex-wrap justify-center gap-14">
          <Card
            src={leftover1}
            alt="Leftover Recipes"
            title="Leftover Recipes"
            desc="Don't waste leftovers—transform them! Enter ingredients and discover recipes you can try at home."
            backContent="Discover creative recipes based on what's in your fridge and reduce food waste with style!"
            btnText="Get Recipes"
          />
          <Card
            src={rotten}
            alt="Sustainability Blogs"
            title="Sustainability Blogs"
            desc="Learn, share, and grow! Read or write blogs about food waste, sustainability, and eco-living."
            backContent="Explore blogs on food waste reduction, sustainability, and tips for an eco-conscious life."
            btnText="Explore Blogs"
          />
        </div>
      </div>

      <ImpactCounter />
    </>
  );
};

export default Home;
