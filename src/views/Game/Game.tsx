import styles from './Game.module.css'
import { Board } from '../../components/Board'
import { Modal } from '../../components/Modal/Modal'
import { FinishInfo } from '../../components/FinishInfo/FinishInfo'
import { useGame } from '../../hooks/useGame'

export function GameView() {
  const {
    board,
    isGameStarted,
    isGameOver,
    time,
    matchedItems,
    selectedItems,
    handleItemClick,
    restartGame,
  } = useGame()

  return (
    <main className={styles.container}>
      <Board
        board={board}
        handleCardClick={handleItemClick}
        isGameStarted={isGameStarted}
        matchedItems={matchedItems}
        selectedItems={selectedItems}
      />
      {isGameOver && (
        <Modal>
          <FinishInfo time={time} restartGame={restartGame} />
        </Modal>
      )}
    </main>
  )
}
