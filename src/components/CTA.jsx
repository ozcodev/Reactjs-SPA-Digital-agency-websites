import React from 'react';

import vd from '../assets/vdCt.webp';
import { Calendly } from './index';

const CTA = () => (
  <section>
    <div className="2xl:mx-auto 2xl:container  md:py-12 py-9">
      <div className="relative w-full">
        <img
          src={vd}
          alt="city view"
          className="w-full h-full object-center object-fill absolute sm:block hidden"
        />
        <img
          src={vd}
          alt="city view"
          className="w-full h-full  absolute object-center object-fill sm:hidden"
        />
        <div className="text-xl relative z-20  bg-gradient-to-r from-[#24B1E7] to-transparent w-full h-full top-0 md:p-16 p-6 flex flex-col justify-between">
          <div>
            <h1 className="md:text-3xl text-2xl font-bold md:leading-tight leading-10 text-black sm:w-auto w-64 sm:text-start">
              Don't wait any longer.{''}&nbsp;
              <span className="hidden sm:inline xl:inline">
                <br />
              </span>
              Transform your business today <br /> with the help of Digitakal.
            </h1>
            <p className="text-lg leading-6 text-black xl:w-5/12 lg:w-8/12 md:w-10/12 2xl:pr-12 mt-4 sm:text-start">
              Our proven methodologies, cutting-edge tools, and creative talents
              are here to help you succeed.
            </p>
          </div>
          <div className="md:mt-12 mt-20 sm:w-auto w-full">
            <button className="text-base font-medium leading-4 text-white bg-[#333A8E] sm:w-auto w-full rounded p-4 hover:bg-indigo-800">
              <Calendly text="Start a Free Consulting" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CTA;
