import React from 'react';

const About = () => {
  return (
    <div className="w-full flex justify-center py-10">
      <div className="w-11/12 md:w-3/4 lg:w-1/2 bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">About Us</h1>
        <p className="text-gray-700 mb-4">
          Welcome to <span className="font-semibold">My College Review</span>! Our platform is dedicated to providing
          authentic and verified reviews about colleges, helping students make informed decisions about their
          education.
        </p>
        <h2 className="text-xl font-semibold text-gray-800 mb-3">Here’s what makes us unique:</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          <li>
            <span className="font-semibold">Verified Reviews:</span> Only students from a particular college can post
            reviews about it, ensuring the feedback is authentic.
          </li>
          <li>
            <span className="font-semibold">Transparency You Can Trust:</span> Reviews are verified through official
            college email IDs, eliminating fake or misleading opinions.
          </li>
          <li>
            <span className="font-semibold">Student-Centric Platform:</span> We aim to empower students by providing
            them with a space to voice their genuine experiences and share insights with prospective students.
          </li>
        </ul>
        <p className="text-gray-700">
          Whether you're choosing a college or simply want to share your experiences, we’re here to make the process
          seamless and trustworthy.
        </p>
        <p className="text-gray-700 mt-4 font-semibold">
          Join our community and contribute to making informed educational choices!
        </p>
      </div>
    </div>
  );
};

export default About;
