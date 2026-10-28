import React from 'react';
import image from '../../assets/Container/chefs.png';
import {
  FaInstagram,
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaLocationDot,
  FaPhone,
  FaEnvelope,
  FaArrowUp,
  FaShieldHalved,
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
  FaCcApplePay,
} from 'react-icons/fa6';

const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (href, category = null) => {
    if (category) {
      setSelectedCategory(category);
    }
    const elem = document.querySelector(href);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300 pl-10 pt-16 pb-8 border-t border-gray-800 transition-colors">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-gray-800">
        
          <div className="lg:col-span-2 space-y-4">
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              className="flex items-center gap-2 text-2xl font-extrabold text-white group"
            >
              <span className='text-orange-500'>
                WorldPlate
              </span>
            </a>

            <p className="text-sm text-gray-400 max-w-sm leading-relaxed">
              Your Premier Destination for Exceptional Dining. Discover a world of flavors with freshly prepared dishes, premium ingredients, and unforgettable culinary experiences. At WorldPlate, we bring quality, taste, and convenience together to make every meal special.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="#hero"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-gray-800 hover:bg-gradient-to-tr hover:from-amber-500 hover:to-pink-500 text-gray-300 hover:text-white flex items-center justify-center transition-all duration-300 cursor-pointer shadow-sm"
              >
                <FaInstagram className="text-sm" />
              </a>
              <a
                href="#hero"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-gray-800 hover:bg-blue-600 text-gray-300 hover:text-white flex items-center justify-center transition-all duration-300 cursor-pointer shadow-sm"
              >
                <FaFacebookF className="text-sm" />
              </a>
              <a
                href="#hero"
                aria-label="Twitter / X"
                className="w-9 h-9 rounded-full bg-gray-800 hover:bg-black text-gray-300 hover:text-white flex items-center justify-center transition-all duration-300 cursor-pointer shadow-sm"
              >
                <FaXTwitter className="text-sm" />
              </a>
              <a
                href="#hero"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-gray-800 hover:bg-blue-700 text-gray-300 hover:text-white flex items-center justify-center transition-all duration-300 cursor-pointer shadow-sm"
              >
                <FaLinkedinIn className="text-sm" />
              </a>
            </div>
          </div>
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a
                  href="#hero"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick('#hero');
                  }}
                  className="hover:text-primary transition-colors cursor-pointer"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick('#products', 'All');
                  }}
                  className="hover:text-primary transition-colors cursor-pointer"
                >
                  Our Catalog
                </a>
              </li>
              <li>
                <a
                  href="#top-rated"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick('#top-rated');
                  }}
                  className="hover:text-primary transition-colors cursor-pointer"
                >
                  Top Products
                </a>
              </li>
              <li>
                <a
                  href="#banner"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick('#banner');
                  }}
                  className="hover:text-primary transition-colors cursor-pointer"
                >
                  Offers
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick('#testimonials');
                  }}
                  className="hover:text-primary transition-colors cursor-pointer"
                >
                  Customer Reviews
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Working Hours
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li
                  className="hover:text-primary transition-colors cursor-pointer">  
                  Monday-Friday: 8 AM-10 PM
              </li>
              <li
                  className="hover:text-primary transition-colors cursor-pointer">  
                  Saturday: 9 AM-12 PM
              </li>
              <li
                  className="hover:text-primary transition-colors cursor-pointer">  
                  Sunday: 9 AM - 9 PM
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Customer Support
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li className="flex items-start gap-2.5">
                <FaLocationDot className="text-primary mt-0.5 shrink-0 text-sm" />
                <span>124 St, Bole, Addis Ababa, Ethiopia</span>
              </li>
              <li className="flex items-center gap-2.5">
                <FaPhone className="text-primary shrink-0 text-sm" />
                <span>+2519-1234-5678</span>
              </li>
              <li className="flex items-center gap-2.5">
                <FaEnvelope className="text-primary shrink-0 text-sm" />
                <span>[EMAIL_ADDRESS]</span>
              </li>
              <li className="flex items-center gap-2.5 pt-1 text-emerald-400">
                <FaShieldHalved className="shrink-0 text-sm" />
                <span>Quality Satisfaction</span>
              </li>
            </ul>
          </div>

        </div>
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div>
            © 2026 Restaurant System. All rights reserved. Built with love by Faruk
          </div>
          <div className="flex items-center gap-3 text-2xl text-gray-400">
            <FaCcVisa className="hover:text-white transition-colors" title="Visa" />
            <FaCcMastercard className="hover:text-white transition-colors" title="Mastercard" />
            <FaCcPaypal className="hover:text-white transition-colors" title="PayPal" />
            <FaCcApplePay className="hover:text-white transition-colors" title="Apple Pay" />
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-800 hover:bg-primary hover:text-white text-gray-400 transition-all cursor-pointer font-medium"
            title="Back to top"
          >
            <span>Back to top</span>
            <FaArrowUp className="text-[10px]" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
