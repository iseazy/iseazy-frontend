import * as React from "react";
import classes from "./card.component.module.scss"
import { CardVm } from "./card.vm";

interface Props {
	card: CardVm;
	onClick: (card: CardVm) => void
	position: number
}

export const Card: React.FC<Props> = React.memo((props) => {
	const {
		card,
		onClick,
		position,
	} = props;

	const handleClick = () => {
		onClick(card)
	};

	const cardClassName = card.imageIsUp ? `${classes["card"]} ${classes["animation"]}` : `${classes["card"]}`

	return (
		<div onClick={handleClick} className={cardClassName}>
			<div className={classes["card-flipped"]}>
				<img alt={`flipped ${position}`} src={`/images/${card.image.src}.png`}/>
			</div>
			<div className={classes["card-not-flipped"]}>
				<label className={classes["card-identifier"]}>{position}</label>
			</div>
		</div>
	);
});
