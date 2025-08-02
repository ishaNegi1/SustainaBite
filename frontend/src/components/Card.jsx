import React from "react";
import { Link } from "react-router-dom";
import {
  blog2,
  donate1,
  fertilizer1,
  leftover1,
  rotten,
} from "../assets/pictures";

function Services({ src, alt, title, desc, btnText, path }) {
  return (
    <>
      <img src={src} alt={alt} className=" rounded-md" />
      <p className=" md:text-lg text-xl font-Nunito font-bold sm:font-semibold pb-1 pt-4 mx-2">
        {title}
      </p>
      <p className=" md:text-sm text-lg mx-2">{desc}</p>
      <div className="w-[85%] sm:w-[85%] md:w-[85%] lg:w-[60%] mx-auto">
        <Link
          to={path}
          className="block text-white font-Coustard bg-[#fa453c] text-center sm:text-base text-lg mb-3 mt-5 py-1 px-1 rounded-lg transition-all duration-500 ease-linear transform hover:scale-110 w-full"
        >
          {btnText}
        </Link>
      </div>
    </>
  );
}

function Card() {
  const card1 = [
    {
      src: donate1,
      alt: "Food Donation",
      title: "Food Donation",
      desc: "Help those in need by donating surplus food from homes, restaurants, or cafés directly to verified NGOs.",
      btnText: "Donate Now",
      path: "/donation",
    },
    {
      src: blog2,
      alt: "Compost Collection",
      title: "Compost Collection",
      desc: "Turn your kitchen waste into value! Schedule compost pickups and earn SustainaBite Coins in return.",
      btnText: "Schedule Pickup",
      path: "/pickup",
    },
    {
      src: fertilizer1,
      alt: "Fertilizer Purchase",
      title: "Fertilizer Purchase",
      desc: "Buy nutrient-rich organic fertilizer made from collected compost. Use your coins to get exclusive discounts.",
      btnText: "Buy Fertilizer",
      path: "/fertilizer",
    },
  ];

  const card2 = [
    {
      src: leftover1,
      alt: "Leftover Recipes",
      title: "Leftover Recipes",
      desc: "Don't waste leftovers-transform them! Enter ingredients and discover recipes you can try at home.",
      btnText: "Get Recipes",
      path: "/recipes",
    },
    {
      src: rotten,
      alt: "Sustainability Blogs",
      title: "Sustainability Blogs",
      desc: "Learn, share, and grow! Read or write blogs about food waste, sustainability, and eco-living.",
      btnText: "Explore Blogs",
      path: "/blogs",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto sm:px-4 px-8 my-20">
      <h1 className="text-[#133221] dark:text-white font-Nunito font-bold text-3xl text-center">
        Our Services
      </h1>
      <div className="flex flex-wrap justify-center gap-14 mt-16 sm:mb-24 mb-14">
        {card1.map((item, index) => (
          <div
            className=" w-auto sm:w-[23%] h-auto bg-[#FFFFFF] text-[#133221] dark:bg-[#21583a] dark:text-white rounded-lg shadow-xl shadow-[rgba(0,0,0,0.7)] p-2 flex flex-wrap transition-transform duration-300 hover:scale-110"
            key={index}
          >
            <Services
              src={item.src}
              alt={item.alt}
              title={item.title}
              desc={item.desc}
              btnText={item.btnText}
              path={item.path}
            />
          </div>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-14">
        {card2.map((item, index) => (
          <div
            className=" w-auto sm:w-[23%] h-auto bg-[#FFFFFF] text-[#133221] dark:bg-[#21583a] dark:text-white rounded-lg shadow-xl shadow-[rgba(0,0,0,0.7)] p-2 flex flex-wrap transition-transform duration-300 hover:scale-110"
            key={index}
          >
            <Services
              src={item.src}
              alt={item.alt}
              title={item.title}
              desc={item.desc}
              btnText={item.btnText}
              path={item.path}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
