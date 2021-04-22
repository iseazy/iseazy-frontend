import { generateInitialCards } from './gameContextData';

describe('[Game Context Data]', () => {
  it('Generates the expected data', () => {
    const numberOfCards = 4;
    const expectedData = [
      {
        id: `card-1`,
        category: 1,
        active: false,
        solved: false,
      },
      {
        id: `card-2`,
        category: 1,
        active: false,
        solved: false,
      },
      {
        id: `card-3`,
        category: 2,
        active: false,
        solved: false,
      },
      {
        id: `card-4`,
        category: 2,
        active: false,
        solved: false,
      },
    ];

    const mockData = generateInitialCards(numberOfCards);
    expect(mockData).toHaveLength(numberOfCards);
    expect(mockData).toEqual(expectedData);
  });
});
