import * as React from "react";
import { CardVm } from "./components/card/card.vm";
import { useLoad } from "./cards.hooks";
import { Grid } from "./components/grid/grid.component";
import { useDispatch, useSelector } from "react-redux";
import { flipUpCard, loadImages } from "./reducer-slice/card-game.slice";
import { RootState } from "../../core/store";

export const CardGame: React.FC = React.memo(() => {
	const dispatch = useDispatch();
	const cards = useSelector((state: RootState) => state.cardGame.cards)

	const {onLoad} = useLoad({
		onLoadImages: (vmCardImgList) => dispatch(loadImages(vmCardImgList))
	});

	React.useEffect(() => {
		onLoad();
	}, [onLoad]);

	const handleClickCard = (clickedCard: CardVm) => {
		dispatch(flipUpCard(clickedCard))
	}

	return (
		<Grid cards={cards} onClickCard={handleClickCard}/>
	);
})
