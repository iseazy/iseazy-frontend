import { GAME_ACTIONS } from '../constants';
import { cardClicked } from './card-clicked';
import { gameEnded } from './game-ended';
import { gameStarted } from './game-started';
import { gameUpdated } from './game-updated';

export const reducer = (state, action) => {
    switch (action.type) {
        case GAME_ACTIONS.START:
            return gameStarted(state);
        case GAME_ACTIONS.CLICK:
            return cardClicked(state, action.payload);
        case GAME_ACTIONS.UPDATE:
            return gameUpdated(state);
        case GAME_ACTIONS.END:
            return gameEnded(state);
        default:
            throw new Error();
    }
};