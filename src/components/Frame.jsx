import React from "react";
import image from "/IMG_0138.jpeg";
import { motion } from "framer-motion";
const Frame = () => {
  return (
    <div
      id="home"
      className="px-16 flex min-h-screen w-full items-center justify-center py-28 md:px-32"
    >
      <div className="flex flex-col items-center justify-center gap-10 text-white">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src={image}
            alt=""
            className="w-[250px] h-[250px] object-cover cursor-pointer rounded-full shadow-xl shadow-indigo-900 transition-all duration-300 hover:-translate-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-600 md:w-[350px] md:h-[350px]"
          />
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex max-w-[600px] flex-col items-center justify-center
          gap-3 text-center"
        >
          <h1 className="bg-linear-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent text-3xl font-light md:text-6xl">
            Prajyothi Talekar
          </h1>
          <h3 className="bg-linear-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent text-2xl md:text-3xl">
            Full Stack Developer
          </h3>
          <h4 className="bg-linear-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent text-center text-xl md:text-xl whitespace-nowrap">
            JavaScript · React · Node.js · MongoDB · Postman . Jira . Selenium
            Webdriver
          </h4>
          <p className="md:text-base text-pretty text-sm text-gray-300">
            I'm a Full-Stack Developer based in Berlin with a background in
            product validation and API testing. I build web applications using
            JavaScript, React, Node.js, and MongoDB, and I enjoy creating clean,
            reliable, and user-friendly features. Before transitioning into
            development, I worked as a Product Validation Engineer, where I
            tested BIOS, firmware, and system-level functionality for enterprise
            hardware. This experience gives me a strong quality-first mindset,
            attention to detail, and solid understanding of API behavior.I
            completed and deployed a full-stack Netflix Clone with full API
            integration and authentication. The application is live and reflects
            my ability to build production-ready solutions end to end.
          </p>

          <a
            href="/Prajyothi.pdf"
            download="Prajyothi_Talekar_Resume.pdf"
            className="mt-4 rounded-lg bg-linear-to-r from-blue-500 to-pink-500 px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-pink-500/50"
          >
            Download Resume
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Frame;
