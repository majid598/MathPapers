import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { links } from "../Data/data";

const PracticePapersSidebar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-red-500 lg:w-[22rem]">
      <div
        className={`h-[calc(100vh-6rem)] lg:w-[20rem] w-[16rem] top-24 lg:left-0 ${
          isOpen ? "left-0" : "-left-[16rem]"
        } transition-all duration-500 lg:bg-transparent bg-gray-900 fixed flex flex-col border-r-2 rounded-tr-xl rounded-br-xl p-5`}
      >
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="lg:hidden absolute -right-[3.4rem] border-t border-r border-b bg-gray-900 rounded-tr-full rounded-br-full h-12 py-1 flex flex-col justify-center px-3 pr-4 z-[999] top-4"
        >
          <span
            className={`w-6 h-1 bg-white rounded-lg transition-all duration-500 ${
              isOpen ? "rotate-45" : "my-0.5"
            }`}
          ></span>
          <span
            className={`w-6 h-1 bg-white my-0.5 rounded-lg transition-all duration-500 ${
              isOpen ? "hidden" : "flex"
            }`}
          ></span>
          <span
            className={`w-6 h-1 bg-white rounded-lg transition-all duration-500 ${
              isOpen ? "-rotate-45" : "my-0.5"
            }`}
          ></span>
        </button>

        <Link
          to="/practice/papers"
          className={`w-full p-2 rounded-md text-start font-semibold ${
            location.pathname === "/practice/papers"
              ? "bg-white text-blue-900"
              : "hover:bg-white/30"
          }`}
        >
          All
        </Link>
        {links.map((i) => (
          <Link
            key={i}
            to={i.address}
            className={`w-full p-2 mt-0.5 rounded-md text-start font-semibold ${
              location.pathname === i.address
                ? "bg-white text-blue-900"
                : "hover:bg-white/30"
            }`}
          >
            {i.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PracticePapersSidebar;
