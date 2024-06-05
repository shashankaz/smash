import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Tech from "./components/Tech";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-[#352F44] text-[#FAF0E6] md:px-[100px] px-[30px]">
      <Hero />
      <About />
      <Education />
      <Tech />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
