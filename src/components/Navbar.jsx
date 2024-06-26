import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="relative h-[80px] flex justify-end items-center bg-[#352F43] text-white">
      <div
        className={`fixed top-0 left-0 w-full h-full bg-[#352F44] bg-opacity-90 z-10 transform ${
          showNavbar ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 md:relative md:transform-none md:translate-x-0`}
      >
        <ul className="flex flex-col md:flex-row items-center justify-center md:justify-end md:h-full uppercase gap-8 tracking-widest font-normal h-full">
          {["Home", "About", "Tech", "Projects", "Contact"].map((section) => (
            <li key={section} onClick={handleShowNavbar}>
              <a
                href={section === "Home" ? "/" : `#${section.toLowerCase()}`}
                className="text-2xl md:text-base hover:text-[#5C5470]"
              >
                {section}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="md:hidden flex items-center h-full justify-end text-3xl cursor-pointer z-20">
        {showNavbar ? (
          <RxCross1 onClick={handleShowNavbar} aria-label="Close menu" />
        ) : (
          <RxHamburgerMenu onClick={handleShowNavbar} aria-label="Open menu" />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
