import React from 'react';
import ProjectCard from './ProjectCard';

import projectImage1 from '../../assets/AI-Career-Coach.png';
import projectImage2 from '../../assets/Diagnomind.png';
import projectImage3 from '../../assets/Wanderlust.png';
import projectImage4 from '../../assets/Expense-Tracker.png';
import projectImage5 from '../../assets/Portfolio.png';
import projectImage6 from '../../assets/Thinkify.png';

const Projects = () => {
  const projects = [
    {
      title: "SENSAI – AI Career Coach",
      main: "An AI-powered platform providing career guidance, resume tools, mock interviews, and personalized insights using Next.js, Prisma, Clerk, and Gemini AI.",
      image: projectImage1,
      demoLink: "https://ai-career-coach-peach.vercel.app/",
      sourceLink: "https://github.com/codergirl756/ai-carrer-coach",
    },
    {
      title: "DiagnoMind – Disease Prediction",
      main: "A medical prediction system detecting heart disease, diabetes, and cancer using ML models, real-time analytics, PDF reports, and a secure MERN + ML backend.",
      image: projectImage2,
      demoLink: "https://predicti-x-v2.vercel.app/",
      sourceLink: "https://github.com/codergirl756/-DiagnoMIND-AI-Powered-Multi-Disease-Prediction-System",
    },
    {
      title: "Wanderlust – Travel Platform",
      main: "A complete travel listing and booking platform with authentication, reviews, image uploads, Mapbox location-based search, and a fully responsive user interface.",
      image: projectImage3,
      demoLink: "https://wanderlust-hub.vercel.app/listings",
      sourceLink: "https://github.com/codergirl756/WanderLust-FullStack-Project?tab=readme-ov-file",
    },
    {
      title: "Expense Tracker (MERN)",
      main: "A full-stack expense management system where users track, categorize, and filter expenses with authentication, chart insights, and smooth real-time UI updates.",
      image: projectImage4,
      demoLink: "https://track-yur-expense.netlify.app/login",
      sourceLink: "https://github.com/codergirl756/Expense-tracker-app",
    },
    {
      title: "Personal Portfolio Website",
      main: "A modern, responsive portfolio designed with React and Tailwind, featuring animations, smooth navigation, reusable components, and an elegant UI theme.",
      image: projectImage5,
      demoLink: "#", // Add live demo link here if available
      sourceLink: "#", // Add GitHub repo here if available
    },
    {
      title: "Thinkify – Collaboration Platform",
      main: "A smart community space for students and teachers to share posts, notes, polls, and assignments with real-time updates and secure role-based access control.",
      image: projectImage6,
      demoLink: "https://thinkify.vercel.app/",
      sourceLink: "https://github.com/codergirl756/thinkify.vercel.app",
    },
  ];

  return (
    <div id="Projects" className="p-10 md:p-24 text-white">
      <h1 className="text-2xl md:text-4xl font-bold mb-8">Projects</h1>
      <div className="flex flex-wrap justify-center gap-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            main={project.main}
            image={project.image}
            demoLink={project.demoLink}
            sourceLink={project.sourceLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
