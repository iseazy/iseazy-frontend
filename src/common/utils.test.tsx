import {shuffleList, getFormattedTimeDifference} from './utils';

describe('shuffleList tests', () => {
    it('should return the same list received as parameter with a different order', () => {
        const list = [0,1,2,3,4,5];
        const shuffledList = shuffleList(list);
        expect(shuffledList.length).toEqual(list.length);
        expect(shuffledList).toEqual(expect.arrayContaining(list));
    });
});

describe('getFormattedTimeDifference tests', () => {
    it('should return the duration including the minutes when the difference is greater than 1 minute', () => {
        const fromDate = 1636906282000;
        const toDate = 1636906493000;
        const duration = getFormattedTimeDifference(fromDate, toDate);
        expect(duration).toEqual("3min 31s");
    });

    it('should return the duration excluding the minutes when the difference is less than 1 minute', () => {
        const fromDate = 1636906282000;
        const toDate = 1636906300000;
        const duration = getFormattedTimeDifference(fromDate, toDate);
        expect(duration).toEqual("18s");
    });
});
