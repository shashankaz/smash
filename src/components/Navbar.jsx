import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  return (
    <div>
      <nav className="h-[80px]">
        <ul className="md:flex hidden items-center justify-center h-full uppercase gap-8 tracking-widest font-normal">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/tech">Tech</a>
          </li>
          <li>
            <a href="/projects">Projects</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
        <div className="md:hidden flex items-center h-full justify-end text-3xl">
          <RxHamburgerMenu />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
