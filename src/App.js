import Hero from "./components/Hero";
import About from "./components/About";
import Tech from "./components/Tech";
import FeaturedProjects from "./components/FeaturedProjects";

const App = () => {
  return (
    <div>
      <Hero />
      <About />
      {/* <Tech /> */}
      <FeaturedProjects />
    </div>
  );
};

export default App;
