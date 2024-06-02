import { games } from "../Data/data";

const GameSidebar = ({ category, setCategory }) => {
  const categories = [...new Set(games.map((game) => game.category))];
  return (
    <div className="w-[22rem] h-screen lg:block hidden pt-32 fixed top-0 left-0 p-10">
      <div className="w-full h-full overflow-hidden border-2 rounded-xl p-5">
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
