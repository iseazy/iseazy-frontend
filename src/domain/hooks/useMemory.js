import { useState, useEffect } from 'react'
import CardsFactory from '../memory/cards'
import {
  calculateStatus,
  selectCard as select,
  deselectCards,
  isClickableCard,
} from '../memory/logic'

const initialState = () => {
  return {
    selectedCardIds: [],
    cards: CardsFactory(),
  }
}

function useMemory() {
  const [state, setState] = useState(initialState())
  // derived state
  const status = calculateStatus(state)

  useEffect(() => {
    if (status !== 'unmatch') return
    const timer = setTimeout(() => {
      setState((currentState) => deselectCards(currentState))
    }, 900)
    return () => clearTimeout(timer)
  }, [status])

  const selectCard = (id) => {
    if (isClickableCard(id, status, state.cards))
      setState((currentState) => select(id, currentState))
  }

  const restartGame = () => {
    setState(initialState())
  }

  return {
    status,
    cards: state.cards,
    selectCard,
    restartGame,
  }
}

export default useMemory
