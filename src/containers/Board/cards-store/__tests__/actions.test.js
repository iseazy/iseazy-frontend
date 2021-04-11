import { markFlippedCard } from '..'
import * as actionTypes from '../action-types'

describe('Cards store actions', () => {
  test('creates an action to mark card as flipped', () => {
    const cardId = 'image-1.1'
    const action = markFlippedCard(cardId)

    expect(action).toStrictEqual({
      type: actionTypes.MARK_FLIPPED_CARD,
      payload: { cardId },
    })
  })

  // TODO: rest of tests
})
