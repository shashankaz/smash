const About = () => {
  return (
    <div className="flex justify-center items-center min-h-screen sticky top-0 z-10 bg-[#FAF9F6]">
      <div className="py-20 md:py-10 px-4 sm:px-8 md:px-16 max-w-7xl mx-auto flex flex-col gap-16">
        <div className="flex flex-col justify-center items-center">
          <p className="md:text-lg">Get To Know More</p>
          <h1 className="md:text-5xl text-4xl">About Me</h1>
        </div>
        <p className="max-w-4xl text-center">
          I'm Shashank, a passionate web developer who loves diving into new
          technologies and pushing the boundaries of web application
          development. With a strong foundation in JavaScript and frameworks
          like React, Next.js, and Node.js, I enjoy crafting innovative
          solutions that solve real-world problems. I have a quick learning
          curve, thrive on challenges, and am driven by a desire to create
          seamless user experiences. Whether it's front-end design or back-end
          architecture, I'm always excited to take on projects that help me grow
          and expand my expertise.
        </p>
      </div>
    </div>
  );
};

export default About;
