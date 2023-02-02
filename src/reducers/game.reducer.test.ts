import {
  cleanSelectedItems,
  endGame,
  restartGame,
  startGame,
  updateMatchedItems,
  updateSelectedItems,
} from '../actions/game.creators'
import { initializeGame } from '../usecases/game'
import { gameReducer } from './game.reducer'

describe('#gameReducer', () => {
  describe('when the action is "START_GAME"', () => {
    it('should return the game with the start time', () => {
      const START_GAME = startGame()
      const state = gameReducer(initializeGame(), START_GAME)

      expect(state.startTime).toBeDefined()
    })
  })

  describe('when the action is "END_GAME"', () => {
    it('should return the game with the end time', () => {
      const END_GAME = endGame()
      const state = gameReducer(initializeGame(), END_GAME)

      expect(state.endTime).toBeDefined()
    })
  })

  describe('when the action is "RESTART_GAME"', () => {
    it('should return the initial game with the start time', () => {
      const RESTART_GAME = restartGame()
      const game = initializeGame()
      const gamePlayed = { ...game, selectedItems: [1, 2], matchedItems: ['test'] }
      const state = gameReducer(gamePlayed, RESTART_GAME)

      expect(state.selectedItems).toEqual([])
      expect(state.matchedItems).toEqual([])
    })
  })

  describe('when the action is "CLEAN_SELECTED_ITEMS"', () => {
    it('should return the game with the selected items empty', () => {
      const CLEAN_SELECTED_ITEMS = cleanSelectedItems()
      const game = initializeGame()
      const gamePlayed = { ...game, selectedItems: [1, 2], matchedItems: ['test'] }
      const state = gameReducer(gamePlayed, CLEAN_SELECTED_ITEMS)

      expect(state.selectedItems).toEqual([])
    })
  })

  describe('when the action is "UPDATE_MATCHED_ITEMS"', () => {
    it('should return the game with the matched items updated', () => {
      const UPDATE_MATCHED_ITEMS = updateMatchedItems('foo')
      const game = initializeGame()
      const gamePlayed = { ...game, matchedItems: ['bar'] }
      const state = gameReducer(gamePlayed, UPDATE_MATCHED_ITEMS)

      expect(state.matchedItems).toEqual(['bar', 'foo'])
    })
    it('should not update the matched items if the item is already matched', () => {
      const UPDATE_MATCHED_ITEMS = updateMatchedItems('foo')
      const game = initializeGame()
      const gamePlayed = { ...game, matchedItems: ['foo'] }
      const state = gameReducer(gamePlayed, UPDATE_MATCHED_ITEMS)

      expect(state.matchedItems).toEqual(['foo'])
    })
  })

  describe('when the action is "UPDATE_SELECTED_ITEMS"', () => {
    it('should return the game with the selected items updated', () => {
      const UPDATE_SELECTED_ITEMS = updateSelectedItems(2)
      const game = initializeGame()
      const gamePlayed = { ...game, selectedItems: [1] }
      const state = gameReducer(gamePlayed, UPDATE_SELECTED_ITEMS)

      expect(state.selectedItems).toEqual([1, 2])
    })
    it('should not update the selected items if the item is already selected', () => {
      const UPDATE_SELECTED_ITEMS = updateSelectedItems(2)
      const game = initializeGame()
      const gamePlayed = { ...game, selectedItems: [2] }
      const state = gameReducer(gamePlayed, UPDATE_SELECTED_ITEMS)

      expect(state.selectedItems).toEqual([2])
    })
  })
})
