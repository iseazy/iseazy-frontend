import * as actionTypes from 'actionTypes'

export const firstCard = (state = null, action) => {
	switch(action.type) {
		case actionTypes.FIRST_CARD:
			return action.payload
		case actionTypes.RESET_GAME:
			return action.payload.firstCard
		default:
			return state
	}
}