/* component that renders a section containing 
information about a digital transformation agency called Digitaka */

import React from 'react';
import style, { layout } from '../style';

import CanvasWrapper from '../3d_models/canvas';

import { motion } from 'framer-motion';
import { Calendly } from './index';

import { TypingText } from './TypingText';
import { staggerContainer } from '../utils/motion';

const About = () => (
  <section id="about" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      {/* <img
        className="w-[82%] h-[100%] sm:h-auto relative "
        src={about}
        alt="Digitaka Agency - Unlocking growth through digital innovation with Digitaka Agency - Unlocking growth through digital innovation"
      /> */}

      <style>
        {`
      @media screen and (max-width: 640px) {
        canvas {
          height: 400px;
          width:200px;
        }
      }
    `}
      </style>
      <CanvasWrapper />
    </div>

    <div className={layout.sectionInfo}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${style.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText
          textStyles="font-bold text-[35px] text-black "
          title="|About Digitakal."
        ></TypingText>
      </motion.div>

      <p className="font-medium text-lg sm:text-2xl lg:text-3xl text-black my-5">
        Digital transformation agency that aims to democratize digitalization.
      </p>

      <p className="font-normal text-black">
        We help you succeed in your digital transformation and strengthen your
        online presence.
        <br className="sm:hidden" />
        <span className="sm:inline-block">
          We work closely with you at every stage of the process, from designing
          strategies to implementing digital solutions to optimizing your
          digital marketing, to ensure your success in the digital age.
        </span>
      </p>

      <button className="py-3 mt-9 bg-[#333A8E] hover:bg-[#24B1E7] text-white font-semibold px-7 rounded ">
        <Calendly text="Contact us" />
      </button>
    </div>
  </section>
);

export default About;
