import { GAME_STATE } from '../../../constants';
import { gameEnded } from '../../../reducers/game-ended';

describe('gameEnded()', () => {
    it('should return a new gameState and compute totalTime', () => {
        Date.now = jest.fn(() => 10000);
        const inputState = {
            startTime: 2000,
            gameState: GAME_STATE.PLAY
        };
        const finalState = {
            startTime: 2000,
            gameState: GAME_STATE.END,
            totalTime: 8
        };

        expect(gameEnded(inputState)).toStrictEqual(finalState);
    });
});
