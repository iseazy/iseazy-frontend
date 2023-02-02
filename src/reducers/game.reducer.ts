import { GameAction, GameActionTypes } from '../actions/game.actions'
import { Game } from '../entities/game.entity'
import { initializeGame } from '../usecases/game'

export function gameReducer(state: Game, action: GameAction): Game {
  switch (action.type) {
    case GameActionTypes.START_GAME:
      return { ...state, startTime: Date.now() }
    case GameActionTypes.END_GAME:
      return { ...state, endTime: Date.now() }
    case GameActionTypes.RESTART_GAME:
      return initializeGame()
    case GameActionTypes.CLEAN_SELECTED_ITEMS:
      return { ...state, selectedItems: [] }
    case GameActionTypes.UPDATE_MATCHED_ITEMS:
      if (state.matchedItems.includes(action.payload)) return state
      return { ...state, matchedItems: [...state.matchedItems, action.payload] }
    case GameActionTypes.UPDATE_SELECTED_ITEMS:
      if (state.selectedItems.includes(action.payload)) return state
      return { ...state, selectedItems: [...state.selectedItems, action.payload] }
    default:
      return state
  }
}
