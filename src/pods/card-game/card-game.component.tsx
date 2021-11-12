import * as React from "react";
import { CardArray } from "./components/card-array.component";
import { CardVm } from "./components/card/card.vm";

export const CardGame: React.FC = React.memo(() => {

	const [cards, setCards] = React.useState<CardVm[]>([
		{
			id: '1',
			imageIsUp: false,
			position: 1,
			isMatched: false,
			image: 'img1'
		},
		{
			id: '2',
			imageIsUp: false,
			position: 2,
			isMatched: false,
			image: 'img1'
		},
		{
			id: '3',
			imageIsUp: false,
			position: 3,
			isMatched: false,
			image: 'img2'
		},
		{
			id: '4',
			imageIsUp: false,
			position: 4,
			isMatched: false,
			image: 'img2'
		},
		{
			id: '5',
			imageIsUp: false,
			position: 5,
			isMatched: false,
			image: 'img3'
		},
		{
			id: '6',
			imageIsUp: false,
			position: 6,
			isMatched: false,
			image: 'img3'
		},
		{
			id: '7',
			imageIsUp: false,
			position: 7,
			isMatched: false,
			image: 'img4'
		},
		{
			id: '8',
			imageIsUp: false,
			position: 8,
			isMatched: false,
			image: 'img4'
		},
		{
			id: '9',
			imageIsUp: false,
			position: 9,
			isMatched: false,
			image: 'img5'
		},
		{
			id: '10',
			imageIsUp: false,
			position: 10,
			isMatched: false,
			image: 'img5'
		},
		{
			id: '11',
			imageIsUp: false,
			position: 11,
			isMatched: false,
			image: 'img6'
		},
		{
			id: '12',
			imageIsUp: false,
			position: 12,
			isMatched: false,
			image: 'img6'
		},
		{
			id: '13',
			imageIsUp: false,
			position: 13,
			isMatched: false,
			image: 'img7'
		},
		{
			id: '14',
			imageIsUp: false,
			position: 14,
			isMatched: false,
			image: 'img7'
		},
		{
			id: '15',
			imageIsUp: false,
			position: 15,
			isMatched: false,
			image: 'img8'
		},
		{
			id: '16',
			imageIsUp: false,
			position: 16,
			isMatched: false,
			image: 'img8'
		},
		{
			id: '17',
			imageIsUp: false,
			position: 17,
			isMatched: false,
			image: 'img9'
		},
		{
			id: '18',
			imageIsUp: false,
			position: 18,
			isMatched: false,
			image: 'img9'
		}
	]);

	const handleClickCard = (clickedCard: CardVm) => {
		const newCards = cards.map(card => {
			if (card.id === clickedCard.id) {
				return {
					...card,
					imageIsUp: true
				}
			}
			return card;
		});
		setCards(newCards);
	}


	return (
		<CardArray cards={cards} onClickCard={handleClickCard}/>
	);
})
