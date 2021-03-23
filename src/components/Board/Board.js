import React, {useState} from "react";
import './Board.css';
import Card from "../Card/Card";

export default function Board(props) {
	const {cards, completeGame, flippedCards, setFlippedCards} = props;
	const [activeCard, setActiveCard] = useState();

	const onFlip = (id, copyId) => {
		setFlippedCards((prevState) => ({...prevState, [id]: true}));
		setActiveCard(activeCard ? null : {id, copyId});
		if (activeCard && activeCard.copyId !== copyId) {
			// We have to wait while the card is flipping before flipping it again
			setTimeout(() => {
				setFlippedCards((prevState) => {
					const newFlippedCards = {...prevState};
					delete newFlippedCards[activeCard.id];
					delete newFlippedCards[id];
					return newFlippedCards;
				});
			}, 1000);
		} else if (isGameOver()) {
			completeGame();
		}
	};

	const isGameOver = () => {
		return Object.keys(flippedCards).length + 1 === cards.length;
	}

	return (
		<div className="board">
			{cards.map(({image, id, copyId}, index) => (
				<Card
					key={id}
					index={index + 1}
					image={image}
					isFlipped={flippedCards[id]}
					flip={() => onFlip(id, copyId)}
				></Card>
			))}
		</div>
	);
}
