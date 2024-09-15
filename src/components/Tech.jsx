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
    <div className="flex justify-center items-center min-h-screen sticky top-0 z-10 bg-gray-100">
      <div className="py-20 md:py-10 px-4 sm:px-8 md:px-16 max-w-7xl mx-auto flex flex-col gap-20">
        <div className="flex flex-col justify-center items-center">
          <p className="md:text-lg">Explore My</p>
          <h1 className="md:text-5xl text-4xl">Tech Stacks</h1>
        </div>
        <div className="flex gap-4 flex-wrap items-center justify-center">
          {techStacks.map((tech) => (
            <div
              key={tech.name}
              className="flex flex-col items-center justify-center gap-1 hover:scale-105 cursor-pointer transition duration-200 border-2 border-black p-4 rounded-3xl w-32 md:w-36 bg-white shadow-xl"
              title={tech.name}
            >
              <div className="md:text-4xl text-3xl">{tech.icon}</div>
              <h1 className="font-bold">{tech.name}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tech;
