import React from 'react'
import useMemory from '../../../domain/hooks/useMemory'
import Card from '../Card/Card'
import styles from './game.module.css'
import Modal from '../../Modal/Modal'
import RestartModalBody from '../RestartModal/RestartModal'

function Game() {
  const { status, cards, selectCard, restartGame } = useMemory()

  const handleClick = (id) => {
    selectCard(id)
  }

  return (
    <div>
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
      {status === 'finished' ? (
        <Modal isOpen>
          <RestartModalBody handleRestart={restartGame} />
        </Modal>
      ) : null}
    </div>
  )
}

export default Game
