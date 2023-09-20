import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { db } from './firebase';

const ContactForm = ({ pageTitle }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    document.title = pageTitle;
    window.scrollTo(0, 0);
  }, [pageTitle, pathname]);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [option, setOption] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  /* const [successMessage, setSuccessMessage] = useState(''); */

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name.length < 4) {
      setErrorMessage('Name required');
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setErrorMessage('Email must be valid');
      return;
    }

    if (!phone || phone.length < 10) {
      setErrorMessage('Phone required');
      return;
    }

    if (option.length < 1) {
      setErrorMessage('Option is required');
      return;
    }

    db.collection('all_contacts')
      .doc()
      .set({
        name,
        email,
        phone,
        option,
        timestamp: new Date(),
      })
      .then(() => {
        // Create sub-collection based on the selected option
        let optionCollectionRef;
        if (option === 'Web developer') {
          optionCollectionRef = db.collection('web_developer');
        } else if (option === 'Marketing') {
          optionCollectionRef = db.collection('Digital_Marketing');
        } else if (option === 'E-commerce') {
          optionCollectionRef = db.collection('E-commerce');
        } else if (option === 'Creation') {
          optionCollectionRef = db.collection('Creation');
        } else if (option === 'Transformation') {
          optionCollectionRef = db.collection('Digital_Transformation');
        } else if (option === 'Data') {
          optionCollectionRef = db.collection('Data_Insights');
        } else {
          throw new Error('Invalid option');
        }

        alert('Thank you for your submission!');
        setTimeout(() => {
          window.location.href = '/';
        }, 1200);

        // Add the contact to the sub-collection
        optionCollectionRef
          .add({
            name,
            email,
            phone,
            timestamp: new Date(),
          })
          .then(() => {
            console.log('Contact added to sub-collection successfully');
          })
          .catch((error) => {
            console.error('Error adding contact to sub-collection:', error);
          });
      })
      .catch((error) => {
        console.error('Error adding contact:', error);
      });
  };
  return (
    <div class="h-screen md:flex ">
      <div class="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center hidden">
        <div>
          <h1 class="text-white font-bold text-4xl font-sans">
            Digitakal Agency
          </h1>
          <p class="text-white mt-1">
            Your digital transformation agency. <br /> We drive your business
            forward through digital.
          </p>
          <a
            href="/"
            className="block text-center w-36 bg-white text-indigo-800 mt-4 py-3 rounded-2xl font-bold mb-2"
          >
            Discover more
          </a>
        </div>
        <div class="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div class="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div class="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div class="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
      </div>
      <div class="flex md:w-1/2 justify-center py-10 items-center bg-white">
        <form class="bg-white py-20" onSubmit={handleSubmit}>
          <h1 class="text-gray-800 font-bold text-2xl mb-1">Bonjour</h1>
          <p class="text-sm font-normal text-gray-600 mb-7">
            Merci d'avoir choisi notre entreprise
          </p>
          <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <input
              class="pl-2 outline-none border-none"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full Name"
            />
          </div>
          <div class="flex items-center  border-2 py-2 px-3 rounded-2xl mb-4">
            <input
              class="pl-2 outline-none border-none"
              type="number"
              inputmode="numeric"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone"
            />
          </div>
          <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4 focus:outline-none focus:bg-white focus:border-gray-500">
            <input
              className="pl-2 outline-none border-none "
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
            />
          </div>

          <div class="relative w-full">
            <select
              id="option"
              value={option}
              onChange={(e) => setOption(e.target.value)}
              required
              class="block appearance-none w-full bg-white border-1 py-5 px-3 pr-8 rounded-2xl leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            >
              <option value="">I am Interested in </option>
              <option value="Data">Data & Insights</option>
              <option value="Creation">Creation</option>
              <option value="Marketing">Digital Marketing</option>
              <option value="Web developer">Web & App Development</option>
              <option value="Transformation">Digital Transformation</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                class="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              </svg>
            </div>
          </div>

          {errorMessage && (
            <div className="font-bold text-red-500">{errorMessage}</div>
          )}
          <button
            type="submit"
            class="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
          >
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
};
export default ContactForm;
