import React, { useState, useEffect, useRef } from 'react';
import './Navbar.scss';
import logo from '../assets/logo.png';
import { motion } from 'framer-motion';
import { Calendly } from './index';
import { Link } from 'react-router-dom';
import { MdMenu, MdClose } from 'react-icons/md';

/* import PageOfContact from '../pages/PageOfContact';
import PageOfHome from '../pages/PageOfHome';
import PageOfServices from '../pages/PageOfServices'; */

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    const handleMouseDown = (event) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setToggle(false);
      }
    };

    document.addEventListener('mousedown', handleMouseDown);

    return () => {
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

  return (
    <nav className="app__navbar">
      <div className="app__logo">
        <Link to="/">
          <img
            src={logo}
            className="w-[200px] h-[50px] my-2 relative right-4"
            alt="Digitakal agency logo"
          />
        </Link>
      </div>

      <ul className="app__navbar-links">
        <li className="app__flex p-text">
          <Link to="/">Home</Link>
        </li>
        <li className="app__flex p-text">
          <Link to="/about">About</Link>
        </li>
        <li className="app__flex p-text">
          <Link to="/services">Services</Link>
        </li>
        <li className="app__flex p-text">
          <Link to="/contact">Contact</Link>
        </li>

        <button className="absolute right-0 mr-9  hover:bg-[#333A8E] hover:text-[#ffff] text-[#333A8E] border border-[#333A8E] font-medium py-2 px-4">
          <Calendly text="Book Free Consultation" />
        </button>
      </ul>

      {/* mobile device */}
      <div className="app__navbar-menu" ref={mobileMenuRef}>
        <MdMenu onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            initial={{ width: 0 }}
            animate={{
              width: 320,
            }}
            exit={{
              width: 0,
              transition: { delay: 0.7, duration: 0.3 },
            }}
          >
            <MdClose onClick={() => setToggle(false)} />

            <ul className="app__navbar-links">
              <li className="app__flex p-text">
                <Link to="/" onClick={() => setToggle(false)}>
                  Home
                </Link>
              </li>
              <li className="app__flex p-text">
                <Link to="/about" onClick={() => setToggle(false)}>
                  About
                </Link>
              </li>
              <li className="app__flex p-text">
                <Link to="/services" onClick={() => setToggle(false)}>
                  Services
                </Link>
              </li>
              <li className="app__flex p-text">
                <Link to="/contact" onClick={() => setToggle(false)}>
                  Contact
                </Link>
              </li>

              <a href="https://rb.gy/ybq6q">
                <button className="absolute  mr-9 bg-[#ffff] hover:bg-[#333A8E] hover:text-[#ffff] text-[#333A8E] border border-[#333A8E] font-medium py-2 px-4">
                  {/* <Calendly text="Book Free Consultation" /> */}
                  Book Free Consultation
                </button>
              </a>
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
