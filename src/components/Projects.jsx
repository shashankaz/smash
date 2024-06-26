import React, { useEffect } from "react";
import projects from "../data/projects.json";
import { Link } from "react-router-dom";

const Projects = () => {
  useEffect(() => {
    document.title = "All Projects | Portfolio";
  }, []);

  return (
    <section className="md:py-[100px] py-[60px] flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center md:pb-[100px] pb-[60px]">
        <h1 className="md:text-5xl text-4xl">All Projects</h1>
      </div>
      <div className="w-full border-b-2 border-[#FAF0E6]">
        {projects.map((project) => (
          <Link
            to={project.live_link}
            key={project.id}
            target="_blank"
            aria-label={`View ${project.project_name} project`}
          >
            <article className="flex gap-4 w-full border-t-2 border-[#FAF0E6] py-4 px-1 justify-between hover:bg-[#FAF0E6] hover:text-[#45474B] transition-all hover:cursor-pointer">
              <div>
                <h2 className="md:text-2xl text-xl">{project.project_name}</h2>
                <p className="italic">{project.tech_stack}</p>
              </div>
              <time className="md:text-2xl text-xl">{project.year}</time>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Projects;
