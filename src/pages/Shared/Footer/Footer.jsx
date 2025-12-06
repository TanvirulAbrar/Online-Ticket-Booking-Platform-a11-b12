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
    <footer className="bg-white text-[#1A2B48] pt-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <NavLink to={"/"}>
            <img src={logo} alt="Logo" className="w-20 mb-4" />
          </NavLink>
          <p className="text-gray-600 text-sm leading-6">
            Book bus, train, launch & flight tickets easily.
          </p>
        </div>

        <div>
          <h3 className="text-[18px] font-semibold mb-3 text-[#1A2B48]">
            Quick Links
          </h3>
          <ul className="space-y-2 text-gray-600 text-[15px]">
            <li>
              <a href="/" className="hover:text-[#3067F0]">
                Home
              </a>
            </li>
            <li>
              <a href="/tickets" className="hover:text-[#3067F0]">
                All Tickets
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-[#3067F0]">
                Contact Us
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-[#3067F0]">
                About
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-[18px] font-semibold mb-3 text-[#1A2B48]">
            Contact Info
          </h3>
          <ul className="space-y-2 text-gray-600 text-[15px]">
            <li>Email: support@example.com</li>
            <li>Phone: +880 1234-567890</li>
            <li>
              <a href="#" className="hover:text-[#3067F0]">
                Facebook Page
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
              console.log(i);
              return <img key={i} src={log} alt="" className="h-8" />;
            })}
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-200 py-4">
        <p className="text-center text-gray-500 text-sm">
          © 2025 . All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
