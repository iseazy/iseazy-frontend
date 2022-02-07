import { useState, useEffect } from 'react'
import CardsFactory from '../logic/cards'
import {
  calculateStatus,
  selectCard as select,
  deselectCards,
} from '../logic/memory'

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
    if (status === 'unmatch') return
    const selectedCard = state.cards.find((card) => card.id === id)
    if (selectedCard.isFaceUp) return

    setState((currentState) => select(id, currentState))
  }

  return {
    status,
    cards: state.cards,
    selectCard,
  }
}

export default useMemory
