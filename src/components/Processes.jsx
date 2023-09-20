import React from 'react';
import { step1, step2, step3, step4 } from '../assets';
const Processes = () => (
  <section>
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-blue-800 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="f51618fb-0edb-4bcb-b35a-ffc770941286"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#f51618fb-0edb-4bcb-b35a-ffc770941286)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative text-black">Our</span>
          </span>{' '}
          Process
        </h2>
        <p className="font-light text-[15px] text-black md:text-lg">
          <span className="font-semibold text-[25px] ">
            Looking for a solution that perfectly meets the unique needs of your
            business ?
          </span>
          <br /> Look no further than our customized solutions! We'll help you
          transform your company into a cutting-edge digital hub
        </p>
      </div>

      <div className="flex flex-wrap lg:flex-nowrap lg:grid-cols-3 justify-center">
        <div className="relative text-center">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-2 rounded-full bg-indigo-50 sm:w-20 sm:h-20">
            <img src={step1} className="w-[35px] h-[35px]" alt="" />
          </div>
          <h6 className="mb-2 text-lg font-bold">Consulting</h6>
          <p className="max-w-md mb-3 text-sm text-gray-900 sm:mx-auto px-3">
            We collaborate closely with you to understand your unique situation
            and guide you towards achieving your goals.
          </p>

          <div className="top-0 right-0 flex items-center justify-center h-24 lg:-mr-8 lg:absolute">
            <svg
              className="w-8 text-black transform rotate-90 lg:rotate-0"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <line
                fill="none"
                strokeMiterlimit="10"
                x1="2"
                y1="12"
                x2="22"
                y2="12"
              />
              <polyline
                fill="none"
                strokeMiterlimit="10"
                points="15,5 22,12 15,19 "
              />
            </svg>
          </div>
        </div>
        <div className="relative text-center ">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-2 rounded-full bg-indigo-50 sm:w-20 sm:h-20">
            <img src={step2} className="w-[35px] h-[35px]" alt="" />
          </div>
          <h6 className="mb-2 text-lg font-bold">Analysis</h6>
          <p className="max-w-md mb-3 text-sm text-gray-900 sm:mx-auto  px-3s">
            Systematic approach to understand your needs, analyze data, gain
            insights, and provide actionable recommendations.
          </p>

          <div className="top-0 right-0 flex items-center justify-center h-24 lg:-mr-8 lg:absolute">
            <svg
              className="w-8 text-black transform rotate-90 lg:rotate-0"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <line
                fill="none"
                strokeMiterlimit="10"
                x1="2"
                y1="12"
                x2="22"
                y2="12"
              />
              <polyline
                fill="none"
                strokeMiterlimit="10"
                points="15,5 22,12 15,19 "
              />
            </svg>
          </div>
        </div>
        <div className="relative text-center ">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-2 rounded-full bg-indigo-50 sm:w-20 sm:h-20">
            <img src={step3} className="w-[35px] h-[35px]" alt="" />
          </div>
          <h6 className="mb-2 text-lg font-bold">Execution</h6>
          <p className="max-w-md mb-3 text-sm text-gray-900 sm:mx-auto  px-3">
            Efficient execution of strategies, leveraging our expertise and
            resources to achieve your desired outcomes.
          </p>

          <div className="top-0 right-0 flex items-center justify-center h-24 lg:-mr-8 lg:absolute">
            <svg
              className="w-8 text-black transform rotate-90 lg:rotate-0"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <line
                fill="none"
                strokeMiterlimit="10"
                x1="2"
                y1="12"
                x2="22"
                y2="12"
              />
              <polyline
                fill="none"
                strokeMiterlimit="10"
                points="15,5 22,12 15,19 "
              />
            </svg>
          </div>
        </div>
        <div className="relative text-center ">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-2 rounded-full bg-indigo-50 sm:w-20 sm:h-20">
            <img src={step4} className="w-[35px] h-[35px]" alt="" />
          </div>
          <h6 className="mb-2 text-lg font-bold">Perfection</h6>
          <p className="max-w-md mb-3 text-sm text-gray-900 sm:mx-auto px-3">
            Refinement and optimization for quality outcomes - our continuous
            pursuit of perfection for your business.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Processes;
