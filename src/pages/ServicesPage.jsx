import React, { useEffect } from 'react';

import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import ServicesBoxPage from '../components/servicesBoxPage';
import { WhatsApp } from '../components/index';

import {
  Artboard,
  digital,
  ecommerce,
  data,
  dev,
  creation,
  trans,
} from '../assets/index';

import { useLocation } from 'react-router-dom';

const ServicesPage = ({ pageTitle }) => {
  const sectionStyle = {
    backgroundImage: `url(${Artboard})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const { pathname } = useLocation();
  useEffect(() => {
    document.title = pageTitle;
    window.scrollTo(0, 0);
  }, [pageTitle, pathname]); // run this effect whenever pageTitle changes

  return (
    <section className="py-32">
      <WhatsApp />
      <motion.div
        initial={{
          width: 0,
        }}
        animate={{ width: '100%' }}
        exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
      >
        <div className="container mx-auto px-6 md:px-12 xl:px-32">
          <Tilt
            glareEnable={true}
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            perspective={1000}
          >
            <div style={sectionStyle} className="text-center text-gray-800">
              <div className="block rounded-lg shadow-lg px-6 py-12 md:py-16 md:px-12  transition duration-300 ease-in-out hover:shadow-[0_0px_10px_15px_rgb(0,0,0,0.3)] dark:hover:shadow-blue-600/30 ">
                <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
                  The best offer on the market <br />
                  <span className="text-blue-600">for your business</span>
                </h1>
                <a
                  className="inline-block px-7 py-3 mb-2 md:mb-0 mr-0 md:mr-2 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  href="#!"
                  role="button"
                >
                  Read More
                </a>
              </div>
            </div>
          </Tilt>

          <div className="container mx-auto mt-10 ">
            <div className="flex flex-wrap -mx-4 ">
              <ServicesBoxPage image={creation} />
              <ServicesBoxPage image={dev} />
              <ServicesBoxPage image={trans} />
              <ServicesBoxPage image={ecommerce} />
              <ServicesBoxPage image={digital} />
              <ServicesBoxPage image={data} />
            </div>
          </div>
          <div className="pt-12 text-center md:text-center text-gray-500">
            <div className="block rounded-lg shadow-lg bg-slate-300 p-4 bg-opacity-70 md:p-6 md:py-4 md:px-6">
              <p className="font-normal tracking-tight text-base md:text-lg lg:text-xl">
                Design is an indispensable component of every successful
                business, as without it, the probability of failure increases
                significantly.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ServicesPage;
