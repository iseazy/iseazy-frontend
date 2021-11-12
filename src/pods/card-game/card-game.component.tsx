import * as React from "react";
import { memo } from "react";
import { Card } from "./components/card/card.component";
import classes from "./card-game.component.module.scss";

export const CardGame: React.FC = memo(() => {
	return (
		<div className={classes["card-array"]}>
			<div className={classes["card-spacing"]}><Card
				card={{id: "card2", image: "", isFlipped: false, isMatched: false, name: "Carta 1", position: 1}}/></div>
			<div className={classes["card-spacing"]}><Card
				card={{id: "card3", image: "", isFlipped: false, isMatched: false, name: "Carta 1", position: 2}}/></div>
			<div className={classes["card-spacing"]}><Card
				card={{id: "card4", image: "", isFlipped: false, isMatched: false, name: "Carta 1", position: 3}}/></div>
			<div className={classes["card-spacing"]}><Card
				card={{id: "card5", image: "", isFlipped: false, isMatched: false, name: "Carta 1", position: 4}}/></div>
			<div className={classes["card-spacing"]}><Card
				card={{id: "card6", image: "", isFlipped: false, isMatched: false, name: "Carta 1", position: 5}}/></div>
			<div className={classes["card-spacing"]}><Card
				card={{id: "card7", image: "", isFlipped: false, isMatched: false, name: "Carta 1", position: 6}}/></div>
			<div className={classes["card-spacing"]}><Card
				card={{id: "card7", image: "", isFlipped: false, isMatched: false, name: "Carta 1", position: 7}}/></div>
			<div className={classes["card-spacing"]}><Card
				card={{id: "card7", image: "", isFlipped: false, isMatched: false, name: "Carta 1", position: 8}}/></div>
			<div className={classes["card-spacing"]}><Card
				card={{id: "card7", image: "", isFlipped: false, isMatched: false, name: "Carta 1", position: 9}}/></div>
			<div className={classes["card-spacing"]}><Card
				card={{id: "card7", image: "", isFlipped: false, isMatched: false, name: "Carta 1", position: 10}}/></div>
			<div className={classes["card-spacing"]}><Card
				card={{id: "card7", image: "", isFlipped: false, isMatched: false, name: "Carta 1", position: 11}}/></div>
			<div className={classes["card-spacing"]}><Card
				card={{id: "card7", image: "", isFlipped: false, isMatched: false, name: "Carta 1", position: 12}}/></div>
			<div className={classes["card-spacing"]}><Card
				card={{id: "card7", image: "", isFlipped: false, isMatched: false, name: "Carta 1", position: 13}}/></div>
			<div className={classes["card-spacing"]}><Card
				card={{id: "card7", image: "", isFlipped: false, isMatched: false, name: "Carta 1", position: 14}}/></div>
			<div className={classes["card-spacing"]}><Card
				card={{id: "card7", image: "", isFlipped: false, isMatched: false, name: "Carta 1", position: 15}}/></div>
			<div className={classes["card-spacing"]}><Card
				card={{id: "card7", image: "", isFlipped: false, isMatched: false, name: "Carta 1", position: 16}}/></div>
			<div className={classes["card-spacing"]}><Card
				card={{id: "card7", image: "", isFlipped: false, isMatched: false, name: "Carta 1", position: 17}}/></div>
			<div className={classes["card-spacing"]}><Card
				card={{id: "card7", image: "", isFlipped: false, isMatched: false, name: "Carta 1", position: 18}}/></div>
		</div>
	);
})
