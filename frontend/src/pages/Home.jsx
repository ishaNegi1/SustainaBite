import React from "react";
import { Link } from "react-router-dom";
import { bg, img1 } from "../assets/pictures";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  Card,
  ImpactCounter,
  Questions,
  Testimonial,
  Carousel,
  PageSeo,
} from "../components/allComponents";

const Home = () => {
  const status = useSelector((state) => state.auth.status);
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
      <PageSeo
        title="Home"
        description="SustainaBite - Reducing food waste with donations, recipes, blogs and sustainable farming."
        keywords="food donation, leftover recipes, fertilizer, sustainability, blogs"
      />

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
          <div className=" text-center font-Nunito sm:text-lg sm:pt-4 pt-3">
            <p>
              Every meal you donate reaches those who truly need it. Our
              platform ensures your food goes directly to verified NGOs and
              children in need. Track your impact, earn rewards, and learn ways
              to reduce waste through leftover recipes and sustainability blogs.
              Join us in creating a transparent, waste-free, and hunger-free
              future
            </p>
          </div>
          {status ? (
            <div className=" text-center">
              <Link to="/dashboard">
                <button className="bg-[#fa453c] text-[#FFFFFF] py-1 rounded-lg w-32 sm:text-xl text-lg font-medium transition-all duration-500 ease-linear transform hover:scale-110 font-Coustard mt-7">
                  Dashboard
                </button>
              </Link>
            </div>
          ) : (
            <div className=" text-center">
              <Link to="/signup">
                <button className="bg-[#fa453c] text-[#FFFFFF] py-1 rounded-lg w-32 sm:text-xl text-lg font-medium transition-all duration-500 ease-linear transform hover:scale-110 font-Coustard mt-7">
                  JOIN US
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
      <Carousel
        carousel={[
          "Donate Food",
          "Leftover Recipes",
          "Awareness Blogs",
          "Organic Fertilizer",
        ]}
      />
      <Card />
      <ImpactCounter />
      <Questions />
      <Testimonial />

      {status ? (
        <div className="text-center text-[#133221] dark:text-white mb-28">
          <h2 className="text-3xl font-Nunito font-bold mb-6 px-5">
            Thanks for Being With Us
          </h2>
          <p className="text-lg max-w-3xl mx-auto mb-8 px-8">
            You're already making a difference! Keep donating, sharing recipes,
            and spreading awareness. Together, we'll build a hunger-free and
            waste-free future. 💚
          </p>
          <div className="flex justify-center">
            <Link to="/dashboard">
              <button className="bg-[#fa453c] text-[#FFFFFF] py-1 rounded-lg w-32 sm:text-xl text-lg font-medium transition-all duration-500 ease-linear transform hover:scale-110 font-Coustard">
                Dashboard
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="text-center text-[#133221] dark:text-white mb-28">
          <h2 className="text-3xl font-Nunito font-bold mb-6 px-5">
            Make Every Meal Count
          </h2>
          <p className="text-lg max-w-3xl mx-auto mb-8 px-8">
            Join SustainaBite today and be part of a community that turns
            surplus food into hope. Together, we can feed more children, reduce
            food waste, and create a sustainable future. 🌱
          </p>
          <div className="flex justify-center">
            <Link to="/signup">
              <button className="bg-[#fa453c] text-[#FFFFFF] py-1 rounded-lg w-32 sm:text-xl text-lg font-medium transition-all duration-500 ease-linear transform hover:scale-110 font-Coustard">
                JOIN US
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
