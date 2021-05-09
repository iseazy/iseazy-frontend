import * as actionTypes from 'actionTypes'

export const secondCard = (state = "", action) => {
	switch(action.type) {
		case actionTypes.SECOND_CARD:
			return action.payload
		case actionTypes.RESET_GAME:
			return ""
		default:
			return state
	}
}