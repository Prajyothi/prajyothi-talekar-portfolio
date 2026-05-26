const Contact = () => {
  return (
    <div
      id="contact"
      className="flex min-h-[70vh] min-w-full items-center justify-center px-4 py-12 sm:px-6 sm:py-16"
    >
      <div className="flex w-full max-w-[800px] flex-col items-center justify-center gap-3 space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl shadow-black/30 sm:p-10">
        <h1 className="text-center text-4xl font-semibold text-white md:text-6xl">
          <span className="bg-linear-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">
            Get in Touch
          </span>
        </h1>

        <p className="text-center text-base font-medium text-gray-300">
          I'm currently open to new opportunities. Whether you have a project in
          mind or want to discuss potential roles, feel free to reach out!
        </p>

        <div className="flex w-full flex-col gap-4 md:flex-row md:justify-center">
          <a
            href="mailto:jyotalekar77@gmail.com"
            className="w-full rounded-lg border border-indigo-600 bg-black px-5 py-3 text-center text-lg font-bold text-white shadow-lg shadow-indigo-700/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-500 md:w-auto"
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
