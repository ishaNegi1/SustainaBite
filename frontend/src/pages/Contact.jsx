import React, { useState } from "react";
import { contact, connect1, connect } from "../assets/pictures";
import submitForm from "../hooks/contactApi";
import PageSeo from "../components/PageSeo";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const result = await submitForm(formData);
    if (result.error) {
      alert("Failed to send message. Please try again later.");
    } else {
      alert("Your message has been sent!");
      setFormData({ name: "", email: "", phone: "", message: "" });
    }
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <>
      <PageSeo
        title="Contact"
        description="Get in touch with SustainaBite for food donations, partnerships, or inquiries."
        keywords="contact, food donation support, SustainaBite"
      />

      <div
        className="text-center py-20 px-4 bg-[#1c4830] text-white bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: `url(${contact})`, backgroundSize: "cover" }}
      >
        <div className="absolute inset-0 bg-black sm:opacity-60 opacity-40"></div>
        <div className=" relative z-10">
          <h1 className="text-4xl font-extrabold">Contact Us</h1>
          <p className="mt-4 text-xl max-w-3xl mx-auto font-medium">
            We're here to answer your questions, hear your ideas, and work
            together toward a waste-free future.
          </p>
        </div>
      </div>

      <div className="bg-[#133221] sm:py-6 sm:px-6 my-14 sm:mx-20 mx-4 rounded-xl flex flex-col-reverse sm:flex-row justify-between text-white">
        <div className=" sm:w-1/2 flex flex-col">
          <form className="flex flex-col z-10 px-4" onSubmit={handleSubmit}>
            <h1 className=" font-Merriweather sm:text-2xl text-xl text-center font-semibold my-8">
              Let's Make a Difference Together
            </h1>
            <label
              htmlFor="name"
              className="mb-2 sm:text-base lg:text-lg text-lg"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="border-0 border-b-2 py-1 px-2 rounded-md lg:mb-6 sm:mb-4 mb-6 bg-transparent border-[#FFFFFF] text-sm focus:outline-none"
            />
            <label
              htmlFor="email"
              className="mb-2 sm:text-base lg:text-lg text-lg"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="border-0 border-b-2 py-1 px-2 rounded-md lg:mb-6 sm:mb-4 mb-6 bg-transparent border-[#FFFFFF] text-sm focus:outline-none"
            />
            <label
              htmlFor="phone"
              className="mb-2 sm:text-base lg:text-lg text-lg"
            >
              Phone number
            </label>
            <input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={(e) => {
                const val = e.target.value;
                if (/^\d{0,10}$/.test(val)) {
                  setFormData({ ...formData, phone: val });
                }
              }}
              required
              className="border-0 border-b-2 py-1 px-2 rounded-md lg:mb-6 sm:mb-4 mb-6 bg-transparent border-[#FFFFFF] focus:outline-none text-sm"
            />

            <label
              htmlFor="message"
              className="mb-2 sm:text-base lg:text-lg text-lg"
            >
              Message
            </label>
            <textarea
              type="text"
              id="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="border-0 border-b-2 py-1 px-2 rounded-md lg:mb-6 sm:mb-4 mb-6 bg-transparent border-[#FFFFFF] text-sm focus:outline-none"
            />
            <button
              type="submit"
              className=" bg-[#fa453c] text-[#ffffff] rounded-lg w-40 sm:text-md lg:text-xl text-lg font-medium transition-all duration-500 ease-linear transform hover:scale-110 font-Coustard py-1 mt-7 mb-7 sm:mb-0 mx-auto"
            >
              {loading ? "Loading..." : "Submit"}
            </button>
          </form>
        </div>
        <img
          src={connect}
          alt="connect"
          className=" w-[45%] h-[34rem] rounded-xl sm:block hidden"
        />
        <img
          src={connect1}
          alt="connect1"
          className=" rounded-tl-xl rounded-tr-xl sm:hidden block"
        />
      </div>

      {submitted ? (
        <div className="bg-green-200 border border-[#133221] text-[#133221] p-6 mx-6 rounded-lg text-center space-y-3 mb-16">
          <h2 className="text-2xl font-semibold">Thank You!</h2>
          <p className="text-lg font-normal">We've received your message.</p>
          <p className="text-lg font-normal">
            Our team will review your query and respond as soon as possible.
          </p>
          <p className="text-base font-medium">
            We value your time and appreciate you reaching out to us. 💚
          </p>
        </div>
      ) : (
        " "
      )}

      <div className=" bg-[#85CA81] py-10 px-6 mb-14 flex flex-col justify-center items-center text-center">
        <p className="text-xl font-Nunito font-bold mb-16 mx-auto max-w-3xl text-[#133221]">
          We'd love to connect with you. Whether you have a question, feedback,
          or a partnership idea - reach out and we'll get back to you soon.
        </p>
        <div className=" grid grid-cols-2 sm:grid-cols-4 gap-6 text-[#133221] dark:text-[#FFFFFF]">
          <div className=" text-center p-4 bg-white dark:bg-[#133221] border-2 border-[#fa453c] shadow-xl shadow-[rgba(0,0,0,0.7)] rounded-lg transition-transform duration-300 hover:scale-110">
            <p className=" font-bold text-lg">Email</p>
            <a
              href="mailto:support@sustainabite.com"
              className="underline break-words"
            >
              support@sustainabite.com
            </a>
          </div>
          <div className=" text-center p-4 bg-white dark:bg-[#133221] border-2 border-[#fa453c] shadow-xl shadow-[rgba(0,0,0,0.7)] rounded-lg transition-transform duration-300 hover:scale-110">
            <p className=" font-bold text-lg">Phone</p>
            <a href="tel:+911234567890" className="underline break-words">
              +91 98765 43210
            </a>
          </div>
          <div className=" text-center p-4 bg-white dark:bg-[#133221] border-2 border-[#fa453c] shadow-xl shadow-[rgba(0,0,0,0.7)] rounded-lg transition-transform duration-300 hover:scale-110">
            <p className=" font-bold text-lg">Instagram</p>
            <a
              href="https://instagram.com/sustainabite"
              className="underline break-words"
              target="_blank"
            >
              instagram.com/sustainabite
            </a>
          </div>
          <div className=" text-center p-4 bg-white dark:bg-[#133221] border-2 border-[#fa453c] shadow-xl shadow-[rgba(0,0,0,0.7)] rounded-lg transition-transform duration-300 hover:scale-110">
            <p className=" font-bold text-lg">Facebook</p>
            <a
              href="https://facebook.com/sustainabite"
              className="underline break-words"
              target="_blank"
            >
              facebook.com/sustainabite
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
