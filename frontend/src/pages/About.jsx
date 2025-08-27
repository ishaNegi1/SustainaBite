import React from "react";
import {
  blog1,
  donate2,
  fertilizer2,
  leftover2,
  lifecycle,
  trash,
  community,
  goals,
  about,
} from "../assets/pictures";
import { Carousel, PageSeo } from "../components/allComponents";

const About = () => {
  return (
    <>
      <PageSeo
        title="About"
        description="Learn more about SustainaBite's mission to fight food waste and promote sustainable living."
        keywords="about us, food waste, sustainability, SustainaBite"
      />

      <div
        className="text-center py-20 px-4 bg-[#1c4830] text-white bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: `url(${about})`, backgroundSize: "cover" }}
      >
        <div className="absolute inset-0 bg-black sm:opacity-40 opacity-20"></div>
        <div className=" relative z-10">
          <h1 className="text-4xl font-extrabold">About SustainaBite</h1>
          <p className="mt-4 text-xl max-w-3xl mx-auto font-medium">
            Tackling food waste with purpose and passion - for people and the
            planet.
          </p>
        </div>
      </div>
      <Carousel
        carousel={[
          "Who We Are",
          "Our Mission",
          "What We Do",
          "Why It Matters",
          "How It Works",
          "Our Impact",
          "Community Voices",
          "Sustainability Goals",
        ]}
      />
      <div>
        <div className=" flex sm:flex-row flex-col mb-20 mt-14 px-4 py-8 bg-[#1c4830] dark:bg-[#85CA81] justify-center items-center">
          <img
            src={blog1}
            className=" lg:h-64 lg:w-64 sm:h-72 sm:w-72 w-64 h-64 rounded-full z-10"
          />
          <div className=" sm:w-[70%] sm:pl-20 sm:pr-14 sm:rounded-r-full border-2 sm:relative -left-12 flex flex-col justify-center bg-white dark:bg-[#1c4830] dark:text-white text-[#1c4830] border-[#fa453c] mt-8 sm:mt-0 p-4 sm:p-0 mx-3 sm:mx-0 rounded-2xl">
            <h1 className=" lg:text-3xl sm:text-2xl text-xl sm:py-3 pb-3 font-medium sm:text-left text-center">
              Who We Are
            </h1>
            <p className=" break-words lg:pb-4 sm:pb-2 text-justify">
              SustainaBite is a community-driven platform dedicated to reducing
              food waste, promoting sustainability, and helping those in need.
              We connect individuals, restaurants, and organizations to ensure
              that no food goes to waste.
            </p>
          </div>
        </div>

        <div className=" flex sm:flex-row flex-col-reverse mb-20 px-4 py-8 bg-[#1c4830] dark:bg-[#85CA81] justify-center items-center">
          <div className=" sm:w-[70%] sm:px-20 sm:rounded-l-full border-2 sm:relative -right-12 flex flex-col justify-center bg-white dark:bg-[#1c4830] dark:text-white text-[#1c4830] border-[#fa453c] mt-8 sm:mt-0 p-4 sm:p-0 mx-3 sm:mx-0 rounded-2xl">
            <h1 className=" lg:text-3xl sm:text-2xl text-xl sm:py-3 pb-3  font-medium sm:text-left text-center">
              Our Mission
            </h1>
            <p className=" break-words lg:pb-4 sm:pb-2 text-justify">
              To build a sustainable ecosystem where excess food is
              redistributed, leftover recipes are shared to reduce waste, and
              awareness about food sustainability is spread widely through
              engaging blogs and ideas.
            </p>
          </div>
          <img
            src={lifecycle}
            className="  lg:h-64 lg:w-64 sm:h-72 sm:w-72 w-60 h-60 rounded-full z-10"
          />
        </div>

        <div className=" flex sm:flex-row flex-col mb-20 px-4 py-8 bg-[#1c4830] dark:bg-[#85CA81] justify-center items-center">
          <img
            src={fertilizer2}
            className="  lg:h-64 lg:w-64 sm:h-72 sm:w-72 w-60 h-60 rounded-full z-10"
          />
          <div className=" sm:w-[70%] sm:pl-20 sm:pr-14 sm:rounded-r-full border-2 sm:relative -left-12 flex flex-col justify-center bg-white dark:bg-[#1c4830] dark:text-white text-[#1c4830] border-[#fa453c] mt-8 sm:mt-0 p-4 sm:p-0 mx-3 sm:mx-0 rounded-2xl">
            <h1 className=" lg:text-3xl sm:text-2xl text-xl sm:py-3 pb-3  font-medium sm:text-left text-center">
              What We Do
            </h1>
            <p className=" break-words lg:pb-4 sm:pb-2 text-justify">
              We enable easy food donations, access to creative leftover
              recipes, and informative blogs that raise awareness. Users can
              also purchase organic fertilizers made from compost - closing the
              loop on food waste.
            </p>
          </div>
        </div>

        <div className=" flex sm:flex-row flex-col-reverse mb-20 px-4 py-8 bg-[#1c4830] dark:bg-[#85CA81] justify-center items-center">
          <div className=" sm:w-[70%] sm:px-20 sm:rounded-l-full border-2 sm:relative -right-12 flex flex-col justify-center bg-white dark:bg-[#1c4830] dark:text-white text-[#1c4830] border-[#fa453c] mt-8 sm:mt-0 p-4 sm:p-0 mx-3 sm:mx-0 rounded-2xl">
            <h1 className=" lg:text-3xl sm:text-2xl text-xl sm:py-3 pb-3  font-medium sm:text-left text-center">
              Why It Matters
            </h1>
            <p className=" break-words lg:pb-4 sm:pb-2 text-justify">
              Every meal saved is a step towards fighting hunger. Every recipe
              shared inspires someone to waste less. Our services aim to create
              impact and build a sustainable future.
            </p>
          </div>
          <img
            src={leftover2}
            className=" lg:h-64 lg:w-64 sm:h-72 sm:w-72 w-60 h-60 rounded-full z-10"
          />
        </div>

        <div className=" flex sm:flex-row flex-col mb-20 px-4 py-8 bg-[#1c4830] dark:bg-[#85CA81] justify-center items-center">
          <img
            src={trash}
            className="  lg:h-64 lg:w-64 sm:h-72 sm:w-72 w-60 h-60 rounded-full z-10"
          />
          <div className=" sm:w-[70%] sm:pl-20 sm:pr-14 sm:rounded-r-full border-2 sm:relative -left-12 flex flex-col justify-center bg-white dark:bg-[#1c4830] dark:text-white text-[#1c4830] border-[#fa453c] mt-8 sm:mt-0 p-4 sm:p-0 mx-3 sm:mx-0 rounded-2xl">
            <h1 className=" lg:text-3xl sm:text-2xl text-xl sm:py-3 pb-3  font-medium sm:text-left text-center">
              How It Works
            </h1>
            <p className=" break-words lg:pb-4 sm:pb-2 text-justify">
              Users can sign up and access all features from a single dashboard.
              Food donors list what they have; collectors are notified in
              real-time. Users can also explore and cook leftover recipes.
              Shoppers browse and buy fertilizers. It's seamless and
              user-friendly.
            </p>
          </div>
        </div>

        <div className=" flex sm:flex-row flex-col-reverse mb-20 px-4 py-8 bg-[#1c4830] dark:bg-[#85CA81] justify-center items-center">
          <div className=" sm:w-[70%] sm:px-20 sm:rounded-l-full border-2 sm:relative -right-12 flex flex-col justify-center bg-white dark:bg-[#1c4830] dark:text-white text-[#1c4830] border-[#fa453c] mt-8 sm:mt-0 p-4 sm:p-0 mx-3 sm:mx-0 rounded-2xl">
            <h1 className=" lg:text-3xl sm:text-2xl text-xl sm:py-3 pb-3  font-medium sm:text-left text-center">
              Our Impact
            </h1>
            <p className=" break-words lg:pb-4 sm:pb-2 text-justify">
              To date, we've saved thousands of meals, diverted tons of waste
              from landfills, and empowered countless individuals with
              sustainable practices. Our reach continues to grow, thanks to our
              amazing community of changemakers.
            </p>
          </div>
          <img
            src={donate2}
            className="  lg:h-64 lg:w-64 sm:h-72 sm:w-72 w-60 h-60 rounded-full z-10"
          />
        </div>

        <div className=" flex sm:flex-row flex-col mb-20 px-4 py-8 bg-[#1c4830] dark:bg-[#85CA81] justify-center items-center">
          <img
            src={community}
            className="  lg:h-64 lg:w-64 sm:h-72 sm:w-72 w-60 h-60 rounded-full z-10"
          />
          <div className=" sm:w-[70%] sm:pl-20 sm:pr-14 sm:rounded-r-full border-2 sm:relative -left-12 flex flex-col justify-center bg-white dark:bg-[#1c4830] dark:text-white text-[#1c4830] border-[#fa453c] mt-8 sm:mt-0 p-4 sm:p-0 mx-3 sm:mx-0 rounded-2xl">
            <h1 className=" lg:text-3xl sm:text-2xl text-xl sm:py-3 pb-3  font-medium sm:text-left text-center">
              Community Voices
            </h1>
            <p className=" break-words lg:pb-4 sm:pb-2 text-justify">
              We celebrate the voices that drive change - from people donating
              food, to bloggers inspiring creativity. Their stories and
              testimonials fuel our motivation every day.
            </p>
          </div>
        </div>

        <div className=" flex sm:flex-row flex-col-reverse mb-20 px-4 py-8 bg-[#1c4830] dark:bg-[#85CA81] justify-center items-center">
          <div className=" sm:w-[70%] sm:px-20 sm:rounded-l-full border-2 sm:relative -right-12 flex flex-col justify-center bg-white dark:bg-[#1c4830] dark:text-white text-[#1c4830] border-[#fa453c] mt-8 sm:mt-0 p-4 sm:p-0 mx-3 sm:mx-0 rounded-2xl">
            <h1 className=" lg:text-3xl sm:text-2xl text-xl sm:py-3 pb-3  font-medium sm:text-left text-center">
              Sustainability Goals
            </h1>
            <p className=" break-words lg:pb-4 sm:pb-2 text-justify">
              SustainaBite contributes directly to multiple Sustainable
              Development Goals including Zero Hunger, Responsible Consumption
              and Production, and Climate Action. Sustainability is at the core
              of everything we do.
            </p>
          </div>
          <img
            src={goals}
            className="  lg:h-64 lg:w-64 sm:h-72 sm:w-72 w-60 h-60 rounded-full z-10"
          />
        </div>
      </div>
    </>
  );
};

export default About;
