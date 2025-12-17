const Contact = () => {
  return (
    <div
      id="contact"
      className="flex min-h-[70vh] min-w-full items-center justify-center"
    >
      <div className="flex flex-col items-center justify-center gap-3 space-y-6 p-14">
        <h1 className="text-center text-5xl md:text-7xl">
          <span className="bg-linear-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">
            Get in Touch
          </span>
        </h1>

        <p className="text-center text-lg font-semibold text-gray-500">
          I'm currently open to new opportunities. Whether you have a project in
          mind, want to discuss potential roles,feel free to reach out!
        </p>

        <div className="flex flex-col md:flex-row gap-4">
          <a
            href=" mailto:jyotalekar77@gmail.com"
            className="text-nowrap rounded-lg border border-indigo-600 bg-black px-5 py-3 text-lg font-bold text-white shadow-lg shadow-indigo-700/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-500"
          >
            Contact Me
          </a>

          <a
            href="/resume.pdf?v=1"
            download="Prajyothi_Talekar_Resume.pdf"
            className="text-nowrap rounded-lg bg-linear-to-r from-blue-500 to-pink-500 px-5 py-3 text-lg font-bold text-white shadow-lg shadow-pink-700/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-pink-500"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
