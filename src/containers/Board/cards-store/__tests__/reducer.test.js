import { cardsReducer, markFlippedCard } from '..'
import { CARDS } from '../constants'

describe('Cards store reducer', () => {
  test('marks a card as flipped', () => {
    const cardIdToFlip = 'image-1.1'
    const state = {
      [CARDS]: [
        {
          id: cardIdToFlip,
          isFlipped: false,
        },
        {
          id: 'image-2.1',
          isFlipped: false,
        },
      ],
    }
    const action = markFlippedCard(cardIdToFlip)
    const newState = cardsReducer(state, action)

    const cardFlipped = newState[CARDS].find(({ id }) => id === cardIdToFlip)

    expect(cardFlipped.isFlipped).toBe(true)
  })

  // TODO: rest of tests
})
