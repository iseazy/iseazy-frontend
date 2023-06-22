import { shuffle } from "../../utils/shuffle";

describe('shuffle', () => {
  it('should shuffle the array', () => {
    // Create a sample array
    const originalArray = [1, 2, 3, 4, 5];

    // Shuffle the array
    const shuffledArray = shuffle(originalArray);

    // Assert that the shuffled array has the same length as the original array
    expect(shuffledArray.length).toBe(originalArray.length);

    // Assert that the shuffled array contains the same elements as the original array (regardless of order)
    expect(shuffledArray).toEqual(expect.arrayContaining(originalArray));

    // Assert that the shuffled array is not the same reference as the original array
    expect(shuffledArray).not.toBe(originalArray);
  });
});