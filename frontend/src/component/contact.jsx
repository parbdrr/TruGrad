import React from 'react';

const Contact = () => {
  return (
    <div className="w-full flex justify-center py-10  ">
      <div className="w-11/12 md:w-3/4 lg:w-1/2 bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h1>
        <p className="text-gray-700 mb-6">
          Have questions, feedback, or suggestions? We’d love to hear from you! Reach out to us using the details below.
        </p>
        <div className="space-y-4 mb-6">
          <div>
            <h2 className="text-lg font-semibold text-gray-800">Email:</h2>
            <p className="text-gray-700">collegereview307@gmail.com</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-800">Phone:</h2>
            <p className="text-gray-700">7338436427</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-800">Office Address:</h2>
            <p className="text-gray-700">Bull Temple Rd, Basavanagudi, Bengaluru, Karnataka 560019</p>
          </div>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Developers:</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Nagaraj Nayak</li>
            <li>Parv Badhera</li>
            <li>Tushar Kalyan</li>
            <li>Adith Jora</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
