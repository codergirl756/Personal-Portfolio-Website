import React from 'react';
import { MdOutlineEmail } from 'react-icons/md';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { BiCopyright } from 'react-icons/bi';

const Footer = () => {
  return (
    <div
      id="Footer"
      className="flex flex-col md:flex-row justify-around bg-slate-950/30 border-t border-white/5 text-white p-10 md:p-12 items-center gap-10 backdrop-blur-md"
    >
      {/* Left Section */}
      <div className="text-center md:text-left">
        <h1 className="text-2xl md:text-6xl font-bold">Contact</h1>
        <h3 className="text-sm md:text-2xl font-normal">Feel Free To Reach Out!</h3>
      </div>

      {/* Contact List */}
      <ul className="text-sm md:text-xl space-y-4">

        {/* Email */}
        <li className="flex items-center gap-3">
          <MdOutlineEmail size={22} />
          <a
            href="mailto:vaishalithakur9568@gmail.com"
            className="hover:underline"
          >
            vaishalithakur9568@gmail.com
          </a>
        </li>

        {/* LinkedIn */}
        <li className="flex items-center gap-3">
          <FaLinkedinIn size={22} />
          <a
            href="https://www.linkedin.com/in/vaishali-thakur-292587258/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            vaishali-thakur
          </a>
        </li>

        {/* GitHub */}
        <li className="flex items-center gap-3">
          <FaGithub size={22} />
          <a
            href="https://github.com/codergirl756"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            codergirl756
          </a>
        </li>
      </ul>

      {/* Bottom Credit */}
      <div className="flex flex-col items-center mt-6 text-center">
        <p className="flex items-center gap-2 text-sm md:text-base">
          <BiCopyright size={18} /> 2025 • All Rights Reserved
        </p>
        <p className="text-sm md:text-base opacity-90">
          Made with ❤️ by <span className="font-semibold">Vaishali Thakur</span>
        </p>
      </div>

    </div>
  );
};

export default Footer;
