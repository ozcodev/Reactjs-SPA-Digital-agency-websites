import React from 'react';
import { icon1, icon2, icon3, icon4, icon5, icon6 } from '../assets/index';

import { motion } from 'framer-motion';
import style from '../style';
import { TypingText } from './TypingText';
import { staggerContainer } from '../utils/motion';

const container = {
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const hoverEffect = {
  whileHover: {
    scale: 1.1,
    rotate: 360,
    borderRadius: '100%',
  },
  whileTap: {
    scale: 0.8,
    rotate: 360,
    borderRadius: '100%',
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: 'easeInOut',
      duration: 0.2,
    },
  },
};

const Services = () => {
  return (
    <section id="services" className="bg-white pt-11">
      <motion.div className="container px-6 py-10 mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className={`${style.innerWidth} mx-auto flex flex-col`}
        >
          <TypingText
            textStyles="flex text-2xl justify-center font-bold text-[35px] text-black  lg:text-3xl"
            title="|Our Services."
          ></TypingText>
        </motion.div>

        <p className="mt-4 text-lg lg:text-[20px] text-[#2196F3] leading-[30px] lg:leading-[40px] font-normal lg:px-7 px-2 text-center">
          <span className="lg:text-[45px]">
            We offer businesses digital transformation services, to help them
            succeed in the digital landscape.
          </span>
        </p>

        <p className="text-lg sm:text-xl pt-4 text-[#000] font-normal text-center">
          Choose us to stay ahead in{' '}
          <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-blue-800 relative inline-block">
            <span className="relative text-white">the digital world.</span>
          </span>
        </p>

        <motion.div
          variants={container}
          initial="hidden"
          exit="exit"
          whileInView="show"
          viewport={{ once: false }}
          className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3"
        >
          <motion.div
            variants={item}
            className="space-y-3 border border-indigo-600 rounded-md py-3 px-3  "
          >
            <motion.span
              variants={hoverEffect}
              whileHover="whileHover"
              whileTap="whileTap"
              className="inline-block p-3 text-blue-500  border border-solid border-[#2B9BF4] rounded-full "
            >
              <img src={icon1} className="w-[50px] h-[50px]" alt="" />
            </motion.span>

            <h1 className="text-xl font-semibold capitalize text-black">
              Consulting
            </h1>

            <p className="text-black">
              Get expert advice to define your strategy, assess your needs, and
              deploy customized solutions for your business.
            </p>

            <a
              href="#"
              className="inline-flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500"
            >
              <span className="mx-1 ">read more</span>
              <svg
                className="w-4 h-4 mx-1 rtl:-scale-x-100"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </motion.div>

          <motion.div
            variants={item}
            className="space-y-3 p-3 max-w-xs transition duration-300 rounded-md ease-in-out hover:shadow-lg dark:hover:shadow-blue-600/30"
          >
            <motion.span
              variants={hoverEffect}
              whileHover="whileHover"
              whileTap="whileTap"
              className="inline-block p-3 text-blue-500  border border-solid border-[#2B9BF4] rounded-full "
            >
              <img src={icon2} className="w-[50px] h-[50px]" alt="" />
            </motion.span>

            <h1 className="text-xl font-semibold capitalize">Creation</h1>

            <p className="text-black">
              Bring your brand to life with creative and impactful designs for
              your visual identity, website, social media, and advertising
              campaigns.
            </p>

            <a
              href="#"
              className="inline-flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500"
            >
              <span className="mx-1">read more</span>
              <svg
                className="w-4 h-4 mx-1 rtl:-scale-x-100"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </motion.div>

          <motion.div
            variants={item}
            className="space-y-3 p-3 max-w-xs transition duration-300 rounded-md ease-in-out hover:shadow-lg dark:hover:shadow-blue-600/30"
          >
            <motion.span
              variants={hoverEffect}
              whileHover="whileHover"
              whileTap="whileTap"
              className="inline-block p-3 text-blue-500  border border-solid border-[#2B9BF4] rounded-full "
            >
              <img src={icon4} className="w-[50px] h-[50px]" alt="" />
            </motion.span>

            <h1 className="text-xl font-semibold capitalize">
              Web & App Development
            </h1>

            <p className="text-black">
              Boost your business efficiency and offer exceptional user
              experience with our customized web and mobile solutions under our
              development service.
            </p>

            <a
              href="#"
              className="inline-flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500"
            >
              <span className="mx-1">read more</span>
              <svg
                className="w-4 h-4 mx-1 rtl:-scale-x-100"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </motion.div>

          <motion.div
            variants={item}
            className="space-y-3 p-3 max-w-xs transition duration-300 rounded-md ease-in-out hover:shadow-lg dark:hover:shadow-blue-600/30"
          >
            <motion.span
              variants={hoverEffect}
              whileHover="whileHover"
              whileTap="whileTap"
              className="inline-block p-3 text-blue-500  border border-solid border-[#2B9BF4] rounded-full "
            >
              <img src={icon3} className="w-[50px] h-[50px]" alt="" />
            </motion.span>

            <h1 className="text-xl font-semibold capitalize">
              Data & Insights
            </h1>

            <p className="text-black">
              help your business understand your customers, your market, and
              your competitors through accurate data and in-depth analysis from
              multiple sources, including your digital platforms, social
              networks, online surveys, and market data.
            </p>

            <a
              href="#"
              className="inline-flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500"
            >
              <span className="mx-1">read more</span>
              <svg
                className="w-4 h-4 mx-1 rtl:-scale-x-100"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </motion.div>

          <motion.div
            variants={item}
            className="space-y-3 p-3 max-w-xs transition duration-300 rounded-md ease-in-out hover:shadow-lg dark:hover:shadow-blue-600/30"
          >
            <motion.span
              variants={hoverEffect}
              whileHover="whileHover"
              whileTap="whileTap"
              className="inline-block p-3 text-blue-500  border border-solid border-[#2B9BF4] rounded-full "
            >
              <img src={icon5} className="w-[50px] h-[50px]" alt="" />
            </motion.span>

            <h1 className="text-xl font-semibold capitalize">
              Digital Marketing
            </h1>

            <p className="text-black">
              Reach Your Target Audience with Effective Digital Marketing
              Strategies that Maximize Your Online Visibility, Engagement, and
              Sales.
            </p>

            <a
              href="#"
              className="inline-flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500"
            >
              <span className="mx-1">read more</span>
              <svg
                className="w-4 h-4 mx-1 rtl:-scale-x-100"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </motion.div>

          <motion.div
            variants={item}
            className="space-y-3 p-3 max-w-xs transition duration-300 rounded-md ease-in-out hover:shadow-lg dark:hover:shadow-blue-600/30"
          >
            <motion.span
              variants={hoverEffect}
              whileHover="whileHover"
              whileTap="whileTap"
              className="inline-block p-3 text-blue-500  border border-solid border-[#2B9BF4] rounded-full "
            >
              <img src={icon6} className="w-[50px] h-[50px]" alt="" />
            </motion.span>

            <h1 className="text-xl font-semibold capitalize">E-commerce</h1>

            <p className="text-black">
              Boost your online sales with our E-commerce services. Our experts
              will create and manage your online store, optimize it for search
              engines and user experience. We also offer inventory and logistics
              management, and online marketing strategies to increase your
              revenue.
            </p>

            <a
              href="#"
              className="inline-flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500"
            >
              <span className="mx-1">read more</span>
              <svg
                className="w-4 h-4 mx-1 rtl:-scale-x-100"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </motion.div>
        </motion.div>

        {/* Transformation digital service */}
        <div className="flex justify-center items-center py-5">
          <div className="w-full lg:w-3/4 p-6  border-2 border-indigo-600 transition duration-300 rounded-md ease-in-out hover:shadow-lg dark:hover:shadow-blue-600/30 text-center">
            <span className="inline-block p-3 text-blue-500  border border-solid border-[#2B9BF4] rounded-full ">
              <img src={icon4} className="w-[50px] h-[50px]" alt="" />
            </span>

            <h1 className="text-xl font-semibold capitalize">
              Digital Transformation
            </h1>

            <p className="text-black sm:text-lg">
              Adapt to a constantly changing world with our digital
              transformation services. From strategy to implementation, we help
              businesses leverage new opportunities and achieve long-term
              success
            </p>

            <a
              href="#"
              className="inline-flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500"
            >
              <span className="mx-1">read more</span>
              <svg
                className="w-4 h-4 mx-1 rtl:-scale-x-100"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Services;
