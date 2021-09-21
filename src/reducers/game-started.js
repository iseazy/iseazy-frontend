import { CARDS_SRC, GAME_STATE } from '../constants';
import { createDeck } from '../utils';

export const gameStarted = (state) => ({
    ...state,
    gameState: GAME_STATE.PLAY,
    cards: createDeck(CARDS_SRC),
    startTime: Date.now()
});
