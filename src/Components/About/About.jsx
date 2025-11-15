import React from 'react';
import AboutImg from '../../assets/about.png';
import { IoArrowForward } from 'react-icons/io5';

const About = () => {
  return (
    <div id="About" className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12">
      <div>
        <h2 className="text-2xl md:text-4xl font-bold mb-6">About Me</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center gap-8">
          <img className="md:h-80 rounded-lg" src={AboutImg} alt="About" />

          <ul>
            {/* Frontend Developer */}
            <li className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Frontend Developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  Experienced in creating responsive, interactive, and visually appealing user interfaces using React, HTML, CSS, and JavaScript. Skilled in modern UI frameworks and building pixel-perfect designs.
                </p>
              </span>
            </li>

            {/* Backend Developer */}
            <li className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Backend Developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  Proficient in building robust server-side applications with Node.js, Express, and MongoDB. Experienced in creating APIs, handling databases, and implementing authentication and security.
                </p>
              </span>
            </li>

            {/* Full Stack Developer */}
            <li className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Full Stack Developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  Able to integrate frontend and backend seamlessly to deliver full-fledged web applications. Experienced in end-to-end development, RESTful APIs, and deploying applications on cloud platforms.
                </p>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
