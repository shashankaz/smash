import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiCodechef, SiCodeforces, SiLeetcode } from "react-icons/si";
import { FloatingDock } from "../ui/floating-dock";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();
  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/shashankaz/",
      icon: <FaLinkedinIn size={21} />,
      title: "LinkedIn",
    },
    {
      href: "https://github.com/shashankaz",
      icon: <FaGithub size={21} />,
      title: "GitHub",
    },
    {
      href: "https://x.com/shashankaz",
      icon: <FaXTwitter size={21} />,
      title: "Twitter",
    },
    {
      href: "https://www.codechef.com/users/shashankaz",
      icon: <SiCodechef size={21} />,
      title: "CodeChef",
    },
    {
      href: "https://codeforces.com/profile/shashankaz",
      icon: <SiCodeforces size={21} />,
      title: "Codeforces",
    },
    {
      href: "https://leetcode.com/shashankaz/",
      icon: <SiLeetcode size={21} />,
      title: "LeetCode",
    },
  ];

  return (
    <footer className="flex flex-col items-center justify-center md:h-72 h-56 sticky top-0 z-10 bg-[#F0EAD6]">
      <div className="flex flex-wrap items-center justify-center md:gap-4 gap-3 py-12">
        <div className="px-4 sm:px-8 md:px-16 max-w-7xl mx-auto flex flex-wrap items-center justify-center md:hidden gap-4">
          {socialLinks.map((link, index) => (
            <Link
              key={index}
              to={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="text-xl h-12 w-12 rounded-full bg-[#FAF9F6] shadow-xl transition-all flex items-center justify-center">
                {link.icon}
              </div>
            </Link>
          ))}
        </div>
        <div className="hidden md:flex">
          <FloatingDock items={socialLinks} />
        </div>
      </div>
      <div className="font-light text-center text-sm md:text-base">
        &copy; {year} Shashank. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
