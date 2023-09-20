import React from 'react';
import icon1 from '../assets/icon_offer.png';
import icon2 from '../assets/icon2_offer.png';
import icon3 from '../assets/icon3_offer.png';

import { Parallax } from 'react-parallax';
import { motion } from 'framer-motion';
import style from '../style';
import { TypingText } from './TypingText';
import { staggerContainer } from '../utils/motion';

let easeing = [0.6, -0.05, 0.01, 0.99];

const stagger = {
  animate: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.5,
      staggerDirection: 0.5,
    },
  },
};

const star = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.8, ease: easeing },
  },
  animate: {
    y: 0,
    opacity: 1,
    animation: {
      duration: 0.6,
      ease: easeing,
    },
  },
};

const Offer = () => {
  return (
    <section id="Offer">
      <Parallax
        bgImage="/OfferSection.webp"
        strength={600}
        className="h-450 sm:h-300 bg-cover"
      >
        <motion.div
          className="parallax-container"
          initial="initial"
          animate="animate"
        >
          <div className="container py-5 mx-auto">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.25 }}
              className={`${style.innerWidth} mx-auto flex flex-col`}
            >
              <TypingText
                textStyles="font-semibold text-[20px] text-center text-white capitalize lg:text-3xl "
                title="Custom Solutions to Fit Your Needs"
              ></TypingText>
            </motion.div>

            <p className="font-semibold lg:text-[25px] text-[15px] text-center pt-3 lg:px-6 px-8  text-white">
              Your Success, Our Priority.
              <br />
            </p>

            <div class="grid grid-cols-1 gap-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3">
              <motion.div class="flex flex-col items-center p-3 space-y-3 text-center rounded-xl">
                <motion.div class="flex flex-col items-center p-3 space-y-3 text-center bg-gray-100 rounded-xl">
                  <motion.span
                    whileHover={{
                      scale: 1.2,
                      rotate: 360,
                      borderRadius: '100%',
                      cursor: 'pointer',
                    }}
                    className="inline-block p-3 text-blue-900 border border-solid border-[#2B9BF4] rounded-full"
                  >
                    <img src={icon1} alt="" className="w-[30px] h-[30px]" />
                  </motion.span>

                  <div className="sm:text-center md:text-left">
                    <h1 className="text-xl font-semibold capitalize text-black">
                      Free consultation
                    </h1>

                    <p className="text-black font-normal">
                      We offer you a 30-minute consultation to discuss your
                      needs and how we can help you.
                    </p>
                  </div>

                  <a
                    href="#"
                    className="flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500"
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

              <motion.div
                variants={stagger}
                className="flex flex-col items-center p-3 space-y-3 text-center rounded-xl "
              >
                <motion.div
                  variants={star}
                  className="flex flex-col items-center p-3 space-y-3 text-center bg-gray-100 rounded-xl"
                >
                  <motion.span
                    whileHover={{
                      scale: 1.2,
                      rotate: 360,
                      borderRadius: '100%',
                      cursor: 'pointer',
                    }}
                    className="inline-block p-3 text-blue-900 border border-solid border-[#2B9BF4] rounded-full"
                  >
                    <img src={icon2} alt="" className="w-[30px] h-[30px]" />
                  </motion.span>

                  <div className="sm:text-center md:text-left">
                    <h1 className="text-xl font-semibold capitalize text-black">
                      Competitive prices
                    </h1>

                    <p className="text-black font-normal">
                      Competitive prices & customizable packages. No compromise
                      on quality. Value assured.
                    </p>
                  </div>

                  <a
                    href="#"
                    className="flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500"
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

              <motion.div
                variants={stagger}
                className="flex flex-col items-center p-3 space-y-3 text-center rounded-xl "
              >
                <motion.div
                  variants={stagger}
                  className="flex flex-col items-center p-3 space-y-3 text-center bg-gray-100 rounded-xl"
                >
                  <motion.span
                    whileHover={{
                      scale: 1.2,
                      rotate: 360,
                      borderRadius: '100%',
                      cursor: 'pointer',
                    }}
                    className="inline-block p-3 text-blue-900 border border-solid border-[#2B9BF4] rounded-full"
                  >
                    <img src={icon3} alt="" className="w-[30px] h-[30px]" />
                  </motion.span>

                  <div className="sm:text-center md:text-left">
                    <h1 className="text-xl font-semibold capitalize text-black">
                      High quality
                    </h1>

                    <p className="text-black font-normal">
                      We use the latest technologies and experts to provide you
                      with the highest quality results.
                    </p>
                  </div>

                  <a
                    href="#"
                    className="flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500"
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
            </div>
          </div>
        </motion.div>
      </Parallax>
    </section>
  );
};

export default Offer;
