export enum GameActionTypes {
  START_GAME,
  END_GAME,
  RESTART_GAME,
  CLEAN_SELECTED_ITEMS,
  UPDATE_MATCHED_ITEMS,
  UPDATE_SELECTED_ITEMS,
}

export interface StartGameAction {
  type: GameActionTypes.START_GAME
}

export interface EndGameAction {
  type: GameActionTypes.END_GAME
}

export interface RestartGameAction {
  type: GameActionTypes.RESTART_GAME
}

export interface CleanSelectedItemsAction {
  type: GameActionTypes.CLEAN_SELECTED_ITEMS
}

export interface UpdateMatchedItemsAction {
  type: GameActionTypes.UPDATE_MATCHED_ITEMS
  payload: string
}

export interface UpdateSelectedItemsAction {
  type: GameActionTypes.UPDATE_SELECTED_ITEMS
  payload: number
}

export type GameAction =
  | StartGameAction
  | EndGameAction
  | RestartGameAction
  | CleanSelectedItemsAction
  | UpdateMatchedItemsAction
  | UpdateSelectedItemsAction
