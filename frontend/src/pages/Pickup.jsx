import React from "react";
import {fertilizer2} from '../assets/pictures'
import PageSeo from "../components/PageSeo";

const Pickup = () => {
  return <>
  <PageSeo
  title="Compost Collection"
  description="Schedule compost collection with SustainaBite and contribute to a greener planet."
  keywords="compost, waste management, eco-friendly, SustainaBite"
/>

  <div
          className="text-center py-20 px-4 bg-[#133221] text-white relative"
          style={{
            backgroundImage: `url(${fertilizer2})`,
            backgroundSize: "cover",
          }}
        >
          <div className="absolute inset-0 bg-black sm:opacity-60 opacity-40"></div>
          <div className="relative z-10">
            <h1 className="text-4xl font-extrabold">Compost Collection</h1>
            <p className="mt-4 text-xl max-w-3xl mx-auto font-medium">
             Closing the loop - turning kitchen scraps into green gold. Join us in transforming everyday waste into a cleaner, greener tomorrow.
            </p>
          </div>
        </div>
  </>;
};

export default Pickup;
