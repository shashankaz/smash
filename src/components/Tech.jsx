import React from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaSass } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import {
  SiTailwindcss,
  SiTypescript,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiGit,
  SiRedux,
  SiReactrouter,
  SiMui,
} from "react-icons/si";
import { TbBrandNextjs, TbBrandFramerMotion } from "react-icons/tb";

const techStacks = [
  { icon: <FaHtml5 />, name: "HTML" },
  { icon: <FaCss3Alt />, name: "CSS" },
  { icon: <IoLogoJavascript />, name: "JavaScript" },
  { icon: <SiTypescript />, name: "TypeScript" },
  { icon: <SiTailwindcss />, name: "TailwindCSS" },
  { icon: <FaSass />, name: "Sass" },
  { icon: <FaReact />, name: "ReactJS" },
  { icon: <SiReactrouter />, name: "ReactRouter" },
  { icon: <SiRedux />, name: "Redux" },
  { icon: <TbBrandNextjs />, name: "NextJS" },
  { icon: <FaNodeJs />, name: "NodeJS" },
  { icon: <SiExpress />, name: "ExpressJS" },
  { icon: <SiMongodb />, name: "MongoDB" },
  { icon: <SiMysql />, name: "MySQL" },
  { icon: <SiGit />, name: "Git" },
  { icon: <TbBrandFramerMotion />, name: "FramerMotion" },
  { icon: <SiMui />, name: "MUI" },
];

const Tech = () => {
  return (
    <div
      id="tech"
      className="md:py-[100px] py-[60px] flex flex-col justify-center items-center"
    >
      <div className="flex flex-col justify-center items-center md:pb-[100px] pb-[60px]">
        <p className="md:text-lg">Explore My</p>
        <h1 className="md:text-5xl text-4xl">Tech Stacks</h1>
      </div>
      <div className="flex md:gap-[23px] gap-[15px] flex-wrap items-center justify-center mx-5">
        {techStacks.map((tech, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center hover:scale-110 cursor-pointer transition-all border-2 p-4 rounded-[20px] md:w-[150px] w-[130px]"
            aria-label={tech.name}
            title={tech.name}
          >
            <div className="md:text-5xl text-4xl">{tech.icon}</div>
            <h1 className="md:text-xl text-lg font-bold">{tech.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tech;
