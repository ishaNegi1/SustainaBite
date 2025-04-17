import React from "react";
import {
  blog2,
  donate1,
  fertilizer1,
  leftover1,
  rotten,
} from "../assets/pictures";

function Services({ src, alt, title, desc, btnText, key }) {
  return (
    <>
      <div
        className=" w-auto sm:w-[23%] h-auto bg-[#FFFFFF] text-[#133221] dark:bg-[#133221] dark:text-white rounded-lg shadow-xl shadow-[rgba(0,0,0,0.7)] p-2 flex flex-col flex-wrap"
        key={key}
      >
        <img src={src} alt={alt} className=" rounded-md" />
        <p className=" md:text-lg text-xl font-Nunito font-bold sm:font-semibold pb-1 pt-4 mx-2">
          {title}
        </p>
        <p className=" md:text-sm text-lg mx-2">{desc}</p>
        <button className=" text-white font-Coustard bg-[#fa453c] sm:w-[85%] md:w-[85%] lg:w-[60%] w-[60%] sm:text-base text-lg  mx-auto mb-3 mt-5 py-1 px-1 rounded-lg transition-all duration-500 ease-linear transform hover:scale-110">
          {btnText}
        </button>
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
    },
    {
      src: blog2,
      alt: "Compost Collection",
      title: "Compost Collection",
      desc: "Turn your kitchen waste into value! Schedule compost pickups and earn SustainaBite Coins in return.",
      btnText: "Schedule Pickup",
    },
    {
      src: fertilizer1,
      alt: "Fertilizer Purchase",
      title: "Fertilizer Purchase",
      desc: "Buy nutrient-rich organic fertilizer made from collected compost. Use your coins to get exclusive discounts.",
      btnText: "Buy Fertilizer",
    },
  ];

  const card2 = [
    {
      src: leftover1,
      alt: "Leftover Recipes",
      title: "Leftover Recipes",
      desc: "Don't waste leftovers—transform them! Enter ingredients and discover recipes you can try at home.",
      btnText: "Get Recipes",
    },
    {
      src: rotten,
      alt: "Sustainability Blogs",
      title: "Sustainability Blogs",
      desc: "Learn, share, and grow! Read or write blogs about food waste, sustainability, and eco-living.",
      btnText: "Explore Blogs",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto sm:px-4 px-8 my-20">
      <h1 className="text-[#133221] dark:text-white font-Nunito font-bold text-3xl text-center">
        Our Services
      </h1>
      <div className="flex flex-wrap justify-center gap-14 mt-16 sm:mb-24 mb-14">
        {card1.map((item, index) => (
          <Services
            key={index}
            src={item.src}
            alt={item.alt}
            title={item.title}
            desc={item.desc}
            btnText={item.btnText}
          />
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-14">
        {card2.map((item, index) => (
          <Services
            key={index}
            src={item.src}
            alt={item.alt}
            title={item.title}
            desc={item.desc}
            btnText={item.btnText}
          />
        ))}
      </div>
    </div>
  );
}

export default Card;
