import projects from "../data/projects.json";
import { Link } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";
import bg from "../assets/bg-pattern-2.svg";

const Projects = () => {
  return (
    <div>
      <div className="fixed inset-0 -z-10 min-h-screen">
        <img src={bg} alt="background" className="h-full w-full object-cover" />
      </div>
      <div className="backdrop-blur-xl min-h-screen">
        <div className="py-10 md:py-20 px-4 sm:px-8 md:px-16 max-w-7xl mx-auto flex flex-col justify-center items-center">
          <Link to={"/"} className="w-full">
            <div className="flex items-center justify-start mb-8 gap-1 font-semibold">
              <FaAngleLeft />
              Home
            </div>
          </Link>
          <div className="flex flex-col justify-center items-center md:pb-24 pb-14">
            <h1 className="md:text-5xl text-4xl">All Projects</h1>
          </div>
          <div className="w-full border-b-2 border-black">
            {projects.map((project) => (
              <Link to={project.live_link} key={project.id} target="_blank">
                <article className="flex gap-4 w-full border-t-2 border-black py-4 px-1 justify-between">
                  <div>
                    <h2 className="md:text-2xl text-xl">
                      {project.project_name}
                    </h2>
                  </div>
                  <time className="md:text-2xl text-xl">{project.year}</time>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
