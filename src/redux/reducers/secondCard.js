import * as actionTypes from 'actionTypes'

export const secondCard = (state = null, action) => {
	switch(action.type) {
		case actionTypes.SECOND_CARD:
			return action.payload
		case actionTypes.RESET_GAME:
			return action.payload.secondCard
		default:
			return state
	}
}