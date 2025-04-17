import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { logo } from "../assets/pictures";

const Footer = () => {
  return (
    <footer className="bg-[#133221] text-white py-10 px-8 md:px-20">
      <div className=" grid grid-cols-2 sm:grid-cols-4 sm:gap-10 gap-14 mb-10">
        <div>
          <img src={logo} alt="logo" className=" w-14 h-14 mb-2" />
          <h1 className="text-2xl font-semibold mb-2">SustainaBite</h1>
          <p className="text-sm text-gray-200 break-words max-w-xs">
          Reducing Waste, Feeding Lives, and Growing a Greener Tomorrow.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-3">Quick Links</h2>
          <ul className="space-y-2 text-gray-200 text-sm">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/">Our Impact</Link></li>
            <li><Link to="/">FAQs</Link></li>
            <li><Link to="/">Testimonials</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-3">Our Services</h2>
          <ul className="space-y-2 text-gray-200 text-sm">
            <li><Link to="/">Donate Food</Link></li>
            <li><Link to="/">Compost Collection</Link></li>
            <li><Link to="/">Buy Fertilizer</Link></li>
            <li><Link to="/">Leftover Recipes</Link></li>
            <li><Link to="/">Sustainability Blogs</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-3">Contact Us</h2>
          <p className="text-sm text-gray-200">
            📍 123 Green Street, Delhi, India
          </p>
          <p className="text-sm text-gray-200 break-words max-w-xs">📧 support@sustainabite.org</p>
          <p className="text-sm text-gray-200">📞 +91 98765 43210</p>

          <div className="flex space-x-4 mt-4 text-2xl text-white flex-wrap">
            <Link to="/"><FontAwesomeIcon icon={faInstagram} /></Link>
            <Link to="/"><FontAwesomeIcon icon={faFacebook} /></Link>
            <Link to="/"><FontAwesomeIcon icon={faLinkedin} /></Link>
            <Link to="/"><FontAwesomeIcon icon={faXTwitter} /></Link>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-300 pt-4 text-center text-base text-gray-200">
        © 2025 SustainaBite. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
