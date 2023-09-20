import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { sales, Phone, joinUs, address } from '../assets';

const Contact = () => {
  const values = { message: '', email: '', user_name: '' };

  const [formValues, setFormValues] = useState(values);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useRef();

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

  return (
    <section id="contact" className="mb-5 container my-20 px-6 mx-auto ">
      <div
        className="relative overflow-hidden bg-no-repeat bg-cover rounded-md"
        style={{
          backgroundImage: 'url("/contactSection.webp")',
          height: '220px',

          backgroundPosition: '50% 21%',
        }}
      >
        <h1 className="flex text-2xl justify-center font-bold text-[35px] text-white capitalize sm:px-16 py-10 lg:text-3xl">
          Let's&nbsp;
          <span class="before:block before:absolute before:-inset-0 before:-skew-y-3 before:bg-white relative inline-block">
            <span class="relative text-[#333A8E]">{''}Talk ? </span>
          </span>
        </h1>
      </div>

      <div className="container px-4 md:px-12">
        <div
          className="block rounded-lg shadow-lg py-10 md:py-12 px-2 md:px-6"
          style={{
            marginTop: '-100px',
            background: 'hsla(0, 0%, 100%, 0.8)',
            backdropFilter: 'blur(30px)',
          }}
        >
          <div className="flex flex-wrap">
            <div className="grow-0 shrink-0 basis-auto w-full xl:w-5/12 px-3 lg:px-6 mb-12 xl:mb-0">
              <form ref={form} onSubmit={handleSubmit}>
                <div className="form-group mb-6">
                  <input
                    type="text"
                    name="user_name"
                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    value={formValues.user_name}
                    onChange={handleInputChange}
                    required
                    placeholder="Full Name"
                  />
                  {formErrors.user_name && (
                    <span className="text-red-600">{formErrors.user_name}</span>
                  )}
                </div>
                <div class="form-group mb-6">
                  <input
                    type="email"
                    name="email"
                    className="form-control block w-full px-3 py-1.5 text-base font-normal  text-gray-700  bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    value={formValues.email}
                    onChange={handleInputChange}
                    required
                    placeholder="Email address"
                  />
                  {formErrors.email && (
                    <span className="text-red-600">{formErrors.email}</span>
                  )}
                </div>
                <div class="form-group mb-6">
                  <textarea
                    className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    rows="3"
                    name="message"
                    value={formValues.message}
                    onChange={handleInputChange}
                    required
                    placeholder="Let us Know about your Project "
                  ></textarea>
                  {formErrors.message && (
                    <span className="text-red-600">{formErrors.message}</span>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
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
                      <circle fill="#fff" stroke="none" cx="6" cy="50" r="6">
                        <animateTransform
                          attributeName="transform"
                          dur="1s"
                          type="translate"
                          values="0 15 ; 0 -15; 0 15"
                          repeatCount="indefinite"
                          begin="0.1"
                        />
                      </circle>
                      <circle fill="#fff" stroke="none" cx="30" cy="50" r="6">
                        <animateTransform
                          attributeName="transform"
                          dur="1s"
                          type="translate"
                          values="0 10 ; 0 -10; 0 10"
                          repeatCount="indefinite"
                          begin="0.2"
                        />
                      </circle>
                      <circle fill="#fff" stroke="none" cx="54" cy="50" r="6">
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
              </form>
              {isSuccess && (
                <p className="text-green-500 font-semibold text-center pt-2">
                  Your message has been sent successfully!
                </p>
              )}
            </div>
            <div className="grow-0 shrink-0 basis-auto w-full xl:w-7/12">
              <div className="flex flex-wrap">
                <div className="mb-12 grow-0 shrink-0 basis-auto w-full md:w-6/12 px-3 lg:px-6">
                  <div className="flex items-start">
                    <div className="shrink-0">
                      <div className="rounded-[10px] shadow-md w-14 h-14 flex items-center justify-center">
                        <img src={address} alt="" />
                      </div>
                    </div>
                    <div className="grow ml-6">
                      <p className="font-bold mb-1">Address</p>
                      <p className="text-gray-500 text-[12px]">
                        Imm B, Bureau 12, Digitakal Agency, RCE Firdaous, Rue
                        Mohamed Abdou، Kenitra
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mb-12 grow-0 shrink-0 basis-auto w-full md:w-6/12 px-3 lg:px-6">
                  <div className="flex items-start">
                    <div className="shrink-0">
                      <div className="rounded-[10px] shadow-md w-14 h-14 flex items-center justify-center">
                        <img src={sales} alt="" />
                      </div>
                    </div>
                    <div className="grow ml-6">
                      <p className="font-bold mb-1">Sales questions</p>
                      <p className="text-gray-500 text-[15px]">
                        digitakalagency@gmail.com
                      </p>
                      <p className="text-gray-500">+212 537-3798-44</p>
                    </div>
                  </div>
                </div>
                <div className="mb-12 md:mb-0 grow-0 shrink-0 basis-auto w-full md:w-6/12 px-3 lg:px-6">
                  <div className="flex align-start">
                    <div className="shrink-0">
                      <div className="rounded-[10px] shadow-md w-14 h-14 flex items-center justify-center">
                        <img src={Phone} alt="" />
                      </div>
                    </div>
                    <div className="grow ml-6">
                      <p className="font-bold mb-1">Phone</p>
                      <p className="text-gray-500">+212 763-5032-75</p>
                      <p className="text-gray-500">+212 537-3798-44</p>
                    </div>
                  </div>
                </div>
                <div className="grow-0 shrink-0 basis-auto w-full md:w-6/12 px-3 lg:px-6">
                  <div className="flex align-start">
                    <div className="shrink-0">
                      <div className="rounded-[10px] shadow-md w-14 h-14 flex items-center justify-center">
                        <img src={joinUs} alt="" />
                      </div>
                    </div>
                    <div className="grow ml-6">
                      <p className="font-bold mb-1">Join Us</p>
                      <p className="text-gray-500">Join@digitakalagency.com</p>
                      <p className="text-gray-500">+212 763-5032-75</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
