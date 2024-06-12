import React from "react";
import bgVideo from "../assets/bgVideo.mp4";

const Hero = () => {
  return (
    <div className="h-screen-minus-80">
      <main className="flex w-full flex-col items-center justify-center h-full">
        <video src={bgVideo} autoPlay loop muted></video>
      </main>
      <div className="absolute top-0 left-0 pt-[80px] flex flex-col items-center justify-center w-full h-full">
        <h1 className="md:text-7xl text-6xl font-light">Hello, I'm</h1>
        <h1 className="md:text-7xl text-6xl font-black py-4">Shashank</h1>
        <h3 className="uppercase md:text-lg">and this is my portfolio</h3>
      </div>
    </div>
  );
};

export default Hero;
