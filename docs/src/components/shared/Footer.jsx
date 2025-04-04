import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <footer className="bg-[#F3F4F6] text-gray-700 p-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1 */}
        <div data-aos="fade-up">
          <h2 className="font-semibold text-lg mb-3">Milk & Dairy Products</h2>
          <ul className="space-y-2">
            <li>Cow Milk</li>
            <li>Buffalo Milk</li>
            <li>Butter</li>
            <li>Ghee</li>
            <li>Cheese</li>
            <li>Dahi</li>
            <li>Paneer</li>
            <li>Lassi</li>
            <li>Yogurt</li>
            <li>Ice Cream</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div data-aos="fade-up" data-aos-delay="200">
          <h2 className="font-semibold text-lg mb-3">Company</h2>
          <ul className="space-y-2">
            <li>About Us</li>
            <li>How Can We Help</li>
            <li>Privacy</li>
            <li>FAQs</li>
            <li>Terms & Conditions</li>
            <li>Divya Dairy Reviews</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div data-aos="fade-up" data-aos-delay="400">
          <h2 className="font-semibold text-lg mb-3">Connect With Us</h2>
          <div className="flex space-x-4 text-gray-700 text-2xl mb-4">
            <FaFacebookF className="hover:text-[#3b5998] cursor-pointer" />
            <FaInstagram className="hover:text-[#e4405f] cursor-pointer" />
            <FaLinkedinIn className="hover:text-[#0077b5] cursor-pointer" />
            <FaYoutube className="hover:text-[#ff0000] cursor-pointer" />
          </div>
          <div className="mt-6">
            <h2 className="font-semibold text-lg mb-3">Download App</h2>
            <div className="flex space-x-4">
              <img
                src="../src/assets/logo1.png"
                alt="Google Play"
                className="w-32"
              />
              <img
                src="../src/assets/logo1.png"
                alt="App Store"
                className="w-32"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 text-sm text-gray-500 border-t pt-4 text-justify">
        "Divya Dairy" is owned & managed by Divya Dairy Pvt. Ltd. Images and videos are for representation purposes; actual products may vary. Product availability is subject to location and stock changes. Price, Offers, Discounts and Festival combos are subject to product availability and location. Price and other benefits might fluctuate. The product-related information is provided for general informational and educational purposes only and is not a substitute for professional advice. Check the product label for batch, manufacturing details, and other info before use. For further information, reach out to Divya Dairy customer service.
      </div>
    </footer>
  );
}
