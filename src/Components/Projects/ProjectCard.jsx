import React from "react";

const ProjectCard = ({ title, main, image, demoLink, sourceLink }) => {
  return (
    <div className="p-3 md:p-6 flex flex-col w-full bg-slate-950/40 shadow-xl shadow-slate-900 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-slate-900/60 border border-white/5 hover:border-white/10 backdrop-blur-md">
      
      {/* Project Image */}
      {image && (
        <img
          className="w-full h-48 object-cover rounded-xl mb-4 opacity-90 hover:opacity-100 transition-opacity duration-300"
          src={image}
          alt={title}
        />
      )}

      {/* Project Title */}
      <h3 className="px-2 text-xl md:text-2xl font-bold leading-snug mb-2 text-white">
        {title}
      </h3>

      {/* Project Description */}
      <p className="px-2 text-sm md:text-md leading-tight mb-4 text-gray-300 font-light">
        {main}
      </p>

      {/* Buttons */}
      <div className="mt-auto flex gap-2 md:gap-4 px-2">
        {demoLink && (
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white py-2 px-4 text-sm md:text-lg font-semibold rounded-3xl bg-[#465697] hover:opacity-85 hover:scale-105 duration-300 text-center"
          >
            Live Project
          </a>
        )}
        {sourceLink && (
          <a
            href={sourceLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white py-2 px-4 text-sm md:text-lg font-semibold rounded-3xl bg-[#465697] hover:opacity-85 hover:scale-105 duration-300 text-center"
          >
            Source Code
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
