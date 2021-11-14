import React from 'react';
import { CardVm } from "../card/card.vm";
import classes from "./grid.component.module.scss"
import { Card } from "../card/card.component";

interface Props {
	cards: CardVm[];
	onClickCard: (card: CardVm) => void;
}

export const Grid: React.FC<Props> = (props) => {
	const {
		cards,
		onClickCard
	} = props;

	return (
		<section className={classes["section"]}>
			<div className={classes["grid-container"]}>
				{
					cards.map((card, index) => <Card
						key={card.id}
						onClick={onClickCard}
						position={index+1}
						card={card}/>)
				}
			</div>
		</section>
	);
};
