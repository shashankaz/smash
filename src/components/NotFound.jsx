import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col gap-4 items-center justify-center px-4 sm:px-8 md:px-16 max-w-7xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-semibold text-center">
        404 - Page Not Found
      </h1>
      <p className="text-lg md:text-xl text-center">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="px-6 py-4 text-center rounded-full text-white bg-black mt-4 text-sm md:text-base"
      >
        Go back to Homepage
      </Link>
    </div>
  );
};

export default NotFound;
