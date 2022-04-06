import { useState } from "react";
import "./css/App.css";
import Menu from "./Menu";
import GameMemory from "./containers/GameMemory";

function App() {
  const [initGame, setInitGame] = useState(false);

  const handleInitGame = () => {
    setInitGame(true);
  };

  const handleEndGame = () => {
    setInitGame(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        {initGame ? (
          <GameMemory handleEndGame={handleEndGame} />
        ) : (
          <Menu handleInitGame={handleInitGame} />
        )}
      </header>
    </div>
  );
}

export default App;
