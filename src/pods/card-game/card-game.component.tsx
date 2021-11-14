import * as React from "react";
import { useLoad } from "./cards.hooks";
import { Grid } from "./components/grid/grid.component";
import { useDispatch, useSelector } from "react-redux";
import {flipUpCard, resetGame, selectCardGame} from "./reducer-slice/card-game.slice";
import { RootState } from "../../core/store";
import { GameOverDialog } from "./components/game-over-dialog/game-over-dialog.component";
import { CardVm } from "./components/card/card.vm";
import {getFormattedTimeDifference} from "../../common/utils";

export const CardGame: React.FC = () => {
	const dispatch = useDispatch();
	const {cards, startTime} = useSelector((state: RootState) => selectCardGame(state));
	const {onLoad} = useLoad();

	React.useEffect(() => {
		onLoad();
	}, [onLoad]);

	const handleClickCard = React.useCallback((clickedCard: CardVm) => {
		dispatch(flipUpCard(clickedCard))
	}, [dispatch]);

	const handleCloseDialog = React.useCallback(() => {
		dispatch(resetGame(Date.now()))
	}, [dispatch]);

	return (
		<>
			<Grid cards={cards} onClickCard={handleClickCard}/>
			<GameOverDialog
				isOpen={cards.every(c => c.isMatched)}
				duration={getFormattedTimeDifference(startTime)}
				onHide={handleCloseDialog}
			/>
		</>
	);
}
