import React, { useState, useEffect } from 'react'
import CardComponent from '../Card/Card'
import styles from './game.module.css'
import { v4 as uuid } from 'uuid'
import fisherYatesShuffle from '../../lib/helpers/fisherYatesShuffle'

const CardTypes = [
  'card1',
  'card2',
  'card3',
  'card4',
  'card5',
  'card6',
  'card7',
  'card8',
  'card9',
]

function DeckFactory() {
  return fisherYatesShuffle(
    CardTypes.map((type) => [new Card(type), new Card(type)]).flat(),
  )
}

class Card {
  id = uuid()
  isFaceUp = false
  type

  constructor(type) {
    this.type = type
  }
}

const initialState = () => {
  return {
    selectedCardIds: [],
    cards: DeckFactory(),
  }
}

const isGameFinished = (cards) => cards.every((card) => card.isFaceUp)

const isEqualType = (card1, card2) => card1.type === card2.type

const calculateStatus = (state) => {
  if (isGameFinished(state.cards)) return 'finished'
  const selectedCards = state.cards.filter((card) =>
    state.selectedCardIds.includes(card.id),
  )
  if (selectedCards.length < 2) return 'selecting'
  if (isEqualType(selectedCards[0], selectedCards[1])) return 'match'
  return 'unmatch'
}

function Game() {
  const [state, setState] = useState(initialState())
  // derived state
  const status = calculateStatus(state)

  useEffect(() => {
    if (status !== 'unmatch') return
    const timer = setTimeout(() => {
      setState((state) => {
        return {
          selectedCardIds: [],
          cards: state.cards.map((card) => {
            if (state.selectedCardIds.includes(card.id)) {
              return {
                ...card,
                isFaceUp: false,
              }
            }
            return card
          }),
        }
      })
    }, 900)
    return () => clearTimeout(timer)
  }, [status])

  const handleClick = (id) => {
    if (status === 'unmatch') return
    const selectedCard = state.cards.find((card) => card.id === id)
    if (selectedCard.isFaceUp) return

    setState((currentState) => {
      return {
        selectedCardIds:
          currentState.selectedCardIds.length < 2
            ? [...currentState.selectedCardIds, id]
            : [id],
        cards: currentState.cards.map((card) => {
          if (card.id === id)
            return {
              ...selectedCard,
              isFaceUp: true,
            }
          return card
        }),
      }
    })
  }

  return (
    <ul className={styles.cardList}>
      {state.cards.map(({ id, type, isFaceUp }, i) => (
        <CardComponent
          key={id}
          id={id}
          type={type}
          isFaceUp={isFaceUp}
          position={i + 1}
          handleClick={handleClick}
        />
      ))}
    </ul>
  )
}

export default Game
