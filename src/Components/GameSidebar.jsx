import { IoClose } from "react-icons/io5";
import { games } from "../Data/data";

const GameSidebar = ({ category, setCategory, isOpen, setIsOpen }) => {
  const categories = [...new Set(games.map((game) => game.category))];
  return (
    <div
      className={`w-[22rem] h-screen lg:pt-32 pt-24 fixed top-0 lg:left-0 z-50 ${
        isOpen ? "left-0" : "-left-full"
      } transition-all duration-500 lg:p-10`}
    >
      <div className="w-full h-full relative overflow-hidden lg:border-2 lg:bg-transparent bg-blue-900 lg:rounded-xl p-5">
        <button
          onClick={() => setIsOpen(false)}
          className="lg:hidden block absolute top-5 right-5 text-3xl"
        >
          <IoClose />
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
