import { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";
import GameSidebar from "../Components/GameSidebar";
import Header from "../Components/Header";
import { games } from "../Data/data";

const Activities = () => {
  const [category, setCategory] = useState("");
  const [filteredGames, setFilteredGames] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  useEffect(() => {
    // Filter the games based on category and search term
    const filtered = games.filter(game => {
      const matchesCategory = category === '' || game.category === category;
      const matchesSearchTerm = searchTerm === '' || game.name.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearchTerm;
    });
    setFilteredGames(filtered);
  }, [category, searchTerm]);

  return (
    <div className="w-full">
      <Header />
      <div className="w-full h-screen flex">
        <div className="lg:w-[22rem]">
          <GameSidebar
            category={category}
            setCategory={setCategory}
          />
        </div>
        <div className="lg:w-[calc(100%-22rem)] w-full h-screen pt-32 lg:pr-10">
          <div className="w-full sm:px-0 flex lg:justify-start justify-end relative px-8">
            <div className="lg:w-full w-11/12 relative md:px-0 lg:pr-0 !pr-10">
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
            <div className="flex w-full h-full overflow-y-scroll flex-wrap lg:pl-0 sm:pl-10 pl-0 md:justify-start justify-center items-start gap-4">
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
