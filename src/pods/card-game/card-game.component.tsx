import * as React from "react";
import { useCallback } from "react";
import { CardVm } from "./components/card/card.vm";
import { useLoad } from "./cards.hooks";
import { Grid } from "./components/grid/grid.component";
import { useDispatch, useSelector } from "react-redux";
import { flipUpCard } from "./reducer-slice/card-game.slice";
import { RootState } from "../../core/store";

export const CardGame: React.FC = () => {
	const dispatch = useDispatch();
	const cards = useSelector((state: RootState) => state.cardGame.cards)

	const {onLoad} = useLoad();

	React.useEffect(() => {
		onLoad();
	}, [onLoad]);

	const handleClickCard = useCallback((clickedCard: CardVm) => {
		dispatch(flipUpCard(clickedCard))
	}, [dispatch]);

	return (
		<Grid cards={cards} onClickCard={handleClickCard}/>
	);
}
