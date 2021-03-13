import {useState} from "react";
import "./App.css";
import Board from "./components/Board";
import Start from "./components/Start";
import {generateDeck} from "./Util/deck";

const STARTSCREEN = 0;
const BOARDSCREEN = 1;

function App() {
	const [deck, setDeck] = useState();
	const [screen, setScreen] = useState(STARTSCREEN);
  const startGame = () => {
    setScreen(BOARDSCREEN);
    setDeck(generateDeck());
  }
	return screen === STARTSCREEN ? (
		<Start startGame={startGame}></Start>
	) : (
		<Board cards={deck}></Board>
	);
}

export default App;
