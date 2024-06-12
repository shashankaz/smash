import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Tech from "./components/Tech";
import FeaturedProjects from "./components/FeaturedProjects";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div>
      <Hero />
      <About />
      <Education />
      <Tech />
      <FeaturedProjects />
      <Contact />
    </div>
  );
};

export default App;
