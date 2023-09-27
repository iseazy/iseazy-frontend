import {
  MAX_FLIP_CARDS_SAME_TIME,
  startGame,
  initialState,
  shuffleCards,
  resetGame,
  flipCard,
  unFlipCards,
  blockFlippedCards,
  unFlipAllCards
} from './gameModel';  // replace with the actual path to your file

describe('Game Logic', () => {

  it('should initialize the game', () => {
    const images = ['img1', 'img2'];
    const game = startGame(images);
    expect(game.boardState.length).toBe(4);  // 2 images * 2
    expect(game.shuffledImages.length).toBe(4);  // 2 images * 2
  });

  it('should shuffle cards', () => {
    const mockState = {
      ...initialState,
      shuffledImages: ['img1', 'img1', 'img2', 'img2'],
    };
    const newState = shuffleCards(mockState);
    expect(newState.shuffledImages.length).toBe(4);
    expect(newState.shuffledImages).toContain('img1');
    expect(newState.shuffledImages).toContain('img2');
  });

  it('should flip a card', () => {
    const mockState = {
      ...initialState,
      boardState: [false, false, false, false],
    };
    const newState = flipCard(mockState, 2);
    expect(newState.boardState[2]).toBe(true);
  });

  it('should lock the board when MAX_FLIP_CARDS_SAME_TIME cards are flipped', () => {
    const mockState = {
      ...initialState,
      boardState: [true, false, false, false],
      flippedCards: [0],
    };
    const newState = flipCard(mockState, 1);
    expect(newState.isBoardLocked).toBe(true);
  });

  it('should unflip cards', () => {
    const mockState = {
      ...initialState,
      boardState: [true, true, false, false],
      flippedCards: [0, 1],
    };
    const newState = unFlipCards(mockState);
    expect(newState.boardState[0]).toBe(false);
    expect(newState.boardState[1]).toBe(false);
    expect(newState.flippedCards.length).toBe(0);
  });

  it('should block flipped cards', () => {
    const mockState = {
      ...initialState,
      flippedCards: [0, 1],
    };
    const newState = blockFlippedCards(mockState);
    expect(newState.lockedCards.has(0)).toBe(true);
    expect(newState.lockedCards.has(1)).toBe(true);
  });

  it('should unflip all cards', () => {
    const mockState = {
      ...initialState,
      boardState: [true, true, true, true],
    };
    const newState = unFlipAllCards(mockState);
    expect(newState.boardState.every(state => !state)).toBe(true);
  });

  it('should reset the game', () => {
    const mockState = {
      ...initialState,
      boardState: [true, false, true, false],
      shuffledImages: ['img1', 'img1', 'img2', 'img2'],
    };
    const newState = resetGame(mockState);
    expect(newState).toEqual({
      ...initialState,
      boardState: [true, false, true, false],
      shuffledImages: ['img1', 'img1', 'img2', 'img2'],
    });
  });

});
