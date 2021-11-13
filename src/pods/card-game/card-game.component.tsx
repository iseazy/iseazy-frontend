import * as React from "react";
import { CardVm } from "./components/card/card.vm";
import { useLoad } from "./cards.hooks";
import { Grid } from "./components/grid/grid.component";
import { useDispatch, useSelector } from "react-redux";
import { flipUpCard } from "./reducer-slice/card-game.slice";
import { RootState } from "../../core/store";
import { GameOverDialog } from "./components/game-over-dialog/game-over-dialog.component";
import { Button } from "../../common/components/button/button.component";

export const CardGame: React.FC = () => {
	const dispatch = useDispatch();
	const cards = useSelector((state: RootState) => state.cardGame.cards)

	const [isShowingGameOverDialog, setIsShowingGameOverDialog] = React.useState(false);

	const {onLoad} = useLoad();

	const toggleGameOverDialog = () => {
    setIsShowingGameOverDialog(!isShowingGameOverDialog);
  }

	React.useEffect(() => {
		onLoad();
	}, [onLoad]);

	const handleClickCard = React.useCallback((clickedCard: CardVm) => {
		dispatch(flipUpCard(clickedCard))
	}, [dispatch]);

	return (
		<>
			<Grid cards={cards} onClickCard={handleClickCard}/>
			<Button onClick={toggleGameOverDialog}>Game Over</Button>
			<GameOverDialog
				isOpen={isShowingGameOverDialog}
				onHide={toggleGameOverDialog}
			/>
		</>

	);
}
