import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";
import GameSidebar from "../Components/GameSidebar";
import Header from "../Components/Header";
import { games } from "../Data/data";

const Activities = () => {
  const [category, setCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  console.log(games);

  const filteredGames = games.filter((game) => {
    if (category === "All")
      return games && game.name.toLowerCase().includes(searchTerm);
    if (category) {
      return game.category === category;
    } else {
      return game.name.toLowerCase().includes(searchTerm);
    }
  });
  return (
    <div className="w-full">
      <Header />
      <div className="w-full h-screen flex">
        <div className="w-[22rem] lg:block hidden">
          <GameSidebar category={category} setCategory={setCategory} />
        </div>
        <div className="lg:w-[calc(100%-22rem)] w-full h-screen pt-32 lg:pr-10">
          <div className="w-full sm:px-0 px-8">
          <div className="w-full relative md:px-0">
            <BiSearch className="text-2xl absolute text-zinc-300 left-2 top-1/2 -translate-y-1/2" />
            <input
              type="search"
              className="w-full p-2 capitalize rounded-lg bg-transparent border outline-none pl-10"
              placeholder="Type here to search the game..."
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
          </div>
          <div className="w-full overflow-hidden py-10 h-[78vh]">
            <div className="flex w-full h-full overflow-y-scroll flex-wrap md:justify-start justify-center items-start gap-4">
              {filteredGames.map((game) => (
                <Link
                  to={`/game/${game.name.replace(/\s+/g, "-")}`}
                  className="w-32 h-32 overflow-hidden border rounded-lg"
                >
                  <img
                    src={game.thumb4 ? game.thumb4 : game.thumb3}
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activities;
