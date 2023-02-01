import { Board } from '../entities/board.entity'
import { AVAILABLE_ITEMS } from '../constants'
import { Game } from '../entities/game.entity'

export function initializeBoard() {
  const allItemsPairs = [...AVAILABLE_ITEMS, ...AVAILABLE_ITEMS]
  const board: Board = []

  for (let i = 0; i < AVAILABLE_ITEMS.length * 2; i++) {
    const randomIndex = Math.floor(Math.random() * allItemsPairs.length)
    const card = allItemsPairs[randomIndex]
    board[i] = card
    allItemsPairs.splice(randomIndex, 1)
  }

  return board
}

export function initializeGame(): Game {
  return {
    board: initializeBoard(),
    selectedItems: [],
    matchedItems: [],
  }
}

export function isTheSameItemSelected(board: Board, selectedItems: Game['selectedItems']): boolean {
  const [firstItem, secondItem] = selectedItems
  return board[firstItem].key === board[secondItem].key
}

export function isTheGameOver(board: Board, matchedItems: Game['matchedItems']): boolean {
  return matchedItems.length === board.length / 2 && matchedItems.length === AVAILABLE_ITEMS.length
}

export function isTheGameStarted(startTime?: Game['startTime']): boolean {
  return startTime !== undefined
}
