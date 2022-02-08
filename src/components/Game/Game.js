import React from 'react'
import useMemory from '../../domain/hooks/useMemory'
import Card from '../Card/Card'
import styles from './game.module.css'

function Game() {
  const { status, cards, restartGame, selectCard } = useMemory()

  const handleClick = (id) => {
    selectCard(id)
  }

  if (status === 'finished')
    return <button onClick={() => restartGame(cards)}>Juego terminado!</button>

  return (
    <ul className={styles.cardList}>
      {cards.map(({ id, type, isFaceUp }, i) => (
        <Card
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
