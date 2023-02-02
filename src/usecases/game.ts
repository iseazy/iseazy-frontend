import { AVAILABLE_ITEMS } from '../constants'
import { Game } from '../entities/game.entity'
import { Item } from '../entities/item.entity'

export function initializeBoard() {
  const allItemsPairs = [...AVAILABLE_ITEMS, ...AVAILABLE_ITEMS]
  const board: Item[] = []

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

export function isTheSameItemSelected(
  board: Item[],
  selectedItems: Game['selectedItems']
): boolean {
  const [firstItem, secondItem] = selectedItems
  return board[firstItem].key === board[secondItem].key
}

export function isTheGameOver(board: Item[], matchedItems: Game['matchedItems']): boolean {
  const allKeys = board.map(item => item.key)
  const uniqueKeys = allKeys.filter((key, index) => allKeys.indexOf(key) === index)
  const eachUniqueKeyIsMatched = uniqueKeys.every(key => matchedItems.includes(key))

  return eachUniqueKeyIsMatched
}

export function isTheGameStarted(startTime?: Game['startTime']): boolean {
  return startTime !== undefined
}
