import React from "react";
import logo from "../assets/logo.png";
import logoWhite from "../assets/logoWhite.png";
import { Calendly } from "./index";

import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => (
  <section>
    <footer className="bg-[#333A8E]">
      <div className="container px-6 mx-auto">
        <div className="md:flex md:-mx-3 md:items-center md:justify-between">
          <h1 className="text-xl pt-8 font-thin tracking-tight s md:mx-3 xl:text-2xl text-white">
            Book your free consultation and boost your strategy !{" "}
            <span className="text-[#24B1E7] font-extrabold">NOW</span>
          </h1>

          <div className="pt-8 md:mx-3 shrink-0 md:mt-0 md:w-auto">
            <div className="inline-flex items-center justify-center w-full px-4 py-2 font-semibold text-[#333A8E] duration-300 bg-white rounded-lg gap-x-3 hover:bg-[#24B1E7]">
              <span>
                <Calendly text="Book Now" />
              </span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </div>
          </div>
        </div>

        <hr className="my-6 border-blue-500 md:my-10 " />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div>
            <p className="font-semibold text-white">Quick Link</p>

            <div className="flex flex-col items-start mt-5 space-y-2">
              <a
                href="/"
                className="text-white transition-colors duration-300  dark:hover:text-[#24B1E7] hover:underline hover:text-[#24B1E7]"
              >
                Home
              </a>
              <a
                href="#"
                className="text-white transition-colors duration-300  dark:hover:text-[#24B1E7] hover:underline hover:text-[#24B1E7]"
              >
                Who We Are
              </a>
              <a
                href="/contact"
                className="text-white transition-colors duration-300  dark:hover:text-[#24B1E7] hover:underline hover:text-[#24B1E7]"
              >
                Contact Us
              </a>
            </div>
          </div>

          <div>
            <p className="font-semibold text-white">Industries</p>

            <div className="flex flex-col items-start mt-5 space-y-2">
              <a
                href="#"
                className="text-white transition-colors duration-300  dark:hover:text-[#24B1E7] hover:underline hover:text-[#24B1E7]"
              >
                Automotive
              </a>
              <a
                href="#"
                className="text-white transition-colors duration-300  dark:hover:text-[#24B1E7] hover:underline hover:text-[#24B1E7]"
              >
                Healthcare
              </a>
              <a
                href="#"
                className="text-white transition-colors duration-300  dark:hover:text-[#24B1E7] hover:underline hover:text-[#24B1E7]"
              >
                Education
              </a>
              <a
                href="#"
                className="text-white transition-colors duration-300  dark:hover:text-[#24B1E7] hover:underline hover:text-[#24B1E7]"
              >
                Real estate
              </a>
              <a
                href="#"
                className="text-white transition-colors duration-300  dark:hover:text-[#24B1E7] hover:underline hover:text-[#24B1E7]"
              >
                Travel and tourism
              </a>
            </div>
          </div>

          <div>
            <p className="font-semibold text-white">Services</p>

            <div className="flex flex-col items-start mt-5 space-y-2">
              <a
                href="/services"
                className="text-white transition-colors duration-300  dark:hover:text-[#24B1E7] hover:underline hover:text-[#24B1E7]"
              >
                Consulting
              </a>
              <a
                href="/services"
                className="text-white transition-colors duration-300  dark:hover:text-[#24B1E7] hover:underline hover:text-[#24B1E7]"
              >
                Creation
              </a>
              <a
                href="/services"
                className="text-white transition-colors duration-300  dark:hover:text-[#24B1E7] hover:underline hover:text-[#24B1E7]"
              >
                Development
              </a>
              <a
                href="/services"
                className="text-white transition-colors duration-300  dark:hover:text-[#24B1E7] hover:underline hover:text-[#24B1E7]"
              >
                E-Commerce
              </a>
              <a
                href="/services"
                className="text-white transition-colors duration-300  dark:hover:text-[#24B1E7] hover:underline hover:text-[#24B1E7]"
              >
                Digital Marketing
              </a>
            </div>
          </div>

          <div>
            <p className="font-semibold text-white">Contact Us</p>

            <div className="flex flex-col items-start mt-5 space-y-2">
              <h2
                href="#"
                className="text-white transition-colors duration-300 font-bold dark:hover:text-[#24B1E7] hover:underline hover:text-[#24B1E7]"
              >
                Mon - Sat, 9 AM - 6 PM
              </h2>
              <a
                href="#"
                className="text-white transition-colors duration-300  dark:hover:text-[#24B1E7] hover:underline hover:text-[#24B1E7]"
              >
                +212 778-5487-59 <br />
                +212 535-4635-64
              </a>
              <a
                href="#"
                className="text-white transition-colors duration-300  dark:hover:text-[#24B1E7] hover:underline hover:text-[#24B1E7]"
              >
                Contact@agency.com
              </a>
            </div>
          </div>
        </div>

        <hr className="my-4 border-[#24B1E7] md:my-4" />

        <div className="flex flex-col items-center justify-between sm:flex-row">
          <a href="#">
            <img
              className="w-[175px] h-[45px] relative my-3 "
              src={logoWhite}
              alt=""
            />
          </a>

          <p className="text-sm text-white sm:mt-2 my-3">
            © 2023 GB-Digital. All Rights Reserved. Made by GB-Digital.
          </p>

          <div className="flex flex-row md:mt-0 justify-center mb-2 gap-4">
            <a href="https://www.instagram.com/thedigitakal/">
              <FaInstagram size={30} style={{ color: "white" }} />
            </a>

            <a href="https://www.linkedin.com/company/digitakal-agency/">
              <FaLinkedin size={30} style={{ color: "white" }} />
            </a>
            <a href="https://www.linkedin.com/company/digitakal-agency/">
              <FaFacebook size={30} style={{ color: "white" }} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  </section>
);

export default Footer;
