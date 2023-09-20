import React, { useState } from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

import { pop } from '../assets';

const ServicesBoxPage = ({ image, title }) => {
  const [audio] = useState(new Audio(pop));

  const handleHover = () => {
    audio.play().catch((error) => console.log(error));
  };
  return (
    <div
      className=" md:w-1/3  p-4 transform hover:scale-105 transition duration-300 cursor-grab "
      onMouseEnter={handleHover}
    >
      <motion.div>
        <Tilt
          glareEnable={false}
          tiltMaxAngleX={20}
          tiltMaxAngleY={20}
          perspective={500}
        >
          <div className="relative ease-in-out hover:shadow-lg dark:hover:shadow-[#333A8E] rounded-[32px]">
            <img
              className="rounded-[35px] w-[351px] h-[170px] object-cover"
              src={image}
              alt={title}
            />
            {/*  <div className="inset-0 w-auto h-auto   ">
              <div className="absolute top-5 left-4 p-4 ">
                <h2 className="text-xl font-bold text-black">
                  {title}
                  <br />
                  {subTitle}
                </h2>
                <p className="text-gray-800 ">{description}</p>
              </div>
            </div> */}
          </div>
        </Tilt>
      </motion.div>
    </div>
  );
};

export default ServicesBoxPage;
