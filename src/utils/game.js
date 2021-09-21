import { GAME_STATE } from '../constants';

export const isGameEnd = ({ gameState }) => gameState === GAME_STATE.END;

export const isGameIdle = ({ gameState }) => gameState === GAME_STATE.IDLE;
