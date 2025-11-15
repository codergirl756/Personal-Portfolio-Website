import React from 'react';
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaJava, FaGithub } from "react-icons/fa";
import { SiMongodb, SiRedis, SiC } from "react-icons/si";

const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold mb-6">Experience</h1>

      <div className="flex flex-wrap items-center justify-around gap-10">
        {/* Skills Icons */}
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaHtml5 color="#E34F26" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaCss3 color="#1572b6" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaJs color="#F7DF1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaReact color="#61DAFB" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaNodeJs color="#339933" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiMongodb color="#47A248" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiRedis color="#D82C20" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaJava color="#007396" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaGithub color="#FFFFFF" size={50} />
          </span>
        </div>

        {/* Experience Card */}
        <div className="flex flex-col gap-6 md:w-2/5">
          <div className="flex flex-col bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4
                          transition-shadow duration-300
                          hover:shadow-[0_0_20px_5px_black,0_0_30px_10px_silver]">
            <div className="flex items-center gap-3">
              <SiC color="#A8B9CC" size={30} />
              <h2 className="text-white leading-tight font-semibold text-lg md:text-xl">
                MERN Stack Developer, Ceeras IT Services
              </h2>
            </div>
            <p className="text-sm text-white font-thin mt-1">
              Feb 2025 - Jul 2025 (Internship)
            </p>
            <ul className="text-sm text-white p-2 list-disc list-inside space-y-1">
              <li>Developed full-stack web applications using MongoDB, Express.js, React.js, and Node.js.</li>
              <li>Built responsive and interactive frontend interfaces with reusable React components.</li>
              <li>Created RESTful APIs and handled backend logic efficiently with Express.js and Node.js.</li>
              <li>Implemented authentication and secure user management using JWT and session management.</li>
              <li>Optimized MongoDB schemas and queries for high performance and scalability.</li>
              <li>Collaborated with team members, conducted code reviews, and deployed applications on cloud platforms.</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Experience;
