import { gameUpdated } from '../../../reducers/game-updated';

describe('gameUpdated()', () => {
    it('should not produce any effect when there are not enough clicked cards', () => {
        expect(gameUpdated({ cards: mockDeck })).toStrictEqual({ cards: mockDeck });
    });

    it('should unclick paired cards when there are enough', () => {
        expect(gameUpdated({ cards: mockDeckPaired })).toMatchSnapshot();
    });

    it('should unflip unpaired clicked cards when there are enough', () => {
        expect(gameUpdated({ cards: mockDeckUnpaired })).toMatchSnapshot();
    });
});
