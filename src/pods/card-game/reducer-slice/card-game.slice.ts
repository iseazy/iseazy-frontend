import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CardGameVm, createDefaultCardGameVm } from "../card-game.vm";
import { createCardsListFromCardImgVmList } from "../card-game.mapper";
import { CardImgVm, CardVm } from "../components/card/card.vm";

export type CardGameState = CardGameVm;

const defaultCardGameState: CardGameState = {
	...createDefaultCardGameVm()
};

export const cardGameSlice = createSlice({
	name: 'cardGame',
	initialState: defaultCardGameState,
	reducers: {
		loadImages: (state, action: PayloadAction<Array<CardImgVm>>) => {
			state.imageList = action.payload;
			state.cards = createCardsListFromCardImgVmList(action.payload);
		},
		resetGame: (state) => {
			state.currentNumberOfTrials = 0;
			state.isGameOver = true;
			state.finishTime = Date.now();
			state.cards = createCardsListFromCardImgVmList(state.imageList);
		},
		flipUpCard: (state, action: PayloadAction<CardVm>) => {
			state.currentNumberOfTrials++;
			if (!state.currentComparingCard) state.currentComparingCard = action.payload;

			if (state.cards.filter(c => c.imageIsUp && !c.isMatched).length === 2) {
				if (state.cards.filter(c => c.image.id === state.currentComparingCard.image.id).every(c => c.imageIsUp)) {
					state.cards = state.cards.map(c => {
						if (c.image.id === state.currentComparingCard.image.id) {
							c.isMatched = true;
						}
						return c;
					});
					state.currentComparingCard = null;
				} else {
					state.currentComparingCard = null;
					state.cards = state.cards.map(c => {
						if (!c.isMatched) {
							c.imageIsUp = false;
						}
						return c;
					});
					const cardIndex = state.cards.findIndex(c => c.id === action.payload.id);
					state.cards[cardIndex].imageIsUp = true;
				}
			} else {
				const cardIndex = state.cards.findIndex(c => c.id === action.payload.id);
				state.cards[cardIndex].imageIsUp = true;
			}
		}
	},
})

export const {loadImages, resetGame, flipUpCard} = cardGameSlice.actions

export default cardGameSlice.reducer
