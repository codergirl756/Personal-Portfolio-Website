import React from 'react';
import AboutImg from '../../assets/about.png';
import { IoArrowForward } from 'react-icons/io5';

const About = () => {
  return (
    <div id="About" className="text-white p-10 md:p-24 bg-black/30 shadow-xl mx-0 md:mx-20 rounded-xl backdrop-blur-md border border-white/5">
      <h2 className="text-2xl md:text-4xl font-bold mb-8 text-center">About Me</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Image Card */}
        <div className="md:col-span-1 bg-zinc-950/40 border border-white/10 rounded-xl p-6 flex justify-center items-center backdrop-blur-sm">
          <img className="w-full h-auto rounded-xl object-cover" src={AboutImg} alt="About" />
        </div>

        {/* Content Section */}
        <div className="md:col-span-2 flex flex-col gap-6">
          
          {/* Frontend Card */}
          <div className="bg-zinc-950/40 border border-white/10 rounded-xl p-6 flex gap-4 hover:bg-zinc-900/50 transition-colors duration-300">
            <IoArrowForward size={30} className="mt-1 text-blue-500" />
            <div>
              <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                Frontend Developer
              </h1>
              <p className="text-sm md:text-md leading-tight text-gray-300 mt-2">
                Experienced in creating responsive, interactive, and visually appealing user interfaces using React, HTML, CSS, and JavaScript. Skilled in modern UI frameworks and building pixel-perfect designs.
              </p>
            </div>
          </div>

          {/* Backend Card */}
          <div className="bg-zinc-950/40 border border-white/10 rounded-xl p-6 flex gap-4 hover:bg-zinc-900/50 transition-colors duration-300">
            <IoArrowForward size={30} className="mt-1 text-green-500" />
            <div>
              <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                Backend Developer
              </h1>
              <p className="text-sm md:text-md leading-tight text-gray-300 mt-2">
                Proficient in building robust server-side applications with Node.js, Express, and MongoDB. Experienced in creating APIs, handling databases, and implementing authentication and security.
              </p>
            </div>
          </div>

          {/* Full Stack Card */}
          <div className="bg-zinc-950/40 border border-white/10 rounded-xl p-6 flex gap-4 hover:bg-zinc-900/50 transition-colors duration-300">
            <IoArrowForward size={30} className="mt-1 text-purple-500" />
            <div>
              <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                Full Stack Developer
              </h1>
              <p className="text-sm md:text-md leading-tight text-gray-300 mt-2">
                Able to integrate frontend and backend seamlessly to deliver full-fledged web applications. Experienced in end-to-end development, RESTful APIs, and deploying applications on cloud platforms.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;
