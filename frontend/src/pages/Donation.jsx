import React, { useState } from "react";
import { donate1 } from "../assets/pictures";
import Carousel from "../components/Carousel";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Donation = () => {
  const userName = useSelector((state) => state.auth.user.name);
  const userEmail = useSelector((state) => state.auth.user.email);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(true);

  const [formData, setFormData] = useState({
    name: userName || "",
    email: userEmail || "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
    foodTypes: [],
    quantity: "",
    duration: "",
    image: null,
    time: "",
  });

  const handleChange = (e) => {
    const { id, value, type, checked, files } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => {
        let updated = [...prev.foodTypes];
        if (checked) {
          updated.push(id);
        } else {
          updated = updated.filter((item) => item !== id);
        }
        return { ...prev, foodTypes: updated };
      });
    } else if (type === "file") {
      setFormData({ ...formData, [id]: files[0] });
    } else {
      setFormData({ ...formData, [id]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    console.log("Form submitted:", formData);
    setSubmitted(true);
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
          <h1 className="text-4xl font-extrabold">Food Donation</h1>
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

      <form
        onSubmit={handleSubmit}
        className="bg-[#133221] text-white sm:p-10 p-8 my-14 sm:mx-20 mx-4 rounded-xl"
      >
        <h1 className="font-Merriweather text-2xl text-center font-semibold mb-2">
          Donate Food
        </h1>
        <p className="font-Nunito text-lg text-center font-medium mt-4 mb-14">
          Sharing a meal spreads hope. All fields are required to ensure safe &
          timely pickup.{" "}
          <span className="text-[#fa453c] font-semibold">
            Only vegetarian food is accepted.
          </span>
        </p>

        <div className=" flex flex-col sm:grid sm:grid-cols-2 gap-y-8 gap-x-24">
          <div>
            <label htmlFor="name" className="block mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              required
              onChange={handleChange}
              className="w-full border-b-2 text-sm rounded-md border-white bg-transparent py-2 px-3 focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              required
              onChange={handleChange}
              className="w-full border-b-2 text-sm rounded-md border-white bg-transparent py-2 px-3 focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block mb-1">
              Phone No.
            </label>
            <input
              type="tel"
              id="phone"
              value={formData.phone}
              required
              onChange={(e) => {
                const val = e.target.value;
                if (/^\d{0,10}$/.test(val)) {
                  handleChange(e);
                }
              }}
              className="w-full border-b-2 text-sm rounded-md border-white bg-transparent py-2 px-3 focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="pincode" className="block mb-1">
              Pincode
            </label>
            <input
              type="text"
              id="pincode"
              value={formData.pincode}
              required
              onChange={(e) => {
                const val = e.target.value;
                if (/^\d{0,6}$/.test(val)) {
                  handleChange(e);
                }
              }}
              className="w-full border-b-2 text-sm rounded-md border-white bg-transparent py-2 px-3 focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="address" className="block mb-1">
              Address
            </label>
            <input
              type="text"
              id="address"
              value={formData.address}
              required
              onChange={handleChange}
              className="w-full border-b-2 text-sm rounded-md border-white bg-transparent py-2 px-3 focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="city" className="block mb-1">
              City
            </label>
            <input
              type="text"
              id="city"
              value={formData.city}
              required
              onChange={handleChange}
              className="w-full border-b-2 text-sm rounded-md border-white bg-transparent py-2 px-3 focus:outline-none"
            />
          </div>

          <div className="col-span-2">
            <label className="block mb-2">Food Type</label>
            <div className="flex flex-wrap gap-4">
              {["Cooked", "Packaged", "Bakery", "Grains", "Fruits"].map(
                (item) => (
                  <label key={item} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id={item.toLowerCase()}
                      checked={formData.foodTypes.includes(item.toLowerCase())}
                      onChange={handleChange}
                    />
                    {item}
                  </label>
                )
              )}
            </div>
          </div>

          <div>
            <label htmlFor="quantity" className="block mb-1">
              Quantity
            </label>
            <input
              type="text"
              id="quantity"
              value={formData.quantity}
              required
              onChange={handleChange}
              className="w-full border-b-2 text-sm rounded-md border-white bg-transparent py-2 px-3 focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="duration" className="block mb-1">
              Duration
            </label>
            <select
              id="duration"
              value={formData.duration}
              required
              onChange={handleChange}
              className="w-full border-b-2 rounded-md border-white bg-[#133221] py-2 px-3 focus:outline-none text-sm"
            >
              <option value="">Select duration</option>
              <option>Fresh (≤ 4 hours)</option>
              <option>Same Day</option>
              <option>Up to 24h (Refrigerated)</option>
              <option>Up to 48h (Frozen)</option>
            </select>
          </div>

          <div>
            <label htmlFor="image" className="block mb-1">
              Food Photo
            </label>
            <input
              type="file"
              id="image"
              accept="image/*"
              required
              onChange={handleChange}
              className="w-full"
            />
          </div>

          <div>
            <label htmlFor="time" className="block mb-1">
              Preferred Pickup Time
            </label>
            <input
              type="time"
              id="time"
              value={formData.time}
              required
              onChange={handleChange}
              className="w-full border-b-2 text-sm rounded-md border-white bg-transparent py-2 px-3 focus:outline-none"
            />
          </div>
        </div>

        <div className="text-center mt-10">
          <button
            type="submit"
            className="bg-[#fa453c] text-white my-5 rounded-lg px-12 py-1 sm:text-lg font-medium transition-all duration-300 transform hover:scale-105"
          >
            {loading ? "Loading..." : "Donate"}
          </button>
        </div>
      </form>

      {submitted ? (
        <div className=" bg-green-200 border border-[#133221] text-[#133221] p-6 mx-6 rounded-lg text-center space-y-3">
          <h2 className="text-2xl font-semibold">Thank You!</h2>
          <p className=" text-lg font-normal">
            Your donation has been successfully placed.
          </p>
          <p className=" text-lg font-normal">
            Our team will pick it up around your preferred time. You will
            receive a call before pickup.
          </p>
          <p className="font-medium text-lg">
            You can track the status of your donation (Pending / Picked up)
            anytime on your{" "}
            <Link to="/dashboard" className="text-green-700 font-semibold">
              Dashboard
            </Link>
            .
          </p>
          <p className=" text-base font-medium">
            Together, we are reducing food waste and helping those in need. 💚
          </p>
        </div>
      ) : (
        " "
      )}
      <div className="my-16 p-10 text-center bg-[#85CA81]">
        <h2 className="text-2xl font-bold mb-8 text-[#133221]">
          How Food Donation Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 dark:text-[#ffffff] text-[#133221]">
          <div className="text-center p-4 bg-white dark:bg-[#133221] dark:text-[#ffffff] border-2 border-[#fa453c] shadow-xl shadow-[rgba(0,0,0,0.7)] rounded-lg transition-transform duration-300 hover:scale-110">
            <h3 className="text-lg font-semibold">1. Fill the Form</h3>
            <p className=" mt-2">
              Provide your details and food information in the donation form.
            </p>
          </div>
          <div className="text-center p-4 bg-white dark:bg-[#133221] dark:text-[#ffffff] border-2 border-[#fa453c] shadow-xl shadow-[rgba(0,0,0,0.7)] rounded-lg transition-transform duration-300 hover:scale-110">
            <h3 className="text-lg font-semibold">2. Verification</h3>
            <p className="mt-2">
              Our team verifies and schedules a pickup at your convenience.
            </p>
          </div>
          <div className="text-center p-4 bg-white dark:bg-[#133221] dark:text-[#ffffff] border-2 border-[#fa453c] shadow-xl shadow-[rgba(0,0,0,0.7)] rounded-lg transition-transform duration-300 hover:scale-110">
            <h3 className="text-lg font-semibold">3. Food Distribution</h3>
            <p className="mt-2">
              Your food donation is safely delivered to those in need.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Donation;
