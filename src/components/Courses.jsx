import React from "react";
import { motion } from "framer-motion";

const educationData = [
  {
    title: "Full Stack Web Development",
    platform: "Udemy",
    description:
      "Comprehensive course covering JavaScript, React, Node.js, Express, MongoDB, and full-stack application development.",
    year: "2025",
    skills: ["JavaScript", "React", "Node.js", "MongoDB", "Express"],
  },
  {
    title: "Selenium Webdriver with Java-Basics to Advanced+Frameworks",
    platform: "Udemy",
    description:
      "In-depth course on Selenium WebDriver using Java, covering basics to advanced concepts, including test automation frameworks.",
    year: "2023",
    skills: ["Selenium", "Java", "Test Automation", "Frameworks"],
  },
];

const EducationCard = ({ education, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="flex flex-col gap-4 rounded-2xl border border-gray-700 bg-gray-800/50 p-6 hover:border-pink-500 transition-all duration-300"
    >
      <div className="flex flex-col gap-2">
        <h3 className="text-2xl font-semibold text-white">{education.title}</h3>
        <div className="flex items-center gap-2 text-gray-400">
          <span className="text-pink-400 font-semibold">
            {education.platform}
          </span>
          <span>•</span>
          <span>{education.year}</span>
        </div>
      </div>

      <p className="text-gray-300">{education.description}</p>

      <div className="flex flex-wrap gap-2">
        {education.skills.map((skill, idx) => (
          <span
            key={idx}
            className="rounded-lg bg-linear-to-r from-blue-500/20 to-pink-500/20 border border-blue-500/30 px-3 py-1 text-sm text-white"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const Courses = () => {
  return (
    <div
      id="education"
      className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-14 md:py-24"
    >
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-light text-white md:text-6xl"
      >
        Courses
      </motion.h1>

      <div className="grid w-full max-w-[1000px] gap-8 md:grid-cols-2">
        {educationData.map((education, index) => (
          <EducationCard key={index} education={education} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Courses;
