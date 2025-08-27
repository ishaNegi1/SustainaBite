import React, { useEffect, useRef, useState } from "react";

const Counter = ({ end, duration, startCounting }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startCounting) return;

    let start = 0;
    const incrementTime = Math.floor(duration / end);

    const counter = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(counter);
    }, incrementTime);

    return () => clearInterval(counter);
  }, [end, duration, startCounting]);

  return <span>{count}+</span>;
};

const ImpactCounter = () => {
  const sectionRef = useRef(null);
  const [startCounting, setStartCounting] = useState(false);

  const stats = [
    { label: "Meals Delivered", value: 950 },
    { label: "Fertilizers Purchased", value: 300 },
    { label: "NGOs Partnered", value: 15 }, 
    { label: "Blogs Posted", value: 200 },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCounting(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="bg-[#85CA81] pb-10 pt-5 px-4 sm:mt-32 mt-28 mb-32 flex flex-col items-center"
    >
      <h1 className="font-Nunito font-bold text-3xl mb-12 text-center text-[#133221]">
        Our Impact
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {stats.map((item, index) => (
          <div
            key={index}
            className="text-center p-4 bg-white dark:bg-[#133221] shadow-xl shadow-[rgba(0,0,0,0.7)] rounded-lg border-2 border-[#fa453c] transition-transform duration-300 hover:scale-110"
          >
            <p className="text-3xl font-bold text-[#133221] dark:text-white">
              <Counter
                end={item.value}
                duration={1500}
                startCounting={startCounting}
              />
            </p>
            <p className="mt-2 text-sm font-medium text-[#133221] dark:text-white">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImpactCounter;
