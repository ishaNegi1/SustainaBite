import React from "react";
import { dashboard } from "../assets/pictures";

const Dashboard = () => {
  return (
    <>
      <div
        className="text-center py-20 px-4 bg-[#133221] text-white relative"
        style={{
          backgroundImage: `url(${dashboard})`,
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-black sm:opacity-60 opacity-40"></div>
        <div className="relative z-10">
          <h1 className="text-4xl font-extrabold">Dashboard</h1>
          <p className="mt-4 text-xl max-w-3xl mx-auto font-medium">
            Your impact, your journey - track donations, monitor pickups, and
            see the difference you're making in real time.
          </p>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
