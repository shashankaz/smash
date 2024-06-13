import React from "react";
import featuredProjects from "../data/featuredProjects.json";
import { Link } from "react-router-dom";

const FeaturedProjects = () => {
  return (
    <div
      id="projects"
      className="md:py-[100px] py-[60px] flex flex-col justify-center items-center"
    >
      <div className="flex flex-col justify-center items-center md:pb-[100px] pb-[60px]">
        <p className="md:text-lg">Browse My Recent</p>
        <h1 className="md:text-5xl text-4xl">Projects</h1>
      </div>
      <div className="w-full border-b-2 border-[#FAF0E6]">
        {featuredProjects.map((project) => (
          <Link to={project.live_link} key={project.id} target="_blank">
            <div className="flex w-full border-t-2 border-[#FAF0E6] py-4 px-1 md:text-2xl text-xl justify-between hover:bg-[#FAF0E6] hover:text-[#45474B] transition-all hover:cursor-pointer">
              <div>{project.project_name}</div>
              <div>{project.year}</div>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex w-full items-start mt-6">
        <Link to="/projects">
          <button className="bg-[#B9B4C7] hover:bg-[#5C5470] hover:text-[#FAF0E6] text-[#5C5470] transition-all py-3 px-6 rounded-3xl">
            View All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedProjects;
