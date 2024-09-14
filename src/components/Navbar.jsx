import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="text-sm fixed w-full px-4 sm:px-8 md:px-16">
      <div className="max-w-7xl mx-auto h-20 md:h-28 flex items-center justify-end">
        <div className="flex flex-row gap-2">
          <Link to="/projects" className="hover:underline">
            Projects
          </Link>
          /
          <Link
            to="https://www.linkedin.com/in/shashankaz/"
            target="blank"
            className="hover:underline"
          >
            Linkedin
          </Link>
          /
          <Link
            to="https://github.com/shashankaz"
            target="blank"
            className="hover:underline"
          >
            Github
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
