import { GAME_STATE } from '../constants';

export const gameEnded = (state) => ({
    ...state,
    gameState: GAME_STATE.END,
    totalTime: (Date.now() - state.startTime)/1000
});
