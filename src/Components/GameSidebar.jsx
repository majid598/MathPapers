import { useState } from "react";
import { games } from "../Data/data";

const GameSidebar = ({ category, setCategory }) => {
  const categories = [...new Set(games.map((game) => game.category))];
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={`lg:w-[22rem] w-[16rem] h-screen lg:pt-32 pt-24 fixed top-0 lg:left-0 z-50 ${
        isOpen ? "left-0" : "-left-[16rem]"
      } transition-all duration-500 lg:p-10`}
    >
      <div className="w-full h-full relative lg:border-2 border-r-2 lg:rounded-tr-none lg:rounded-br-none rounded-tr-xl rounded-br-xl lg:bg-transparent bg-gray-900 lg:rounded-xl p-5">
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="lg:hidden absolute -right-[3.45rem] border-t border-r border-b bg-gray-900 rounded-tr-full rounded-br-full h-12 py-1 flex flex-col justify-center px-3 pr-4 z-[999] top-4"
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
        <h2 className="text-2xl font-semibold">Game Categories</h2>
        <div className="flex flex-col mt-5 overflow-y-scroll pr-4 pb-20 h-full">
          <button
            onClick={() => setCategory("All")}
            className={`w-full py-1 px-2 rounded-md text-start font-semibold ${
              category === "All" && "bg-white text-black"
            }`}
          >
            All
          </button>
          {categories.map((i) => (
            <button
              key={i}
              onClick={() => setCategory(i)}
              className={`w-full py-1 px-2 rounded-md text-start font-semibold ${
                category === i && "bg-white text-black"
              }`}
            >
              {i}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameSidebar;
