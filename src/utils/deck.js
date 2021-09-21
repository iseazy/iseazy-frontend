import { shuffleArray } from './suffle-array';
import { assignCardId, createCard, isCardFlipped, isCardNotClicked, hasCardSharedId } from './card';

export const createDeck = (source) => {
    const uniqueCards = source.map(createCard);
    const duplicatedCards = [ ...uniqueCards, ...uniqueCards ];
    const identifiedCards = duplicatedCards.map(assignCardId);

    return shuffleArray(identifiedCards);
};

export const areClickedCardsPaired = ([ { sharedId }, ...rest ]) => !!rest.length && rest.every(hasCardSharedId(sharedId))

export const isDeckSolved = (cards) => cards.every(isCardFlipped) && cards.every(isCardNotClicked);
