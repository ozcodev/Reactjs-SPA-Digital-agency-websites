import React, { useEffect, useRef, useState } from 'react';
import style from '../style';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { WhatsApp } from '../components/index';
import { Phone, email, address } from '../assets/index';
import { useLocation } from 'react-router-dom';

import emailjs from '@emailjs/browser';

const ContactPage = ({ pageTitle }) => {
  const values = { message: '', email: '', user_name: '', number: '' };
  const [formValues, setFormValues] = useState(values);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const form = useRef();
  const { pathname } = useLocation();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmit(true);
    const errors = validateForm(formValues);
    setFormErrors(errors);

    // Only submit the form if there are no errors
    if (Object.keys(errors).length === 0) {
      setTimeout(() => {
        setIsSubmit(false);
        setFormValues(values);
        setIsSuccess(true);
      }, 3000);
    } else {
      setIsSubmit(false);
    }
  };

  const sendForm = () => {
    emailjs
      .sendForm(
        'service_gqzpf0s',
        'template_d09tb6e',
        form.current,
        'Wq3pWVlP4xteVcRzG'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const validateForm = (values) => {
    let errors = {};
    if (!values.user_name || values.user_name.length < 3) {
      errors.user_name = 'required';
    }
    if (!values.number || values.number.length < 10) {
      errors.number = 'required';
    }
    if (!values.email) {
      errors.email = 'required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'required';
    }
    if (
      !values.message ||
      values.message.length < 15 ||
      values.message.length > 500
    ) {
      errors.message = 'required';
    }
    return errors;
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      sendForm();
    }
  }, [formErrors]);

  useEffect(() => {
    document.title = pageTitle;
    window.scrollTo(0, 0);
  }, [pageTitle, pathname]); // run this effect whenever pageTitle changes

  return (
    <div className={`${style.paddingX} ${style.flexStart}`}>
      <WhatsApp />
      <div className={`${style.innerWidth}`}>
        <motion.div
          initial={{
            width: 0,
          }}
          animate={{ width: '100%' }}
          exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
        >
          <section className="relative z-10 overflow-hidden bg-white py-20 lg:py-[120px]">
            <div className="container mx-auto">
              <div className="-mx-4 flex flex-wrap lg:justify-between">
                <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
                  <div className="mb-12 max-w-[570px] lg:mb-0">
                    <span className="text-primary mb-4 block text-base font-semibold">
                      Contact Us
                    </span>
                    <h2 className="text-dark mb-6 text-[32px] font-bold uppercase sm:text-[40px] lg:text-[36px] xl:text-[40px]">
                      Hey👋🏻, can't wait to chat about your project?
                    </h2>
                    <p className="text-body-color mb-9 text-base font-semibold leading-relaxed">
                      Connecting with us is a breeze! Drop us a message on
                      WhatsApp 📱, schedule a meeting on Calendly 🗓️, or fill
                      out a form. We're excited to help bring your ideas to
                      life! 😃
                    </p>
                    <div className="mb-8 flex w-full max-w-[370px]">
                      <div className="bg-primary text-primary mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-opacity-5 sm:h-[70px] sm:max-w-[70px]">
                        <img src={address} alt="" />
                      </div>
                      <div className="w-full">
                        <h4 className="text-dark mb-1 text-xl font-bold">
                          Our Location
                        </h4>
                        <p className="text-body-color text-base">
                          Imm B, Bureau 12, Digitakal Agency, RCE Firdaous, Rue
                          Mohamed Abdou، Kenitra
                        </p>
                      </div>
                    </div>
                    <div className="mb-8 flex w-full max-w-[370px]">
                      <div className="bg-primary text-primary mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-opacity-5 sm:h-[70px] sm:max-w-[70px]">
                        <img src={Phone} alt="" />
                      </div>
                      <div className="w-full">
                        <h4 className="text-dark mb-1 text-xl font-bold">
                          Phone Number
                        </h4>
                        <p className="text-body-color text-base">
                          +212 123456789
                        </p>
                      </div>
                    </div>
                    <div className="mb-8 flex w-full max-w-[370px]">
                      <div className="bg-primary text-primary mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-opacity-5 sm:h-[70px] sm:max-w-[70px]">
                        <img src={email} alt="" />
                      </div>
                      <div className="w-full">
                        <h4 className="text-dark mb-1 text-xl font-bold">
                          Email Address
                        </h4>
                        <p className="text-body-color text-base">
                          info@digitakal.com
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
                  <Tilt>
                    <div className="relative rounded-lg bg-white p-8 shadow-[-15px_10px_18px_3px] border-solid border-2 border-indigo-600 shadow-blue-500/50 sm:p-12">
                      <form ref={form} onSubmit={handleSubmit}>
                        <div className="mb-6">
                          <input
                            type="text"
                            name="user_name"
                            value={formValues.user_name}
                            onChange={handleInputChange}
                            required
                            placeholder="Your Name"
                            className="text-body-color border-[f0f0f0] focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
                          />
                          {formErrors.user_name && (
                            <span className="text-red-600">
                              {formErrors.user_name}
                            </span>
                          )}
                        </div>
                        <div className="mb-6">
                          <input
                            type="email"
                            name="email"
                            value={formValues.email}
                            onChange={handleInputChange}
                            required
                            placeholder="Your Email"
                            className="text-body-color border-[f0f0f0] focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
                          />
                          {formErrors.email && (
                            <span className="text-red-600">
                              {formErrors.email}
                            </span>
                          )}
                        </div>
                        <div className="mb-6">
                          <input
                            type="tel"
                            name="number"
                            value={formValues.number}
                            onChange={handleInputChange}
                            placeholder="Your Phone"
                            required
                            className="text-body-color border-[f0f0f0] focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
                          />
                          {formErrors.number && (
                            <span className="text-red-600">
                              {formErrors.number}
                            </span>
                          )}
                        </div>
                        <div className="mb-6">
                          <textarea
                            name="message"
                            value={formValues.message}
                            onChange={handleInputChange}
                            rows="6"
                            required
                            placeholder="Let us Know about your Project "
                            className="text-body-color border-[f0f0f0] focus:border-primary w-full resize-none rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
                          ></textarea>
                          {formErrors.message && (
                            <span className="text-red-600">
                              {formErrors.message}
                            </span>
                          )}
                        </div>
                        <div>
                          <button
                            type="submit"
                            className="bg-[#333A8E] border-primary w-full rounded border p-3 text-white transition hover:bg-opacity-90"
                          >
                            {isSubmit ? (
                              <svg
                                className="mx-auto"
                                version="1.1"
                                id="L5"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                viewBox="0 20 70 60"
                                width="20px"
                                height="20px"
                                enable-background="new 0 0 0 0"
                                xml:space="preserve"
                              >
                                <circle
                                  fill="#fff"
                                  stroke="none"
                                  cx="6"
                                  cy="50"
                                  r="6"
                                >
                                  <animateTransform
                                    attributeName="transform"
                                    dur="1s"
                                    type="translate"
                                    values="0 15 ; 0 -15; 0 15"
                                    repeatCount="indefinite"
                                    begin="0.1"
                                  />
                                </circle>
                                <circle
                                  fill="#fff"
                                  stroke="none"
                                  cx="30"
                                  cy="50"
                                  r="6"
                                >
                                  <animateTransform
                                    attributeName="transform"
                                    dur="1s"
                                    type="translate"
                                    values="0 10 ; 0 -10; 0 10"
                                    repeatCount="indefinite"
                                    begin="0.2"
                                  />
                                </circle>
                                <circle
                                  fill="#fff"
                                  stroke="none"
                                  cx="54"
                                  cy="50"
                                  r="6"
                                >
                                  <animateTransform
                                    attributeName="transform"
                                    dur="1s"
                                    type="translate"
                                    values="0 5 ; 0 -5; 0 5"
                                    repeatCount="indefinite"
                                    begin="0.3"
                                  />
                                </circle>
                              </svg>
                            ) : (
                              'Send'
                            )}
                          </button>
                        </div>
                      </form>
                      {isSuccess && (
                        <p className="text-green-500 font-semibold text-center pt-2">
                          Your message has been sent successfully!
                        </p>
                      )}
                      <div>
                        <span className="absolute -right-10 top-[90px] z-[-1]">
                          <svg
                            width="34"
                            height="134"
                            viewBox="0 0 34 134"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle
                              cx="31.9993"
                              cy="132"
                              r="1.66667"
                              transform="rotate(180 31.9993 132)"
                              fill="#333A8E"
                            />
                            <circle
                              cx="31.9993"
                              cy="117.333"
                              r="1.66667"
                              transform="rotate(180 31.9993 117.333)"
                              fill="#333A8E"
                            />
                            <circle
                              cx="31.9993"
                              cy="102.667"
                              r="1.66667"
                              transform="rotate(180 31.9993 102.667)"
                              fill="#333A8E"
                            />
                            <circle
                              cx="31.9993"
                              cy="88"
                              r="1.66667"
                              transform="rotate(180 31.9993 88)"
                              fill="#333A8E"
                            />
                            <circle
                              cx="31.9993"
                              cy="73.3333"
                              r="1.66667"
                              transform="rotate(180 31.9993 73.3333)"
                              fill="#333A8E"
                            />
                            <circle
                              cx="31.9993"
                              cy="45"
                              r="1.66667"
                              transform="rotate(180 31.9993 45)"
                              fill="#333A8E"
                            />
                            <circle
                              cx="31.9993"
                              cy="16"
                              r="1.66667"
                              transform="rotate(180 31.9993 16)"
                              fill="#333A8E"
                            />
                            <circle
                              cx="31.9993"
                              cy="59"
                              r="1.66667"
                              transform="rotate(180 31.9993 59)"
                              fill="#333A8E"
                            />
                            <circle
                              cx="31.9993"
                              cy="30.6666"
                              r="1.66667"
                              transform="rotate(180 31.9993 30.6666)"
                              fill="#333A8E"
                            />
                            <circle
                              cx="31.9993"
                              cy="1.66665"
                              r="1.66667"
                              transform="rotate(180 31.9993 1.66665)"
                              fill="#333A8E"
                            />
                            <circle
                              cx="17.3333"
                              cy="132"
                              r="1.66667"
                              transform="rotate(180 17.3333 132)"
                              fill="#333A8E"
                            />
                            <circle
                              cx="17.3333"
                              cy="117.333"
                              r="1.66667"
                              transform="rotate(180 17.3333 117.333)"
                              fill="#333A8E"
                            />
                            <circle
                              cx="17.3333"
                              cy="102.667"
                              r="1.66667"
                              transform="rotate(180 17.3333 102.667)"
                              fill="#333A8E"
                            />
                            <circle
                              cx="17.3333"
                              cy="88"
                              r="1.66667"
                              transform="rotate(180 17.3333 88)"
                              fill="#333A8E"
                            />
                            <circle
                              cx="17.3333"
                              cy="73.3333"
                              r="1.66667"
                              transform="rotate(180 17.3333 73.3333)"
                              fill="#333A8E"
                            />
                            <circle
                              cx="17.3333"
                              cy="45"
                              r="1.66667"
                              transform="rotate(180 17.3333 45)"
                              fill="#333A8E"
                            />
                            <circle
                              cx="17.3333"
                              cy="16"
                              r="1.66667"
                              transform="rotate(180 17.3333 16)"
                              fill="#333A8E"
                            />
                            <circle
                              cx="17.3333"
                              cy="59"
                              r="1.66667"
                              transform="rotate(180 17.3333 59)"
                              fill="#333A8E"
                            />
                            <circle
                              cx="17.3333"
                              cy="30.6666"
                              r="1.66667"
                              transform="rotate(180 17.3333 30.6666)"
                              fill="#333A8E"
                            />
                            <circle
                              cx="17.3333"
                              cy="1.66665"
                              r="1.66667"
                              transform="rotate(180 17.3333 1.66665)"
                              fill="#333A8E"
                            />
                            <circle
                              cx="2.66536"
                              cy="132"
                              r="1.66667"
                              transform="rotate(180 2.66536 132)"
                              fill="#333A8E"
                            />
                            <circle
                              cx="2.66536"
                              cy="117.333"
                              r="1.66667"
                              transform="rotate(180 2.66536 117.333)"
                              fill="#333A8E"
                            />
                            <circle
                              cx="2.66536"
                              cy="102.667"
                              r="1.66667"
                              transform="rotate(180 2.66536 102.667)"
                              fill="#333A8E"
                            />
                            <circle
                              cx="2.66536"
                              cy="88"
                              r="1.66667"
                              transform="rotate(180 2.66536 88)"
                              fill="#333A8E"
                            />
                            <circle
                              cx="2.66536"
                              cy="73.3333"
                              r="1.66667"
                              transform="rotate(180 2.66536 73.3333)"
                              fill="#333A8E"
                            />
                            <circle
                              cx="2.66536"
                              cy="45"
                              r="1.66667"
                              transform="rotate(180 2.66536 45)"
                              fill="#333A8E"
                            />
                            <circle
                              cx="2.66536"
                              cy="16"
                              r="1.66667"
                              transform="rotate(180 2.66536 16)"
                              fill="#333A8E"
                            />
                            <circle
                              cx="2.66536"
                              cy="59"
                              r="1.66667"
                              transform="rotate(180 2.66536 59)"
                              fill="#333A8E"
                            />
                            <circle
                              cx="2.66536"
                              cy="30.6666"
                              r="1.66667"
                              transform="rotate(180 2.66536 30.6666)"
                              fill="#333A8E"
                            />
                            <circle
                              cx="2.66536"
                              cy="1.66665"
                              r="1.66667"
                              transform="rotate(180 2.66536 1.66665)"
                              fill="#333A8E"
                            />
                          </svg>
                        </span>
                        <span className="absolute -left-7 -bottom-7 z-[-1]">
                          <svg
                            width="107"
                            height="134"
                            viewBox="0 0 107 134"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle
                              cx="104.999"
                              cy="132"
                              r="1.66667"
                              transform="rotate(180 104.999 132)"
                              fill="#333A8E"
                            />
                            <circle
                              cx="104.999"
                              cy="117.333"
                              r="1.66667"
                              transform="rotate(180 104.999 117.333)"
                              fill="#333A8E"
                            />
                            <circle
                              cx="104.999"
                              cy="102.667"
                              r="1.66667"
                              transform="rotate(180 104.999 102.667)"
                              fill="#333A8E"
                            />
                            <circle
                              cx="104.999"
                              cy="88"
                              r="1.66667"
                              transform="rotate(180 104.999 88)"
                              fill="#333A8E"
                            />
                            <circle
                              cx="104.999"
                              cy="73.3333"
                              r="1.66667"
                              transform="rotate(180 104.999 73.3333)"
                              fill="#333A8E"
                            />
                            <circle
                              cx="104.999"
                              cy="45"
                              r="1.66667"
                              transform="rotate(180 104.999 45)"
                              fill="#333A8E"
                            />
                            <circle
                              cx="104.999"
                              cy="16"
                              r="1.66667"
                              transform="rotate(180 104.999 16)"
                              fill="#333A8E"
                            />
                            <circle
                              cx="104.999"
                              cy="59"
                              r="1.66667"
                              transform="rotate(180 104.999 59)"
                              fill="#333A8E"
                            />
                            <circle
                              cx="104.999"
                              cy="30.6666"
                              r="1.66667"
                              transform="rotate(180 104.999 30.6666)"
                              fill="#333A8E"
                            />
                            <circle
                              cx="104.999"
                              cy="1.66665"
                              r="1.66667"
                              transform="rotate(180 104.999 1.66665)"
                              fill="#333A8E"
                            />
                            <circle
                              cx="90.3333"
                              cy="132"
                              r="1.66667"
                              transform="rotate(180 90.3333 132)"
                              fill="#333A8E"
                            />
                            <circle
                              cx="90.3333"
                              cy="117.333"
                              r="1.66667"
                              transform="rotate(180 90.3333 117.333)"
                              fill="#333A8E"
                            />
                            <circle
                              cx="90.3333"
                              cy="102.667"
                              r="1.66667"
                              transform="rotate(180 90.3333 102.667)"
                              fill="#333A8E"
                            />
                            <circle
                              cx="90.3333"
                              cy="88"
                              r="1.66667"
                              transform="rotate(180 90.3333 88)"
                              fill="#333A8E"
                            />
                            <circle
                              cx="90.3333"
                              cy="73.3333"
                              r="1.66667"
                              transform="rotate(180 90.3333 73.3333)"
                              fill="#333A8E"
                            />
                            <circle
                              cx="90.3333"
                              cy="45"
                              r="1.66667"
                              transform="rotate(180 90.3333 45)"
                              fill="#333A8E"
                            />
                            <circle
                              cx="90.3333"
                              cy="16"
                              r="1.66667"
                              transform="rotate(180 90.3333 16)"
                              fill="#333A8E"
                            />
                            <circle
                              cx="90.3333"
                              cy="59"
                              r="1.66667"
                              transform="rotate(180 90.3333 59)"
                              fill="#333A8E"
                            />
                            <circle
                              cx="90.3333"
                              cy="30.6666"
                              r="1.66667"
                              transform="rotate(180 90.3333 30.6666)"
                              fill="#333A8E"
                            />
                            <circle
                              cx="90.3333"
                              cy="1.66665"
                              r="1.66667"
                              transform="rotate(180 90.3333 1.66665)"
                              fill="#333A8E"
                            />
                            <circle
                              cx="75.6654"
                              cy="132"
                              r="1.66667"
                              transform="rotate(180 75.6654 132)"
                              fill="#333A8E"
                            />
                            <circle
                              cx="31.9993"
                              cy="132"
                              r="1.66667"
                              transform="rotate(180 31.9993 132)"
                              fill="#333A8E"
                            />
                            <circle
                              cx="75.6654"
                              cy="117.333"
                              r="1.66667"
                              transform="rotate(180 75.6654 117.333)"
                              fill="#333A8E"
                            />
                            <circle
                              cx="31.9993"
                              cy="117.333"
                              r="1.66667"
                              transform="rotate(180 31.9993 117.333)"
                              fill="#333A8E"
                            />
                            <circle
                              cx="75.6654"
                              cy="102.667"
                              r="1.66667"
                              transform="rotate(180 75.6654 102.667)"
                              fill="#333A8E"
                            />
                            <circle
                              cx="31.9993"
                              cy="102.667"
                              r="1.66667"
                              transform="rotate(180 31.9993 102.667)"
                              fill="#333A8E"
                            />
                            <circle
                              cx="75.6654"
                              cy="88"
                              r="1.66667"
                              transform="rotate(180 75.6654 88)"
                              fill="#333A8E"
                            />
                            <circle
                              cx="31.9993"
                              cy="88"
                              r="1.66667"
                              transform="rotate(180 31.9993 88)"
                              fill="#333A8E"
                            />
                            <circle
                              cx="75.6654"
                              cy="73.3333"
                              r="1.66667"
                              transform="rotate(180 75.6654 73.3333)"
                              fill="#333A8E"
                            />
                            <circle
                              cx="31.9993"
                              cy="73.3333"
                              r="1.66667"
                              transform="rotate(180 31.9993 73.3333)"
                              fill="#333A8E"
                            />
                            <circle
                              cx="75.6654"
                              cy="45"
                              r="1.66667"
                              transform="rotate(180 75.6654 45)"
                              fill="#333A8E"
                            />
                            <circle
                              cx="31.9993"
                              cy="45"
                              r="1.66667"
                              transform="rotate(180 31.9993 45)"
                              fill="#333A8E"
                            />
                            <circle
                              cx="75.6654"
                              cy="16"
                              r="1.66667"
                              transform="rotate(180 75.6654 16)"
                              fill="#333A8E"
                            />
                            <circle
                              cx="31.9993"
                              cy="16"
                              r="1.66667"
                              transform="rotate(180 31.9993 16)"
                              fill="#333A8E"
                            />
                            <circle
                              cx="75.6654"
                              cy="59"
                              r="1.66667"
                              transform="rotate(180 75.6654 59)"
                              fill="#333A8E"
                            />
                            <circle
                              cx="31.9993"
                              cy="59"
                              r="1.66667"
                              transform="rotate(180 31.9993 59)"
                              fill="#333A8E"
                            />
                            <circle
                              cx="75.6654"
                              cy="30.6666"
                              r="1.66667"
                              transform="rotate(180 75.6654 30.6666)"
                              fill="#333A8E"
                            />
                            <circle
                              cx="31.9993"
                              cy="30.6666"
                              r="1.66667"
                              transform="rotate(180 31.9993 30.6666)"
                              fill="#333A8E"
                            />
                            <circle
                              cx="75.6654"
                              cy="1.66665"
                              r="1.66667"
                              transform="rotate(180 75.6654 1.66665)"
                              fill="#333A8E"
                            />
                            <circle
                              cx="31.9993"
                              cy="1.66665"
                              r="1.66667"
                              transform="rotate(180 31.9993 1.66665)"
                              fill="#333A8E"
                            />
                            <circle
                              cx="60.9993"
                              cy="132"
                              r="1.66667"
                              transform="rotate(180 60.9993 132)"
                              fill="#333A8E"
                            />
                            <circle
                              cx="17.3333"
                              cy="132"
                              r="1.66667"
                              transform="rotate(180 17.3333 132)"
                              fill="#333A8E"
                            />
                            <circle
                              cx="60.9993"
                              cy="117.333"
                              r="1.66667"
                              transform="rotate(180 60.9993 117.333)"
                              fill="#333A8E"
                            />
                            <circle
                              cx="17.3333"
                              cy="117.333"
                              r="1.66667"
                              transform="rotate(180 17.3333 117.333)"
                              fill="#333A8E"
                            />
                            <circle
                              cx="60.9993"
                              cy="102.667"
                              r="1.66667"
                              transform="rotate(180 60.9993 102.667)"
                              fill="#333A8E"
                            />
                            <circle
                              cx="17.3333"
                              cy="102.667"
                              r="1.66667"
                              transform="rotate(180 17.3333 102.667)"
                              fill="#333A8E"
                            />
                            <circle
                              cx="60.9993"
                              cy="88"
                              r="1.66667"
                              transform="rotate(180 60.9993 88)"
                              fill="#333A8E"
                            />
                            <circle
                              cx="17.3333"
                              cy="88"
                              r="1.66667"
                              transform="rotate(180 17.3333 88)"
                              fill="#333A8E"
                            />
                            <circle
                              cx="60.9993"
                              cy="73.3333"
                              r="1.66667"
                              transform="rotate(180 60.9993 73.3333)"
                              fill="#333A8E"
                            />
                            <circle
                              cx="17.3333"
                              cy="73.3333"
                              r="1.66667"
                              transform="rotate(180 17.3333 73.3333)"
                              fill="#333A8E"
                            />
                            <circle
                              cx="60.9993"
                              cy="45"
                              r="1.66667"
                              transform="rotate(180 60.9993 45)"
                              fill="#333A8E"
                            />
                            <circle
                              cx="17.3333"
                              cy="45"
                              r="1.66667"
                              transform="rotate(180 17.3333 45)"
                              fill="#333A8E"
                            />
                            <circle
                              cx="60.9993"
                              cy="16"
                              r="1.66667"
                              transform="rotate(180 60.9993 16)"
                              fill="#333A8E"
                            />
                            <circle
                              cx="17.3333"
                              cy="16"
                              r="1.66667"
                              transform="rotate(180 17.3333 16)"
                              fill="#333A8E"
                            />
                            <circle
                              cx="60.9993"
                              cy="59"
                              r="1.66667"
                              transform="rotate(180 60.9993 59)"
                              fill="#333A8E"
                            />
                            <circle
                              cx="17.3333"
                              cy="59"
                              r="1.66667"
                              transform="rotate(180 17.3333 59)"
                              fill="#333A8E"
                            />
                            <circle
                              cx="60.9993"
                              cy="30.6666"
                              r="1.66667"
                              transform="rotate(180 60.9993 30.6666)"
                              fill="#333A8E"
                            />
                            <circle
                              cx="17.3333"
                              cy="30.6666"
                              r="1.66667"
                              transform="rotate(180 17.3333 30.6666)"
                              fill="#333A8E"
                            />
                            <circle
                              cx="60.9993"
                              cy="1.66665"
                              r="1.66667"
                              transform="rotate(180 60.9993 1.66665)"
                              fill="#333A8E"
                            />
                            <circle
                              cx="17.3333"
                              cy="1.66665"
                              r="1.66667"
                              transform="rotate(180 17.3333 1.66665)"
                              fill="#333A8E"
                            />
                            <circle
                              cx="46.3333"
                              cy="132"
                              r="1.66667"
                              transform="rotate(180 46.3333 132)"
                              fill="#333A8E"
                            />
                            <circle
                              cx="2.66536"
                              cy="132"
                              r="1.66667"
                              transform="rotate(180 2.66536 132)"
                              fill="#333A8E"
                            />
                            <circle
                              cx="46.3333"
                              cy="117.333"
                              r="1.66667"
                              transform="rotate(180 46.3333 117.333)"
                              fill="#333A8E"
                            />
                            <circle
                              cx="2.66536"
                              cy="117.333"
                              r="1.66667"
                              transform="rotate(180 2.66536 117.333)"
                              fill="#333A8E"
                            />
                            <circle
                              cx="46.3333"
                              cy="102.667"
                              r="1.66667"
                              transform="rotate(180 46.3333 102.667)"
                              fill="#333A8E"
                            />
                            <circle
                              cx="2.66536"
                              cy="102.667"
                              r="1.66667"
                              transform="rotate(180 2.66536 102.667)"
                              fill="#333A8E"
                            />
                            <circle
                              cx="46.3333"
                              cy="88"
                              r="1.66667"
                              transform="rotate(180 46.3333 88)"
                              fill="#333A8E"
                            />
                            <circle
                              cx="2.66536"
                              cy="88"
                              r="1.66667"
                              transform="rotate(180 2.66536 88)"
                              fill="#333A8E"
                            />
                            <circle
                              cx="46.3333"
                              cy="73.3333"
                              r="1.66667"
                              transform="rotate(180 46.3333 73.3333)"
                              fill="#333A8E"
                            />
                            <circle
                              cx="2.66536"
                              cy="73.3333"
                              r="1.66667"
                              transform="rotate(180 2.66536 73.3333)"
                              fill="#333A8E"
                            />
                            <circle
                              cx="46.3333"
                              cy="45"
                              r="1.66667"
                              transform="rotate(180 46.3333 45)"
                              fill="#333A8E"
                            />
                            <circle
                              cx="2.66536"
                              cy="45"
                              r="1.66667"
                              transform="rotate(180 2.66536 45)"
                              fill="#333A8E"
                            />
                            <circle
                              cx="46.3333"
                              cy="16"
                              r="1.66667"
                              transform="rotate(180 46.3333 16)"
                              fill="#333A8E"
                            />
                            <circle
                              cx="2.66536"
                              cy="16"
                              r="1.66667"
                              transform="rotate(180 2.66536 16)"
                              fill="#333A8E"
                            />
                            <circle
                              cx="46.3333"
                              cy="59"
                              r="1.66667"
                              transform="rotate(180 46.3333 59)"
                              fill="#333A8E"
                            />
                            <circle
                              cx="2.66536"
                              cy="59"
                              r="1.66667"
                              transform="rotate(180 2.66536 59)"
                              fill="#333A8E"
                            />
                            <circle
                              cx="46.3333"
                              cy="30.6666"
                              r="1.66667"
                              transform="rotate(180 46.3333 30.6666)"
                              fill="#333A8E"
                            />
                            <circle
                              cx="2.66536"
                              cy="30.6666"
                              r="1.66667"
                              transform="rotate(180 2.66536 30.6666)"
                              fill="#333A8E"
                            />
                            <circle
                              cx="46.3333"
                              cy="1.66665"
                              r="1.66667"
                              transform="rotate(180 46.3333 1.66665)"
                              fill="#333A8E"
                            />
                            <circle
                              cx="2.66536"
                              cy="1.66665"
                              r="1.66667"
                              transform="rotate(180 2.66536 1.66665)"
                              fill="#333A8E"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </Tilt>
                </div>
              </div>
            </div>
          </section>

          {/* Call to action */}
          {/*  <div className="w-full flex justify-center bg-[#27a388] py-4 ">
            <button className="text-black bg-white font-bold text-center py-2 px-2 rounded">
              Book your consulting now
            </button>
          </div> */}

          {/* location */}
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;
