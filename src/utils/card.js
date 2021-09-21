export const createCard = (src, sharedId) => ({
    sharedId,
    src,
    flipped: false,
    clicked: false,
});

export const assignCardId = (card, id) => ({
    ...card,
    id
});

export const flipCardById = (id) => (card) => card.id === id ? ({
    ...card,
    flipped: true,
    clicked: true
}) : card;

export const unflipClickedCard = (card) => !!card.clicked ? ({
    ...card,
    flipped: false,
    clicked: false
}) : card;

export const unclickCard = (card) => ({
    ...card,
    clicked: false
});

export const isCardClicked = ({ clicked }) => !!clicked;

export const isCardNotClicked = ({ clicked }) => !clicked;

export const isCardFlipped = ({ flipped }) => !!flipped;

export const hasCardSharedId = (sharedId) => (card) => card.sharedId === sharedId;
