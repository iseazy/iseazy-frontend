import useMemory from '../../../domain/hooks/useMemory'
import Card from '../Card/Card'
import styles from './memory.module.css'
import Modal from '../../Modal/Modal'
import RestartModalBody from '../RestartModal/RestartModal'

function Memory() {
  const { time, status, cards, selectCard, restartGame } = useMemory()

  const handleClick = (id: string) => {
    selectCard(id)
  }

  return (
    <div>
      <ul className={styles.cardList}>
        {cards.map(({ id, src, isFaceUp }, i) => (
          <Card
            key={id}
            id={id}
            src={src}
            isFaceUp={isFaceUp}
            position={i + 1}
            handleClick={handleClick}
          />
        ))}
      </ul>
      {status === 'finished' ? (
        <Modal isOpen>
          <RestartModalBody handleRestart={restartGame} time={time} />
        </Modal>
      ) : null}
    </div>
  )
}

export default Memory
