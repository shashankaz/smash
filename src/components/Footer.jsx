import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiCodechef, SiCodeforces, SiLeetcode } from "react-icons/si";

const Footer = () => {
  const year = new Date().getFullYear();
  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/shashankaz/",
      icon: <FaLinkedinIn />,
      label: "LinkedIn",
    },
    {
      href: "https://github.com/shashankaz",
      icon: <FaGithub />,
      label: "GitHub",
    },
    {
      href: "https://twitter.com/shashankaz",
      icon: <FaXTwitter />,
      label: "Twitter",
    },
    {
      href: "https://www.codechef.com/users/o_r_e_o",
      icon: <SiCodechef />,
      label: "CodeChef",
    },
    {
      href: "https://codeforces.com/profile/shashankaz",
      icon: <SiCodeforces />,
      label: "Codeforces",
    },
    {
      href: "https://leetcode.com/shashankaz/",
      icon: <SiLeetcode />,
      label: "LeetCode",
    },
  ];

  return (
    <footer className="flex flex-col items-center justify-center md:h-[400px] h-[300px]">
      <div id="social">
        <div className="flex flex-wrap items-center justify-center md:gap-4 gap-3 py-[50px]">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="md:text-2xl text-xl md:h-[60px] md:w-[60px] h-[50px] w-[50px] rounded-full bg-[#B9B4C7] hover:bg-[#5C5470] hover:text-[#FAF0E6] text-[#5C5470] transition-all flex items-center justify-center"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
      <div id="copy" className="md:text-lg font-light text-center">
        Copyright &copy; {year} Shashank. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
