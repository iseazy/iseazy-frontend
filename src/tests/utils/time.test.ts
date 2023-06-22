import { parseTime } from '../../utils/time';

describe('parseTime', () => {
  const testCases: [number, string][] = [
    [0, '0:00'],
    [45, '0:45'],
    [60, '1:00'],
    [125, '2:05'],
    [3600, '60:00'],
    [3661, '61:01'],
  ];

  testCases.forEach(([seconds, expected]) => {
    it(`should correctly parse ${seconds} seconds as ${expected}`, () => {
      expect(parseTime(seconds)).toBe(expected);
    });
  });
});