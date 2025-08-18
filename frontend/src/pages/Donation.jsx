import React from "react";
import { donate1 } from "../assets/pictures";
import Carousel from "../components/Carousel";

const Donation = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitted");
  };

  return (
    <>
      <div
        className="text-center py-20 px-4 bg-[#133221] text-white relative"
        style={{
          backgroundImage: `url(${donate1})`,
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-black sm:opacity-60 opacity-40"></div>
        <div className="relative z-10">
          <h1 className="text-4xl font-extrabold">Donations</h1>
          <p className="mt-4 text-xl max-w-3xl mx-auto font-medium">
            Giving made simple - your kindness fuels our mission. Every
            contribution helps create lasting impact and bring positive change
            to those who need it most.
          </p>
        </div>
      </div>

      <Carousel
        carousel={[
          "Delhi FoodBank",
          "Uday Foundation",
          "Goonj",
          "India FoodBanking Network",
          "The Robin Hood Army",
          "Roti Bank by Rishta Foundation",
          "Bhumi",
          "Akshaya Patra Foundation",
        ]}
      />

      <form onSubmit={handleSubmit}></form>
    </>
  );
};

export default Donation;
