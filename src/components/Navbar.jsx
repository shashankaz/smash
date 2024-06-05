import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <div>
      <nav className="h-[80px] flex justify-end">
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul className="flex items-center justify-center h-full uppercase gap-8 tracking-widest font-normal">
            <li onClick={handleShowNavbar}>
              <a href="/">Home</a>
            </li>
            <li onClick={handleShowNavbar}>
              <a href="#about">About</a>
            </li>
            <li onClick={handleShowNavbar}>
              <a href="#tech">Tech</a>
            </li>
            <li onClick={handleShowNavbar}>
              <a href="#projects">Projects</a>
            </li>
            <li onClick={handleShowNavbar}>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className={`nav-bar ${showNavbar && "show"}`}>
          <div
            onClick={handleShowNavbar}
            className="flex items-center h-full justify-end text-3xl cursor-pointer"
          >
            <RxHamburgerMenu />
          </div>
        </div>
        <div className={`nav-bar ${!showNavbar && "hide"}`}>
          <div
            onClick={handleShowNavbar}
            className="flex items-center h-full justify-end text-3xl cursor-pointer"
          >
            <RxCross1 />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
