import React from "react";
import { Link } from "react-router-dom";
import coverVideo from "../assets/coverVideo.mp4";

const About = () => {
  return (
    <div
      id="about"
      className="md:py-[100px] py-[60px] flex flex-col justify-center items-center"
    >
      <div className="flex flex-col justify-center items-center md:pb-[100px] pb-[60px]">
        <p className="md:text-lg">Get To Know More</p>
        <h1 className="md:text-5xl text-4xl">About Me</h1>
      </div>
      <div className="flex flex-wrap justify-center w-full">
        <div className="w-[500px] h-[300px] bg-[#B9B4C7] md:mx-[40px] my-4">
          <video className="w-full h-full object-cover" src={coverVideo} autoPlay muted loop></video>
        </div>
        <div className="w-[500px] min-h-[300px] flex flex-col justify-center md:mx-[40px] my-4">
          <div>
            My name is Shashank, and I'm a dedicated programmer who thrives on
            learning and exploring new technologies. I have a quick learning
            curve and a self-driven attitude towards mastering various aspects
            of web application development. My core expertise lies in
            JavaScript, and I'm passionate about using it to create innovative
            solutions. I enjoy problem-solving and am open to exciting
            opportunities that align with my skills and interests in the tech
            world.
          </div>
          <div className="flex gap-4 mt-6">
            <Link to="https://www.google.com/" target="_blank">
              <button className="bg-[#B9B4C7] hover:bg-[#5C5470] hover:text-[#FAF0E6] text-[#5C5470] transition-all py-3 px-6 rounded-3xl">
                Get Resume
              </button>
            </Link>
            <Link to="#contact">
              <button className="bg-[#B9B4C7] hover:bg-[#5C5470] hover:text-[#FAF0E6] text-[#5C5470] transition-all py-3 px-6 rounded-3xl">
                Contact Info
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
