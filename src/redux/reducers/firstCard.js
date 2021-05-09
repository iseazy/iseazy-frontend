import * as actionTypes from 'actionTypes'

export const firstCard = (state = "", action) => {
	switch(action.type) {
		case actionTypes.FIRST_CARD:
			return action.payload
		case actionTypes.RESET_GAME:
			return ""
		default:
			return state
	}
}