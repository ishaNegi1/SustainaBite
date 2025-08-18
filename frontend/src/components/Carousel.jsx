import React from "react";

const Carousel = ({ carousel }) => {
  return (
    <div className="bg-[#85CA81] text-[#133221] h-16 flex items-center overflow-hidden whitespace-nowrap my-8">
      <div className="flex space-x-16 text-2xl sm:font-semibold font-medium animate-marquee2">
        {[...carousel, ...carousel].map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
