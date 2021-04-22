import { getTimeInMinutes } from './timeUtils';

describe('[Time Utils]', () => {
  const values = [
    {
      seconds: 50,
      expectedString: '0:50',
    },
    {
      seconds: 69,
      expectedString: '1:09',
    },
    {
      seconds: 85,
      expectedString: '1:25',
    },
  ];

  values.forEach((value) => {
    const { seconds, expectedString } = value;
    it(`translates ${seconds} seconds to minutes in the proper format`, () => {
      expect(getTimeInMinutes(seconds)).toBe(expectedString);
    });
  });
});
