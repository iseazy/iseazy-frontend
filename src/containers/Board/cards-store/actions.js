import * as actionTypes from './action-types'

export const markFlippedCard = cardId => ({
  type: actionTypes.MARK_FLIPPED_CARD,
  payload: { cardId },
})

export const markUnflippedCards = cardIds => ({
  type: actionTypes.MARK_UNFLIPPED_CARDS,
  payload: { cardIds },
})

export const markCompletedCards = cardIds => ({
  type: actionTypes.MARK_COMPLETED_CARDS,
  payload: { cardIds },
})

export const resetCards = newCards => ({
  type: actionTypes.RESET_CARDS,
  payload: { newCards },
})
