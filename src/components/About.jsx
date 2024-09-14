const About = () => {
  return (
    <div className="flex justify-center items-center min-h-screen sticky top-0 z-10 bg-[#FAF9F6]">
      <div className="py-20 md:py-10 px-4 sm:px-8 md:px-16 max-w-7xl mx-auto flex flex-col gap-16">
        <div className="flex flex-col justify-center items-center">
          <p className="md:text-lg">Get To Know More</p>
          <h1 className="md:text-5xl text-4xl">About Me</h1>
        </div>
        <p className="max-w-4xl text-center">
          My name is Shashank, and I'm a dedicated programmer who thrives on
          learning and exploring new technologies. I have a quick learning curve
          and a self-driven attitude towards mastering various aspects of web
          application development. My core expertise lies in JavaScript, and I'm
          passionate about using it to create innovative solutions. I enjoy
          problem-solving and am open to exciting opportunities that align with
          my skills and interests in the tech world.
        </p>
      </div>
    </div>
  );
};

export default About;
