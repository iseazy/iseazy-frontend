import { useState, useEffect } from 'react'
import CardsFactory from '../memory/cards'
import {
  calculateStatus,
  selectCard as select,
  deselectCards,
  isClickableCard,
} from '../memory/logic'

interface State {
  time: {
    start: number | null
    end: number | null
  }
  selectedCardIds: String[]
  cards: ReturnType<typeof CardsFactory>
}

const initialState = (): State => {
  return {
    time: {
      start: null,
      end: null,
    },
    selectedCardIds: [],
    cards: CardsFactory(),
  }
}

function useMemory() {
  const [state, setState] = useState(initialState())
  // derived state
  const status = calculateStatus({
    selectedCardIds: state.selectedCardIds,
    cards: state.cards,
  })

  useEffect(() => {
    if (status !== 'unmatch') return
    const timer = setTimeout(() => {
      setState((currentState) => deselectCards(currentState))
    }, 900)
    return () => clearTimeout(timer)
  }, [status])

  const selectCard = (id: string) => {
    if (isClickableCard({ id, status, cards: state.cards }))
      setState((currentState) => select(id, currentState))
  }

  const restartGame = () => {
    setState(initialState())
  }

  return {
    time: state.time,
    status,
    cards: state.cards,
    selectCard,
    restartGame,
  }
}

export type { State }
export default useMemory
