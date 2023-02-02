import { useEffect, useMemo, useReducer } from 'react'
import {
  cleanSelectedItems,
  endGame,
  restartGame,
  startGame,
  updateMatchedItems,
  updateSelectedItems,
} from '../actions/game.creators'
import { gameReducer } from '../reducers/game.reducer'
import {
  initializeGame,
  isTheGameOver,
  isTheGameStarted,
  isTheSameItemSelected,
} from '../usecases/game'
import { FormatedTime, formatTimeFromMilliseconds } from '../usecases/time'

export function useGame() {
  const [{ board, matchedItems, selectedItems, endTime, startTime }, dispatch] = useReducer(
    gameReducer,
    initializeGame()
  )

  const isGameStarted = useMemo(() => isTheGameStarted(startTime), [startTime])
  const isGameOver = useMemo(() => isTheGameOver(board, matchedItems), [board, matchedItems])

  const time: FormatedTime = useMemo(
    () => (isGameOver ? formatTimeFromMilliseconds(endTime! - startTime!) : '00:00'),
    [isGameOver, endTime, startTime]
  )

  useEffect(() => {
    const timeoutId = setTimeout(() => dispatch(startGame()), 2000)
    return () => clearTimeout(timeoutId)
  }, [])

  useEffect(() => {
    if (selectedItems.length !== 2) return
    if (isTheSameItemSelected(board, selectedItems)) {
      const [firstIndex] = selectedItems
      const key = board[firstIndex].key

      dispatch(updateMatchedItems(key))
      dispatch(cleanSelectedItems())
    } else {
      const timeoutId = setTimeout(() => dispatch(cleanSelectedItems()), 1000)
      return () => clearTimeout(timeoutId)
    }
  }, [selectedItems, board])

  useEffect(() => {
    if (isGameOver) dispatch(endGame())
  }, [isGameOver])

  const handleItemClick = (index: number) => {
    if (selectedItems.length === 2) return
    dispatch(updateSelectedItems(index))
  }

  return {
    board,
    isGameStarted,
    isGameOver,
    time,
    matchedItems,
    selectedItems,
    handleItemClick,
    restartGame: () => dispatch(restartGame()),
  }
}
