import * as actionTypes from 'actionTypes'

export const cards = (state = null, action) => {
	switch(action.type) {
		case actionTypes.CARDS:
			return action.payload
		case actionTypes.RESET_GAME:
			return action.payload.cards
		default:
			return state
	}
}