import Navbar from "./components/Navbar.jsx";
import Frame from "./components/Frame.jsx";
import Tech from "./components/Tech.jsx";
import Projects from "./components/Projects.jsx";
import Courses from "./components/Courses.jsx";
import Contact from "./components/Contact.jsx";

function App() {
  return (
    <>
      <div className="fixed -z-10 min-h-screen w-full [background:radial-gradient(100%_100%_at_30%_10%,#0a0a0a_50%,#1a1a3e_90%)]"></div>
      <main className="flex flex-col items-center px-4 pt-24 md:px-8 lg:px-16">
        <Navbar />
        <Frame />
        <Tech />
        <Projects />
        <Courses />
        <Contact />
      </main>
    </>
  );
}

export default App;

<div class="absolute top-0 z-[-2] h-screen w-screen rotate-180 transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]"></div>;
