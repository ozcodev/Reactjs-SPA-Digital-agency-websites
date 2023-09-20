import { useState } from 'react';
import { FaPlay } from 'react-icons/fa';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/scss/modal-video.scss';

import { motion } from 'framer-motion';

import { Calendly } from './index';

let easeing = [0.6, -0.05, 0.01, 0.99];
const stagger = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
};

const btnGroup = {
  initial: {
    y: -60,
    opacity: 0,
    transition: { duration: 0.6, ease: easeing },
  },
  animate: {
    y: 0,
    opacity: 1,
    animation: {
      duration: 0.8,
      ease: easeing,
    },
  },
};

const GetStarted = (props) => {
  const [videoOpen, setVideoOpen] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();

    setVideoOpen(true);
  };

  return (
    <motion.div initial="initial" animate="animate">
      <motion.div variants={stagger} className="flex items-center ">
        <motion.div
          variants={btnGroup}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="py-3 mr-3 sm:mr-9 bg-[#333A8E] hover:bg-[#24B1E7] text-white font-semibold px-4 sm:px-7 rounded "
        >
          <Calendly text="Free Consulting" />
        </motion.div>

        <motion.button
          variants={btnGroup}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#333A8E]  hover:bg-[#24B1E7]  text-white first-letter:font-bold rounded-full flex items-center"
          onClick={handleClick}
        >
          <FaPlay className="mx-4 my-4" size={20} />
        </motion.button>
        <motion.span
          variants={btnGroup}
          className="ml-3 font-semibold text-[#333A8E]"
        >
          Watch more
        </motion.span>

        <ModalVideo
          channel="youtube"
          isOpen={videoOpen}
          videoId="h7A-th5IIKw"
          onClose={() => setVideoOpen(false)}
        />
      </motion.div>
    </motion.div>
  );
};

export default GetStarted;
