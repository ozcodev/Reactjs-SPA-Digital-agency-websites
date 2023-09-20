import React, { useEffect } from 'react';
import Tilt from 'react-parallax-tilt';
import { Calendly, WhatsApp } from '../components/index';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { DigiTeam, Artboard } from '../assets/index';

const AboutPage = ({ pageTitle }) => {
  const { pathname } = useLocation();

  const sectionStyle = {
    backgroundImage: `url(${Artboard})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  useEffect(() => {
    document.title = pageTitle;
    window.scrollTo(0, 0);
  }, [pageTitle, pathname]); // run this effect whenever pageTitle changes
  return (
    <section className="py-32">
      <WhatsApp />
      <motion.div
        initial={{
          width: 0,
        }}
        animate={{ width: '100%' }}
        exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
      >
        <div className="container mx-auto px-6 md:px-12 xl:px-32">
          <Tilt>
            <div style={sectionStyle} className="text-center text-gray-800">
              <div className="block rounded-lg shadow-lg px-6 py-12 md:py-16 md:px-12  transition duration-300 ease-in-out hover:shadow-[0_0px_10px_15px_rgb(0,0,0,0.3)] dark:hover:shadow-blue-600/30 ">
                <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
                  We are Digitakal
                  <br />
                  <span className="text-[40px] font-thin text-blue-600">
                    Driving your digital growth forward
                  </span>
                </h1>
                <a
                  className="inline-block px-7 py-3 mb-2 md:mb-0 mr-0 md:mr-2 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  href="#!"
                  role="button"
                >
                  Read More
                </a>
              </div>
            </div>
          </Tilt>
        </div>
        <div className="container mx-auto flex pt-[6rem]   md:flex-row flex-col items-center sm:px-16 px-6">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-extrabold text-gray-900">
              The&nbsp;
              <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-blue-800 relative inline-block">
                <span className="relative font-bold text-white">
                  {' '}
                  Digitakal
                </span>
              </span>
              &nbsp;Team<span className="font-extrabold text-[#333a8e]">.</span>
            </h1>

            <h2 className="font-bold text-start text-[24px] text-black">
              Who we are ?
            </h2>
            <p className="mb-8 leading-relaxed font-normal">
              We're passionate consultants, marketers, designers, developers,
              data managers, focused on exceptional solutions that help
              businesses achieve their goals in the digital world.
            </p>
            <h2 className="font-bold text-start text-[24px] text-black">
              What is our mission?
            </h2>
            <p className="mb-8 leading-relaxed font-normal">
              to democratize digitalization by empowering businesses with
              customized digital solutions that enhance their online presence
              and drive growth
            </p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded-[80px]"
              alt="hero"
              src={DigiTeam}
            />
          </div>
        </div>

        <div className="container mx-auto px-6 md:px-12 xl:px-32">
          <div className="pt-12 text-center md:text-left text-gray-500">
            <div className="block rounded-lg shadow-lg bg-slate-300 p-4 bg-opacity-70 md:p-6 md:py-4 md:px-6">
              <p className="font-normal tracking-tight text-base md:text-lg lg:text-xl">
                Digitakal democratizes digitalization with custom solutions that
                drive growth and enhance online presence. Our team collaborates
                with clients from strategy to digital marketing, ensuring
                success in the digital age. Trust Digitakal for your
                transformation goals.
              </p>
            </div>
          </div>
        </div>

        <div className="container flex flex-col items-center px-4 py-12 mx-auto text-center">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-black xl:text-3xl">
              <span className="before:block before:absolute before:-inset-1 before:-skew-y-6 before:bg-blue-800 relative inline-block">
                <span className="relative font-bold text-white">Talk</span>
              </span>
              &nbsp;with us.
            </h2>

            <p className="block max-w-4xl mt-4 font-semibold text-base text-black md:text-lg">
              Excited about collaborating with us? Let's discuss! We're eager to
              learn about your venture and how we can assist you in
              accomplishing your objectives. Reach out to us now to arrange a
              meeting and initiate the dialogue.
            </p>

            <div className="mt-6">
              <button className="inline-flex items-center justify-center w-full px-4 py-2.5 overflow-hidden text-sm text-white transition-colors duration-300 bg-gray-900 rounded-lg shadow sm:w-auto sm:mx-2 hover:bg-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEeElEQVR4nK2V3WtTZxjAf5uwMRBUEIbDm7ELb+ZQtqHIcDpxgt5shTIvlIpusimO7aZF5vc2ZruJUZvWeLKExs3GY1JSm1aa2JzEpEmanLRpPmrUpsnJOUmabv9DRqPWVWP9wB+8cJ7n4Xl/PHDe94VZxOoi0rkLxHMGZOW9Ws5bWI1UMDCo/sFDbKXdWMsGLpd2zeXaK2c4VzFwZno1TyWVeoPYnf0kJkdITXUQz5uJKi2E81b8SiseNYlLbcGpttBbTGAr76G7lMBSbsFUbsFQSdI+04puxszpf1fWl/gSRwmm9cQyMZJZM+mp30gojcjKeULKBfyFCbxaIy6tEacWord4iGvFENZyI5ZyI6bpCS5NX6B9xoSucqu+xD0mIKU+ITihQ85cZDy7moSyjNHCx0QVAyGlFb+yrLYGtSb6NQO9WhN/K8tqy1Jqw1Q2cPGfj2ivROpL+mQB9+ggvqRIaEIkdkckOSmSzonEcyKyIhJSRPwFEU9BxKWJ9GsivUURW1HEWha5XBYxT4tcquTqS3rCAn2R93kVmMqh+oXuYQH7K5JYSk+RdHkFrMMvJwkW3sJZ+hCHtqoWdz9NYhwSsEgvJ5HU3bjUWzjVQi2e/evqoncLGF9QEstvIZzvxq+M4ymM4tJSONUAvcUS9pkVTzboBgQ6Bp9PksksJ5VzEM+bkNV1hPM7uFU4hKTswaOuw6k14tAi2ErfzW9s6xPQPYdEzixHzgRJTG4nNXWUeC5KVDlJOO/Cr5zAo5pxqQGuFz7FoRm5VjzxqPlnh8Dvfc+WeJMOAuntxDI9JCebqVYX1fLj+S3I2SW1b0ldiUvz0F/8Aodmw17ecb/5mE3gV/vCkn75M9yj5gdXUPO82ni+k5HcmrlYqizGpYUZrKyhV4tSrb4GzVcFjj9D0hP+C6e8DvdYFFG8P8FDUlOdjP1PUpta2YpLbcepduIobYQfrwgcti4ssQ5HsYd30Bc9+UQtOXmVdH7LvFy1+joeNYJLbcCp/QQHLALfLyCZHbfLF+LK8EF6wm4G7r45VwtNbCWWcZLMxub1hHOb8RfKSOp6XKoevjYLfGtZeBKjR6bLuxdr4NS8vC/+LqGJCLE7Jcan7p/6WcZySwnlk/jVTUhqKzQZBfYaF5bo3QEuSevp8prr1gO3V9Xeo1Rq8ZxEznsJFQ7gL+yDnQaBXc+QnB04RYerEeNQgMtS/ddPeiCYJT11hISyH1lxI+dXQEO7nq8MGxaUtDreQTcwQueNTQgeD6L0aMPHkW9vJpGVSN7bVnvKa2w/u4YGfZCdF2WajDLfmGQOWmR+uCLTLMocs8n84pBpc95Dd+NPOm9+idEzgsW7lePV17GFN+OWlyCNLcWXPEIwLRG/u5ZkNkoi+zYvzOm+w+gG7HS41yIM6enyRbAGprGHEzhlL+6x/Xji2wimo8QyH7y44CFt1z/n7I0IHe5OhKEGLL4NWIc3Yg8dwBm9WbsZbiZeYoLHmT075wbW0+FqQfCcp8vXSrd/H3a5zjUP/wE23m+8hc/sUQAAAABJRU5ErkJggg==" />{' '}
                &nbsp;
                <Calendly text="Schedule a Meeting" />
              </button>

              <a
                href="https://wa.link/fuooin"
                className="inline-flex items-center justify-center w-full px-4 py-2.5 mt-4 overflow-hidden text-sm text-white transition-colors duration-300 bg-blue-600 rounded-lg shadow sm:w-auto sm:mx-2 sm:mt-0 hover:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="25"
                  height="25"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#fff"
                    d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"
                  ></path>
                  <path
                    fill="#cfd8dc"
                    d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"
                  ></path>
                  <path
                    fill="#40c351"
                    d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"
                  ></path>
                  <path
                    fill="#fff"
                    fill-rule="evenodd"
                    d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z"
                    clip-rule="evenodd"
                  ></path>
                </svg>

                <span className="mx-2">Message on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutPage;
