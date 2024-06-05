import React from "react";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div>
      <Navbar />
      <main className="flex flex-col items-center justify-center h-screen">
        <h1 className="md:text-7xl text-6xl font-light">Hello, I'm</h1>
        <h1 className="md:text-7xl text-6xl font-black py-4">Shashank</h1>
        <h3 className="uppercase md:text-lg">and this is my portfolio</h3>
      </main>
    </div>
  );
};

export default Hero;
