import { renderHook, act } from '@testing-library/react'
import { AVAILABLE_ITEMS } from '../constants'
import { useGame } from './useGame'
import { Game } from '../entities/game.entity'

const mockedGame = {
  board: [AVAILABLE_ITEMS[0], AVAILABLE_ITEMS[0], AVAILABLE_ITEMS[1], AVAILABLE_ITEMS[1]],
  matchedItems: [],
  selectedItems: [],
} as Game

jest.mock('../usecases/game', () => {
  const originalModule = jest.requireActual('../usecases/game')
  return {
    ...originalModule,
    initializeGame: () => mockedGame,
  }
})

jest.useFakeTimers()

const advanceTimersUntilGameBegins = () => jest.advanceTimersByTime(2000)
const advanceOneSecond = () => jest.advanceTimersByTime(1000)

describe('#useGame', () => {
  describe('when the game is initialized', () => {
    it('should return the initial state', () => {
      const { result } = renderHook(() => useGame())
      const { board, isGameStarted, isGameOver, time, matchedItems, selectedItems } = result.current

      expect(board).toHaveLength(mockedGame.board.length)
      expect(isGameStarted).toBeFalsy()
      expect(isGameOver).toBeFalsy()
      expect(time).toBe('00:00')
      expect(matchedItems).toHaveLength(0)
      expect(selectedItems).toHaveLength(0)
    })
  })

  describe('when 2 seconds have passed', () => {
    it('should start the game', () => {
      const { result } = renderHook(() => useGame())

      act(() => advanceTimersUntilGameBegins())

      const { isGameStarted } = result.current
      expect(isGameStarted).toBeTruthy()
    })
  })

  describe('when the user clicks on a card', () => {
    it('should update the selected items', () => {
      const { result } = renderHook(() => useGame())

      act(() => advanceTimersUntilGameBegins())
      act(() => result.current.handleItemClick(0))

      const { selectedItems } = result.current
      expect(selectedItems).toHaveLength(1)
    })
  })

  describe('when the user clicks on 2 cards with the same key', () => {
    it('should update the matched items and clean the selected items', () => {
      const { result } = renderHook(() => useGame())

      act(() => advanceTimersUntilGameBegins())
      act(() => {
        result.current.handleItemClick(0)
        result.current.handleItemClick(1)
      })

      const { matchedItems, selectedItems } = result.current
      expect(matchedItems).toHaveLength(1)
      expect(selectedItems).toHaveLength(0)
    })
  })

  describe('when the user clicks on 2 cards with different keys', () => {
    it('should clean the selected items after 1 second', () => {
      const { result } = renderHook(() => useGame())

      act(() => advanceTimersUntilGameBegins())
      act(() => {
        result.current.handleItemClick(0)
        result.current.handleItemClick(2)
      })
      act(() => advanceOneSecond())

      const { selectedItems } = result.current
      expect(selectedItems).toHaveLength(0)
    })
  })

  describe('when the user matches all the cards', () => {
    it('should finish the game', () => {
      const { result } = renderHook(() => useGame())

      act(() => advanceTimersUntilGameBegins())
      act(() => {
        result.current.handleItemClick(0)
        result.current.handleItemClick(1)
      })
      act(() => {
        result.current.handleItemClick(2)
        result.current.handleItemClick(3)
      })

      const { isGameOver } = result.current
      expect(isGameOver).toBeTruthy()
    })
  })

  describe('when the user restarts the game', () => {
    it('should return the initial state and start the game', () => {
      const { result } = renderHook(() => useGame())

      act(() => advanceTimersUntilGameBegins())
      act(() => {
        result.current.handleItemClick(0)
        result.current.handleItemClick(1)
      })
      act(() => {
        result.current.restartGame()
      })

      const { board, isGameStarted, isGameOver, time, matchedItems, selectedItems } = result.current
      expect(board).toHaveLength(mockedGame.board.length)
      expect(isGameStarted).toBeTruthy()
      expect(isGameOver).toBeFalsy()
      expect(time).toBe('00:00')
      expect(matchedItems).toHaveLength(0)
      expect(selectedItems).toHaveLength(0)
    })
  })
})
