import {
  CleanSelectedItemsAction,
  EndGameAction,
  GameActionTypes,
  RestartGameAction,
  StartGameAction,
  UpdateMatchedItemsAction,
  UpdateSelectedItemsAction,
} from './game.actions'

export function startGame(): StartGameAction {
  return {
    type: GameActionTypes.START_GAME,
  }
}

export function endGame(): EndGameAction {
  return {
    type: GameActionTypes.END_GAME,
  }
}

export function restartGame(): RestartGameAction {
  return {
    type: GameActionTypes.RESTART_GAME,
  }
}

export function cleanSelectedItems(): CleanSelectedItemsAction {
  return {
    type: GameActionTypes.CLEAN_SELECTED_ITEMS,
  }
}

export function updateMatchedItems(key: string): UpdateMatchedItemsAction {
  return {
    type: GameActionTypes.UPDATE_MATCHED_ITEMS,
    payload: key,
  }
}

export function updateSelectedItems(index: number): UpdateSelectedItemsAction {
  return {
    type: GameActionTypes.UPDATE_SELECTED_ITEMS,
    payload: index,
  }
}
