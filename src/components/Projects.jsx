import React from "react";
import { motion } from "framer-motion";
import HomePage from "/public/HomePage.png";

const projectsData = [
  {
    image: HomePage,
    title: "Netflix Clone Project",
    description:
      "I developed a production ready Netflix Clone that showcases both my frontend and backend engineering skills. The project includes RESTful APIs built with Node.js and Express for authentication, movie catalog management, user profiles, and secure data handling. I used Postman for endpoint testing and to populate movie data in MongoDB, ensuring reliable functionality across the system. The application is fully deployed, with the frontend hosted on Vercel and backend services running on Render, offering a seamless end-to-end streaming experience.",
    technologies: [
      "JavaScript",
      "React.js",
      "Node.js",
      "Postman",
      "MongoDB",
      "Express",
      "Vercel",
      "Render",
    ],
    link: "https://prajyothi-netflix.vercel.app/",
  },
];

const ScrollReveal = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

const ProjectCard = ({ project }) => {
  return (
    <ScrollReveal>
      <div className="flex flex-col items-center gap-8 md:flex-row md:gap-24">
        <img
          src={project.image}
          alt=""
          className="w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[500px] "
        />
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <div className="text-xl font-semibold">{project.title}</div>
            <p className="text-gray-400 leading-relaxed  text-justify text-sm md:text-base">
              {project.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-5">
            {project.technologies.map((tech, index) => (
              <span key={index} className="rounded-lg bg-black ">
                {tech}
              </span>
            ))}
          </div>

          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit rounded-lg bg-linear-to-r from-blue-500 to-pink-500 px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-pink-500/50"
          >
            View Live Project
          </a>
        </div>
      </div>
    </ScrollReveal>
  );
};

const Projects = () => {
  return (
    <div
      id="projects"
      className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-14 md:py-24"
    >
      <ScrollReveal>
        <h1 className="text-4xl font-light text-white md:text-6xl">
          My Projects
        </h1>
      </ScrollReveal>

      <div className="flex w-full max-w-[1000px] flex-col gap-16 text-white">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
