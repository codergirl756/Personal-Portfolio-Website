import React from 'react';
import ProjectCard from './ProjectCard';
import { projects } from './ProjectsData';

const Projects = () => {

  return (
    <div id="Projects" className="p-10 md:p-24 text-white">
      <h1 className="text-2xl md:text-4xl font-bold mb-12 text-center">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-5">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex"
          >
            <ProjectCard
              title={project.title}
              main={project.main}
              image={project.image}
              demoLink={project.demoLink}
              sourceLink={project.sourceLink}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
