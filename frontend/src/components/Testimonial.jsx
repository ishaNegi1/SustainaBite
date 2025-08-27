import React from "react";

const CarouselItem = ({ img, name, message, role }) => (
  <div className="flex-shrink-0 w-80 flex flex-col items-center px-8 py-3 text-center space-y-1">
    <img
      src={img}
      alt={name}
      className="w-28 h-28 rounded-full object-cover border-2 border-[#133221]"
    />
    <p className="text-xl font-medium">{name}</p>
    <p className="text-base font-normal">{role}</p>
    <p className="text-sm break-words max-w-xs">“{message}”</p>
  </div>
);

const Testimonial = () => {
  const testimonials = [
    {
      img: "https://randomuser.me/api/portraits/women/45.jpg",
      name: "Riya Mehta",
      role: "Home Cook, Donor",
      message:
        "I had excess food after a family event and didn't want it to go to waste. SustainaBite made it super easy to donate-it felt amazing knowing someone got a warm meal!",
    },
    {
      img: "https://randomuser.me/api/portraits/men/32.jpg",
      name: "Aditya Kapoor",
      role: "NGO Volunteer",
      message:
        "Through SustainaBite, we've been able to collect food from local cafes and distribute it to people in need daily. It's simple, efficient, and impactful.",
    },
    {
      img: "https://randomuser.me/api/portraits/women/60.jpg",
      name: "Sonal Deshmukh",
      role: "Urban Gardener",
      message:
        "I used my SustainaBite Coins to buy organic fertilizer for my rooftop garden. It's nutrient-rich, eco-friendly, and a great way to support sustainability while growing my plants!",
    },
    {
      img: "https://randomuser.me/api/portraits/men/75.jpg",
      name: "Rahul Joshi",
      role: "Restaurant Manager",
      message:
        "SustainaBite helped us reduce waste and give back to the community. It's now a routine for our team to donate leftover food after closing hours.",
    },
    {
      img: "https://randomuser.me/api/portraits/women/15.jpg",
      name: "Priya Nair",
      role: "Blogger & Recipe Contributor",
      message:
        "I love experimenting with leftovers. Sharing recipes through SustainaBite lets me inspire others to cook creatively and reduce food waste.",
    },
  ];

  return (
    <>
      <h1 className="font-Nunito font-bold text-3xl mb-16 text-center text-[#133221] dark:text-[#ffffff] px-3">
        What Our Community Says
      </h1>
      <div className="relative overflow-hidden bg-[#85CA81] text-[#133221] mb-28 py-5 group">
        <div className="flex w-max animate-marquee1 group-hover:[animation-play-state:paused]">
          {[...testimonials, ...testimonials].map((item, index) => (
            <CarouselItem key={index} {...item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Testimonial;
