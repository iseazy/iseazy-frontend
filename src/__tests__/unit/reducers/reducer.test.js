import { reducer } from '../../../reducers/reducer';
import { GAME_ACTIONS } from '../../../constants';
import { cardClicked } from '../../../reducers/card-clicked';
import { gameEnded } from '../../../reducers/game-ended';
import { gameStarted } from '../../../reducers/game-started';
import { gameUpdated } from '../../../reducers/game-updated';

jest.mock('../../../reducers/card-clicked', () => ({
    cardClicked: jest.fn()
}));
jest.mock('../../../reducers/game-ended', () => ({
    gameEnded: jest.fn()
}));
jest.mock('../../../reducers/game-started', () => ({
    gameStarted: jest.fn()
}));
jest.mock('../../../reducers/game-updated', () => ({
    gameUpdated: jest.fn()
}));

describe('reducer()', () => {
    beforeEach(() => {
        cardClicked.mockClear();
        gameEnded.mockClear();
        gameStarted.mockClear();
        gameUpdated.mockClear();
    });

    it('should call cardClicked reducer when given action', () => {
        reducer({}, { type: GAME_ACTIONS.CLICK, payload: {}});
        expect(cardClicked).toHaveBeenCalledTimes(1);
    });

    it('should call gameEnded reducer when given action', () => {
        reducer({}, { type: GAME_ACTIONS.END, payload: {}});
        expect(gameEnded).toHaveBeenCalledTimes(1);
    });

    it('should call gameStarted reducer when given action', () => {
        reducer({}, { type: GAME_ACTIONS.START, payload: {}});
        expect(gameStarted).toHaveBeenCalledTimes(1);
    });

    it('should call gameUpdated reducer when given action', () => {
        reducer({}, { type: GAME_ACTIONS.UPDATE, payload: {}});
        expect(gameUpdated).toHaveBeenCalledTimes(1);
    });

    it('should throw error when given invalid action', () => {
        expect(() => reducer({}, { type: 'unknown', payload: {}})).toThrow();
    });
});