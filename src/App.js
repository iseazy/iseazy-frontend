import React, {useState} from "react";
import "./App.css";
import Board from "./components/Board";
import Completed from "./components/Completed";
import Start from "./components/Start";
import {generateDeck} from "./Util/deck";

const STARTSCREEN = 0;
const BOARDSCREEN = 1;

function App() {
	const [deck, setDeck] = useState();
	const [screen, setScreen] = useState(STARTSCREEN);
	const [completedGame, setCompletedGame] = useState(false);
	const [flippedCards, setFlippedCards] = useState({});

	const startGame = () => {
		setScreen(BOARDSCREEN);
		setDeck(generateDeck());
	};

	const resetGame = () => {
		setFlippedCards({});
		// We make sure the cards are flipped before generating a new game
		setTimeout(() => {
			setDeck(generateDeck());
			setCompletedGame(false);
		}, 1000);
	};

	return (
		<div className="game">
			{screen === STARTSCREEN ? (
				<Start startGame={startGame}></Start>
			) : (
				<Board
					cards={deck}
					completeGame={() => setCompletedGame(true)}
					flippedCards={flippedCards}
					setFlippedCards={setFlippedCards}
				></Board>
			)}
			{completedGame && <Completed resetGame={resetGame}></Completed>}
		</div>
	);
}

export default App;
