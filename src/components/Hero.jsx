import React, { useEffect } from 'react';
import style from '../style';
import hero from '../assets/herobg.webp';
import { motion } from 'framer-motion';
import GetStarted from './GetStarted';
import { useLocation } from 'react-router-dom';
let easeing = [0.6, -0.05, 0.01, 0.99];

const fadeInUp = {
  initial: {
    y: -60,
    opacity: 0,
    transition: {
      duration: 0.6,
      ease: easeing,
    },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      delay: 0.5,
      ease: easeing,
    },
  },
};

const Hero = ({ pageTitle }) => {
  const { pathname } = useLocation();
  useEffect(() => {
    document.title = pageTitle;
    window.scrollTo(0, 0);
  }, [pageTitle, pathname]);

  const sectionStyle = {
    backgroundImage: `url(${hero})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <>
      <section
        id="home"
        style={sectionStyle}
        className={`flex md:flex-row flex-col h-[100vh] ${style.paddingY} ${style.paddingX}`}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, ease: easeing }}
          className={`${style.flexStart} flex-1 flex-col px-3 md:px-16 xl:px-0`}
        >
          <div className="flex flex-col sm:flex-row my-3 justify-between items-center w-full">
            <h1 className="flex-1 font-bold text-4xl sm:text-5xl text-black leading-10 sm:leading-none">
              Give a new dimension
              <br class="hidden sm:block" />
              to your business with {''}
              <br className="hidden sm:block" />
              <span className="text-[#333A8E]">Digitakal Agency.</span>
            </h1>
          </div>

          <p className="py-3 font-medium text-black">
            We help you to achieve online success with ease.
            <br /> Using Our tools, skills, and expertise can help you succeed
            online.
            <br /> From digital strategy to marketing and skills development.
          </p>

          <motion.div>
            <motion.h1
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              className="font-bold text-[25px] text-black pb-1 w-full"
            >
              Your partner for success in the digital world.{' '}
            </motion.h1>
          </motion.div>

          <div className="sm:flex hidden py-5 ">
            <GetStarted />
          </div>

          <div className="hidden md:flex absolute justify-center w-[95%] sm:mt-[550px] 2xl:hidden bottom-3">
            <a href="#Offer">
              <div className="w-[32px] h-[60px] rounded-3xl flex border-2 border-[#333A8E] justify-center items-center p-2">
                <motion.div
                  animate={{
                    y: [-17, 24, -17],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: 'loop',
                  }}
                  className="w-3 h-3 rounded-full bg-[#333A8E]"
                ></motion.div>
              </div>
            </a>
          </div>
        </motion.div>

        <div className={`sm:hidden ${style.flexCenter} pb-6`}>
          <div className="flex flex-col items-center">
            <GetStarted />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
