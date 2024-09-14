import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import bg from "../assets/bg-pattern-7.svg";
import { Link } from "react-router-dom";

const Hero = () => {
  const [copy, setCopy] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCopy(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [copy]);

  const handleCopy = () => {
    navigator.clipboard.writeText("shashankstories@gmail.com");
    setCopy(true);
  };

  return (
    <div className="h-screen w-full bg-gray-200 sticky top-0 z-10">
      <div className="relative w-full h-full">
        <img src={bg} alt="background" className="h-full w-full object-cover" />
      </div>
      <div className="absolute inset-0 backdrop-blur-xl">
        <Navbar />
        <main className="flex w-full flex-col items-center justify-center h-full px-4 sm:px-8 md:px-16 max-w-7xl mx-auto">
          <h1 className="md:text-7xl sm:text-6xl text-5xl font-light">
            Hello, I'm
          </h1>
          <h1 className="md:text-7xl sm:text-6xl text-5xl font-black py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Shashank
          </h1>
          <h3 className="uppercase md:text-lg text-base">
            and this is my portfolio
          </h3>
          <div className="flex items-center gap-4 md:text-sm text-xs mt-4">
            <button
              onClick={handleCopy}
              className="bg-white border outline border-white hover:border-black transition duration-200 md:px-6 px-4 md:py-4 py-3 md:w-28 w-24 text-center rounded-full text-black"
            >
              {copy ? "Copied!" : "Email"}
            </button>
            <Link to={"https://www.google.com/"} target="blank">
              <button className="bg-white border outline border-white hover:border-black transition duration-200 md:px-6 px-4 md:py-4 py-3 md:w-28 w-24 text-center rounded-full text-black">
                Resume
              </button>
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Hero;
