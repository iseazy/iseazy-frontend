import * as React from "react";
import classes from "./card.component.module.scss"
import { CardVm } from "./card.vm";

interface Props {
	card?: CardVm;
	onClick?: (card: CardVm) => void;
}


export const Card: React.FC<Props> = React.memo((props) => {
	const {
		card,
		onClick
	} = props;

	const handleClick = React.useCallback(() => {
		onClick(card)
	}, [card, onClick]);

	const cardClassName = card.imageIsUp ? `${classes["card"]} ${classes["animation"]}` : `${classes["card"]}`

	return (
		<div onClick={handleClick} className={cardClassName}>
			<div className={classes["card-flipped"]}>
				<img alt={`flipped ${card.position}`} src={`/images/${card.image}.png`}/>
			</div>
			<div className={classes["card-not-flipped"]}>
				<label className={classes["card-identifier"]}>{card.position}</label>
			</div>
		</div>
	);
});
