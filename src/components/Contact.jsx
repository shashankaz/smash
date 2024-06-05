import React from "react";

const Contact = () => {
  const phone = Math.floor(Math.random() * 10000000000);

  return (
    <div className="md:py-[100px] py-[60px] flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center md:pb-[100px] pb-[60px]">
        <p className="md:text-lg">Get In Touch</p>
        <h1 className="md:text-5xl text-4xl">Contact Me</h1>
      </div>
      <div className="flex flex-wrap justify-between w-full">
        <div className="flex flex-col w-[600px] mb-[30px]">
          <h1 className="md:text-3xl text-2xl font-light md:pb-8 pb-6">
            Get In Touch
          </h1>
          <form action="" className="flex flex-col gap-3">
            <input
              className="md:p-3 p-2 rounded-md outline-none text-black"
              type="text"
              placeholder="Your Name"
            />
            <input
              className="md:p-3 p-2 rounded-md outline-none text-black"
              type="email"
              placeholder="Your Email"
            />
            <textarea
              className="md:p-3 p-2 rounded-md outline-none text-black resize-none"
              id=""
              cols="30"
              rows="10"
              placeholder="Write a Message"
            ></textarea>
            <button className="uppercase tracking-wider md:mt-6 mt-4 md:p-3 p-2 w-[180px] rounded-3xl font-light bg-[#B9B4C7] hover:bg-[#5C5470] text-[#352F44] hover:text-[#FAF0E6] transition-all">
              Send Message
            </button>
          </form>
        </div>
        <div className="flex flex-col w-[500px]">
          <h1 className="md:text-3xl text-2xl font-light md:pb-8 pb-6">
            My Contact Details
          </h1>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h3 className="uppercase">Email</h3>
              <h3>site@admin.com</h3>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="uppercase">Phone</h3>
              <h3>+91 {phone}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
