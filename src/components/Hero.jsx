import React from "react";

const Hero = () => {
  return (
    <div className="h-screen-minus-80">
      <main className="bg-gradient-to-b from-[#5C5470] via-[#352F44] to-[#5C5470] rounded-2xl flex w-full flex-col items-center justify-center h-full">
        <h1 className="md:text-7xl text-6xl font-light">Hello, I'm</h1>
        <h1 className="md:text-7xl text-6xl font-black py-4">Shashank</h1>
        <h3 className="uppercase md:text-lg">and this is my portfolio</h3>
      </main>
    </div>
  );
};

export default Hero;
