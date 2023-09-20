import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { motion } from 'framer-motion';
import style from '../style';
import { TypingText } from './TypingText';
import { staggerContainer } from '../utils/motion';

import {
  prod_1,
  prod_2,
  prod_3,
  prod_4,
  prod_5,
  prod_6,
  prod_7,
  prod_8,
  prod_9,
  prod_10,
} from '../assets/imagesSlide/index.js';

const Portfolio = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 650,
    autoplaySpeed: 1500,

    dots: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section>
      <div className="container mx-auto px-4 md:px-8">
        <div className="py-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={`${style.innerWidth} mx-auto flex flex-col`}
          >
            <TypingText
              textStyles="flex text-2xl justify-center font-bold text-[35px] text-black  lg:text-3xl"
              title="|Our Portfolio."
            ></TypingText>
          </motion.div>
        </div>
        <Slider {...settings}>
          <div className="px-3 hover:scale-110 transition duration-300 ease-in-out">
            <div className="relative cursor-pointer">
              <img src={prod_1} className="rounded-lg " alt="image1" />
              <div className="absolute inset-0 flex rounded-lg flex-col justify-center items-center text-center text-black bg-[#333A8E] bg-opacity-20 hover:bg-opacity-80 transition duration-300 ease-in-out hover:text-white hover:bg-blue-500">
                <h2 className="text-xl font-bold mb-2">Ads-management</h2>
                <p className="text-lg">
                  Managing and optimizing online advertisements.
                </p>
              </div>
            </div>
          </div>
          <div className="px-3 hover:scale-110 transition duration-300 ease-in-out">
            <div className="relative cursor-pointer">
              <img src={prod_2} className="rounded-lg " alt="image1" />
              <div className="absolute inset-0 flex rounded-lg flex-col justify-center items-center text-center text-black bg-[#333A8E] bg-opacity-20 hover:bg-opacity-80 transition duration-300 ease-in-out hover:text-white hover:bg-blue-500">
                <h2 className="text-xl font-bold mb-2">
                  Designing a brand campaign
                </h2>
                <p className="text-lg">
                  communicates the brand's <br /> message and values
                </p>
              </div>
            </div>
          </div>

          <div className="px-3 hover:scale-110 transition duration-300 ease-in-out">
            <div className="relative cursor-pointer">
              <img src={prod_10} className="rounded-lg " alt="image1" />
              <div className="absolute inset-0 flex rounded-lg flex-col justify-center items-center text-center text-black bg-[#333A8E] bg-opacity-20 hover:bg-opacity-80 transition duration-300 ease-in-out hover:text-white hover:bg-blue-500">
                <h2 className="text-xl font-bold mb-2">E-commerce websites</h2>
                <p className="text-lg">
                  Creating customized E-commerce websites
                </p>
              </div>
            </div>
          </div>

          <div className="px-3 hover:scale-110 transition duration-300 ease-in-out">
            <div className="relative cursor-pointer">
              <img src={prod_4} className="rounded-lg " alt="image1" />
              <div className="absolute inset-0 flex rounded-lg flex-col justify-center items-center text-center text-black bg-[#333A8E] bg-opacity-20 hover:bg-opacity-80 transition duration-300 ease-in-out hover:text-white hover:bg-blue-500">
                <h2 className="text-xl font-bold mb-2">Packaging</h2>
                <p className="text-lg">
                  Transforming brands with custom packaging
                </p>
              </div>
            </div>
          </div>
          <div className="px-3 hover:scale-110 transition duration-300 ease-in-out">
            <div className="relative cursor-pointer">
              <img src={prod_6} className="rounded-lg " alt="image1" />
              <div className="absolute inset-0 flex rounded-lg flex-col justify-center items-center text-center text-black bg-[#333A8E] bg-opacity-20 hover:bg-opacity-80 transition duration-300 ease-in-out hover:text-white hover:bg-blue-500">
                <h2 className="text-xl font-bold mb-2">E-commerce</h2>
                <p className="text-lg">
                  Revolutionizing online shopping <br /> with E-commerce
                </p>
              </div>
            </div>
          </div>

          <div className="px-3 hover:scale-110 transition duration-300 ease-in-out">
            <div className="relative cursor-pointer">
              <img src={prod_7} className="rounded-lg " alt="image1" />
              <div className="absolute inset-0 flex rounded-lg flex-col justify-center items-center text-center text-black bg-[#333A8E] bg-opacity-20 hover:bg-opacity-80 transition duration-300 ease-in-out hover:text-white hover:bg-blue-500">
                <h2 className="text-xl font-bold mb-2">Logos</h2>
                <p className="text-lg">
                  Designing iconic brand identities visually
                </p>
              </div>
            </div>
          </div>
          <div className="px-3 hover:scale-110 transition duration-300 ease-in-out">
            <div className="relative cursor-pointer">
              <img src={prod_8} className="rounded-lg " alt="image1" />
              <div className="absolute inset-0 flex rounded-lg flex-col justify-center items-center text-center text-black bg-[#333A8E] bg-opacity-20 hover:bg-opacity-80 transition duration-300 ease-in-out hover:text-white hover:bg-blue-500">
                <h2 className="text-xl font-bold mb-2">Web sites</h2>
                <p className="text-lg">
                  Creating Innovative Web <br /> Solutions Daily
                </p>
              </div>
            </div>
          </div>

          <div className="px-3 hover:scale-110 transition duration-300 ease-in-out">
            <div className="relative cursor-pointer">
              <img src={prod_9} className="rounded-lg " alt="image1" />
              <div className="absolute inset-0 flex rounded-lg flex-col justify-center items-center text-center text-black bg-[#333A8E] bg-opacity-20 hover:bg-opacity-80 transition duration-300 ease-in-out hover:text-white hover:bg-blue-500">
                <h2 className="text-xl font-bold mb-2">
                  Social media websites
                </h2>
                <p className="text-lg">Leading provider of social media</p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Portfolio;
