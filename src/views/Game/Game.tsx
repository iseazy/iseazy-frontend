import { useEffect, useMemo, useState } from 'react'
import styles from './Game.module.css'
import {
  initializeGame,
  isTheGameOver,
  isTheGameStarted,
  isTheSameItemSelected,
} from '../../usecases/game'
import { Game } from '../../entities/game.entity'
import { FormatedTime, formatTimeFromMilliseconds } from '../../usecases/time'
import { Board } from '../../components/Board'
import { Modal } from '../../components/Modal/Modal'
import { FinishInfo } from '../../components/FinishInfo/FinishInfo'

export function GameView() {
  const [{ board, matchedItems, selectedItems, endTime, startTime }, setGame] =
    useState<Game>(initializeGame)

  const startGame = () => setGame(prevGame => ({ ...prevGame, startTime: Date.now() }))
  const endGame = () => setGame(prevGame => ({ ...prevGame, endTime: Date.now() }))
  const restartGame = () => {
    setGame(() => initializeGame())
    setTimeout(startGame, 2000)
  }
  const cleanSelectedItems = () => setGame(prevGame => ({ ...prevGame, selectedItems: [] }))
  const updateMatchedItemsAndCleanSelectedItems = (key: string) =>
    setGame(prevGame => ({
      ...prevGame,
      matchedItems: [...prevGame.matchedItems, key],
      selectedItems: [],
    }))
  const setSelectedItems = (selectedItems: number[]) =>
    setGame(prevGame => ({ ...prevGame, selectedItems }))

  const isGameStarted = useMemo(() => isTheGameStarted(startTime), [startTime])
  const isGameOver = useMemo(() => isTheGameOver(board, matchedItems), [board, matchedItems])

  const time: FormatedTime = useMemo(() => {
    if (!isGameOver) return '00:00'
    return formatTimeFromMilliseconds(endTime! - startTime!)
  }, [isGameOver, endTime, startTime])

  useEffect(() => {
    const timeoutId = setTimeout(startGame, 2000)
    return () => clearTimeout(timeoutId)
  }, [])

  useEffect(() => {
    if (selectedItems.length !== 2) return
    if (isTheSameItemSelected(board, selectedItems)) {
      const [firstIndex] = selectedItems
      const key = board[firstIndex].key

      updateMatchedItemsAndCleanSelectedItems(key)
    } else {
      const timeoutId = setTimeout(cleanSelectedItems, 1000)
      return () => clearTimeout(timeoutId)
    }
  }, [selectedItems, board])

  useEffect(() => {
    if (isGameOver) endGame()
  }, [isGameOver])

  const handleCardClick = (index: number) => {
    const newSelectedItems = [...selectedItems]
    if (newSelectedItems.length === 2) return
    if (newSelectedItems.includes(index)) return

    newSelectedItems.push(index)
    setSelectedItems(newSelectedItems)
  }

  return (
    <main className={styles.container}>
      <Board
        board={board}
        handleCardClick={handleCardClick}
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
