import {
    createCard,
    assignCardId,
    flipCardById,
    hasCardSharedId,
    isCardClicked,
    isCardFlipped,
    isCardNotClicked,
    unclickCard,
    unflipClickedCard
 } from '../../../utils/card';

const testCard = {
    sharedId: 123,
    src: 'testSourceValue',
    flipped: false,
    clicked: false
}

const testCardWithId = {
    ...testCard,
    id: 1
};

const testCardFlipped = {
    ...testCardWithId,
    flipped: true,
    clicked: true
};

const testCardUnclicked = {
    ...testCardFlipped,
    clicked: false
};

describe('createCard()', () => {
    it('should return card data given source and sharedId params', () => {
        expect(createCard('testSourceValue', 123)).toEqual(testCard);
    });
});

describe('assignCardId()', () => {
    it('should return card data with addition id value', () => {
        expect(assignCardId(testCard, 1)).toEqual(testCardWithId);
    });
});

describe('flipCardById()', () => {
    it('should return card flipped when its id is equal to given one', () => {
        expect(flipCardById(1)(testCardWithId)).toEqual(testCardFlipped);
    });

    it('should return card as it is when its id is not equal to given one', () => {
        expect(flipCardById(2)(testCardWithId)).toEqual(testCardWithId);
    });
});

describe('hasCardSharedId()', () => {
    it('should return true when given card has sharedId equal to given one', () => {
        expect(hasCardSharedId(123)(testCardWithId)).toBe(true);
    });
    
    it('should return false when given card has sharedId not equal to given one', () => {
        expect(hasCardSharedId(456)(testCardWithId)).toBe(false);
    });
});

describe('isCardClicked()', () => {
    it('should return true when card is clicked', () => {
        expect(isCardClicked(testCardFlipped)).toBe(true);
    });
    
    it('should return false when card is not clicked', () => {
        expect(isCardClicked(testCard)).toBe(false);
    });
});

describe('isCardFlipped()', () => {
    it('should return true when card is flipped', () => {
        expect(isCardFlipped(testCardFlipped)).toBe(true);
    });
    
    it('should return false when card is not flipped', () => {
        expect(isCardFlipped(testCard)).toBe(false);
    });
});

describe('isCardNotClicked()', () => {
    it('should return true when card is not clicked', () => {
        expect(isCardNotClicked(testCard)).toBe(true);
    });
    
    it('should return false when card is clicked', () => {
        expect(isCardNotClicked(testCardFlipped)).toBe(false);
    });
});

describe('unclickCard()', () => {
    it('should return unclicked card and the rest parameters as they were', () => {
        expect(unclickCard(testCardFlipped)).toEqual(testCardUnclicked);
    });
});

describe('unflipClickedCard()', () => {
    it('should return card unflipped only when it is clicked', () => {
        expect(unflipClickedCard(testCardFlipped)).toEqual(testCardWithId);
    });

    it('should return card as it is when it is not clicked', () => {
        expect(unflipClickedCard(testCardUnclicked)).toEqual(testCardUnclicked);
    });
});


