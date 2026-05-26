import { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 z-10 flex w-full flex-wrap items-center justify-between border-b border-b-gray-700 bg-black/70 px-4 py-4 text-white backdrop-blur-md md:justify-evenly md:px-16 md:py-6">
      <a
        href="#home"
        className="bg-linear-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent opacity-80 text-3xl font-semibold transition-all duration-300 hover:opacity-100"
      >
        Prajyothi Talekar
      </a>
      <ul className="hidden md:flex gap-10">
        <a
          href="#home"
          className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
        >
          <li>Home</li>
        </a>

        <a
          href="#tech"
          className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
        >
          <li>Tech</li>
        </a>

        <a
          href="#projects"
          className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
        >
          <li>Projects</li>
        </a>

        <a
          href="#education"
          className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
        >
          <li>Courses</li>
        </a>

        <a
          href="#contact"
          className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
        >
          <li>Contact</li>
        </a>
      </ul>
      <ul className="hidden md:flex gap-5">
        <a
          href="https://www.linkedin.com/in/prajyothi"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100"
        >
          <li>
            <BsLinkedin />
          </li>
        </a>

        <a
          href="https://github.com/Prajyothi"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-orange-500 hover:opacity-100"
        >
          <li>
            <BsGithub />
          </li>
        </a>
      </ul>

      {isOpen ? (
        <BiX className="block md:hidden text-4xl" onClick={menuOpen} />
      ) : (
        <BiMenu className="block md:hidden text-4xl" onClick={menuOpen} />
      )}

      {isOpen && (
        <div
          className={`fixed right-0 top-[84px] h-[calc(100vh-84px)] w-full max-w-xs flex flex-col items-start justify-start gap-10 border-l border-gray-800 bg-black/90 p-8 md:hidden ${isOpen ? "block" : "hidden"}`}
        >
          <ul className="flex flex-col gap-8">
            <a
              href="#home"
              onClick={() => setIsOpen(false)}
              className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
            >
              <li>Home</li>
            </a>

            <a
              href="#tech"
              onClick={() => setIsOpen(false)}
              className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
            >
              <li>Tech</li>
            </a>

            <a
              href="#projects"
              onClick={() => setIsOpen(false)}
              className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
            >
              <li>Projects</li>
            </a>

            <a
              href="#education"
              onClick={() => setIsOpen(false)}
              className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
            >
              <li>Education</li>
            </a>

            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
            >
              <li>Contact</li>
            </a>
          </ul>

          <ul className="flex flex-wrap gap-5">
            <a
              href="https://www.linkedin.com/in/prajyothi"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100"
            >
              <li>
                <BsLinkedin />
              </li>
            </a>

            <a
              href="https://github.com/Prajyothi"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-orange-500 hover:opacity-100"
            >
              <li>
                <BsGithub />
              </li>
            </a>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
