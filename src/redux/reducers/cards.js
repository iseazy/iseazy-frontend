import * as actionTypes from 'actionTypes'
import getInitializedCards from '../../js/cards'

export const cards = (state = getInitializedCards(), action) => {
	switch(action.type) {
		case actionTypes.CARDS:
			return action.payload
		case actionTypes.RESET_GAME:
			return getInitializedCards()
		default:
			return state
	}
}