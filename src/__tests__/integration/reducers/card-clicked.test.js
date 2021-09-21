import { cardClicked } from '../../../reducers/card-clicked';

describe('cardClicked()', () => {
    it('should not produce any effect on an already clicked card', () => {
        expect(cardClicked({ cards: mockDeck }, mockClickedId)).toStrictEqual({ cards: mockDeck });
    });

    it('should not produce any effect on an already paired card', () => {
        expect(cardClicked({ cards: mockDeck }, mockPairedId)).toStrictEqual({ cards: mockDeck });
    });

    it('should result flip unflipped card', () => {
        expect(cardClicked({ cards: mockDeck }, mockUnflippedId)).toMatchSnapshot();
    });
});
