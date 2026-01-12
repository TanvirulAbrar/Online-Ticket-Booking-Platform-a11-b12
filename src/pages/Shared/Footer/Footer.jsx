import React from "react";
import amexCard from "./amexCard.svg";
import bkash from "./bkash.svg";
import dbbl from "./dbbl.svg";
import dinnersClub from "./dinners-club.svg";
import infinityLogo from "./Logo_infinity_gradient.svg";
import masterCard from "./masterCard.svg";
import nagad from "./nagad.svg";
import ok from "./ok.svg";
import stPay from "./stPay.svg";
import tap from "./tap.svg";
import upay from "./upay.svg";
import visaCard from "./visaCard.svg";
import Stripe from "./stripe.png";
import logo from "./logo.png";
import { NavLink } from "react-router";

const Footer = () => {
  const textcolor = "text-[#646464]";
  const payments = [
    amexCard,
    bkash,
    dbbl,
    dinnersClub,

    masterCard,
    nagad,
    ok,

    tap,
    upay,
    visaCard,
  ];
  return (
    <footer className="bg-white dark:bg-gray-800 text-[#1A2B48] dark:text-gray-100 pt-12 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <NavLink to={"/"}>
            <img src={logo} alt="Logo" className="w-20 mb-4" />
          </NavLink>
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-6">
            Book bus, train, launch & flight tickets easily.
          </p>
        </div>

        <div>
          <h3 className="text-[18px] font-semibold mb-3 text-[#1A2B48] dark:text-gray-100">
            Quick Links
          </h3>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-[15px]">
            <li>
              <NavLink to="/" className="hover:text-[#3067F0]">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/alltickets" className="hover:text-[#3067F0]">
                All Tickets
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="hover:text-[#3067F0]">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/blog" className="hover:text-[#3067F0]">
                Blog
              </NavLink>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-[18px] font-semibold mb-3 text-[#1A2B48] dark:text-gray-100">
            Support
          </h3>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-[15px]">
            <li>
              <NavLink to="/contact" className="hover:text-[#3067F0]">
                Contact Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/help" className="hover:text-[#3067F0]">
                Help Center
              </NavLink>
            </li>
            <li>
              <NavLink to="/privacy" className="hover:text-[#3067F0]">
                Privacy Policy
              </NavLink>
            </li>
            <li>
              <NavLink to="/terms" className="hover:text-[#3067F0]">
                Terms of Service
              </NavLink>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-[18px] font-semibold mb-3 text-[#1A2B48] dark:text-gray-100">
            Contact Info
          </h3>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-[15px]">
            <li>Email: support@ticketzone.com</li>
            <li>Phone: +1 (555) 123-4567</li>
            <li>Address: 123 Travel Street, City, State 12345</li>
            <li>
              <a href="#" className="hover:text-[#3067F0]">
                Follow us on Social Media
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-[18px] font-semibold mb-3 text-[#1A2B48]">
            Payment Methods
          </h3>
          <div className="flex flex-wrap items-center gap-2">
            <div className="h-8  content-center font-semibold rounded-[6px] border-1 border-[#e2e2e2] overflow-hidden px-2 w-fit text-white">
              <img src={Stripe} className="h-8 w-fit" alt="" />
            </div>
            <div className="h-8  content-center font-semibold rounded-[6px] border-1 border-[#e2e2e2] overflow-hidden px-2 w-fit text-white">
              <img src={logo} className="h-8 w-fit" alt="" />
            </div>
            {payments.map((log, i) => {
              return <img key={i} src={log} alt="" className="h-8" />;
            })}
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-200 dark:border-gray-700 py-4">
        <p className="text-center text-gray-500 dark:text-gray-400 text-sm">
          © 2024 TicketZone. All rights reserved. | 
          <NavLink to="/privacy" className="hover:text-[#3067F0] ml-1">Privacy Policy</NavLink> | 
          <NavLink to="/terms" className="hover:text-[#3067F0] ml-1">Terms of Service</NavLink>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
