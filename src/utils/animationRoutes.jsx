import React from 'react';

import HomePage from '../pages/HomePage';
import ServicesPage from '../pages/ServicesPage';
import ContactPage from '../pages/ContactPage';
import AboutPage from '../pages/AboutPage';
import ContactForm from '../components/dataForm/QrContact';

import { AnimatePresence } from 'framer-motion';
import { useLocation, Route, Routes } from 'react-router-dom';

const RoutesAnimation = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage pageTitle="Home | Digitakal" />} />
        <Route
          path="/contact"
          element={<ContactPage pageTitle="Contact | Digitakal" />}
        />
        <Route
          path="/services"
          element={<ServicesPage pageTitle="Services | Digitakal" />}
        />
        <Route
          path="/about"
          element={<AboutPage pageTitle="Contact us | Digitakal" />}
        />
        <Route
          path="/contact_form"
          element={<ContactForm pageTitle="Contact | Digitakal" />}
        />
      </Routes>
    </AnimatePresence>
  );
};

export default RoutesAnimation;
