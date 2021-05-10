import * as actionTypes from 'actionTypes';
import getAppInitialState from '../js/getAppInitialState'

export const setCurrentPage = (page) => {
  return {
    type: actionTypes.CURRENT_PAGE,
    payload: page
  }
}

export const setStartGameTime = (time) => {
  return {
    type: actionTypes.START_GAME_TIME,
    payload: time
  }
}

export const setFirstCard = (card) => {
    return {
		  type: actionTypes.FIRST_CARD,
      payload: card
    }
}

export const setSecondCard = (card) => {
  return {
    type: actionTypes.SECOND_CARD,
    payload: card
  }
}

export const setMatch = (card) => {
  return {
    type: actionTypes.MATCHES,
    payload: card
  }
}

export const resetGame = () => {
  return {
    type: actionTypes.RESET_GAME,
    payload: {...getAppInitialState()}
  }
}