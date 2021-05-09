import * as actionTypes from 'actionTypes'

export const startGameTime = (state = null, action) => {
	switch(action.type) {
		case actionTypes.START_GAME_TIME:
			return action.payload
		case actionTypes.RESET_GAME:
			return new Date().getTime()
		default:
			return state
	}
}