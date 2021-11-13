import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {CardGameVm, createDefaultCardGameVm} from "../card-game.vm";
import {createCardsListFromCardImgVmList} from "../card-game.mapper";
import {CardImgVm, CardVm} from "../components/card/card.vm";
import {getCurrentDate} from "../../../common/utils";

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
            state.cards = createCardsListFromCardImgVmList(action.payload)
            state.startTime = getCurrentDate();
        },
        resetGame: (state) => {
            state.startTime = getCurrentDate();
            state.cards = createCardsListFromCardImgVmList(state.imageList);
        },
        flipUpCard: (state, action: PayloadAction<CardVm>) => {
            const facedUpCards = getFacedUpCardsNotMatched(state.cards, action.payload);

            if (facedUpCards.length === 2) {
                //Do not compare until there are a pair of cards faced up
                if (areAllCardsEqual(facedUpCards)) {
                    facedUpCards.forEach(c => {
                        if (c.imageIsUp) {
                            c.isMatched = true;
                        }
                    });
                } else {
                    facedUpCards.forEach(c => {
                        if (!c.isMatched) {
                            c.imageIsUp = false;
                        }
                    });
                }
            }

            const card = state.cards.find(c => c.id === action.payload.id);
            card.imageIsUp = true;

            if (state.cards.every(c => c.imageIsUp)) {
                // When all the images are faced up, game is over
                state.cards.forEach(c => {
                    c.isMatched = true;
                });
            }
        }
    },
})

function getFacedUpCardsNotMatched(cards: Array<CardVm>, clickedCard: CardVm) {
    return cards.filter(c => c.imageIsUp && !c.isMatched && c.id !== clickedCard.id)
}

function areAllCardsEqual(cards: Array<CardVm>) {
    const comparingCard = cards[0];
    return cards.every(c => c.image.id === comparingCard.image.id);
}

export const {loadImages, resetGame, flipUpCard} = cardGameSlice.actions


export const selectCardGame = (state) => state.cardGame;


export default cardGameSlice.reducer
