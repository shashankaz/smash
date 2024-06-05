import React from "react";
import { BsCalendarDate } from "react-icons/bs";
import education from "../data/education";

const Education = () => {
  return (
    <div className="md:py-[100px] py-[60px] flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center md:pb-[100px] pb-[60px]">
        <p className="md:text-lg">See My</p>
        <h1 className="md:text-5xl text-4xl">Education</h1>
      </div>
      <div>
        {education.map((edu) => (
          <div className="bg-[#B9B4C7] text-[#352F44] md:p-8 p-6 rounded-lg mb-4">
            <div className="flex items-center gap-1">
              <div className="md:text-xs text-[10px]">
                <BsCalendarDate />
              </div>
              <h4 className="md:text-sm text-xs font-semibold">
                {edu.duration}
              </h4>
            </div>
            <h1 className="md:text-2xl text-xl font-medium">{edu.degree}</h1>
            <h3 className="md:text-lg font-light">{edu.institute}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
