import { useParams } from "react-router-dom";
import Header from "../Components/Header";
import { games } from "../Data/data";

const Game = () => {
  const { name } = useParams();
  const game = games.find((item) => item.name.replace(/\s+/g, "-") === name);

  if (!game) {
    return <h2>Game not found</h2>;
  }

  return (
    <div className="w-full pt-32">
      <Header />
      <div className="w-full h-screen">
        <iframe
          id="game-iframe"
          src={game.url}
          className="w-full h-full"
          allowFullScreen
          frameborder="0"
          title={game.name}
        ></iframe>
      </div>
    </div>
  );
};

export default Game;
