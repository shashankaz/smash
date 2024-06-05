import React from "react";
import projects from "../data/projects";

const Projects = () => {
  return (
    <div className="md:py-[100px] py-[60px] flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center md:pb-[100px] pb-[60px]">
        <p className="md:text-lg">Browse My Recent</p>
        <h1 className="md:text-5xl text-4xl">Projects</h1>
      </div>
      <div className="w-full border-b-2 border-[#FAF0E6]">
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex w-full border-t-2 border-[#FAF0E6] py-4 px-1 md:text-2xl text-xl justify-between hover:bg-[#FAF0E6] hover:text-[#45474B] transition-all hover:cursor-pointer"
          >
            <div>{project.project_name}</div>
            <div>{project.year}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
