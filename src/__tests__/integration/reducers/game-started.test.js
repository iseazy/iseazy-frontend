import { gameStarted } from '../../../reducers/game-started';
import { createDeck } from '../../../utils';

jest.mock('../../../utils', () => ({
    createDeck: jest.fn()
}));

describe('gameStarted()', () => {
    beforeAll(() => {
        createDeck.mockReturnValue(mockDeck);
    });

    it('should initialize gameState, create shuffled deck and set startTime', () => {
        Date.now = jest.fn(() => 123);
        expect(gameStarted({})).toMatchSnapshot();
    });
});
