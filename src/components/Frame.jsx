import React from "react";
import image from "/IMG_0138.jpeg";
const Frame = () => {
  return (
    <div
      id="home"
      className="px-4 flex min-h-screen w-full items-center justify-center py-16 md:px-16 lg:px-28"
    >
      <div className="flex w-full max-w-[1200px] flex-col items-center justify-center gap-10 text-white md:flex-row md:items-center md:gap-16">
        <div className="transition-all duration-300 md:flex-shrink-0">
          <img
            src={image}
            alt=""
            className="w-[220px] h-[220px] object-cover cursor-pointer rounded-full shadow-xl shadow-indigo-900 transition-all duration-300 hover:-translate-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-600 md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px]"
          />
        </div>

        <div className="flex w-full max-w-[700px] flex-col items-center justify-center gap-3 text-center md:items-start md:text-left">
          <h1 className="bg-linear-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent text-3xl font-light md:text-5xl">
            Prajyothi Talekar
          </h1>
          <h3 className="bg-linear-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent text-xl md:text-3xl">
            Frontend Developer
          </h3>
          <h4 className="bg-linear-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent text-xl md:text-xl">
            JavaScript · React.js · Node.js · MongoDB · REST APIs
          </h4>
          <div className="max-w-3xl space-y-4 text-gray-300 leading-relaxed">
            <p className="text-sm md:text-base text-justify">
              Frontend Developer based in Berlin with experience building
              responsive web applications using React and JavaScript.
            </p>

            <p className="text-sm md:text-base  text-justify">
              Skilled in developing modern SPAs, reusable UI components, API
              integration, and authentication workflows.
            </p>

            <p className="text-sm md:text-base  text-justify">
              Previously worked as a Product Validation Engineer at UST Global,
              where I developed strong debugging and testing skills through BIOS
              and firmware validation for Intel server platforms.
            </p>

            <p className="text-sm md:text-base  text-justify">
              Recently built and deployed a full-stack Netflix-inspired
              streaming platform using the MERN stack with JWT authentication,
              protected routes, and responsive UI design.
            </p>

            <p className="text-sm md:text-base text-pink-300 ">
              Open to Frontend Developer opportunities.
            </p>
          </div>

          <a
            href="/resume.pdf?v=1"
            download="Prajyothi_Talekar_Resume.pdf"
            className="mt-4 rounded-lg bg-linear-to-r from-blue-500 to-pink-500 px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-pink-500/50"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Frame;
