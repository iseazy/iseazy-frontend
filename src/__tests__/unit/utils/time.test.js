import { getFormattedTime } from '../../../utils/time';

describe('getFormattedTime()', () => {
    it('should return formatted time', () => {
        expect(getFormattedTime(9)).toEqual('0:09');
        expect(getFormattedTime(12)).toEqual('0:12');
        expect(getFormattedTime(61)).toEqual('1:01');
        expect(getFormattedTime(1845)).toEqual('30:45');
        expect(getFormattedTime(3600)).toEqual('60:00');
    });
});
