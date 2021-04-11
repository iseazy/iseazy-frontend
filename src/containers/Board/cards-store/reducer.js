import * as actionTypes from './action-types'
import { CARDS } from './constants'

const cardsReducer = (state, { type, payload }) => {
  switch (type) {
    case actionTypes.MARK_FLIPPED_CARD: {
      const newCards = state[CARDS].map(card =>
        card.id === payload.cardId ? { ...card, isFlipped: true } : card,
      )
      return { ...state, [CARDS]: newCards }
    }

    case actionTypes.MARK_UNFLIPPED_CARDS: {
      const newCards = state[CARDS].map(card =>
        payload.cardIds.includes(card.id)
          ? { ...card, isFlipped: false }
          : card,
      )
      return { ...state, [CARDS]: newCards }
    }

    case actionTypes.MARK_COMPLETED_CARDS: {
      const newCards = state[CARDS].map(card =>
        payload.cardIds.includes(card.id)
          ? { ...card, isCompleted: true }
          : card,
      )
      return { ...state, [CARDS]: newCards }
    }

    case actionTypes.RESET_CARDS: {
      return { ...state, [CARDS]: payload.newCards }
    }

    default: {
      throw new Error(`Action type ${type} is not allowed`)
    }
  }
}

export default cardsReducer
