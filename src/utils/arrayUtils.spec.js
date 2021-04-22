import { mockDataCards } from '../../tests/test-utils';
import {
  findItemById,
  updateItemByIndex,
  updateItemsByIndex,
} from './arrayUtils';

describe('[Array Utils]', () => {
  it('finds Item By Id properly', () => {
    const expectedResult = mockDataCards[2];
    const id = expectedResult.id;

    const result = findItemById(mockDataCards, id);
    expect(result).toEqual(expectedResult);
  });

  it('updates Item By Index properly', () => {
    const updatedCard = { ...mockDataCards[2], active: true };
    const id = updatedCard.id;

    const expectedResult = [
      mockDataCards[0],
      mockDataCards[1],
      updatedCard,
      mockDataCards[3],
    ];

    const result = updateItemByIndex(mockDataCards, id, { active: true });
    expect(result).toEqual(expectedResult);
  });

  it('updates several items indicated in the Index array', () => {
    const changes = {
      solved: true,
    };

    const updatedOne = { ...mockDataCards[1], ...changes };
    const updatedTwo = { ...mockDataCards[3], ...changes };
    const ids = [mockDataCards[1].id, mockDataCards[3].id];

    const expectedResult = [
      mockDataCards[0],
      updatedOne,
      mockDataCards[2],
      updatedTwo,
    ];

    const result = updateItemsByIndex(mockDataCards, ids, changes);
    expect(result).toEqual(expectedResult);
  });
});
