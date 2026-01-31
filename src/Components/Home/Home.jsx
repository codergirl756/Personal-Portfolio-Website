import React from 'react';
import avatar from '../../assets/avatar.png';
import TextChange from '../TextChange';
import resumePdf from '../../assets/Vaishali--Thakur--Resume.pdf';

const Home = () => {
  return (
    <div className="text-white flex flex-col md:flex-row w-full justify-between items-center p-10 md:p-20 overflow-hidden">
      
      {/* Text Section */}
      <div className="md:w-2/4 md:pr-10">
        <h1 className="text-3xl md:text-6xl font-bold leading-normal tracking-tighter">
          <TextChange />
        </h1>
        <p className="text-sm md:text-2xl tracking-tight mt-4 hover:text-blue-300 transition-colors duration-300">
          A passionate Full Stack Web Developer focused on building high-performance, user-centric, and visually engaging web applications.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-5">
          <a
            href="#Footer"
            className="text-white py-2 px-6 text-sm md:text-lg font-bold rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
          >
            Contact Me
          </a>

          <a
            href={resumePdf}
            download="resume.pdf"
            className="text-white py-2 px-6 text-sm md:text-lg font-bold rounded-full bg-gradient-to-r from-pink-500 to-orange-500 hover:scale-105 hover:shadow-lg hover:shadow-pink-500/50 transition-all duration-300"
          >
            Download Resume
          </a>
        </div>
      </div>

      {/* Image Section */}
      <div className="md:w-2/4 mt-10 md:mt-0 flex justify-center">
        <div className="rounded-full overflow-hidden transition-shadow duration-300 shadow-xl shadow-indigo-500/20 hover:shadow-[0_0_50px_10px_rgba(66,153,225,0.3)] animate-float">
          <img
            className="w-2/3 md:w-full rounded-full object-cover"
            src={avatar}
            alt="Avatar"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
