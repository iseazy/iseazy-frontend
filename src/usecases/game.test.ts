import { AVAILABLE_ITEMS } from '../constants'
import { Item } from '../entities/item.entity'
import {
  initializeBoard,
  initializeGame,
  isTheGameOver,
  isTheGameStarted,
  isTheSameItemSelected,
} from './game'

describe('when initializeBoard is called', () => {
  it('should return a board with the double of the available items', () => {
    const board = initializeBoard()
    expect(board.length).toBe(AVAILABLE_ITEMS.length * 2)
  })
})

describe('when initializeGame is called', () => {
  it('should return a game with a board', () => {
    const game = initializeGame()
    expect(game.board.length).toBe(AVAILABLE_ITEMS.length * 2)
  })
  it('should return a game with an empty selectedItems and matchedItems', () => {
    const game = initializeGame()
    expect(game.selectedItems).toEqual([])
    expect(game.matchedItems).toEqual([])
  })
})

describe('when isTheSameItemSelected is called', () => {
  it('should return true if the selectedItems have the same key', () => {
    const board: Item[] = [
      { key: '1', image: '', altText: '' },
      { key: '1', image: '', altText: '' },
    ]
    const selectedItems = [0, 1]
    expect(isTheSameItemSelected(board, selectedItems)).toBe(true)
  })
  it('should return false if the selectedItems have different keys', () => {
    const board: Item[] = [
      { key: '1', image: '', altText: '' },
      { key: '2', image: '', altText: '' },
    ]
    const selectedItems = [0, 1]
    expect(isTheSameItemSelected(board, selectedItems)).toBe(false)
  })
})

describe('when isTheGameOver is called', () => {
  it('should return true if the board and the matchedItems have the same length', () => {
    const board = initializeBoard()
    const allKeys = board.map(item => item.key)
    const matchedItems = allKeys.filter((key, index) => allKeys.indexOf(key) === index)
    expect(isTheGameOver(board, matchedItems)).toBe(true)
  })
  it('should return false if the board and the matchedItems have different lengths', () => {
    const board = initializeBoard()
    const matchedItems = [] as string[]
    expect(isTheGameOver(board, matchedItems)).toBe(false)
  })
})

describe('when isTheGameStarted is called', () => {
  it('should return true if the startTime is defined', () => {
    expect(isTheGameStarted(Date.now())).toBe(true)
  })
  it('should return false if the startTime is undefined', () => {
    expect(isTheGameStarted()).toBe(false)
  })
})
