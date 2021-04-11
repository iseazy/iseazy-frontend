import { isAllCardsCompleted } from '..'

describe('Cards store business functions', () => {
  test('checks that all cards are completed', () => {
    const cards = [
      {
        id: 'image-1.1',
        isCompleted: true,
      },
      {
        id: 'image-2.1',
        isCompleted: true,
      },
    ]
    expect(isAllCardsCompleted(cards)).toBe(true)
  })
})
