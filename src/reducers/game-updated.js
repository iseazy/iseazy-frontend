import { REPEATED_CARDS } from '../constants';
import { areClickedCardsPaired, isCardClicked, unclickCard, unflipClickedCard } from '../utils';

export const gameUpdated = (state) => {
    const { cards } = state;
    const clickedCards = cards.filter(isCardClicked);

    let updatedCards = cards;

    if (clickedCards.length >= REPEATED_CARDS) {
        updatedCards = areClickedCardsPaired(clickedCards)
            ? cards.map(unclickCard)
            : cards.map(unflipClickedCard);
    }

    return {
        ...state,
        cards: updatedCards
    }
};
