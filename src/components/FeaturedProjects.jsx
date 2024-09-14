import React from "react";
import featuredProjects from "../data/featuredProjects.json";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";

const FeaturedProjects = () => {
  return (
    <div className="flex justify-center items-center min-h-screen sticky top-0 z-10 bg-[#F0EAD6]">
      <div className="px-4 sm:px-8 md:px-16 max-w-7xl w-full mx-auto flex flex-col gap-16">
        <div className="flex flex-col justify-center items-center">
          <p className="md:text-lg">Browse My Recent</p>
          <h1 className="md:text-5xl text-4xl">Projects</h1>
        </div>
        <div className="w-full border-b-2 border-black overflow-hidden">
          {featuredProjects.map((project) => (
            <Link to={project.live_link} key={project.id} target="blank">
              <div className="border-t-2 border-black md:text-2xl text-xl">
                <div className="-translate-x-5 hover:translate-x-0 transition duration-200 flex justify-between w-full py-4 px-1">
                  <h1 className="flex items-center">
                    <MdKeyboardArrowRight />
                    {project.project_name}
                  </h1>
                  <p>{project.year}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex w-full items-start">
          <Link to="/projects">
            <button className="px-6 py-4 w-28 text-center rounded-full text-black bg-[#FAF9F6]">
              View All
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjects;
