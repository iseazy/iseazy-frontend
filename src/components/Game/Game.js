import React, { useState } from 'react'
import CardComponent from '../Card/Card'
import styles from './game.module.css'

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
  return CardTypes.map((type) => [new Card(type), new Card(type)])
    .flat()
    .sort((a, b) => a.id - b.id)
}

class Card {
  id = Math.floor(Math.random() * 100000 + 1)
  isFaceUp = false
  type

  constructor(type) {
    this.type = type
  }
}

const initialState = () => ({
  cards: DeckFactory(),
})

function Game() {
  const [state] = useState(initialState())

  const handleClick = (id) => {
    console.log(`card  ${id}`)
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
