import { BsCalendarDate } from "react-icons/bs";
import education from "../data/education";

const Education = () => {
  return (
    <div className="flex justify-center items-center min-h-screen sticky top-0 z-10 bg-gray-200">
      <div className="px-4 sm:px-8 md:px-16 max-w-7xl mx-auto flex flex-col gap-16">
        <div className="flex flex-col justify-center items-center">
          <p className="md:text-lg">See My</p>
          <h1 className="md:text-5xl text-4xl">Education</h1>
        </div>
        <div>
          {education.map((edu) => (
            <div key={edu.id} className="bg-white md:p-8 p-6 rounded-lg mb-4">
              <div className="flex items-center gap-1">
                <div className="md:text-xs text-[10px]">
                  <BsCalendarDate />
                </div>
                <h4 className="md:text-sm text-xs font-semibold">
                  {edu.duration}
                </h4>
              </div>
              <h1 className="md:text-xl text-lg font-medium">{edu.degree}</h1>
              <h3 className="md:text-base text-sm font-light">
                {edu.institute}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
