import * as React from "react";
import classes from "./card-array.component.module.scss"
import { CardVm } from "./card/card.vm";
import { Card } from "./card/card.component";


interface Props {
	cards: CardVm[];
	onClickCard: (card: CardVm) => void;
}


export const CardArray: React.FC<Props> = React.memo((props) => {
	const {
		cards,
		onClickCard
	} = props;

	return (
		<div className={classes["card-array"]}>
			{cards.map((card) => {
				return (
					<div className={classes["card-spacing"]} key={card.id}>
						<Card
							onClick={onClickCard}
							card={card}/>
					</div>
				)
			})}
		</div>
	);
})
