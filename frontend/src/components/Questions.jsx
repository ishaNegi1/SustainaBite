import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faCaretUp,
  faArrowDown,
  faArrowUp,
} from "@fortawesome/free-solid-svg-icons";

const Box = ({ ques, ans, isOpen, onToggle }) => {
  return (
    <div className={`transition-all duration-500 ${isOpen ? "mb-6" : "mb-1"}`}>
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-x-3 px-4 py-2 bg-[#21583a] hover:bg-[#2c734c] transition-colors duration-300 rounded-lg text-left"
        aria-expanded={isOpen}
      >
        <FontAwesomeIcon
          icon={isOpen ? faCaretUp : faCaretDown}
          className="text-white h-5 w-5 flex-shrink-0"
        />
        <p className="font-medium text-lg sm:text-lg text-white">{ques}</p>
      </button>

      <div
        className={`px-10 py-3 text-base overflow-hidden mb-3 rounded-lg font-medium text-[#133221] bg-[#85CA81] transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {ans}
      </div>
    </div>
  );
};

const Questions = () => {
  const [seeMore, setSeeMore] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const faqs = [
    {
      ques: "How is food collected after donation?",
      ans: "Our verified NGOs and volunteers collect food directly from your location at your scheduled time, ensuring hygiene and timely delivery.",
    },
    {
      ques: "What type of food can be donated?",
      ans: "Freshly cooked meals, dry food, or sealed packaged items. We do not accept spoiled food or items from used plates.",
    },
    {
      ques: "What waste qualifies for compost collection?",
      ans: "Biodegradable kitchen waste like fruit peels, vegetable scraps, tea leaves, and eggshells. No meat, dairy, or oily foods, please.",
    },
    {
      ques: "What are SustainaBite Coins?",
      ans: "SustainaBite Coins are reward points earned by donating food, composting, or contributing content. You can redeem them for discounts and perks.",
    },
    {
      ques: "What is the organic fertilizer made from?",
      ans: "It's made from composted food and plant waste, rich in nutrients, and completely safe for gardens and farms.",
    },
    {
      ques: "How does the leftover recipe feature work?",
      ans: "Enter ingredients you have, and we suggest easy, waste-free recipes to help you make the most of your leftovers.",
    },
    {
      ques: "How can I schedule a compost pickup?",
      ans: "Just log in, go to the “Compost Collection” section, and select your preferred date and time for pickup.",
    },
    {
      ques: "Who can donate food?",
      ans: "Anyone! Individuals, restaurants, cafés, or caterers can all donate surplus food, as long as it's fresh and safe to eat.",
    },
    {
      ques: "How can I get discounts on fertilizer?",
      ans: "Use your SustainaBite Coins earned from donations or composting to get discounts during checkout.",
    },
    {
      ques: "Can I write a blog or share a recipe on SustainaBite?",
      ans: "Yes! We welcome community contributions. Just submit your blog or recipe through the respective section on the website.",
    },
    {
      ques: "Is it safe to donate or receive food through the platform?",
      ans: "100%. We ensure that only fresh, edible food is collected and delivered, following strict hygiene and safety protocols.",
    },
    {
      ques: "What topics do your blogs cover?",
      ans: "Food waste solutions, composting tips, eco-living hacks, sustainable cooking, environmental news, and more.",
    },
  ];

  const displayFaqs = seeMore ? faqs : faqs.slice(0, 8);

  return (
    <div className=" mb-24 flex flex-col justify-center items-center">
      <h1 className="text-[#133221] dark:text-white font-Nunito font-bold sm:text-3xl text-3xl text-center">
        Your Questions, Answered
      </h1>

      <div className=" flex flex-col mt-14 px-7 sm:px-24 md:px-36 lg:px-64">
        {displayFaqs.map((item, index) => (
          <div key={index} className=" flex flex-col -mb-5">
            <Box
              ques={item.ques}
              ans={item.ans}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          </div>
        ))}
      </div>
      {faqs.length > 8 && (
        <div
          className=" text-lg text-white font-medium flex mt-2 transition-all duration-500 transform hover:scale-110 bg-[#fa453c] rounded-md p-1"
          onClick={() => setSeeMore(!seeMore)}
        >
          <button>{seeMore ? "See less" : "See more"}</button>
          <button className=" ml-2">
            {<FontAwesomeIcon icon={seeMore ? faArrowUp : faArrowDown} />}
          </button>
        </div>
      )}
    </div>
  );
};

export default Questions;
