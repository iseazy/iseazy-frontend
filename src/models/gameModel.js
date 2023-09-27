const initialState = {
  shuffledImages: [],
  boardState: [],
  flippedCards: [],
  lockedCards: new Set(),
  isBoardLocked: false,
};

const MAX_FLIP_CARDS_SAME_TIME = 2

const startGame = (imageList) => {
  return {
    ...initialState,
    boardState: new Array(imageList.length * MAX_FLIP_CARDS_SAME_TIME).fill(false),
    shuffledImages: [...imageList, ...imageList].sort(() => Math.random() - 0.5)
  };
}

const shuffleCards = (state) => {
  return {
    ...state,
    shuffledImages: state.shuffledImages.sort(() => Math.random() - 0.5),
  };
};

const flipCard = (state, cardIndex) => {
  const { boardState, flippedCards } = state
  const newBoardState = [...boardState];
  newBoardState[cardIndex] = true;
  const newFlippedCards = [...flippedCards, cardIndex];
  return {
    ...state,
    boardState: newBoardState,
    flippedCards: newFlippedCards,
    isBoardLocked: newFlippedCards.length === MAX_FLIP_CARDS_SAME_TIME
  }
}

const unFlipCards = (state) => {
  const { boardState, flippedCards } = state
  const [firstFlippedCardId, secondFlippedCardId] = flippedCards;
  const newBoardState = [...boardState];
  newBoardState[firstFlippedCardId] = false;
  newBoardState[secondFlippedCardId] = false;

  return { ...state, isBoardLocked: false, boardState: newBoardState, flippedCards: [] }
}

const blockFlippedCards = (state) => {
  const { lockedCards, flippedCards } = state
  const [firstFlippedCardId, secondFlippedCardId] = flippedCards;
  const newLockedCards = new Set([...lockedCards, firstFlippedCardId, secondFlippedCardId])
  return { ...state, lockedCards: newLockedCards, isBoardLocked: false, flippedCards: [] }
}

const unFlipAllCards = (state) => {
  return { ...state, flippedCards: [], boardState: state.boardState.fill(false) }
}

const resetGame = (state) => {
  return {
    ...initialState,
    boardState: state.boardState,
    shuffledImages: state.shuffledImages
  }
};

export {
  MAX_FLIP_CARDS_SAME_TIME,
  startGame,
  initialState,
  shuffleCards,
  resetGame,
  flipCard,
  unFlipCards,
  blockFlippedCards,
  unFlipAllCards
}
