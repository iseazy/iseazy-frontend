import * as React from "react";
import { memo } from "react";
import classes from "./card.component.module.scss"
import { CardVm } from "./card.vm";

interface Props {
	card?: CardVm;
	onClick?: (card: CardVm) => void;
}


export const Card: React.FC<Props> = memo((props) => {
	const {
		card,
		onClick
	} = props;

	return (
		<div className={classes["card-outline"]}>
			<div className={classes.card}>
				<label className={classes["card-identifier"]}>{card.position}</label>
			</div>
		</div>

	);
})
