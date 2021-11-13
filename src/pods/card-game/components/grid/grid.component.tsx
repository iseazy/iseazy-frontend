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
			<div>
				<div id={'cards-items'} className={classes["grid-container"]}>
					{
						cards.map((card) => <Card
							key={card.id}
							onClick={onClickCard}
							card={card}/>)
					}
				</div>
			</div>
		</section>
	);
};
