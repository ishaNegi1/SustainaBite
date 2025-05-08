import React from "react";
import { Link } from "react-router-dom";
import { bg, img1 } from "../assets/pictures";
import { useEffect, useState } from "react";
import {
  Card,
  ImpactCounter,
  Questions,
  Testimonial,
  Carousel,
} from "../components/allComponents";

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
        className=" text-[#FFFFFF] h-auto bg-[#133221] flex items-center justify-center bg-cover bg-center bg-no-repeat relative py-12"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className=" z-10 px-4 lg:w-2/4 md:w-2/3 flex flex-col">
          <div className=" text-center font-Pacifico sm:text-2xl text-xl mb-5">
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
              <button className="bg-[#fa453c] text-[#FFFFFF] py-1 rounded-lg w-32 sm:text-xl text-lg font-medium transition-all duration-500 ease-linear transform hover:scale-110 font-Coustard mt-7">
                JOIN US
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Carousel
        carousel={[
          "Donate Food",
          "Compost Collection",
          "Leftover Recipes",
          "Awareness Blogs",
          " Organic Fertilizer",
        ]}
      />
      <Card />
      <ImpactCounter />
      <Questions />
      <Testimonial />
    </>
  );
};

export default Home;
