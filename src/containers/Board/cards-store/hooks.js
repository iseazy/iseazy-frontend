import { useReducer } from 'react'

import { cardsReducer, isAllCardsCompleted } from '.'
import { CARDS } from './constants'

export const useCards = initialCards => {
  const initialState = { [CARDS]: initialCards }
  const [state, dispatch] = useReducer(cardsReducer, initialState)

  return {
    cards: state[CARDS],
    isAllCompleted: isAllCardsCompleted(state[CARDS]),
    dispatch,
  }
}
