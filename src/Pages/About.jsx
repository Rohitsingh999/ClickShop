import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const About = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center space-y-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          About ClickShop
        </h2>
        <p className="text-lg text-gray-200 max-w-3xl mx-auto">
          ClikShop is a modern, user-friendly eCommerce application designed to
          provide a seamless shopping experience. This platform offers a wide
          range of products and leverages the powerful Platzi Fake Store API to
          fetch real-time product data, ensuring an efficient and dynamic
          shopping experience.
        </p>

        <h3 className="text-2xl md:text-3xl font-semibold text-white">
          How I Built This
        </h3>
        <p className="text-lg text-gray-200 max-w-3xl mx-auto">
          I developed this application using React, Context API for state
          management, and Tailwind CSS for a beautiful and responsive design.
          The API used is Platzi Fake Store API, which provides real-time
          product data for testing and development.
        </p>

        <h3 className="text-2xl md:text-3xl font-semibold text-white">
          About Me
        </h3>
        <p className="text-lg text-gray-200 max-w-3xl mx-auto">
          My name is Rohit Singh Rawat, and I am a passionate web developer with a strong focus on front-end
          technologies. My goal is to create interactive, high-performance web
          applications that provide an amazing user experience. This project
          was a great opportunity to enhance my skills in API integration,
          state management, and responsive design.
        </p>
        <div className="flex justify-center space-x-6 mt-4">
          <a href="https://github.com/Rohitsingh999" target="_blank" className="text-gray-200 hover:text-white text-2xl" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/yourlinkedin" target="_blank" className="text-gray-200 hover:text-white text-2xl" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;