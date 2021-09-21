import {
    isGameEnd,
    isGameIdle
} from '../../../utils/game';
import { GAME_STATE } from '../../../constants';

const testStatePlay = {
    gameState: GAME_STATE.PLAY
};
const testStateEnd = {
    gameState: GAME_STATE.END
};
const testStateIdle = {
    gameState: GAME_STATE.IDLE
};

describe('isGameEnd()', () => {
    it('should return true when given gameState is END', () => {
        expect(isGameEnd(testStateEnd)).toBe(true);
    });
    
    it('should return false when given gameState is not END', () => {
        expect(isGameEnd(testStatePlay)).toBe(false);
    });
});

describe('isGameIdle()', () => {
    it('should return true when given gameState is IDLE', () => {
        expect(isGameIdle(testStateIdle)).toBe(true);
    });
    
    it('should return false when given gameState is not IDLE', () => {
        expect(isGameIdle(testStatePlay)).toBe(false);
    });
});
