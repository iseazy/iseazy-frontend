import { REPEATED_CARDS } from '../constants';
import { flipCardById, isCardClicked, isCardFlipped, isCardNotClicked } from '../utils';

export const cardClicked = (state, id) => { 
    const { cards } = state;
    const clickedCard = cards.find(card => card.id === id);

    let updatedCards = cards;

    if ([cards.filter(isCardClicked).length < REPEATED_CARDS,
        !isCardFlipped(clickedCard),
        isCardNotClicked(clickedCard)].every(Boolean)) {
        updatedCards = cards.map(flipCardById(id))
    }

    return {
        ...state,
        cards: updatedCards
    } 
};