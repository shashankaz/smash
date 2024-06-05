import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiCodechef } from "react-icons/si";
import { SiCodeforces } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="flex flex-col items-center justify-center md:h-[400px] h-[300px]">
      <div id="social">
        <div className="flex flex-wrap items-center justify-center md:gap-4 gap-3 py-[50px]">
          <a
            href="https://www.linkedin.com/in/shashankaz/"
            rel="noreferrer"
            target="_blank"
          >
            <button className="md:text-2xl text-xl md:h-[60px] md:w-[60px] h-[50px] w-[50px] rounded-full bg-[#B9B4C7] hover:bg-[#5C5470] hover:text-[#FAF0E6] text-[#5C5470] transition-all flex items-center justify-center">
              <FaLinkedinIn />
            </button>
          </a>
          <a
            href="https://github.com/shashankaz"
            rel="noreferrer"
            target="_blank"
          >
            <button className="md:text-2xl text-xl md:h-[60px] md:w-[60px] h-[50px] w-[50px] rounded-full bg-[#B9B4C7] hover:bg-[#5C5470] hover:text-[#FAF0E6] text-[#5C5470] transition-all flex items-center justify-center">
              <FaGithub />
            </button>
          </a>
          <a
            href="https://twitter.com/shashankaz"
            rel="noreferrer"
            target="_blank"
          >
            <button className="md:text-2xl text-xl md:h-[60px] md:w-[60px] h-[50px] w-[50px] rounded-full bg-[#B9B4C7] hover:bg-[#5C5470] hover:text-[#FAF0E6] text-[#5C5470] transition-all flex items-center justify-center">
              <FaXTwitter />
            </button>
          </a>
          <a
            href="https://www.codechef.com/users/o_r_e_o"
            rel="noreferrer"
            target="_blank"
          >
            <button className="md:text-2xl text-xl md:h-[60px] md:w-[60px] h-[50px] w-[50px] rounded-full bg-[#B9B4C7] hover:bg-[#5C5470] hover:text-[#FAF0E6] text-[#5C5470] transition-all flex items-center justify-center">
              <SiCodechef />
            </button>
          </a>
          <a
            href="https://codeforces.com/profile/shashankaz"
            rel="noreferrer"
            target="_blank"
          >
            <button className="md:text-2xl text-xl md:h-[60px] md:w-[60px] h-[50px] w-[50px] rounded-full bg-[#B9B4C7] hover:bg-[#5C5470] hover:text-[#FAF0E6] text-[#5C5470] transition-all flex items-center justify-center">
              <SiCodeforces />
            </button>
          </a>
          <a
            href="https://leetcode.com/shashankaz/"
            rel="noreferrer"
            target="_blank"
          >
            <button className="md:text-2xl text-xl md:h-[60px] md:w-[60px] h-[50px] w-[50px] rounded-full bg-[#B9B4C7] hover:bg-[#5C5470] hover:text-[#FAF0E6] text-[#5C5470] transition-all flex items-center justify-center">
              <SiLeetcode />
            </button>
          </a>
        </div>
      </div>
      <div id="copy" className="md:text-lg font-light text-center">
        Copyright &copy; {year} Shashank. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;