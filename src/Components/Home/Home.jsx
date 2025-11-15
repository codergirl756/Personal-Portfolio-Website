import React from 'react';
import avatar from '../../assets/avatar.png';
import TextChange from '../TextChange';

const Home = () => {
  return (
    <div className="text-white flex flex-col md:flex-row w-full justify-between items-center p-10 md:p-20">
      
      {/* Text Section */}
      <div className="md:w-2/4 md:pr-10">
        <h1 className="text-3xl md:text-6xl font-bold leading-normal tracking-tighter">
          <TextChange />
        </h1>
        <p className="text-sm md:text-2xl tracking-tight mt-4">
          A passionate Full Stack Web Developer focused on building high-performance, user-centric, and visually engaging web applications.
        </p>

        {/* Buttons */}
        <div className="mt-5 flex flex-col sm:flex-row gap-4">
          <a
            href="#Footer"
            className="text-white py-2 px-3 text-sm md:text-lg hover:opacity-90 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
          >
            Contact Me
          </a>

          <a
            href="/VaishuThakurResume.pdf" 
            download="VaishuThakurResume.pdf"
            className="text-white py-2 px-3 text-sm md:text-lg hover:opacity-90 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
          >
            Download Resume
          </a>
        </div>
      </div>

      {/* Image Section */}
      <div className="md:w-2/4 mt-10 md:mt-0 flex justify-center">
        <div className="rounded-full overflow-hidden transition-shadow duration-300 shadow-black hover:shadow-[0_0_20px_5px_black,0_0_30px_10px_silver]">
          <img
            className="w-2/3 md:w-full rounded-full"
            src={avatar}
            alt="Avatar"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
