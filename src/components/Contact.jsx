import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const displayPhone = "+91 9876543210";
  const displayEmail = "admin@domain.com";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm("service_3yszh3p", "template_z0okukb", form.current, {
        publicKey: "eQ4PlTR9ewmPn4GAK",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div
      id="contact"
      className="md:py-[100px] py-[60px] flex flex-col justify-center items-center"
    >
      <div className="flex flex-col justify-center items-center md:pb-[100px] pb-[60px]">
        <p className="md:text-lg">Get In Touch</p>
        <h1 className="md:text-5xl text-4xl">Contact Me</h1>
      </div>
      <div className="flex flex-wrap justify-between w-full">
        <div className="flex flex-col max-w-[600px] w-full mb-[30px]">
          <h1 className="md:text-3xl text-2xl font-light md:pb-8 pb-6">
            Get In Touch
          </h1>
          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-3">
            <input
              className="md:p-3 p-2 rounded-md outline-none text-black"
              type="text"
              placeholder="Your Name"
              name="from_name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              className="md:p-3 p-2 rounded-md outline-none text-black"
              type="email"
              placeholder="Your Email"
              name="from_email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <textarea
              className="md:p-3 p-2 rounded-md outline-none text-black resize-none"
              id=""
              cols="30"
              rows="10"
              placeholder="Write a Message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
            <button
              type="submit"
              value="Send"
              className="uppercase tracking-wider md:mt-6 mt-4 md:p-3 p-2 w-[180px] rounded-3xl font-light bg-[#B9B4C7] hover:bg-[#5C5470] text-[#352F44] hover:text-[#FAF0E6] transition-all"
            >
              Send Message
            </button>
          </form>
        </div>
        <div className="flex flex-col max-w-[500px] w-full">
          <h1 className="md:text-3xl text-2xl font-light md:pb-8 pb-6">
            My Contact Details
          </h1>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h3 className="uppercase">Email</h3>
              <h3>{displayEmail}</h3>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="uppercase">Phone</h3>
              <h3>{displayPhone}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
