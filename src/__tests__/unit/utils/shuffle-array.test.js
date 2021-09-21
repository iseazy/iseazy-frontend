import { shuffleArray } from '../../../utils/suffle-array';

describe('shuffleArray()', () => {
    it('should return an array with same length than given one', () => {
        expect(shuffleArray([ 'A', 'B', 'C' ]).length).toBe(3);
    });

    it('should return an array containing the same elements than given one', () => {
        const a = Math.floor(Math.random() * 9999);
        const b = Math.floor(Math.random() * 9999);
        const c = Math.floor(Math.random() * 9999);
        const result = shuffleArray([ a, b, c ]);

        expect(result.includes(a)).toBe(true);
        expect(result.includes(b)).toBe(true);
        expect(result.includes(c)).toBe(true);
    });
});
