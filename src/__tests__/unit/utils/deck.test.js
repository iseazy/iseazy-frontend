import {
    createDeck,
    areClickedCardsPaired,
    isDeckSolved
} from '../../../utils/deck';
import {
    assignCardId,
    createCard,
    isCardFlipped,
    isCardNotClicked,
    hasCardSharedId
} from '../../../utils/card';
import { shuffleArray } from '../../../utils/suffle-array';

jest.mock('../../../utils/suffle-array', () => ({
    shuffleArray: jest.fn()
}));
jest.mock('../../../utils/card', () => ({
    assignCardId: jest.fn(),
    createCard: jest.fn(),
    isCardFlipped: jest.fn(),
    isCardNotClicked: jest.fn(),
    hasCardSharedId: jest.fn()
}));

const testSource = [
    'sourceA',
    'sourceB',
    'sourceC',
];

const testCards = [
    { sharedId: 1 },
    { sharedId: 2 },
    { sharedId: 3 },
    { sharedId: 4 },
    { sharedId: 5 },
]

describe('createDeck()', () => {
    beforeEach(() => {
        shuffleArray.mockClear().mockImplementation((a) => a);
        createCard.mockClear().mockImplementation((a) => ({ a }));
        assignCardId.mockClear().mockImplementation((a, i) => ({ ...a, i }));
    });

    it('should return a deck', () => {
        expect(createDeck(testSource)).toMatchSnapshot();
    });

    it('should shuffle the created deck', () => {
        createDeck(testSource);
        expect(shuffleArray).toHaveBeenCalledTimes(1);
    });

    it('should create as many cards as source elements', () => {
        createDeck(testSource);
        expect(createCard).toHaveBeenCalledTimes(testSource.length);
    });

    it('should have source elements twiced', () => {
        expect(createDeck(testSource).length).toBe(testSource.length * 2);
    });
});

describe('areClickedCardsPaired()', () => {
    beforeEach(() => {
        hasCardSharedId.mockReturnValue(() => true);
    });

    it('should return true when all cards have common sharedId', () => {
        expect(areClickedCardsPaired(testCards)).toBe(true);
    });

    it('should return false when any card has different sharedId', () => {
        hasCardSharedId.mockReturnValueOnce(() => false);
        expect(areClickedCardsPaired(testCards)).toBe(false);
    });

    it('should return false when given one card', () => {
        expect(areClickedCardsPaired([ { sharedId: 1} ])).toBe(false);
    });
});

describe('isDeckSolved()', () => {
    beforeEach(() => {
        isCardFlipped.mockReturnValue(true);
        isCardNotClicked.mockReturnValue(true);
    });

    it('should return true when all given cards are flipped and not clicked', () => {
        expect(isDeckSolved(testCards)).toBe(true);
    });

    it('should return false when any given card is not flipped', () => {
        isCardFlipped.mockReturnValueOnce(false);
        expect(isDeckSolved(testCards)).toBe(false);
    });

    it('should return false when any given card is clicked', () => {
        isCardNotClicked.mockReturnValueOnce(false);
        expect(isDeckSolved(testCards)).toBe(false);
    });
});
