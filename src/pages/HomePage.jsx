import React, { useEffect } from 'react';
import style from '../style';

import {
  About,
  Contact,
  CTA,
  Hero,
  Offer,
  Portfolio,
  Processes,
  Services,
  WhatsApp,
} from '../components';

const HomePage = ({ pageTitle }) => {
  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]); // run this effect whenever pageTitle changes

  return (
    <div className="bg-white w-full overflow-hidden">
      <div className={`${style.flexStart}`}>
        <div className={`${style.innerWidth}`}>
          <Hero />
          <Offer />
        </div>
      </div>

      <div className={`${style.paddingX} ${style.flexStart}`}>
        <div className={`${style.innerWidth}`}>
          <About />
          <Services />
        </div>
      </div>

      <div className={`${style.flexStart}`}>
        <div className={`${style.innerWidth}`}>
          <CTA />
        </div>
      </div>

      <div className={`${style.paddingX} ${style.flexStart}`}>
        <div className={`${style.innerWidth}`}>
          <Processes />
          <Portfolio />
        </div>
      </div>

      <div className={`${style.flexStart}`}>
        <div className={`z-50 ${style.innerWidth}`}>
          <Contact />
          <WhatsApp />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
