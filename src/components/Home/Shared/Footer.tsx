import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCcVisa,
  FaCcMastercard,
  FaPaypal,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-16 px-8">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16">
        {/* Logo & Description */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <div className="text-4xl font-bold text-white mb-6">
            <span className="text-indigo-600">Super</span>Shop
          </div>
          <p className="text-gray-400 text-base mb-6 max-w-xs">
            Explore our extensive range of high-quality products, delivered
            straight to your door with a seamless shopping experience.
          </p>
        </div>

        {/* Customer Support */}
        <div className="flex flex-col items-center sm:items-start">
          <h3 className="text-lg font-semibold mb-4">Customer Support</h3>
          <ul className="space-y-3">
            <li>
              <a
                href="tel:+1234567890"
                className="flex items-center text-gray-400 hover:text-white transition-colors duration-300"
              >
                <FaPhoneAlt className="mr-2" />
                +1 (234) 567-890
              </a>
            </li>
            <li>
              <a
                href="mailto:support@supershop.com"
                className="flex items-center text-gray-400 hover:text-white transition-colors duration-300"
              >
                <FaEnvelope className="mr-2" />
                support@supershop.com
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center text-gray-400 hover:text-white transition-colors duration-300"
              >
                <FaMapMarkerAlt className="mr-2" />
                1234 Market St, City, Country
              </a>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center sm:items-start">
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3">
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Shop
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media & Payment Methods */}
        <div className="flex flex-col items-center sm:items-start">
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-6 mb-6">
            <a
              href="#"
              aria-label="Facebook"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <FaLinkedin size={24} />
            </a>
          </div>

          {/* Newsletter Subscription */}
          <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
          <form className="flex w-full max-w-sm">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full p-3 rounded-l-md border border-gray-600 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              type="submit"
              className="bg-indigo-600 text-white px-6 py-3 rounded-r-md hover:bg-indigo-700 focus:outline-none"
            >
              Subscribe
            </button>
          </form>

          {/* Payment Methods */}
          <h3 className="text-lg font-semibold mb-4 mt-8">Payment Methods</h3>
          <div className="flex space-x-6">
            <FaCcVisa
              size={30}
              className="text-gray-400 hover:text-white transition-colors duration-300"
            />
            <FaCcMastercard
              size={30}
              className="text-gray-400 hover:text-white transition-colors duration-300"
            />
            <FaPaypal
              size={30}
              className="text-gray-400 hover:text-white transition-colors duration-300"
            />
          </div>
        </div>
      </div>

      {/* Bottom Section - Copyright & Legal */}
      <div className="border-t border-gray-700 mt-12 pt-8 text-center">
        <p className="text-gray-400 text-sm mb-4">
          © 2025 SuperShop. All rights reserved.
        </p>
        <div className="flex justify-center space-x-12">
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            Terms & Conditions
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            Sitemap
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
