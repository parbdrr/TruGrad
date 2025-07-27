import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white py-4">
      <div className="w-11/12 md:w-3/4 lg:w-1/2 mx-auto text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} My College Review. All rights reserved.
        </p>
        <p className="text-sm mt-2">
          Developed by Nagaraj Nayak, Parv Badhera, Tushar Kalyan, and Adith Jora.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
