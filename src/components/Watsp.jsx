import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsApp = () => {
  return (
    <div className="fixed bottom-[6rem] right-0 mr-6 p-2 bg-green-500 rounded-full shadow-lg z-50 hover:bg-white hover:text-white hover:shadow-xl transition duration-300 ease-in-out">
      <a href="https://wa.link/fuooin" target="_blank">
        <FaWhatsapp
          size={40}
          className="text-xl text-white hover:text-green-500"
        />
      </a>
    </div>
  );
};

export default WhatsApp;
